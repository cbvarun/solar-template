import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube, Clock, type LucideIcon } from "lucide-react";
import { siteConfig, t } from "@/lib/config";
import { Logo } from "@/components/layout/logo";
import { getFooterColumns } from "@/lib/nav";

const SOCIALS: { key: keyof typeof siteConfig.social; label: string; Icon: LucideIcon }[] = [
  { key: "facebook", label: "Facebook", Icon: Facebook },
  { key: "instagram", label: "Instagram", Icon: Instagram },
  { key: "linkedin", label: "LinkedIn", Icon: Linkedin },
  { key: "youtube", label: "YouTube", Icon: Youtube },
  { key: "x", label: "X (Twitter)", Icon: Twitter },
  { key: "googleBusiness", label: "Google Business Profile", Icon: MapPin },
];

export function Footer() {
  const { company, contact, navigation, serviceAreas, social, features } = siteConfig;
  const a = contact.address;
  const linkClass = "text-sm text-background/75 underline-offset-4 hover:text-background hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/70 rounded-sm";
  const socials = SOCIALS.filter((s) => social[s.key]);

  return (
    <footer className="bg-foreground text-background">
      <div className="container grid gap-10 py-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="inline-block rounded-lg bg-background px-3 py-2">
            <Logo />
          </div>
          <p className="mt-4 max-w-sm text-sm text-background/75">{company.tagline}</p>
          {company.registrationNumber && (
            <p className="mt-3 text-xs text-background/60">{company.registrationNumber}</p>
          )}
          {socials.length > 0 && (
            <ul className="mt-5 flex gap-2">
              {socials.map(({ key, label, Icon }) => (
                <li key={key}>
                  <a
                    href={social[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-background/10 hover:bg-background/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/70"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5">
          {getFooterColumns().map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-base font-semibold">{col.title}</h2>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={linkClass}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-base font-semibold">Contact</h2>
          <ul className="mt-3 space-y-3 text-sm text-background/80">
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={contact.phoneHref} className={linkClass}>{contact.phone}</a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${contact.email}`} className={`${linkClass} break-all`}>{contact.email}</a>
            </li>
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <address className="not-italic">
                {a.line1}
                {a.line2 && <><br />{a.line2}</>}
                <br />
                {a.city}, {a.state} {a.postalCode}
              </address>
            </li>
            {contact.businessHours.map((h) => (
              <li key={h.days} className="flex gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{h.days}, {h.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-background/15">
        <div className="container py-6">
          <p className="text-sm text-background/75">
            <span className="font-semibold text-background">We serve: </span>
            {features.serviceAreaPages ? (
              <Link href="/service-areas/" className={linkClass}>{serviceAreas.primaryCities.join(", ")}</Link>
            ) : (
              serviceAreas.primaryCities.join(", ")
            )}
            {serviceAreas.states.length > 0 && <> ({serviceAreas.states.join(", ")})</>}
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-background/70 sm:flex-row sm:items-center sm:justify-between">
            <p>{t(navigation.copyrightText)}</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-1">
              {navigation.legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
