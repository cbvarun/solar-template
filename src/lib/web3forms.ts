import type { LeadFormValues } from "@/lib/validation";
import { normalizePhone } from "@/lib/validation";

const ENDPOINT = "https://api.web3forms.com/submit";
const TIMEOUT_MS = 15_000;

export type SubmitResult = { ok: true } | { ok: false; message: string };

interface SubmitArgs {
  values: LeadFormValues;
  accessKey: string;
  subject: string;
  fromName: string;
  /** Turnstile token, if the widget is enabled */
  captchaToken?: string;
  /** Page the lead came from (useful in the notification email) */
  pageUrl?: string;
  /** Which form variant sent it: "home", "contact", "quote-sheet", service slug... */
  source?: string;
  /** Only set when a /thank-you redirect is configured */
  redirect?: string;
}

interface Web3FormsResponse {
  success?: boolean;
  message?: string;
}

export async function submitToWeb3Forms({
  values,
  accessKey,
  subject,
  fromName,
  captchaToken,
  pageUrl,
  source,
  redirect,
}: SubmitArgs): Promise<SubmitResult> {
  if (!accessKey) {
    return {
      ok: false,
      message: "This form isn't configured yet. Please call or WhatsApp us instead.",
    };
  }

  const payload: Record<string, string | boolean> = {
    access_key: accessKey,
    subject,
    from_name: fromName,
    // Web3Forms uses `name` and `email` (reply-to) as special fields.
    name: values.fullName,
    phone: normalizePhone(values.phone),
    city: values.city,
    consent_to_contact: "Yes",
    botcheck: Boolean(values.botcheck),
  };

  if (values.email) payload.email = values.email;
  if (values.propertyType) payload.property_type = values.propertyType;
  if (values.monthlyBill) payload.monthly_bill = values.monthlyBill;
  if (values.roofType) payload.roof_type = values.roofType;
  if (values.service) payload.interested_service = values.service;
  if (values.message) payload.message = values.message;
  if (pageUrl) payload.page_url = pageUrl;
  if (source) payload.form_source = source;
  if (redirect) payload.redirect = redirect;
  // Turnstile: Web3Forms reads this exact field name.
  if (captchaToken) payload["cf-turnstile-response"] = captchaToken;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    const data = (await res.json().catch(() => ({}))) as Web3FormsResponse;

    if (res.ok && data.success) return { ok: true };

    return {
      ok: false,
      message:
        data.message || "We couldn't send your enquiry. Please try again or contact us directly.",
    };
  } catch (err) {
    const timedOut = err instanceof DOMException && err.name === "AbortError";
    return {
      ok: false,
      message: timedOut
        ? "The request timed out. Please check your connection and try again."
        : "Network error. Please check your connection and try again.",
    };
  } finally {
    clearTimeout(timer);
  }
}
