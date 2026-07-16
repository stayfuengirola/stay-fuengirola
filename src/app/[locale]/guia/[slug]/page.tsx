import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Car,
  CarTaxiFront,
  CheckCircle2,
  CircleHelp,
  Clock,
  Euro,
  Luggage,
  MapPin,
  MapPinned,
  Plane,
  Star,
  TrainFront
} from "lucide-react";
import { Header } from "@/components/Header";
import { CookieConsent } from "@/components/CookieConsent";
import { airportGuideContent } from "@/config/guideArticles";
import {
  getGuideCategoryBySlug,
  getGuideCategoryPath,
  getGuidePath,
  guideArticleAlternates,
  guideCategories
} from "@/config/guides";
import { property } from "@/config/property";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, Locale, locales } from "@/i18n/locales";
import { siteUrl } from "@/lib/urls";
import { notFound, redirect } from "next/navigation";

type Props = { params: Promise<{ locale: string; slug: string }> };

const optionIcons = [TrainFront, CarTaxiFront, Car, Luggage] as const;
const relatedKeys = ["beaches", "supermarkets", "restaurants", "transport"] as const;

export function generateStaticParams() {
  return locales.flatMap((locale) => guideCategories.map((category) => ({ locale, slug: category.slugs[locale] })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) return {};
  const locale = rawLocale;
  const category = getGuideCategoryBySlug(locale, slug);
  if (!category) return {};
  const t = getDictionary(locale);
  const isAirportGuide = category.key === "airport";
  const content = airportGuideContent[locale];
  const title = isAirportGuide ? content.metaTitle : `${t.guide[category.key]} | ${t.guide.title} | Stay Fuengirola`;
  const description = isAirportGuide ? content.metaDescription : `${t.guide[`${category.key}Text`]} ${t.guide.comingSoon}.`;
  const url = `${siteUrl}${getGuideCategoryPath(locale, category.key)}`;

  return {
    title,
    description,
    alternates: { canonical: url, languages: guideArticleAlternates(category.key) },
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
  const locale: Locale = rawLocale;
  const category = getGuideCategoryBySlug(locale, slug);

  if (!category) {
    const oldCategory = guideCategories.find((item) => item.slugs.es === slug);
    if (oldCategory) redirect(getGuideCategoryPath(locale, oldCategory.key));
    notFound();
  }

  const t = getDictionary(locale);

  if (category.key === "airport") {
    return <AirportGuidePage locale={locale} dictionary={t} />;
  }

  return (
    <div className="shell">
      <Header locale={locale} nav={t.nav} menuLabel={t.common.menu} />
      <main className="section guide-page">
        <div className="container guide-detail">
          <Link className="text-link" href={getGuidePath(locale)}>
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

function AirportGuidePage({ locale, dictionary: t }: { locale: Locale; dictionary: ReturnType<typeof getDictionary> }) {
  const content = airportGuideContent[locale];
  const articleUrl = `${siteUrl}${getGuideCategoryPath(locale, "airport")}`;
  const guideUrl = `${siteUrl}${getGuidePath(locale)}`;
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Stay Fuengirola", item: `${siteUrl}/${locale}` },
      { "@type": "ListItem", position: 2, name: content.breadcrumbGuide, item: guideUrl },
      { "@type": "ListItem", position: 3, name: content.breadcrumbArticle, item: articleUrl }
    ]
  };
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: content.h1,
    description: content.metaDescription,
    mainEntityOfPage: articleUrl,
    author: { "@type": "Organization", name: property.brandName },
    publisher: { "@type": "Organization", name: property.brandName },
    about: content.schemaAbout,
    inLanguage: locale,
    dateModified: "2026-07-16"
  };

  return (
    <div className="shell">
      <Header locale={locale} nav={t.nav} menuLabel={t.common.menu} />
      <main className="section guide-page">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <article className="container guide-article">
          <Link className="text-link" href={getGuidePath(locale)}>
            <ArrowLeft aria-hidden="true" size={18} />
            {t.guide.back}
          </Link>

          <header className="guide-hero-card">
            <span className="guide-hero-icon">
              <MapPin aria-hidden="true" size={30} />
            </span>
            <p className="guide-kicker">{content.kicker}</p>
            <h1>{content.h1}</h1>
            <p>{content.intro}</p>
          </header>

          <section className="airport-options" aria-label={content.optionsAria}>
            {content.options.map((option, index) => {
              const Icon = optionIcons[index];
              return (
                <div className={option.recommended ? "airport-option recommended" : "airport-option"} key={option.title}>
                  <Icon aria-hidden="true" size={28} />
                  <h2>{option.title}</h2>
                  <dl>
                    <div>
                      <Clock aria-hidden="true" size={16} />
                      <dt>{content.labels.time}</dt>
                      <dd>{option.time}</dd>
                    </div>
                    <div>
                      <Euro aria-hidden="true" size={16} />
                      <dt>{content.labels.price}</dt>
                      <dd>{option.price}</dd>
                    </div>
                  </dl>
                  <strong>
                    {option.recommended ? (
                      <>
                        <span aria-label={content.labels.fiveStars}>★★★★★</span> {option.note}
                      </>
                    ) : (
                      option.note
                    )}
                  </strong>
                </div>
              );
            })}
          </section>

          {content.sections.slice(0, 1).map((section) => (
            <ArticleSection section={section} key={section.id} />
          ))}

          <section className="guide-map-block" aria-label={content.mapAria}>
            <iframe
              title={content.mapTitle}
              src="https://www.google.com/maps?q=Aeropuerto%20de%20M%C3%A1laga%20to%20Fuengirola&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </section>

          {content.sections.slice(1).map((section) =>
            section.featured ? (
              <section className="guide-recommendation" id={section.id} key={section.id}>
                <Star aria-hidden="true" size={28} />
                <div>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ) : (
              <ArticleSection section={section} key={section.id} />
            )
          )}

          <section className="guide-content-section" id="faq">
            <h2>{content.faqTitle}</h2>
            <div className="guide-faq-list">
              {content.faqs.map((item) => (
                <details className="guide-faq-item" key={item.question}>
                  <summary>
                    <CircleHelp aria-hidden="true" size={18} />
                    {item.question}
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="guide-content-section" id="personal-recommendation">
            <h2>{content.personalTitle}</h2>
            <ul className="guide-check-list">
              {content.personalTips.map((tip) => (
                <li key={tip}>
                  <CheckCircle2 aria-hidden="true" size={18} />
                  {tip}
                </li>
              ))}
            </ul>
          </section>

          <section className="guide-related" aria-labelledby="related-title">
            <h2 id="related-title">{content.relatedTitle}</h2>
            <div className="guide-related-grid">
              {relatedKeys.map((key) => {
                const related = content.related[key];
                return (
                  <Link className="guide-related-card" href={getGuideCategoryPath(locale, key)} key={key}>
                    <MapPinned aria-hidden="true" size={22} />
                    <strong>{related.title}</strong>
                    <span>{related.text}</span>
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="guide-cta">
            <Plane aria-hidden="true" size={30} />
            <h2>{content.ctaTitle}</h2>
            <p>{content.ctaText}</p>
          </section>
        </article>
      </main>
      <CookieConsent title={t.cookies.title} text={t.cookies.text} accept={t.cookies.accept} reject={t.cookies.reject} />
    </div>
  );
}

function ArticleSection({ section }: { section: { id: string; title: string; paragraphs: string[] } }) {
  return (
    <section className="guide-content-section" id={section.id}>
      <h2>{section.title}</h2>
      {section.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  );
}
