import { Locale, locales } from "@/i18n/locales";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://stayfuengirola.com";

export function localizedPath(locale: Locale, hash = "") {
  return `/${locale}${hash}`;
}

export function alternateLanguages(hash = "") {
  return {
    ...Object.fromEntries(locales.map((locale) => [locale, `${siteUrl}${localizedPath(locale, hash)}`])),
    "x-default": `${siteUrl}${localizedPath("en", hash)}`
  };
}
