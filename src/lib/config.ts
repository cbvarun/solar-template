import rawConfig from "@/config/site.config";
import { siteConfigSchema, type SiteConfig } from "@/config/site.schema";
import { resolveTokens } from "@/lib/utils";

function loadConfig(): SiteConfig {
  const parsed = siteConfigSchema.safeParse(rawConfig);
  if (!parsed.success) {
    const issues = parsed.error.issues
      .map((i) => `  • ${i.path.join(".") || "(root)"}: ${i.message}`)
      .join("\n");
    // Throwing here fails `next build`, so a bad config never ships.
    throw new Error(`\nInvalid src/config/site.config.ts:\n${issues}\n`);
  }

  const config = parsed.data;

  // NEXT_PUBLIC_* must be referenced literally so Next.js can inline them.
  const envSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  config.seo.siteUrl = (envSiteUrl || config.seo.siteUrl).replace(/\/+$/, "");

  return config;
}

export const siteConfig: SiteConfig = loadConfig();

/** Base tokens available in any config/content string. */
export const baseTokens = {
  companyName: siteConfig.company.name,
  legalName: siteConfig.company.legalName,
  phone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  city: siteConfig.contact.address.city,
  state: siteConfig.contact.address.state,
  year: new Date().getFullYear(),
  utilityName: siteConfig.regional.utilityName,
  regulatorName: siteConfig.regional.regulatorName,
  netMeteringTerm: siteConfig.regional.netMeteringTerm,
  subsidyScheme: siteConfig.regional.subsidyScheme,
  subsidyNote: siteConfig.regional.subsidyNote,
} as const;

/** Resolve {{tokens}} in a string, with optional per-call extras (e.g. service, city). */
export function t(
  input: string,
  extra: Record<string, string | number | undefined> = {},
): string {
  return resolveTokens(input, { ...baseTokens, ...extra });
}

// ---- Resolved runtime values (config first, then environment) ----

export const web3formsAccessKey: string =
  siteConfig.leadForm.web3formsAccessKey || process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

export const turnstileSiteKey: string =
  siteConfig.leadForm.captcha.siteKey || process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

/** Turnstile renders only when explicitly enabled AND a site key exists. */
export const turnstileEnabled: boolean =
  siteConfig.leadForm.captcha.provider === "turnstile" && turnstileSiteKey !== "";
