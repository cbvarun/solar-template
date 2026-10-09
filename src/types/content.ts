import { z } from "zod";

const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase-with-dashes only");
const image = z.object({ src: z.string(), alt: z.string() });
const titledText = z.object({ title: z.string(), body: z.string() });
const faq = z.object({ question: z.string().min(5), answer: z.string().min(10) });

export const serviceSchema = z.object({
  slug,
  icon: z.string(),
  title: z.string(),
  summary: z.string().max(200),
  seoTitle: z.string().max(70),
  seoDescription: z.string().min(50).max(170),
  image,
  description: z.array(z.string()).min(1),
  audience: z.array(z.string()).min(1),
  included: z.array(z.string()).min(1),
  process: z.array(titledText).min(3),
  pricing: z.object({ headline: z.string(), body: z.string(), ctaLabel: z.string() }),
  faqs: z.array(faq).min(2),
  related: z.array(slug),
});

export const systemSizeSchema = z.object({
  slug,
  kw: z.number().positive(),
  title: z.string(),
  seoTitle: z.string().max(70),
  seoDescription: z.string().min(50).max(170),
  summary: z.string().max(200),
  intro: z.array(z.string()).min(1),
  suits: z.array(z.string()).min(1),
  considerations: z.array(z.string()),
  faqs: z.array(faq).min(2),
});

export const projectSchema = z.object({
  slug,
  title: z.string(),
  summary: z.string(),
  customerType: z.enum(["Residential", "Commercial", "Industrial"]),
  location: z.object({ area: z.string().optional(), city: z.string(), state: z.string() }),
  systemSizeKw: z.number().positive(),
  roofType: z.string(),
  panels: z.string(),
  inverter: z.string(),
  installedOn: z.string(),
  estimatedMonthlySavingsInr: z.number().nonnegative().optional(),
  /** Real monthly bills before and after solar (₹). Shown together, so set both. */
  billBeforeInr: z.number().nonnegative().optional(),
  billAfterInr: z.number().nonnegative().optional(),
  details: z.array(z.string()),
  image,
  gallery: z.array(image),
  testimonial: z
    .object({ quote: z.string(), name: z.string(), role: z.string().optional() })
    .optional(),
  /** true = placeholder entry. Shows a "Sample" badge and is excluded from Review JSON-LD. */
  isSample: z.boolean(),
});

export const testimonialSchema = z.object({
  id: z.string(),
  quote: z.string(),
  name: z.string(),
  location: z.string(),
  rating: z.number().min(1).max(5),
  serviceSlug: slug.optional(),
  isSample: z.boolean(),
});

export const locationSchema = z.object({
  slug,
  name: z.string(),
  kind: z.enum(["locality", "city", "district"]),
  region: z.string(),
  state: z.string(),
  intro: z.string(),
  highlights: z.array(z.string()).min(2),
  nearby: z.array(slug),
});

export const processStepSchema = z.object({ icon: z.string(), title: z.string(), body: z.string() });

export const faqGroupSchema = z.object({ id: slug, title: z.string(), faqs: z.array(faq).min(1) });

export const legalPageSchema = z.object({
  slug: z.enum(["privacy-policy", "terms"]),
  title: z.string(),
  description: z.string(),
  lastUpdated: z.string(),
  intro: z.string(),
  sections: z.array(z.object({ heading: z.string(), body: z.array(z.string()) })),
});

export type Faq = z.infer<typeof faq>;
export type Service = z.infer<typeof serviceSchema>;
export type SystemSize = z.infer<typeof systemSizeSchema>;
export type Project = z.infer<typeof projectSchema>;
export type Testimonial = z.infer<typeof testimonialSchema>;
export type Location = z.infer<typeof locationSchema>;
export type ProcessStep = z.infer<typeof processStepSchema>;
export type FaqGroup = z.infer<typeof faqGroupSchema>;
export type LegalPage = z.infer<typeof legalPageSchema>;
