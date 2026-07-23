import type { GuideCategoryKey } from "@/config/guides";
import { Locale } from "@/i18n/locales";

export type BioparcLinkDestination = "official_site" | "tickets" | "hours" | "agenda" | "parking" | "accessibility" | "rules" | "how_to_arrive";

export const bioparcOfficialLinks: Record<BioparcLinkDestination, string> = {
  official_site: "https://www.bioparcfuengirola.es/",
  tickets: "https://www.bioparcfuengirola.es/entradas/",
  hours: "https://www.bioparcfuengirola.es/prepara-tu-visita/explora-el-parque/horarios/",
  agenda: "https://www.bioparcfuengirola.es/agenda-diaria-de-actividades-bioparc-fuengirola/",
  parking: "https://www.bioparcfuengirola.es/prepara-tu-visita/informacion-de-interes/faqs/",
  accessibility: "https://www.bioparcfuengirola.es/prepara-tu-visita/informacion-de-interes/faqs/",
  rules: "https://www.bioparcfuengirola.es/prepara-tu-visita/informacion-de-interes/normas/",
  how_to_arrive: "https://www.bioparcfuengirola.es/prepara-tu-visita/como-llegar/"
};

type IconKey = "map" | "family" | "clock" | "accessibility" | "ticket" | "sun" | "leaf" | "car" | "taxi" | "walk" | "utensils" | "parking" | "bag" | "calendar";

export type BioparcGuideContent = {
  metaTitle: string;
  metaDescription: string;
  breadcrumbGuide: string;
  breadcrumbArticle: string;
  kicker: string;
  h1: string;
  intro: string;
  heroImageAlt: string;
  quickTitle: string;
  quickItems: Array<{ icon: IconKey; title: string; text: string }>;
  sections: Array<{ id: string; title: string; paragraphs: string[]; image?: string; imageAlt?: string }>;
  habitatsTitle: string;
  habitatsIntro: string;
  habitats: Array<{ title: string; text: string; examples: string[] }>;
  animalsTitle: string;
  animalsNote: string;
  animals: Array<{ title: string; text: string }>;
  arrivalTitle: string;
  arrivalIntro: string;
  arrivalOptions: Array<{ icon: IconKey; title: string; text: string }>;
  mapTitle: string;
  mapAria: string;
  mapApartment: string;
  mapApartmentPopup: string;
  mapPoints: Record<"bioparc" | "townHall" | "oldTown" | "castle" | "parking", string>;
  officialButtons: Record<BioparcLinkDestination, string>;
  bestTimeTitle: string;
  bestTimeTips: string[];
  stayTipTitle: string;
  stayTipText: string;
  kidsTitle: string;
  kidsText: string;
  kidsCard: string;
  whatToBringTitle: string;
  whatToBring: string[];
  stayAdviceTitle: string;
  stayAdvice: string[];
  dayPlanTitle: string;
  dayPlanIntro: string;
  dayPlan: Array<{ time: string; text: string }>;
  comparisonTitle: string;
  comparison: Array<{ label: string; value: string }>;
  faqTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  officialInfoTitle: string;
  editorialNote: string;
  relatedTitle: string;
  related: Array<{ key: GuideCategoryKey; title: string; text: string }>;
  schemaAbout: string[];
};

const images = {
  entrance: "/images/guide/bioparc/bioparc-fuengirola-entrada.svg",
  families: "/images/guide/bioparc/bioparc-fuengirola-familias.svg",
  habitats: "/images/guide/bioparc/bioparc-fuengirola-habitats.svg",
  madagascar: "/images/guide/bioparc/bioparc-fuengirola-madagascar.svg"
};

export const bioparcGuideContent: Record<Locale, BioparcGuideContent> = {
  es: {
    metaTitle: "Bioparc Fuengirola: horarios, entradas y consejos | Stay Fuengirola",
    metaDescription: "Guía para visitar Bioparc Fuengirola: qué ver, horarios, entradas, cómo llegar, accesibilidad, aparcamiento y consejos para familias.",
    breadcrumbGuide: "Guía de Fuengirola",
    breadcrumbArticle: "Bioparc Fuengirola",
    kicker: "Guía de Fuengirola · Planes con niños",
    h1: "Bioparc Fuengirola: guía para preparar tu visita",
    intro: "Bioparc Fuengirola es uno de los planes familiares más populares de la ciudad. En esta guía te contamos qué encontrarás, cuánto tiempo necesitas, cómo llegar desde el apartamento y qué conviene saber antes de comprar las entradas.",
    heroImageAlt: "Placeholder editorial de Bioparc Fuengirola hasta disponer de una imagen autorizada",
    quickTitle: "Bioparc Fuengirola de un vistazo",
    quickItems: [
      { icon: "map", title: "En el centro de Fuengirola", text: "Junto al Ayuntamiento y muy cerca del centro histórico." },
      { icon: "family", title: "Ideal para familias", text: "Un plan cómodo para una mañana o una tarde con niños." },
      { icon: "clock", title: "Media jornada", text: "Reserva aproximadamente entre 3 y 4 horas para verlo con calma." },
      { icon: "accessibility", title: "Recorrido accesible", text: "La información oficial indica que el parque es accesible." },
      { icon: "ticket", title: "Entradas online", text: "Conviene consultar disponibilidad y condiciones antes de ir." },
      { icon: "sun", title: "Actividad exterior", text: "Hay sombra, pero en verano es mejor evitar las horas centrales." }
    ],
    sections: [
      {
        id: "que-es",
        title: "¿Qué es Bioparc Fuengirola?",
        image: images.habitats,
        imageAlt: "Placeholder visual sobre hábitats recreados en Bioparc Fuengirola",
        paragraphs: [
          "Bioparc Fuengirola es un parque de animales diseñado alrededor de hábitats recreados y una experiencia de visita inmersiva. Sus zonas se inspiran en ecosistemas tropicales y regiones como Madagascar, África ecuatorial, el Sudeste asiático, el Indo-Pacífico y Centro y Sudamérica.",
          "Esta guía no pretende sustituir la información oficial del parque. La idea es ayudarte a preparar una visita práctica desde el Apartamento Veramar, sin fijar precios, horarios de cierre ni actividades que pueden cambiar."
        ]
      },
      {
        id: "horarios",
        title: "Horarios de Bioparc Fuengirola",
        paragraphs: [
          "No conviene guardar un único horario como permanente: la hora de cierre cambia según la época del año, las taquillas cierran antes del parque y puede haber fechas especiales con horario reducido.",
          "La información oficial indica apertura desde las 10:00. Antes de salir, consulta siempre el horario del día y el último acceso."
        ]
      },
      {
        id: "entradas",
        title: "Entradas y precios",
        paragraphs: [
          "Los precios pueden variar según edad, promociones, modalidad de compra y condiciones específicas. Por eso no los fijamos aquí como dato permanente.",
          "Compra siempre en la web oficial de Bioparc Fuengirola o consulta allí las tarifas actualizadas. No enlazamos a revendedores ni usamos afiliación."
        ]
      },
      {
        id: "actividades",
        title: "Actividades dentro del parque",
        paragraphs: [
          "Algunas zonas, aperturas o actividades pueden tener horarios propios. La agenda diaria cambia, así que lo más útil es revisarla el mismo día o justo antes de la visita.",
          "Si viajas con niños, consultar la agenda ayuda a organizar mejor el recorrido y evitar esperas innecesarias."
        ]
      },
      {
        id: "accesibilidad",
        title: "Accesibilidad",
        paragraphs: [
          "Según la FAQ oficial, el parque es accesible para personas con movilidad reducida y también puede recorrerse con carritos de bebé.",
          "Si necesitas información específica, consulta la página oficial antes de comprar las entradas."
        ]
      },
      {
        id: "comer",
        title: "Dónde comer",
        paragraphs: [
          "Dentro del parque puede haber opciones para tomar algo o comer, pero conviene comprobar qué establecimientos están disponibles el día de tu visita.",
          "Las normas oficiales indican que no está permitido entrar con comida al parque, salvo excepciones concretas como bebés, niños o intolerancias comunicadas al personal. Tampoco se debe alimentar a los animales."
        ]
      },
      {
        id: "aparcamiento",
        title: "Dónde aparcar",
        paragraphs: [
          "Bioparc está en una zona céntrica. La web oficial menciona el Parking Plaza de España y una tarifa especial para clientes, pero las condiciones pueden cambiar.",
          "Si vas en coche, confirma las condiciones actuales antes de aparcar y pide información al personal del parque si procede."
        ]
      }
    ],
    habitatsTitle: "Qué ver en Bioparc Fuengirola",
    habitatsIntro: "Estas áreas se presentan como orientación editorial basada en los hábitats descritos por el parque. Consulta siempre el mapa oficial para el recorrido actualizado.",
    habitats: [
      { title: "Madagascar", text: "Una zona pensada para descubrir ambientes insulares y vegetación tropical.", examples: ["lémures", "aves tropicales"] },
      { title: "África ecuatorial", text: "Espacios inspirados en bosques húmedos y paisajes africanos.", examples: ["gorilas", "hipopótamos pigmeos"] },
      { title: "Sudeste asiático", text: "Ambientes de vegetación densa, agua y sombra.", examples: ["tigres", "aves"] },
      { title: "Indo-Pacífico", text: "Un recorrido con referencias a ecosistemas tropicales y especies singulares.", examples: ["dragón de Komodo", "tortugas"] },
      { title: "Centro y Sudamérica", text: "Zonas de inspiración tropical donde observar aves y pequeños mamíferos.", examples: ["aves", "mamíferos tropicales"] }
    ],
    animalsTitle: "Algunos animales que puedes encontrar",
    animalsNote: "La presencia y visibilidad de los animales puede variar según el momento del día, el clima y el comportamiento de cada especie.",
    animals: [
      { title: "Lémures", text: "Uno de los grupos más asociados a la zona de Madagascar." },
      { title: "Gorilas", text: "Una de las especies más reconocibles de las áreas africanas del parque." },
      { title: "Tigre", text: "Consulta el mapa oficial para localizar su zona dentro del recorrido." },
      { title: "Dragón de Komodo", text: "Una especie singular cuya visibilidad puede depender de condiciones de temperatura y manejo veterinario." }
    ],
    arrivalTitle: "Cómo llegar desde el Apartamento Veramar",
    arrivalIntro: "Bioparc se encuentra en el centro de Fuengirola, junto al Ayuntamiento. Desde la zona del apartamento se puede llegar dando un paseo hacia el centro sin mostrar aquí la dirección exacta del alojamiento.",
    arrivalOptions: [
      { icon: "walk", title: "Andando", text: "Plan cómodo si quieres combinar Bioparc con el centro histórico. TODO: confirmar tiempo real andando desde el apartamento." },
      { icon: "taxi", title: "Taxi", text: "Opción práctica con niños pequeños, calor o movilidad reducida." },
      { icon: "car", title: "Coche", text: "Útil si vienes de una excursión; confirma antes las condiciones del Parking Plaza de España." }
    ],
    mapTitle: "Mapa orientativo de Bioparc Fuengirola",
    mapAria: "Mapa con zona aproximada del apartamento, Bioparc Fuengirola y puntos de referencia cercanos",
    mapApartment: "Zona aproximada del apartamento",
    mapApartmentPopup: "La ubicación exacta se facilita tras confirmar la reserva.",
    mapPoints: { bioparc: "Bioparc Fuengirola", townHall: "Ayuntamiento", oldTown: "Centro histórico", castle: "Castillo Sohail", parking: "Parking Plaza de España" },
    officialButtons: {
      official_site: "Web oficial",
      tickets: "Comprar entradas",
      hours: "Consultar horarios oficiales",
      agenda: "Consultar agenda diaria",
      parking: "Consultar aparcamiento",
      accessibility: "Consultar accesibilidad",
      rules: "Consultar restaurantes y normas",
      how_to_arrive: "Cómo llegar oficialmente"
    },
    bestTimeTitle: "¿Cuál es el mejor momento para visitar Bioparc?",
    bestTimeTips: ["Llegar por la mañana suele ser más cómodo.", "Evita las horas centrales en días muy calurosos.", "Consulta el horario estacional antes de salir.", "Revisa la agenda diaria.", "Lleva agua y protección solar.", "Reserva más tiempo si viajas con niños pequeños."],
    stayTipTitle: "Consejo Stay Fuengirola",
    stayTipText: "En verano, la mañana suele ser la opción más cómoda para recorrer el parque con niños. Antes de ir, consulta la agenda diaria por si hay actividades o aperturas con horarios concretos.",
    kidsTitle: "¿Merece la pena Bioparc Fuengirola con niños?",
    kidsText: "Sí, especialmente si buscas un plan educativo, manejable y sin salir de Fuengirola. El recorrido permite ver hábitats distintos, hacer pausas y combinar la visita con el centro o el paseo marítimo.",
    kidsCard: "Recomendado especialmente para familias que buscan un plan de media jornada sin salir de Fuengirola.",
    whatToBringTitle: "Qué llevar a Bioparc",
    whatToBring: ["Calzado cómodo", "Agua", "Protección solar", "Gorra", "Cámara o móvil", "Carrito si viajas con niños pequeños", "Ropa adecuada a la temporada"],
    stayAdviceTitle: "Consejos Stay Fuengirola",
    stayAdvice: ["Compra entradas online en temporada alta.", "Consulta el horario del día antes de salir.", "Llega por la mañana en los meses más calurosos.", "No planifiques una visita demasiado rápida.", "Combina Bioparc con un paseo por el centro histórico.", "Después puedes comer en el centro o regresar hacia el paseo marítimo."],
    dayPlanTitle: "Un día en Fuengirola con Bioparc",
    dayPlanIntro: "Ejemplo flexible, no una agenda oficial.",
    dayPlan: [
      { time: "10:00", text: "Entrada a Bioparc." },
      { time: "13:30", text: "Almuerzo en el centro de Fuengirola." },
      { time: "15:30", text: "Paseo por el centro histórico." },
      { time: "17:00", text: "Paseo marítimo o playa." }
    ],
    comparisonTitle: "Recomendación rápida",
    comparison: [
      { label: "Tiempo aproximado", value: "Media jornada" },
      { label: "Mejor para", value: "Familias y amantes de los animales" },
      { label: "Ubicación", value: "Centro de Fuengirola" },
      { label: "Accesibilidad", value: "Recorrido accesible" },
      { label: "Entradas", value: "Mejor consultar online" },
      { label: "Época recomendada", value: "Todo el año" }
    ],
    faqTitle: "Preguntas frecuentes",
    faqs: [
      { question: "¿Cuánto tiempo se tarda en visitar Bioparc Fuengirola?", answer: "Como recomendación editorial, reserva aproximadamente entre 3 y 4 horas si quieres recorrerlo con calma. No es una duración oficial." },
      { question: "¿Bioparc Fuengirola es adecuado para niños?", answer: "Sí, suele ser un plan cómodo para familias por su tamaño manejable, el interés educativo y la posibilidad de combinarlo con el centro de Fuengirola." },
      { question: "¿Se puede entrar con carrito de bebé?", answer: "La información oficial indica que puede recorrerse con carritos de bebé." },
      { question: "¿El parque es accesible?", answer: "Según la FAQ oficial, el parque es accesible para personas con movilidad reducida." },
      { question: "¿Se puede entrar con comida?", answer: "Las normas oficiales indican que no está permitido entrar con comida, salvo excepciones concretas. Consulta las normas antes de ir." },
      { question: "¿Dónde se puede aparcar?", answer: "La web oficial menciona el Parking Plaza de España y una tarifa especial para clientes, siempre sujeta a condiciones vigentes." },
      { question: "¿Es mejor comprar las entradas online?", answer: "Suele ser recomendable consultar y comprar en la web oficial, especialmente en temporada alta." },
      { question: "¿Se puede llegar andando desde el apartamento?", answer: "Bioparc está en el centro de Fuengirola. Desde la zona del apartamento puede plantearse como paseo, pero el tiempo exacto está pendiente de confirmar." }
    ],
    officialInfoTitle: "Información oficial",
    editorialNote: "Los horarios, precios y actividades pueden cambiar. Consulta siempre la información oficial antes de tu visita.",
    relatedTitle: "También te puede interesar",
    related: [
      { key: "thingsToDo", title: "Qué hacer en Fuengirola", text: "Más planes cerca del apartamento." },
      { key: "beaches", title: "Playas", text: "Playas cercanas para completar el día." },
      { key: "restaurants", title: "Restaurantes", text: "Ideas para comer después de la visita." },
      { key: "shopping", title: "Compras", text: "Miramar, centro y compras prácticas." },
      { key: "airport", title: "Cómo llegar desde el aeropuerto", text: "Opciones desde el Aeropuerto de Málaga." }
    ],
    schemaAbout: ["Bioparc Fuengirola", "Fuengirola", "planes con niños", "Costa del Sol"]
  },
  en: {
    metaTitle: "Bioparc Fuengirola: tickets, opening times and tips | Stay Fuengirola",
    metaDescription: "Guide to visiting Bioparc Fuengirola: what to see, opening times, tickets, how to get there, accessibility, parking and family tips.",
    breadcrumbGuide: "Fuengirola Guide",
    breadcrumbArticle: "Bioparc Fuengirola",
    kicker: "Fuengirola Guide · Family plans",
    h1: "Bioparc Fuengirola: a practical guide for your visit",
    intro: "Bioparc Fuengirola is one of the city’s most popular family plans. This guide explains what to expect, how much time to allow, how to get there from the apartment and what to check before buying tickets.",
    heroImageAlt: "Editorial placeholder for Bioparc Fuengirola until an authorized image is available",
    quickTitle: "Bioparc Fuengirola at a glance",
    quickItems: [
      { icon: "map", title: "In central Fuengirola", text: "Next to the Town Hall and close to the old town." },
      { icon: "family", title: "Great for families", text: "A comfortable morning or afternoon plan with children." },
      { icon: "clock", title: "Half-day visit", text: "Allow around 3 to 4 hours to explore at an easy pace." },
      { icon: "accessibility", title: "Accessible route", text: "Official information states that the park is accessible." },
      { icon: "ticket", title: "Online tickets", text: "Check availability and conditions before visiting." },
      { icon: "sun", title: "Outdoor activity", text: "There is shade, but in summer mornings are usually easier." }
    ],
    sections: [
      { id: "what-is", title: "What is Bioparc Fuengirola?", image: images.habitats, imageAlt: "Visual placeholder about recreated habitats at Bioparc Fuengirola", paragraphs: ["Bioparc Fuengirola is an animal park designed around recreated habitats and an immersive visitor experience. Its areas are inspired by tropical ecosystems and regions such as Madagascar, equatorial Africa, Southeast Asia, the Indo-Pacific and Central and South America.", "This guide is not official park information. It is a practical local guide for guests staying at Apartamento Veramar, without fixing prices, closing times or activities that may change."] },
      { id: "hours", title: "Opening times", paragraphs: ["It is better not to treat one closing time as permanent. Closing times vary by season, ticket offices close before the park and some dates may have reduced hours.", "Official information states that the park opens from 10:00. Always check the day’s schedule and last entry before leaving."] },
      { id: "tickets", title: "Tickets and prices", paragraphs: ["Prices may vary by age, promotions, purchase method and specific conditions. For that reason, we do not store fixed prices here.", "Always use the official Bioparc Fuengirola website for updated ticket information. We do not link to resellers or affiliate ticket sites."] },
      { id: "activities", title: "Activities inside the park", paragraphs: ["Some areas, openings or activities may have their own timetable. The daily agenda changes, so it is best checked shortly before the visit.", "If you travel with children, the daily agenda can help you plan the route and avoid unnecessary waiting."] },
      { id: "accessibility", title: "Accessibility", paragraphs: ["According to the official FAQ, the park is accessible for visitors with reduced mobility and can also be visited with baby strollers.", "If you need specific details, check the official page before buying tickets."] },
      { id: "food", title: "Where to eat", paragraphs: ["There may be options inside the park for drinks, snacks or meals, but it is worth checking what is available on the day of your visit.", "Official rules state that bringing food into the park is not permitted except for specific cases such as babies, children’s snacks or food intolerances reported to staff. Animals must not be fed."] },
      { id: "parking", title: "Where to park", paragraphs: ["Bioparc is in a central area. The official website mentions Plaza de España Parking and a special rate for customers, but conditions may change.", "If you go by car, confirm current conditions before parking and ask park staff when relevant."] }
    ],
    habitatsTitle: "What to see in Bioparc Fuengirola",
    habitatsIntro: "These areas are editorial guidance based on habitats described by the park. Always check the official map for the current route.",
    habitats: [
      { title: "Madagascar", text: "A zone for island landscapes and tropical vegetation.", examples: ["lemurs", "tropical birds"] },
      { title: "Equatorial Africa", text: "Spaces inspired by humid forests and African landscapes.", examples: ["gorillas", "pygmy hippos"] },
      { title: "Southeast Asia", text: "Dense greenery, water and shaded paths.", examples: ["tigers", "birds"] },
      { title: "Indo-Pacific", text: "A route with tropical ecosystems and distinctive species.", examples: ["Komodo dragon", "turtles"] },
      { title: "Central and South America", text: "Tropical-inspired areas with birds and smaller mammals.", examples: ["birds", "tropical mammals"] }
    ],
    animalsTitle: "Some animals you may see",
    animalsNote: "Animal presence and visibility may vary depending on time of day, weather and each animal’s behaviour.",
    animals: [
      { title: "Lemurs", text: "One of the groups most closely linked with the Madagascar area." },
      { title: "Gorillas", text: "One of the best-known species in the African areas of the park." },
      { title: "Tiger", text: "Check the official map to locate its area on the route." },
      { title: "Komodo dragon", text: "A distinctive species whose visibility may depend on temperature and veterinary management." }
    ],
    arrivalTitle: "How to get there from Apartamento Veramar",
    arrivalIntro: "Bioparc is in central Fuengirola, next to the Town Hall. From the apartment area, it can be combined with a walk towards the centre without showing the exact accommodation address here.",
    arrivalOptions: [
      { icon: "walk", title: "On foot", text: "Good if you want to combine Bioparc with the old town. TODO: confirm the real walking time from the apartment." },
      { icon: "taxi", title: "Taxi", text: "Practical with young children, heat or reduced mobility." },
      { icon: "car", title: "By car", text: "Useful if you are coming from another trip; check Plaza de España Parking conditions first." }
    ],
    mapTitle: "Orientation map for Bioparc Fuengirola",
    mapAria: "Map with the approximate apartment area, Bioparc Fuengirola and nearby landmarks",
    mapApartment: "Approximate apartment area",
    mapApartmentPopup: "The exact location is provided after booking confirmation.",
    mapPoints: { bioparc: "Bioparc Fuengirola", townHall: "Town Hall", oldTown: "Old town", castle: "Sohail Castle", parking: "Plaza de España Parking" },
    officialButtons: { official_site: "Official website", tickets: "Buy tickets", hours: "Check official opening times", agenda: "Check daily agenda", parking: "Check parking", accessibility: "Check accessibility", rules: "Check restaurants and rules", how_to_arrive: "Official directions" },
    bestTimeTitle: "When is the best time to visit Bioparc?",
    bestTimeTips: ["Arriving in the morning is usually easier.", "Avoid the hottest hours on very warm days.", "Check seasonal opening times before leaving.", "Review the daily agenda.", "Bring water and sun protection.", "Allow more time with small children."],
    stayTipTitle: "Stay Fuengirola tip",
    stayTipText: "In summer, mornings are usually the most comfortable option with children. Before going, check the daily agenda in case some activities or openings have specific times.",
    kidsTitle: "Is Bioparc Fuengirola worth it with children?",
    kidsText: "Yes, especially if you want an educational, manageable plan without leaving Fuengirola. The route allows pauses and can be combined with the centre or the seafront.",
    kidsCard: "Especially recommended for families looking for a half-day plan without leaving Fuengirola.",
    whatToBringTitle: "What to bring to Bioparc",
    whatToBring: ["Comfortable shoes", "Water", "Sun protection", "Hat", "Camera or phone", "Stroller for small children", "Clothes suitable for the season"],
    stayAdviceTitle: "Stay Fuengirola tips",
    stayAdvice: ["Buy tickets online in high season.", "Check the day’s schedule before leaving.", "Go in the morning during the hottest months.", "Do not plan too short a visit.", "Combine Bioparc with a walk through the old town.", "Afterwards, eat in the centre or head back towards the seafront."],
    dayPlanTitle: "A Fuengirola day with Bioparc",
    dayPlanIntro: "A flexible example, not an official schedule.",
    dayPlan: [{ time: "10:00", text: "Enter Bioparc." }, { time: "13:30", text: "Lunch in central Fuengirola." }, { time: "15:30", text: "Walk through the old town." }, { time: "17:00", text: "Seafront promenade or beach." }],
    comparisonTitle: "Quick recommendation",
    comparison: [{ label: "Approximate time", value: "Half day" }, { label: "Best for", value: "Families and animal lovers" }, { label: "Location", value: "Central Fuengirola" }, { label: "Accessibility", value: "Accessible route" }, { label: "Tickets", value: "Best checked online" }, { label: "Recommended season", value: "All year" }],
    faqTitle: "Frequently asked questions",
    faqs: [
      { question: "How long does it take to visit Bioparc Fuengirola?", answer: "As editorial guidance, allow around 3 to 4 hours if you want to explore calmly. This is not an official duration." },
      { question: "Is Bioparc Fuengirola suitable for children?", answer: "Yes, it is usually a comfortable family plan thanks to its manageable size, educational value and central location." },
      { question: "Can you enter with a baby stroller?", answer: "Official information states that the park can be visited with baby strollers." },
      { question: "Is the park accessible?", answer: "According to the official FAQ, the park is accessible for people with reduced mobility." },
      { question: "Can you bring food inside?", answer: "Official rules state that bringing food is not permitted except in specific cases. Check the rules before going." },
      { question: "Where can you park?", answer: "The official website mentions Plaza de España Parking and a special customer rate, subject to current conditions." },
      { question: "Is it better to buy tickets online?", answer: "It is usually sensible to check and buy through the official website, especially in high season." },
      { question: "Can you walk there from the apartment?", answer: "Bioparc is in central Fuengirola. From the apartment area it can be considered as a walk, but the exact time is pending confirmation." }
    ],
    officialInfoTitle: "Official information",
    editorialNote: "Opening times, prices and activities may change. Always check official information before your visit.",
    relatedTitle: "You may also like",
    related: [
      { key: "thingsToDo", title: "Things to do in Fuengirola", text: "More plans near the apartment." },
      { key: "beaches", title: "Beaches", text: "Nearby beaches to complete the day." },
      { key: "restaurants", title: "Restaurants", text: "Ideas for eating after the visit." },
      { key: "shopping", title: "Shopping", text: "Miramar, the centre and practical shopping." },
      { key: "airport", title: "How to arrive from the airport", text: "Options from Malaga Airport." }
    ],
    schemaAbout: ["Bioparc Fuengirola", "Fuengirola", "family plans", "Costa del Sol"]
  },
  fi: {
    metaTitle: "Bioparc Fuengirola: liput, aukioloajat ja vinkit | Stay Fuengirola",
    metaDescription: "Opas Bioparc Fuengirolaan: mitä nähdä, aukioloajat, liput, saapuminen, esteettömyys, pysäköinti ja vinkit perheille.",
    breadcrumbGuide: "Fuengirola-opas",
    breadcrumbArticle: "Bioparc Fuengirola",
    kicker: "Fuengirola-opas · Perhetekemistä",
    h1: "Bioparc Fuengirola: käytännön opas vierailuun",
    intro: "Bioparc Fuengirola on yksi kaupungin suosituimmista perhekohteista. Tässä oppaassa kerromme, mitä siellä voi odottaa, paljonko aikaa kannattaa varata, miten sinne pääsee asunnolta ja mitä on hyvä tarkistaa ennen lippujen ostamista.",
    heroImageAlt: "Bioparc Fuengirolan toimituksellinen paikkamerkkikuva, kunnes käytössä on luvallinen kuva",
    quickTitle: "Bioparc Fuengirola lyhyesti",
    quickItems: [
      { icon: "map", title: "Fuengirolan keskustassa", text: "Kaupungintalon vieressä ja lähellä vanhaa keskustaa." },
      { icon: "family", title: "Hyvä perheille", text: "Mukava aamu- tai iltapäiväohjelma lasten kanssa." },
      { icon: "clock", title: "Puolen päivän vierailu", text: "Varaa rauhalliseen kierrokseen noin 3-4 tuntia." },
      { icon: "accessibility", title: "Esteetön reitti", text: "Virallisen tiedon mukaan puisto on esteetön." },
      { icon: "ticket", title: "Liput verkosta", text: "Tarkista saatavuus ja ehdot ennen vierailua." },
      { icon: "sun", title: "Ulkokohde", text: "Varjoa on, mutta kesällä aamu on usein mukavin." }
    ],
    sections: [
      { id: "mika-on-bioparc", title: "Mikä on Bioparc Fuengirola?", image: images.habitats, imageAlt: "Paikkamerkkikuva Bioparc Fuengirolan rakennetuista elinympäristöistä", paragraphs: ["Bioparc Fuengirola on eläinpuisto, jonka idea perustuu rakennettuihin elinympäristöihin ja elämykselliseen vierailuun. Alueet ovat saaneet vaikutteita trooppisista ekosysteemeistä ja seuduista kuten Madagaskar, päiväntasaajan Afrikka, Kaakkois-Aasia, Indo-Tyynimeri sekä Keski- ja Etelä-Amerikka.", "Tämä ei ole puiston virallinen tiedote, vaan paikallinen käytännön opas Apartamento Veramarissa yöpyville. Emme lukitse tähän hintoja, sulkemisaikoja tai ohjelmia, jotka voivat muuttua."] },
      { id: "aukioloajat", title: "Aukioloajat", paragraphs: ["Yhtä sulkemisaikaa ei kannata pitää pysyvänä tietona. Sulkemisaika vaihtelee kauden mukaan, lipunmyynti sulkeutuu ennen puistoa ja joillakin päivillä voi olla poikkeusaikataulu.", "Virallisen tiedon mukaan puisto avautuu klo 10.00. Tarkista aina päivän aikataulu ja viimeinen sisäänpääsy ennen lähtöä."] },
      { id: "liput", title: "Liput ja hinnat", paragraphs: ["Hinnat voivat vaihdella iän, kampanjoiden, ostotavan ja erityisehtojen mukaan. Siksi emme pidä kiinteitä hintoja tässä oppaassa.", "Käytä aina Bioparc Fuengirolan virallista sivustoa ajantasaisiin lipputietoihin. Emme linkitä jälleenmyyjiin tai affiliate-sivustoihin."] },
      { id: "aktiviteetit", title: "Aktiviteetit puistossa", paragraphs: ["Joillakin alueilla, avauksilla tai aktiviteeteilla voi olla oma aikataulu. Päiväohjelma muuttuu, joten se kannattaa tarkistaa juuri ennen vierailua.", "Lasten kanssa päiväohjelma auttaa suunnittelemaan kierroksen ja välttämään turhaa odottamista."] },
      { id: "esteettomyys", title: "Esteettömyys", paragraphs: ["Virallisen FAQ:n mukaan puisto on esteetön liikuntarajoitteisille ja siellä voi liikkua myös lastenvaunujen kanssa.", "Jos tarvitset tarkempaa tietoa, tarkista virallinen sivu ennen lippujen ostamista."] },
      { id: "ruoka", title: "Missä syödä", paragraphs: ["Puistossa voi olla vaihtoehtoja juomille, välipaloille tai aterioille, mutta tarjonta kannattaa tarkistaa vierailupäivänä.", "Virallisten sääntöjen mukaan puistoon ei saa tuoda ruokaa, paitsi tietyissä tapauksissa kuten vauvoille, lasten välipalaksi tai ilmoitettuihin intoleransseihin. Eläimiä ei saa ruokkia."] },
      { id: "pysakointi", title: "Missä pysäköidä", paragraphs: ["Bioparc sijaitsee keskustassa. Virallinen sivusto mainitsee Plaza de España -pysäköinnin ja asiakkaille tarkoitetun erikoishinnan, mutta ehdot voivat muuttua.", "Jos saavut autolla, tarkista voimassa olevat ehdot ennen pysäköintiä ja kysy tarvittaessa puiston henkilökunnalta."] }
    ],
    habitatsTitle: "Mitä nähdä Bioparc Fuengirolassa",
    habitatsIntro: "Nämä alueet ovat toimituksellista ohjeistusta puiston kuvaamien elinympäristöjen pohjalta. Tarkista ajantasainen reitti virallisesta kartasta.",
    habitats: [
      { title: "Madagaskar", text: "Alue saariympäristöille ja trooppiselle kasvillisuudelle.", examples: ["makit", "trooppiset linnut"] },
      { title: "Päiväntasaajan Afrikka", text: "Kosteiden metsien ja afrikkalaisten maisemien inspiroimia tiloja.", examples: ["gorillat", "kääpiövirtahevot"] },
      { title: "Kaakkois-Aasia", text: "Runsasta kasvillisuutta, vettä ja varjoisia polkuja.", examples: ["tiikerit", "linnut"] },
      { title: "Indo-Tyynimeri", text: "Trooppisia ekosysteemejä ja erikoisia lajeja.", examples: ["komodonvaraani", "kilpikonnat"] },
      { title: "Keski- ja Etelä-Amerikka", text: "Trooppishenkisiä alueita, joissa voi nähdä lintuja ja pieniä nisäkkäitä.", examples: ["linnut", "trooppiset nisäkkäät"] }
    ],
    animalsTitle: "Joitakin eläimiä, joita voit nähdä",
    animalsNote: "Eläinten näkyvyys voi vaihdella vuorokaudenajan, sään ja eläinten oman käyttäytymisen mukaan.",
    animals: [{ title: "Makit", text: "Yksi Madagaskar-alueeseen vahvasti liittyvistä ryhmistä." }, { title: "Gorillat", text: "Yksi puiston afrikkalaisten alueiden tunnetuimmista lajeista." }, { title: "Tiikeri", text: "Tarkista sijainti virallisesta kartasta." }, { title: "Komodonvaraani", text: "Erikoinen laji, jonka näkyvyys voi riippua lämpötilasta ja eläinlääkinnällisestä hoidosta." }],
    arrivalTitle: "Miten pääset Apartamento Veramarilta",
    arrivalIntro: "Bioparc sijaitsee Fuengirolan keskustassa kaupungintalon vieressä. Asunnon alueelta sen voi yhdistää kävelyyn keskustaan ilman, että majoituksen tarkkaa osoitetta näytetään täällä.",
    arrivalOptions: [{ icon: "walk", title: "Kävellen", text: "Hyvä vaihtoehto, jos haluat yhdistää Bioparcin vanhaan keskustaan. TODO: vahvista todellinen kävelyaika asunnolta." }, { icon: "taxi", title: "Taksilla", text: "Käytännöllinen lasten, kuumuuden tai liikkumisrajoitteiden kanssa." }, { icon: "car", title: "Autolla", text: "Hyödyllinen, jos tulet toiselta retkeltä; tarkista Plaza de España -pysäköinnin ehdot ensin." }],
    mapTitle: "Suuntaa-antava kartta Bioparc Fuengirolaan",
    mapAria: "Kartta, jossa näkyy asunnon likimääräinen alue, Bioparc Fuengirola ja lähialueen kohteita",
    mapApartment: "Asunnon likimääräinen alue",
    mapApartmentPopup: "Tarkka sijainti annetaan varauksen vahvistamisen jälkeen.",
    mapPoints: { bioparc: "Bioparc Fuengirola", townHall: "Kaupungintalo", oldTown: "Vanha keskusta", castle: "Sohailin linna", parking: "Plaza de España -pysäköinti" },
    officialButtons: { official_site: "Virallinen sivusto", tickets: "Osta liput", hours: "Tarkista viralliset aukioloajat", agenda: "Tarkista päiväohjelma", parking: "Tarkista pysäköinti", accessibility: "Tarkista esteettömyys", rules: "Tarkista ravintolat ja säännöt", how_to_arrive: "Viralliset saapumisohjeet" },
    bestTimeTitle: "Milloin Bioparcissa kannattaa käydä?",
    bestTimeTips: ["Aamu on usein mukavin aika.", "Vältä kuumimpia tunteja hellepäivinä.", "Tarkista kauden aukioloajat ennen lähtöä.", "Katso päiväohjelma.", "Ota mukaan vettä ja aurinkosuoja.", "Varaa enemmän aikaa pienten lasten kanssa."],
    stayTipTitle: "Stay Fuengirola -vinkki",
    stayTipText: "Kesällä aamu on yleensä mukavin vaihtoehto lasten kanssa. Tarkista ennen lähtöä päiväohjelma, jos joillakin avauksilla tai aktiviteeteilla on omat ajat.",
    kidsTitle: "Kannattaako Bioparc Fuengirola lasten kanssa?",
    kidsText: "Kyllä, etenkin jos haluat opettavaisen ja helposti hallittavan ohjelman Fuengirolassa. Kierroksella voi pitää taukoja ja yhdistää vierailun keskustaan tai rantapromenadiin.",
    kidsCard: "Erityisen hyvä perheille, jotka etsivät puolen päivän ohjelmaa Fuengirolasta.",
    whatToBringTitle: "Mitä ottaa mukaan Bioparciin",
    whatToBring: ["Mukavat kengät", "Vettä", "Aurinkosuoja", "Lippalakki tai hattu", "Kamera tai puhelin", "Lastenvaunut pienille lapsille", "Säähän sopivat vaatteet"],
    stayAdviceTitle: "Stay Fuengirola -vinkit",
    stayAdvice: ["Osta liput verkosta sesonkiaikana.", "Tarkista päivän aikataulu ennen lähtöä.", "Mene aamulla kuumimpina kuukausina.", "Älä varaa liian vähän aikaa.", "Yhdistä Bioparc kävelyyn vanhassa keskustassa.", "Vierailun jälkeen voit syödä keskustassa tai palata rantapromenadille."],
    dayPlanTitle: "Päivä Fuengirolassa Bioparcin kanssa",
    dayPlanIntro: "Joustava esimerkki, ei virallinen aikataulu.",
    dayPlan: [{ time: "10:00", text: "Sisään Bioparciin." }, { time: "13:30", text: "Lounas Fuengirolan keskustassa." }, { time: "15:30", text: "Kävely vanhassa keskustassa." }, { time: "17:00", text: "Rantapromenadi tai ranta." }],
    comparisonTitle: "Nopea suositus",
    comparison: [{ label: "Arvioitu aika", value: "Puoli päivää" }, { label: "Sopii parhaiten", value: "Perheille ja eläinten ystäville" }, { label: "Sijainti", value: "Fuengirolan keskusta" }, { label: "Esteettömyys", value: "Esteetön reitti" }, { label: "Liput", value: "Paras tarkistaa verkosta" }, { label: "Suositeltu aika", value: "Ympäri vuoden" }],
    faqTitle: "Usein kysytyt kysymykset",
    faqs: [{ question: "Kuinka kauan Bioparc Fuengirolassa vierailu kestää?", answer: "Toimituksellisena suosituksena varaa noin 3-4 tuntia rauhalliseen vierailuun. Tämä ei ole virallinen kesto." }, { question: "Sopiiko Bioparc Fuengirola lapsille?", answer: "Kyllä, se on usein mukava perhekohde hallittavan koon, opettavaisuuden ja keskustasijainnin ansiosta." }, { question: "Voiko sisään mennä lastenvaunujen kanssa?", answer: "Virallisen tiedon mukaan puistossa voi liikkua lastenvaunujen kanssa." }, { question: "Onko puisto esteetön?", answer: "Virallisen FAQ:n mukaan puisto on esteetön liikuntarajoitteisille." }, { question: "Saako puistoon tuoda ruokaa?", answer: "Virallisten sääntöjen mukaan ruokaa ei saa tuoda, paitsi tietyissä poikkeustapauksissa. Tarkista säännöt ennen vierailua." }, { question: "Missä voi pysäköidä?", answer: "Virallinen sivusto mainitsee Plaza de España -pysäköinnin ja asiakashinnan voimassa olevien ehtojen mukaan." }, { question: "Kannattaako liput ostaa verkosta?", answer: "Usein on järkevää tarkistaa ja ostaa liput viralliselta sivustolta, etenkin sesonkiaikana." }, { question: "Voiko sinne kävellä asunnolta?", answer: "Bioparc on Fuengirolan keskustassa. Asunnon alueelta se voi olla kävelykohde, mutta tarkka aika odottaa vahvistusta." }],
    officialInfoTitle: "Virallinen tieto",
    editorialNote: "Aukioloajat, hinnat ja aktiviteetit voivat muuttua. Tarkista aina virallinen tieto ennen vierailua.",
    relatedTitle: "Saatat pitää myös näistä",
    related: [{ key: "thingsToDo", title: "Mitä tehdä Fuengirolassa", text: "Lisää tekemistä asunnon lähellä." }, { key: "beaches", title: "Rannat", text: "Läheiset rannat päivän jatkoksi." }, { key: "restaurants", title: "Ravintolat", text: "Ideoita ruokailuun vierailun jälkeen." }, { key: "shopping", title: "Ostokset", text: "Miramar, keskusta ja käytännön ostokset." }, { key: "airport", title: "Saapuminen lentoasemalta", text: "Vaihtoehdot Malagan lentoasemalta." }],
    schemaAbout: ["Bioparc Fuengirola", "Fuengirola", "perhetekeminen", "Costa del Sol"]
  },
  sv: {
    metaTitle: "Bioparc Fuengirola: biljetter, öppettider och tips | Stay Fuengirola",
    metaDescription: "Guide till Bioparc Fuengirola: vad du kan se, öppettider, biljetter, hur du kommer dit, tillgänglighet, parkering och familjetips.",
    breadcrumbGuide: "Fuengirola-guide",
    breadcrumbArticle: "Bioparc Fuengirola",
    kicker: "Fuengirola-guide · Familjeutflykter",
    h1: "Bioparc Fuengirola: praktisk guide inför besöket",
    intro: "Bioparc Fuengirola är en av stadens mest populära familjeaktiviteter. Här får du veta vad du kan förvänta dig, hur mycket tid du bör avsätta, hur du tar dig dit från lägenheten och vad du bör kontrollera innan du köper biljetter.",
    heroImageAlt: "Redaktionell platshållarbild för Bioparc Fuengirola tills en godkänd bild finns",
    quickTitle: "Bioparc Fuengirola i korthet",
    quickItems: [
      { icon: "map", title: "I centrala Fuengirola", text: "Intill stadshuset och nära gamla centrum." },
      { icon: "family", title: "Bra för familjer", text: "En bekväm aktivitet för förmiddag eller eftermiddag med barn." },
      { icon: "clock", title: "Halvdagsbesök", text: "Räkna med cirka 3-4 timmar i lugnt tempo." },
      { icon: "accessibility", title: "Tillgänglig rutt", text: "Officiell information anger att parken är tillgänglig." },
      { icon: "ticket", title: "Biljetter online", text: "Kontrollera tillgänglighet och villkor före besöket." },
      { icon: "sun", title: "Utomhusaktivitet", text: "Det finns skugga, men på sommaren är morgonen oftast bekvämast." }
    ],
    sections: [
      { id: "vad-ar-bioparc", title: "Vad är Bioparc Fuengirola?", image: images.habitats, imageAlt: "Platshållarbild om återskapade habitat i Bioparc Fuengirola", paragraphs: ["Bioparc Fuengirola är en djurpark uppbyggd kring återskapade habitat och en upplevelsebaserad rundtur. Områdena inspireras av tropiska ekosystem och regioner som Madagaskar, ekvatoriala Afrika, Sydostasien, Indo-Pacific samt Central- och Sydamerika.", "Det här är inte parkens officiella information, utan en praktisk lokal guide för gäster på Apartamento Veramar. Vi anger inte fasta priser, stängningstider eller aktiviteter som kan förändras."] },
      { id: "oppettider", title: "Öppettider", paragraphs: ["En enda stängningstid bör inte ses som permanent. Stängningstider varierar efter säsong, biljettkassan stänger före parken och vissa datum kan ha kortare öppettider.", "Officiell information anger öppning från 10:00. Kontrollera alltid dagens schema och sista insläpp innan du går."] },
      { id: "biljetter", title: "Biljetter och priser", paragraphs: ["Priser kan variera beroende på ålder, kampanjer, köpsätt och särskilda villkor. Därför lagrar vi inte fasta priser här.", "Använd alltid Bioparc Fuengirolas officiella webbplats för uppdaterad biljettinformation. Vi länkar inte till återförsäljare eller affiliatesidor."] },
      { id: "aktiviteter", title: "Aktiviteter i parken", paragraphs: ["Vissa områden, öppningar eller aktiviteter kan ha egna tider. Dagsprogrammet ändras, så kontrollera det strax före besöket.", "Med barn kan dagsprogrammet hjälpa dig att planera rundan och undvika onödig väntan."] },
      { id: "tillganglighet", title: "Tillgänglighet", paragraphs: ["Enligt den officiella FAQ:n är parken tillgänglig för personer med nedsatt rörlighet och kan även besökas med barnvagn.", "Om du behöver specifika detaljer bör du kontrollera den officiella sidan innan du köper biljetter."] },
      { id: "mat", title: "Var kan man äta", paragraphs: ["Det kan finnas alternativ inne i parken för dryck, snacks eller mat, men kontrollera vad som är öppet den dag du besöker.", "Officiella regler anger att man inte får ta med mat in i parken, förutom vissa särskilda fall som babybehov, barnsnacks eller intoleranser som meddelas personalen. Djuren får inte matas."] },
      { id: "parkering", title: "Var kan man parkera", paragraphs: ["Bioparc ligger centralt. Den officiella webbplatsen nämner Plaza de España Parking och ett särskilt kundpris, men villkoren kan ändras.", "Om du kör bil, kontrollera aktuella villkor innan du parkerar och fråga parkens personal vid behov."] }
    ],
    habitatsTitle: "Vad du kan se i Bioparc Fuengirola",
    habitatsIntro: "Områdena nedan är redaktionell vägledning baserad på parkens beskrivna habitat. Kontrollera alltid den officiella kartan för aktuell rutt.",
    habitats: [
      { title: "Madagaskar", text: "Ett område med ömiljöer och tropisk växtlighet.", examples: ["lemurer", "tropiska fåglar"] },
      { title: "Ekvatoriala Afrika", text: "Miljöer inspirerade av fuktiga skogar och afrikanska landskap.", examples: ["gorillor", "dvärgflodhästar"] },
      { title: "Sydostasien", text: "Tät grönska, vatten och skuggiga gångar.", examples: ["tigrar", "fåglar"] },
      { title: "Indo-Pacific", text: "En rutt med tropiska ekosystem och särskilda arter.", examples: ["komodovaran", "sköldpaddor"] },
      { title: "Central- och Sydamerika", text: "Tropiskt inspirerade områden med fåglar och mindre däggdjur.", examples: ["fåglar", "tropiska däggdjur"] }
    ],
    animalsTitle: "Några djur du kan få se",
    animalsNote: "Djurens närvaro och synlighet kan variera beroende på tid på dagen, väder och varje djurs beteende.",
    animals: [{ title: "Lemurer", text: "En grupp som ofta förknippas med Madagaskar-området." }, { title: "Gorillor", text: "En av de mest kända arterna i parkens afrikanska områden." }, { title: "Tiger", text: "Kontrollera den officiella kartan för att hitta området." }, { title: "Komodovaran", text: "En särskild art vars synlighet kan bero på temperatur och veterinär hantering." }],
    arrivalTitle: "Så tar du dig dit från Apartamento Veramar",
    arrivalIntro: "Bioparc ligger i centrala Fuengirola, intill stadshuset. Från lägenhetsområdet kan besöket kombineras med en promenad mot centrum utan att vi visar boendets exakta adress här.",
    arrivalOptions: [{ icon: "walk", title: "Till fots", text: "Bra om du vill kombinera Bioparc med gamla centrum. TODO: bekräfta faktisk gångtid från lägenheten." }, { icon: "taxi", title: "Taxi", text: "Praktiskt med små barn, värme eller nedsatt rörlighet." }, { icon: "car", title: "Bil", text: "Användbart om du kommer från en utflykt; kontrollera villkor för Plaza de España Parking först." }],
    mapTitle: "Orienteringskarta för Bioparc Fuengirola",
    mapAria: "Karta med ungefärligt lägenhetsområde, Bioparc Fuengirola och närliggande riktmärken",
    mapApartment: "Ungefärligt lägenhetsområde",
    mapApartmentPopup: "Exakt plats lämnas efter bekräftad bokning.",
    mapPoints: { bioparc: "Bioparc Fuengirola", townHall: "Stadshuset", oldTown: "Gamla centrum", castle: "Sohail-slottet", parking: "Plaza de España Parking" },
    officialButtons: { official_site: "Officiell webbplats", tickets: "Köp biljetter", hours: "Kontrollera officiella öppettider", agenda: "Kontrollera dagsprogram", parking: "Kontrollera parkering", accessibility: "Kontrollera tillgänglighet", rules: "Kontrollera restauranger och regler", how_to_arrive: "Officiell vägbeskrivning" },
    bestTimeTitle: "När är bästa tiden att besöka Bioparc?",
    bestTimeTips: ["Morgonen är oftast enklast.", "Undvik de hetaste timmarna varma dagar.", "Kontrollera säsongens öppettider före avfärd.", "Läs dagsprogrammet.", "Ta med vatten och solskydd.", "Räkna med mer tid med små barn."],
    stayTipTitle: "Stay Fuengirola-tips",
    stayTipText: "På sommaren är morgonen oftast bekvämast med barn. Kontrollera dagsprogrammet innan du går, eftersom vissa aktiviteter eller öppningar kan ha särskilda tider.",
    kidsTitle: "Är Bioparc Fuengirola värt det med barn?",
    kidsText: "Ja, särskilt om du vill ha en lärorik och hanterbar aktivitet utan att lämna Fuengirola. Rutten ger möjlighet till pauser och kan kombineras med centrum eller strandpromenaden.",
    kidsCard: "Särskilt rekommenderat för familjer som söker en halvdagsaktivitet i Fuengirola.",
    whatToBringTitle: "Vad du bör ta med till Bioparc",
    whatToBring: ["Bekväma skor", "Vatten", "Solskydd", "Keps eller hatt", "Kamera eller mobil", "Barnvagn för små barn", "Kläder efter säsong"],
    stayAdviceTitle: "Stay Fuengirola-tips",
    stayAdvice: ["Köp biljetter online under högsäsong.", "Kontrollera dagens schema innan du går.", "Gå på morgonen under de varmaste månaderna.", "Planera inte ett för kort besök.", "Kombinera Bioparc med en promenad i gamla centrum.", "Efteråt kan du äta i centrum eller gå tillbaka mot strandpromenaden."],
    dayPlanTitle: "En dag i Fuengirola med Bioparc",
    dayPlanIntro: "Ett flexibelt exempel, inte ett officiellt schema.",
    dayPlan: [{ time: "10:00", text: "Gå in på Bioparc." }, { time: "13:30", text: "Lunch i centrala Fuengirola." }, { time: "15:30", text: "Promenad genom gamla centrum." }, { time: "17:00", text: "Strandpromenad eller strand." }],
    comparisonTitle: "Snabb rekommendation",
    comparison: [{ label: "Ungefärlig tid", value: "Halv dag" }, { label: "Bäst för", value: "Familjer och djurintresserade" }, { label: "Plats", value: "Centrala Fuengirola" }, { label: "Tillgänglighet", value: "Tillgänglig rutt" }, { label: "Biljetter", value: "Bäst att kontrollera online" }, { label: "Rekommenderad period", value: "Hela året" }],
    faqTitle: "Vanliga frågor",
    faqs: [{ question: "Hur lång tid tar ett besök på Bioparc Fuengirola?", answer: "Som redaktionell rekommendation: räkna med cirka 3-4 timmar i lugnt tempo. Det är inte en officiell besökstid." }, { question: "Passar Bioparc Fuengirola för barn?", answer: "Ja, det är ofta en bekväm familjeaktivitet tack vare hanterbar storlek, pedagogiskt innehåll och centralt läge." }, { question: "Kan man gå in med barnvagn?", answer: "Officiell information anger att parken kan besökas med barnvagn." }, { question: "Är parken tillgänglig?", answer: "Enligt den officiella FAQ:n är parken tillgänglig för personer med nedsatt rörlighet." }, { question: "Får man ta med mat?", answer: "Officiella regler säger att mat inte får tas med, förutom särskilda undantag. Kontrollera reglerna före besöket." }, { question: "Var kan man parkera?", answer: "Den officiella webbplatsen nämner Plaza de España Parking och ett särskilt kundpris enligt aktuella villkor." }, { question: "Är det bättre att köpa biljetter online?", answer: "Det är oftast klokt att kontrollera och köpa via den officiella webbplatsen, särskilt under högsäsong." }, { question: "Kan man gå dit från lägenheten?", answer: "Bioparc ligger i centrala Fuengirola. Från lägenhetsområdet kan det fungera som promenad, men exakt tid behöver bekräftas." }],
    officialInfoTitle: "Officiell information",
    editorialNote: "Öppettider, priser och aktiviteter kan ändras. Kontrollera alltid officiell information före besöket.",
    relatedTitle: "Du kanske också gillar",
    related: [{ key: "thingsToDo", title: "Saker att göra i Fuengirola", text: "Fler aktiviteter nära lägenheten." }, { key: "beaches", title: "Stränder", text: "Närliggande stränder för resten av dagen." }, { key: "restaurants", title: "Restauranger", text: "Idéer för mat efter besöket." }, { key: "shopping", title: "Shopping", text: "Miramar, centrum och praktisk shopping." }, { key: "airport", title: "Från flygplatsen", text: "Alternativ från Málaga flygplats." }],
    schemaAbout: ["Bioparc Fuengirola", "Fuengirola", "familjeaktiviteter", "Costa del Sol"]
  },
  no: {
    metaTitle: "Bioparc Fuengirola: billetter, åpningstider og tips | Stay Fuengirola",
    metaDescription: "Guide til Bioparc Fuengirola: hva du kan se, åpningstider, billetter, hvordan komme dit, tilgjengelighet, parkering og familietips.",
    breadcrumbGuide: "Fuengirola-guide",
    breadcrumbArticle: "Bioparc Fuengirola",
    kicker: "Fuengirola-guide · Familieaktiviteter",
    h1: "Bioparc Fuengirola: praktisk guide før besøket",
    intro: "Bioparc Fuengirola er en av byens mest populære familieaktiviteter. Her får du vite hva du kan forvente, hvor mye tid du bør sette av, hvordan du kommer dit fra leiligheten og hva du bør sjekke før du kjøper billetter.",
    heroImageAlt: "Redaksjonell plassholder for Bioparc Fuengirola til et godkjent bilde er tilgjengelig",
    quickTitle: "Bioparc Fuengirola kort fortalt",
    quickItems: [
      { icon: "map", title: "I Fuengirola sentrum", text: "Ved rådhuset og nær gamlebyen." },
      { icon: "family", title: "Fint for familier", text: "En behagelig formiddags- eller ettermiddagsaktivitet med barn." },
      { icon: "clock", title: "Halvdagsbesøk", text: "Regn med omtrent 3-4 timer i rolig tempo." },
      { icon: "accessibility", title: "Tilgjengelig rute", text: "Offisiell informasjon sier at parken er tilgjengelig." },
      { icon: "ticket", title: "Billetter online", text: "Sjekk tilgjengelighet og vilkår før besøket." },
      { icon: "sun", title: "Utendørs aktivitet", text: "Det finnes skygge, men om sommeren er morgenen ofte best." }
    ],
    sections: [
      { id: "hva-er-bioparc", title: "Hva er Bioparc Fuengirola?", image: images.habitats, imageAlt: "Plassholderbilde om gjenskapte habitater i Bioparc Fuengirola", paragraphs: ["Bioparc Fuengirola er en dyrepark bygget rundt gjenskapte habitater og en mer opplevelsesbasert rundtur. Områdene er inspirert av tropiske økosystemer og regioner som Madagaskar, ekvatorial-Afrika, Sørøst-Asia, Indo-Stillehavet og Sentral- og Sør-Amerika.", "Dette er ikke parkens offisielle informasjon, men en praktisk lokal guide for gjester i Apartamento Veramar. Vi lagrer ikke faste priser, stengetider eller aktiviteter som kan endres."] },
      { id: "apningstider", title: "Åpningstider", paragraphs: ["Én stengetid bør ikke ses som permanent. Stengetid varierer med sesongen, billettluken stenger før parken og enkelte datoer kan ha kortere åpningstid.", "Offisiell informasjon sier åpning fra kl. 10.00. Sjekk alltid dagens program og siste inngang før du drar."] },
      { id: "billetter", title: "Billetter og priser", paragraphs: ["Priser kan variere etter alder, kampanjer, kjøpsmåte og særlige vilkår. Derfor legger vi ikke faste priser inn her.", "Bruk alltid Bioparc Fuengirolas offisielle nettsted for oppdatert billettinformasjon. Vi lenker ikke til videreselgere eller affiliate-sider."] },
      { id: "aktiviteter", title: "Aktiviteter i parken", paragraphs: ["Noen områder, åpninger eller aktiviteter kan ha egne tider. Dagsprogrammet endres, så det bør sjekkes rett før besøket.", "Med barn kan dagsprogrammet hjelpe deg å planlegge runden og unngå unødvendig venting."] },
      { id: "tilgjengelighet", title: "Tilgjengelighet", paragraphs: ["Ifølge den offisielle FAQ-en er parken tilgjengelig for personer med redusert mobilitet og kan også besøkes med barnevogn.", "Trenger du spesifikke detaljer, sjekk den offisielle siden før du kjøper billetter."] },
      { id: "mat", title: "Hvor kan man spise", paragraphs: ["Det kan finnes alternativer inne i parken for drikke, snacks eller mat, men sjekk hva som er tilgjengelig på besøksdagen.", "Offisielle regler sier at mat ikke kan tas med inn i parken, med enkelte unntak som babyer, snacks til barn eller intoleranser meldt til personalet. Dyrene må ikke mates."] },
      { id: "parkering", title: "Hvor kan man parkere", paragraphs: ["Bioparc ligger sentralt. Den offisielle nettsiden nevner Plaza de España Parking og en spesialpris for kunder, men vilkårene kan endres.", "Kommer du med bil, sjekk gjeldende vilkår før du parkerer og spør parkens personale ved behov."] }
    ],
    habitatsTitle: "Hva du kan se i Bioparc Fuengirola",
    habitatsIntro: "Områdene nedenfor er redaksjonell veiledning basert på habitatene parken beskriver. Sjekk alltid det offisielle kartet for oppdatert rute.",
    habitats: [
      { title: "Madagaskar", text: "Et område med øymiljøer og tropisk vegetasjon.", examples: ["lemurer", "tropiske fugler"] },
      { title: "Ekvatorial-Afrika", text: "Områder inspirert av fuktige skoger og afrikanske landskap.", examples: ["gorillaer", "dvergflodhester"] },
      { title: "Sørøst-Asia", text: "Tett grønt, vann og skyggefulle stier.", examples: ["tigre", "fugler"] },
      { title: "Indo-Stillehavet", text: "En rute med tropiske økosystemer og særpregede arter.", examples: ["komodovaran", "skilpadder"] },
      { title: "Sentral- og Sør-Amerika", text: "Tropisk inspirerte områder med fugler og mindre pattedyr.", examples: ["fugler", "tropiske pattedyr"] }
    ],
    animalsTitle: "Noen dyr du kan se",
    animalsNote: "Dyrenes tilstedeværelse og synlighet kan variere etter tid på dagen, vær og hvert dyrs atferd.",
    animals: [{ title: "Lemurer", text: "En gruppe som ofte forbindes med Madagaskar-området." }, { title: "Gorillaer", text: "En av de mest kjente artene i parkens afrikanske områder." }, { title: "Tiger", text: "Sjekk det offisielle kartet for å finne området." }, { title: "Komodovaran", text: "En særpreget art der synlighet kan avhenge av temperatur og veterinær håndtering." }],
    arrivalTitle: "Slik kommer du dit fra Apartamento Veramar",
    arrivalIntro: "Bioparc ligger i Fuengirola sentrum, ved rådhuset. Fra området rundt leiligheten kan besøket kombineres med en spasertur mot sentrum uten at vi viser den nøyaktige adressen her.",
    arrivalOptions: [{ icon: "walk", title: "Til fots", text: "Bra hvis du vil kombinere Bioparc med gamlebyen. TODO: bekreft faktisk gangtid fra leiligheten." }, { icon: "taxi", title: "Taxi", text: "Praktisk med små barn, varme eller redusert mobilitet." }, { icon: "car", title: "Bil", text: "Nyttig hvis du kommer fra en annen tur; sjekk vilkår for Plaza de España Parking først." }],
    mapTitle: "Orienteringskart for Bioparc Fuengirola",
    mapAria: "Kart med omtrentlig leilighetsområde, Bioparc Fuengirola og landemerker i nærheten",
    mapApartment: "Omtrentlig leilighetsområde",
    mapApartmentPopup: "Nøyaktig beliggenhet gis etter bekreftet booking.",
    mapPoints: { bioparc: "Bioparc Fuengirola", townHall: "Rådhuset", oldTown: "Gamlebyen", castle: "Sohail-slottet", parking: "Plaza de España Parking" },
    officialButtons: { official_site: "Offisiell nettside", tickets: "Kjøp billetter", hours: "Sjekk offisielle åpningstider", agenda: "Sjekk dagsprogram", parking: "Sjekk parkering", accessibility: "Sjekk tilgjengelighet", rules: "Sjekk restauranter og regler", how_to_arrive: "Offisiell veibeskrivelse" },
    bestTimeTitle: "Når er det best å besøke Bioparc?",
    bestTimeTips: ["Morgenen er ofte enklest.", "Unngå de varmeste timene på svært varme dager.", "Sjekk sesongens åpningstider før du drar.", "Se på dagsprogrammet.", "Ta med vann og solbeskyttelse.", "Sett av mer tid med små barn."],
    stayTipTitle: "Stay Fuengirola-tips",
    stayTipText: "Om sommeren er morgenen ofte mest behagelig med barn. Sjekk dagsprogrammet før du går, siden noen aktiviteter eller åpninger kan ha egne tider.",
    kidsTitle: "Er Bioparc Fuengirola verdt det med barn?",
    kidsText: "Ja, særlig hvis du ønsker en lærerik og oversiktlig aktivitet uten å forlate Fuengirola. Ruten gir rom for pauser og kan kombineres med sentrum eller strandpromenaden.",
    kidsCard: "Spesielt anbefalt for familier som ønsker en halvdagsaktivitet i Fuengirola.",
    whatToBringTitle: "Hva du bør ta med til Bioparc",
    whatToBring: ["Komfortable sko", "Vann", "Solbeskyttelse", "Caps eller hatt", "Kamera eller mobil", "Barnevogn for små barn", "Klær etter sesong"],
    stayAdviceTitle: "Stay Fuengirola-tips",
    stayAdvice: ["Kjøp billetter online i høysesong.", "Sjekk dagens program før du drar.", "Dra om morgenen i de varmeste månedene.", "Ikke planlegg et for kort besøk.", "Kombiner Bioparc med en tur gjennom gamlebyen.", "Etterpå kan du spise i sentrum eller gå tilbake mot strandpromenaden."],
    dayPlanTitle: "En dag i Fuengirola med Bioparc",
    dayPlanIntro: "Et fleksibelt eksempel, ikke en offisiell plan.",
    dayPlan: [{ time: "10:00", text: "Gå inn i Bioparc." }, { time: "13:30", text: "Lunsj i Fuengirola sentrum." }, { time: "15:30", text: "Spasertur gjennom gamlebyen." }, { time: "17:00", text: "Strandpromenade eller strand." }],
    comparisonTitle: "Rask anbefaling",
    comparison: [{ label: "Omtrentlig tid", value: "Halv dag" }, { label: "Best for", value: "Familier og dyreinteresserte" }, { label: "Beliggenhet", value: "Fuengirola sentrum" }, { label: "Tilgjengelighet", value: "Tilgjengelig rute" }, { label: "Billetter", value: "Bør sjekkes online" }, { label: "Anbefalt sesong", value: "Hele året" }],
    faqTitle: "Ofte stilte spørsmål",
    faqs: [{ question: "Hvor lang tid tar det å besøke Bioparc Fuengirola?", answer: "Som redaksjonell anbefaling bør du sette av rundt 3-4 timer hvis du vil gå rolig gjennom parken. Dette er ikke en offisiell varighet." }, { question: "Passer Bioparc Fuengirola for barn?", answer: "Ja, det er ofte en behagelig familieaktivitet på grunn av oversiktlig størrelse, pedagogisk innhold og sentral beliggenhet." }, { question: "Kan man gå inn med barnevogn?", answer: "Offisiell informasjon sier at parken kan besøkes med barnevogn." }, { question: "Er parken tilgjengelig?", answer: "Ifølge den offisielle FAQ-en er parken tilgjengelig for personer med redusert mobilitet." }, { question: "Kan man ta med mat inn?", answer: "Offisielle regler sier at mat ikke kan tas med inn, med enkelte unntak. Sjekk reglene før besøket." }, { question: "Hvor kan man parkere?", answer: "Den offisielle nettsiden nevner Plaza de España Parking og en spesialpris for kunder etter gjeldende vilkår." }, { question: "Er det bedre å kjøpe billetter online?", answer: "Det er ofte lurt å sjekke og kjøpe via den offisielle nettsiden, særlig i høysesong." }, { question: "Kan man gå dit fra leiligheten?", answer: "Bioparc ligger i Fuengirola sentrum. Fra området rundt leiligheten kan det fungere som spasertur, men nøyaktig tid må bekreftes." }],
    officialInfoTitle: "Offisiell informasjon",
    editorialNote: "Åpningstider, priser og aktiviteter kan endres. Sjekk alltid offisiell informasjon før besøket.",
    relatedTitle: "Du vil kanskje også like",
    related: [{ key: "thingsToDo", title: "Ting å gjøre i Fuengirola", text: "Flere aktiviteter nær leiligheten." }, { key: "beaches", title: "Strender", text: "Nærliggende strender for resten av dagen." }, { key: "restaurants", title: "Restauranter", text: "Ideer til mat etter besøket." }, { key: "shopping", title: "Shopping", text: "Miramar, sentrum og praktisk shopping." }, { key: "airport", title: "Fra flyplassen", text: "Alternativer fra Málaga flyplass." }],
    schemaAbout: ["Bioparc Fuengirola", "Fuengirola", "familieaktiviteter", "Costa del Sol"]
  }
};
