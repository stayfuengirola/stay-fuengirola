import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MapPinned } from "lucide-react";
import { Header } from "@/components/Header";
import { CookieConsent } from "@/components/CookieConsent";
import { getGuideCategory, guideCategories } from "@/config/guides";
import { property } from "@/config/property";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, Locale, locales } from "@/i18n/locales";
import { alternateLanguages, localizedPath, siteUrl } from "@/lib/urls";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => guideCategories.map((category) => ({ locale, slug: category.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) return {};
  const category = getGuideCategory(slug);
  if (!category) return {};
  const locale = rawLocale;
  const t = getDictionary(locale);
  const title = `${t.guide[category.key]} | ${t.guide.title} | Stay Fuengirola`;
  const description = `${t.guide[`${category.key}Text`]} ${t.guide.comingSoon}.`;
  const path = `/guia/${category.slug}`;
  const url = `${siteUrl}${localizedPath(locale, path)}`;

  return {
    title,
    description,
    alternates: { canonical: url, languages: alternateLanguages(path) },
    openGraph: {
      title,
      description,
      url,
      siteName: property.brandName,
      locale,
      type: "article"
    },
    twitter: {
      card: "summary",
      title,
      description
    }
  };
}

export default async function GuideCategoryPage({ params }: Props) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const category = getGuideCategory(slug);
  if (!category) notFound();
  const locale: Locale = rawLocale;
  const t = getDictionary(locale);

  return (
    <div className="shell">
      <Header locale={locale} nav={t.nav} menuLabel={t.common.menu} />
      <main className="section guide-page">
        <div className="container guide-detail">
          <Link className="text-link" href={`/${locale}/guia`}>
            <ArrowLeft aria-hidden="true" size={18} />
            {t.guide.back}
          </Link>
          <div className="guide-detail-card">
            <MapPinned aria-hidden="true" size={32} />
            <h1 className="section-title">{t.guide[category.key]}</h1>
            <p className="lead">{t.guide[`${category.key}Text`]}</p>
            <strong>{t.guide.comingSoon}</strong>
          </div>
        </div>
      </main>
      <CookieConsent title={t.cookies.title} text={t.cookies.text} accept={t.cookies.accept} reject={t.cookies.reject} />
    </div>
  );
}
