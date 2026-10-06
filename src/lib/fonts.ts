import {
  Inter,
  Poppins,
  Manrope,
  DM_Sans,
  Plus_Jakarta_Sans,
  Montserrat,
  Outfit,
  Sora,
} from "next/font/google";
import type { FontName } from "@/config/site.schema";

/**
 * next/font needs literal, top-level calls at build time, so every supported
 * font is declared here and config selects by name. Browsers only download
 * font files for families that are actually used on the page.
 */
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});
const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope" });
const dmSans = DM_Sans({ subsets: ["latin"], display: "swap", variable: "--font-dm-sans" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap", variable: "--font-jakarta" });
const montserrat = Montserrat({ subsets: ["latin"], display: "swap", variable: "--font-montserrat" });
const outfit = Outfit({ subsets: ["latin"], display: "swap", variable: "--font-outfit" });
const sora = Sora({ subsets: ["latin"], display: "swap", variable: "--font-sora" });

const REGISTRY: Record<FontName, { cssVar: string; variableClass: string }> = {
  Inter: { cssVar: "--font-inter", variableClass: inter.variable },
  Poppins: { cssVar: "--font-poppins", variableClass: poppins.variable },
  Manrope: { cssVar: "--font-manrope", variableClass: manrope.variable },
  "DM Sans": { cssVar: "--font-dm-sans", variableClass: dmSans.variable },
  "Plus Jakarta Sans": { cssVar: "--font-jakarta", variableClass: jakarta.variable },
  Montserrat: { cssVar: "--font-montserrat", variableClass: montserrat.variable },
  Outfit: { cssVar: "--font-outfit", variableClass: outfit.variable },
  Sora: { cssVar: "--font-sora", variableClass: sora.variable },
};

/**
 * Returns the class names to put on <html> and the CSS that maps
 * --font-heading / --font-body (used by tailwind.config.ts) to the chosen fonts.
 */
export function resolveFonts(fonts: { heading: FontName; body: FontName }) {
  const heading = REGISTRY[fonts.heading];
  const body = REGISTRY[fonts.body];
  const classes = Array.from(new Set([heading.variableClass, body.variableClass])).join(" ");
  const css = `:root{--font-heading:var(${heading.cssVar});--font-body:var(${body.cssVar});}`;
  return { classes, css };
}
