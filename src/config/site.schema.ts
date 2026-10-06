import { z } from "zod";

/** Fonts available to the template. Registry lives in src/lib/fonts.ts. */
export const FONT_OPTIONS = [
  "Inter",
  "Poppins",
  "Manrope",
  "DM Sans",
  "Plus Jakarta Sans",
  "Montserrat",
  "Outfit",
  "Sora",
] as const;
export type FontName = (typeof FONT_OPTIONS)[number];

const hex = z
  .string()
  .regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, "Use a hex color like #0B5FFF");

const link = z.object({
  label: z.string(),
  href: z.string(),
  external: z.boolean().optional(),
});

const navItem = link.extend({ children: z.array(link).optional() });

export const siteConfigSchema = z.object({
  // 1. Identity
  company: z.object({
    name: z.string().min(1),
    legalName: z.string().min(1),
    tagline: z.string(),
    description: z.string().min(50).max(300),
    foundedYear: z.number().int().min(1900),
    registrationNumber: z.string().optional(),
    logo: z.object({
      light: z.string(),
      dark: z.string().optional(),
      alt: z.string(),
      width: z.number(),
      height: z.number(),
    }),
    favicon: z.string(),
    ogImage: z.string(),
  }),

  // 2. SEO / URLs
  seo: z.object({
    siteUrl: z.string().url(),
    titleTemplate: z.string(),
    defaultTitle: z.string(),
    locale: z.string().default("en_IN"),
    twitterHandle: z.string().optional(),
    geo: z.object({ lat: z.number(), lng: z.number() }).optional(),
    priceRange: z.string().optional(),
  }),

  // 3. Brand and theme
  theme: z.object({
    colors: z.object({
      primary: hex,
      primaryForeground: hex,
      secondary: hex,
      secondaryForeground: hex,
      accent: hex.optional(),
      background: hex.optional(),
      foreground: hex.optional(),
      dark: z
        .object({
          primary: hex.optional(),
          background: hex.optional(),
          foreground: hex.optional(),
        })
        .optional(),
    }),
    fonts: z.object({
      heading: z.enum(FONT_OPTIONS),
      body: z.enum(FONT_OPTIONS),
    }),
    radius: z.enum(["none", "sm", "md", "lg", "xl", "full"]),
    buttonStyle: z.enum(["solid", "outline", "gradient", "pill"]),
    darkMode: z.enum(["off", "system", "toggle"]),
  }),

  // 4. Contact
  contact: z.object({
    phone: z.string(),
    phoneHref: z.string(),
    whatsappNumber: z.string().regex(/^\d{10,15}$/, "Digits only, with country code"),
    whatsappMessageTemplate: z.string(),
    email: z.string().email(),
    address: z.object({
      line1: z.string(),
      line2: z.string().optional(),
      city: z.string(),
      state: z.string(),
      postalCode: z.string(),
      country: z.string().default("IN"),
    }),
    googleMaps: z.object({
      embedUrl: z.string().url(),
      linkUrl: z.string().url(),
    }),
    businessHours: z.array(z.object({ days: z.string(), hours: z.string() })),
  }),

  // 5. Service areas (detail pages come from content/locations.ts)
  serviceAreas: z.object({
    headline: z.string(),
    states: z.array(z.string()),
    primaryCities: z.array(z.string()),
  }),

  // 5b. Regional utility / subsidy facts (used as {{tokens}} in shared content)
  regional: z.object({
    utilityName: z.string(),
    regulatorName: z.string(),
    netMeteringTerm: z.string(),
    subsidyScheme: z.string(),
    subsidyNote: z.string(),
  }),

  // 6. Social
  social: z.object({
    facebook: z.string().url().optional(),
    instagram: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    youtube: z.string().url().optional(),
    x: z.string().url().optional(),
    googleBusiness: z.string().url().optional(),
  }),

  // 7. Analytics (each loads only if set)
  analytics: z.object({
    googleAnalyticsId: z.string().optional(),
    metaPixelId: z.string().optional(),
    cloudflareWebAnalyticsToken: z.string().optional(),
  }),

  // 8. Navigation and footer
  navigation: z.object({
    main: z.array(navItem),
    headerCta: z.object({
      label: z.string(),
      action: z.enum(["quote-sheet", "link"]),
      href: z.string().optional(),
    }),
    footerColumns: z.array(z.object({ title: z.string(), links: z.array(link) })),
    legal: z.array(link),
    copyrightText: z.string(),
  }),

  // 9. Company-specific page copy
  home: z.object({
    hero: z.object({
      headline: z.string(),
      subheadline: z.string(),
      primaryCta: z.object({ label: z.string(), href: z.string() }),
      whatsappCtaLabel: z.string(),
      image: z.object({ src: z.string(), alt: z.string() }),
    }),
    trustStats: z.array(z.object({ value: z.string(), label: z.string() })),
    whyChooseUs: z.array(z.object({ icon: z.string(), title: z.string(), body: z.string() })),
    savings: z.object({
      headline: z.string(),
      costPerUnit: z.number().positive(),
      unitsPerKwPerMonth: z.number().positive(),
      benefits: z.array(z.object({ title: z.string(), body: z.string() })),
    }),
  }),

  about: z.object({
    story: z.array(z.string()),
    mission: z.string(),
    values: z.array(z.object({ title: z.string(), body: z.string() })),
    certifications: z.array(z.object({ name: z.string(), image: z.string().optional() })),
    philosophy: z.string(),
  }),

  // 10. CTAs
  cta: z.object({
    quoteLabel: z.string(),
    callLabel: z.string(),
    whatsappLabel: z.string(),
    bannerHeadline: z.string(),
    bannerBody: z.string(),
  }),

  // 11. Lead form + Web3Forms
  leadForm: z.object({
    web3formsAccessKey: z.string().optional(),
    web3formsSubject: z.string(),
    web3formsFromName: z.string(),
    successMessage: z.string(),
    errorMessage: z.string(),
    redirectToThankYou: z.boolean().default(false),
    fields: z.object({
      email: z.boolean(),
      propertyType: z.boolean(),
      monthlyBill: z.boolean(),
      roofType: z.boolean(),
      service: z.boolean(),
      message: z.boolean(),
    }),
    options: z.object({
      propertyTypes: z.array(z.string()).min(1),
      billRanges: z.array(z.string()),
      roofTypes: z.array(z.string()).min(1),
    }),
    consentText: z.string(),
    rateLimit: z.object({
      maxSubmissions: z.number().int().positive(),
      windowMinutes: z.number().positive(),
    }),
    captcha: z.object({
      provider: z.enum(["none", "turnstile"]),
      siteKey: z.string().optional(),
    }),
  }),

  // 12. Feature toggles
  features: z.object({
    stickyMobileCta: z.boolean(),
    floatingWhatsApp: z.boolean(),
    quoteSheet: z.boolean(),
    projects: z.boolean(),
    serviceAreaPages: z.boolean(),
    testimonials: z.boolean(),
    trustStats: z.boolean(),
  }),
});

/** Parsed output type (defaults applied). Use this everywhere in the app. */
export type SiteConfig = z.infer<typeof siteConfigSchema>;
/** Authoring type for config files (defaults optional). */
export type SiteConfigInput = z.input<typeof siteConfigSchema>;
