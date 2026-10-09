import { notFound } from "next/navigation";
import { Star } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";
import { Button } from "@/components/ui/button";

/**
 * Short link for customers: yoursite.com/review/ → your Google review form.
 * Say it on the phone, print it as a QR code on handover documents, send it on WhatsApp.
 * Only for real customers; Google's policy doesn't allow incentives or reviews from non-customers.
 * Shows the 404 page until social.googleReview is set.
 */
export const metadata = buildMetadata({ title: "Review us on Google", path: "/review/", noindex: true });

export default function ReviewPage() {
  const url = siteConfig.social.googleReview;
  if (!url) notFound();

  return (
    <section className="container py-20">
      {/* React hoists this into <head>: forwards straight to the review form. */}
      <meta httpEquiv="refresh" content={`0;url=${url}`} />
      <div className="mx-auto max-w-md text-center">
        <Star className="mx-auto h-12 w-12 fill-current text-secondary" aria-hidden="true" />
        <h1 className="mt-5 text-3xl font-bold">Thank you for choosing {siteConfig.company.name}</h1>
        <p className="mt-3 text-muted-foreground">
          Opening Google so you can share your experience. If nothing happens, use the button below.
        </p>
        <Button asChild size="lg" className="mt-8">
          <a href={url}>Write a Google review</a>
        </Button>
      </div>
    </section>
  );
}
