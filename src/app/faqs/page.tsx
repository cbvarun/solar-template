import { siteConfig } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";
import { getAllFaqs, getFaqGroups } from "@/lib/content";
import { faqJsonLd } from "@/lib/jsonld";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/sections/section";
import { FAQAccordion } from "@/components/faq/faq-accordion";
import { JsonLd } from "@/components/seo/json-ld";
import { CTASection } from "@/components/sections/cta-section";

export const metadata = buildMetadata({
  title: "Rooftop Solar FAQs",
  description: `Answers on solar pricing, subsidy, net metering, installation, maintenance, warranties and commercial solar from ${siteConfig.company.name}.`,
  path: "/faqs/",
});

export default function FaqsPage() {
  const groups = getFaqGroups();
  return (
    <>
      <JsonLd data={faqJsonLd(getAllFaqs())} />
      <PageHeader
        title="Frequently asked questions"
        intro="Straight answers on cost, approvals, installation and upkeep."
        trail={[{ name: "FAQs", path: "/faqs/" }]}
      >
        <nav aria-label="FAQ topics" className="mt-6">
          <ul className="flex flex-wrap gap-2">
            {groups.map((g) => (
              <li key={g.id}>
                <a href={`#${g.id}`} className="inline-flex min-h-11 items-center rounded-full border bg-card px-4 text-sm font-medium hover:border-primary hover:text-primary">
                  {g.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      {groups.map((g, i) => (
        <Section key={g.id} id={g.id} title={g.title} tone={i % 2 === 1 ? "muted" : "plain"} className="scroll-mt-20">
          <div className="max-w-3xl">
            <FAQAccordion faqs={g.faqs} idPrefix={g.id} />
          </div>
        </Section>
      ))}

      <CTASection headline="Still have a question?" body="Ask us directly. We'll answer in plain language." />
    </>
  );
}
