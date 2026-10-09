import { z } from "zod";
import { siteConfig, t } from "@/lib/config";
import { formatINR } from "@/lib/utils";
import { systemFacts } from "@/lib/subsidy";
import { services as rawServices } from "@/content/services";
import { systems as rawSystems } from "@/content/systems";
import { projects as rawProjects } from "@/content/projects";
import { locations as rawLocations } from "@/content/locations";
import { testimonials as rawTestimonials } from "@/content/testimonials";
import { faqGroups as rawFaqGroups } from "@/content/faqs";
import { processSteps as rawProcess } from "@/content/process";
import { legalPages as rawLegal } from "@/content/legal";
import {
  serviceSchema,
  systemSizeSchema,
  projectSchema,
  locationSchema,
  testimonialSchema,
  faqGroupSchema,
  processStepSchema,
  legalPageSchema,
  type Service,
  type SystemSize,
  type Project,
  type Location,
  type Testimonial,
  type FaqGroup,
  type Faq,
  type ProcessStep,
  type LegalPage,
} from "@/types/content";

// ---------- helpers ----------

/** Validate content at build time. Bad content fails `next build`. */
function load<S extends z.ZodTypeAny>(name: string, schema: S, data: unknown): z.infer<S> {
  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    const issues = parsed.error.issues.map((i) => `  • ${i.path.join(".")}: ${i.message}`).join("\n");
    throw new Error(`\nInvalid content in src/content/${name}:\n${issues}\n`);
  }
  return parsed.data;
}

/** Resolve {{tokens}} in every string of a content tree. */
function resolveDeep<T>(value: T, extra: Record<string, string | number> = {}): T {
  if (typeof value === "string") return t(value, extra) as T;
  if (Array.isArray(value)) return value.map((v) => resolveDeep(v, extra)) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, resolveDeep(v, extra)]),
    ) as T;
  }
  return value;
}

function assertUnique(name: string, slugs: string[]) {
  const dupes = slugs.filter((s, i) => slugs.indexOf(s) !== i);
  if (dupes.length) throw new Error(`Duplicate slugs in ${name}: ${dupes.join(", ")}`);
}

function assertRefs(name: string, refs: string[], valid: Set<string>) {
  const bad = refs.filter((r) => !valid.has(r));
  if (bad.length) throw new Error(`Unknown slug reference(s) in ${name}: ${bad.join(", ")}`);
}

// ---------- load + validate ----------

const services: Service[] = resolveDeep(load("services.ts", z.array(serviceSchema), rawServices));
/** Rule-of-thumb figures for a size, from the same settings the calculator uses. */
export const getSystemFacts = (kw: number) =>
  systemFacts(kw, {
    costPerUnit: siteConfig.home.savings.costPerUnit,
    unitsPerKwPerMonth: siteConfig.home.savings.unitsPerKwPerMonth,
    bands: siteConfig.home.subsidy?.bands,
  });

const systems: SystemSize[] = load("systems.ts", z.array(systemSizeSchema), rawSystems).map((sys: SystemSize) => {
  const f = getSystemFacts(sys.kw);
  return resolveDeep(sys, {
    units: f.unitsPerMonth,
    roof: f.roofSqFt,
    panels: f.panels,
    bill: formatINR(f.typicalBill),
    subsidy: f.subsidy ? formatINR(f.subsidy) : "set by the scheme",
  });
});
const projects: Project[] = resolveDeep(load("projects.ts", z.array(projectSchema), rawProjects));
const testimonials: Testimonial[] = resolveDeep(
  load("testimonials.ts", z.array(testimonialSchema), rawTestimonials),
);
const faqGroups: FaqGroup[] = resolveDeep(load("faqs.ts", z.array(faqGroupSchema), rawFaqGroups));
const processSteps: ProcessStep[] = resolveDeep(
  load("process.ts", z.array(processStepSchema), rawProcess),
);
const legalPages: LegalPage[] = resolveDeep(load("legal.ts", z.array(legalPageSchema), rawLegal));
const locations: Location[] = load("locations.ts", z.array(locationSchema), rawLocations).map(
  (loc: Location) => resolveDeep(loc, { locationName: loc.name }),
);

assertUnique("services", services.map((s) => s.slug));
assertUnique("projects", projects.map((p) => p.slug));
assertUnique("systems", systems.map((s) => s.slug));
assertUnique("locations", locations.map((l) => l.slug));

const serviceSlugs = new Set(services.map((s) => s.slug));
const locationSlugs = new Set(locations.map((l) => l.slug));
assertRefs("services.related", services.flatMap((s) => s.related), serviceSlugs);
assertRefs("locations.nearby", locations.flatMap((l) => l.nearby), locationSlugs);
assertRefs(
  "testimonials.serviceSlug",
  testimonials.flatMap((x) => (x.serviceSlug ? [x.serviceSlug] : [])),
  serviceSlugs,
);

const sampleCount =
  projects.filter((p) => p.isSample).length + testimonials.filter((x) => x.isSample).length;
if (sampleCount > 0 && process.env.NODE_ENV === "production") {
  console.warn(
    `\n⚠  ${sampleCount} sample project/testimonial entries are still in src/content. Replace them before launch.\n`,
  );
}

// ---------- services ----------

export const getServices = (): Service[] => services;
export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
export const getRelatedServices = (service: Service): Service[] =>
  service.related.flatMap((slug) => {
    const s = getServiceBySlug(slug);
    return s ? [s] : [];
  });

/** Options for the lead form's "Interested service" dropdown. */
export const getServiceOptions = (): string[] => [...services.map((s) => s.title), "Not sure yet"];

// ---------- system sizes ----------

export const getSystems = (): SystemSize[] => systems;
export const getSystemBySlug = (slug: string): SystemSize | undefined => systems.find((s) => s.slug === slug);
export const getSystemByKw = (kw: number): SystemSize | undefined => systems.find((s) => s.kw === kw);

// ---------- projects ----------

export const getProjects = (): Project[] => projects;
export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
export const getFeaturedProjects = (n = 3): Project[] => projects.slice(0, n);

// ---------- locations ----------

export const getLocations = (): Location[] => locations;
export const getLocationBySlug = (slug: string): Location | undefined =>
  locations.find((l) => l.slug === slug);
export const getNearbyLocations = (location: Location): Location[] =>
  location.nearby.flatMap((slug) => {
    const l = getLocationBySlug(slug);
    return l ? [l] : [];
  });

// ---------- testimonials ----------

export const getTestimonials = (): Testimonial[] => testimonials;
/** Only real reviews. Use this for Review JSON-LD. */
export const getRealTestimonials = (): Testimonial[] => testimonials.filter((x) => !x.isSample);

// ---------- FAQs ----------

export const getFaqGroups = (): FaqGroup[] => faqGroups;
export const getAllFaqs = (): Faq[] => faqGroups.flatMap((g) => g.faqs);

/** Round-robins across groups so the preview shows a spread of topics. */
export function getFaqPreview(n = 6): Faq[] {
  const out: Faq[] = [];
  for (let i = 0; out.length < n; i++) {
    let added = false;
    for (const g of faqGroups) {
      const f = g.faqs[i];
      if (f && out.length < n) {
        out.push(f);
        added = true;
      }
    }
    if (!added) break;
  }
  return out;
}

// ---------- process + legal ----------

export const getProcessSteps = (): ProcessStep[] => processSteps;
export const getLegalPage = (slug: LegalPage["slug"]): LegalPage | undefined =>
  legalPages.find((p) => p.slug === slug);
