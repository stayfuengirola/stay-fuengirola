import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Accessibility,
  Car,
  CarTaxiFront,
  Castle,
  CheckCircle2,
  CircleHelp,
  Clock,
  Dog,
  ExternalLink,
  Euro,
  Footprints,
  Leaf,
  Luggage,
  MapPin,
  MapPinned,
  Plane,
  ShowerHead,
  ShoppingBag,
  Star,
  Sun,
  TrainFront,
  Umbrella,
  Users,
  Utensils,
  Waves
} from "lucide-react";
import { AttractionOfficialLink } from "@/components/AttractionOfficialLink";
import { BeachGuideMap } from "@/components/BeachGuideMap";
import { BioparcGuideMap } from "@/components/BioparcGuideMap";
import { BookingButton } from "@/components/BookingButton";
import { EventsSection } from "@/components/EventsSection";
import { ExcursionOfficialLink, ExcursionPlanner } from "@/components/ExcursionPlanner";
import { ExcursionsGuideMap } from "@/components/ExcursionsGuideMap";
import { GuideInternalLink } from "@/components/GuideInternalLink";
import { Header } from "@/components/Header";
import { CookieConsent } from "@/components/CookieConsent";
import { ShoppingGuideMap } from "@/components/ShoppingGuideMap";
import { ShoppingStoreDirectory } from "@/components/ShoppingStoreDirectory";
import { SupermarketGuideMap } from "@/components/SupermarketGuideMap";
import { ArrivalChecklist, SupermarketExternalLink, SupermarketFilterGrid } from "@/components/SupermarketGuideTools";
import { bioparcGuideContent, bioparcOfficialLinks } from "@/config/bioparcGuide";
import { fuengirolaEvents, getPublishedEvents, permanentActivities } from "@/config/events";
import { airportGuideContent } from "@/config/guideArticles";
import { beachGuideContent } from "@/config/beachGuide";
import { excursionsGuideContent } from "@/config/excursionsGuide";
import { restaurantGuideContent } from "@/config/restaurantGuide";
import { shoppingGuideContent } from "@/config/shoppingGuide";
import { supermarketGuideContent } from "@/config/supermarketGuide";
import { thingsToDoGuideContent } from "@/config/thingsToDoGuide";
import { thingsToDoEventsContent } from "@/config/thingsToDoEvents";
import {
  getGuideCategoryBySlug,
  getGuideCategoryPath,
  getGuidePath,
  guideArticleAlternates,
  guideCategories
} from "@/config/guides";
import { property } from "@/config/property";
import { miramarStoresDirectoryUrl, shoppingStores } from "@/data/shoppingStores";
import { excursions, secondaryExcursionIdeas } from "@/data/excursions";
import { supermarkets } from "@/data/supermarkets";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, Locale, locales } from "@/i18n/locales";
import { siteUrl } from "@/lib/urls";
import { notFound, redirect } from "next/navigation";

type Props = { params: Promise<{ locale: string; slug: string }> };

const optionIcons = [TrainFront, CarTaxiFront, Car, Luggage] as const;
const relatedKeys = ["beaches", "supermarkets", "restaurants", "transport"] as const;
const bioparcIconMap = {
  map: MapPin,
  family: Users,
  clock: Clock,
  accessibility: Accessibility,
  ticket: Euro,
  sun: Sun,
  leaf: Leaf,
  car: Car,
  taxi: CarTaxiFront,
  walk: Footprints,
  utensils: Utensils,
  parking: Car,
  bag: ShoppingBag,
  calendar: Clock
} as const;
const beachFeatureIcons = {
  families: Users,
  water: Waves,
  showers: ShowerHead,
  bars: Utensils,
  sunbeds: Umbrella,
  surf: Waves,
  dogs: Dog,
  toilets: CircleHelp,
  accessible: Accessibility
} as const;

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
  const isBeachGuide = category.key === "beaches";
  const isSupermarketGuide = category.key === "supermarkets";
  const isRestaurantGuide = category.key === "restaurants";
  const isShoppingGuide = category.key === "shopping";
  const isExcursionsGuide = category.key === "excursions";
  const isThingsToDoGuide = category.key === "thingsToDo";
  const isBioparcGuide = category.key === "bioparc";
  const airportContent = airportGuideContent[locale];
  const beachContent = beachGuideContent[locale];
  const supermarketContent = supermarketGuideContent[locale];
  const restaurantContent = restaurantGuideContent[locale];
  const shoppingContent = shoppingGuideContent[locale];
  const excursionsContent = excursionsGuideContent[locale];
  const thingsToDoContent = thingsToDoGuideContent[locale];
  const bioparcContent = bioparcGuideContent[locale];
  const title = isAirportGuide
    ? airportContent.metaTitle
    : isBeachGuide
      ? beachContent.metaTitle
      : isSupermarketGuide
        ? supermarketContent.metaTitle
        : isRestaurantGuide
          ? restaurantContent.metaTitle
          : isShoppingGuide
            ? shoppingContent.metaTitle
            : isExcursionsGuide
              ? excursionsContent.metaTitle
              : isThingsToDoGuide
                ? thingsToDoContent.metaTitle
                : isBioparcGuide
                  ? bioparcContent.metaTitle
                  : `${t.guide[category.key]} | ${t.guide.title} | Stay Fuengirola`;
  const description = isAirportGuide
    ? airportContent.metaDescription
    : isBeachGuide
      ? beachContent.metaDescription
      : isSupermarketGuide
        ? supermarketContent.metaDescription
        : isRestaurantGuide
          ? restaurantContent.metaDescription
          : isShoppingGuide
            ? shoppingContent.metaDescription
            : isExcursionsGuide
              ? excursionsContent.metaDescription
              : isThingsToDoGuide
                ? thingsToDoContent.metaDescription
                : isBioparcGuide
                  ? bioparcContent.metaDescription
                  : `${t.guide[`${category.key}Text`]} ${t.guide.comingSoon}.`;
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
      type: "article",
      images: isBeachGuide
        ? ["/images/guide/playas/01-playa-fuengirola-sombrillas.webp"]
        : isSupermarketGuide
          ? ["/images/guide/supermarkets-fresh-groceries.svg"]
          : isBioparcGuide
            ? ["/images/guide/bioparc/bioparc-fuengirola-entrada.svg"]
            : isExcursionsGuide
              ? ["/images/guide/excursions/ronda-puente-nuevo.svg"]
              : undefined
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: isBeachGuide
        ? ["/images/guide/playas/01-playa-fuengirola-sombrillas.webp"]
        : isSupermarketGuide
          ? ["/images/guide/supermarkets-fresh-groceries.svg"]
          : isBioparcGuide
            ? ["/images/guide/bioparc/bioparc-fuengirola-entrada.svg"]
            : isExcursionsGuide
              ? ["/images/guide/excursions/ronda-puente-nuevo.svg"]
              : undefined
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

  if (category.key === "beaches") {
    return <BeachGuidePage locale={locale} dictionary={t} />;
  }

  if (category.key === "supermarkets") {
    return <SupermarketGuidePage locale={locale} dictionary={t} />;
  }

  if (category.key === "restaurants") {
    return <RestaurantGuidePage locale={locale} dictionary={t} />;
  }

  if (category.key === "shopping") {
    return <ShoppingGuidePage locale={locale} dictionary={t} />;
  }

  if (category.key === "excursions") {
    return <ExcursionsGuidePage locale={locale} dictionary={t} />;
  }

  if (category.key === "thingsToDo") {
    return <ThingsToDoGuidePage locale={locale} dictionary={t} />;
  }

  if (category.key === "bioparc") {
    return <BioparcGuidePage locale={locale} dictionary={t} />;
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

function SupermarketGuidePage({ locale, dictionary: t }: { locale: Locale; dictionary: ReturnType<typeof getDictionary> }) {
  const content = supermarketGuideContent[locale];
  const articleUrl = `${siteUrl}${getGuideCategoryPath(locale, "supermarkets")}`;
  const guideUrl = `${siteUrl}${getGuidePath(locale)}`;
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: content.breadcrumbGuide, item: guideUrl },
      { "@type": "ListItem", position: 2, name: content.breadcrumbArticle, item: articleUrl }
    ]
  };
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: content.h1,
    description: content.metaDescription,
    image: `${siteUrl}/images/guide/supermarkets-fresh-groceries.svg`,
    mainEntityOfPage: articleUrl,
    author: { "@type": "Organization", name: "Stay Fuengirola" },
    publisher: { "@type": "Organization", name: "Stay Fuengirola" },
    about: content.schemaAbout
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };

  return (
    <>
      <Header locale={locale} nav={t.nav} menuLabel={t.common.menu} />
      <main>
        {[breadcrumbJsonLd, articleJsonLd, faqJsonLd].map((jsonLd) => (
          <script
            type="application/ld+json"
            key={jsonLd["@type"]}
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        ))}
        <article className="container guide-article supermarket-article">
          <Link className="text-link" href={getGuidePath(locale)}>
            <ArrowLeft aria-hidden="true" size={18} />
            {content.backLabel}
          </Link>

          <header className="guide-hero-card bioparc-hero supermarket-hero">
            <div className="bioparc-hero-copy">
              <span className="guide-hero-icon">
                <ShoppingBag aria-hidden="true" size={30} />
              </span>
              <p className="guide-kicker">{content.kicker}</p>
              <h1>{content.h1}</h1>
              <p>{content.intro}</p>
            </div>
            <div className="bioparc-hero-image">
              <Image
                src="/images/guide/supermarkets-fresh-groceries.svg"
                alt={content.heroImageAlt}
                width={1200}
                height={760}
                sizes="(max-width: 960px) calc(100vw - 32px), 420px"
                priority
              />
            </div>
          </header>

          <section className="shopping-quick-card" aria-labelledby="supermarket-quick-title">
            <h2 id="supermarket-quick-title">{content.quickTitle}</h2>
            <div className="shopping-quick-grid excursion-quick-grid">
              {content.quickLinks.map((item) => (
                <a className="shopping-quick-item" href={item.target} key={item.title}>
                  <ShoppingBag aria-hidden="true" size={22} />
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </section>

          <section className="guide-content-section bioparc-split-section">
            <div>
              <h2>{content.firstShopTitle}</h2>
              {content.firstShopParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="shopping-ideal-card">
              <ul className="guide-check-list">
                {content.firstShopItems.map((item) => (
                  <li key={item}>
                    <CheckCircle2 aria-hidden="true" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="guide-content-section" id="planificador-compra">
            <h2>{content.plannerTitle}</h2>
            <p>{content.plannerIntro}</p>
            <div className="shopping-store-grid supermarket-planner-grid">
              {content.plannerCards.map((card) => (
                <article className="bioparc-info-card supermarket-planner-card" key={card.title}>
                  <span className="supermarket-card-icon" aria-hidden="true">
                    {card.icon}
                  </span>
                  <strong>{card.title}</strong>
                  <span>{card.items.join(" · ")}</span>
                  <div className="supermarket-recommendations">
                    {card.recommendation.map((recommendation) => (
                      <small key={recommendation}>→ {recommendation}</small>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="guide-content-section" aria-labelledby="supermarket-list-title">
            <h2 id="supermarket-list-title">{content.sectionsTitle}</h2>
            <p>{content.sectionsIntro}</p>
            <SupermarketFilterGrid content={content} locale={locale} supermarkets={supermarkets} />
          </section>

          <section className="guide-content-section" id="comparativa">
            <h2>{content.comparisonTitle}</h2>
            <div className="shopping-table supermarket-comparison" role="table">
              <div className="shopping-table-row shopping-table-head" role="row">
                <strong role="columnheader">{content.comparisonHeaders.supermarket}</strong>
                <span role="columnheader">{content.comparisonHeaders.bestFor}</span>
                <span role="columnheader">{content.comparisonHeaders.type}</span>
                <span role="columnheader">{content.comparisonHeaders.transport}</span>
              </div>
              {content.comparisonRows.map((row) => (
                <div className="shopping-table-row" role="row" key={row.supermarket}>
                  <strong role="cell">{row.supermarket}</strong>
                  <span role="cell">{row.bestFor}</span>
                  <span role="cell">{row.type}</span>
                  <span role="cell">{row.transport}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="guide-content-section" id="comparativa-orientativa">
            <h2>{content.visualComparisonTitle}</h2>
            <p>{content.visualComparisonNote}</p>
            <div className="shopping-table supermarket-star-comparison" role="table">
              <div className="shopping-table-row shopping-table-head" role="row">
                <strong role="columnheader">{content.visualComparisonHeaders.chain}</strong>
                <span role="columnheader">{content.visualComparisonHeaders.quick}</span>
                <span role="columnheader">{content.visualComparisonHeaders.large}</span>
                <span role="columnheader">{content.visualComparisonHeaders.fresh}</span>
                <span role="columnheader">{content.visualComparisonHeaders.ownBrand}</span>
                <span role="columnheader">{content.visualComparisonHeaders.international}</span>
              </div>
              {content.visualComparisonRows.map((row) => (
                <div className="shopping-table-row" role="row" key={row.chain}>
                  <strong role="cell">{row.chain}</strong>
                  <span role="cell" aria-label={`${content.visualComparisonHeaders.quick}: ${row.quick.length} / 5`}>
                    {row.quick}
                  </span>
                  <span role="cell" aria-label={`${content.visualComparisonHeaders.large}: ${row.large.length} / 5`}>
                    {row.large}
                  </span>
                  <span role="cell" aria-label={`${content.visualComparisonHeaders.fresh}: ${row.fresh.length} / 5`}>
                    {row.fresh}
                  </span>
                  <span role="cell" aria-label={`${content.visualComparisonHeaders.ownBrand}: ${row.ownBrand.length} / 5`}>
                    {row.ownBrand}
                  </span>
                  <span role="cell" aria-label={`${content.visualComparisonHeaders.international}: ${row.international.length} / 5`}>
                    {row.international}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="guide-content-section">
            <h2>{content.needsTitle}</h2>
            <div className="shopping-store-grid">
              {content.needsCards.map((card) => (
                <article className="bioparc-info-card" key={card.title}>
                  <ShoppingBag aria-hidden="true" size={22} />
                  <strong>{card.title}</strong>
                  <span>{card.items.join(" · ")}</span>
                  <small>{card.recommendation}</small>
                </article>
              ))}
            </div>
          </section>

          <section className="guide-content-section">
            <h2>{content.directChoiceTitle}</h2>
            <div className="shopping-store-grid supermarket-choice-grid">
              {content.directChoiceItems.map((item) => (
                <article className="bioparc-info-card" key={item.question}>
                  <CircleHelp aria-hidden="true" size={22} />
                  <strong>{item.question}</strong>
                  <span>→ {item.answer}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="guide-content-section bioparc-split-section">
            <div>
              <h2>{content.freshTitle}</h2>
              {content.freshParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="map-note">{content.freshNote}</p>
            </div>
            <ArrivalChecklist content={content} locale={locale} />
          </section>

          <section className="guide-content-section">
            <h2>{content.localProductsTitle}</h2>
            <p>{content.localProductsIntro}</p>
            <div className="shopping-store-grid supermarket-product-grid">
              {content.localProducts.map((product) => (
                <article className="bioparc-info-card" key={product.name}>
                  <ShoppingBag aria-hidden="true" size={22} />
                  <strong>{product.name}</strong>
                  <span>{product.text}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="guide-content-section">
            <h2>{content.sundayTitle}</h2>
            {content.sundayParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="bioparc-official-grid">
              {content.officialLinks.map((link) => (
                <SupermarketExternalLink
                  content={content}
                  destination={link.destination}
                  href={link.href}
                  key={`${link.supermarket}-${link.destination}`}
                  locale={locale}
                  supermarket={link.supermarket}
                >
                  {link.title}
                </SupermarketExternalLink>
              ))}
            </div>
          </section>

          <section className="guide-content-section shopping-map-section" aria-labelledby="supermarket-map-title">
            <h2 id="supermarket-map-title">{content.mapTitle}</h2>
            <SupermarketGuideMap content={content} supermarkets={supermarkets} />
          </section>

          <section className="guide-content-section">
            <h2>{content.tipsTitle}</h2>
            <ul className="guide-check-list">
              {content.tips.map((tip) => (
                <li key={tip}>
                  <CheckCircle2 aria-hidden="true" size={18} />
                  {tip}
                </li>
              ))}
            </ul>
          </section>

          <section className="guide-content-section" id="preguntas">
            <h2>{content.faqTitle}</h2>
            <div className="faq-list">
              {content.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="guide-content-section" id="informacion-oficial">
            <h2>{content.officialTitle}</h2>
            <p>{content.editorialNote}</p>
            <div className="bioparc-official-grid">
              {content.officialLinks.map((link) => (
                <SupermarketExternalLink
                  content={content}
                  destination={link.destination}
                  href={link.href}
                  key={`${link.supermarket}-${link.title}`}
                  locale={locale}
                  supermarket={link.supermarket}
                >
                  {link.title}
                </SupermarketExternalLink>
              ))}
            </div>
          </section>

          <section className="guide-recommendation bioparc-tip-card supermarket-cta">
            <Star aria-hidden="true" size={28} />
            <div>
              <h2>{content.ctaTitle}</h2>
              <p>{content.ctaText}</p>
              <BookingButton label={content.ctaButton} locale={locale} placement="supermarkets-guide" />
            </div>
          </section>

          <section className="guide-related" aria-labelledby="supermarket-related-title">
            <h2 id="supermarket-related-title">{content.relatedTitle}</h2>
            <div className="guide-related-grid">
              {content.related.map((item) => (
                <GuideInternalLink
                  className="guide-related-card"
                  destination={item.key}
                  href={getGuideCategoryPath(locale, item.key)}
                  key={item.key}
                  locale={locale}
                  sourceGuide="supermarkets"
                >
                  <MapPinned aria-hidden="true" size={22} />
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </GuideInternalLink>
              ))}
            </div>
          </section>
        </article>
      </main>
      <CookieConsent title={t.cookies.title} text={t.cookies.text} accept={t.cookies.accept} reject={t.cookies.reject} />
    </>
  );
}

function ShoppingGuidePage({ locale, dictionary: t }: { locale: Locale; dictionary: ReturnType<typeof getDictionary> }) {
  const content = shoppingGuideContent[locale];
  const articleUrl = `${siteUrl}${getGuideCategoryPath(locale, "shopping")}`;
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
    dateModified: "2026-07-23"
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
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
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <article className="container guide-article">
          <Link className="text-link" href={getGuidePath(locale)}>
            <ArrowLeft aria-hidden="true" size={18} />
            {content.backLabel}
          </Link>

          <header className="guide-hero-card">
            <span className="guide-hero-icon">
              <ShoppingBag aria-hidden="true" size={30} />
            </span>
            <p className="guide-kicker">{content.kicker}</p>
            <h1>{content.h1}</h1>
            <p>{content.intro}</p>
            <nav className="shopping-anchor-nav" aria-label={content.quickTitle}>
              {content.quickNav.map((item) => (
                <a href={item.href} key={item.href}>{item.label}</a>
              ))}
            </nav>
          </header>

          <section className="shopping-quick-card" aria-labelledby="shopping-quick-title">
            <h2 id="shopping-quick-title">{content.quickTitle}</h2>
            <div className="shopping-quick-grid">
              {content.quickLinks.map((item) => (
                <a className="shopping-quick-item" href={item.target} key={item.title}>
                  <ShoppingBag aria-hidden="true" size={22} />
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </section>

          <section className="guide-content-section" id="miramar">
            <h2>{content.miramarTitle}</h2>
            {content.miramarIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="shopping-ideal-card">
              <h3>{content.idealTitle}</h3>
              <ul className="guide-check-list">
                {content.idealItems.map((item) => (
                  <li key={item}>
                    <CheckCircle2 aria-hidden="true" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="guide-content-section" id="directorio">
            <h2>{content.directoryTitle}</h2>
            <p>{content.directoryIntro}</p>
            <ShoppingStoreDirectory content={content} locale={locale} stores={shoppingStores} />
            <a className="text-link" href={miramarStoresDirectoryUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink aria-hidden="true" size={18} />
              {content.labels.showDirectory}
            </a>
          </section>

          {content.categorySections.map((section) => {
            const sectionStores = shoppingStores.filter((store) => store.active && section.categories.includes(store.category));
            return (
              <section className="guide-content-section" id={section.id} key={section.id}>
                <h2>{section.title}</h2>
                <p>{section.intro}</p>
                {section.note ? <p className="map-note">{section.note}</p> : null}
                <div className="shopping-store-grid shopping-section-grid">
                  {sectionStores.map((store) => (
                    <article className="shopping-store-card" key={store.id}>
                      <div className="shopping-store-head">
                        <span>{content.categoryLabels[store.category]}</span>
                        <span>{content.areaLabels[store.area]}</span>
                      </div>
                      <h3>{store.name}</h3>
                      <p>{content.storeDescriptions[store.descriptionKey]}</p>
                    </article>
                  ))}
                </div>
                {section.id === "deporte" ? (
                  <div className="shopping-ideal-card">
                    <h3>{content.beachForgotTitle}</h3>
                    <div className="shopping-mini-grid">
                      {content.beachForgotItems.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </section>
            );
          })}

          <section className="guide-content-section" id="parque-comercial">
            <h2>{content.retailTitle}</h2>
            <p>{content.retailText}</p>
            <div className="shopping-comparison-cards">
              {content.retailComparison.map((item) => (
                <article className="bioparc-info-card" key={item.title}>
                  <MapPinned aria-hidden="true" size={22} />
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="guide-content-section" id="centro-historico">
            <h2>{content.historicTitle}</h2>
            {content.historicParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="shopping-ideal-card">
              <h3>{content.historicIdeasTitle}</h3>
              <div className="shopping-mini-grid">
                {content.historicIdeas.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </section>

          <section className="guide-content-section" id="mercadillos">
            <h2>{content.marketsTitle}</h2>
            <p>{content.marketsIntro}</p>
            <div className="shopping-store-grid">
              {content.markets.map((market) => (
                <article className="shopping-store-card" key={market.title}>
                  <div className="shopping-store-head">
                    <span>{market.when}</span>
                  </div>
                  <h3>{market.title}</h3>
                  <p>{market.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="guide-content-section" id="mercados-municipales">
            <h2>{content.municipalMarketsTitle}</h2>
            <p>{content.municipalMarketsText}</p>
          </section>

          <section className="guide-content-section" id="comparativa">
            <h2>{content.comparisonTitle}</h2>
            <div className="shopping-table" role="table">
              {content.comparison.map((row) => (
                <div className="shopping-table-row" role="row" key={row.zone}>
                  <strong role="cell">{row.zone}</strong>
                  <span role="cell">{row.bestFor}</span>
                  <span role="cell">{row.fromApartment}</span>
                  <span role="cell">{row.type}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="guide-content-section" id="viajeros">
            <h2>{content.travellerTitle}</h2>
            <div className="shopping-store-grid">
              {content.travellers.map((item) => (
                <article className="bioparc-info-card" key={item.title}>
                  <Users aria-hidden="true" size={22} />
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="guide-content-section" id="consejos">
            <h2>{content.tipsTitle}</h2>
            <ul className="guide-check-list">
              {content.tips.map((tip) => (
                <li key={tip}>
                  <CheckCircle2 aria-hidden="true" size={18} />
                  {tip}
                </li>
              ))}
            </ul>
          </section>

          <section className="guide-content-section shopping-map-section" aria-labelledby="shopping-map-title">
            <h2 id="shopping-map-title">{content.mapTitle}</h2>
            <ShoppingGuideMap content={content} />
          </section>

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

          <section className="guide-content-section" id="informacion-oficial">
            <h2>{content.officialTitle}</h2>
            <p>{content.editorialNote}</p>
            <div className="bioparc-official-grid">
              {content.officialLinks.map((item) => (
                <a className="guide-related-card" href={item.href} target="_blank" rel="noopener noreferrer" key={item.href}>
                  <ExternalLink aria-hidden="true" size={20} />
                  <strong>{item.title}</strong>
                </a>
              ))}
            </div>
          </section>

          <section className="guide-related" aria-labelledby="shopping-related-title">
            <h2 id="shopping-related-title">{content.relatedTitle}</h2>
            <div className="guide-related-grid">
              {content.related.map((item) => (
                <GuideInternalLink
                  className="guide-related-card"
                  destination={item.key}
                  href={getGuideCategoryPath(locale, item.key)}
                  key={item.key}
                  locale={locale}
                  sourceGuide="shopping"
                >
                  <MapPinned aria-hidden="true" size={22} />
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </GuideInternalLink>
              ))}
            </div>
          </section>
        </article>
      </main>
      <CookieConsent title={t.cookies.title} text={t.cookies.text} accept={t.cookies.accept} reject={t.cookies.reject} />
    </div>
  );
}

function ExcursionsGuidePage({ locale, dictionary: t }: { locale: Locale; dictionary: ReturnType<typeof getDictionary> }) {
  const content = excursionsGuideContent[locale];
  const activeExcursions = excursions.filter((excursion) => excursion.active);
  const articleUrl = `${siteUrl}${getGuideCategoryPath(locale, "excursions")}`;
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
    dateModified: "2026-07-23"
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };

  return (
    <div className="shell">
      <Header locale={locale} nav={t.nav} menuLabel={t.common.menu} />
      <main className="section guide-page">
        {[articleJsonLd, breadcrumbJsonLd, faqJsonLd].map((jsonLd, index) => (
          <script
            key={index}
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        ))}
        <article className="container guide-article excursions-article">
          <Link className="text-link" href={getGuidePath(locale)}>
            <ArrowLeft aria-hidden="true" size={18} />
            {content.backLabel}
          </Link>

          <header className="guide-hero-card bioparc-hero excursions-hero">
            <div className="bioparc-hero-copy">
              <span className="guide-hero-icon">
                <MapPinned aria-hidden="true" size={30} />
              </span>
              <p className="guide-kicker">{content.kicker}</p>
              <h1>{content.h1}</h1>
              <p>{content.intro}</p>
            </div>
            <div className="bioparc-hero-image">
              <Image
                src="/images/guide/excursions/ronda-puente-nuevo.svg"
                alt={content.heroImageAlt}
                width={1200}
                height={760}
                priority
                sizes="(max-width: 960px) calc(100vw - 64px), 420px"
              />
            </div>
          </header>

          <section className="shopping-quick-card" aria-labelledby="excursion-quick-title">
            <h2 id="excursion-quick-title">{content.quickTitle}</h2>
            <div className="shopping-quick-grid excursion-quick-grid">
              {content.quickPicks.map((item) => (
                <a className="shopping-quick-item" href={`#${item.destinationId}`} key={item.label}>
                  <MapPinned aria-hidden="true" size={22} />
                  <strong>{item.label}</strong>
                  <span>{item.reason}</span>
                </a>
              ))}
            </div>
            <p className="map-note">{content.labels.note}: {content.quickNote}</p>
          </section>

          <section className="guide-content-section" id="excursion-cards">
            <h2>{content.navTitle}</h2>
            <ExcursionPlanner content={content} excursions={activeExcursions} locale={locale} />
          </section>

          <section className="guide-content-section" id="comparativa">
            <h2>{content.comparisonTitle}</h2>
            <div className="shopping-table excursion-comparison" role="table">
              <div className="shopping-table-row shopping-table-head" role="row">
                <strong role="columnheader">{content.comparisonHeaders.destination}</strong>
                <span role="columnheader">{content.comparisonHeaders.duration}</span>
                <span role="columnheader">{content.comparisonHeaders.transport}</span>
                <span role="columnheader">{content.comparisonHeaders.ideal}</span>
                <span role="columnheader">{content.comparisonHeaders.booking}</span>
              </div>
              {activeExcursions.map((excursion) => (
                <div className="shopping-table-row" role="row" key={excursion.id}>
                  <strong role="cell">{content.texts[excursion.titleKey]}</strong>
                  <span role="cell">{content.durationLabels[excursion.duration]}</span>
                  <span role="cell">{excursion.transport.map((transport) => content.transportLabels[transport]).join(" · ")}</span>
                  <span role="cell">{excursion.categories.map((category) => content.categoryLabels[category]).slice(0, 2).join(" · ")}</span>
                  <span role="cell">{excursion.advanceBooking ? content.labels.recommended : content.labels.no}</span>
                </div>
              ))}
            </div>
          </section>

          {activeExcursions.map((excursion) => {
            const editorial = content.editorials[excursion.id];
            return (
              <section className="guide-content-section excursion-editorial" id={excursion.slug} key={excursion.id}>
                <div className="excursion-editorial-image">
                  <Image
                    src={excursion.image}
                    alt={content.texts[excursion.titleKey]}
                    width={1200}
                    height={760}
                    sizes="(max-width: 960px) calc(100vw - 32px), 360px"
                    loading="lazy"
                  />
                </div>
                <div className="excursion-editorial-copy">
                  {editorial.badge ? <p className="guide-kicker">{editorial.badge}</p> : null}
                  <h2>{editorial.title}</h2>
                  {editorial.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <div className="excursion-detail-grid">
                    <article className="bioparc-info-card">
                      <CheckCircle2 aria-hidden="true" size={22} />
                      <strong>{editorial.seeTitle}</strong>
                      <span>{editorial.see.join(" · ")}</span>
                    </article>
                    <article className="bioparc-info-card">
                      <TrainFront aria-hidden="true" size={22} />
                      <strong>{editorial.arrivalTitle}</strong>
                      <span>{editorial.arrival.join(" ")}</span>
                    </article>
                    <article className="bioparc-info-card">
                      <Clock aria-hidden="true" size={22} />
                      <strong>{editorial.timeTitle}</strong>
                      <span>{editorial.time}</span>
                    </article>
                    <article className="bioparc-info-card">
                      <Users aria-hidden="true" size={22} />
                      <strong>{editorial.idealTitle}</strong>
                      <span>{editorial.ideal.join(" · ")}</span>
                    </article>
                  </div>
                  <div className="guide-recommendation excursion-tip-card">
                    <CheckCircle2 aria-hidden="true" size={24} />
                    <div>
                      <h3>{editorial.tipTitle}</h3>
                      <p>{editorial.tip}</p>
                    </div>
                  </div>
                  <div className="bioparc-official-grid excursion-official-grid">
                    {excursion.officialLinks.map((link) => (
                      <ExcursionOfficialLink
                        content={content}
                        destination={link.destination}
                        excursion={excursion.id}
                        key={`${excursion.id}-${link.destination}-${link.url}`}
                        locale={locale}
                        url={link.url}
                      />
                    ))}
                  </div>
                </div>
              </section>
            );
          })}

          <section className="guide-content-section" id="sin-coche">
            <h2>{content.noCarTitle}</h2>
            <div className="shopping-store-grid">
              {content.noCarGroups.map((group) => (
                <article className="bioparc-info-card" key={group.title}>
                  <TrainFront aria-hidden="true" size={22} />
                  <strong>{group.title}</strong>
                  <span>{group.items.join(" · ")}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="guide-content-section" id="con-ninos">
            <h2>{content.kidsTitle}</h2>
            <p>{content.kidsText}</p>
          </section>

          <section className="guide-content-section" id="tiempo-disponible">
            <h2>{content.timeBlocksTitle}</h2>
            <div className="shopping-store-grid">
              {content.timeBlocks.map((block) => (
                <article className="bioparc-info-card" key={block.title}>
                  <Clock aria-hidden="true" size={22} />
                  <strong>{block.title}</strong>
                  <span>{block.items.join(" · ")}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="guide-content-section" id="epoca">
            <h2>{content.seasonTitle}</h2>
            <div className="shopping-store-grid">
              {content.seasons.map((season) => (
                <article className="bioparc-info-card" key={season.title}>
                  <Sun aria-hidden="true" size={22} />
                  <strong>{season.title}</strong>
                  <span>{season.text}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="guide-content-section" id="mapa">
            <h2>{content.mapTitle}</h2>
            <ExcursionsGuideMap content={content} excursions={activeExcursions} />
          </section>

          <section className="guide-content-section" id="mas-ideas">
            <h2>{content.secondaryTitle}</h2>
            <p>{content.secondaryIntro}</p>
            <div className="shopping-store-grid">
              {secondaryExcursionIdeas.map((idea) => (
                <article className="bioparc-info-card" key={idea}>
                  <MapPinned aria-hidden="true" size={22} />
                  <strong>{content.secondaryIdeas[idea].title}</strong>
                  <span>{content.secondaryIdeas[idea].text}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="guide-content-section" id="consejos">
            <h2>{content.tipsTitle}</h2>
            <ul className="guide-check-list">
              {content.tips.map((tip) => (
                <li key={tip}>
                  <CheckCircle2 aria-hidden="true" size={18} />
                  {tip}
                </li>
              ))}
            </ul>
            <p className="map-note">{content.changingNote}</p>
          </section>

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

          <section className="guide-content-section" id="informacion-oficial">
            <h2>{content.officialTitle}</h2>
            <p>{content.officialNote}</p>
            <p className="map-note">{content.changingNote}</p>
          </section>

          <section className="guide-related" aria-labelledby="excursions-related-title">
            <h2 id="excursions-related-title">{content.relatedTitle}</h2>
            <div className="guide-related-grid">
              {content.related.map((item) => (
                <GuideInternalLink
                  className="guide-related-card"
                  destination={item.key}
                  href={getGuideCategoryPath(locale, item.key)}
                  key={item.key}
                  locale={locale}
                  sourceGuide="excursions"
                >
                  <MapPinned aria-hidden="true" size={22} />
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </GuideInternalLink>
              ))}
            </div>
          </section>

          <section className="guide-cta">
            <MapPinned aria-hidden="true" size={30} />
            <h2>{content.ctaTitle}</h2>
            <p>{content.ctaText}</p>
            <BookingButton className="cta" label={content.ctaButton} locale={locale} placement="guide" />
          </section>
        </article>
      </main>
      <CookieConsent title={t.cookies.title} text={t.cookies.text} accept={t.cookies.accept} reject={t.cookies.reject} />
    </div>
  );
}

function ThingsToDoGuidePage({ locale, dictionary: t }: { locale: Locale; dictionary: ReturnType<typeof getDictionary> }) {
  const content = thingsToDoGuideContent[locale];
  const eventsContent = thingsToDoEventsContent[locale];
  const articleUrl = `${siteUrl}${getGuideCategoryPath(locale, "thingsToDo")}`;
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
    about: [...content.schemaAbout, "Marenostrum Fuengirola", "eventos en Fuengirola", "conciertos en Fuengirola"],
    inLanguage: locale,
    dateModified: "2026-07-17"
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: eventsContent.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };
  const eventStatusMap = {
    scheduled: "https://schema.org/EventScheduled",
    cancelled: "https://schema.org/EventCancelled",
    postponed: "https://schema.org/EventPostponed",
    rescheduled: "https://schema.org/EventRescheduled"
  } as const;
  const eventJsonLd = getPublishedEvents(fuengirolaEvents).map((event) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title[locale],
    startDate: event.startTime ? `${event.startDate}T${event.startTime}:00` : event.startDate,
    endDate: event.endDate,
    eventStatus: eventStatusMap[event.status ?? "scheduled"],
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.venue[locale],
      address: event.location?.[locale] ?? "Fuengirola, Málaga, España"
    },
    image: event.image ? [`${siteUrl}${event.image}`] : undefined,
    description: event.description[locale],
    url: event.officialUrl
  }));

  return (
    <div className="shell">
      <Header locale={locale} nav={t.nav} menuLabel={t.common.menu} />
      <main className="section guide-page">
        {[articleJsonLd, breadcrumbJsonLd, faqJsonLd, ...eventJsonLd].map((jsonLd, index) => (
          <script
            key={index}
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        ))}
        <article className="container guide-article">
          <Link className="text-link" href={getGuidePath(locale)}>
            <ArrowLeft aria-hidden="true" size={18} />
            {content.backLabel}
          </Link>

          <header className="guide-hero-card">
            <span className="guide-hero-icon">
              <Star aria-hidden="true" size={30} />
            </span>
            <p className="guide-kicker">{content.kicker}</p>
            <h1>{content.h1}</h1>
            <p>{content.intro}</p>
          </header>

          {content.activities.map((activity) => (
            <section className="guide-content-section" id={activity.id} key={activity.id}>
              <h2>{activity.title}</h2>
              {activity.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {activity.id === "bioparc-fuengirola" ? (
                <GuideInternalLink
                  className="text-link"
                  destination="bioparc"
                  href={getGuideCategoryPath(locale, "bioparc")}
                  locale={locale}
                  sourceGuide="things-to-do"
                >
                  <MapPinned aria-hidden="true" size={18} />
                  {t.guide.readGuide}
                </GuideInternalLink>
              ) : null}
            </section>
          ))}

          <section className="guide-content-section events-guide-section" id="eventos-conciertos">
            <div className="events-section-head">
              <span className="guide-hero-icon">
                <Star aria-hidden="true" size={30} />
              </span>
              <div>
                <h2>{eventsContent.title}</h2>
                <p>{eventsContent.intro}</p>
              </div>
            </div>

            <EventsSection content={eventsContent} events={fuengirolaEvents} locale={locale} permanentActivities={permanentActivities} />
          </section>
        </article>
      </main>
      <CookieConsent title={t.cookies.title} text={t.cookies.text} accept={t.cookies.accept} reject={t.cookies.reject} />
    </div>
  );
}

function BioparcGuidePage({ locale, dictionary: t }: { locale: Locale; dictionary: ReturnType<typeof getDictionary> }) {
  const content = bioparcGuideContent[locale];
  const articleUrl = `${siteUrl}${getGuideCategoryPath(locale, "bioparc")}`;
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
    dateModified: "2026-07-23"
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };

  function officialLinksForSection(sectionId: string) {
    if (sectionId === "horarios" || sectionId === "hours" || sectionId === "aukioloajat" || sectionId === "oppettider" || sectionId === "apningstider") {
      return ["hours"] as const;
    }
    if (sectionId === "entradas" || sectionId === "tickets" || sectionId === "liput" || sectionId === "biljetter") {
      return ["tickets"] as const;
    }
    if (sectionId === "actividades" || sectionId === "activities" || sectionId === "aktiviteetit" || sectionId === "aktiviteter") {
      return ["agenda"] as const;
    }
    if (sectionId === "accesibilidad" || sectionId === "accessibility" || sectionId === "esteettomyys" || sectionId === "tillganglighet" || sectionId === "tilgjengelighet") {
      return ["accessibility"] as const;
    }
    if (sectionId === "comer" || sectionId === "food" || sectionId === "ruoka" || sectionId === "mat") {
      return ["rules"] as const;
    }
    if (sectionId === "aparcamiento" || sectionId === "parking" || sectionId === "pysakointi" || sectionId === "parkering") {
      return ["parking"] as const;
    }
    return [] as const;
  }

  return (
    <div className="shell">
      <Header locale={locale} nav={t.nav} menuLabel={t.common.menu} />
      <main className="section guide-page">
        {[articleJsonLd, breadcrumbJsonLd, faqJsonLd].map((jsonLd, index) => (
          <script
            key={index}
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        ))}
        <article className="container guide-article bioparc-article">
          <Link className="text-link" href={getGuidePath(locale)}>
            <ArrowLeft aria-hidden="true" size={18} />
            {t.guide.back}
          </Link>

          <header className="guide-hero-card bioparc-hero">
            <div className="bioparc-hero-copy">
              <span className="guide-hero-icon">
                <Leaf aria-hidden="true" size={30} />
              </span>
              <p className="guide-kicker">{content.kicker}</p>
              <h1>{content.h1}</h1>
              <p>{content.intro}</p>
            </div>
            <div className="bioparc-hero-image">
              <Image
                src="/images/guide/bioparc/bioparc-fuengirola-entrada.svg"
                alt={content.heroImageAlt}
                width={1200}
                height={760}
                priority
                sizes="(max-width: 960px) calc(100vw - 64px), 420px"
              />
            </div>
          </header>

          <section className="bioparc-quick-card" aria-labelledby="bioparc-quick-title">
            <h2 id="bioparc-quick-title">{content.quickTitle}</h2>
            <div className="bioparc-card-grid">
              {content.quickItems.map((item) => {
                const Icon = bioparcIconMap[item.icon];
                return (
                  <div className="bioparc-info-card" key={item.title}>
                    <Icon aria-hidden="true" size={24} />
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </section>

          {content.sections.slice(0, 1).map((section) => (
            <section className="guide-content-section bioparc-split-section" id={section.id} key={section.id}>
              <div>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.image && section.imageAlt ? (
                <div className="bioparc-section-image">
                  <Image src={section.image} alt={section.imageAlt} width={1200} height={760} sizes="(max-width: 960px) calc(100vw - 32px), 380px" loading="lazy" />
                </div>
              ) : null}
            </section>
          ))}

          <section className="guide-content-section" id="habitats">
            <h2>{content.habitatsTitle}</h2>
            <p>{content.habitatsIntro}</p>
            <div className="bioparc-card-grid bioparc-habitat-grid">
              {content.habitats.map((habitat) => (
                <article className="bioparc-info-card" key={habitat.title}>
                  <Leaf aria-hidden="true" size={24} />
                  <strong>{habitat.title}</strong>
                  <span>{habitat.text}</span>
                  <small>{habitat.examples.join(" · ")}</small>
                </article>
              ))}
            </div>
          </section>

          <section className="guide-content-section" id="animales">
            <h2>{content.animalsTitle}</h2>
            <p>{content.animalsNote}</p>
            <div className="bioparc-card-grid">
              {content.animals.map((animal) => (
                <article className="bioparc-info-card" key={animal.title}>
                  <Leaf aria-hidden="true" size={24} />
                  <strong>{animal.title}</strong>
                  <span>{animal.text}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="guide-content-section" id="como-llegar">
            <h2>{content.arrivalTitle}</h2>
            <p>{content.arrivalIntro}</p>
            <div className="bioparc-card-grid bioparc-arrival-grid">
              {content.arrivalOptions.map((option) => {
                const Icon = bioparcIconMap[option.icon];
                return (
                  <article className="bioparc-info-card" key={option.title}>
                    <Icon aria-hidden="true" size={24} />
                    <strong>{option.title}</strong>
                    <span>{option.text}</span>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="guide-content-section bioparc-map-section" aria-labelledby="bioparc-map-title">
            <h2 id="bioparc-map-title">{content.mapTitle}</h2>
            <BioparcGuideMap content={content} />
          </section>

          {content.sections.slice(1).map((section) => {
            const links = officialLinksForSection(section.id);
            return (
              <section className="guide-content-section" id={section.id} key={section.id}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {links.length > 0 ? (
                  <div className="bioparc-link-row">
                    {links.map((destination) => (
                      <AttractionOfficialLink
                        className="text-link"
                        destination={destination}
                        href={bioparcOfficialLinks[destination]}
                        key={destination}
                        locale={locale}
                      >
                        <ExternalLink aria-hidden="true" size={18} />
                        {content.officialButtons[destination]}
                      </AttractionOfficialLink>
                    ))}
                  </div>
                ) : null}
              </section>
            );
          })}

          <section className="guide-content-section" id="mejor-momento">
            <h2>{content.bestTimeTitle}</h2>
            <ul className="guide-check-list">
              {content.bestTimeTips.map((tip) => (
                <li key={tip}>
                  <CheckCircle2 aria-hidden="true" size={18} />
                  {tip}
                </li>
              ))}
            </ul>
            <div className="guide-recommendation bioparc-tip-card">
              <Star aria-hidden="true" size={28} />
              <div>
                <h2>{content.stayTipTitle}</h2>
                <p>{content.stayTipText}</p>
              </div>
            </div>
          </section>

          <section className="guide-content-section bioparc-split-section" id="ninos">
            <div>
              <h2>{content.kidsTitle}</h2>
              <p>{content.kidsText}</p>
              <div className="bioparc-feature-note">
                <Users aria-hidden="true" size={22} />
                <strong>{content.kidsCard}</strong>
              </div>
            </div>
            <div className="bioparc-section-image">
              <Image src="/images/guide/bioparc/bioparc-fuengirola-familias.svg" alt={content.kidsTitle} width={1200} height={760} sizes="(max-width: 960px) calc(100vw - 32px), 380px" loading="lazy" />
            </div>
          </section>

          <section className="guide-content-section" id="que-llevar">
            <h2>{content.whatToBringTitle}</h2>
            <div className="bioparc-card-grid">
              {content.whatToBring.map((item) => (
                <div className="bioparc-mini-card" key={item}>
                  <CheckCircle2 aria-hidden="true" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="guide-content-section" id="consejos">
            <h2>{content.stayAdviceTitle}</h2>
            <ul className="guide-check-list">
              {content.stayAdvice.map((tip) => (
                <li key={tip}>
                  <CheckCircle2 aria-hidden="true" size={18} />
                  {tip}
                </li>
              ))}
            </ul>
          </section>

          <section className="guide-content-section" id="plan-dia">
            <h2>{content.dayPlanTitle}</h2>
            <p>{content.dayPlanIntro}</p>
            <div className="event-timeline bioparc-timeline">
              {content.dayPlan.map((item) => (
                <div className="event-timeline-item" key={`${item.time}-${item.text}`}>
                  <strong>{item.time}</strong>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="guide-content-section" id="comparativa">
            <h2>{content.comparisonTitle}</h2>
            <div className="beach-comparison bioparc-comparison" role="table">
              {content.comparison.map((row) => (
                <div className="beach-comparison-row" role="row" key={row.label}>
                  <strong role="cell">{row.label}</strong>
                  <span role="cell">{row.value}</span>
                </div>
              ))}
            </div>
          </section>

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

          <section className="guide-content-section" id="informacion-oficial">
            <h2>{content.officialInfoTitle}</h2>
            <p>{content.editorialNote}</p>
            <div className="bioparc-official-grid">
              {(Object.keys(bioparcOfficialLinks) as Array<keyof typeof bioparcOfficialLinks>).map((destination) => (
                <AttractionOfficialLink
                  className="guide-related-card"
                  destination={destination}
                  href={bioparcOfficialLinks[destination]}
                  key={destination}
                  locale={locale}
                >
                  <ExternalLink aria-hidden="true" size={20} />
                  <strong>{content.officialButtons[destination]}</strong>
                </AttractionOfficialLink>
              ))}
            </div>
          </section>

          <section className="guide-related" aria-labelledby="bioparc-related-title">
            <h2 id="bioparc-related-title">{content.relatedTitle}</h2>
            <div className="guide-related-grid beach-related-grid">
              {content.related.map((item) => (
                <GuideInternalLink
                  className="guide-related-card"
                  destination={item.key}
                  href={getGuideCategoryPath(locale, item.key)}
                  key={item.key}
                  locale={locale}
                  sourceGuide="bioparc"
                >
                  <MapPinned aria-hidden="true" size={22} />
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </GuideInternalLink>
              ))}
            </div>
          </section>
        </article>
      </main>
      <CookieConsent title={t.cookies.title} text={t.cookies.text} accept={t.cookies.accept} reject={t.cookies.reject} />
    </div>
  );
}

function RestaurantGuidePage({ locale, dictionary: t }: { locale: Locale; dictionary: ReturnType<typeof getDictionary> }) {
  const content = restaurantGuideContent[locale];
  const articleUrl = `${siteUrl}${getGuideCategoryPath(locale, "restaurants")}`;
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
    dateModified: "2026-07-17"
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
            {content.backLabel}
          </Link>

          <header className="guide-hero-card">
            <span className="guide-hero-icon">
              <Utensils aria-hidden="true" size={30} />
            </span>
            <p className="guide-kicker">{content.kicker}</p>
            <h1>{content.h1}</h1>
            <p>{content.intro}</p>
          </header>

          {content.restaurants.map((restaurant) => (
            <section className="guide-content-section" id={restaurant.id} key={restaurant.id}>
              <h2>{restaurant.name}</h2>
              <p className="guide-kicker">{restaurant.subtitle}</p>
              <p>{restaurant.description}</p>
              <ul className="guide-check-list">
                <li>
                  <MapPin aria-hidden="true" size={18} />
                  {restaurant.address}
                </li>
                <li>
                  <Clock aria-hidden="true" size={18} />
                  {restaurant.hours}
                </li>
              </ul>
              <p>
                <strong>{restaurant.tip}</strong>
              </p>
            </section>
          ))}

          <section className="guide-recommendation">
            <Utensils aria-hidden="true" size={28} />
            <div>
              <p>{content.closing}</p>
            </div>
          </section>
        </article>
      </main>
      <CookieConsent title={t.cookies.title} text={t.cookies.text} accept={t.cookies.accept} reject={t.cookies.reject} />
    </div>
  );
}

function BeachGuidePage({ locale, dictionary: t }: { locale: Locale; dictionary: ReturnType<typeof getDictionary> }) {
  const content = beachGuideContent[locale];
  const articleUrl = `${siteUrl}${getGuideCategoryPath(locale, "beaches")}`;
  const guideUrl = `${siteUrl}${getGuidePath(locale)}`;
  const relatedHref = (key: (typeof content.related)[number]["hrefKey"]) => {
    if (key === "castle" || key === "miramar") return `/${locale}#location`;
    return getGuideCategoryPath(locale, key);
  };
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
    image: [`${siteUrl}/images/guide/playas/01-playa-fuengirola-sombrillas.webp`],
    author: { "@type": "Organization", name: property.brandName },
    publisher: { "@type": "Organization", name: property.brandName },
    about: content.schemaAbout,
    inLanguage: locale,
    dateModified: "2026-07-17"
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };

  return (
    <div className="shell">
      <Header locale={locale} nav={t.nav} menuLabel={t.common.menu} />
      <main className="section guide-page">
        {[articleJsonLd, breadcrumbJsonLd, faqJsonLd].map((jsonLd, index) => (
          <script
            key={index}
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        ))}
        <article className="container guide-article beach-article">
          <Link className="text-link" href={getGuidePath(locale)}>
            <ArrowLeft aria-hidden="true" size={18} />
            {content.backLabel}
          </Link>

          <header className="guide-hero-card beach-guide-hero">
            <span className="guide-hero-icon">
              <Waves aria-hidden="true" size={30} />
            </span>
            <p className="guide-kicker">{content.kicker}</p>
            <h1>{content.h1}</h1>
            <p>{content.intro}</p>
          </header>

          <section className="guide-content-section beach-map-section" aria-label={content.mapTitle}>
            <h2>{content.mapTitle}</h2>
            <BeachGuideMap ariaLabel={content.mapAria} apartmentLabel={content.mapApartment} apartmentPopup={content.mapApartmentPopup} />
          </section>

          <section className="beach-quick-card">
            <h2>{content.quickTitle}</h2>
            <div className="beach-quick-grid">
              {content.quickItems.map((item) => {
                const Icon = item.icon === "castle" ? Castle : Waves;
                return (
                  <div className="beach-quick-item" key={item.label}>
                    <Icon aria-hidden="true" size={22} />
                    <strong>{item.label}</strong>
                    <span>{item.time}</span>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="guide-content-section">
            <h2>{content.sectionTitle}</h2>
            <div className="beach-feature-grid">
              {content.featureCards.map((card) => {
                const Icon = beachFeatureIcons[card.icon];
                return (
                  <div className="beach-feature-card" key={card.title}>
                    <Icon aria-hidden="true" size={24} />
                    <strong>{card.title}</strong>
                    <span>{card.text}</span>
                  </div>
                );
              })}
            </div>
          </section>

          {content.beaches.map((beach) => (
            <section className="guide-content-section beach-section" id={beach.key} key={beach.key}>
              <div className="beach-image">
                <Image src={beach.image} alt={beach.imageAlt} fill sizes="(max-width: 960px) calc(100vw - 32px), 960px" loading="lazy" className="image-cover" />
              </div>
              <div className="beach-section-grid">
                <div>
                  <p className="guide-kicker">{beach.badge}</p>
                  <h2>{beach.name}</h2>
                  <p className="beach-time">
                    <Footprints aria-hidden="true" size={18} />
                    {beach.walkingTime}
                  </p>
                  <p>{beach.description}</p>
                </div>
                <aside className="beach-fact-card" aria-label={`${content.ratingLabel}: ${beach.name}`}>
                  <strong aria-label={content.ratingLabel}>★★★★★</strong>
                  <h3>{content.idealTitle}</h3>
                  <ul>
                    {beach.idealFor.map((item) => (
                      <li key={item}>
                        <CheckCircle2 aria-hidden="true" size={17} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </aside>
              </div>
              <div className="beach-detail-grid">
                <div className="beach-services-card">
                  <h3>{content.servicesTitle}</h3>
                  <ul>
                    {beach.services.map((service) => (
                      <li key={service}>
                        <CheckCircle2 aria-hidden="true" size={17} />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="beach-tip-card">
                  <Sun aria-hidden="true" size={22} />
                  <h3>{content.tipTitle}</h3>
                  <p>{beach.tip}</p>
                </div>
              </div>
            </section>
          ))}

          <section className="guide-content-section">
            <h2>{content.comparisonTitle}</h2>
            <div className="beach-comparison" role="table" aria-label={content.comparisonTitle}>
              <div className="beach-comparison-row beach-comparison-head" role="row">
                <span role="columnheader">{content.comparisonHeaders.beach}</span>
                <span role="columnheader">{content.comparisonHeaders.distance}</span>
                <span role="columnheader">{content.comparisonHeaders.families}</span>
                <span role="columnheader">{content.comparisonHeaders.restaurants}</span>
                <span role="columnheader">{content.comparisonHeaders.walking}</span>
              </div>
              {content.comparison.map((row) => (
                <div className="beach-comparison-row" role="row" key={row.beach}>
                  <strong role="cell">{row.beach}</strong>
                  <span role="cell">{row.distance}</span>
                  <span role="cell">{row.families}</span>
                  <span role="cell">{row.restaurants}</span>
                  <span role="cell">{row.walking}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="guide-content-section">
            <h2>{content.galleryTitle}</h2>
            <p>{content.galleryIntro}</p>
            <div className="beach-gallery">
              {content.gallery.map((image) => (
                <div className="beach-gallery-item" key={image.src}>
                  <Image src={image.src} alt={image.alt} fill sizes="(max-width: 960px) calc(100vw - 32px), 440px" loading="lazy" className="image-cover" />
                </div>
              ))}
            </div>
          </section>

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

          <section className="guide-related" aria-labelledby="beach-related-title">
            <h2 id="beach-related-title">{content.relatedTitle}</h2>
            <div className="guide-related-grid beach-related-grid">
              {content.related.map((item) => (
                <GuideInternalLink
                  className="guide-related-card"
                  destination={item.hrefKey}
                  href={relatedHref(item.hrefKey)}
                  key={item.title}
                  locale={locale}
                  sourceGuide="beaches"
                >
                  <MapPinned aria-hidden="true" size={22} />
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </GuideInternalLink>
              ))}
            </div>
          </section>

          <p className="map-note">{content.sourceNote}</p>
        </article>
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
                  <GuideInternalLink
                    className="guide-related-card"
                    destination={key}
                    href={getGuideCategoryPath(locale, key)}
                    key={key}
                    locale={locale}
                    sourceGuide="airport"
                  >
                    <MapPinned aria-hidden="true" size={22} />
                    <strong>{related.title}</strong>
                    <span>{related.text}</span>
                  </GuideInternalLink>
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
