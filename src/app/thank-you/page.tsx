import Link from "next/link";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { siteConfig, t } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";
import { getBillPrompt } from "@/lib/leadform-props";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button";

export const metadata = buildMetadata({ title: "Thank you", path: "/thank-you/", noindex: true });

/** Used only when leadForm.redirectToThankYou = true. Otherwise forms show an inline message. */
export default function ThankYouPage() {
  const billPrompt = getBillPrompt();
  return (
    <section className="container py-20">
      <div className="mx-auto max-w-xl text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" aria-hidden="true" />
        <h1 className="mt-5 text-3xl font-bold">{t(siteConfig.leadForm.successMessage)}</h1>
        {billPrompt && (
          <div className="mt-6 rounded-lg border bg-muted/50 p-5">
            <p>{billPrompt.text}</p>
            <Button asChild variant="whatsapp" className="mt-4">
              <a href={billPrompt.url} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {billPrompt.buttonLabel}
              </a>
            </Button>
          </div>
        )}
        <p className="mt-6 text-muted-foreground">
          Need us sooner? Call {siteConfig.contact.phone} or message us on WhatsApp.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/">Back to home</Link>
          </Button>
          {!billPrompt && <WhatsAppButton />}
        </div>
      </div>
    </section>
  );
}
