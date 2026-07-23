"use client";

import { ReactNode } from "react";
import type { TransportAnalyticsMode, TransportLinkDestination } from "@/config/transportGuide";
import { Locale } from "@/i18n/locales";
import { currentPagePath, languageParam, trackEvent } from "@/lib/analytics";

export function TransportOfficialLink({
  children,
  className,
  destination,
  href,
  locale,
  mode
}: {
  children: ReactNode;
  className?: string;
  destination: TransportLinkDestination;
  href: string;
  locale: Locale;
  mode: TransportAnalyticsMode;
}) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackEvent("transport_official_click", {
          transport_mode: mode,
          destination,
          page_path: currentPagePath(),
          language: languageParam(locale)
        })
      }
    >
      {children}
    </a>
  );
}
