import Link from "next/link";
import { notFound } from "next/navigation";
import { Info } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { getGuideBySlug, getGuides, getServiceBySlug } from "@/lib/content";
import { articleJsonLd, faqJsonLd } from "@/lib/jsonld";
import { formatGuideDate } from "@/lib/utils";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/sections/section";
import { ServiceCard } from "@/components/cards/service-card";
import { FAQAccordion } from "@/components/faq/faq-accordion";
import { JsonLd } from "@/components/seo/json-ld";
import { LeadSection } from "@/components/sections/lead-section";

export const dynamicParams = false;

export function generateStaticParams() {
  return getGuides().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return buildMetadata({
    title: guide.seoTitle,
    description: guide.seoDescription,
    path: `/guides/${guide.slug}/`,
    type: "article",
  });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const related = guide.related.flatMap((s) => {
    const service = getServiceBySlug(s);
    return service ? [service] : [];
  });
  const relatedGuides = guide.relatedGuides.flatMap((s) => {
    const g = getGuideBySlug(s);
    return g ? [g] : [];
  });

  return (
    <>
      <JsonLd data={guide.faqs.length ? [articleJsonLd(guide), faqJsonLd(guide.faqs)] : articleJsonLd(guide)} />
      <PageHeader
        title={guide.title}
        intro={guide.summary}
        trail={[
          { name: "Guides", path: "/guides/" },
          { name: guide.title, path: `/guides/${guide.slug}/` },
        ]}
      >
        <p className="mt-4 text-sm text-muted-foreground">
          <time dateTime={guide.updated}>Updated {formatGuideDate(guide.updated)}</time>
        </p>
      </PageHeader>

      <Section>
        <article className="max-w-3xl space-y-10 text-lg leading-relaxed">
          {guide.sections.map((s) => (
            <section key={s.heading} className="space-y-4">
              <h2 className="text-2xl font-bold leading-snug">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {s.table && (
                <div className="overflow-x-auto rounded-lg border">
                  <table className="w-full min-w-[34rem] border-collapse text-left text-base">
                    <thead className="bg-muted/60">
                      <tr>
                        {s.table.head.map((h, i) => (
                          <th key={i} scope="col" className="px-4 py-3 font-semibold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {s.table.rows.map((row, r) => (
                        <tr key={r} className="border-t">
                          {row.map((cell, c) =>
                            c === 0 ? (
                              <th key={c} scope="row" className="px-4 py-3 align-top font-medium">
                                {cell}
                              </th>
                            ) : (
                              <td key={c} className="px-4 py-3 align-top">
                                {cell}
                              </td>
                            ),
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {s.list &&
                (s.ordered ? (
                  <ol className="list-decimal space-y-2 pl-6 marker:font-semibold marker:text-primary">
                    {s.list.map((item) => (
                      <li key={item} className="pl-1">{item}</li>
                    ))}
                  </ol>
                ) : (
                  <ul className="list-disc space-y-2 pl-6 marker:text-primary">
                    {s.list.map((item) => (
                      <li key={item} className="pl-1">{item}</li>
                    ))}
                  </ul>
                ))}
              {s.note && (
                <p className="flex gap-3 rounded-lg border-l-4 border-secondary bg-muted/60 p-4 text-base">
                  <Info className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{s.note}</span>
                </p>
              )}
            </section>
          ))}

          {relatedGuides.length > 0 && (
            <nav aria-label="Related guides" className="rounded-lg border p-5 text-base">
              <h2 className="text-lg font-semibold">Related guides</h2>
              <ul className="mt-2 space-y-1">
                {relatedGuides.map((g) => (
                  <li key={g.slug}>
                    <Link href={`/guides/${g.slug}/`} className="text-primary underline-offset-4 hover:underline">
                      {g.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {guide.sources.length > 0 && (
            <section className="rounded-lg border bg-muted/40 p-5 text-base">
              <h2 className="text-lg font-semibold">Sources</h2>
              <ul className="mt-2 space-y-1">
                {guide.sources.map((src) => (
                  <li key={src.url}>
                    <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-4 hover:underline">
                      {src.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">
                Rates, rules and subsidy amounts change. We check them when we update this guide; confirm the latest with the
                source before you apply.
              </p>
            </section>
          )}
        </article>
      </Section>

      {guide.faqs.length > 0 && (
        <Section tone="muted" title="Common questions">
          <div className="max-w-3xl">
            <FAQAccordion faqs={guide.faqs} idPrefix={guide.slug} />
          </div>
        </Section>
      )}

      {related.length > 0 && (
        <Section title="Related services">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <p className="mt-6">
            <Link href="/guides/" className="font-semibold text-primary underline-offset-4 hover:underline">
              More guides
            </Link>
          </p>
        </Section>
      )}

      <LeadSection source={`guide:${guide.slug}`} heading="Ask us about your home" />
    </>
  );
}
