import { Locale } from "@/i18n/locales";
import { property } from "@/config/property";

export const whatsappMessages: Record<Locale, string> = {
  es: "Hola, he visto la web de Apartamento Veramar Fuengirola y me gustaría hacer una consulta.",
  en: "Hello, I have visited the Apartamento Veramar Fuengirola website and I would like to ask a question.",
  fi: "Hei, olen tutustunut Apartamento Veramar Fuengirola -verkkosivuun ja haluaisin kysyä lisätietoja.",
  sv: "Hej, jag har besökt webbplatsen för Apartamento Veramar Fuengirola och skulle vilja ställa en fråga.",
  no: "Hei, jeg har besøkt nettsiden til Apartamento Veramar Fuengirola og ønsker å stille et spørsmål."
};

export function getWhatsappUrl(locale: Locale) {
  return `${property.whatsappBaseUrl}?text=${encodeURIComponent(whatsappMessages[locale])}`;
}
