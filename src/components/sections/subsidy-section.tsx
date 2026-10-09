import { CheckCircle2, ExternalLink } from "lucide-react";
import { siteConfig, t } from "@/lib/config";
import { Section } from "@/components/sections/section";
import { QuoteButton } from "@/components/forms/quote-sheet";

/** Government subsidy amounts plus what we help with. Renders nothing if home.subsidy is not set. */
export function SubsidySection() {
  const subsidy = siteConfig.home.subsidy;
  if (!subsidy) return null;

  return (
    <Section id="subsidy" title={t(subsidy.headline)} intro={t(subsidy.intro)}>
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-lg border border-primary/25 bg-primary/5 p-6 sm:p-8">
          <dl className="grid gap-4 sm:grid-cols-3">
            {subsidy.tiers.map((tier) => (
              // dt before dd for screen readers; flex-col-reverse shows the amount first
              <div key={tier.label} className="flex flex-col-reverse justify-end rounded-md bg-background p-4 shadow-card">
                <dt className="mt-1 text-sm text-muted-foreground">{t(tier.label)}</dt>
                <dd className="font-heading text-2xl font-bold text-primary">{tier.amount}</dd>
              </div>
            ))}
          </dl>
          {subsidy.footnote && <p className="mt-5 text-sm text-muted-foreground">{t(subsidy.footnote)}</p>}
          <p className="mt-3 text-sm text-muted-foreground">
            Amounts as published on the{" "}
            <a
              href={subsidy.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-foreground underline underline-offset-4"
            >
              official portal
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>{" "}
            ({subsidy.checkedOn}). {t(siteConfig.regional.subsidyNote)}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">{t(subsidy.helpHeadline)}</h3>
          <ul className="mt-4 space-y-2.5">
            {subsidy.helpItems.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span>{t(item)}</span>
              </li>
            ))}
          </ul>
          <QuoteButton size="lg" className="mt-6 w-full sm:w-auto">
            {subsidy.ctaLabel}
          </QuoteButton>
        </div>
      </div>
    </Section>
  );
}
