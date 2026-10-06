import { siteConfig, t, web3formsAccessKey, turnstileSiteKey, turnstileEnabled } from "@/lib/config";
import { getServiceOptions } from "@/lib/content";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

/**
 * Everything the client-side LeadForm needs, as plain serializable data.
 * Computed on the server so the full site config never ships to the browser.
 */
export function getLeadFormProps() {
  const lf = siteConfig.leadForm;
  return {
    accessKey: web3formsAccessKey,
    subject: t(lf.web3formsSubject),
    fromName: t(lf.web3formsFromName),
    successMessage: t(lf.successMessage),
    errorMessage: t(lf.errorMessage),
    thankYouPath: lf.redirectToThankYou ? "/thank-you/" : null,
    fields: lf.fields,
    options: {
      propertyTypes: lf.options.propertyTypes,
      billRanges: lf.options.billRanges,
      roofTypes: lf.options.roofTypes,
      services: getServiceOptions(),
    },
    consentText: t(lf.consentText),
    rateLimit: lf.rateLimit,
    turnstileSiteKey: turnstileEnabled ? turnstileSiteKey : null,
    fallback: {
      phoneLabel: siteConfig.contact.phone,
      phoneHref: siteConfig.contact.phoneHref,
      whatsappUrl: buildWhatsAppUrl(),
    },
  };
}

export type LeadFormSettings = ReturnType<typeof getLeadFormProps>;
