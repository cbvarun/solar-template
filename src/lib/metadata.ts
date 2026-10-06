import type { Metadata } from "next";
import { siteConfig, t } from "@/lib/config";
import { absoluteUrl } from "@/lib/utils";

interface PageMeta {
  /** Page title WITHOUT the company suffix. Omit for the home page. */
  title?: string;
  description?: string;
  /** Path starting with "/", with trailing slash, e.g. "/services/" */
  path: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  noindex,
}: PageMeta): Metadata {
  const fullTitle = title
    ? t(siteConfig.seo.titleTemplate.replace("%s", title))
    : t(siteConfig.seo.defaultTitle);
  const desc = t(description ?? siteConfig.company.description);
  const url = absoluteUrl(siteConfig.seo.siteUrl, path);
  const ogImage = absoluteUrl(siteConfig.seo.siteUrl, image ?? siteConfig.company.ogImage);

  return {
    // `absolute` so the root layout's title template isn't applied twice.
    title: { absolute: fullTitle },
    description: desc,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      type,
      url,
      title: fullTitle,
      description: desc,
      siteName: siteConfig.company.name,
      locale: siteConfig.seo.locale,
      images: [{ url: ogImage, width: 1200, height: 630, alt: siteConfig.company.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [ogImage],
      ...(siteConfig.seo.twitterHandle ? { site: siteConfig.seo.twitterHandle } : {}),
    },
  };
}
