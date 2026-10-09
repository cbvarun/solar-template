import { siteConfig, t } from "@/lib/config";

/** Opens a WhatsApp chat with the given message already typed. */
export function whatsAppUrlFor(message: string): string {
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppUrl(extra: { service?: string; city?: string } = {}): string {
  const message = t(siteConfig.contact.whatsappMessageTemplate, {
    service: extra.service ?? "rooftop solar",
    ...(extra.city ? { city: extra.city } : {}),
  });
  return whatsAppUrlFor(message);
}
