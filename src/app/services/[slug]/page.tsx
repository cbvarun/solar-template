import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { t } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";
import { getRelatedServices, getServiceBySlug, getServices } from "@/lib/content";
import { faqJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/sections/section";
import { ServiceCard } from "@/components/cards/service-card";
import { FAQAccordion } from "@/components/faq/faq-accordion";
import { JsonLd } from "@/components/seo/json-ld";
import { LeadSection } from "@/components/sections/lead-section";
import { QuoteButton } from "@/components/forms/quote-sheet";
import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button";

export const dynamicParams = false;

export function generateStaticParams() {
  return getServices().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}/`,
    image: service.image.src.endsWith(".svg") ? undefined : service.image.src,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service);

  return (
    <>
      <JsonLd data={[serviceJsonLd(service), faqJsonLd(service.faqs)]} />
      <PageHeader
        title={service.title}
        intro={service.summary}
        trail={[
          { name: "Services", path: "/services/" },
          { name: service.title, path: `/services/${service.slug}/` },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_340px]">
          <div className="space-y-12">
            <Image
              src={service.image.src}
              alt={service.image.alt}
              width={960}
              height={540}
              priority
              className="aspect-video w-full rounded-lg object-cover"
            />

            <div className="space-y-4 text-lg leading-relaxed">
              {service.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div>
              <h2 className="text-2xl font-bold">Who this is for</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.audience.map((a) => (
                  <li key={a} className="rounded-md border bg-card p-4">
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold">What&apos;s included</h2>
              <ul className="mt-4 space-y-3">
                {service.included.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold">How it works</h2>
              <ol className="mt-5 space-y-5">
                {service.process.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-primary font-heading text-sm font-bold text-primary"
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold">
                        <span className="sr-only">Step {i + 1}: </span>
                        {step.title}
                      </h3>
                      <p className="mt-1 text-muted-foreground">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-lg border-l-4 border-secondary bg-muted/60 p-6">
              <h2 className="text-xl font-bold">{service.pricing.headline}</h2>
              <p className="mt-2 text-muted-foreground">{service.pricing.body}</p>
              <QuoteButton className="mt-5">{service.pricing.ctaLabel}</QuoteButton>
            </div>
          </div>

          <aside className="h-fit space-y-3 rounded-lg border bg-card p-6 shadow-card lg:sticky lg:top-28">
            <h2 className="text-lg font-semibold">Talk to us about this</h2>
            <p className="text-sm text-muted-foreground">Get a written quote, or ask a question on WhatsApp.</p>
            <QuoteButton size="lg" className="w-full">
              {service.pricing.ctaLabel}
            </QuoteButton>
            <WhatsAppButton service={service.title} size="lg" className="w-full" />
          </aside>
        </div>
      </Section>

      <Section tone="muted" title={`${service.title}: common questions`}>
        <div className="max-w-3xl">
          <FAQAccordion faqs={service.faqs} idPrefix={service.slug} />
        </div>
      </Section>

      {related.length > 0 && (
        <Section title="Related services">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <p className="mt-6">
            <Link href="/services/" className="font-semibold text-primary underline-offset-4 hover:underline">
              View all services
            </Link>
          </p>
        </Section>
      )}

      <LeadSection
        source={`service:${service.slug}`}
        defaultService={service.title}
        service={service.title}
        heading={t("Get a quote for this service")}
      />
    </>
  );
}
