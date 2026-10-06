import { siteConfig, t } from "@/lib/config";
import { getRealTestimonials } from "@/lib/content";
import { absoluteUrl } from "@/lib/utils";
import type { Faq, Service } from "@/types/content";

const base = () => siteConfig.seo.siteUrl;
const abs = (path: string) => absoluteUrl(base(), path);

const orgId = () => `${abs("/")}#business`;

export function sameAsLinks(): string[] {
  return Object.values(siteConfig.social).filter((v): v is string => Boolean(v));
}

/**
 * schema.org has no dedicated "solar installer" type, so we use
 * HomeAndConstructionBusiness + LocalBusiness, and describe the work in `makesOffer`.
 * Reviews are included ONLY for real (non-sample) testimonials.
 */
export function localBusinessJsonLd(services: Service[]) {
  const c = siteConfig.contact;
  const real = getRealTestimonials();

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": orgId(),
    name: siteConfig.company.name,
    legalName: siteConfig.company.legalName,
    description: siteConfig.company.description,
    url: abs("/"),
    logo: abs(siteConfig.company.logo.light),
    image: abs(siteConfig.company.ogImage),
    telephone: c.phone,
    email: c.email,
    foundingDate: String(siteConfig.company.foundedYear),
    ...(siteConfig.seo.priceRange ? { priceRange: siteConfig.seo.priceRange } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: [c.address.line1, c.address.line2].filter(Boolean).join(", "),
      addressLocality: c.address.city,
      addressRegion: c.address.state,
      postalCode: c.address.postalCode,
      addressCountry: c.address.country,
    },
    ...(siteConfig.seo.geo
      ? { geo: { "@type": "GeoCoordinates", latitude: siteConfig.seo.geo.lat, longitude: siteConfig.seo.geo.lng } }
      : {}),
    areaServed: siteConfig.serviceAreas.primaryCities.map((name) => ({ "@type": "City", name })),
    sameAs: sameAsLinks(),
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, url: abs(`/services/${s.slug}/`) },
    })),
    ...(real.length > 0
      ? {
          review: real.map((r) => ({
            "@type": "Review",
            reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
            author: { "@type": "Person", name: r.name },
            reviewBody: r.quote,
          })),
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: Number((real.reduce((n, r) => n + r.rating, 0) / real.length).toFixed(1)),
            reviewCount: real.length,
            bestRating: 5,
          },
        }
      : {}),
  };
}

export function serviceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: t(service.seoDescription),
    serviceType: service.title,
    url: abs(`/services/${service.slug}/`),
    provider: { "@id": orgId() },
    areaServed: siteConfig.serviceAreas.primaryCities.map((name) => ({ "@type": "City", name })),
  };
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}
