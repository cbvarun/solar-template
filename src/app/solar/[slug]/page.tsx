import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Info } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";
import { getServiceBySlug, getSystemBySlug, getSystemFacts, getSystems } from "@/lib/content";
import { faqJsonLd } from "@/lib/jsonld";
import { formatINR } from "@/lib/utils";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/sections/section";
import { FAQAccordion } from "@/components/faq/faq-accordion";
import { JsonLd } from "@/components/seo/json-ld";
import { LeadSection } from "@/components/sections/lead-section";
import { QuoteButton } from "@/components/forms/quote-sheet";
import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button";

export const dynamicParams = false;

export function generateStaticParams() {
  return getSystems().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const system = getSystemBySlug(slug);
  if (!system) return {};
  return buildMetadata({ title: system.seoTitle, description: system.seoDescription, path: `/solar/${system.slug}/` });
}

export default async function SystemSizePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const system = getSystemBySlug(slug);
  if (!system) notFound();

  const facts = getSystemFacts(system.kw);
  const residential = getServiceBySlug("residential-rooftop-solar");
  const hybrid = getServiceBySlug("hybrid-solar-battery-backup");
  const prefill = {
    service: residential?.title,
    message: `I'm interested in a ${system.kw} kW system.`,
    source: `system:${system.slug}`,
  };

  const stats: { label: string; value: string; note?: string }[] = [
    { label: "Generates about", value: `${facts.unitsPerMonth} units`, note: "per month, on average" },
    { label: "Roof space", value: `~${facts.roofSqFt} sq ft`, note: `shade-free, about ${facts.panels} panels` },
    { label: "Suits bills around", value: formatINR(facts.typicalBill), note: "per month" },
  ];
  if (facts.subsidy > 0) {
    stats.push({ label: "Home subsidy", value: `up to ${formatINR(facts.subsidy)}`, note: siteConfig.regional.subsidyScheme });
  }

  return (
    <>
      <JsonLd data={faqJsonLd(system.faqs)} />
      <PageHeader
        title={system.title}
        intro={system.summary}
        trail={[
          { name: "Services", path: "/services/" },
          { name: system.title, path: `/solar/${system.slug}/` },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_340px]">
          <div className="space-y-12">
            <dl className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-lg bg-muted p-4">
                  <dt className="mb-1 text-sm text-muted-foreground">{s.label}</dt>
                  <dd className="font-heading text-xl font-bold text-primary sm:text-2xl">{s.value}</dd>
                  {s.note && <dd className="text-xs text-muted-foreground">{s.note}</dd>}
                </div>
              ))}
            </dl>
            <p className="-mt-8 flex gap-2 text-sm text-muted-foreground">
              <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              Rule-of-thumb figures. Real generation depends on your roof direction, shading and season; we confirm
              them at the site survey.
            </p>

            <div className="space-y-4 text-lg leading-relaxed">
              {system.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div>
              <h2 className="text-2xl font-bold">Who a {system.kw} kW system suits</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {system.suits.map((a) => (
                  <li key={a} className="rounded-md border bg-card p-4">
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            {system.considerations.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold">Things to consider</h2>
                <ul className="mt-4 space-y-3">
                  {system.considerations.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="text-muted-foreground">
              See what&apos;s included in an installation on our{" "}
              {residential && (
                <Link href={`/services/${residential.slug}/`} className="font-semibold text-primary underline-offset-4 hover:underline">
                  home rooftop solar
                </Link>
              )}
              {hybrid && (
                <>
                  {" "}and{" "}
                  <Link href={`/services/${hybrid.slug}/`} className="font-semibold text-primary underline-offset-4 hover:underline">
                    hybrid solar with battery backup
                  </Link>
                </>
              )}{" "}
              pages.
            </p>
          </div>

          <aside className="h-fit space-y-3 rounded-lg border bg-card p-6 shadow-card lg:sticky lg:top-28">
            <h2 className="text-lg font-semibold">Is {system.kw} kW right for you?</h2>
            <p className="text-sm text-muted-foreground">
              Send us your electricity bill and we&apos;ll confirm the right size for your home.
            </p>
            <QuoteButton size="lg" className="w-full" prefill={prefill}>
              Get a {system.kw} kW quote
            </QuoteButton>
            <WhatsAppButton service={`a ${system.kw} kW solar system`} size="lg" className="w-full" />
          </aside>
        </div>
      </Section>

      <Section tone="muted" title={`${system.kw} kW solar: common questions`}>
        <div className="max-w-3xl">
          <FAQAccordion faqs={system.faqs} idPrefix={system.slug} />
        </div>
      </Section>

      <LeadSection
        source={`system:${system.slug}`}
        defaultService={residential?.title}
        heading={`Get a quote for a ${system.kw} kW system`}
      />
    </>
  );
}
