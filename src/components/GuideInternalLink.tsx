"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { Locale } from "@/i18n/locales";
import { currentPagePath, languageParam, trackEvent } from "@/lib/analytics";

export function GuideInternalLink({
  children,
  className,
  destination,
  href,
  locale,
  sourceGuide
}: {
  children: ReactNode;
  className?: string;
  destination: string;
  href: string;
  locale: Locale;
  sourceGuide: string;
}) {
  return (
    <Link
      className={className}
      href={href}
      onClick={() =>
        trackEvent("guide_internal_click", {
          source_guide: sourceGuide,
          destination,
          page_path: currentPagePath(),
          language: languageParam(locale)
        })
      }
    >
      {children}
    </Link>
  );
}
