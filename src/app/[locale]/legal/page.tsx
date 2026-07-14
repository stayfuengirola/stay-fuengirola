import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { CookieConsent } from "@/components/CookieConsent";
import { property } from "@/config/property";
import { seoByLocale } from "@/config/seo";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, Locale, locales } from "@/i18n/locales";
import { alternateLanguages, localizedPath, siteUrl } from "@/lib/urls";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const seo = seoByLocale[locale];
  const url = `${siteUrl}${localizedPath(locale, "/legal")}`;
  return {
    title: seo.legalTitle,
    description: seo.legalDescription,
    alternates: { canonical: url, languages: alternateLanguages("/legal") },
    robots: { index: false, follow: true },
    openGraph: {
      title: seo.legalTitle,
      description: seo.legalDescription,
      url,
      siteName: property.brandName,
      locale,
      type: "website"
    },
    twitter: {
      card: "summary",
      title: seo.legalTitle,
      description: seo.legalDescription
    }
  };
}

export default async function LegalPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const t = getDictionary(locale);
  return (
    <div className="shell">
      <Header locale={locale} nav={t.nav} menuLabel={t.common.menu} />
      <main className="section">
        <div className="container">
          <h1 className="section-title" id="legal">{t.legal.title}</h1>
          <p className="lead">{t.legal.text}</p>
          <section id="privacy" style={{ marginTop: 42 }}>
            <h2>{t.footer.privacy}</h2>
            <p>{t.legal.privacy}</p>
          </section>
          <section id="cookies" style={{ marginTop: 32 }}>
            <h2>{t.footer.cookies}</h2>
            <p>{t.legal.cookies}</p>
          </section>
          <p>{t.footer.disclaimer}</p>
        </div>
      </main>
      <CookieConsent title={t.cookies.title} text={t.cookies.text} accept={t.cookies.accept} reject={t.cookies.reject} />
    </div>
  );
}
