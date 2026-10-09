import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { getLocations, getProjects, getServices, getSystems } from "@/lib/content";
import { absoluteUrl } from "@/lib/utils";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.seo.siteUrl;
  const f = siteConfig.features;
  const now = new Date();
  const entry = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: absoluteUrl(base, path),
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    entry("/", 1, "weekly"),
    entry("/about/", 0.6),
    entry("/services/", 0.9),
    ...getServices().map((s) => entry(`/services/${s.slug}/`, 0.8)),
    ...getSystems().map((s) => entry(`/solar/${s.slug}/`, 0.8)),
    ...(f.projects
      ? [
          entry("/projects/", 0.6),
          // placeholder projects are noindex, so keep them out of the sitemap
          ...getProjects().filter((p) => !p.isSample).map((p) => entry(`/projects/${p.slug}/`, 0.5)),
        ]
      : []),
    ...(f.serviceAreaPages
      ? [entry("/service-areas/", 0.7), ...getLocations().map((l) => entry(`/service-areas/${l.slug}/`, 0.7))]
      : []),
    entry("/contact/", 0.8),
    entry("/faqs/", 0.6),
    entry("/privacy-policy/", 0.2, "yearly"),
    entry("/terms/", 0.2, "yearly"),
  ];
}
