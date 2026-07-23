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
  Euro,
  Footprints,
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
import { BeachGuideMap } from "@/components/BeachGuideMap";
import { EventsSection } from "@/components/EventsSection";
import { GuideInternalLink } from "@/components/GuideInternalLink";
import { Header } from "@/components/Header";
import { CookieConsent } from "@/components/CookieConsent";
import { fuengirolaEvents, getPublishedEvents, permanentActivities } from "@/config/events";
import { airportGuideContent } from "@/config/guideArticles";
import { beachGuideContent } from "@/config/beachGuide";
import { restaurantGuideContent } from "@/config/restaurantGuide";
import { shoppingGuideContent } from "@/config/shoppingGuide";
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
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, Locale, locales } from "@/i18n/locales";
import { siteUrl } from "@/lib/urls";
import { notFound, redirect } from "next/navigation";

type Props = { params: Promise<{ locale: string; slug: string }> };

const optionIcons = [TrainFront, CarTaxiFront, Car, Luggage] as const;
const relatedKeys = ["beaches", "supermarkets", "restaurants", "transport"] as const;
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
  const isRestaurantGuide = category.key === "restaurants";
  const isShoppingGuide = category.key === "shopping";
  const isThingsToDoGuide = category.key === "thingsToDo";
  const airportContent = airportGuideContent[locale];
  const beachContent = beachGuideContent[locale];
  const restaurantContent = restaurantGuideContent[locale];
  const shoppingContent = shoppingGuideContent[locale];
  const thingsToDoContent = thingsToDoGuideContent[locale];
  const title = isAirportGuide
    ? airportContent.metaTitle
    : isBeachGuide
      ? beachContent.metaTitle
      : isRestaurantGuide
        ? restaurantContent.metaTitle
        : isShoppingGuide
          ? shoppingContent.metaTitle
          : isThingsToDoGuide
            ? thingsToDoContent.metaTitle
            : `${t.guide[category.key]} | ${t.guide.title} | Stay Fuengirola`;
  const description = isAirportGuide
    ? airportContent.metaDescription
    : isBeachGuide
      ? beachContent.metaDescription
      : isRestaurantGuide
        ? restaurantContent.metaDescription
        : isShoppingGuide
          ? shoppingContent.metaDescription
          : isThingsToDoGuide
            ? thingsToDoContent.metaDescription
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
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: isBeachGuide ? ["/images/guide/playas/01-playa-fuengirola-sombrillas.webp"] : undefined
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

  if (category.key === "restaurants") {
    return <RestaurantGuidePage locale={locale} dictionary={t} />;
  }

  if (category.key === "shopping") {
    return <ShoppingGuidePage locale={locale} dictionary={t} />;
  }

  if (category.key === "thingsToDo") {
    return <ThingsToDoGuidePage locale={locale} dictionary={t} />;
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
              <ShoppingBag aria-hidden="true" size={30} />
            </span>
            <p className="guide-kicker">{content.kicker}</p>
            <h1>{content.h1}</h1>
            <p>{content.intro}</p>
          </header>

          {content.sections.map((section) => (
            <ArticleSection section={section} key={section.id} />
          ))}
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
            <ArticleSection section={activity} key={activity.id} />
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
