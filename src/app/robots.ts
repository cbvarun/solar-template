import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { absoluteUrl } from "@/lib/utils";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/thank-you/"] },
    sitemap: absoluteUrl(siteConfig.seo.siteUrl, "/sitemap.xml"),
  };
}
