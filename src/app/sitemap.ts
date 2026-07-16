import type { MetadataRoute } from "next";
import { guideCategories } from "@/config/guides";
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
      url: `${siteUrl}/${locale}/guia`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: { languages: alternateLanguages("/guia") }
    },
    ...guideCategories.map((category) => ({
      url: `${siteUrl}/${locale}/guia/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
      alternates: { languages: alternateLanguages(`/guia/${category.slug}`) }
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
