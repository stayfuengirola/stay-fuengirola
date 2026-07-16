import type { MetadataRoute } from "next";
import { getGuideCategoryPath, getGuidePath, guideArticleAlternates, guideCategories, guideIndexAlternates } from "@/config/guides";
import { locales } from "@/i18n/locales";
import { alternateLanguages, siteUrl } from "@/lib/urls";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) => [
    {
      url: `${siteUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
      alternates: { languages: alternateLanguages() }
    },
    {
      url: `${siteUrl}${getGuidePath(locale)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: { languages: guideIndexAlternates() }
    },
    ...guideCategories.map((category) => ({
      url: `${siteUrl}${getGuideCategoryPath(locale, category.key)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: category.status === "published" ? 0.65 : 0.45,
      alternates: { languages: guideArticleAlternates(category.key) }
    })),
    {
      url: `${siteUrl}/${locale}/legal`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.2,
      alternates: { languages: alternateLanguages("/legal") }
    }
  ]);
}
