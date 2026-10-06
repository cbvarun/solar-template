import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/config";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  /** "floating" = fixed round button on every page; "inline" = normal button */
  variant?: "floating" | "inline";
  service?: string;
  city?: string;
  label?: string;
  size?: ButtonProps["size"];
  className?: string;
}

export function WhatsAppButton({ variant = "inline", service, city, label, size, className }: Props) {
  const href = buildWhatsAppUrl({ service, city });
  const text = label ?? siteConfig.cta.whatsappLabel;

  if (variant === "floating") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${text}: chat with ${siteConfig.company.name}`}
        className={cn(
          // sits above the sticky mobile bar (h-16), bottom-right on desktop
          "fixed bottom-20 right-4 z-40 inline-flex h-14 items-center gap-2 rounded-full bg-[#0F7B6C] px-4 text-white shadow-lg transition-colors hover:bg-[#0B6357] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:bottom-6 md:right-6",
          className,
        )}
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
        <span className="hidden text-sm font-semibold md:inline">{text}</span>
      </a>
    );
  }

  return (
    <Button asChild variant="whatsapp" size={size} className={className}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        {text}
      </a>
    </Button>
  );
}
