import type { MetadataRoute } from "next";
import { locales } from "@/i18n/locales";
import { siteUrl } from "@/lib/urls";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) => [
    {
      url: `${siteUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1
    },
    {
      url: `${siteUrl}/${locale}/legal`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3
    }
  ]);
}
