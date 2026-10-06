import Image from "next/image";
import Link from "next/link";
import { formatINR } from "@/lib/utils";
import type { Project } from "@/types/content";

export function ProjectCard({ project }: { project: Project }) {
  const where = [project.location.area, project.location.city].filter(Boolean).join(", ");
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border bg-card shadow-card transition-shadow hover:shadow-lg">
      <div className="relative">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={640}
          height={420}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover"
        />
        {project.isSample && (
          <span className="absolute left-3 top-3 rounded-full bg-foreground px-2.5 py-1 text-xs font-medium text-background">
            Sample project
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm text-muted-foreground">
          {project.customerType} · {where}
        </p>
        <h3 className="mt-1 text-lg font-semibold leading-snug">
          <Link
            href={`/projects/${project.slug}/`}
            className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-ring"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{project.summary}</p>
        <dl className="mt-4 flex gap-6 border-t pt-4 text-sm">
          <div>
            <dt className="text-muted-foreground">System size</dt>
            <dd className="font-semibold">{project.systemSizeKw} kW</dd>
          </div>
          {project.estimatedMonthlySavingsInr !== undefined && (
            <div>
              <dt className="text-muted-foreground">Est. savings</dt>
              <dd className="font-semibold">{formatINR(project.estimatedMonthlySavingsInr)}/month</dd>
            </div>
          )}
        </dl>
      </div>
    </article>
  );
}
