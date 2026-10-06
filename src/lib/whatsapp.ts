import { siteConfig, t } from "@/lib/config";

export function buildWhatsAppUrl(extra: { service?: string; city?: string } = {}): string {
  const { whatsappNumber, whatsappMessageTemplate } = siteConfig.contact;
  const message = t(whatsappMessageTemplate, {
    service: extra.service ?? "rooftop solar",
    ...(extra.city ? { city: extra.city } : {}),
  });
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
