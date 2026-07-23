import { Locale, locales } from "@/i18n/locales";
import { siteUrl } from "@/lib/urls";

export const guideBaseSegments: Record<Locale, string> = {
  es: "guia",
  en: "guide",
  fi: "opas",
  sv: "guide",
  no: "guide"
};

export const guideCategories = [
  {
    key: "airport",
    status: "published",
    slugs: {
      es: "como-llegar-desde-el-aeropuerto",
      en: "how-to-get-from-malaga-airport-to-fuengirola",
      fi: "miten-paasta-malagan-lentokentalta-fuengirolaan",
      sv: "fran-malaga-flygplats-till-fuengirola",
      no: "fra-malaga-flyplass-til-fuengirola"
    }
  },
  {
    key: "beaches",
    status: "published",
    slugs: { es: "playas", en: "beaches", fi: "rannat", sv: "strander", no: "strender" }
  },
  {
    key: "supermarkets",
    status: "draft",
    slugs: { es: "supermercados", en: "supermarkets", fi: "supermarketit", sv: "mataffarer", no: "supermarkeder" }
  },
  {
    key: "restaurants",
    status: "published",
    slugs: { es: "restaurantes", en: "restaurants", fi: "ravintolat", sv: "restauranger", no: "restauranter" }
  },
  {
    key: "shopping",
    status: "published",
    slugs: { es: "compras", en: "shopping", fi: "ostokset", sv: "shopping", no: "shopping" }
  },
  {
    key: "transport",
    status: "draft",
    slugs: { es: "transporte", en: "transport", fi: "liikkuminen", sv: "transport", no: "transport" }
  },
  {
    key: "excursions",
    status: "draft",
    slugs: { es: "excursiones", en: "excursions", fi: "retket", sv: "utflykter", no: "utflukter" }
  },
  {
    key: "thingsToDo",
    status: "published",
    slugs: { es: "que-hacer", en: "things-to-do", fi: "mita-tehda", sv: "saker-att-gora", no: "ting-a-gjore" }
  },
  {
    key: "bioparc",
    status: "published",
    slugs: { es: "bioparc-fuengirola", en: "bioparc-fuengirola", fi: "bioparc-fuengirola", sv: "bioparc-fuengirola", no: "bioparc-fuengirola" }
  },
  {
    key: "rain",
    status: "draft",
    slugs: {
      es: "que-hacer-cuando-llueve",
      en: "what-to-do-when-it-rains",
      fi: "mita-tehda-sateella",
      sv: "vad-man-kan-gora-nar-det-regnar",
      no: "hva-du-kan-gjore-nar-det-regner"
    }
  }
] as const;

export type GuideCategory = (typeof guideCategories)[number];
export type GuideCategoryKey = GuideCategory["key"];
export type GuideStatus = GuideCategory["status"];

export function getGuidePath(locale: Locale) {
  return `/${locale}/${guideBaseSegments[locale]}`;
}

export function getGuideCategoryPath(locale: Locale, key: GuideCategoryKey) {
  const category = getGuideCategoryByKey(key);
  return `${getGuidePath(locale)}/${category.slugs[locale]}`;
}

export function getGuideCategoryByKey(key: GuideCategoryKey) {
  return guideCategories.find((category) => category.key === key)!;
}

export function getGuideCategoryBySlug(locale: Locale, slug: string) {
  return guideCategories.find((category) => category.slugs[locale] === slug);
}

export function getGuideCategoryByAnySlug(slug: string) {
  return guideCategories.find((category) => locales.some((locale) => category.slugs[locale] === slug));
}

export function isGuideBaseSegment(locale: Locale, segment: string) {
  return segment === guideBaseSegments[locale] || segment === "guia";
}

export function guideIndexAlternates() {
  return {
    ...Object.fromEntries(locales.map((locale) => [locale, `${siteUrl}${getGuidePath(locale)}`])),
    "x-default": `${siteUrl}${getGuidePath("en")}`
  };
}

export function guideArticleAlternates(key: GuideCategoryKey) {
  return {
    ...Object.fromEntries(locales.map((locale) => [locale, `${siteUrl}${getGuideCategoryPath(locale, key)}`])),
    "x-default": `${siteUrl}${getGuideCategoryPath("en", key)}`
  };
}
