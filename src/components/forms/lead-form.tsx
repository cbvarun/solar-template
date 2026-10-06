import { LeadFormClient } from "@/components/forms/lead-form-client";
import { getLeadFormProps } from "@/lib/leadform-props";

interface Props {
  /** Where the form sits: "home", "contact", "quote-sheet", a service slug... */
  source: string;
  /** Pre-selects the "Interested service" dropdown (use a service title). */
  defaultService?: string;
  /** Pre-fills "City or location" (used on location pages). */
  defaultCity?: string;
  compact?: boolean;
  className?: string;
}

/**
 * The one lead form used everywhere: home, service pages, contact page,
 * location pages and the quote sheet. Server wrapper resolves config into
 * plain props so the client bundle never contains the full site config.
 */
export function LeadForm(props: Props) {
  return <LeadFormClient settings={getLeadFormProps()} {...props} />;
}
