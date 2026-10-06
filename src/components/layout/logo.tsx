import Link from "next/link";
import { siteConfig } from "@/lib/config";

/**
 * Shows the light logo, and swaps to `logo.dark` in dark mode if one is configured
 * (the swap is CSS-only, see globals.css).
 */
export function Logo() {
  const { logo, name } = siteConfig.company;
  const size = { width: logo.width, height: logo.height };
  const cls = "h-9 w-auto lg:h-11";

  return (
    <Link
      href="/"
      aria-label={`${name} home`}
      className="inline-flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {/* Plain <img>: static export, and SVG logos need no optimisation. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logo.light} alt={logo.alt} {...size} className={logo.dark ? `logo-light ${cls}` : cls} />
      {logo.dark && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logo.dark} alt="" aria-hidden="true" {...size} className={`logo-dark ${cls}`} />
      )}
    </Link>
  );
}
