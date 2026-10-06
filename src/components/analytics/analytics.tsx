import Script from "next/script";
import { siteConfig } from "@/lib/config";

/** IDs go into inline scripts, so only allow safe characters. */
const SAFE_ID = /^[A-Za-z0-9_-]+$/;

/** Loads GA4, Meta Pixel and Cloudflare Web Analytics. Each one only if its ID is set. */
export function Analytics() {
  const { googleAnalyticsId: ga, metaPixelId: meta, cloudflareWebAnalyticsToken: cf } = siteConfig.analytics;

  return (
    <>
      {ga && SAFE_ID.test(ga) && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga}');`}
          </Script>
        </>
      )}

      {meta && SAFE_ID.test(meta) && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${meta}');fbq('track','PageView');`}
        </Script>
      )}

      {cf && SAFE_ID.test(cf) && (
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          data-cf-beacon={JSON.stringify({ token: cf })}
        />
      )}
    </>
  );
}
