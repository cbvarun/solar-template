import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button";

export function Hero() {
  const { hero } = siteConfig.home;
  const { contact } = siteConfig;

  return (
    <section className="relative overflow-hidden border-b bg-muted/50">
      <div className="container grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-20">
        <div>
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            {hero.headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">{hero.subheadline}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
            </Button>
            <WhatsAppButton size="lg" label={hero.whatsappCtaLabel} />
          </div>
          <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Prefer to talk? Call{" "}
            <a href={contact.phoneHref} className="font-semibold text-foreground underline-offset-4 hover:underline">
              {contact.phone}
            </a>
          </p>
        </div>

        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          width={960}
          height={720}
          priority
          className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card"
        />
      </div>
    </section>
  );
}
