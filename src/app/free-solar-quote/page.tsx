import { CheckCircle2, Phone } from "lucide-react";
import { siteConfig, t } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";
import { LeadForm } from "@/components/forms/lead-form";
import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button";
import { PackagesSection } from "@/components/sections/packages-section";
import { SubsidySection } from "@/components/sections/subsidy-section";
import { SavingsSection } from "@/components/sections/savings-section";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQPreview } from "@/components/sections/faq-preview";
import { CTASection } from "@/components/sections/cta-section";

/**
 * Landing page for ads: the quote form is above the fold, followed by the reasons to act.
 * noindex, and left out of the sitemap, so it doesn't compete with the homepage in search.
 */
export const metadata = buildMetadata({
  title: "Free rooftop solar quote",
  path: "/free-solar-quote/",
  noindex: true,
});

export default function FreeSolarQuotePage() {
  const { hero } = siteConfig.home;
  const landing = siteConfig.landing ?? {
    headline: hero.headline,
    subheadline: hero.subheadline,
    bullets: hero.highlights ?? [],
  };
  const { contact } = siteConfig;

  return (
    <>
      <section className="border-b bg-muted/50">
        <div className="container grid items-start gap-10 py-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:py-16">
          <div>
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">{t(landing.headline)}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{t(landing.subheadline)}</p>
            {landing.bullets.length > 0 && (
              <ul className="mt-6 space-y-3">
                {landing.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{t(b)}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppButton size="lg" label={hero.whatsappCtaLabel} />
              <a
                href={contact.phoneHref}
                className="inline-flex items-center gap-2 font-semibold underline-offset-4 hover:underline"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {contact.phone}
              </a>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-card sm:p-8">
            <h2 className="text-xl font-semibold">Get your free solar quote</h2>
            <p className="mt-1 text-sm text-muted-foreground">Takes under a minute. No obligation.</p>
            <LeadForm source="landing:free-solar-quote" compact className="mt-5" />
          </div>
        </div>
      </section>

      <PackagesSection />
      <SubsidySection />
      <SavingsSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <FAQPreview />
      <CTASection />
    </>
  );
}
