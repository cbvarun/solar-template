import { Clock, Phone } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { Section } from "@/components/sections/section";
import { LeadForm } from "@/components/forms/lead-form";
import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button";

interface Props {
  id?: string;
  heading?: string;
  body?: string;
  source: string;
  defaultService?: string;
  defaultCity?: string;
  /** Passed to the WhatsApp message template */
  service?: string;
  city?: string;
}

/** Two-column block: reassurance + alternatives on the left, the lead form on the right. */
export function LeadSection({
  id = "enquiry",
  heading = "Tell us about your roof",
  body = "Share a few details and our solar team will get back to you. A site survey is the next step, and nothing is decided on the phone.",
  source,
  defaultService,
  defaultCity,
  service,
  city,
}: Props) {
  const { contact } = siteConfig;
  return (
    <Section id={id} tone="muted">
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
        <div>
          <h2 id={`${id}-heading`} className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">{body}</p>
          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
              <span>
                Call{" "}
                <a href={contact.phoneHref} className="font-semibold underline-offset-4 hover:underline">
                  {contact.phone}
                </a>
              </span>
            </li>
            {contact.businessHours.map((h) => (
              <li key={h.days} className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
                <span>
                  {h.days}, {h.hours}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <WhatsAppButton service={service} city={city} />
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-card sm:p-8">
          <LeadForm source={source} defaultService={defaultService} defaultCity={defaultCity} />
        </div>
      </div>
    </Section>
  );
}
