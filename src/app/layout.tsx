import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig, t } from "@/lib/config";
import { buildThemeCss } from "@/lib/theme";
import { resolveFonts } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StickyMobileCTA } from "@/components/layout/sticky-mobile-cta";
import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button";
import { QuoteSheetProvider } from "@/components/forms/quote-sheet";
import { LeadForm } from "@/components/forms/lead-form";
import { Analytics } from "@/components/analytics/analytics";
import { JsonLd } from "@/components/seo/json-ld";
import { getServices } from "@/lib/content";
import { localBusinessJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: { default: t(siteConfig.seo.defaultTitle), template: t(siteConfig.seo.titleTemplate) },
  description: t(siteConfig.company.description),
  applicationName: siteConfig.company.name,
  icons: {
    icon: [
      { url: siteConfig.company.favicon, sizes: "any" },
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/brand/apple-touch-icon.png",
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: siteConfig.theme.colors.primary,
};

/** Sets .dark before first paint when theme.darkMode = "toggle" (avoids a light flash). */
const THEME_INIT = `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { theme, features, cta } = siteConfig;
  const fonts = resolveFonts(theme.fonts);
  const css = `${buildThemeCss(theme)}\n${fonts.css}`;

  return (
    <html
      lang="en-IN"
      className={cn(fonts.classes, theme.darkMode === "system" && "[color-scheme:light_dark]")}
      data-button-style={theme.buttonStyle}
      data-theme-mode={theme.darkMode}
      suppressHydrationWarning
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: css }} />
        {theme.darkMode === "toggle" && <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />}
      </head>
      <body className={cn("min-h-screen", features.stickyMobileCta && "pb-[4.5rem] md:pb-0")}>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <QuoteSheetProvider
          enabled={features.quoteSheet}
          title={cta.quoteLabel}
          description="Tell us a little about your property and we'll get back to you."
          form={<LeadForm source="quote-sheet" compact />}
        >
          <Header />
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          {features.stickyMobileCta && <StickyMobileCTA />}
          {features.floatingWhatsApp && <WhatsAppButton variant="floating" />}
        </QuoteSheetProvider>
        <Analytics />
        <JsonLd data={localBusinessJsonLd(getServices())} />
      </body>
    </html>
  );
}
