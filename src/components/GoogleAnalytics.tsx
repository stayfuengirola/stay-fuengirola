"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import {
  GA_MEASUREMENT_ID,
  canUseAnalytics,
  cookieConsentStorageKey,
  isAnalyticsBuildEnabled,
  syncAnalyticsOptOutFromUrl,
  trackPageView
} from "@/lib/analytics";

function PageViewTracker({ ready }: { ready: boolean }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastPagePath = useRef<string>("");

  useEffect(() => {
    if (!ready || !pathname) return;

    const query = searchParams.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;
    if (lastPagePath.current === pagePath) return;

    lastPagePath.current = pagePath;
    trackPageView(pagePath);
  }, [pathname, ready, searchParams]);

  return null;
}

export function GoogleAnalytics() {
  const [ready, setReady] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    syncAnalyticsOptOutFromUrl();
    setEnabled(canUseAnalytics());
  }, []);

  if (!isAnalyticsBuildEnabled() || !enabled) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive" onReady={() => setReady(true)}>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          const storedConsent = localStorage.getItem('${cookieConsentStorageKey}');
          gtag('consent', 'default', {
            analytics_storage: storedConsent === 'accepted' ? 'granted' : 'denied'
          });
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
        `}
      </Script>
      <Suspense fallback={null}>
        <PageViewTracker ready={ready} />
      </Suspense>
    </>
  );
}
