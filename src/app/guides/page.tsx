import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";
import { getGuides } from "@/lib/content";
import { formatGuideDate } from "@/lib/utils";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/sections/section";
import { CTASection } from "@/components/sections/cta-section";

export const metadata = buildMetadata({
  title: "Rooftop Solar Guides",
  description: `Practical guides on solar loans, net metering, subsidies and maintenance for homes and businesses, from ${siteConfig.company.name}.`,
  path: "/guides/",
});

export default function GuidesPage() {
  const guides = getGuides();
  if (guides.length === 0) notFound();

  return (
    <>
      <PageHeader
        title="Guides"
        intro="Straight answers on paying for solar, getting approvals and looking after your system."
        trail={[{ name: "Guides", path: "/guides/" }]}
      />
      <Section>
        <ul className="grid gap-6 md:grid-cols-2">
          {guides.map((g) => (
            <li key={g.slug}>
              <article className="group relative flex h-full flex-col rounded-lg border bg-card p-6 shadow-card transition-shadow hover:shadow-lg">
                <p className="text-sm text-muted-foreground">
                  <time dateTime={g.updated}>Updated {formatGuideDate(g.updated)}</time>
                </p>
                <h2 className="mt-2 text-xl font-semibold leading-snug">
                  <Link
                    href={`/guides/${g.slug}/`}
                    className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:rounded-lg focus-visible:after:ring-2 focus-visible:after:ring-ring"
                  >
                    {g.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-muted-foreground">{g.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Read the guide
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </article>
            </li>
          ))}
        </ul>
      </Section>
      <CTASection />
    </>
  );
}
