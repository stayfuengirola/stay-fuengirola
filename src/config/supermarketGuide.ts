import type { GuideCategoryKey } from "@/config/guides";
import type { SupermarketCategory, SupermarketFilter } from "@/data/supermarkets";
import { supermarketOfficialUrls } from "@/data/supermarkets";
import type { Locale } from "@/i18n/locales";

export type SupermarketGuideContent = {
  metaTitle: string;
  metaDescription: string;
  breadcrumbGuide: string;
  breadcrumbArticle: string;
  kicker: string;
  h1: string;
  intro: string;
  heroImageAlt: string;
  backLabel: string;
  quickTitle: string;
  quickLinks: Array<{ title: string; text: string; target: string }>;
  firstShopTitle: string;
  firstShopParagraphs: string[];
  firstShopItems: string[];
  labels: {
    approx: string;
    walk: string;
    drive: string;
    bestFor: string;
    category: string;
    verified: string;
    ownerConfirmed: string;
    official: string;
    thirdParty: string;
    directions: string;
    officialSite: string;
    storeLocator: string;
    openingHours: string;
    copyList: string;
    copied: string;
    noResults: string;
  };
  filterLabels: Record<SupermarketFilter, string>;
  categoryLabels: Record<SupermarketCategory, string>;
  descriptions: Record<string, string>;
  bestForLabels: Record<string, string>;
  sectionsTitle: string;
  sectionsIntro: string;
  comparisonTitle: string;
  comparisonHeaders: { supermarket: string; bestFor: string; type: string; transport: string };
  comparisonRows: Array<{ supermarket: string; bestFor: string; type: string; transport: string }>;
  needsTitle: string;
  needsCards: Array<{ title: string; items: string[]; recommendation: string }>;
  freshTitle: string;
  freshParagraphs: string[];
  freshNote: string;
  sundayTitle: string;
  sundayParagraphs: string[];
  mapTitle: string;
  mapAria: string;
  mapApartment: string;
  mapApartmentPopup: string;
  mapPopupDistance: string;
  mapPopupSection: string;
  checklistTitle: string;
  checklistIntro: string;
  checklistItems: string[];
  tipsTitle: string;
  tips: string[];
  faqTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  officialTitle: string;
  editorialNote: string;
  officialLinks: Array<{ title: string; href: string; destination: "official_site" | "store_locator" | "directions" | "opening_hours"; supermarket: string }>;
  relatedTitle: string;
  related: Array<{ key: GuideCategoryKey; title: string; text: string }>;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  schemaAbout: string[];
};

export const supermarketGuideContent: Record<Locale, SupermarketGuideContent> = {
  es: {
    metaTitle: "Supermercados cerca del Apartamento Veramar | Stay Fuengirola",
    metaDescription: "Guía de supermercados cerca del Apartamento Veramar: Maskom, Carrefour Miramar, Mercadona, Lidl, Aldi y Dia, con mapa y consejos prácticos.",
    breadcrumbGuide: "Guía de Fuengirola",
    breadcrumbArticle: "Supermercados",
    kicker: "Guía de Fuengirola · Supermercados",
    h1: "Supermercados cerca del Apartamento Veramar",
    intro: "Desde el apartamento tienes varias opciones para hacer la compra sin alejarte demasiado. Maskom es la alternativa más cercana para el día a día, mientras que el hipermercado Carrefour de Miramar resulta ideal para una compra completa. También encontrarás Mercadona, Lidl, Aldi y Dia en Fuengirola.",
    heroImageAlt: "Cesta de compra con productos frescos para una estancia en Fuengirola",
    backLabel: "Volver a la guía",
    quickTitle: "¿Qué supermercado elegir?",
    quickLinks: [
      { title: "El más cercano", text: "Maskom", target: "#maskom" },
      { title: "Compra grande", text: "Carrefour Miramar", target: "#carrefour-miramar" },
      { title: "Compra habitual", text: "Mercadona", target: "#mercadona" },
      { title: "Ofertas semanales", text: "Lidl", target: "#lidl" },
      { title: "Alternativa de descuento", text: "Aldi", target: "#aldi" },
      { title: "Compra rápida de barrio", text: "Dia", target: "#dia" }
    ],
    firstShopTitle: "Primera compra recomendada",
    firstShopParagraphs: ["Si acabas de llegar y solo necesitas agua, desayuno, fruta, leche, café o productos básicos, Maskom es la opción más cómoda por proximidad.", "Para una compra más grande destinada a varios días, Carrefour Miramar ofrece un surtido mucho más amplio y permite combinar la visita con otras tiendas del centro comercial."],
    firstShopItems: ["Agua", "Café", "Leche", "Pan", "Huevos", "Fruta", "Yogur", "Aceite", "Productos de higiene", "Protector solar"],
    labels: { approx: "Aprox.", walk: "andando", drive: "en coche", bestFor: "Ideal para", category: "Tipo", verified: "Última revisión", ownerConfirmed: "Confirmado por propietario y fuente oficial de cadena", official: "Fuente oficial", thirdParty: "Dato pendiente de confirmación oficial específica", directions: "Ver ubicación", officialSite: "Consultar tienda oficial", storeLocator: "Buscar tienda", openingHours: "Consultar horario oficial", copyList: "Copiar lista", copied: "Lista copiada", noResults: "No hay supermercados para este filtro." },
    filterLabels: { all: "Todos", nearest: "Más cercano", large: "Compra grande", discount: "Descuento", quick: "Compra rápida", walk: "A pie", car: "Con coche" },
    categoryLabels: { nearest: "Más cercano", hypermarket: "Hipermercado", standard: "Supermercado", discount: "Descuento", convenience: "Barrio" },
    descriptions: {
      maskom: "Maskom es la opción más práctica para resolver la compra diaria sin desplazarte demasiado. Resulta especialmente útil para comprar agua, desayuno, fruta, pan, bebidas, productos frescos y artículos básicos durante la estancia.",
      carrefour: "Carrefour Miramar está dentro del Centro Comercial Miramar y funciona como hipermercado. Es la opción más completa para una compra grande, productos de higiene, artículos de hogar o necesidades para varios días.",
      mercadona: "Mercadona es una alternativa de compra habitual para alimentación, frescos, limpieza, higiene y marca propia. La tienda concreta y sus servicios deben comprobarse siempre en el localizador oficial antes de salir.",
      lidl: "Lidl es una opción de descuento con alimentación, panadería, productos de temporada y surtido variable. Conviene revisar la tienda oficial y no dar por garantizada una promoción concreta.",
      aldi: "Aldi ofrece un formato de descuento con básicos, marca propia, productos frescos y promociones variables. Es útil si encaja con tu ruta o vas en coche.",
      dia: "Dia puede resultar práctico para reponer productos básicos, bebidas, limpieza o pequeñas compras de barrio. Antes de ir en domingo o festivo conviene revisar la tienda concreta."
    },
    bestForLabels: { firstShop: "primera compra", breakfast: "desayuno", quickBasics: "básicos rápidos", freshDaily: "frescos cotidianos", topUp: "reponer durante la semana", largeShop: "compra grande", families: "familias", longStay: "estancias largas", hygiene: "higiene", children: "niños", international: "productos internacionales", beachItems: "playa y piscina", weeklyShop: "compra semanal", ownBrand: "marca propia", cleaning: "limpieza", weeklyOffers: "ofertas semanales", bakery: "panadería", europeanProducts: "productos europeos", seasonalItems: "artículos temporales", discountShop: "compra de descuento", drinks: "bebidas", basicFood: "alimentación básica" },
    sectionsTitle: "Supermercados principales",
    sectionsIntro: "La selección está pensada para huéspedes del Apartamento Veramar. Los horarios y servicios pueden cambiar según tienda, temporada y festivos.",
    comparisonTitle: "Comparativa rápida",
    comparisonHeaders: { supermarket: "Supermercado", bestFor: "Mejor para", type: "Tipo de compra", transport: "Transporte recomendado" },
    comparisonRows: [{ supermarket: "Maskom", bestFor: "Compra rápida y diaria", type: "Pequeña o mediana", transport: "A pie" }, { supermarket: "Carrefour Miramar", bestFor: "Compra completa", type: "Grande", transport: "A pie o coche" }, { supermarket: "Mercadona", bestFor: "Compra habitual", type: "Mediana o grande", transport: "Según tienda" }, { supermarket: "Lidl", bestFor: "Ofertas y surtido variable", type: "Mediana", transport: "A pie o coche" }, { supermarket: "Aldi", bestFor: "Compra de descuento", type: "Mediana", transport: "Según ubicación" }, { supermarket: "Dia", bestFor: "Compra rápida", type: "Pequeña", transport: "Según tienda" }],
    needsTitle: "Dónde comprar según lo que necesitas",
    needsCards: [{ title: "Para desayunar", items: ["pan", "café", "leche", "fruta", "huevos", "yogur"], recommendation: "Maskom por proximidad." }, { title: "Para una semana", items: ["agua", "frescos", "higiene", "limpieza", "básicos"], recommendation: "Carrefour o Mercadona según preferencias y desplazamiento." }, { title: "Para la playa", items: ["agua", "hielo", "bebidas", "fruta", "aperitivos", "protector solar"], recommendation: "Carrefour para más variedad; Maskom para lo básico." }, { title: "Para bebés y niños", items: ["pañales", "alimentación infantil", "higiene", "agua", "meriendas"], recommendation: "Revisa disponibilidad por tienda y marca." }, { title: "Productos internacionales", items: ["despensa", "bebidas", "especialidades", "marcas conocidas"], recommendation: "Carrefour suele ser la opción más probable por tamaño." }, { title: "Antes de cenar", items: ["bebidas", "pan", "algo rápido", "reposición"], recommendation: "Maskom o Dia según ubicación y horario vigente." }],
    freshTitle: "Productos frescos y comida preparada",
    freshParagraphs: ["Maskom funciona bien para una compra cercana y frescos cotidianos. Carrefour ofrece más variedad por tamaño, mientras que Mercadona suele encajar con una compra organizada para varios días.", "Lidl y Aldi pueden interesar por promociones y surtido propio. Dia resulta útil para una reposición rápida si la tienda concreta encaja con tu ruta."],
    freshNote: "Las secciones disponibles pueden variar según el establecimiento.",
    sundayTitle: "Comprar en domingos y festivos",
    sundayParagraphs: ["Los horarios pueden variar. Algunas tiendas abren en determinados festivos comerciales, otras permanecen cerradas y en temporada turística puede haber excepciones.", "Antes de desplazarte en domingo o festivo, consulta siempre el horario oficial del establecimiento concreto."],
    mapTitle: "Mapa de supermercados cercanos",
    mapAria: "Mapa de supermercados cerca del Apartamento Veramar",
    mapApartment: "Zona aproximada del apartamento",
    mapApartmentPopup: "La ubicación exacta se facilita tras confirmar la reserva.",
    mapPopupDistance: "Distancia aproximada",
    mapPopupSection: "Ver sección",
    checklistTitle: "Lista básica para tu llegada",
    checklistIntro: "Puedes marcar elementos visualmente o copiar la lista. No se guarda ningún dato.",
    checklistItems: ["Agua", "Café o té", "Leche", "Pan", "Huevos", "Fruta", "Yogur", "Aceite", "Sal", "Algo para desayunar", "Productos de ducha", "Protector solar", "Bolsas de basura", "Papel de cocina"],
    tipsTitle: "Consejos Stay Fuengirola",
    tips: ["Haz una compra pequeña en Maskom al llegar y deja la compra grande para Carrefour si vas a quedarte varios días.", "Lleva una bolsa reutilizable.", "Comprueba los horarios antes de ir en domingo o festivo.", "Si compras productos congelados en verano, regresa directamente al apartamento.", "No cargues demasiado si vas andando desde Carrefour.", "Para productos muy específicos, revisa antes el catálogo o llama a la tienda."],
    faqTitle: "Preguntas frecuentes",
    faqs: [{ question: "¿Cuál es el supermercado más cercano al apartamento?", answer: "Maskom, según la información confirmada por el propietario y sin publicar la dirección exacta del alojamiento." }, { question: "¿Se puede ir andando a Carrefour Miramar?", answer: "Sí. Desde la zona aproximada del apartamento es una opción cercana, aunque el tiempo real depende de la ruta y del ritmo de cada persona." }, { question: "¿Dónde hacer una compra grande?", answer: "Carrefour Miramar es la opción más completa por tamaño. Mercadona también puede encajar para una compra habitual." }, { question: "¿Qué supermercado es mejor para la primera compra?", answer: "Maskom por proximidad si solo necesitas básicos para la llegada." }, { question: "¿Hay Mercadona cerca?", answer: "Hay tiendas Mercadona en Fuengirola. Comprueba siempre la tienda y horario concreto en el localizador oficial." }, { question: "¿Hay Lidl y Aldi en Fuengirola?", answer: "Sí, ambos tienen tiendas publicadas en sus localizadores oficiales de Fuengirola." }, { question: "¿Dónde comprar productos para bebés?", answer: "Carrefour, Mercadona u otros supermercados grandes suelen ser mejores candidatos, pero la disponibilidad exacta puede variar." }, { question: "¿Dónde comprar artículos para la playa?", answer: "Carrefour y Lidl pueden ser útiles para variedad; Maskom para básicos como agua o fruta." }, { question: "¿Abren los supermercados los domingos?", answer: "Depende de cada tienda, temporada y calendario comercial. Consulta siempre la fuente oficial antes de salir." }, { question: "¿Dónde comprar comida preparada?", answer: "Depende de la tienda concreta y de las secciones disponibles. No conviene darlo por garantizado sin comprobarlo antes." }],
    officialTitle: "Fuentes oficiales y datos cambiantes",
    editorialNote: "Los horarios, servicios y establecimientos pueden cambiar. Consulta siempre la información oficial antes de desplazarte.",
    officialLinks: [{ title: "Maskom tiendas", href: supermarketOfficialUrls.maskom, destination: "store_locator", supermarket: "maskom" }, { title: "Carrefour Fuengirola", href: supermarketOfficialUrls.carrefour, destination: "official_site", supermarket: "carrefour" }, { title: "Centro Comercial Miramar", href: supermarketOfficialUrls.miramar, destination: "store_locator", supermarket: "miramar" }, { title: "Mercadona", href: supermarketOfficialUrls.mercadona, destination: "store_locator", supermarket: "mercadona" }, { title: "Lidl Fuengirola", href: supermarketOfficialUrls.lidl, destination: "official_site", supermarket: "lidl" }, { title: "Aldi Fuengirola", href: supermarketOfficialUrls.aldi, destination: "official_site", supermarket: "aldi" }, { title: "Dia Fuengirola", href: supermarketOfficialUrls.dia, destination: "store_locator", supermarket: "dia" }],
    relatedTitle: "También te puede interesar",
    related: [{ key: "shopping", title: "Compras en Fuengirola", text: "Miramar, centro y tiendas útiles." }, { key: "restaurants", title: "Restaurantes", text: "Dónde comer cerca del apartamento." }, { key: "beaches", title: "Playas", text: "Agua, sol y paseo marítimo cerca." }, { key: "airport", title: "Cómo llegar desde el aeropuerto", text: "Tren, taxi, VTC y coche." }, { key: "thingsToDo", title: "Qué hacer", text: "Planes para todos los días." }, { key: "excursions", title: "Excursiones", text: "Ideas para descubrir la Costa del Sol." }],
    ctaTitle: "Todo lo necesario, a pocos minutos",
    ctaText: "La ubicación del Apartamento Veramar permite resolver fácilmente la compra diaria y acceder a supermercados de distintos tamaños durante la estancia.",
    ctaButton: "Ver disponibilidad en Booking",
    schemaAbout: ["supermercados Fuengirola", "Maskom Fuengirola", "Carrefour Miramar", "Mercadona Fuengirola", "Lidl Fuengirola", "Aldi Fuengirola", "Dia Fuengirola"]
  },
  en: {
    metaTitle: "Supermarkets near Apartamento Veramar | Stay Fuengirola",
    metaDescription: "Guide to supermarkets near Apartamento Veramar: Maskom, Carrefour Miramar, Mercadona, Lidl, Aldi and Dia, with a map and practical tips.",
    breadcrumbGuide: "Fuengirola Guide",
    breadcrumbArticle: "Supermarkets",
    kicker: "Fuengirola Guide · Supermarkets",
    h1: "Supermarkets near Apartamento Veramar",
    intro: "From the apartment you have several grocery options without going far. Maskom is the closest choice for everyday basics, while Carrefour in Miramar is ideal for a fuller shop. You will also find Mercadona, Lidl, Aldi and Dia in Fuengirola.",
    heroImageAlt: "Grocery basket with fresh products for a stay in Fuengirola",
    backLabel: "Back to the guide",
    quickTitle: "Which supermarket should you choose?",
    quickLinks: [{ title: "Closest option", text: "Maskom", target: "#maskom" }, { title: "Large shop", text: "Carrefour Miramar", target: "#carrefour-miramar" }, { title: "Regular groceries", text: "Mercadona", target: "#mercadona" }, { title: "Weekly offers", text: "Lidl", target: "#lidl" }, { title: "Discount alternative", text: "Aldi", target: "#aldi" }, { title: "Quick neighbourhood shop", text: "Dia", target: "#dia" }],
    firstShopTitle: "Recommended first shop",
    firstShopParagraphs: ["If you have just arrived and only need water, breakfast, fruit, milk, coffee or basic items, Maskom is the most comfortable option because it is close by.", "For a larger shop for several days, Carrefour Miramar offers a much wider range and can be combined with other shops in the centre."],
    firstShopItems: ["Water", "Coffee", "Milk", "Bread", "Eggs", "Fruit", "Yoghurt", "Olive oil", "Toiletries", "Sun cream"],
    labels: { approx: "Approx.", walk: "walk", drive: "by car", bestFor: "Best for", category: "Type", verified: "Last checked", ownerConfirmed: "Owner confirmed and chain source checked", official: "Official source", thirdParty: "Specific official store confirmation pending", directions: "See location", officialSite: "Official store info", storeLocator: "Find store", openingHours: "Check official hours", copyList: "Copy list", copied: "List copied", noResults: "No supermarkets match this filter." },
    filterLabels: { all: "All", nearest: "Nearest", large: "Large shop", discount: "Discount", quick: "Quick shop", walk: "On foot", car: "By car" },
    categoryLabels: { nearest: "Nearest", hypermarket: "Hypermarket", standard: "Supermarket", discount: "Discount", convenience: "Neighbourhood" },
    descriptions: { maskom: "Maskom is the most practical option for everyday groceries without going far. It is useful for water, breakfast, fruit, bread, drinks, fresh products and basic items during the stay.", carrefour: "Carrefour Miramar is inside Miramar Shopping Centre and works as a hypermarket. It is the most complete option for a large shop, hygiene products, home items or needs for several days.", mercadona: "Mercadona is a regular grocery option for food, fresh products, cleaning, personal care and own-brand items. Always check the exact store and services in the official locator before leaving.", lidl: "Lidl is a discount option with food, bakery, seasonal products and a changing range. Check the official store and do not assume a specific promotion will be available.", aldi: "Aldi offers a discount format with basics, own-brand products, fresh products and changing promotions. It is useful if it fits your route or you go by car.", dia: "Dia can be practical for topping up basic groceries, drinks, cleaning products or small neighbourhood purchases. Check the exact store before going on Sundays or holidays." },
    bestForLabels: { firstShop: "first shop", breakfast: "breakfast", quickBasics: "quick basics", freshDaily: "daily fresh items", topUp: "weekly top-ups", largeShop: "large shop", families: "families", longStay: "long stays", hygiene: "hygiene", children: "children", international: "international products", beachItems: "beach and pool", weeklyShop: "weekly shop", ownBrand: "own brands", cleaning: "cleaning", weeklyOffers: "weekly offers", bakery: "bakery", europeanProducts: "European products", seasonalItems: "temporary items", discountShop: "discount shop", drinks: "drinks", basicFood: "basic food" },
    sectionsTitle: "Main supermarkets",
    sectionsIntro: "This selection is designed for guests at Apartamento Veramar. Hours and services can change by store, season and public holiday.",
    comparisonTitle: "Quick comparison",
    comparisonHeaders: { supermarket: "Supermarket", bestFor: "Best for", type: "Shopping type", transport: "Recommended transport" },
    comparisonRows: [{ supermarket: "Maskom", bestFor: "Daily quick shop", type: "Small or medium", transport: "On foot" }, { supermarket: "Carrefour Miramar", bestFor: "Complete shop", type: "Large", transport: "On foot or by car" }, { supermarket: "Mercadona", bestFor: "Regular groceries", type: "Medium or large", transport: "Depends on store" }, { supermarket: "Lidl", bestFor: "Offers and changing range", type: "Medium", transport: "On foot or by car" }, { supermarket: "Aldi", bestFor: "Discount shop", type: "Medium", transport: "Depends on location" }, { supermarket: "Dia", bestFor: "Quick top-up", type: "Small", transport: "Depends on store" }],
    needsTitle: "Where to shop depending on what you need",
    needsCards: [{ title: "For breakfast", items: ["bread", "coffee", "milk", "fruit", "eggs", "yoghurt"], recommendation: "Maskom because it is close." }, { title: "For a week", items: ["water", "fresh products", "hygiene", "cleaning", "basics"], recommendation: "Carrefour or Mercadona depending on preferences and transport." }, { title: "For the beach", items: ["water", "ice", "drinks", "fruit", "snacks", "sun cream"], recommendation: "Carrefour for more variety; Maskom for basics." }, { title: "For babies and children", items: ["nappies", "baby food", "hygiene", "water", "snacks"], recommendation: "Check availability by store and brand." }, { title: "International products", items: ["pantry", "drinks", "specialities", "known brands"], recommendation: "Carrefour is the most likely option because of its size." }, { title: "Before dinner", items: ["drinks", "bread", "something quick", "top-up"], recommendation: "Maskom or Dia depending on location and current hours." }],
    freshTitle: "Fresh products and prepared food",
    freshParagraphs: ["Maskom works well for close-by groceries and daily fresh items. Carrefour offers more variety because of its size, while Mercadona often suits an organised shop for several days.", "Lidl and Aldi may be useful for promotions and own-brand ranges. Dia is practical for a quick top-up if the specific store fits your route."],
    freshNote: "Available sections may vary by store.",
    sundayTitle: "Shopping on Sundays and public holidays",
    sundayParagraphs: ["Opening hours can vary. Some stores open on certain commercial holidays, others close, and tourist-season exceptions may apply.", "Before going out on a Sunday or public holiday, always check the official hours of the specific store."],
    mapTitle: "Map of nearby supermarkets",
    mapAria: "Map of supermarkets near Apartamento Veramar",
    mapApartment: "Approximate apartment area",
    mapApartmentPopup: "The exact location is shared after booking confirmation.",
    mapPopupDistance: "Approximate distance",
    mapPopupSection: "View section",
    checklistTitle: "Basic arrival shopping list",
    checklistIntro: "You can tick items visually or copy the list. No data is saved.",
    checklistItems: ["Water", "Coffee or tea", "Milk", "Bread", "Eggs", "Fruit", "Yoghurt", "Olive oil", "Salt", "Something for breakfast", "Shower products", "Sun cream", "Bin bags", "Kitchen roll"],
    tipsTitle: "Stay Fuengirola tips",
    tips: ["Do a small shop at Maskom when you arrive and leave the larger shop for Carrefour if you stay several days.", "Bring a reusable bag.", "Check hours before going on a Sunday or public holiday.", "If you buy frozen products in summer, return directly to the apartment.", "Do not carry too much if walking back from Carrefour.", "For very specific products, check the catalogue or call the store first."],
    faqTitle: "Frequently asked questions",
    faqs: [{ question: "Which supermarket is closest to the apartment?", answer: "Maskom, according to information confirmed by the owner and without publishing the exact accommodation address." }, { question: "Can you walk to Carrefour Miramar?", answer: "Yes. From the approximate apartment area it is a nearby option, although the real time depends on route and pace." }, { question: "Where should I do a large shop?", answer: "Carrefour Miramar is the most complete option by size. Mercadona can also work for regular groceries." }, { question: "Which supermarket is best for the first shop?", answer: "Maskom because it is close if you only need arrival basics." }, { question: "Is there a Mercadona nearby?", answer: "There are Mercadona stores in Fuengirola. Always check the exact store and hours in the official locator." }, { question: "Are there Lidl and Aldi in Fuengirola?", answer: "Yes, both have stores listed in their official Fuengirola locators." }, { question: "Where can I buy baby products?", answer: "Carrefour, Mercadona or other larger supermarkets are usually better candidates, but exact availability may vary." }, { question: "Where can I buy beach items?", answer: "Carrefour and Lidl can be useful for variety; Maskom for basics such as water or fruit." }, { question: "Do supermarkets open on Sundays?", answer: "It depends on each store, season and commercial calendar. Always check the official source before leaving." }, { question: "Where can I buy prepared food?", answer: "It depends on the exact store and available sections. It should not be assumed without checking first." }],
    officialTitle: "Official sources and changing information",
    editorialNote: "Hours, services and stores can change. Always check official information before going.",
    officialLinks: [{ title: "Maskom stores", href: supermarketOfficialUrls.maskom, destination: "store_locator", supermarket: "maskom" }, { title: "Carrefour Fuengirola", href: supermarketOfficialUrls.carrefour, destination: "official_site", supermarket: "carrefour" }, { title: "Miramar Shopping Centre", href: supermarketOfficialUrls.miramar, destination: "store_locator", supermarket: "miramar" }, { title: "Mercadona", href: supermarketOfficialUrls.mercadona, destination: "store_locator", supermarket: "mercadona" }, { title: "Lidl Fuengirola", href: supermarketOfficialUrls.lidl, destination: "official_site", supermarket: "lidl" }, { title: "Aldi Fuengirola", href: supermarketOfficialUrls.aldi, destination: "official_site", supermarket: "aldi" }, { title: "Dia Fuengirola", href: supermarketOfficialUrls.dia, destination: "store_locator", supermarket: "dia" }],
    relatedTitle: "You may also be interested in",
    related: [{ key: "shopping", title: "Shopping in Fuengirola", text: "Miramar, town centre and useful shops." }, { key: "restaurants", title: "Restaurants", text: "Where to eat near the apartment." }, { key: "beaches", title: "Beaches", text: "Water, sun and promenade nearby." }, { key: "airport", title: "How to arrive from the airport", text: "Train, taxi, VTC and car." }, { key: "thingsToDo", title: "Things to do", text: "Plans for every day." }, { key: "excursions", title: "Day trips", text: "Ideas to explore the Costa del Sol." }],
    ctaTitle: "Everything you need, within easy reach",
    ctaText: "Apartamento Veramar makes daily shopping simple and gives you access to supermarkets of different sizes during your stay.",
    ctaButton: "Check availability on Booking",
    schemaAbout: ["grocery stores Fuengirola", "Maskom Fuengirola", "Carrefour Miramar", "Mercadona Fuengirola", "Lidl Fuengirola", "Aldi Fuengirola", "Dia Fuengirola"]
  },
  fi: {
    metaTitle: "Supermarketit lähellä Apartamento Veramaria | Stay Fuengirola",
    metaDescription: "Opas Apartamento Veramarin lähellä oleviin supermarketteihin: Maskom, Carrefour Miramar, Mercadona, Lidl, Aldi ja Dia, kartta ja käytännön vinkit.",
    breadcrumbGuide: "Fuengirola-opas", breadcrumbArticle: "Supermarketit", kicker: "Fuengirola-opas · Supermarketit", h1: "Supermarketit lähellä Apartamento Veramaria",
    intro: "Asunnolta löytyy useita ruokakauppoja ilman pitkää matkaa. Maskom on lähin vaihtoehto arjen perusostoksiin, ja Miramarin Carrefour sopii parhaiten isompaan ostokseen. Fuengirolassa on myös Mercadona, Lidl, Aldi ja Dia.",
    heroImageAlt: "Ruokakori ja tuoreita tuotteita Fuengirolan oleskelua varten", backLabel: "Takaisin oppaaseen", quickTitle: "Mikä supermarket kannattaa valita?",
    quickLinks: [{ title: "Lähin", text: "Maskom", target: "#maskom" }, { title: "Iso ostos", text: "Carrefour Miramar", target: "#carrefour-miramar" }, { title: "Tavallinen ruokaostos", text: "Mercadona", target: "#mercadona" }, { title: "Viikkotarjoukset", text: "Lidl", target: "#lidl" }, { title: "Edullinen vaihtoehto", text: "Aldi", target: "#aldi" }, { title: "Nopea lähikauppa", text: "Dia", target: "#dia" }],
    firstShopTitle: "Suositeltu ensimmäinen ostos", firstShopParagraphs: ["Jos olet juuri saapunut ja tarvitset vain vettä, aamiaista, hedelmiä, maitoa, kahvia tai perustuotteita, Maskom on läheisyytensä ansiosta mukavin vaihtoehto.", "Useamman päivän suurempaan ostokseen Carrefour Miramar tarjoaa laajemman valikoiman ja sen voi yhdistää ostoskeskuksen muihin liikkeisiin."],
    firstShopItems: ["Vesi", "Kahvi", "Maito", "Leipä", "Kananmunat", "Hedelmät", "Jogurtti", "Oliiviöljy", "Hygieniatuotteet", "Aurinkosuoja"],
    labels: { approx: "Noin", walk: "kävellen", drive: "autolla", bestFor: "Sopii", category: "Tyyppi", verified: "Tarkistettu", ownerConfirmed: "Omistajan vahvistama ja ketjun lähde tarkistettu", official: "Virallinen lähde", thirdParty: "Tarkka virallinen myymälävahvistus puuttuu", directions: "Näytä sijainti", officialSite: "Virallinen myymälätieto", storeLocator: "Etsi myymälä", openingHours: "Tarkista viralliset aukioloajat", copyList: "Kopioi lista", copied: "Lista kopioitu", noResults: "Tällä suodattimella ei löytynyt supermarketteja." },
    filterLabels: { all: "Kaikki", nearest: "Lähin", large: "Iso ostos", discount: "Edullinen", quick: "Nopea ostos", walk: "Kävellen", car: "Autolla" },
    categoryLabels: { nearest: "Lähin", hypermarket: "Hypermarket", standard: "Supermarket", discount: "Edullinen", convenience: "Lähikauppa" },
    descriptions: { maskom: "Maskom on käytännöllisin vaihtoehto päivittäiseen ostokseen ilman pitkää matkaa. Se sopii veteen, aamiaiseen, hedelmiin, leipään, juomiin, tuoretuotteisiin ja perusasioihin.", carrefour: "Carrefour Miramar sijaitsee Miramar-ostoskeskuksessa ja toimii hypermarketina. Se on kattavin vaihtoehto isoon ostokseen, hygieniatuotteisiin, kodin pieniin tarpeisiin tai useamman päivän hankintoihin.", mercadona: "Mercadona sopii tavalliseen ruokaostokseen, tuoreisiin tuotteisiin, siivoukseen, hygieniaan ja omiin merkkeihin. Tarkista aina tarkka myymälä ja palvelut virallisesta hakupalvelusta.", lidl: "Lidl on edullisempi vaihtoehto, jossa on ruokaa, leipomo, kausituotteita ja vaihtuva valikoima. Tarkista virallinen myymälä äläkä oleta tietyn kampanjan saatavuutta.", aldi: "Aldi tarjoaa edullisen supermarket-mallin, perustuotteita, omia merkkejä, tuoreita tuotteita ja vaihtuvia tarjouksia. Se on hyödyllinen, jos se sopii reittiin tai liikut autolla.", dia: "Dia voi olla käytännöllinen perustuotteiden, juomien, siivouksen tai pienten lähikauppaostosten täydentämiseen. Tarkista tarkka myymälä sunnuntaisin ja pyhinä." },
    bestForLabels: { firstShop: "ensimmäinen ostos", breakfast: "aamiainen", quickBasics: "nopeat perustarpeet", freshDaily: "päivittäiset tuoretuotteet", topUp: "täydennys viikon aikana", largeShop: "iso ostos", families: "perheet", longStay: "pitkät oleskelut", hygiene: "hygienia", children: "lapset", international: "kansainväliset tuotteet", beachItems: "ranta ja allas", weeklyShop: "viikko-ostos", ownBrand: "omat merkit", cleaning: "siivous", weeklyOffers: "viikkotarjoukset", bakery: "leipomo", europeanProducts: "eurooppalaiset tuotteet", seasonalItems: "kausituotteet", discountShop: "edullinen ostos", drinks: "juomat", basicFood: "perusruoka" },
    sectionsTitle: "Tärkeimmät supermarketit", sectionsIntro: "Valinta on tehty Apartamento Veramarin vieraita varten. Aukioloajat ja palvelut voivat muuttua myymälän, kauden ja pyhäpäivien mukaan.",
    comparisonTitle: "Nopea vertailu", comparisonHeaders: { supermarket: "Supermarket", bestFor: "Paras", type: "Ostoksen tyyppi", transport: "Suositeltu kulku" },
    comparisonRows: [{ supermarket: "Maskom", bestFor: "Nopea arkiostos", type: "Pieni tai keskikokoinen", transport: "Kävellen" }, { supermarket: "Carrefour Miramar", bestFor: "Täysi ostos", type: "Iso", transport: "Kävellen tai autolla" }, { supermarket: "Mercadona", bestFor: "Tavallinen ruokaostos", type: "Keskikokoinen tai iso", transport: "Myymälän mukaan" }, { supermarket: "Lidl", bestFor: "Tarjoukset ja vaihtuva valikoima", type: "Keskikokoinen", transport: "Kävellen tai autolla" }, { supermarket: "Aldi", bestFor: "Edullinen ostos", type: "Keskikokoinen", transport: "Sijainnin mukaan" }, { supermarket: "Dia", bestFor: "Nopea täydennys", type: "Pieni", transport: "Myymälän mukaan" }],
    needsTitle: "Mistä ostaa tarpeen mukaan", needsCards: [{ title: "Aamiaista varten", items: ["leipä", "kahvi", "maito", "hedelmät", "kananmunat", "jogurtti"], recommendation: "Maskom läheisyyden vuoksi." }, { title: "Viikon oleskeluun", items: ["vesi", "tuoretuotteet", "hygienia", "siivous", "perustuotteet"], recommendation: "Carrefour tai Mercadona mieltymysten ja kulun mukaan." }, { title: "Rannalle", items: ["vesi", "jää", "juomat", "hedelmät", "välipalat", "aurinkosuoja"], recommendation: "Carrefour suurempaan valikoimaan; Maskom perusasioihin." }, { title: "Vauvoille ja lapsille", items: ["vaipat", "lastenruoka", "hygienia", "vesi", "välipalat"], recommendation: "Tarkista saatavuus myymälän ja merkin mukaan." }, { title: "Kansainväliset tuotteet", items: ["kuivakaappi", "juomat", "erikoisuudet", "tunnetut merkit"], recommendation: "Carrefour on todennäköisin vaihtoehto kokonsa vuoksi." }, { title: "Ennen illallista", items: ["juomat", "leipä", "jotain nopeaa", "täydennys"], recommendation: "Maskom tai Dia sijainnin ja ajantasaisen aukiolon mukaan." }],
    freshTitle: "Tuoretuotteet ja valmisruoka", freshParagraphs: ["Maskom toimii hyvin lähikauppana ja päivittäisiin tuoretuotteisiin. Carrefour tarjoaa enemmän vaihtelua kokonsa vuoksi, ja Mercadona sopii usein useamman päivän suunniteltuun ostokseen.", "Lidl ja Aldi voivat kiinnostaa tarjousten ja omien merkkien vuoksi. Dia on käytännöllinen nopeaan täydennykseen, jos myymälä sopii reittiin."], freshNote: "Saatavilla olevat osastot voivat vaihdella myymälän mukaan.",
    sundayTitle: "Ostokset sunnuntaisin ja pyhäpäivinä", sundayParagraphs: ["Aukioloajat voivat vaihdella. Osa myymälöistä avaa tiettyinä kaupallisina pyhinä, osa pysyy kiinni, ja matkailukaudella voi olla poikkeuksia.", "Tarkista aina kyseisen myymälän viralliset aukioloajat ennen lähtöä sunnuntaina tai pyhäpäivänä."],
    mapTitle: "Kartta lähialueen supermarketeista", mapAria: "Kartta Apartamento Veramarin lähellä olevista supermarketeista", mapApartment: "Asunnon likimääräinen alue", mapApartmentPopup: "Tarkka sijainti annetaan vahvistetun varauksen jälkeen.", mapPopupDistance: "Likimääräinen etäisyys", mapPopupSection: "Näytä kohta",
    checklistTitle: "Peruslista saapumiseen", checklistIntro: "Voit merkitä tuotteita näkyvästi tai kopioida listan. Mitään tietoja ei tallenneta.", checklistItems: ["Vesi", "Kahvi tai tee", "Maito", "Leipä", "Kananmunat", "Hedelmät", "Jogurtti", "Oliiviöljy", "Suola", "Jotain aamiaiselle", "Suihkutuotteet", "Aurinkosuoja", "Roskapussit", "Talouspaperi"],
    tipsTitle: "Stay Fuengirolan vinkit", tips: ["Tee pieni ostos Maskomissa saapuessasi ja jätä iso ostos Carrefouriin, jos viivyt useita päiviä.", "Ota mukaan uudelleenkäytettävä kassi.", "Tarkista aukioloajat ennen sunnuntaita tai pyhäpäivää.", "Jos ostat pakasteita kesällä, palaa suoraan asunnolle.", "Älä kanna liikaa, jos kävelet Carrefourista.", "Hyvin tarkkoja tuotteita varten tarkista luettelo tai soita myymälään ensin."],
    faqTitle: "Usein kysytyt kysymykset", faqs: [{ question: "Mikä supermarket on lähimpänä asuntoa?", answer: "Maskom omistajan vahvistaman tiedon mukaan, ilman että majoituksen tarkkaa osoitetta julkaistaan." }, { question: "Voiko Carrefour Miramariin kävellä?", answer: "Kyllä. Asunnon likimääräiseltä alueelta se on lähellä, mutta todellinen aika riippuu reitistä ja kävelyvauhdista." }, { question: "Missä kannattaa tehdä iso ostos?", answer: "Carrefour Miramar on kokonsa vuoksi kattavin. Mercadona voi myös sopia tavalliseen ruokaostokseen." }, { question: "Mikä sopii ensimmäiseen ostokseen?", answer: "Maskom läheisyytensä vuoksi, jos tarvitset vain perustarpeita saapumiseen." }, { question: "Onko lähellä Mercadonaa?", answer: "Fuengirolassa on Mercadona-myymälöitä. Tarkista tarkka myymälä ja aukiolo virallisesta hakupalvelusta." }, { question: "Onko Fuengirolassa Lidl ja Aldi?", answer: "Kyllä, molemmilla on myymälät virallisissa Fuengirolan hakupalveluissa." }, { question: "Mistä ostaa tuotteita vauvoille?", answer: "Carrefour, Mercadona tai muut suuremmat supermarketit ovat yleensä parempia ehdokkaita, mutta saatavuus voi vaihdella." }, { question: "Mistä ostaa rantatarvikkeita?", answer: "Carrefour ja Lidl voivat olla hyödyllisiä valikoiman vuoksi; Maskom perusasioihin kuten vesi tai hedelmät." }, { question: "Ovatko supermarketit auki sunnuntaisin?", answer: "Se riippuu myymälästä, kaudesta ja kaupallisesta kalenterista. Tarkista aina virallinen lähde." }, { question: "Mistä ostaa valmisruokaa?", answer: "Se riippuu tarkasta myymälästä ja käytössä olevista osastoista. Asiaa ei kannata olettaa tarkistamatta." }],
    officialTitle: "Viralliset lähteet ja muuttuvat tiedot", editorialNote: "Aukioloajat, palvelut ja myymälät voivat muuttua. Tarkista aina virallinen tieto ennen lähtöä.", officialLinks: [{ title: "Maskom-myymälät", href: supermarketOfficialUrls.maskom, destination: "store_locator", supermarket: "maskom" }, { title: "Carrefour Fuengirola", href: supermarketOfficialUrls.carrefour, destination: "official_site", supermarket: "carrefour" }, { title: "Miramar-ostoskeskus", href: supermarketOfficialUrls.miramar, destination: "store_locator", supermarket: "miramar" }, { title: "Mercadona", href: supermarketOfficialUrls.mercadona, destination: "store_locator", supermarket: "mercadona" }, { title: "Lidl Fuengirola", href: supermarketOfficialUrls.lidl, destination: "official_site", supermarket: "lidl" }, { title: "Aldi Fuengirola", href: supermarketOfficialUrls.aldi, destination: "official_site", supermarket: "aldi" }, { title: "Dia Fuengirola", href: supermarketOfficialUrls.dia, destination: "store_locator", supermarket: "dia" }],
    relatedTitle: "Saatat olla kiinnostunut myös", related: [{ key: "shopping", title: "Ostokset Fuengirolassa", text: "Miramar, keskusta ja hyödylliset liikkeet." }, { key: "restaurants", title: "Ravintolat", text: "Missä syödä asunnon lähellä." }, { key: "beaches", title: "Rannat", text: "Vesi, aurinko ja rantakatu lähellä." }, { key: "airport", title: "Saapuminen lentoasemalta", text: "Juna, taksi, VTC ja auto." }, { key: "thingsToDo", title: "Mitä tehdä", text: "Tekemistä eri päiville." }, { key: "excursions", title: "Päiväretket", text: "Ideoita Costa del Solin tutkimiseen." }],
    ctaTitle: "Kaikki tarpeellinen lähellä", ctaText: "Apartamento Veramarin sijainti tekee päivittäisistä ostoksista helppoja ja antaa pääsyn erikokoisiin supermarketteihin oleskelun aikana.", ctaButton: "Tarkista saatavuus Bookingissa", schemaAbout: ["supermarketit Fuengirola", "Maskom Fuengirola", "Carrefour Miramar", "Mercadona Fuengirola", "Lidl Fuengirola", "Aldi Fuengirola", "Dia Fuengirola"]
  },
  sv: {} as SupermarketGuideContent,
  no: {} as SupermarketGuideContent
};

supermarketGuideContent.sv = {
  ...supermarketGuideContent.fi,
  metaTitle: "Livsmedelsbutiker nära Apartamento Veramar | Stay Fuengirola",
  metaDescription: "Guide till livsmedelsbutiker nära Apartamento Veramar: Maskom, Carrefour Miramar, Mercadona, Lidl, Aldi och Dia med karta och praktiska tips.",
  breadcrumbGuide: "Fuengirola-guide", breadcrumbArticle: "Livsmedelsbutiker", kicker: "Fuengirola-guide · Livsmedelsbutiker", h1: "Livsmedelsbutiker nära Apartamento Veramar",
  intro: "Från lägenheten finns flera alternativ för matinköp utan att du behöver ta dig långt. Maskom är närmast för vardagens basvaror, medan Carrefour i Miramar passar bäst för större inköp. I Fuengirola finns även Mercadona, Lidl, Aldi och Dia.",
  heroImageAlt: "Matkorg med färska produkter för en vistelse i Fuengirola", backLabel: "Tillbaka till guiden", quickTitle: "Vilken butik ska du välja?",
  quickLinks: [{ title: "Närmast", text: "Maskom", target: "#maskom" }, { title: "Stort inköp", text: "Carrefour Miramar", target: "#carrefour-miramar" }, { title: "Vanlig mathandling", text: "Mercadona", target: "#mercadona" }, { title: "Veckoerbjudanden", text: "Lidl", target: "#lidl" }, { title: "Rabattalternativ", text: "Aldi", target: "#aldi" }, { title: "Snabb närbutik", text: "Dia", target: "#dia" }],
  labels: { approx: "Ca", walk: "till fots", drive: "med bil", bestFor: "Passar för", category: "Typ", verified: "Senast kontrollerad", ownerConfirmed: "Bekräftad av ägaren och kontrollerad mot kedjans källa", official: "Officiell källa", thirdParty: "Specifik officiell butiksbekräftelse saknas", directions: "Visa plats", officialSite: "Officiell butiksinfo", storeLocator: "Sök butik", openingHours: "Kontrollera officiella tider", copyList: "Kopiera lista", copied: "Lista kopierad", noResults: "Inga butiker matchar filtret." },
  filterLabels: { all: "Alla", nearest: "Närmast", large: "Stort inköp", discount: "Rabatt", quick: "Snabbt inköp", walk: "Till fots", car: "Med bil" },
  categoryLabels: { nearest: "Närmast", hypermarket: "Stormarknad", standard: "Livsmedelsbutik", discount: "Rabatt", convenience: "Närbutik" },
  firstShopTitle: "Rekommenderat första inköp", firstShopParagraphs: ["Om du precis har kommit och bara behöver vatten, frukost, frukt, mjölk, kaffe eller basvaror är Maskom det smidigaste valet tack vare närheten.", "För ett större inköp för flera dagar erbjuder Carrefour Miramar ett bredare sortiment och kan kombineras med andra butiker i köpcentrumet."],
  firstShopItems: ["Vatten", "Kaffe", "Mjölk", "Bröd", "Ägg", "Frukt", "Yoghurt", "Olivolja", "Hygienprodukter", "Solskydd"],
  mapTitle: "Karta över närliggande livsmedelsbutiker", mapAria: "Karta över livsmedelsbutiker nära Apartamento Veramar", mapApartment: "Lägenhetens ungefärliga område", mapApartmentPopup: "Exakt plats delas efter bekräftad bokning.", mapPopupDistance: "Ungefärligt avstånd", mapPopupSection: "Visa avsnitt",
  checklistTitle: "Baslista för ankomst", checklistIntro: "Du kan markera produkter visuellt eller kopiera listan. Inga uppgifter sparas.", checklistItems: ["Vatten", "Kaffe eller te", "Mjölk", "Bröd", "Ägg", "Frukt", "Yoghurt", "Olivolja", "Salt", "Något till frukost", "Duschprodukter", "Solskydd", "Soppåsar", "Hushållspapper"],
  ctaTitle: "Allt du behöver nära till hands", ctaText: "Apartamento Veramars läge gör vardagsinköp enkla och ger tillgång till livsmedelsbutiker i olika storlek under vistelsen.", ctaButton: "Kontrollera tillgänglighet på Booking",
  schemaAbout: ["livsmedelsbutiker Fuengirola", "Maskom Fuengirola", "Carrefour Miramar", "Mercadona Fuengirola", "Lidl Fuengirola", "Aldi Fuengirola", "Dia Fuengirola"]
};

supermarketGuideContent.no = {
  ...supermarketGuideContent.sv,
  metaTitle: "Dagligvarebutikker nær Apartamento Veramar | Stay Fuengirola",
  metaDescription: "Guide til dagligvarebutikker nær Apartamento Veramar: Maskom, Carrefour Miramar, Mercadona, Lidl, Aldi og Dia med kart og praktiske tips.",
  breadcrumbGuide: "Fuengirola-guide", breadcrumbArticle: "Dagligvarebutikker", kicker: "Fuengirola-guide · Dagligvarebutikker", h1: "Dagligvarebutikker nær Apartamento Veramar",
  intro: "Fra leiligheten har du flere alternativer for dagligvarer uten å dra langt. Maskom er nærmest for hverdagsbasics, mens Carrefour i Miramar passer best for større innkjøp. I Fuengirola finner du også Mercadona, Lidl, Aldi og Dia.",
  heroImageAlt: "Handlekurv med ferske produkter for et opphold i Fuengirola", backLabel: "Tilbake til guiden", quickTitle: "Hvilken butikk bør du velge?",
  quickLinks: [{ title: "Nærmest", text: "Maskom", target: "#maskom" }, { title: "Stort innkjøp", text: "Carrefour Miramar", target: "#carrefour-miramar" }, { title: "Vanlig dagligvarehandel", text: "Mercadona", target: "#mercadona" }, { title: "Ukestilbud", text: "Lidl", target: "#lidl" }, { title: "Rabattalternativ", text: "Aldi", target: "#aldi" }, { title: "Rask nærbutikk", text: "Dia", target: "#dia" }],
  labels: { approx: "Ca.", walk: "til fots", drive: "med bil", bestFor: "Passer for", category: "Type", verified: "Sist kontrollert", ownerConfirmed: "Bekreftet av eier og sjekket mot kjedens kilde", official: "Offisiell kilde", thirdParty: "Spesifikk offisiell butikkbekreftelse mangler", directions: "Vis plassering", officialSite: "Offisiell butikkinformasjon", storeLocator: "Finn butikk", openingHours: "Sjekk offisielle tider", copyList: "Kopier liste", copied: "Liste kopiert", noResults: "Ingen butikker passer dette filteret." },
  filterLabels: { all: "Alle", nearest: "Nærmest", large: "Stort innkjøp", discount: "Rabatt", quick: "Rask handel", walk: "Til fots", car: "Med bil" },
  categoryLabels: { nearest: "Nærmest", hypermarket: "Hypermarked", standard: "Dagligvarebutikk", discount: "Rabatt", convenience: "Nærbutikk" },
  firstShopTitle: "Anbefalt første handel", firstShopParagraphs: ["Hvis du nettopp har kommet og bare trenger vann, frokost, frukt, melk, kaffe eller basisvarer, er Maskom det enkleste valget fordi det ligger nært.", "For et større innkjøp for flere dager tilbyr Carrefour Miramar et bredere utvalg og kan kombineres med andre butikker i kjøpesenteret."],
  firstShopItems: ["Vann", "Kaffe", "Melk", "Brød", "Egg", "Frukt", "Yoghurt", "Olivenolje", "Hygieneprodukter", "Solbeskyttelse"],
  mapTitle: "Kart over nærliggende dagligvarebutikker", mapAria: "Kart over dagligvarebutikker nær Apartamento Veramar", mapApartment: "Leilighetens omtrentlige område", mapApartmentPopup: "Nøyaktig plassering deles etter bekreftet booking.", mapPopupDistance: "Omtrentlig avstand", mapPopupSection: "Vis avsnitt",
  checklistTitle: "Basisliste ved ankomst", checklistIntro: "Du kan markere varer visuelt eller kopiere listen. Ingen data lagres.", checklistItems: ["Vann", "Kaffe eller te", "Melk", "Brød", "Egg", "Frukt", "Yoghurt", "Olivenolje", "Salt", "Noe til frokost", "Dusjprodukter", "Solbeskyttelse", "Søppelposer", "Kjøkkenpapir"],
  ctaTitle: "Alt du trenger, innen rekkevidde", ctaText: "Beliggenheten til Apartamento Veramar gjør daglige innkjøp enkle og gir tilgang til dagligvarebutikker i ulike størrelser under oppholdet.", ctaButton: "Sjekk tilgjengelighet på Booking",
  schemaAbout: ["dagligvarebutikker Fuengirola", "Maskom Fuengirola", "Carrefour Miramar", "Mercadona Fuengirola", "Lidl Fuengirola", "Aldi Fuengirola", "Dia Fuengirola"]
};

Object.assign(supermarketGuideContent.sv, {
  descriptions: {
    maskom: "Maskom är det mest praktiska valet för vardagsinköp utan att behöva gå långt. Det passar för vatten, frukost, frukt, bröd, dryck, färskvaror och basvaror under vistelsen.",
    carrefour: "Carrefour Miramar ligger i Centro Comercial Miramar och fungerar som stormarknad. Det är det mest kompletta valet för större inköp, hygienprodukter, hemartiklar eller behov för flera dagar.",
    mercadona: "Mercadona är ett vanligt alternativ för mat, färskvaror, städning, hygien och egna märken. Kontrollera alltid exakt butik och service i den officiella sökfunktionen innan du går.",
    lidl: "Lidl är ett rabattalternativ med mat, bageri, säsongsprodukter och varierande sortiment. Kontrollera den officiella butiken och utgå inte från att en viss kampanj finns.",
    aldi: "Aldi har ett rabattformat med basvaror, egna märken, färska produkter och varierande erbjudanden. Det är användbart om det passar din rutt eller om du åker bil.",
    dia: "Dia kan vara praktiskt för att fylla på basvaror, dryck, städprodukter eller små närbutiksinköp. Kontrollera den exakta butiken före söndagar och helgdagar."
  },
  bestForLabels: { firstShop: "första inköpet", breakfast: "frukost", quickBasics: "snabba basvaror", freshDaily: "dagliga färskvaror", topUp: "fylla på under veckan", largeShop: "stort inköp", families: "familjer", longStay: "längre vistelser", hygiene: "hygien", children: "barn", international: "internationella produkter", beachItems: "strand och pool", weeklyShop: "veckohandling", ownBrand: "egna märken", cleaning: "städning", weeklyOffers: "veckoerbjudanden", bakery: "bageri", europeanProducts: "europeiska produkter", seasonalItems: "säsongsvaror", discountShop: "rabattinköp", drinks: "dryck", basicFood: "basmat" },
  sectionsTitle: "Viktigaste livsmedelsbutikerna",
  sectionsIntro: "Urvalet är gjort för gäster på Apartamento Veramar. Öppettider och service kan ändras beroende på butik, säsong och helgdagar.",
  comparisonTitle: "Snabb jämförelse",
  comparisonHeaders: { supermarket: "Butik", bestFor: "Bäst för", type: "Typ av inköp", transport: "Rekommenderad transport" },
  comparisonRows: [{ supermarket: "Maskom", bestFor: "Snabb vardagshandling", type: "Liten eller medelstor", transport: "Till fots" }, { supermarket: "Carrefour Miramar", bestFor: "Komplett inköp", type: "Stort", transport: "Till fots eller med bil" }, { supermarket: "Mercadona", bestFor: "Vanlig mathandling", type: "Medelstor eller stor", transport: "Beror på butik" }, { supermarket: "Lidl", bestFor: "Erbjudanden och varierande sortiment", type: "Medelstor", transport: "Till fots eller med bil" }, { supermarket: "Aldi", bestFor: "Rabattinköp", type: "Medelstor", transport: "Beror på läge" }, { supermarket: "Dia", bestFor: "Snabb påfyllning", type: "Liten", transport: "Beror på butik" }],
  needsTitle: "Var du handlar beroende på behov",
  needsCards: [{ title: "Till frukost", items: ["bröd", "kaffe", "mjölk", "frukt", "ägg", "yoghurt"], recommendation: "Maskom tack vare närheten." }, { title: "För en vecka", items: ["vatten", "färskvaror", "hygien", "städning", "basvaror"], recommendation: "Carrefour eller Mercadona beroende på önskemål och transport." }, { title: "Till stranden", items: ["vatten", "is", "dryck", "frukt", "snacks", "solskydd"], recommendation: "Carrefour för mer variation; Maskom för basvaror." }, { title: "För barn och baby", items: ["blöjor", "barnmat", "hygien", "vatten", "mellanmål"], recommendation: "Kontrollera tillgänglighet per butik och märke." }, { title: "Internationella produkter", items: ["skafferi", "dryck", "specialiteter", "kända märken"], recommendation: "Carrefour är troligast tack vare storleken." }, { title: "Före middag", items: ["dryck", "bröd", "något snabbt", "påfyllning"], recommendation: "Maskom eller Dia beroende på plats och aktuella tider." }],
  freshTitle: "Färskvaror och färdigmat",
  freshParagraphs: ["Maskom fungerar bra för nära vardagsinköp och dagliga färskvaror. Carrefour erbjuder mer variation tack vare storleken, medan Mercadona ofta passar planerad handling för flera dagar.", "Lidl och Aldi kan vara intressanta för erbjudanden och egna märken. Dia passar för snabb påfyllning om butiken ligger rätt för dig."],
  freshNote: "Tillgängliga avdelningar kan variera mellan butiker.",
  sundayTitle: "Handla på söndagar och helgdagar",
  sundayParagraphs: ["Öppettider kan variera. Vissa butiker öppnar vissa handelshelgdagar, andra håller stängt och under turistsäsong kan undantag förekomma.", "Kontrollera alltid officiella öppettider för den specifika butiken innan du går ut en söndag eller helgdag."],
  tipsTitle: "Stay Fuengirola tips",
  tips: ["Gör ett litet inköp på Maskom när du kommer och spara storhandlingen till Carrefour om du stannar flera dagar.", "Ta med en återanvändbar kasse.", "Kontrollera öppettider före söndag eller helgdag.", "Om du köper frysta produkter på sommaren, gå direkt tillbaka till lägenheten.", "Bär inte för mycket om du går tillbaka från Carrefour.", "För mycket specifika produkter, kontrollera katalogen eller ring butiken först."],
  faqTitle: "Vanliga frågor",
  faqs: [{ question: "Vilken livsmedelsbutik ligger närmast lägenheten?", answer: "Maskom, enligt information bekräftad av ägaren, utan att boendets exakta adress publiceras." }, { question: "Kan man gå till Carrefour Miramar?", answer: "Ja. Från lägenhetens ungefärliga område är det ett närliggande alternativ, men faktisk tid beror på rutt och tempo." }, { question: "Var gör man ett stort inköp?", answer: "Carrefour Miramar är mest komplett tack vare storleken. Mercadona kan också passa för vanlig mathandling." }, { question: "Vilken butik passar bäst för första inköpet?", answer: "Maskom tack vare närheten om du bara behöver basvaror vid ankomst." }, { question: "Finns Mercadona nära?", answer: "Det finns Mercadona-butiker i Fuengirola. Kontrollera alltid exakt butik och tider i den officiella sökfunktionen." }, { question: "Finns Lidl och Aldi i Fuengirola?", answer: "Ja, båda har butiker listade i sina officiella sökfunktioner för Fuengirola." }, { question: "Var köper man produkter för barn?", answer: "Carrefour, Mercadona eller andra större butiker är oftast bättre kandidater, men exakt tillgänglighet kan variera." }, { question: "Var köper man strandartiklar?", answer: "Carrefour och Lidl kan vara användbara för variation; Maskom för basvaror som vatten eller frukt." }, { question: "Är butikerna öppna på söndagar?", answer: "Det beror på butik, säsong och handelskalender. Kontrollera alltid officiell källa innan du går." }, { question: "Var kan man köpa färdigmat?", answer: "Det beror på exakt butik och vilka avdelningar som finns. Utgå inte från det utan att kontrollera först." }],
  officialTitle: "Officiella källor och föränderlig information",
  editorialNote: "Öppettider, service och butiker kan ändras. Kontrollera alltid officiell information innan du går.",
  relatedTitle: "Du kanske också är intresserad av",
  related: [{ key: "shopping", title: "Shopping i Fuengirola", text: "Miramar, centrum och användbara butiker." }, { key: "restaurants", title: "Restauranger", text: "Var du kan äta nära lägenheten." }, { key: "beaches", title: "Stränder", text: "Vatten, sol och strandpromenad nära." }, { key: "airport", title: "Från flygplatsen", text: "Tåg, taxi, VTC och bil." }, { key: "thingsToDo", title: "Saker att göra", text: "Planer för olika dagar." }, { key: "excursions", title: "Utflykter", text: "Idéer för att upptäcka Costa del Sol." }]
});

Object.assign(supermarketGuideContent.no, {
  descriptions: {
    maskom: "Maskom er det mest praktiske valget for daglige innkjøp uten å gå langt. Det passer for vann, frokost, frukt, brød, drikke, ferskvarer og basisvarer under oppholdet.",
    carrefour: "Carrefour Miramar ligger i Centro Comercial Miramar og fungerer som hypermarked. Det er det mest komplette valget for større innkjøp, hygieneprodukter, ting til hjemmet eller behov for flere dager.",
    mercadona: "Mercadona er et vanlig alternativ for mat, ferskvarer, rengjøring, hygiene og egne merker. Sjekk alltid nøyaktig butikk og tjenester i den offisielle søkefunksjonen før du drar.",
    lidl: "Lidl er et rabattalternativ med mat, bakeri, sesongvarer og varierende utvalg. Sjekk den offisielle butikken og ikke anta at en bestemt kampanje er tilgjengelig.",
    aldi: "Aldi har et rabattformat med basisvarer, egne merker, ferske produkter og varierende tilbud. Det er nyttig hvis det passer ruten din eller du kjører bil.",
    dia: "Dia kan være praktisk for å fylle på basisvarer, drikke, rengjøringsprodukter eller små nærbutikkinnkjøp. Sjekk nøyaktig butikk før søndager og helligdager."
  },
  bestForLabels: { firstShop: "første handel", breakfast: "frokost", quickBasics: "raske basisvarer", freshDaily: "daglige ferskvarer", topUp: "påfyll i løpet av uken", largeShop: "stort innkjøp", families: "familier", longStay: "lengre opphold", hygiene: "hygiene", children: "barn", international: "internasjonale produkter", beachItems: "strand og basseng", weeklyShop: "ukehandel", ownBrand: "egne merker", cleaning: "rengjøring", weeklyOffers: "ukestilbud", bakery: "bakeri", europeanProducts: "europeiske produkter", seasonalItems: "sesongvarer", discountShop: "rabattinnkjøp", drinks: "drikke", basicFood: "basismat" },
  sectionsTitle: "Viktigste dagligvarebutikker",
  sectionsIntro: "Utvalget er laget for gjester på Apartamento Veramar. Åpningstider og tjenester kan endres etter butikk, sesong og helligdager.",
  comparisonTitle: "Rask sammenligning",
  comparisonHeaders: { supermarket: "Butikk", bestFor: "Best egnet for", type: "Type innkjøp", transport: "Anbefalt transport" },
  comparisonRows: [{ supermarket: "Maskom", bestFor: "Rask daglig handel", type: "Lite eller middels", transport: "Til fots" }, { supermarket: "Carrefour Miramar", bestFor: "Komplett innkjøp", type: "Stort", transport: "Til fots eller med bil" }, { supermarket: "Mercadona", bestFor: "Vanlig dagligvarehandel", type: "Middels eller stort", transport: "Avhenger av butikk" }, { supermarket: "Lidl", bestFor: "Tilbud og varierende utvalg", type: "Middels", transport: "Til fots eller med bil" }, { supermarket: "Aldi", bestFor: "Rabattinnkjøp", type: "Middels", transport: "Avhenger av plassering" }, { supermarket: "Dia", bestFor: "Rask påfylling", type: "Lite", transport: "Avhenger av butikk" }],
  needsTitle: "Hvor du handler etter behov",
  needsCards: [{ title: "Til frokost", items: ["brød", "kaffe", "melk", "frukt", "egg", "yoghurt"], recommendation: "Maskom på grunn av nærheten." }, { title: "For en uke", items: ["vann", "ferskvarer", "hygiene", "rengjøring", "basisvarer"], recommendation: "Carrefour eller Mercadona etter preferanser og transport." }, { title: "Til stranden", items: ["vann", "is", "drikke", "frukt", "snacks", "solbeskyttelse"], recommendation: "Carrefour for mer utvalg; Maskom for basisvarer." }, { title: "For babyer og barn", items: ["bleier", "barnemat", "hygiene", "vann", "mellommåltider"], recommendation: "Sjekk tilgjengelighet etter butikk og merke." }, { title: "Internasjonale produkter", items: ["tørrvarer", "drikke", "spesialiteter", "kjente merker"], recommendation: "Carrefour er mest sannsynlig på grunn av størrelsen." }, { title: "Før middag", items: ["drikke", "brød", "noe raskt", "påfyll"], recommendation: "Maskom eller Dia etter plassering og aktuelle tider." }],
  freshTitle: "Ferskvarer og ferdigmat",
  freshParagraphs: ["Maskom fungerer godt for nære hverdagsinnkjøp og daglige ferskvarer. Carrefour tilbyr mer variasjon på grunn av størrelsen, mens Mercadona ofte passer for planlagt handel for flere dager.", "Lidl og Aldi kan være interessante for tilbud og egne merker. Dia passer for rask påfylling hvis butikken ligger riktig for deg."],
  freshNote: "Tilgjengelige avdelinger kan variere fra butikk til butikk.",
  sundayTitle: "Handle på søndager og helligdager",
  sundayParagraphs: ["Åpningstider kan variere. Noen butikker åpner på enkelte handelshelligdager, andre holder stengt, og i turistsesongen kan det finnes unntak.", "Sjekk alltid offisielle åpningstider for den konkrete butikken før du går ut en søndag eller helligdag."],
  tipsTitle: "Stay Fuengirola-tips",
  tips: ["Gjør en liten handel på Maskom når du kommer, og spar storhandelen til Carrefour hvis du blir flere dager.", "Ta med en gjenbrukbar pose.", "Sjekk åpningstider før søndag eller helligdag.", "Hvis du kjøper frosne varer om sommeren, gå rett tilbake til leiligheten.", "Ikke bær for mye hvis du går tilbake fra Carrefour.", "For veldig spesifikke produkter, sjekk katalogen eller ring butikken først."],
  faqTitle: "Vanlige spørsmål",
  faqs: [{ question: "Hvilken dagligvarebutikk ligger nærmest leiligheten?", answer: "Maskom, ifølge informasjon bekreftet av eieren, uten at overnattingsstedets nøyaktige adresse publiseres." }, { question: "Kan man gå til Carrefour Miramar?", answer: "Ja. Fra leilighetens omtrentlige område er det et nærliggende alternativ, men faktisk tid avhenger av rute og tempo." }, { question: "Hvor gjør man et stort innkjøp?", answer: "Carrefour Miramar er mest komplett på grunn av størrelsen. Mercadona kan også passe for vanlig dagligvarehandel." }, { question: "Hvilken butikk passer best for første handel?", answer: "Maskom på grunn av nærheten hvis du bare trenger basisvarer ved ankomst." }, { question: "Finnes det Mercadona i nærheten?", answer: "Det finnes Mercadona-butikker i Fuengirola. Sjekk alltid nøyaktig butikk og tider i den offisielle søkefunksjonen." }, { question: "Finnes Lidl og Aldi i Fuengirola?", answer: "Ja, begge har butikker oppført i sine offisielle søkefunksjoner for Fuengirola." }, { question: "Hvor kan jeg kjøpe produkter til barn?", answer: "Carrefour, Mercadona eller andre større butikker er ofte bedre kandidater, men nøyaktig tilgjengelighet kan variere." }, { question: "Hvor kan jeg kjøpe strandartikler?", answer: "Carrefour og Lidl kan være nyttige for utvalg; Maskom for basisvarer som vann eller frukt." }, { question: "Er butikkene åpne på søndager?", answer: "Det avhenger av butikk, sesong og handelskalender. Sjekk alltid offisiell kilde før du går." }, { question: "Hvor kan man kjøpe ferdigmat?", answer: "Det avhenger av nøyaktig butikk og tilgjengelige avdelinger. Ikke anta det uten å sjekke først." }],
  officialTitle: "Offisielle kilder og informasjon som kan endres",
  editorialNote: "Åpningstider, tjenester og butikker kan endres. Sjekk alltid offisiell informasjon før du drar.",
  relatedTitle: "Du kan også være interessert i",
  related: [{ key: "shopping", title: "Shopping i Fuengirola", text: "Miramar, sentrum og nyttige butikker." }, { key: "restaurants", title: "Restauranter", text: "Hvor du kan spise nær leiligheten." }, { key: "beaches", title: "Strender", text: "Vann, sol og strandpromenade i nærheten." }, { key: "airport", title: "Fra flyplassen", text: "Tog, taxi, VTC og bil." }, { key: "thingsToDo", title: "Ting å gjøre", text: "Planer for ulike dager." }, { key: "excursions", title: "Utflukter", text: "Ideer for å oppdage Costa del Sol." }]
});
