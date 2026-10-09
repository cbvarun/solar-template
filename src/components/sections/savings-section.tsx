import { siteConfig, t } from "@/lib/config";
import { Section } from "@/components/sections/section";
import { SavingsEstimator } from "@/components/sections/savings-estimator";

export function SavingsSection() {
  const { savings } = siteConfig.home;
  return (
    <Section id="savings" tone="muted" title={savings.headline}>
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.15fr]">
        <ul className="space-y-6">
          {savings.benefits.map((b) => (
            <li key={b.title} className="border-l-4 border-secondary pl-4">
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <p className="mt-1 text-muted-foreground">{b.body}</p>
            </li>
          ))}
        </ul>
        <SavingsEstimator
          costPerUnit={savings.costPerUnit}
          unitsPerKwPerMonth={savings.unitsPerKwPerMonth}
          ctaLabel={siteConfig.cta.quoteLabel}
          whatsapp={{
            number: siteConfig.contact.whatsappNumber,
            template: t(siteConfig.contact.whatsappEstimateTemplate),
            label: "Send this estimate on WhatsApp",
          }}
          subsidy={
            siteConfig.home.subsidy?.bands
              ? { scheme: siteConfig.regional.subsidyScheme, bands: siteConfig.home.subsidy.bands }
              : undefined
          }
        />
      </div>
    </Section>
  );
}
