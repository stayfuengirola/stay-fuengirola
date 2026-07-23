"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { getGuideCategoryByAnySlug, getGuideCategoryBySlug, getGuideCategoryPath, getGuidePath, isGuideBaseSegment } from "@/config/guides";
import { Locale, localeLabels, locales } from "@/i18n/locales";
import { currentPagePath, trackEvent } from "@/lib/analytics";

export function LanguageSelect({ locale }: { locale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function changeLocale(nextLocale: Locale) {
    if (nextLocale === locale) {
      setOpen(false);
      return;
    }

    trackEvent("language_change", {
      from_language: locale,
      to_language: nextLocale,
      page_path: currentPagePath()
    });

    const parts = pathname.split("/");
    const currentLocale = parts[1] as Locale;
    const guideSegment = parts[2];
    const slug = parts[3];

    if (locales.includes(currentLocale) && guideSegment && isGuideBaseSegment(currentLocale, guideSegment)) {
      if (slug) {
        const category = getGuideCategoryBySlug(currentLocale, slug) ?? getGuideCategoryByAnySlug(slug);
        if (category) {
          router.push(getGuideCategoryPath(nextLocale, category.key));
          setOpen(false);
          return;
        }
      }
      router.push(getGuidePath(nextLocale));
      setOpen(false);
      return;
    }

    if (locales.includes(currentLocale)) {
      parts[1] = nextLocale;
      router.push(parts.join("/") || `/${nextLocale}`);
    } else {
      router.push(`/${nextLocale}`);
    }
    setOpen(false);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") setOpen(false);
  }

  const current = localeLabels[locale];

  return (
    <div
      className="language-picker"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={onKeyDown}
    >
      <button
        className="language"
        type="button"
        aria-label={`${current.name}. Change language`}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className={`flag flag-${locale}`} aria-hidden="true" />
        <span>{current.code}</span>
      </button>
      {open ? (
        <div className="language-menu" role="listbox" aria-label="Language">
          {locales.map((item) => (
            <button
              className="language-option"
              type="button"
              key={item}
              role="option"
              aria-selected={item === locale}
              onClick={() => changeLocale(item)}
            >
              <span className={`flag flag-${item}`} aria-hidden="true" />
              <span>{localeLabels[item].code}</span>
              <span className="sr-only">{localeLabels[item].name}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
