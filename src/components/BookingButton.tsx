"use client";

import { ArrowUpRight } from "lucide-react";
import { bookingUrl } from "@/config/booking";
import { Locale } from "@/i18n/locales";
import { currentPagePath, languageParam, trackEvent } from "@/lib/analytics";

export function BookingButton({
  label,
  locale,
  placement = "guide",
  className = "cta"
}: {
  label: string;
  locale: Locale;
  placement?: "floating" | "hero" | "guide" | "footer";
  className?: string;
}) {
  return (
    <a
      className={className}
      href={bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onClick={() =>
        trackEvent("booking_click", {
          placement,
          page_path: currentPagePath(),
          language: languageParam(locale)
        })
      }
    >
      {label}
      <ArrowUpRight aria-hidden="true" size={18} />
    </a>
  );
}
