import { MessageCircle } from "lucide-react";
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
  return (
    <a className={className} href={getWhatsappUrl(locale)} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <MessageCircle aria-hidden="true" size={18} />
      {label}
    </a>
  );
}
