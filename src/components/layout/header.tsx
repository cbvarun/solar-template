import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { Logo } from "@/components/layout/logo";
import { Navbar } from "@/components/layout/navbar";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { QuoteButton } from "@/components/forms/quote-sheet";
import { Button } from "@/components/ui/button";
import { getMainNav } from "@/lib/nav";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Header() {
  const { navigation, contact, cta, company, theme } = siteConfig;
  const headerCta = navigation.headerCta;

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="container flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo />
        <Navbar />
        <div className="flex items-center gap-2">
          <a
            href={contact.phoneHref}
            className="hidden min-h-11 items-center gap-2 rounded-md px-2 text-sm font-semibold hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring xl:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {contact.phone}
          </a>
          {theme.darkMode === "toggle" && <ThemeToggle />}
          {headerCta.action === "quote-sheet" ? (
            <QuoteButton className="hidden sm:inline-flex">{headerCta.label}</QuoteButton>
          ) : (
            <Button asChild className="hidden sm:inline-flex">
              <a href={headerCta.href ?? "/contact/"}>{headerCta.label}</a>
            </Button>
          )}
          <MobileNav
            items={getMainNav()}
            companyName={company.name}
            quoteLabel={cta.quoteLabel}
            callLabel={cta.callLabel}
            phoneHref={contact.phoneHref}
            whatsappUrl={buildWhatsAppUrl()}
            whatsappLabel={cta.whatsappLabel}
          />
        </div>
      </div>
    </header>
  );
}
