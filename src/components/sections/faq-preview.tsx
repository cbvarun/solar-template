import Link from "next/link";
import { Section } from "@/components/sections/section";
import { FAQAccordion } from "@/components/faq/faq-accordion";
import { JsonLd } from "@/components/seo/json-ld";
import { getFaqPreview } from "@/lib/content";
import { faqJsonLd } from "@/lib/jsonld";

export function FAQPreview() {
  const faqs = getFaqPreview(6);
  return (
    <Section id="faq" tone="muted" title="Questions we hear most">
      <JsonLd data={faqJsonLd(faqs)} />
      <div className="max-w-3xl">
        <FAQAccordion faqs={faqs} idPrefix="home" />
        <p className="mt-6">
          <Link href="/faqs/" className="font-semibold text-primary underline-offset-4 hover:underline">
            Read all FAQs
          </Link>
        </p>
      </div>
    </Section>
  );
}
