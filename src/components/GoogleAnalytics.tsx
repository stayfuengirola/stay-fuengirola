"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { cookieConsentStorageKey, googleAnalyticsId } from "@/config/analytics";

function PageViewTracker({ ready }: { ready: boolean }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!ready || !pathname || typeof window.gtag !== "function") return;

    const query = searchParams.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;

    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
      send_to: googleAnalyticsId
    });
  }, [pathname, ready, searchParams]);

  return null;
}

export function GoogleAnalytics() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive" onReady={() => setReady(true)}>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          const storedConsent = localStorage.getItem('${cookieConsentStorageKey}');
          gtag('consent', 'default', {
            analytics_storage: storedConsent === 'accepted' ? 'granted' : 'denied'
          });
          gtag('js', new Date());
          gtag('config', '${googleAnalyticsId}', { send_page_view: false });
        `}
      </Script>
      <Suspense fallback={null}>
        <PageViewTracker ready={ready} />
      </Suspense>
    </>
  );
}
