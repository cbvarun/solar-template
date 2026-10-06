import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";
import { getLocationBySlug, getLocations, getNearbyLocations, getServices } from "@/lib/content";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/sections/section";
import { JsonLd } from "@/components/seo/json-ld";
import { LeadSection } from "@/components/sections/lead-section";
import { absoluteUrl } from "@/lib/utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return siteConfig.features.serviceAreaPages ? getLocations().map((l) => ({ slug: l.slug })) : [];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc) return {};
  return buildMetadata({
    title: `Rooftop Solar in ${loc.name}`,
    description: `Rooftop solar installation, cleaning, maintenance and net-metering support in ${loc.name}, ${loc.state}. Get a quote from ${siteConfig.company.name}.`,
    path: `/service-areas/${loc.slug}/`,
  });
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc || !siteConfig.features.serviceAreaPages) notFound();

  const nearby = getNearbyLocations(loc);
  const services = getServices();
  const pageUrl = absoluteUrl(siteConfig.seo.siteUrl, `/service-areas/${loc.slug}/`);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Rooftop solar in ${loc.name}`,
    serviceType: "Rooftop solar installation and maintenance",
    url: pageUrl,
    provider: { "@id": `${absoluteUrl(siteConfig.seo.siteUrl, "/")}#business` },
    areaServed: { "@type": loc.kind === "locality" ? "Place" : "AdministrativeArea", name: `${loc.name}, ${loc.state}` },
  };

  return (
    <>
      <JsonLd data={[serviceLd, breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Service Areas", path: "/service-areas/" },
        { name: loc.name, path: `/service-areas/${loc.slug}/` },
      ])]} />
      <PageHeader
        title={`Rooftop solar in ${loc.name}`}
        intro={loc.intro}
        trail={[
          { name: "Service Areas", path: "/service-areas/" },
          { name: loc.name, path: `/service-areas/${loc.slug}/` },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">What we do in {loc.name}</h2>
            <ul className="mt-4 space-y-3">
              {loc.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {nearby.length > 0 && (
              <div className="mt-10">
                <h2 className="text-2xl font-bold">Nearby areas we also cover</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {nearby.map((n) => (
                    <li key={n.slug}>
                      <Link
                        href={`/service-areas/${n.slug}/`}
                        className="inline-flex min-h-11 items-center rounded-full border bg-card px-4 text-sm font-medium hover:border-primary hover:text-primary"
                      >
                        {n.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-bold">Services available in {loc.name}</h2>
            <ul className="mt-4 divide-y rounded-lg border bg-card">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`} className="block px-4 py-3 hover:bg-muted hover:text-primary">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <LeadSection
        source={`location:${loc.slug}`}
        defaultCity={loc.name}
        city={loc.name}
        heading={`Get a solar quote in ${loc.name}`}
        body={`Tell us about your property in ${loc.name} and we'll arrange a site survey.`}
      />
    </>
  );
}
