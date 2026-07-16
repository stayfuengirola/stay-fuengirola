import type { Metadata } from "next";
import Link from "next/link";
import { MapPinned } from "lucide-react";
import { Header } from "@/components/Header";
import { CookieConsent } from "@/components/CookieConsent";
import { guideCategories } from "@/config/guides";
import { property } from "@/config/property";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, Locale, locales } from "@/i18n/locales";
import { alternateLanguages, localizedPath, siteUrl } from "@/lib/urls";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const locale = rawLocale;
  const t = getDictionary(locale);
  const url = `${siteUrl}${localizedPath(locale, "/guia")}`;

  return {
    title: t.guide.metaTitle,
    description: t.guide.metaDescription,
    alternates: { canonical: url, languages: alternateLanguages("/guia") },
    openGraph: {
      title: t.guide.metaTitle,
      description: t.guide.metaDescription,
      url,
      siteName: property.brandName,
      locale,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: t.guide.metaTitle,
      description: t.guide.metaDescription,
      images: ["/images/fuengirola-beach.webp"]
    }
  };
}

export default async function GuidePage({ params }: Props) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const t = getDictionary(locale);

  return (
    <div className="shell">
      <Header locale={locale} nav={t.nav} menuLabel={t.common.menu} />
      <main className="section guide-page">
        <div className="container">
          <span className="eyebrow guide-eyebrow">Fuengirola · Costa del Sol</span>
          <h1 className="section-title">{t.guide.title}</h1>
          <p className="lead">{t.guide.intro}</p>
          <div className="guide-grid">
            {guideCategories.map((category) => (
              <Link className="guide-card" href={`/${locale}/guia/${category.slug}`} key={category.key}>
                <MapPinned aria-hidden="true" size={24} />
                <h2>{t.guide[category.key]}</h2>
                <p>{t.guide[`${category.key}Text`]}</p>
                <strong>{t.guide.comingSoon}</strong>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <CookieConsent title={t.cookies.title} text={t.cookies.text} accept={t.cookies.accept} reject={t.cookies.reject} />
    </div>
  );
}
