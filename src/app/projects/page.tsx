import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";
import { getProjects } from "@/lib/content";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/sections/section";
import { ProjectCard } from "@/components/cards/project-card";
import { CTASection } from "@/components/sections/cta-section";

export const metadata = buildMetadata({
  title: "Projects and Case Studies",
  description: `Rooftop solar installations completed by ${siteConfig.company.name}: system sizes, locations and results.`,
  path: "/projects/",
});

export default function ProjectsPage() {
  if (!siteConfig.features.projects) notFound();
  const projects = getProjects();
  return (
    <>
      <PageHeader
        title="Projects and case studies"
        intro="A look at systems we've designed and installed."
        trail={[{ name: "Projects", path: "/projects/" }]}
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>
      <CTASection headline="Want a system like these?" />
    </>
  );
}
