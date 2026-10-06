import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/sections/section";
import { LeadForm } from "@/components/forms/lead-form";
import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button";

export const metadata = buildMetadata({
  title: "Contact Us",
  description: `Contact ${siteConfig.company.name} for a rooftop solar quote, site survey or service visit. Call, WhatsApp or send an enquiry.`,
  path: "/contact/",
});

export default function ContactPage() {
  const { contact, company } = siteConfig;
  const a = contact.address;

  return (
    <>
      <PageHeader
        title="Contact us"
        intro="Send an enquiry, call, or message us on WhatsApp. We reply during working hours."
        trail={[{ name: "Contact", path: "/contact/" }]}
      />

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
          <div className="space-y-8">
            <ul className="space-y-5">
              <li className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h2 className="font-semibold">Phone</h2>
                  <a href={contact.phoneHref} className="text-lg underline-offset-4 hover:underline">{contact.phone}</a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h2 className="font-semibold">Email</h2>
                  <a href={`mailto:${contact.email}`} className="break-all underline-offset-4 hover:underline">{contact.email}</a>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h2 className="font-semibold">Office</h2>
                  <address className="not-italic">
                    {company.name}
                    <br />
                    {a.line1}
                    {a.line2 && <><br />{a.line2}</>}
                    <br />
                    {a.city}, {a.state} {a.postalCode}
                  </address>
                  <a href={contact.googleMaps.linkUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
                    Open in Google Maps
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h2 className="font-semibold">Business hours</h2>
                  {contact.businessHours.map((h) => (
                    <p key={h.days}>{h.days}: {h.hours}</p>
                  ))}
                </div>
              </li>
            </ul>
            <WhatsAppButton size="lg" />
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-card sm:p-8">
            <h2 className="mb-5 text-2xl font-bold">Send an enquiry</h2>
            <LeadForm source="contact" />
          </div>
        </div>
      </Section>

      <section aria-label="Map" className="pb-14 lg:pb-20">
        <div className="container">
          {/* Fixed aspect ratio + lazy loading: no layout shift, no early map download */}
          <div className="aspect-[16/9] w-full overflow-hidden rounded-lg border bg-muted sm:aspect-[21/9]">
            <iframe
              title={`Map showing the ${company.name} office`}
              src={contact.googleMaps.embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
