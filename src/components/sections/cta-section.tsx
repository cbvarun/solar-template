import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { QuoteButton } from "@/components/forms/quote-sheet";
import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button";
import { Button } from "@/components/ui/button";

export function CTASection({ headline, body, service }: { headline?: string; body?: string; service?: string }) {
  const { cta, contact } = siteConfig;
  return (
    <section className="py-14 lg:py-20">
      <div className="container">
        <div className="rounded-2xl bg-primary px-6 py-10 text-primary-foreground sm:px-12 sm:py-14">
          <h2 className="max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            {headline ?? cta.bannerHeadline}
          </h2>
          <p className="mt-3 max-w-xl text-lg opacity-90">{body ?? cta.bannerBody}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <QuoteButton variant="secondary" size="lg">
              {cta.quoteLabel}
            </QuoteButton>
            <WhatsAppButton size="lg" service={service} />
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
              <a href={contact.phoneHref}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                {cta.callLabel}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
