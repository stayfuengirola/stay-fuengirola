import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { getWhatsappUrl } from "@/config/whatsapp";
import { Locale } from "@/i18n/locales";

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
      aria-label={isFloating ? "Contactar por WhatsApp" : label}
    >
      {isFloating ? (
        <Image
          src="/images/icons/whatsapp.png"
          alt=""
          width={33}
          height={33}
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
