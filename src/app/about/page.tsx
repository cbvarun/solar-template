import { siteConfig, t } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/sections/section";
import { StatsSection } from "@/components/sections/stats-section";
import { TrustBadges } from "@/components/sections/trust-badges";
import { CTASection } from "@/components/sections/cta-section";

export const metadata = buildMetadata({
  title: "About Us",
  description: `${siteConfig.company.name}: who we are, how we work and what we stand for.`,
  path: "/about/",
});

export default function AboutPage() {
  const { about, company } = siteConfig;
  return (
    <>
      <PageHeader title={`About ${company.name}`} intro={t(company.tagline)} trail={[{ name: "About Us", path: "/about/" }]} />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-5 text-lg leading-relaxed">
            {about.story.map((p, i) => (
              <p key={i}>{t(p)}</p>
            ))}
          </div>
          <aside className="h-fit rounded-lg border bg-card p-6 shadow-card">
            <h2 className="text-xl font-semibold">Our mission</h2>
            <p className="mt-3 text-lg">{t(about.mission)}</p>
            <p className="mt-6 text-sm text-muted-foreground">Serving customers since {company.foundedYear}</p>
          </aside>
        </div>
      </Section>

      <StatsSection />

      <Section tone="muted" title="What we care about">
        <ul className="grid gap-6 sm:grid-cols-2">
          {about.values.map((v) => (
            <li key={v.title} className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-muted-foreground">{t(v.body)}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="How we work">
        <p className="max-w-3xl text-lg leading-relaxed">{t(about.philosophy)}</p>
        {about.certifications.length > 0 && (
          <div className="mt-8">
            <h3 className="mb-3 text-lg font-semibold">Certifications and approvals</h3>
            <TrustBadges />
          </div>
        )}
      </Section>

      <CTASection headline="Talk to the team" body="Book a consultation and we'll tell you honestly whether solar suits your roof and your bills." />
    </>
  );
}
