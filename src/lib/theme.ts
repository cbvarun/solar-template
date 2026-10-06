import type { SiteConfig } from "@/config/site.schema";

/** "#0B5FFF" or "#05f" -> "221 100% 52%" (shadcn-style HSL channels). */
export function hexToHslChannels(hex: string): string {
  let h = hex.replace("#", "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const r = parseInt(h.slice(0, 2), 16) / 255;
  const g = parseInt(h.slice(2, 4), 16) / 255;
  const b = parseInt(h.slice(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const d = max - min;

  let hue = 0;
  let sat = 0;
  if (d !== 0) {
    sat = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        hue = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        hue = (b - r) / d + 2;
        break;
      default:
        hue = (r - g) / d + 4;
    }
    hue *= 60;
  }
  return `${Math.round(hue)} ${Math.round(sat * 100)}% ${Math.round(l * 100)}%`;
}

function relativeLuminance(hex: string): number {
  let h = hex.replace("#", "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const [r, g, b] = [0, 2, 4].map((i) => {
    const v = parseInt(h.slice(i, i + 2), 16) / 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  }) as [number, number, number];
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** White text if it reaches 4.5:1 on this color, otherwise near-black. */
export function readableForeground(hex: string): string {
  return 1.05 / (relativeLuminance(hex) + 0.05) >= 4.5 ? "#ffffff" : "#0b1220";
}

const RADIUS_MAP: Record<SiteConfig["theme"]["radius"], string> = {
  none: "0rem",
  sm: "0.25rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  full: "1.5rem",
};

/**
 * Builds the CSS-variable block injected in <head> by layout.tsx.
 * Tailwind + shadcn tokens read these, so rebranding = editing config only.
 */
export function buildThemeCss(theme: SiteConfig["theme"]): string {
  const c = theme.colors;
  const d = c.dark ?? {};

  const primary = hexToHslChannels(c.primary);
  const secondary = hexToHslChannels(c.secondary);
  const accent = hexToHslChannels(c.accent ?? c.secondary);
  const background = hexToHslChannels(c.background ?? "#ffffff");
  const foreground = hexToHslChannels(c.foreground ?? "#0f172a");

  const light = `
:root {
  --background: ${background};
  --foreground: ${foreground};
  --card: ${background};
  --card-foreground: ${foreground};
  --primary: ${primary};
  --primary-foreground: ${hexToHslChannels(c.primaryForeground)};
  --secondary: ${secondary};
  --secondary-foreground: ${hexToHslChannels(c.secondaryForeground)};
  --accent: ${accent};
  --accent-foreground: ${hexToHslChannels(c.secondaryForeground)};
  --muted: 210 40% 96%;
  --muted-foreground: 215 16% 38%;
  --border: 214 32% 91%;
  --input: 214 32% 85%;
  --ring: ${primary};
  --destructive: 0 72% 45%;
  --destructive-foreground: 0 0% 100%;
  --radius: ${RADIUS_MAP[theme.radius]};
}`;

  if (theme.darkMode === "off") return light;

  const dPrimary = hexToHslChannels(d.primary ?? c.primary);
  const dBackground = hexToHslChannels(d.background ?? "#0b1220");
  const dForeground = hexToHslChannels(d.foreground ?? "#f1f5f9");

  const darkVars = `
  --background: ${dBackground};
  --foreground: ${dForeground};
  --card: ${dBackground};
  --card-foreground: ${dForeground};
  --primary: ${dPrimary};
  --primary-foreground: ${hexToHslChannels(readableForeground(d.primary ?? c.primary))};
  --ring: ${dPrimary};
  --muted: 217 33% 15%;
  --muted-foreground: 215 20% 70%;
  --border: 217 33% 20%;
  --input: 217 33% 24%;`;

  if (theme.darkMode === "toggle") {
    return `${light}\n.dark {${darkVars}\n}`;
  }
  return `${light}\n@media (prefers-color-scheme: dark) {\n  :root {${darkVars}\n  }\n}`;
}
