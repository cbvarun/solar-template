import { siteConfig } from "@/lib/config";

type NavItem = SiteNav["main"][number];
type SiteNav = typeof siteConfig.navigation;

/** Hides links to sections switched off in `features`. */
function enabled(href: string): boolean {
  const f = siteConfig.features;
  if (href.startsWith("/projects") && !f.projects) return false;
  if (href.startsWith("/service-areas") && !f.serviceAreaPages) return false;
  return true;
}

export function getMainNav(): NavItem[] {
  return siteConfig.navigation.main.filter((i) => enabled(i.href));
}

export function getFooterColumns() {
  return siteConfig.navigation.footerColumns.map((col) => ({
    ...col,
    links: col.links.filter((l) => enabled(l.href)),
  }));
}
