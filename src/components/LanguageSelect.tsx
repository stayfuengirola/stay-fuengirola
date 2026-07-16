"use client";

import { usePathname, useRouter } from "next/navigation";
import { getGuideCategoryByAnySlug, getGuideCategoryBySlug, getGuideCategoryPath, getGuidePath, isGuideBaseSegment } from "@/config/guides";
import { Locale, localeLabels, locales } from "@/i18n/locales";

export function LanguageSelect({ locale }: { locale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();

  function changeLocale(nextLocale: Locale) {
    const parts = pathname.split("/");
    const currentLocale = parts[1] as Locale;
    const guideSegment = parts[2];
    const slug = parts[3];

    if (locales.includes(currentLocale) && guideSegment && isGuideBaseSegment(currentLocale, guideSegment)) {
      if (slug) {
        const category = getGuideCategoryBySlug(currentLocale, slug) ?? getGuideCategoryByAnySlug(slug);
        if (category) {
          router.push(getGuideCategoryPath(nextLocale, category.key));
          return;
        }
      }
      router.push(getGuidePath(nextLocale));
      return;
    }

    if (locales.includes(currentLocale)) {
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
