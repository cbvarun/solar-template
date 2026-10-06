import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";

/** Fixed bottom bar on phones. Pure links, no JavaScript. */
export function StickyMobileCTA() {
  const { contact, cta } = siteConfig;
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 p-2 backdrop-blur md:hidden"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <div className="grid grid-cols-2 gap-2">
        <Button asChild>
          <a href={contact.phoneHref}>
            <Phone className="h-4 w-4" aria-hidden="true" />
            {cta.callLabel}
          </a>
        </Button>
        <Button asChild variant="whatsapp">
          <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {cta.whatsappLabel}
          </a>
        </Button>
      </div>
    </div>
  );
}
