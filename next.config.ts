import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages. Build output goes to ./out
  output: "export",
  // /about/ -> out/about/index.html (clean URLs on Cloudflare Pages)
  trailingSlash: true,
  images: {
    // Default image optimization needs a server; not available in static export.
    unoptimized: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
