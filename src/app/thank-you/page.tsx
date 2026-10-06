import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { siteConfig, t } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button";

export const metadata = buildMetadata({ title: "Thank you", path: "/thank-you/", noindex: true });

/** Used only when leadForm.redirectToThankYou = true. Otherwise forms show an inline message. */
export default function ThankYouPage() {
  return (
    <section className="container py-20">
      <div className="mx-auto max-w-xl text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" aria-hidden="true" />
        <h1 className="mt-5 text-3xl font-bold">{t(siteConfig.leadForm.successMessage)}</h1>
        <p className="mt-3 text-muted-foreground">
          Need us sooner? Call {siteConfig.contact.phone} or message us on WhatsApp.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/">Back to home</Link>
          </Button>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
