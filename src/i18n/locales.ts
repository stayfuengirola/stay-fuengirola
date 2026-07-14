export const locales = ["es", "en", "fi", "sv", "no"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, { flag: string; code: string; name: string }> = {
  es: { flag: "🇪🇸", code: "ES", name: "Español" },
  en: { flag: "🇬🇧", code: "EN", name: "English" },
  fi: { flag: "🇫🇮", code: "FI", name: "Suomi" },
  sv: { flag: "🇸🇪", code: "SV", name: "Svenska" },
  no: { flag: "🇳🇴", code: "NO", name: "Norsk bokmål" }
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
