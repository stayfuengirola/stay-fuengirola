"use client";

import { ArrowUpRight } from "lucide-react";
import { bookingUrl } from "@/config/booking";
import { Locale } from "@/i18n/locales";
import { currentPagePath, languageParam, trackEvent } from "@/lib/analytics";

export function FloatingBookingButton({ label, locale }: { label: string; locale: Locale }) {
  return (
    <a
      className="booking-float"
      href={bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onClick={() =>
        trackEvent("booking_click", {
          placement: "floating",
          page_path: currentPagePath(),
          language: languageParam(locale)
        })
      }
    >
      <span>{label}</span>
      <ArrowUpRight aria-hidden="true" size={18} />
    </a>
  );
}
