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
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getGuideCategory, guideCategories } from "@/config/guides";
import { property } from "@/config/property";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, Locale, locales } from "@/i18n/locales";
import { alternateLanguages, localizedPath, siteUrl } from "@/lib/urls";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string; slug: string }> };

const airportGuideSlug = "como-llegar-desde-el-aeropuerto";
const airportGuideTitle = "Cómo llegar del Aeropuerto de Málaga a Fuengirola | Tren, Taxi, Uber y Coche";
const airportGuideDescription =
  "Descubre todas las formas de llegar desde el Aeropuerto de Málaga a Fuengirola: tren Cercanías, taxi, Uber, Bolt o coche de alquiler. Precios, tiempos y nuestra recomendación.";

const airportOptions = [
  { title: "Tren", time: "35-40 min", price: "Desde 2,70 €", note: "Recomendado", icon: TrainFront, recommended: true },
  { title: "Taxi", time: "20-30 min", price: "35-45 €", note: "Directo y cómodo", icon: CarTaxiFront },
  { title: "Uber / Bolt", time: "20-30 min", price: "Precio variable", note: "Buena alternativa", icon: Car },
  { title: "Coche alquiler", time: "Flexible", price: "Según compañía", note: "Ideal para recorrer la Costa del Sol", icon: Luggage }
];

const relatedGuides = [
  { title: "Playas", slug: "playas", text: "Playas y paseos junto al mar cerca del apartamento." },
  { title: "Supermercados", slug: "supermercados", text: "Compras prácticas para estancias cortas o largas." },
  { title: "Restaurantes", slug: "restaurantes", text: "Recomendaciones gastronómicas en preparación." },
  { title: "Transporte", slug: "transporte", text: "Cómo moverte por Fuengirola y la Costa del Sol." }
];

const faqItems = [
  {
    question: "¿Cuál es la forma más económica de llegar a Fuengirola desde el aeropuerto?",
    answer:
      "El tren Cercanías C1 suele ser la opción más económica. Sale desde la terminal del aeropuerto y conecta directamente con Fuengirola."
  },
  {
    question: "¿Cuánto tarda un taxi desde el Aeropuerto de Málaga?",
    answer:
      "Normalmente tarda entre 20 y 30 minutos, dependiendo del tráfico y de la hora de llegada."
  },
  {
    question: "¿Uber y Bolt funcionan en el aeropuerto?",
    answer:
      "Sí, suelen estar disponibles en el Aeropuerto de Málaga. El precio puede cambiar según la demanda, la hora y el tipo de vehículo."
  },
  {
    question: "¿Merece la pena alquilar coche?",
    answer:
      "Puede ser una buena idea si quieres visitar Marbella, Mijas Pueblo, Málaga, Ronda o distintos puntos de la Costa del Sol durante tu estancia."
  }
];

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
  const path = `/guia/${category.slug}`;
  const url = `${siteUrl}${localizedPath(locale, path)}`;
  const isAirportGuide = category.slug === airportGuideSlug;
  const title = isAirportGuide ? airportGuideTitle : `${t.guide[category.key]} | ${t.guide.title} | Stay Fuengirola`;
  const description = isAirportGuide ? airportGuideDescription : `${t.guide[`${category.key}Text`]} ${t.guide.comingSoon}.`;

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

  if (category.slug === airportGuideSlug) {
    return <AirportGuidePage locale={locale} dictionary={t} />;
  }

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

function AirportGuidePage({ locale, dictionary: t }: { locale: Locale; dictionary: ReturnType<typeof getDictionary> }) {
  const articlePath = `/guia/${airportGuideSlug}`;
  const articleUrl = `${siteUrl}${localizedPath(locale, articlePath)}`;
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Stay Fuengirola", item: `${siteUrl}/${locale}` },
      { "@type": "ListItem", position: 2, name: "Guía de Fuengirola", item: `${siteUrl}/${locale}/guia` },
      { "@type": "ListItem", position: 3, name: "Cómo llegar desde el Aeropuerto de Málaga", item: articleUrl }
    ]
  };
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cómo llegar desde el Aeropuerto de Málaga a Fuengirola",
    description: airportGuideDescription,
    mainEntityOfPage: articleUrl,
    author: { "@type": "Organization", name: property.brandName },
    publisher: { "@type": "Organization", name: property.brandName },
    about: ["Aeropuerto de Málaga", "Fuengirola", "Costa del Sol", "transporte público", "alojamiento turístico"],
    inLanguage: "es",
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
          <Link className="text-link" href={`/${locale}/guia`}>
            <ArrowLeft aria-hidden="true" size={18} />
            {t.guide.back}
          </Link>

          <header className="guide-hero-card">
            <span className="guide-hero-icon">
              <MapPin aria-hidden="true" size={30} />
            </span>
            <p className="guide-kicker">Guía de Fuengirola · Aeropuerto de Málaga</p>
            <h1>Cómo llegar desde el Aeropuerto de Málaga a Fuengirola</h1>
            <p>
              Llegar a Fuengirola desde el Aeropuerto de Málaga es sencillo. Hay tren directo, taxis, VTC y coches de
              alquiler, así que puedes elegir entre una llegada económica, rápida o más flexible según el tipo de viaje.
            </p>
          </header>

          <section className="airport-options" aria-label="Comparativa de transporte desde el aeropuerto">
            {airportOptions.map((option) => {
              const Icon = option.icon;
              return (
                <div className={option.recommended ? "airport-option recommended" : "airport-option"} key={option.title}>
                  <Icon aria-hidden="true" size={28} />
                  <h2>{option.title}</h2>
                  <dl>
                    <div>
                      <Clock aria-hidden="true" size={16} />
                      <dt>Tiempo</dt>
                      <dd>{option.time}</dd>
                    </div>
                    <div>
                      <Euro aria-hidden="true" size={16} />
                      <dt>Precio</dt>
                      <dd>{option.price}</dd>
                    </div>
                  </dl>
                  <strong>
                    {option.recommended ? (
                      <>
                        <span aria-label="Cinco estrellas">★★★★★</span> {option.note}
                      </>
                    ) : (
                      option.note
                    )}
                  </strong>
                </div>
              );
            })}
          </section>

          <section className="guide-content-section" id="introduccion">
            <h2>Introducción</h2>
            <p>
              El Aeropuerto de Málaga-Costa del Sol está a unos 25 kilómetros de Fuengirola. Para la mayoría de viajeros,
              el trayecto es cómodo y directo, especialmente si llegas con equipaje ligero o quieres evitar conducir nada
              más aterrizar.
            </p>
            <p>
              En esta guía resumimos las opciones más útiles para llegar a Fuengirola: tren Cercanías C1, taxi, Uber,
              Bolt, coche de alquiler y autobús. Los tiempos y precios son aproximados y pueden variar según horarios,
              tráfico y temporada.
            </p>
          </section>

          <section className="guide-map-block" aria-label="Mapa de ruta entre el Aeropuerto de Málaga y Fuengirola">
            <iframe
              title="Ruta en Google Maps desde el Aeropuerto de Málaga a Fuengirola"
              src="https://www.google.com/maps?q=Aeropuerto%20de%20M%C3%A1laga%20to%20Fuengirola&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </section>

          <section className="guide-content-section" id="tren-cercanias-c1">
            <h2>Tren Cercanías C1</h2>
            <p>
              El tren Cercanías C1 es normalmente nuestra opción recomendada. La estación está dentro del propio
              aeropuerto y la línea conecta directamente con Fuengirola, sin necesidad de pasar por el centro de Málaga.
            </p>
            <p>
              El trayecto suele durar unos 35-40 minutos y el precio parte de aproximadamente 2,70 €. Es una opción
              práctica, económica y cómoda si no viajas con demasiado equipaje.
            </p>
          </section>

          <section className="guide-content-section" id="taxi">
            <h2>Taxi</h2>
            <p>
              El taxi es la forma más directa para llegar al apartamento desde el aeropuerto. Suele tardar entre 20 y 30
              minutos, dependiendo del tráfico, y evita transbordos o esperas.
            </p>
            <p>
              Como referencia, el coste habitual puede moverse entre 35 € y 45 €, aunque el precio final puede variar por
              horario, equipaje, suplementos o tráfico.
            </p>
          </section>

          <section className="guide-content-section" id="uber-y-bolt">
            <h2>Uber y Bolt</h2>
            <p>
              Uber y Bolt funcionan en el Aeropuerto de Málaga y pueden ser una alternativa cómoda al taxi. La principal
              diferencia es que el precio es variable y depende de la demanda en ese momento.
            </p>
            <p>
              Para familias, llegadas tarde o viajeros con varias maletas, puede ser una opción interesante si el precio
              mostrado en la app encaja con tu presupuesto.
            </p>
          </section>

          <section className="guide-content-section" id="alquiler-de-coche">
            <h2>Alquiler de coche</h2>
            <p>
              Alquilar coche no es imprescindible para disfrutar de Fuengirola, pero puede ser muy útil si quieres recorrer
              la Costa del Sol con libertad. Desde Fuengirola es fácil organizar escapadas a Marbella, Mijas Pueblo,
              Málaga, Ronda o Caminito del Rey.
            </p>
            <p>
              Si eliges esta opción, conviene reservar con antelación y revisar bien las condiciones de seguro, franquicia,
              combustible y recogida.
            </p>
          </section>

          <section className="guide-content-section" id="autobus">
            <h2>Autobús</h2>
            <p>
              El autobús puede ser útil en algunos horarios, pero normalmente es menos directo que el tren para llegar a
              Fuengirola desde el aeropuerto. Puede requerir más espera o combinar distintas líneas.
            </p>
            <p>
              Por comodidad, para la mayoría de huéspedes recomendamos valorar primero el tren, taxi o VTC.
            </p>
          </section>

          <section className="guide-recommendation" id="nuestra-recomendacion">
            <Star aria-hidden="true" size={28} />
            <div>
              <h2>Nuestra recomendación</h2>
              <p>
                Si buscas una llegada sencilla y económica, el tren Cercanías C1 es la mejor primera opción. Si viajas de
                noche, con niños, con mucho equipaje o prefieres ir puerta a puerta, taxi, Uber o Bolt serán más cómodos.
              </p>
            </div>
          </section>

          <section className="guide-content-section" id="una-vez-llegues-a-fuengirola">
            <h2>Una vez llegues a Fuengirola</h2>
            <p>
              La estación de tren de Fuengirola queda cerca de la zona del apartamento. Desde allí puedes continuar con un
              breve trayecto en taxi, VTC o caminando si viajas ligero y te apetece orientarte por el centro.
            </p>
            <p>
              La ubicación es práctica para moverse a pie durante la estancia: playa, paseo marítimo, supermercados,
              restaurantes y el Centro Comercial Miramar quedan a pocos minutos.
            </p>
          </section>

          <section className="guide-content-section" id="preguntas-frecuentes">
            <h2>Preguntas frecuentes</h2>
            <div className="guide-faq-list">
              {faqItems.map((item) => (
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

          <section className="guide-content-section" id="nuestra-recomendacion-personal">
            <h2>Nuestra recomendación personal</h2>
            <ul className="guide-check-list">
              <li>
                <CheckCircle2 aria-hidden="true" size={18} />
                Elige tren si quieres ahorrar y llegar sin preocuparte por el tráfico.
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" size={18} />
                Elige taxi o VTC si llegas tarde, viajas en familia o llevas mucho equipaje.
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" size={18} />
                Elige coche de alquiler si quieres descubrir Marbella, Mijas Pueblo, Málaga y otros puntos de la Costa del
                Sol.
              </li>
            </ul>
          </section>

          <section className="guide-related" aria-labelledby="related-title">
            <h2 id="related-title">También puede interesarte</h2>
            <div className="guide-related-grid">
              {relatedGuides.map((guide) => (
                <Link className="guide-related-card" href={`/${locale}/guia/${guide.slug}`} key={guide.slug}>
                  <MapPinned aria-hidden="true" size={22} />
                  <strong>{guide.title}</strong>
                  <span>{guide.text}</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="guide-cta">
            <Plane aria-hidden="true" size={30} />
            <h2>¿Tienes alguna duda antes de viajar?</h2>
            <p>
              Escríbenos antes de reservar y te ayudamos con la llegada, el transporte o cualquier detalle práctico de tu
              estancia en Fuengirola.
            </p>
            <WhatsAppButton locale={locale} label="Escribir por WhatsApp" />
          </section>
        </article>
      </main>
      <CookieConsent title={t.cookies.title} text={t.cookies.text} accept={t.cookies.accept} reject={t.cookies.reject} />
    </div>
  );
}
