import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { siteConfig, t } from "@/lib/config";
import { getServiceBySlug, getSystemByKw } from "@/lib/content";
import { subsidyForKw } from "@/lib/subsidy";
import { formatINR } from "@/lib/utils";
import { Section } from "@/components/sections/section";
import { QuoteButton } from "@/components/forms/quote-sheet";

/** Popular system sizes, without prices. Each card opens the quote form pre-filled. */
export function PackagesSection() {
  const packages = siteConfig.home.packages;
  if (!packages) return null;

  const { unitsPerKwPerMonth } = siteConfig.home.savings;
  const bands = siteConfig.home.subsidy?.bands;

  return (
    <Section id="packages" tone="muted" title={t(packages.headline)} intro={packages.intro && t(packages.intro)}>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {packages.items.map((item) => {
          const service = item.service ? getServiceBySlug(item.service) : undefined;
          if (item.service && !service) {
            throw new Error(`home.packages: unknown service slug "${item.service}" on "${item.name}"`);
          }
          const subsidy = item.kw && bands ? subsidyForKw(item.kw, bands) : 0;
          const sizePage = item.kw ? getSystemByKw(item.kw) : undefined;

          return (
            <li key={item.name} className="flex flex-col rounded-lg border bg-card p-6 shadow-card">
              <h3 className="font-heading text-2xl font-bold">{item.name}</h3>
              <p className="mt-1 text-muted-foreground">{t(item.tagline)}</p>

              {(item.kw || subsidy > 0) && (
                <dl className="mt-4 space-y-1 rounded-md bg-muted p-3 text-sm">
                  {item.kw && (
                    <div className="flex justify-between gap-2">
                      <dt className="text-muted-foreground">Generates about</dt>
                      <dd className="font-semibold">{Math.round(item.kw * unitsPerKwPerMonth)} units/month</dd>
                    </div>
                  )}
                  {subsidy > 0 && (
                    <div className="flex justify-between gap-2">
                      <dt className="text-muted-foreground">Home subsidy</dt>
                      <dd className="font-semibold text-primary">up to {formatINR(subsidy)}</dd>
                    </div>
                  )}
                </dl>
              )}

              <ul className="mt-4 flex-1 space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{t(point)}</span>
                  </li>
                ))}
              </ul>

              {sizePage && (
                <Link
                  href={`/solar/${sizePage.slug}/`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                  More about {item.name} systems
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}
              <QuoteButton
                variant="outline"
                className="mt-4 w-full"
                prefill={{
                  service: service?.title,
                  message: `I'm interested in the ${item.name} system.`,
                  source: `package: ${item.name}`,
                }}
              >
                {item.ctaLabel}
              </QuoteButton>
            </li>
          );
        })}
      </ul>
      {packages.footnote && <p className="mt-6 text-sm text-muted-foreground">{t(packages.footnote)}</p>}
    </Section>
  );
}
