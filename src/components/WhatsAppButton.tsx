"use client";

import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { getWhatsappUrl } from "@/config/whatsapp";
import { Locale } from "@/i18n/locales";
import { currentPagePath, languageParam, trackEvent } from "@/lib/analytics";

export function WhatsAppButton({
  locale,
  label,
  className = "cta secondary"
}: {
  locale: Locale;
  label: string;
  className?: string;
}) {
  const isFloating = className.split(" ").includes("whatsapp-float");

  return (
    <a
      className={className}
      href={getWhatsappUrl(locale)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onClick={() => {
        if (!isFloating) return;
        trackEvent("whatsapp_click", {
          placement: "floating",
          page_path: currentPagePath(),
          language: languageParam(locale)
        });
      }}
    >
      {isFloating ? (
        <Image
          src="/images/icons/whatsapp.svg"
          alt=""
          width={34}
          height={34}
          className="whatsapp-logo"
          aria-hidden="true"
        />
      ) : (
        <>
          <MessageCircle aria-hidden="true" size={18} />
          {label}
        </>
      )}
    </a>
  );
}
