import type { Metadata } from "next";
import Image from "next/image";
import { Briefcase, Car, Castle, CircleCheck, Coffee, Home, MapPinned, Palmtree, Plane, ShoppingBag, Smile, Snowflake, Sun, Train, Utensils, WashingMachine, Waves, Wifi, type LucideIcon } from "lucide-react";
import { Header } from "@/components/Header";
import { Gallery } from "@/components/Gallery";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CookieConsent } from "@/components/CookieConsent";
import { LocationMap } from "@/components/LocationMap";
import { bookingUrl } from "@/config/booking";
import { distances } from "@/config/distances";
import { property } from "@/config/property";
import { reviews, reviewScores } from "@/config/reviews";
import { seoByLocale, seoKeywords } from "@/config/seo";
import { services } from "@/config/services";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, Locale, localeLabels, locales } from "@/i18n/locales";
import { getGalleryImages } from "@/lib/gallery";
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
  const dictionary = getDictionary(locale);
  const seo = seoByLocale[locale];
  const url = `${siteUrl}/${locale}`;
  const ogImage = { url: "/images/completo.webp", width: 1600, height: 1067, alt: dictionary.gallery.panoramic };

  return {
    title: seo.title,
    description: seo.description,
    keywords: seoKeywords,
    alternates: { canonical: url, languages: alternateLanguages() },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      siteName: property.brandName,
      locale,
      type: "website",
      images: [ogImage]
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [ogImage.url]
    }
  };
}

export default async function LocalePage({ params }: Props) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const t = getDictionary(locale);
  const galleryImages = getGalleryImages();
  const galleryLabels = Object.fromEntries(
    galleryImages
      .filter((item) => item.altKey)
      .map((item) => [item.altKey!, t.gallery[item.altKey!.split(".")[1]] ?? item.fallbackAlt])
  );
  const areaCards: { key: string; icon: LucideIcon; title: string; text: string }[] = [
    { key: "beaches", icon: Waves, title: t.area.beachesTitle, text: t.area.beachesText },
    { key: "shopping", icon: ShoppingBag, title: t.area.shoppingTitle, text: t.area.shoppingText },
    { key: "transport", icon: Train, title: t.area.transportTitle, text: t.area.transportText },
    { key: "leisure", icon: Smile, title: t.area.leisureTitle, text: t.area.leisureText },
    { key: "airport", icon: Plane, title: t.area.airportTitle, text: t.area.airportText }
  ];
  const distanceIcons: Record<string, LucideIcon> = {
    beach: Waves,
    shopping: ShoppingBag,
    castle: Castle,
    train: Train
  };
  const longStayBenefits: Array<[LucideIcon, string]> = [
    [Wifi, t.longStay.benefitWifi],
    [Utensils, t.longStay.benefitKitchen],
    [WashingMachine, t.longStay.benefitWasher],
    [Snowflake, t.longStay.benefitClimate],
    [Waves, t.longStay.benefitBeach],
    [ShoppingBag, t.longStay.benefitNearby]
  ];
  const nordicBenefits: Array<[LucideIcon, string]> = [
    [Sun, t.nordic.benefitSun],
    [Snowflake, t.nordic.benefitWinter],
    [Waves, t.nordic.benefitBeach],
    [MapPinned, t.nordic.benefitWalk],
    [Plane, t.nordic.benefitAirport]
  ];
  const hostBenefits = [t.host.benefitCare, t.host.benefitWhatsapp, t.host.benefitTips];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LodgingBusiness", "Apartment"],
    name: property.name,
    alternateName: [property.brandName, property.featuredAccommodation],
    description: seoByLocale[locale].description,
    telephone: property.whatsappPhone,
    address: { "@type": "PostalAddress", addressLocality: "Fuengirola", addressRegion: "Malaga", addressCountry: "ES" },
    geo: { "@type": "GeoCoordinates", latitude: property.mapCoordinates.latitude, longitude: property.mapCoordinates.longitude },
    url: `${siteUrl}/${locale}`,
    image: galleryImages.map((item) => `${siteUrl}${item.src}`),
    amenityFeature: services.map((service) => ({ "@type": "LocationFeatureSpecification", name: t.services[service.key], value: true })),
    numberOfRooms: property.beds,
    maximumAttendeeCapacity: property.guests,
    floorSize: { "@type": "QuantitativeValue", value: 35, unitCode: "MTK" },
    containsPlace: {
      "@type": "Accommodation",
      name: property.featuredAccommodation,
      occupancy: { "@type": "QuantitativeValue", maxValue: property.guests }
    },
    sameAs: [bookingUrl]
  };

  return (
    <div className="shell">
      <Header locale={locale} nav={t.nav} menuLabel={t.common.menu} />
      <main>
        <section className="hero">
          <Image className="hero-img image-cover" src="/images/living-room.webp" alt={t.gallery.living} fill priority sizes="100vw" />
          <div className="container hero-content">
            <span className="eyebrow">{t.hero.eyebrow}</span>
            <h1>{t.hero.title}</h1>
            <p>{t.hero.text}</p>
            <div className="trust">{t.common.trust}</div>
          </div>
        </section>

        <section className="quick" aria-label="Property summary">
          <div className="container quick-grid quick-grid-four">
            {[
              [property.size, t.common.size, t.summary.size],
              [property.guests, t.common.guests, t.summary.guests],
              [property.beachDistance, t.common.beach, t.summary.beach],
              [property.rating, t.common.rating, t.summary.rating]
            ].map(([value, label, detail]) => (
              <div className="quick-item" key={label}>
                <strong>{value}</strong>
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section winter-section">
          <div className="container">
            <h2 className="section-title">{t.winter.title}</h2>
            <p className="lead">{t.winter.text}</p>
            <div className="winter-grid">
              {[
                [Sun, t.winter.sun],
                [Palmtree, t.winter.climate],
                [Waves, t.winter.promenade],
                [Coffee, t.winter.terraces],
                [Plane, t.winter.airport],
                [Home, t.winter.long]
              ].map(([Icon, label]) => (
                <div className="winter-item" key={label as string}>
                  <Icon aria-hidden="true" size={34} />
                  <strong>{label as string}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="apartment">
          <div className="container split">
            <div className="photo-frame">
              <Image src="/images/bedroom.webp" alt={t.gallery.bedroom} fill sizes="(max-width: 900px) 100vw, 50vw" className="image-cover image-bedroom" />
            </div>
            <div>
              <h2 className="section-title">{t.description.title}</h2>
              <p className="lead">{t.description.text}</p>
              <p>{t.description.text2}</p>
              <p>{t.description.text3}</p>
            </div>
          </div>
        </section>

        <section className="image-break" aria-label={t.gallery.panoramic}>
          <div className="container">
            <div className="support-photo support-photo-wide">
              <Image src="/images/completo.webp" alt={t.gallery.panoramic} fill sizes="(max-width: 1120px) calc(100vw - 32px), 1120px" loading="lazy" className="image-cover" />
            </div>
          </div>
        </section>

        <Gallery title={t.gallery.title} intro={t.gallery.intro} images={galleryImages} labels={galleryLabels} controls={{ close: t.common.close, next: t.common.next, previous: t.common.previous }} />

        <section className="section">
          <div className="container">
            <h2 className="section-title">{t.services.title}</h2>
            <div className="services-grid">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div className="service" key={service.key}>
                    <Icon aria-hidden="true" size={26} />
                    <strong>{t.services[service.key]}</strong>
                  </div>
                );
              })}
            </div>
            <div className="amenities">
              <h3>{t.amenities.title}</h3>
              {[t.amenities.kitchen, t.amenities.bathroom, t.amenities.living, t.amenities.other].map((group, index) => (
                <ul key={index}>{group.map((item) => <li key={item}>{item}</li>)}</ul>
              ))}
            </div>
          </div>
        </section>

        <section className="image-break" aria-label={t.gallery.sofa}>
          <div className="container">
            <div className="support-photo">
              <Image src="/images/sofa.webp" alt={t.gallery.sofa} fill sizes="(max-width: 1120px) calc(100vw - 32px), 1120px" loading="lazy" className="image-cover" />
            </div>
          </div>
        </section>

        <section className="section location-section" id="location">
          <div className="container location-grid">
            <div>
              <h2 className="section-title">{t.location.title}</h2>
              <p className="lead">{t.location.text}</p>
              <p className="small location-note">{t.location.note}</p>
              <div className="distances">
                {distances.map((item) => {
                  const Icon = distanceIcons[item.icon];
                  return (
                  <div className="distance" key={item.key}>
                    <Icon aria-hidden="true" size={22} />
                    <strong>{t.location[item.timeKey]}</strong>
                    <div>{t.location[item.key]}</div>
                  </div>
                  );
                })}
              </div>
            </div>
            <div>
              <LocationMap ariaLabel={t.location.map} openLabel={t.location.openMap} note={t.location.exactAfterBooking} />
              <h3>{t.location.airportTitle}</h3>
              <p>{t.location.airportText}</p>
              <div className="arrival-grid">
                {[
                  [Car, t.location.carTitle, t.location.carText],
                  [Train, t.location.trainTitle, t.location.trainText],
                  [Plane, t.location.airportCardTitle, t.location.airportCardText]
                ].map(([Icon, title, text]) => (
                  <article className="arrival-card" key={title as string}>
                    <Icon aria-hidden="true" size={24} />
                    <strong>{title as string}</strong>
                    <p>{text as string}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="image-break" aria-label={t.gallery.living}>
          <div className="container">
            <div className="support-photo">
              <Image src="/images/living-room.webp" alt={t.gallery.living} fill sizes="(max-width: 1120px) calc(100vw - 32px), 1120px" loading="lazy" className="image-cover" />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">{t.area.title}</h2>
            <div className="area-grid">
              {areaCards.map(({ key, icon: Icon, title, text }) => (
                <article className="area-card" key={key}>
                  <Icon aria-hidden="true" size={26} />
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section nordic-section">
          <div className="container split">
            <div>
              <h2 className="section-title">{t.nordic.title}</h2>
              <p className="lead">{t.nordic.text}</p>
              <p>{t.nordic.text2}</p>
            </div>
            <div className="host-card info-card nordic-card">
              <Sun aria-hidden="true" size={34} />
              <ul className="info-list">
                {nordicBenefits.map(([Icon, label]) => (
                  <li key={label}>
                    <Icon aria-hidden="true" size={18} />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">{t.explore.title}</h2>
            <p className="lead">{t.explore.text}</p>
            <div className="explore-grid">
              {[
                ["fuengirola", t.explore.fuengirolaTitle, t.explore.fuengirolaTime, t.explore.fuengirolaText],
                ["marbella", t.explore.marbellaTitle, t.explore.marbellaTime, t.explore.marbellaText],
                ["banus", t.explore.banusTitle, t.explore.banusTime, t.explore.banusText],
                ["mijas", t.explore.mijasTitle, t.explore.mijasTime, t.explore.mijasText],
                ["malaga", t.explore.malagaTitle, t.explore.malagaTime, t.explore.malagaText],
                ["caminito", t.explore.caminitoTitle, t.explore.caminitoTime, t.explore.caminitoText]
              ].map(([key, title, time, text]) => (
                <article className="explore-card" key={key}>
                  <MapPinned aria-hidden="true" size={24} />
                  <h3>{title}</h3>
                  <strong>{time}</strong>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section long-stay-section">
          <div className="container split">
            <div>
              <h2 className="section-title">{t.longStay.title}</h2>
              <p className="lead">{t.longStay.text}</p>
              <p>{t.longStay.text2}</p>
            </div>
            <div className="long-stay-card">
              <Briefcase aria-hidden="true" size={36} />
              <strong>{t.longStay.cardTitle}</strong>
              <ul className="long-stay-list">
                {longStayBenefits.map(([Icon, label]) => (
                  <li key={label}>
                    <Icon aria-hidden="true" size={18} />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="image-break" aria-label={t.gallery.dining}>
          <div className="container">
            <div className="support-photo">
              <Image src="/images/terrace.webp" alt={t.gallery.dining} fill sizes="(max-width: 1120px) calc(100vw - 32px), 1120px" loading="lazy" className="image-cover" />
            </div>
          </div>
        </section>

        <section className="section" id="reviews">
          <div className="container">
            <h2 className="section-title">{t.reviews.title}</h2>
            <p className="lead">{t.reviews.source}</p>
            <div className="score-panel">
              <div>
                <strong>{t.reviews.overall}</strong>
                <span>{t.reviews.comments}</span>
              </div>
              {reviewScores.map((score) => (
                <div key={score.key}>
                  <strong>{score.value}</strong>
                  <span>{t.reviews[score.key]}</span>
                </div>
              ))}
            </div>
            <div className="reviews-grid">
              {reviews.map((review) => (
                <article className="review" key={review.textKey}>
                  <div className="rating">Booking.com</div>
                  <h3>{review.name} · {t.reviews[review.countryKey]}</h3>
                  {t.reviews.translated ? <p className="small">{t.reviews.translated}</p> : null}
                  <p>{t.reviews[review.textKey]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="image-break" aria-label={t.gallery.sofa}>
          <div className="container">
            <div className="support-photo support-photo-cosy">
              <Image src="/images/sofa.webp" alt={t.gallery.sofa} fill sizes="(max-width: 1120px) calc(100vw - 32px), 1120px" loading="lazy" className="image-cover" />
            </div>
          </div>
        </section>

        <section className="section host-section">
          <div className="container split">
            <div>
              <h2 className="section-title">{t.host.title}</h2>
              <p className="lead">{t.host.text}</p>
              <p>{t.host.text2}</p>
              <p className="small">{t.host.languages}</p>
            </div>
            <div className="host-card info-card host-profile-card">
              <Smile aria-hidden="true" size={34} />
              <strong>Nieves</strong>
              <div className="host-languages" aria-label={t.host.languages}>
                <span>🇪🇸 Español</span>
                <span>🇬🇧 English</span>
              </div>
              <ul className="info-list">
                {hostBenefits.map((label) => (
                  <li key={label}>
                    <CircleCheck aria-hidden="true" size={18} />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">{t.rules.title}</h2>
            <div className="rules-grid">
              {["checkin", "checkout", "rules", "pool", "parking", "damages", "cancellation"].map((key) => (
                <div className="rule-card" key={key}>
                  <p>{t.rules[key]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <h2 className="section-title">{t.faq.title}</h2>
            <FaqAccordion dictionary={t.faq} />
          </div>
        </section>

        <section className="closing">
          <Image className="closing-img image-cover" src="/images/closing-view.webp" alt={t.gallery.terrace} fill sizes="100vw" />
          <div className="container">
            <h2 className="section-title">{t.closing.title}</h2>
            <p>{t.closing.text}</p>
            <div className="trust">{t.common.trust}</div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="brand">{property.brandName}</div>
            <p>{property.brandTagline}</p>
            <p>{t.footer.current}</p>
            <p>{property.location}</p>
            <p className="small">{t.footer.disclaimer}</p>
          </div>
          <nav aria-label="Footer navigation">
            <a href="#apartment">{t.nav.apartment}</a>
            <a href="#gallery">{t.nav.gallery}</a>
            <a href="#location">{t.nav.location}</a>
            <a href="#reviews">{t.nav.reviews}</a>
            <a href="#faq">{t.nav.faq}</a>
          </nav>
          <div>
            <LanguageSelectFooter locale={locale} label={t.common.language} />
            <p><a href={`/${locale}/legal#legal`}>{t.footer.legal}</a></p>
            <p><a href={`/${locale}/legal#privacy`}>{t.footer.privacy}</a> · <a href={`/${locale}/legal#cookies`}>{t.footer.cookies}</a></p>
          </div>
        </div>
      </footer>
      <CookieConsent title={t.cookies.title} text={t.cookies.text} accept={t.cookies.accept} reject={t.cookies.reject} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}

function LanguageSelectFooter({ locale, label }: { locale: Locale; label: string }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <span className="small">{label}</span>
      <div style={{ marginTop: 8 }}>
        {locales.map((item) => (
          <a
            key={item}
            href={localizedPath(item)}
            className="language-footer-link"
            aria-label={localeLabels[item].name}
            style={{ fontWeight: item === locale ? 800 : 500 }}
          >
            <span className={`flag flag-${item}`} aria-hidden="true" />
            {localeLabels[item].code}
          </a>
        ))}
      </div>
    </div>
  );
}
