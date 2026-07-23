"use client";

import { ReactNode } from "react";
import { BioparcLinkDestination } from "@/config/bioparcGuide";
import { Locale } from "@/i18n/locales";
import { currentPagePath, languageParam, trackEvent } from "@/lib/analytics";

export function AttractionOfficialLink({
  children,
  className,
  destination,
  href,
  locale
}: {
  children: ReactNode;
  className?: string;
  destination: BioparcLinkDestination;
  href: string;
  locale: Locale;
}) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackEvent("attraction_official_click", {
          attraction: "bioparc-fuengirola",
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
