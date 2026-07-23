import type { GuideCategoryKey } from "@/config/guides";
import type { Locale } from "@/i18n/locales";

export type RestaurantCategory =
  | "fish"
  | "meat"
  | "mediterranean"
  | "tapas"
  | "international"
  | "romantic"
  | "families"
  | "views"
  | "mijas-pueblo"
  | "mijas-costa";

export type RestaurantFilter = "all" | RestaurantCategory;
export const restaurantFilters: RestaurantFilter[] = [
  "all",
  "fish",
  "meat",
  "mediterranean",
  "tapas",
  "international",
  "romantic",
  "families",
  "views",
  "mijas-pueblo",
  "mijas-costa"
];

type BadgeKey = "stay" | "families" | "special" | "fish" | "views" | "walk" | "mijas" | "international";

export type Restaurant = {
  id: string;
  name: string;
  type: string;
  description: string;
  special: string;
  order: string;
  recommendedFor: string;
  atmosphere: string;
  location: string;
  tip: string;
  address: string;
  hours: string;
  phone?: string;
  website?: string;
  mapUrl: string;
  categories: RestaurantCategory[];
  badges: BadgeKey[];
  price: "€" | "€€" | "€€€";
  reserve: string;
  coordinates: { lat: number; lng: number };
  action: "website" | "location";
  source: string;
};

export type RestaurantGuideContent = {
  metaTitle: string;
  metaDescription: string;
  breadcrumbGuide: string;
  breadcrumbArticle: string;
  backLabel: string;
  kicker: string;
  h1: string;
  intro: string;
  labels: {
    filters: string;
    type: string;
    special: string;
    order: string;
    recommendedFor: string;
    atmosphere: string;
    location: string;
    address: string;
    hours: string;
    phone: string;
    tip: string;
    price: string;
    reserve: string;
    visitWebsite: string;
    viewLocation: string;
    noResults: string;
    mapButton: string;
    sourceNote: string;
  };
  filterLabels: Record<RestaurantFilter, string>;
  badgeLabels: Record<BadgeKey, string>;
  restaurants: Restaurant[];
  chooserTitle: string;
  chooserIntro: string;
  chooserItems: Array<{ icon: string; label: string; restaurantId: string; text: string }>;
  favoritesTitle: string;
  favoritesIntro: string;
  favorites: Array<{ restaurantId: string; title: string; text: string }>;
  mapTitle: string;
  mapIntro: string;
  mapAria: string;
  comparisonTitle: string;
  comparisonHeaders: { restaurant: string; type: string; ideal: string; price: string; reserve: string; zone: string };
  routesTitle: string;
  routes: Array<{ title: string; text: string; restaurantIds: string[] }>;
  tipsTitle: string;
  tips: string[];
  faqTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  relatedTitle: string;
  related: Array<{ key: GuideCategoryKey; title: string; text: string }>;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  schemaAbout: string[];
};

const coreRestaurants = [
  {
    id: "casa-diego",
    name: "Freiduría Casa Diego",
    address: "Zona centro de Fuengirola",
    hours: "Horario aproximado: almuerzo y cena. Confirmar antes de ir.",
    mapUrl: "https://www.openstreetmap.org/search?query=Freidur%C3%ADa%20Casa%20Diego%20Fuengirola",
    categories: ["fish", "tapas", "families"] as RestaurantCategory[],
    badges: ["stay", "fish", "walk"] as BadgeKey[],
    price: "€€" as const,
    reserve: "Opcional",
    coordinates: { lat: 36.5369, lng: -4.6257 },
    action: "location" as const,
    source: "Existing local guide entry, current schedule to confirm"
  },
  {
    id: "donnys-bar",
    name: "Donny's Bar",
    address: "Zona centro de Fuengirola",
    hours: "Horario aproximado: almuerzo y cena. Confirmar antes de ir.",
    mapUrl: "https://www.openstreetmap.org/search?query=Donny%27s%20Bar%20Fuengirola",
    categories: ["meat", "families", "international"] as RestaurantCategory[],
    badges: ["families", "walk"] as BadgeKey[],
    price: "€€" as const,
    reserve: "Recomendable en fines de semana",
    coordinates: { lat: 36.5386, lng: -4.6256 },
    action: "location" as const,
    source: "Existing local guide entry, current schedule to confirm"
  },
  {
    id: "los-marinos-jose",
    name: "Los Marinos José",
    address: "Paseo Marítimo Rey de España 161, Fuengirola",
    hours: "Horario variable de servicio. Confirmar en la web oficial.",
    phone: "+34 952 66 10 12",
    website: "https://losmarinosjose.com/",
    mapUrl: "https://www.openstreetmap.org/search?query=Los%20Marinos%20Jos%C3%A9%20Fuengirola",
    categories: ["fish", "mediterranean", "romantic", "views"] as RestaurantCategory[],
    badges: ["fish", "views", "special"] as BadgeKey[],
    price: "€€€" as const,
    reserve: "Sí",
    coordinates: { lat: 36.5677, lng: -4.5942 },
    action: "website" as const,
    source: "Michelin Guide and official website"
  },
  {
    id: "charolais",
    name: "Charolais",
    address: "Calle Larga 14, Fuengirola",
    hours: "Horario de almuerzo y cena según temporada. Confirmar en la web oficial.",
    phone: "+34 952 47 54 41",
    website: "https://www.bodegacharolais.com/",
    mapUrl: "https://www.openstreetmap.org/search?query=Charolais%20Calle%20Larga%2014%20Fuengirola",
    categories: ["mediterranean", "tapas", "meat", "romantic"] as RestaurantCategory[],
    badges: ["stay", "special", "walk"] as BadgeKey[],
    price: "€€€" as const,
    reserve: "Sí",
    coordinates: { lat: 36.5389, lng: -4.6244 },
    action: "website" as const,
    source: "Michelin Guide and official website"
  },
  {
    id: "palangreros",
    name: "Restaurante Palangreros",
    address: "Calle Palangreros 22, Fuengirola",
    hours: "Horario principalmente de cena. Confirmar en su web o ficha oficial.",
    phone: "+34 952 58 69 57",
    website: "https://www.palangreros.com/",
    mapUrl: "https://www.openstreetmap.org/search?query=Restaurante%20Palangreros%20Fuengirola",
    categories: ["mediterranean", "romantic", "families"] as RestaurantCategory[],
    badges: ["special", "walk"] as BadgeKey[],
    price: "€€" as const,
    reserve: "Sí",
    coordinates: { lat: 36.5376, lng: -4.6239 },
    action: "website" as const,
    source: "Tripadvisor and official profile"
  },
  {
    id: "ferrum",
    name: "Ferrum Restaurante Fuengirola",
    address: "Calle Moncayo 20, Fuengirola",
    hours: "Horario variable. Consultar el horario actualizado antes de reservar.",
    phone: "+34 604 29 94 43",
    website: "https://ferrumrestaurante.com/",
    mapUrl: "https://www.openstreetmap.org/search?query=Ferrum%20Restaurante%20Fuengirola",
    categories: ["mediterranean", "romantic", "international"] as RestaurantCategory[],
    badges: ["special"] as BadgeKey[],
    price: "€€€" as const,
    reserve: "Sí",
    coordinates: { lat: 36.5404, lng: -4.6236 },
    action: "website" as const,
    source: "Tripadvisor and official profile"
  },
  {
    id: "arrozante",
    name: "Arrozante Fuengirola",
    address: "Calle Miguel Márquez 43, Fuengirola",
    hours: "Horario de restaurante según temporada. Confirmar disponibilidad.",
    website: "https://www.barcelo.com/es-es/hotel-occidental-fuengirola/restaurantes-bares/arrozante/",
    mapUrl: "https://www.openstreetmap.org/search?query=Arrozante%20Fuengirola",
    categories: ["mediterranean", "families", "views"] as RestaurantCategory[],
    badges: ["families", "views", "walk"] as BadgeKey[],
    price: "€€" as const,
    reserve: "Recomendable",
    coordinates: { lat: 36.5354, lng: -4.6269 },
    action: "website" as const,
    source: "TheFork and official hotel page"
  },
  {
    id: "o-mamma-mia",
    name: "O Mamma Mia",
    address: "Calle de la Cruz 23, Fuengirola",
    hours: "Horario amplio de restaurante. Confirmar antes de ir.",
    mapUrl: "https://www.openstreetmap.org/search?query=O%20Mamma%20Mia%20Calle%20de%20la%20Cruz%2023%20Fuengirola",
    categories: ["international", "families"] as RestaurantCategory[],
    badges: ["families", "international", "walk"] as BadgeKey[],
    price: "€€" as const,
    reserve: "Recomendable",
    coordinates: { lat: 36.5419, lng: -4.6228 },
    action: "location" as const,
    source: "TheFork"
  },
  {
    id: "taco-tikka",
    name: "Taco Tikka",
    address: "Paseo Marítimo Rey de España 63, Fuengirola",
    hours: "Horario de comida y cena. Confirmar en la ficha antes de ir.",
    mapUrl: "https://www.openstreetmap.org/search?query=Taco%20Tikka%20Fuengirola",
    categories: ["international", "families", "views"] as RestaurantCategory[],
    badges: ["international", "views"] as BadgeKey[],
    price: "€€" as const,
    reserve: "Opcional",
    coordinates: { lat: 36.5461, lng: -4.6199 },
    action: "location" as const,
    source: "TheFork"
  },
  {
    id: "la-farola",
    name: "Restaurante La Farola",
    address: "Calle Cuesta 15, Fuengirola",
    hours: "Lunes a sábado por la noche según ficha. Confirmar antes de reservar.",
    phone: "+34 952 46 14 64",
    website: "https://www.lafarolafuengirola.com/",
    mapUrl: "https://www.openstreetmap.org/search?query=Restaurante%20La%20Farola%20Fuengirola",
    categories: ["mediterranean", "international", "romantic"] as RestaurantCategory[],
    badges: ["special", "walk"] as BadgeKey[],
    price: "€€" as const,
    reserve: "Sí",
    coordinates: { lat: 36.5399, lng: -4.6238 },
    action: "website" as const,
    source: "Tripadvisor and official profile"
  },
  {
    id: "dedos-thai-fusion",
    name: "DeDos Thai-Fusion GastroBar",
    address: "Calle San Francisco 1, Fuengirola",
    hours: "Horario de comida y cena. Confirmar antes de ir.",
    mapUrl: "https://www.openstreetmap.org/search?query=DeDos%20Thai-Fusion%20GastroBar%20Fuengirola",
    categories: ["international", "romantic", "tapas"] as RestaurantCategory[],
    badges: ["international", "special", "walk"] as BadgeKey[],
    price: "€€" as const,
    reserve: "Recomendable",
    coordinates: { lat: 36.5397, lng: -4.6248 },
    action: "location" as const,
    source: "TheFork"
  },
  {
    id: "koco-bistro",
    name: "Koco Bistro",
    address: "Plaza Virgen de la Peña 3, Mijas Pueblo",
    hours: "Martes a sábado según ficha. Domingo y lunes suelen cerrar.",
    phone: "+34 952 48 61 52",
    website: "https://kocobistro.com/",
    mapUrl: "https://www.openstreetmap.org/search?query=Koco%20Bistro%20Mijas%20Pueblo",
    categories: ["mediterranean", "international", "tapas", "mijas-pueblo"] as RestaurantCategory[],
    badges: ["mijas", "international", "special"] as BadgeKey[],
    price: "€€" as const,
    reserve: "Sí",
    coordinates: { lat: 36.5952, lng: -4.6372 },
    action: "website" as const,
    source: "Tripadvisor and official website"
  },
  {
    id: "el-oceano",
    name: "El Oceano",
    address: "Ctra. Cádiz km 1026, Torrenueva, Mijas Costa",
    hours: "Temporada y horarios variables. Confirmar en la web oficial.",
    phone: "+34 952 58 75 50",
    website: "https://www.oceanohotel.com/es/restaurant",
    mapUrl: "https://www.openstreetmap.org/search?query=El%20Oceano%20Beach%20Hotel%20Restaurant%20Mijas%20Costa",
    categories: ["mediterranean", "romantic", "views", "mijas-costa"] as RestaurantCategory[],
    badges: ["views", "special", "mijas"] as BadgeKey[],
    price: "€€€" as const,
    reserve: "Sí",
    coordinates: { lat: 36.4974, lng: -4.7015 },
    action: "website" as const,
    source: "Official website and Tripadvisor"
  }
];

type RestaurantCopy = Record<
  string,
  Omit<Restaurant, "address" | "hours" | "phone" | "website" | "mapUrl" | "categories" | "badges" | "price" | "reserve" | "coordinates" | "action" | "source">
>;

const esRestaurants: RestaurantCopy = {
  "casa-diego": { id: "casa-diego", name: "Freiduría Casa Diego", type: "Pescaíto frito y marisco", description: "Una opción sencilla y muy local para comer pescaíto, fritura y marisco sin complicarse. Encaja bien cuando apetece una comida informal cerca del apartamento.", special: "Producto de costa, raciones para compartir y ambiente directo, de freiduría tradicional.", order: "Boquerones, calamares, fritura variada y alguna ración de marisco según temporada.", recommendedFor: "Parejas y familias que quieren probar pescado en Fuengirola sin una cena larga.", atmosphere: "Informal, local y animado.", location: "Centro de Fuengirola, práctico desde el apartamento.", tip: "Ve con hambre y pide varias raciones al centro para compartir." },
  "donnys-bar": { id: "donnys-bar", name: "Donny's Bar", type: "Carne, costillas y comida familiar", description: "Un lugar cómodo para alternar pescado y cocina mediterránea con algo más contundente. Funciona bien para cenas relajadas, costillas, carnes y platos generosos.", special: "Ambiente familiar, platos abundantes y una relación calidad-precio práctica para vacaciones.", order: "Costillas, carnes a la parrilla y patata rellena si está disponible.", recommendedFor: "Familias, grupos pequeños y huéspedes que quieren una cena fácil.", atmosphere: "Relajado, cercano y sin formalidades.", location: "Zona céntrica de Fuengirola.", tip: "Buena opción para una noche en la que quieres comer bien sin planificar demasiado." },
  "los-marinos-jose": { id: "los-marinos-jose", name: "Los Marinos José", type: "Pescado y marisco", description: "Uno de los nombres más conocidos de Fuengirola para pescado y marisco. Está en la zona de Carvajal, junto al paseo marítimo, y merece reservarlo para una comida especial.", special: "Selección de pescado, marisco y cocina de producto con mucha identidad marinera.", order: "Pescado del día, marisco, conchas y arroces marineros si están disponibles.", recommendedFor: "Amantes del pescado, parejas y ocasiones especiales.", atmosphere: "Cuidado, marinero y más gastronómico.", location: "Carvajal, al este de Fuengirola.", tip: "Reserva y pregunta por el producto del día antes de decidir." },
  charolais: { id: "charolais", name: "Charolais", type: "Mediterráneo, tapas y cocina tradicional", description: "Un clásico del centro que combina restaurante, barra y tapas con una cocina de raíz andaluza y guiños vascos. Es útil tanto para tapear como para sentarse con calma.", special: "Tapas elaboradas, producto cuidado y una ubicación muy cómoda en el casco urbano.", order: "Tapas, raciones para compartir, carnes y platos de temporada.", recommendedFor: "Parejas, cenas especiales y huéspedes que quieren una dirección céntrica con oficio.", atmosphere: "Elegante pero cercano.", location: "Centro de Fuengirola.", tip: "Si no quieres una cena larga, prueba la zona de tapas." },
  palangreros: { id: "palangreros", name: "Restaurante Palangreros", type: "Mediterráneo", description: "Restaurante céntrico con cocina mediterránea y española, buen formato para una cena tranquila durante la estancia.", special: "Carta amplia, atención cuidada y ambiente cómodo para sentarse sin prisas.", order: "Entrantes para compartir, carnes, pescados y platos mediterráneos.", recommendedFor: "Parejas, familias adultas y cenas cerca del centro.", atmosphere: "Acogedor y tranquilo.", location: "Centro, cerca de la Plaza Chinorros.", tip: "Reserva si vas en fin de semana o temporada alta." },
  ferrum: { id: "ferrum", name: "Ferrum Restaurante Fuengirola", type: "Mediterráneo contemporáneo", description: "Una opción más actual para una comida o cena especial en Fuengirola. Conviene consultar el horario actualizado antes de organizar la salida.", special: "Cocina mediterránea con presentación cuidada y enfoque más gastronómico.", order: "Menú o platos de temporada, carnes y propuestas creativas.", recommendedFor: "Una ocasión especial o una cena tranquila en pareja.", atmosphere: "Cuidado, íntimo y moderno.", location: "Zona centro de Fuengirola.", tip: "Comprueba horario y reserva con antelación." },
  arrozante: { id: "arrozante", name: "Arrozante Fuengirola", type: "Arroces y mediterráneo", description: "Buena alternativa para quienes quieren arroz, paella o sabores mediterráneos cerca de la zona del Castillo y Miramar.", special: "Especialización en arroces y ubicación práctica para combinar con playa o paseo.", order: "Arroces, entrantes mediterráneos y pescado.", recommendedFor: "Familias, comidas de mediodía y grupos pequeños.", atmosphere: "Luminoso, cómodo y vacacional.", location: "Zona Sohail y paseo marítimo.", tip: "Mejor para comer al mediodía que para improvisar tarde." },
  "o-mamma-mia": { id: "o-mamma-mia", name: "O Mamma Mia", type: "Italiano", description: "Una opción fácil para pasta, pizza y cocina italiana en el centro. Muy útil con niños o cuando todos quieren algo reconocible.", special: "Carta italiana amplia y ubicación céntrica.", order: "Pasta, pizza, ensaladas y platos italianos clásicos.", recommendedFor: "Familias, niños y cenas informales.", atmosphere: "Animado y familiar.", location: "Centro de Fuengirola.", tip: "Tenlo como recurso seguro para una noche sencilla." },
  "taco-tikka": { id: "taco-tikka", name: "Taco Tikka", type: "Internacional", description: "Una parada diferente en el paseo marítimo para quienes quieren salir del pescado y las tapas tradicionales.", special: "Mezcla internacional en una zona cómoda para caminar junto al mar.", order: "Platos especiados, opciones para compartir y propuestas internacionales.", recommendedFor: "Huéspedes que quieren variedad durante una estancia larga.", atmosphere: "Informal y con ritmo de paseo marítimo.", location: "Paseo marítimo de Fuengirola.", tip: "Buena idea para una cena ligera después de caminar por la playa." },
  "la-farola": { id: "la-farola", name: "Restaurante La Farola", type: "Mediterráneo e internacional", description: "Restaurante céntrico para una cena tranquila, con cocina mediterránea e internacional y ambiente de noche.", special: "Carta accesible, opciones variadas y formato cómodo para parejas.", order: "Pescados, carnes, entrantes y platos internacionales.", recommendedFor: "Parejas y cenas sin prisa.", atmosphere: "Clásico, acogedor y nocturno.", location: "Centro de Fuengirola.", tip: "Comprueba el horario porque suele orientarse a cenas." },
  "dedos-thai-fusion": { id: "dedos-thai-fusion", name: "DeDos Thai-Fusion GastroBar", type: "Thai-fusión e internacional", description: "Una propuesta distinta para quienes buscan sabores asiáticos o platos de fusión sin salir del centro.", special: "Sabores internacionales, formato informal y platos para compartir.", order: "Currys, noodles, entrantes asiáticos y platos de fusión.", recommendedFor: "Parejas, amigos y estancias largas en las que apetece variar.", atmosphere: "Pequeño, informal y creativo.", location: "Centro de Fuengirola.", tip: "Reserva si quieres ir en hora punta." },
  "koco-bistro": { id: "koco-bistro", name: "Koco Bistro", type: "Mediterráneo internacional", description: "Una dirección interesante para completar una excursión a Mijas Pueblo. No está en Fuengirola, pero encaja muy bien en una tarde de miradores y calles blancas.", special: "Cocina mediterránea e internacional en pleno Mijas Pueblo.", order: "Tapas, platos mediterráneos y opciones para compartir.", recommendedFor: "Parejas y viajeros que visitan Mijas Pueblo.", atmosphere: "Acogedor y cosmopolita.", location: "Mijas Pueblo.", tip: "Combínalo con una visita al pueblo al atardecer." },
  "el-oceano": { id: "el-oceano", name: "El Oceano", type: "Mediterráneo con vistas", description: "Restaurante de Mijas Costa con ambiente cuidado y vistas al mar. Es más para una salida especial que para una comida rápida.", special: "Ubicación frente al mar, servicio de temporada y un ambiente elegante.", order: "Pescado, platos mediterráneos y opciones de temporada.", recommendedFor: "Cena especial, aniversario o comida con vistas.", atmosphere: "Elegante, costero y tranquilo.", location: "Mijas Costa, zona La Cala/Torrenueva.", tip: "Consulta temporada y reserva antes de desplazarte." }
};

const commonCopies: Record<Locale, RestaurantCopy> = {
  es: esRestaurants,
  en: translateRestaurants({
    "casa-diego": ["Fried fish and seafood", "A simple, local-feeling place for fried fish, seafood and shared plates. It works well when you want an informal meal close to the apartment.", "Coastal product, sharing plates and the feel of a traditional freiduría.", "Anchovies, calamari, mixed fried fish and seasonal seafood.", "Couples and families who want to try fish in Fuengirola without a long dinner.", "Informal, local and lively.", "Fuengirola centre, practical from the apartment.", "Order several plates for the table and share."],
    "donnys-bar": ["Meat, ribs and family food", "A comfortable option when you want a change from fish and Mediterranean food. Good for relaxed dinners, ribs and generous plates.", "Family atmosphere, filling dishes and a practical holiday price-quality balance.", "Ribs, grilled meats and stuffed potato when available.", "Families, small groups and guests who want an easy dinner.", "Relaxed, friendly and unfussy.", "Central Fuengirola.", "Keep it in mind for a night when you want dinner without overplanning."],
    "los-marinos-jose": ["Fish and seafood", "One of Fuengirola's well-known names for fish and seafood. It is in Carvajal by the promenade and is worth saving for a special meal.", "Seafood, fish and product-led cooking with a strong coastal identity.", "Catch of the day, shellfish and seafood rice dishes when available.", "Fish lovers, couples and special occasions.", "Polished, maritime and gastronomic.", "Carvajal, east Fuengirola.", "Book ahead and ask what is best that day."],
    charolais: ["Mediterranean, tapas and traditional cuisine", "A central classic combining restaurant, bar and tapas with Andalusian roots and Basque touches.", "Elaborate tapas, careful produce and a very convenient town-centre location.", "Tapas, shared plates, meats and seasonal dishes.", "Couples, special dinners and guests who want a skilled central address.", "Elegant but warm.", "Fuengirola centre.", "If you do not want a long dinner, try the tapas area."],
    palangreros: ["Mediterranean", "A central restaurant with Spanish and Mediterranean cooking, suitable for a calm dinner during your stay.", "Varied menu, attentive service and a comfortable pace.", "Shared starters, meat, fish and Mediterranean dishes.", "Couples, adult families and dinners near the centre.", "Cosy and relaxed.", "Centre, near Plaza Chinorros.", "Book at weekends or in high season."],
    ferrum: ["Contemporary Mediterranean", "A more current choice for a special lunch or dinner in Fuengirola. Check the latest opening times before planning.", "Mediterranean cooking with careful presentation and a more gastronomic feel.", "Seasonal menu items, meats and creative dishes.", "A special occasion or quiet dinner as a couple.", "Polished, intimate and modern.", "Fuengirola centre area.", "Check times and reserve in advance."],
    arrozante: ["Rice dishes and Mediterranean", "A good alternative for rice, paella-style dishes and Mediterranean flavours near the Castle and Miramar area.", "Focus on rice dishes and a practical location for beach or promenade plans.", "Rice dishes, Mediterranean starters and fish.", "Families, lunch plans and small groups.", "Bright, comfortable and holiday-like.", "Sohail and promenade area.", "Better for lunch than a last-minute late meal."],
    "o-mamma-mia": ["Italian", "An easy central option for pasta, pizza and Italian food. Useful with children or when everyone wants something familiar.", "Broad Italian menu and central location.", "Pasta, pizza, salads and classic Italian dishes.", "Families, children and informal dinners.", "Lively and family-friendly.", "Fuengirola centre.", "A safe option for a simple evening."],
    "taco-tikka": ["International", "A different stop on the promenade when you want a break from fish and traditional tapas.", "International flavours in an easy area for a walk by the sea.", "Spiced dishes, sharing plates and international options.", "Guests who want variety during a longer stay.", "Informal, promenade-style and relaxed.", "Fuengirola promenade.", "Good for a lighter dinner after a beach walk."],
    "la-farola": ["Mediterranean and international", "A central restaurant for a quiet dinner, with Mediterranean and international cooking and an evening feel.", "Accessible menu, varied options and a comfortable format for couples.", "Fish, meat, starters and international dishes.", "Couples and unhurried dinners.", "Classic, cosy and dinner-focused.", "Fuengirola centre.", "Check times as it is mainly an evening option."],
    "dedos-thai-fusion": ["Thai-fusion and international", "A different proposal for Asian flavours or fusion plates without leaving the centre.", "International flavours, informal format and sharing dishes.", "Curries, noodles, Asian starters and fusion dishes.", "Couples, friends and long stays when you want variety.", "Small, informal and creative.", "Fuengirola centre.", "Reserve if you plan to go at peak time."],
    "koco-bistro": ["International Mediterranean", "An interesting address to complete a visit to Mijas Pueblo. It is not in Fuengirola, but fits a white-village afternoon very well.", "Mediterranean and international cooking in the heart of Mijas Pueblo.", "Tapas, Mediterranean plates and sharing options.", "Couples and travellers visiting Mijas Pueblo.", "Cosy and cosmopolitan.", "Mijas Pueblo.", "Combine it with sunset viewpoints in the village."],
    "el-oceano": ["Mediterranean with sea views", "A Mijas Costa restaurant with a polished atmosphere and sea views. More for a special outing than a quick meal.", "Seafront setting, seasonal service and an elegant mood.", "Fish, Mediterranean dishes and seasonal options.", "Special dinner, anniversary or meal with views.", "Elegant, coastal and calm.", "Mijas Costa, La Cala/Torrenueva area.", "Check the season and book before driving there."]
  }),
  fi: translateRestaurants({
    "casa-diego": ["Paistettua kalaa ja merenantimia", "Paikallinen ja mutkaton paikka, kun haluat paistettua kalaa, merenantimia ja jaettavia annoksia lahella asuntoa.", "Rannikon tuotteet, jaettavat annokset ja perinteisen freidurian tunnelma.", "Boquerones, calamari, erilaiset paistetut kalat ja kauden merenantimet.", "Pariskunnille ja perheille, jotka haluavat maistaa Fuengirolan kalatarjontaa rennosti.", "Rentoa, paikallista ja elavaa.", "Fuengirolan keskusta, kaytannollinen asunnolta.", "Tilaa useita annoksia keskelle poytaa ja jaa."],
    "donnys-bar": ["Lihaa, ribseja ja perheruokaa", "Mukava vaihtoehto, kun haluat vaihtelua kalaan ja valimerelliseen ruokaan. Sopii rentoon iltaan ja runsaisiin annoksiin.", "Perheystavallinen tunnelma, tayttavat annokset ja lomalle sopiva hinta-laatusuhde.", "Ribsit, grillilihat ja taytetty peruna, jos sita on saatavilla.", "Perheille, pienille ryhmille ja helppoa illallista etsiville.", "Rento, laheinen ja konstailematon.", "Fuengirolan keskusta.", "Hyva valinta iltaan, jolloin et halua suunnitella liikaa."],
    "los-marinos-jose": ["Kala ja merenantimet", "Yksi Fuengirolan tunnetuista kala- ja merenantimipaikoista. Sijaitsee Carvajalissa rantakadun varrella ja sopii erityiseen ateriaan.", "Kala, merenantimet ja raaka-aineisiin keskittyva rannikkokeittio.", "Paivan kala, simpukat, merenantimet ja merelliset riisiruoat saatavuuden mukaan.", "Kalan ystaville, pariskunnille ja erityisiin hetkiin.", "Huoliteltu, merellinen ja gastronominen.", "Carvajal, Fuengirolan itapuoli.", "Varaa etukateen ja kysy paivan parhaat tuotteet."],
    charolais: ["Valimerellinen, tapas ja perinteinen keittio", "Keskustan klassikko, jossa yhdistyvat ravintola, baari ja tapas andalusialaisilla juurilla ja baskivaikutteilla.", "Huolitellut tapakset, laadukkaat raaka-aineet ja hyvin keskeinen sijainti.", "Tapakset, jaettavat annokset, lihat ja kauden ruoat.", "Pariskunnille, erikoisillallisille ja keskustan varmaa osoitetta etsiville.", "Tyylikas mutta lammin.", "Fuengirolan keskusta.", "Jos et halua pitkaa illallista, kokeile tapas-puolta."],
    palangreros: ["Valimerellinen", "Keskustan ravintola espanjalaisella ja valimerellisella keittiolla, sopiva rauhalliseen illalliseen.", "Monipuolinen lista, huomaavainen palvelu ja kiireeton tunnelma.", "Jaettavat alkupalat, liha, kala ja valimerelliset annokset.", "Pariskunnille, aikuisille perheille ja keskustan illallisille.", "Kodikas ja rauhallinen.", "Keskusta, lahella Plaza Chinorrosia.", "Varaa viikonloppuisin ja sesongissa."],
    ferrum: ["Moderni valimerellinen", "Nykyaikaisempi vaihtoehto erityiseen lounaaseen tai illalliseen Fuengirolassa. Tarkista ajantasaiset aukioloajat ennen suunnitelmaa.", "Valimerellinen keittio, huoliteltu esillepano ja gastronomisempi ote.", "Kauden annokset, lihat ja luovat vaihtoehdot.", "Erityiseen hetkeen tai rauhalliseen illalliseen kahdestaan.", "Huoliteltu, intiimi ja moderni.", "Fuengirolan keskusta-alue.", "Tarkista ajat ja varaa etukateen."],
    arrozante: ["Riisiruoat ja valimerellinen", "Hyva vaihtoehto riisiruokiin ja valimerellisiin makuihin Sohailin linnan ja Miramarin alueella.", "Riisiruokiin keskittyva konsepti ja kaytannollinen sijainti ranta- tai rantakatupaivaan.", "Riisiruoat, valimerelliset alkupalat ja kala.", "Perheille, lounaalle ja pienille ryhmille.", "Valoisa, mukava ja lomamainen.", "Sohailin ja rantakadun alue.", "Sopii paremmin lounaalle kuin myohaiseen improvisointiin."],
    "o-mamma-mia": ["Italialainen", "Helppo keskustavaihtoehto pastalle, pizzalle ja italialaiselle ruoalle. Hyodyllinen lasten kanssa.", "Laaja italialainen lista ja keskeinen sijainti.", "Pasta, pizza, salaatit ja klassiset italialaiset annokset.", "Perheille, lapsille ja rennoille illallisille.", "Vilkas ja perheystavallinen.", "Fuengirolan keskusta.", "Turvallinen valinta yksinkertaiseen iltaan."],
    "taco-tikka": ["Kansainvalinen", "Erilainen pysahdys rantakadulla, kun haluat tauon kalasta ja perinteisista tapaksista.", "Kansainvalisia makuja alueella, jossa on helppo kavella meren aarella.", "Mausteiset annokset, jaettavat ruoat ja kansainvaliset vaihtoehdot.", "Pitkan oleskelun vieraille, jotka haluavat vaihtelua.", "Rento ja rantakadun henkinen.", "Fuengirolan rantakatu.", "Hyva kevyempaan illalliseen rantakavelyn jalkeen."],
    "la-farola": ["Valimerellinen ja kansainvalinen", "Keskustan ravintola rauhalliseen illalliseen, valimerellisella ja kansainvalisella keittiolla.", "Helposti lahestyttava lista, monipuoliset vaihtoehdot ja mukava muoto pariskunnille.", "Kala, liha, alkupalat ja kansainvaliset annokset.", "Pariskunnille ja kiireettomiin illallisiin.", "Klassinen, kodikas ja iltapainotteinen.", "Fuengirolan keskusta.", "Tarkista ajat, koska paikka painottuu illalliseen."],
    "dedos-thai-fusion": ["Thai-fuusio ja kansainvalinen", "Eri tyyppinen vaihtoehto aasialaisille mauille tai fuusioannoksille keskustassa.", "Kansainvaliset maut, rento formaatti ja jaettavat annokset.", "Curryt, nuudelit, aasialaiset alkupalat ja fuusioannokset.", "Pariskunnille, ystaville ja pitkille oleskeluille.", "Pieni, rento ja luova.", "Fuengirolan keskusta.", "Varaa, jos menet suosittuun aikaan."],
    "koco-bistro": ["Kansainvalinen valimerellinen", "Mielenkiintoinen osoite Mijas Pueblon retken yhteyteen. Ei ole Fuengirolassa, mutta sopii hyvin valkoisen kylän iltapaivaan.", "Valimerellinen ja kansainvalinen keittio Mijas Pueblon sydamessa.", "Tapakset, valimerelliset annokset ja jaettavat vaihtoehdot.", "Pariskunnille ja Mijas Pueblossa vieraileville.", "Kodikas ja kosmopoliittinen.", "Mijas Pueblo.", "Yhdista vierailuun nakalapaikoilla auringonlaskun aikaan."],
    "el-oceano": ["Valimerellinen merinakymin", "Mijas Costan ravintola, jossa on huoliteltu tunnelma ja merinakyma. Sopii erityiseen iltaan paremmin kuin nopeaan ateriaan.", "Sijainti meren aarella, kausipalvelu ja elegantti tunnelma.", "Kala, valimerelliset annokset ja kauden vaihtoehdot.", "Erityinen illallinen, juhlahetki tai ateria nakymilla.", "Elegantti, rannikkomainen ja rauhallinen.", "Mijas Costa, La Cala/Torrenueva.", "Tarkista kausi ja varaa ennen lahtoa."]
  }),
  sv: translateRestaurants({
    "casa-diego": ["Friterad fisk och skaldjur", "Ett enkelt och lokalt alternativ för friterad fisk, skaldjur och delade rätter nära lägenheten.", "Kustnära råvaror, rätter att dela och känslan av en traditionell freiduría.", "Boquerones, calamari, blandad friterad fisk och säsongens skaldjur.", "Par och familjer som vill prova fisk i Fuengirola utan en lång middag.", "Informellt, lokalt och livligt.", "Fuengirolas centrum, praktiskt från lägenheten.", "Beställ flera rätter till bordet och dela."],
    "donnys-bar": ["Kött, ribs och familjemat", "Ett bekvämt val när du vill variera från fisk och medelhavsmat. Passar för avslappnade middagar och generösa portioner.", "Familjär stämning, mättande rätter och praktisk prisnivå för semestern.", "Ribs, grillat kött och fylld potatis när det finns.", "Familjer, små grupper och gäster som vill ha en enkel middag.", "Avslappnat, vänligt och okomplicerat.", "Centrala Fuengirola.", "Bra för en kväll när du vill äta gott utan att planera för mycket."],
    "los-marinos-jose": ["Fisk och skaldjur", "Ett av Fuengirolas mer kända namn för fisk och skaldjur. Ligger i Carvajal vid strandpromenaden och passar för en speciell måltid.", "Fisk, skaldjur och råvarufokuserad matlagning med tydlig havskänsla.", "Dagens fisk, skaldjur och marina risrätter när de finns.", "Fiskälskare, par och speciella tillfällen.", "Välvårdat, marint och gastronomiskt.", "Carvajal, östra Fuengirola.", "Boka i förväg och fråga vad som är bäst den dagen."],
    charolais: ["Medelhav, tapas och traditionellt", "En klassiker i centrum med restaurang, bar och tapas, andalusiska rötter och baskiska influenser.", "Arbetade tapas, fina råvaror och ett mycket centralt läge.", "Tapas, delade rätter, kött och säsongsrätter.", "Par, speciella middagar och gäster som vill ha en trygg adress i centrum.", "Elegant men varm.", "Fuengirolas centrum.", "Om du inte vill ha en lång middag, prova tapasdelen."],
    palangreros: ["Medelhav", "En central restaurang med spansk och medelhavsinspirerad mat, lämplig för en lugn middag.", "Varierad meny, omtänksam service och behagligt tempo.", "Förrätter att dela, kött, fisk och medelhavsrätter.", "Par, vuxna familjer och middagar nära centrum.", "Mysigt och lugnt.", "Centrum, nära Plaza Chinorros.", "Boka på helger och under högsäsong."],
    ferrum: ["Modern medelhavsmat", "Ett mer samtida val för en särskild lunch eller middag i Fuengirola. Kontrollera aktuella öppettider före besöket.", "Medelhavsmat med omsorgsfull presentation och mer gastronomisk känsla.", "Säsongsrätter, kött och kreativa alternativ.", "Ett speciellt tillfälle eller lugn middag för två.", "Välvårdat, intimt och modernt.", "Centrala Fuengirola.", "Kontrollera tider och boka i förväg."],
    arrozante: ["Risrätter och medelhav", "Ett bra alternativ för risrätter och medelhavssmaker nära slottet och Miramar.", "Fokus på risrätter och ett praktiskt läge för strand eller promenad.", "Risrätter, medelhavsförrätter och fisk.", "Familjer, luncher och små grupper.", "Ljust, bekvämt och semesterkänsla.", "Sohail och strandpromenaden.", "Bättre för lunch än för sen spontan middag."],
    "o-mamma-mia": ["Italienskt", "Ett enkelt centralt val för pasta, pizza och italiensk mat. Praktiskt med barn eller när alla vill ha något bekant.", "Bred italiensk meny och centralt läge.", "Pasta, pizza, sallader och klassiska italienska rätter.", "Familjer, barn och informella middagar.", "Livligt och familjevänligt.", "Fuengirolas centrum.", "Ett säkert kort för en enkel kväll."],
    "taco-tikka": ["Internationellt", "Ett annorlunda stopp på strandpromenaden när du vill ta paus från fisk och traditionella tapas.", "Internationella smaker i ett område som är lätt att promenera vid havet.", "Kryddiga rätter, delningsrätter och internationella alternativ.", "Gäster som vill ha variation under en längre vistelse.", "Informellt och avslappnat vid strandpromenaden.", "Fuengirolas strandpromenad.", "Bra för en lättare middag efter en strandpromenad."],
    "la-farola": ["Medelhav och internationellt", "En central restaurang för lugn middag med medelhavs- och internationell mat.", "Tillgänglig meny, varierade alternativ och ett bekvämt format för par.", "Fisk, kött, förrätter och internationella rätter.", "Par och middagar utan stress.", "Klassiskt, mysigt och kvällsfokuserat.", "Fuengirolas centrum.", "Kontrollera tiderna eftersom den främst passar kväll."],
    "dedos-thai-fusion": ["Thai-fusion och internationellt", "Ett annat alternativ för asiatiska smaker eller fusionrätter utan att lämna centrum.", "Internationella smaker, informellt format och rätter att dela.", "Curryrätter, nudlar, asiatiska förrätter och fusion.", "Par, vänner och längre vistelser där du vill variera.", "Litet, informellt och kreativt.", "Fuengirolas centrum.", "Boka om du vill gå under populär tid."],
    "koco-bistro": ["Internationellt medelhav", "En intressant adress att kombinera med ett besök i Mijas Pueblo. Det ligger inte i Fuengirola, men passar väl efter en eftermiddag bland vita gränder.", "Medelhavs- och internationell mat mitt i Mijas Pueblo.", "Tapas, medelhavsrätter och delningsalternativ.", "Par och resenärer som besöker Mijas Pueblo.", "Mysigt och kosmopolitiskt.", "Mijas Pueblo.", "Kombinera med utsiktspunkter vid solnedgång."],
    "el-oceano": ["Medelhav med havsutsikt", "En restaurang på Mijas Costa med välvårdad atmosfär och havsutsikt. Mer för en särskild utflykt än en snabb måltid.", "Läge vid havet, säsongsservice och elegant känsla.", "Fisk, medelhavsrätter och säsongsalternativ.", "Särskild middag, årsdag eller måltid med utsikt.", "Elegant, kustnära och lugnt.", "Mijas Costa, La Cala/Torrenueva.", "Kontrollera säsong och boka innan du åker."]
  }),
  no: translateRestaurants({
    "casa-diego": ["Fritert fisk og skalldyr", "Et enkelt og lokalt valg for fritert fisk, skalldyr og delefat nær leiligheten.", "Kystprodukter, retter til deling og følelsen av en tradisjonell freiduría.", "Boquerones, calamari, blandet fritert fisk og sesongens skalldyr.", "Par og familier som vil prøve fisk i Fuengirola uten en lang middag.", "Uformelt, lokalt og livlig.", "Fuengirola sentrum, praktisk fra leiligheten.", "Bestill flere retter til bordet og del."],
    "donnys-bar": ["Kjøtt, ribs og familiemat", "Et komfortabelt alternativ når du vil variere fra fisk og middelhavsmat. Passer til avslappede middager og rause porsjoner.", "Familievennlig atmosfære, mettende retter og praktisk prisnivå for ferie.", "Ribs, grillet kjøtt og fylt potet når det finnes.", "Familier, små grupper og gjester som ønsker en enkel middag.", "Avslappet, vennlig og ukomplisert.", "Fuengirola sentrum.", "Bra for en kveld der du vil spise godt uten å planlegge for mye."],
    "los-marinos-jose": ["Fisk og skalldyr", "Et av Fuengirolas kjente navn for fisk og skalldyr. Ligger i Carvajal ved strandpromenaden og passer til et spesielt måltid.", "Fisk, skalldyr og råvarefokusert mat med tydelig kystpreg.", "Dagens fisk, skalldyr og maritime risretter når tilgjengelig.", "Fiskeelskere, par og spesielle anledninger.", "Velstelt, maritimt og gastronomisk.", "Carvajal, øst i Fuengirola.", "Bestill på forhånd og spør hva som er best den dagen."],
    charolais: ["Middelhav, tapas og tradisjonelt", "En klassiker i sentrum med restaurant, bar og tapas, andalusiske røtter og baskiske innslag.", "Gjennomarbeidede tapas, gode råvarer og en svært praktisk sentrumsplassering.", "Tapas, deleretter, kjøtt og sesongretter.", "Par, spesielle middager og gjester som vil ha en trygg adresse i sentrum.", "Elegant, men varm.", "Fuengirola sentrum.", "Hvis du ikke vil ha en lang middag, prøv tapasdelen."],
    palangreros: ["Middelhav", "En sentral restaurant med spansk og middelhavsinspirert mat, egnet for en rolig middag.", "Variert meny, oppmerksom service og behagelig tempo.", "Forretter til deling, kjøtt, fisk og middelhavsretter.", "Par, voksne familier og middager nær sentrum.", "Koselig og rolig.", "Sentrum, nær Plaza Chinorros.", "Bestill i helger og høysesong."],
    ferrum: ["Moderne middelhavsmat", "Et mer moderne valg for en spesiell lunsj eller middag i Fuengirola. Sjekk oppdaterte åpningstider før du planlegger.", "Middelhavsmat med pen presentasjon og mer gastronomisk preg.", "Sesongretter, kjøtt og kreative valg.", "En spesiell anledning eller rolig middag for to.", "Velstelt, intimt og moderne.", "Fuengirola sentrum.", "Sjekk tider og bestill på forhånd."],
    arrozante: ["Risretter og middelhav", "Et godt alternativ for risretter og middelhavssmaker nær slottet og Miramar.", "Fokus på risretter og praktisk beliggenhet for strand eller promenade.", "Risretter, middelhavsforretter og fisk.", "Familier, lunsjplaner og små grupper.", "Lyst, komfortabelt og feriepreg.", "Sohail og strandpromenaden.", "Passer bedre til lunsj enn sen improvisert middag."],
    "o-mamma-mia": ["Italiensk", "Et enkelt sentralt valg for pasta, pizza og italiensk mat. Praktisk med barn eller når alle ønsker noe kjent.", "Bred italiensk meny og sentral beliggenhet.", "Pasta, pizza, salater og klassiske italienske retter.", "Familier, barn og uformelle middager.", "Livlig og familievennlig.", "Fuengirola sentrum.", "Et trygt valg for en enkel kveld."],
    "taco-tikka": ["Internasjonalt", "Et annerledes stopp på strandpromenaden når du vil ta pause fra fisk og tradisjonelle tapas.", "Internasjonale smaker i et område som er lett å kombinere med en tur ved sjøen.", "Krydrede retter, deleretter og internasjonale alternativer.", "Gjester som ønsker variasjon under et lengre opphold.", "Uformelt og avslappet ved strandpromenaden.", "Fuengirola strandpromenade.", "Bra for en lettere middag etter en strandtur."],
    "la-farola": ["Middelhav og internasjonalt", "En sentral restaurant for rolig middag med middelhavs- og internasjonal mat.", "Tilgjengelig meny, varierte valg og et komfortabelt format for par.", "Fisk, kjøtt, forretter og internasjonale retter.", "Par og middager uten hastverk.", "Klassisk, koselig og kveldsorientert.", "Fuengirola sentrum.", "Sjekk tidene, da den ofte passer best om kvelden."],
    "dedos-thai-fusion": ["Thai-fusion og internasjonalt", "Et annet alternativ for asiatiske smaker eller fusionretter uten å forlate sentrum.", "Internasjonale smaker, uformelt format og retter til deling.", "Curry, nudler, asiatiske forretter og fusionretter.", "Par, venner og lengre opphold der du vil variere.", "Lite, uformelt og kreativt.", "Fuengirola sentrum.", "Bestill hvis du går i travle perioder."],
    "koco-bistro": ["Internasjonalt middelhav", "En interessant adresse å kombinere med et besøk i Mijas Pueblo. Den ligger ikke i Fuengirola, men passer godt etter en ettermiddag i de hvite gatene.", "Middelhavs- og internasjonal mat midt i Mijas Pueblo.", "Tapas, middelhavsretter og delealternativer.", "Par og reisende som besøker Mijas Pueblo.", "Koselig og kosmopolitisk.", "Mijas Pueblo.", "Kombiner med utsiktspunkter ved solnedgang."],
    "el-oceano": ["Middelhav med havutsikt", "En restaurant på Mijas Costa med velstelt atmosfære og havutsikt. Mer for en spesiell tur enn et raskt måltid.", "Beliggenhet ved havet, sesongservice og elegant stemning.", "Fisk, middelhavsretter og sesongvalg.", "Spesiell middag, merkedag eller måltid med utsikt.", "Elegant, kystnært og rolig.", "Mijas Costa, La Cala/Torrenueva.", "Sjekk sesong og bestill før du drar."]
  })
};

function translateRestaurants(items: Record<string, [string, string, string, string, string, string, string, string]>): RestaurantCopy {
  return Object.fromEntries(
    Object.entries(items).map(([id, [type, description, special, order, recommendedFor, atmosphere, location, tip]]) => {
      const core = coreRestaurants.find((restaurant) => restaurant.id === id)!;
      return [id, { id, name: core.name, type, description, special, order, recommendedFor, atmosphere, location, tip }];
    })
  ) as RestaurantCopy;
}

function restaurantsFor(locale: Locale): Restaurant[] {
  const copy = commonCopies[locale];
  return coreRestaurants.map((core) => ({ ...core, ...copy[core.id] }));
}

const ui = {
  es: {
    metaTitle: "Restaurantes en Fuengirola | Dónde comer cerca del Apartamento Veramar",
    metaDescription: "Guía cuidada de restaurantes en Fuengirola, Mijas Pueblo y Mijas Costa: pescado, marisco, carne, tapas, cocina mediterránea e internacional cerca del Apartamento Veramar.",
    breadcrumbGuide: "Guía de Fuengirola", breadcrumbArticle: "Restaurantes", backLabel: "Volver a la guía", kicker: "Guía de Fuengirola · Restaurantes",
    h1: "Dónde comer en Fuengirola durante tu estancia", intro: "Una selección editorial de restaurantes útiles para huéspedes de Stay Fuengirola: pescado junto al mar, carne, tapas, arroces, cenas tranquilas y algunas escapadas a Mijas Pueblo y Mijas Costa.",
    labels: { filters: "Filtrar restaurantes", type: "Tipo", special: "Qué lo hace especial", order: "Qué pedir", recommendedFor: "Ideal para", atmosphere: "Ambiente", location: "Zona", address: "Dirección", hours: "Horario", phone: "Teléfono", tip: "Consejo Stay Fuengirola", price: "Precio orientativo", reserve: "Reserva", visitWebsite: "Visitar web", viewLocation: "Ver ubicación", noResults: "No hay restaurantes para este filtro.", mapButton: "Ver ficha", sourceNote: "Información orientativa verificada con fuentes públicas. Los horarios pueden cambiar: recomendamos confirmar antes de ir." },
    filterLabels: { all: "Todos", fish: "Pescado", meat: "Carne", mediterranean: "Mediterráneo", tapas: "Tapas", international: "Internacional", romantic: "Romántico", families: "Familias", views: "Vistas", "mijas-pueblo": "Mijas Pueblo", "mijas-costa": "Mijas Costa" },
    badgeLabels: { stay: "Recomendación Stay Fuengirola", families: "Ideal para familias", special: "Cena especial", fish: "Especialidad en pescado", views: "Con vistas", walk: "Cómodo a pie", mijas: "Escapada a Mijas", international: "Cocina internacional" },
    chooserTitle: "¿Qué restaurante elegir?", chooserIntro: "Si no quieres revisar toda la lista, empieza por el plan que tienes en mente.",
    favoritesTitle: "Nuestros favoritos", favoritesIntro: "No es un ranking. Son recomendaciones editoriales para situaciones concretas durante la estancia.",
    mapTitle: "Mapa de restaurantes seleccionados", mapIntro: "El mapa muestra solo los restaurantes incluidos en esta guía, para que puedas ubicar cada plan sin convertir la página en un listado interminable.",
    mapAria: "Mapa con restaurantes recomendados en Fuengirola, Mijas Pueblo y Mijas Costa",
    comparisonTitle: "Comparativa rápida", comparisonHeaders: { restaurant: "Restaurante", type: "Tipo", ideal: "Ideal para", price: "Precio", reserve: "Reserva", zone: "Zona" },
    routesTitle: "Rutas gastronómicas", tipsTitle: "Consejos Stay Fuengirola", faqTitle: "Preguntas frecuentes",
    relatedTitle: "También te puede interesar", ctaTitle: "Después de un día de playa o una excursión", ctaText: "Siempre hay un buen restaurante esperándote cerca del Apartamento Veramar.", ctaButton: "Ver disponibilidad en Booking",
    schemaAbout: ["restaurantes en Fuengirola", "dónde comer en Fuengirola", "pescado Fuengirola", "Mijas Pueblo", "Mijas Costa"]
  },
  en: {
    metaTitle: "Restaurants in Fuengirola | Where to Eat near Apartamento Veramar",
    metaDescription: "A curated guide to restaurants in Fuengirola, Mijas Pueblo and Mijas Costa: fish, seafood, meat, tapas, Mediterranean and international food near Apartamento Veramar.",
    breadcrumbGuide: "Fuengirola Guide", breadcrumbArticle: "Restaurants", backLabel: "Back to the guide", kicker: "Fuengirola Guide · Restaurants",
    h1: "Where to eat in Fuengirola during your stay", intro: "An editorial selection for Stay Fuengirola guests: fish by the sea, meat, tapas, rice dishes, calm dinners and a few easy outings to Mijas Pueblo and Mijas Costa.",
    labels: { filters: "Filter restaurants", type: "Type", special: "What makes it special", order: "What to order", recommendedFor: "Best for", atmosphere: "Atmosphere", location: "Area", address: "Address", hours: "Hours", phone: "Phone", tip: "Stay Fuengirola tip", price: "Approx. price", reserve: "Booking", visitWebsite: "Visit website", viewLocation: "View location", noResults: "No restaurants for this filter.", mapButton: "View card", sourceNote: "Practical information checked against public sources. Opening hours may change, so confirm before going." },
    filterLabels: { all: "All", fish: "Fish", meat: "Meat", mediterranean: "Mediterranean", tapas: "Tapas", international: "International", romantic: "Romantic", families: "Families", views: "Views", "mijas-pueblo": "Mijas Pueblo", "mijas-costa": "Mijas Costa" },
    badgeLabels: { stay: "Stay Fuengirola pick", families: "Family friendly", special: "Special dinner", fish: "Fish specialist", views: "With views", walk: "Easy on foot", mijas: "Mijas outing", international: "International food" },
    chooserTitle: "Which restaurant should you choose?", chooserIntro: "If you do not want to read the full list, start with the plan you have in mind.",
    favoritesTitle: "Our favourites", favoritesIntro: "This is not a ranking. These are editorial suggestions for real situations during a stay.",
    mapTitle: "Map of selected restaurants", mapIntro: "The map only includes restaurants from this guide, so you can locate each plan without turning the page into a huge directory.",
    mapAria: "Map with recommended restaurants in Fuengirola, Mijas Pueblo and Mijas Costa",
    comparisonTitle: "Quick comparison", comparisonHeaders: { restaurant: "Restaurant", type: "Type", ideal: "Best for", price: "Price", reserve: "Booking", zone: "Area" },
    routesTitle: "Food routes", tipsTitle: "Stay Fuengirola tips", faqTitle: "FAQ",
    relatedTitle: "You may also like", ctaTitle: "After a beach day or a day trip", ctaText: "There is always a good restaurant waiting near Apartamento Veramar.", ctaButton: "Check availability on Booking",
    schemaAbout: ["restaurants Fuengirola", "where to eat Fuengirola", "fish restaurants Fuengirola", "Mijas Pueblo", "Mijas Costa"]
  },
  fi: {
    metaTitle: "Ravintolat Fuengirolassa | Missä syödä Apartamento Veramarin lähellä",
    metaDescription: "Huolella koottu ravintolaopas Fuengirolaan, Mijas Puebloon ja Mijas Costalle: kalaa, merenantimia, lihaa, tapaksia, välimerellistä ja kansainvälistä ruokaa.",
    breadcrumbGuide: "Fuengirola-opas", breadcrumbArticle: "Ravintolat", backLabel: "Takaisin oppaaseen", kicker: "Fuengirola-opas · Ravintolat",
    h1: "Missä syödä Fuengirolassa loman aikana", intro: "Stay Fuengirolan vieraiden käytännöllinen valikoima: kalaa meren äärellä, lihaa, tapaksia, riisiruokia, rauhallisia illallisia sekä helppoja retkiä Mijas Puebloon ja Mijas Costalle.",
    labels: { filters: "Suodata ravintoloita", type: "Tyyppi", special: "Miksi valita", order: "Mitä tilata", recommendedFor: "Sopii", atmosphere: "Tunnelma", location: "Alue", address: "Osoite", hours: "Aukiolo", phone: "Puhelin", tip: "Stay Fuengirola -vinkki", price: "Hinta-arvio", reserve: "Varaus", visitWebsite: "Avaa verkkosivu", viewLocation: "Näytä sijainti", noResults: "Tälle suodattimelle ei ole ravintoloita.", mapButton: "Näytä kortti", sourceNote: "Tiedot ovat suuntaa-antavia ja tarkistettu julkisista lähteistä. Aukioloajat voivat muuttua, joten ne kannattaa varmistaa." },
    filterLabels: { all: "Kaikki", fish: "Kala", meat: "Liha", mediterranean: "Välimerellinen", tapas: "Tapas", international: "Kansainvälinen", romantic: "Romanttinen", families: "Perheet", views: "Näkymät", "mijas-pueblo": "Mijas Pueblo", "mijas-costa": "Mijas Costa" },
    badgeLabels: { stay: "Stay Fuengirola suosittelee", families: "Perheille", special: "Erityinen illallinen", fish: "Kalaravintola", views: "Näkymät", walk: "Helppo kävellä", mijas: "Retki Mijasiin", international: "Kansainvälinen" },
    chooserTitle: "Mikä ravintola valita?", chooserIntro: "Jos et halua lukea koko listaa, aloita suunnitelmastasi.",
    favoritesTitle: "Suosikkimme", favoritesIntro: "Tämä ei ole ranking. Nämä ovat toimituksellisia suosituksia eri tilanteisiin loman aikana.",
    mapTitle: "Valittujen ravintoloiden kartta", mapIntro: "Kartalla näkyvät vain tämän oppaan ravintolat, jotta suunnittelu pysyy selkeänä.",
    mapAria: "Kartta suositelluista ravintoloista Fuengirolassa, Mijas Pueblossa ja Mijas Costalla",
    comparisonTitle: "Nopea vertailu", comparisonHeaders: { restaurant: "Ravintola", type: "Tyyppi", ideal: "Sopii", price: "Hinta", reserve: "Varaus", zone: "Alue" },
    routesTitle: "Ruokareitit", tipsTitle: "Stay Fuengirola -vinkit", faqTitle: "Usein kysytyt kysymykset",
    relatedTitle: "Saatat olla kiinnostunut myös", ctaTitle: "Rantapäivän tai retken jälkeen", ctaText: "Apartamento Veramarin lähellä odottaa aina hyvä ravintola.", ctaButton: "Tarkista saatavuus Bookingissa",
    schemaAbout: ["ravintolat Fuengirolassa", "missä syödä Fuengirolassa", "kalaravintolat Fuengirola", "Mijas Pueblo", "Mijas Costa"]
  },
  sv: {
    metaTitle: "Restauranger i Fuengirola | Var du kan äta nära Apartamento Veramar",
    metaDescription: "En omsorgsfull guide till restauranger i Fuengirola, Mijas Pueblo och Mijas Costa: fisk, skaldjur, kött, tapas, medelhavsmat och internationellt.",
    breadcrumbGuide: "Fuengirola-guide", breadcrumbArticle: "Restauranger", backLabel: "Tillbaka till guiden", kicker: "Fuengirola-guide · Restauranger",
    h1: "Var du kan äta i Fuengirola under vistelsen", intro: "Ett redaktionellt urval för Stay Fuengirolas gäster: fisk vid havet, kött, tapas, risrätter, lugna middagar och enkla utflykter till Mijas Pueblo och Mijas Costa.",
    labels: { filters: "Filtrera restauranger", type: "Typ", special: "Vad gör den speciell", order: "Vad du kan beställa", recommendedFor: "Passar för", atmosphere: "Stämning", location: "Område", address: "Adress", hours: "Öppettider", phone: "Telefon", tip: "Stay Fuengirola tips", price: "Prisnivå", reserve: "Bokning", visitWebsite: "Besök webbplats", viewLocation: "Visa plats", noResults: "Inga restauranger för detta filter.", mapButton: "Visa kort", sourceNote: "Praktisk information kontrollerad mot offentliga källor. Öppettider kan ändras, så kontrollera innan du går." },
    filterLabels: { all: "Alla", fish: "Fisk", meat: "Kött", mediterranean: "Medelhav", tapas: "Tapas", international: "Internationellt", romantic: "Romantiskt", families: "Familjer", views: "Utsikt", "mijas-pueblo": "Mijas Pueblo", "mijas-costa": "Mijas Costa" },
    badgeLabels: { stay: "Stay Fuengirola tipsar", families: "För familjer", special: "Särskild middag", fish: "Fiskfokus", views: "Med utsikt", walk: "Lätt till fots", mijas: "Utflykt till Mijas", international: "Internationellt" },
    chooserTitle: "Vilken restaurang ska du välja?", chooserIntro: "Om du inte vill läsa hela listan, börja med den typ av kväll du har i åtanke.",
    favoritesTitle: "Våra favoriter", favoritesIntro: "Det här är ingen ranking. Det är redaktionella tips för olika situationer under vistelsen.",
    mapTitle: "Karta över utvalda restauranger", mapIntro: "Kartan visar bara restaurangerna i den här guiden, så det är lätt att planera utan en lång katalog.",
    mapAria: "Karta med rekommenderade restauranger i Fuengirola, Mijas Pueblo och Mijas Costa",
    comparisonTitle: "Snabb jämförelse", comparisonHeaders: { restaurant: "Restaurang", type: "Typ", ideal: "Passar för", price: "Pris", reserve: "Bokning", zone: "Område" },
    routesTitle: "Matrundor", tipsTitle: "Stay Fuengirola tips", faqTitle: "Vanliga frågor",
    relatedTitle: "Du kanske också gillar", ctaTitle: "Efter en stranddag eller utflykt", ctaText: "Det finns alltid en bra restaurang nära Apartamento Veramar.", ctaButton: "Kontrollera tillgänglighet på Booking",
    schemaAbout: ["restauranger Fuengirola", "var äta Fuengirola", "fiskrestauranger Fuengirola", "Mijas Pueblo", "Mijas Costa"]
  },
  no: {
    metaTitle: "Restauranter i Fuengirola | Hvor du kan spise nær Apartamento Veramar",
    metaDescription: "En kuratert guide til restauranter i Fuengirola, Mijas Pueblo og Mijas Costa: fisk, skalldyr, kjøtt, tapas, middelhavsmat og internasjonalt.",
    breadcrumbGuide: "Fuengirola-guide", breadcrumbArticle: "Restauranter", backLabel: "Tilbake til guiden", kicker: "Fuengirola-guide · Restauranter",
    h1: "Hvor du kan spise i Fuengirola under oppholdet", intro: "Et redaksjonelt utvalg for Stay Fuengirola-gjester: fisk ved sjøen, kjøtt, tapas, risretter, rolige middager og enkle turer til Mijas Pueblo og Mijas Costa.",
    labels: { filters: "Filtrer restauranter", type: "Type", special: "Hva gjør stedet spesielt", order: "Hva du kan bestille", recommendedFor: "Passer for", atmosphere: "Atmosfære", location: "Område", address: "Adresse", hours: "Åpningstider", phone: "Telefon", tip: "Stay Fuengirola-tips", price: "Prisnivå", reserve: "Reservasjon", visitWebsite: "Besøk nettside", viewLocation: "Vis beliggenhet", noResults: "Ingen restauranter for dette filteret.", mapButton: "Vis kort", sourceNote: "Praktisk informasjon kontrollert mot offentlige kilder. Åpningstider kan endres, så sjekk før du går." },
    filterLabels: { all: "Alle", fish: "Fisk", meat: "Kjøtt", mediterranean: "Middelhav", tapas: "Tapas", international: "Internasjonalt", romantic: "Romantisk", families: "Familier", views: "Utsikt", "mijas-pueblo": "Mijas Pueblo", "mijas-costa": "Mijas Costa" },
    badgeLabels: { stay: "Stay Fuengirola anbefaler", families: "Familievennlig", special: "Spesiell middag", fish: "Fiskespesialist", views: "Med utsikt", walk: "Lett til fots", mijas: "Tur til Mijas", international: "Internasjonalt" },
    chooserTitle: "Hvilken restaurant bør du velge?", chooserIntro: "Hvis du ikke vil lese hele listen, start med planen du har i tankene.",
    favoritesTitle: "Våre favoritter", favoritesIntro: "Dette er ikke en rangering. Det er redaksjonelle tips for ulike situasjoner under oppholdet.",
    mapTitle: "Kart over utvalgte restauranter", mapIntro: "Kartet viser bare restaurantene i denne guiden, slik at planleggingen forblir enkel.",
    mapAria: "Kart med anbefalte restauranter i Fuengirola, Mijas Pueblo og Mijas Costa",
    comparisonTitle: "Rask sammenligning", comparisonHeaders: { restaurant: "Restaurant", type: "Type", ideal: "Passer for", price: "Pris", reserve: "Reservasjon", zone: "Område" },
    routesTitle: "Matruter", tipsTitle: "Stay Fuengirola-tips", faqTitle: "Vanlige spørsmål",
    relatedTitle: "Du kan også like", ctaTitle: "Etter en stranddag eller utflukt", ctaText: "Det finnes alltid en god restaurant nær Apartamento Veramar.", ctaButton: "Sjekk tilgjengelighet på Booking",
    schemaAbout: ["restauranter Fuengirola", "hvor spise Fuengirola", "fiskerestauranter Fuengirola", "Mijas Pueblo", "Mijas Costa"]
  }
} satisfies Record<Locale, Omit<RestaurantGuideContent, "restaurants" | "chooserItems" | "favorites" | "routes" | "tips" | "faqs" | "related">>;

const sharedPicks = {
  chooser: [
    ["🐟", "los-marinos-jose"],
    ["🥩", "donnys-bar"],
    ["🍷", "ferrum"],
    ["👨‍👩‍👧", "arrozante"],
    ["🌅", "el-oceano"],
    ["🍤", "charolais"],
    ["🍝", "o-mamma-mia"],
    ["🌏", "dedos-thai-fusion"],
    ["🏡", "koco-bistro"]
  ],
  favorites: ["casa-diego", "donnys-bar", "ferrum", "koco-bistro", "los-marinos-jose"],
  routes: [
    ["near", ["casa-diego", "donnys-bar", "charolais", "palangreros", "la-farola", "dedos-thai-fusion"]],
    ["miramar", ["arrozante", "casa-diego", "donnys-bar"]],
    ["castle", ["arrozante", "los-marinos-jose"]],
    ["pueblo", ["koco-bistro"]],
    ["costa", ["el-oceano"]]
  ]
};

type RestaurantGuideExtras = {
  chooserLabels: string[];
  chooserText: (name: string) => string;
  favoriteTitle: (name: string) => string;
  favoriteText: (name: string) => string;
  routeTitles: string[];
  routeTexts: string[];
  tips: string[];
  faqs: Array<[string, string]>;
  related: Array<[GuideCategoryKey, string, string]>;
};

const localizedExtras: Record<Locale, RestaurantGuideExtras> = {
  es: {
    chooserLabels: ["Pescado", "Carne", "Cena especial", "Familias", "Vistas", "Tapas", "Italiano", "Internacional", "Mijas Pueblo"],
    chooserText: (name: string) => `Empieza por ${name}.`,
    favoriteTitle: (name: string) => `Recomendación Stay Fuengirola: ${name}`,
    favoriteText: () => "Lo elegiríamos cuando el plan encaja con su especialidad y quieres una experiencia fiable sin buscar demasiado.",
    routeTitles: ["Restaurantes cerca del apartamento", "Restaurantes cerca de Miramar", "Restaurantes cerca del Castillo", "Restaurantes en Mijas Pueblo", "Restaurantes en Mijas Costa"],
    routeTexts: ["Opciones cómodas para ir caminando o moverte poco.", "Buenas ideas para combinar con compras, cine o playa.", "Planes que encajan con paseo por Sohail y la zona oeste.", "Para una excursión de tarde entre calles blancas.", "Para una salida con vistas y ambiente de costa."],
    tips: ["Reserva fines de semana y verano.", "Come algo antes si viajas con niños y vas en hora punta.", "Cuando sea posible, ve caminando y evita aparcar en el centro.", "Comprueba horarios en invierno: algunos restaurantes ajustan turnos.", "Para pescado y marisco, pregunta por el producto del día."],
    faqs: [["¿Dónde comer pescado en Fuengirola?", "Los Marinos José es una referencia conocida para pescado y marisco; Casa Diego es una alternativa más informal para pescaíto frito."], ["¿Dónde comer carne?", "Donny's Bar es la opción más sencilla de la guía para costillas y carnes en ambiente familiar."], ["¿Qué restaurante recomendamos cerca del apartamento?", "Casa Diego, Donny's, Charolais, Palangreros y DeDos quedan en zonas prácticas del centro."], ["¿Hace falta reservar?", "Para restaurantes especiales, fines de semana y verano, sí. Para sitios informales puede bastar con llegar temprano."], ["¿Qué restaurante elegir con niños?", "Arrozante, O Mamma Mia y Donny's suelen ser opciones cómodas para familias."], ["¿Hay restaurantes con vistas?", "Los Marinos José, Arrozante y El Oceano son las opciones más orientadas a vistas o ambiente junto al mar."], ["¿Dónde comer en Mijas Pueblo?", "Koco Bistro es una opción cuidada para combinar con una visita al pueblo."], ["¿Qué restaurante es mejor para una cena especial?", "Ferrum, Los Marinos José, Charolais o El Oceano encajan mejor para una ocasión especial."], ["¿Hay opciones vegetarianas?", "Varios restaurantes tienen opciones vegetarianas, pero conviene comprobar la carta actual antes de reservar."]],
    related: [["beaches", "Playas", "Qué playa elegir cerca del apartamento."], ["thingsToDo", "Qué hacer", "Planes útiles para todos los días."], ["excursions", "Excursiones", "Ideas para descubrir la Costa del Sol."], ["shopping", "Compras", "Miramar, centro y tiendas útiles."], ["supermarkets", "Supermercados", "Compras prácticas durante la estancia."], ["transport", "Transporte", "Cómo moverte por Fuengirola."], ["airport", "Aeropuerto", "Llegar desde Málaga a Fuengirola."]]
  },
  en: {
    chooserLabels: ["Fish", "Meat", "Special dinner", "Families", "Views", "Tapas", "Italian", "International", "Mijas Pueblo"],
    chooserText: (name: string) => `Start with ${name}.`,
    favoriteTitle: (name: string) => `Stay Fuengirola pick: ${name}`,
    favoriteText: () => "We would choose it when the plan matches its speciality and you want a reliable meal without searching too much.",
    routeTitles: ["Restaurants near the apartment", "Restaurants near Miramar", "Restaurants near the Castle", "Restaurants in Mijas Pueblo", "Restaurants in Mijas Costa"],
    routeTexts: ["Easy choices for walking or staying close.", "Good ideas to combine with shopping, cinema or beach.", "Plans that fit a walk around Sohail and the west side.", "For an afternoon among white streets.", "For a meal with views and coastal atmosphere."],
    tips: ["Book at weekends and in summer.", "With children, avoid arriving at peak time very hungry.", "Walk when possible and avoid parking in the centre.", "Check winter hours: some restaurants adjust service.", "For fish and seafood, ask what is best that day."],
    faqs: [["Where should I eat fish in Fuengirola?", "Los Marinos José is a known reference for fish and seafood; Casa Diego is a more informal option for fried fish."], ["Where should I eat meat?", "Donny's Bar is the easiest meat-focused option in this guide."], ["Which restaurants are close to the apartment?", "Casa Diego, Donny's, Charolais, Palangreros and DeDos are practical central options."], ["Do I need to book?", "For special restaurants, weekends and summer, yes. Informal places may work if you arrive early."], ["Which restaurants work with children?", "Arrozante, O Mamma Mia and Donny's are usually comfortable for families."], ["Are there restaurants with views?", "Los Marinos José, Arrozante and El Oceano are the most view-oriented options."], ["Where should I eat in Mijas Pueblo?", "Koco Bistro is a polished option to combine with a village visit."], ["What is good for a special dinner?", "Ferrum, Los Marinos José, Charolais or El Oceano fit a special occasion."], ["Are there vegetarian options?", "Several restaurants offer vegetarian choices, but check the current menu before booking."]],
    related: [["beaches", "Beaches", "Which beach to choose near the apartment."], ["thingsToDo", "Things to do", "Useful plans for each day."], ["excursions", "Day trips", "Ideas to explore the Costa del Sol."], ["shopping", "Shopping", "Miramar, the centre and useful shops."], ["supermarkets", "Supermarkets", "Practical grocery shopping during your stay."], ["transport", "Transport", "How to move around Fuengirola."], ["airport", "Airport", "How to arrive from Málaga."]]
  },
  fi: {
    chooserLabels: ["Kala", "Liha", "Erityinen illallinen", "Perheet", "Näköalat", "Tapas", "Italialainen", "Kansainvälinen", "Mijas Pueblo"],
    chooserText: (name: string) => `Aloita ravintolasta ${name}.`,
    favoriteTitle: (name: string) => `Stay Fuengirola suosittelee: ${name}`,
    favoriteText: () => "Valitsisimme sen, kun suunnitelma sopii paikan vahvuuteen ja haluat luotettavan aterian ilman pitkää etsimistä.",
    routeTitles: ["Ravintolat lähellä asuntoa", "Ravintolat Miramarin lähellä", "Ravintolat linnan lähellä", "Ravintolat Mijas Pueblossa", "Ravintolat Mijas Costalla"],
    routeTexts: ["Helppoja vaihtoehtoja kävellen tai lähellä pysyen.", "Hyviä ideoita ostosten, elokuvan tai rannan yhteyteen.", "Sopii kävelyyn Sohailin ja länsialueen ympärillä.", "Iltapäivään valkoisten katujen keskellä.", "Aterialle, jossa on merellinen tunnelma ja näkymiä."],
    tips: ["Varaa viikonloppuisin ja kesällä.", "Lasten kanssa kannattaa välttää ruuhka-aikaa hyvin nälkäisenä.", "Kävele kun mahdollista ja vältä keskustapysäköintiä.", "Tarkista talviajan aukiolot: osa ravintoloista muuttaa vuoroja.", "Kalan ja merenantimien kohdalla kysy päivän paras tuote."],
    faqs: [["Missä syödä kalaa Fuengirolassa?", "Los Marinos José on tunnettu kala- ja merenantimipaikka; Casa Diego on rennompi vaihtoehto paistetulle kalalle."], ["Missä syödä lihaa?", "Donny's Bar on tämän oppaan helpoin lihapainotteinen vaihtoehto."], ["Mitkä ravintolat ovat lähellä asuntoa?", "Casa Diego, Donny's, Charolais, Palangreros ja DeDos ovat käytännöllisiä keskustavaihtoehtoja."], ["Pitääkö varata?", "Erityisiin ravintoloihin, viikonloppuihin ja kesään kyllä. Rennommissa paikoissa aikainen saapuminen voi riittää."], ["Mikä sopii lasten kanssa?", "Arrozante, O Mamma Mia ja Donny's ovat yleensä mukavia perheille."], ["Onko ravintoloita näköalalla?", "Los Marinos José, Arrozante ja El Oceano ovat oppaan näkymäpainotteisimmat vaihtoehdot."], ["Missä syödä Mijas Pueblossa?", "Koco Bistro on huoliteltu vaihtoehto kylävierailun yhteyteen."], ["Mikä sopii erityiseen illalliseen?", "Ferrum, Los Marinos José, Charolais tai El Oceano sopivat erityiseen hetkeen."], ["Onko kasvisvaihtoehtoja?", "Useissa ravintoloissa on kasvisvaihtoehtoja, mutta ajantasainen lista kannattaa tarkistaa ennen varausta."]],
    related: [["beaches", "Rannat", "Mikä ranta valita lähellä asuntoa."], ["thingsToDo", "Mitä tehdä", "Käytännöllisiä suunnitelmia eri päiville."], ["excursions", "Päiväretket", "Ideoita Costa del Solin tutkimiseen."], ["shopping", "Ostokset", "Miramar, keskusta ja hyödylliset kaupat."], ["supermarkets", "Supermarketit", "Ruokaostokset loman aikana."], ["transport", "Liikkuminen", "Kuinka liikkua Fuengirolassa."], ["airport", "Lentoasema", "Saapuminen Málagasta Fuengirolaan."]]
  },
  sv: {
    chooserLabels: ["Fisk", "Kött", "Särskild middag", "Familjer", "Utsikt", "Tapas", "Italienskt", "Internationellt", "Mijas Pueblo"],
    chooserText: (name: string) => `Börja med ${name}.`,
    favoriteTitle: (name: string) => `Stay Fuengirola tipsar: ${name}`,
    favoriteText: () => "Vi skulle välja den när planen matchar restaurangens styrka och du vill ha en pålitlig måltid utan lång sökning.",
    routeTitles: ["Restauranger nära lägenheten", "Restauranger nära Miramar", "Restauranger nära slottet", "Restauranger i Mijas Pueblo", "Restauranger på Mijas Costa"],
    routeTexts: ["Enkla val till fots eller nära boendet.", "Bra idéer att kombinera med shopping, bio eller strand.", "Passar med promenad runt Sohail och västra sidan.", "För en eftermiddag bland vita gränder.", "För en måltid med kustkänsla och utsikt."],
    tips: ["Boka på helger och under sommaren.", "Med barn: undvik att komma mycket hungrig i rusningstid.", "Gå till fots när det går och undvik parkering i centrum.", "Kontrollera vinteröppettider: vissa restauranger ändrar service.", "För fisk och skaldjur, fråga vad som är bäst den dagen."],
    faqs: [["Var ska man äta fisk i Fuengirola?", "Los Marinos José är ett känt namn för fisk och skaldjur; Casa Diego är ett mer informellt val för friterad fisk."], ["Var ska man äta kött?", "Donny's Bar är guidens enklaste köttfokuserade alternativ."], ["Vilka restauranger ligger nära lägenheten?", "Casa Diego, Donny's, Charolais, Palangreros och DeDos är praktiska centrala alternativ."], ["Behöver man boka?", "För speciella restauranger, helger och sommar: ja. På enklare ställen kan det räcka att komma tidigt."], ["Vilka fungerar med barn?", "Arrozante, O Mamma Mia och Donny's brukar vara bekväma för familjer."], ["Finns restauranger med utsikt?", "Los Marinos José, Arrozante och El Oceano är de mest utsiktsorienterade alternativen."], ["Var äter man i Mijas Pueblo?", "Koco Bistro är ett välvårdat val att kombinera med ett bybesök."], ["Vad passar för en särskild middag?", "Ferrum, Los Marinos José, Charolais eller El Oceano passar en speciell kväll."], ["Finns vegetariska alternativ?", "Flera restauranger har vegetariska val, men kontrollera aktuell meny innan bokning."]],
    related: [["beaches", "Stränder", "Vilken strand du kan välja nära lägenheten."], ["thingsToDo", "Saker att göra", "Praktiska planer för olika dagar."], ["excursions", "Utflykter", "Idéer för att upptäcka Costa del Sol."], ["shopping", "Shopping", "Miramar, centrum och användbara butiker."], ["supermarkets", "Mataffärer", "Praktiska inköp under vistelsen."], ["transport", "Transport", "Hur du tar dig runt i Fuengirola."], ["airport", "Flygplats", "Så kommer du från Málaga till Fuengirola."]]
  },
  no: {
    chooserLabels: ["Fisk", "Kjøtt", "Spesiell middag", "Familier", "Utsikt", "Tapas", "Italiensk", "Internasjonalt", "Mijas Pueblo"],
    chooserText: (name: string) => `Start med ${name}.`,
    favoriteTitle: (name: string) => `Stay Fuengirola anbefaler: ${name}`,
    favoriteText: () => "Vi ville valgt den når planen passer stedets styrke og du ønsker et trygt måltid uten mye leting.",
    routeTitles: ["Restauranter nær leiligheten", "Restauranter nær Miramar", "Restauranter nær slottet", "Restauranter i Mijas Pueblo", "Restauranter på Mijas Costa"],
    routeTexts: ["Enkle valg til fots eller nær området.", "Gode ideer å kombinere med shopping, kino eller strand.", "Passer med en tur rundt Sohail og vestsiden.", "For en ettermiddag i hvite gater.", "For et måltid med kyststemning og utsikt."],
    tips: ["Bestill i helger og om sommeren.", "Med barn: unngå å komme veldig sulten i rushtiden.", "Gå når det er mulig og unngå parkering i sentrum.", "Sjekk vinteråpningstider: noen restauranter justerer service.", "For fisk og skalldyr, spør hva som er best den dagen."],
    faqs: [["Hvor kan man spise fisk i Fuengirola?", "Los Marinos José er et kjent navn for fisk og skalldyr; Casa Diego er et mer uformelt valg for fritert fisk."], ["Hvor kan man spise kjøtt?", "Donny's Bar er det enkleste kjøttfokuserte alternativet i guiden."], ["Hvilke restauranter ligger nær leiligheten?", "Casa Diego, Donny's, Charolais, Palangreros og DeDos er praktiske sentrumsvalg."], ["Må man bestille bord?", "For spesielle restauranter, helger og sommer: ja. På enklere steder kan det holde å komme tidlig."], ["Hvilke passer med barn?", "Arrozante, O Mamma Mia og Donny's er vanligvis komfortable for familier."], ["Finnes det restauranter med utsikt?", "Los Marinos José, Arrozante og El Oceano er de mest utsiktsorienterte alternativene."], ["Hvor spise i Mijas Pueblo?", "Koco Bistro er et velstelt valg å kombinere med et besøk i landsbyen."], ["Hva passer til en spesiell middag?", "Ferrum, Los Marinos José, Charolais eller El Oceano passer til en spesiell kveld."], ["Finnes vegetariske alternativer?", "Flere restauranter har vegetariske valg, men sjekk aktuell meny før bestilling."]],
    related: [["beaches", "Strender", "Hvilken strand du kan velge nær leiligheten."], ["thingsToDo", "Ting å gjøre", "Praktiske planer for ulike dager."], ["excursions", "Utflukter", "Ideer for å oppdage Costa del Sol."], ["shopping", "Shopping", "Miramar, sentrum og nyttige butikker."], ["supermarkets", "Supermarkeder", "Praktiske innkjøp under oppholdet."], ["transport", "Transport", "Hvordan komme seg rundt i Fuengirola."], ["airport", "Flyplass", "Slik kommer du fra Málaga til Fuengirola."]]
  }
};

export const restaurantGuideContent = Object.fromEntries(
  (Object.keys(ui) as Locale[]).map((locale) => {
    const restaurants = restaurantsFor(locale);
    const extras = localizedExtras[locale] ?? localizedExtras.en;
    return [
      locale,
      {
        ...ui[locale],
        restaurants,
        chooserItems: sharedPicks.chooser.map(([icon, restaurantId], index) => ({
          icon,
          label: extras.chooserLabels[index],
          restaurantId,
          text: extras.chooserText(restaurants.find((restaurant) => restaurant.id === restaurantId)!.name)
        })),
        favorites: sharedPicks.favorites.map((restaurantId) => {
          const name = restaurants.find((restaurant) => restaurant.id === restaurantId)!.name;
          return { restaurantId, title: extras.favoriteTitle(name), text: extras.favoriteText(name) };
        }),
        routes: sharedPicks.routes.map(([key, ids], index) => ({ title: extras.routeTitles[index], text: extras.routeTexts[index], restaurantIds: ids })),
        tips: extras.tips,
        faqs: extras.faqs.map(([question, answer]) => ({ question, answer })),
        related: extras.related.map(([key, title, text]) => ({ key, title, text }))
      }
    ];
  })
) as Record<Locale, RestaurantGuideContent>;
