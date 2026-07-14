"use client";

import { usePathname, useRouter } from "next/navigation";
import { Locale, localeLabels, locales } from "@/i18n/locales";

export function LanguageSelect({ locale }: { locale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();

  function changeLocale(nextLocale: Locale) {
    const parts = pathname.split("/");
    if (locales.includes(parts[1] as Locale)) {
      parts[1] = nextLocale;
      router.push(parts.join("/") || `/${nextLocale}`);
    } else {
      router.push(`/${nextLocale}`);
    }
  }

  return (
    <select
      className="language"
      aria-label="Language"
      value={locale}
      onChange={(event) => changeLocale(event.target.value as Locale)}
    >
      {locales.map((item) => (
        <option key={item} value={item}>
          {localeLabels[item].flag} {localeLabels[item].code}
        </option>
      ))}
    </select>
  );
}
