import Image from "next/image";
import { notFound } from "next/navigation";
import { siteConfig, t } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";
import { getProjectBySlug, getProjects } from "@/lib/content";
import { formatINR } from "@/lib/utils";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/sections/section";
import { CTASection } from "@/components/sections/cta-section";
import { TriangleAlert } from "lucide-react";

export const dynamicParams = false;

export function generateStaticParams() {
  // Static export needs at least one path. With projects switched off, these pages render the 404 page.
  return getProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProjectBySlug(slug);
  if (!p) return {};
  return buildMetadata({
    title: p.title,
    description: `${p.systemSizeKw} kW ${p.customerType.toLowerCase()} rooftop solar system in ${p.location.city}. ${p.summary}`,
    path: `/projects/${p.slug}/`,
    // Placeholder projects should not be indexed.
    noindex: p.isSample,
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project || !siteConfig.features.projects) notFound();

  const where = [project.location.area, project.location.city, project.location.state].filter(Boolean).join(", ");
  const specs: [string, string][] = [
    ["Location", where],
    ["System size", `${project.systemSizeKw} kW`],
    ["Customer type", project.customerType],
    ["Roof type", project.roofType],
    ["Panels", project.panels],
    ["Inverter", project.inverter],
    ["Installed", project.installedOn],
  ];
  const bills =
    project.billBeforeInr !== undefined && project.billAfterInr !== undefined
      ? { before: project.billBeforeInr, after: project.billAfterInr }
      : null;
  if (bills) {
    specs.push(["Monthly bill", `${formatINR(bills.before)} → ${formatINR(bills.after)}`]);
  }
  if (project.estimatedMonthlySavingsInr !== undefined) {
    specs.push(["Estimated savings", `${formatINR(project.estimatedMonthlySavingsInr)} per month`]);
  }

  return (
    <>
      <PageHeader
        title={project.title}
        intro={project.summary}
        trail={[
          { name: "Projects", path: "/projects/" },
          { name: project.title, path: `/projects/${project.slug}/` },
        ]}
      />

      <Section>
        {project.isSample && (
          <div role="note" className="mb-8 flex gap-3 rounded-md border border-secondary bg-secondary/20 p-4 text-sm">
            <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            <p>
              <strong>Sample project.</strong> This is placeholder content. Replace it with a real project in
              src/content/projects.ts and set <code>isSample: false</code>.
            </p>
          </div>
        )}

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-8">
            {bills && (
              <dl className="grid grid-cols-2 gap-4 rounded-lg border bg-card p-5 shadow-card sm:grid-cols-3">
                <div>
                  <dt className="text-sm text-muted-foreground">Bill before solar</dt>
                  <dd className="font-heading text-2xl font-bold">{formatINR(bills.before)}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Bill after solar</dt>
                  <dd className="font-heading text-2xl font-bold text-primary">{formatINR(bills.after)}</dd>
                </div>
                {bills.before > 0 && (
                  <div>
                    <dt className="text-sm text-muted-foreground">Reduction</dt>
                    <dd className="font-heading text-2xl font-bold">
                      {Math.round(((bills.before - bills.after) / bills.before) * 100)}%
                    </dd>
                  </div>
                )}
              </dl>
            )}
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={960}
              height={640}
              priority
              className="aspect-[3/2] w-full rounded-lg object-cover"
            />
            <div className="space-y-4 text-lg leading-relaxed">
              {project.details.map((d, i) => (
                <p key={i}>{t(d)}</p>
              ))}
            </div>
            {project.gallery.length > 1 && (
              <div className="grid grid-cols-2 gap-4">
                {project.gallery.map((g, i) => (
                  <Image key={i} src={g.src} alt={g.alt} width={480} height={320} loading="lazy" className="aspect-[3/2] w-full rounded-lg object-cover" />
                ))}
              </div>
            )}
            {siteConfig.features.testimonials && project.testimonial && (
              <figure className="rounded-lg border-l-4 border-secondary bg-muted/60 p-6">
                <blockquote className="text-lg">“{project.testimonial.quote}”</blockquote>
                <figcaption className="mt-3 text-sm text-muted-foreground">
                  {project.testimonial.name}
                  {project.testimonial.role ? `, ${project.testimonial.role}` : ""}
                </figcaption>
              </figure>
            )}
          </div>

          <aside className="h-fit rounded-lg border bg-card p-6 shadow-card">
            <h2 className="text-lg font-semibold">Project details</h2>
            <dl className="mt-4 divide-y text-sm">
              {specs.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[110px_1fr] gap-3 py-3">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Section>

      <CTASection headline="Planning something similar?" />
    </>
  );
}
