export type SupermarketCategory = "nearest" | "hypermarket" | "standard" | "discount" | "convenience";
export type SupermarketFilter = "all" | "nearest" | "large" | "discount" | "quick" | "walk" | "car";

export interface Supermarket {
  id: string;
  name: string;
  slug: string;
  category: SupermarketCategory;
  address?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  walkingDistanceMeters?: number;
  walkingTimeMinutes?: number;
  drivingTimeMinutes?: number;
  descriptionKey: string;
  bestForKeys: string[];
  filterKeys: SupermarketFilter[];
  officialUrl?: string;
  storeLocatorUrl?: string;
  directionsUrl?: string;
  featured?: boolean;
  active: boolean;
  lastVerified?: string;
  verificationSource: "official" | "owner-confirmed" | "third-party";
}

export const supermarketOfficialUrls = {
  maskom: "https://www.maskom.es/nuestras-tiendas/",
  maskomHome: "https://www.maskom.es/",
  carrefour: "https://www.carrefour.es/tiendas-carrefour/hipermercados/carrefour/fuengirola.aspx",
  miramar: "https://www.miramarcc.com/tiendas/",
  mercadona: "https://www.mercadona.es/",
  lidl: "https://www.lidl.es/s/es-ES/tiendas/fuengirola/c-calerita-s-n/",
  aldi: "https://www.aldi.es/encuentra-tu-supermercado/fuengirola/calle-malvarrosa-1/6163221.html",
  dia: "https://www.dia.es/tiendas/buscador-tiendas/malaga/fuengirola"
} as const;

export const supermarkets: Supermarket[] = [
  {
    id: "maskom-santa-amalia",
    name: "Maskom",
    slug: "maskom",
    category: "nearest",
    address: "Avenida Santa Amalia s/n, 29640 Fuengirola",
    coordinates: { lat: 36.5342, lng: -4.626 },
    walkingDistanceMeters: 350,
    walkingTimeMinutes: 5,
    descriptionKey: "maskom",
    bestForKeys: ["firstShop", "breakfast", "quickBasics", "freshDaily", "topUp"],
    filterKeys: ["nearest", "quick", "walk"],
    officialUrl: supermarketOfficialUrls.maskomHome,
    storeLocatorUrl: supermarketOfficialUrls.maskom,
    directionsUrl: "https://www.openstreetmap.org/directions?from=&to=36.5342%2C-4.6260",
    featured: true,
    active: true,
    lastVerified: "2026-07-23",
    verificationSource: "owner-confirmed"
  },
  {
    id: "carrefour-miramar",
    name: "Carrefour Miramar",
    slug: "carrefour-miramar",
    category: "hypermarket",
    address: "Avenida de la Encarnación s/n, Parque Miramar, 29640 Fuengirola",
    coordinates: { lat: 36.5326, lng: -4.6352 },
    walkingDistanceMeters: 900,
    walkingTimeMinutes: 10,
    drivingTimeMinutes: 4,
    descriptionKey: "carrefour",
    bestForKeys: ["largeShop", "families", "longStay", "hygiene", "children", "international", "beachItems"],
    filterKeys: ["large", "walk", "car"],
    officialUrl: supermarketOfficialUrls.carrefour,
    storeLocatorUrl: supermarketOfficialUrls.miramar,
    directionsUrl: "https://www.openstreetmap.org/directions?from=&to=36.5326%2C-4.6352",
    featured: true,
    active: true,
    lastVerified: "2026-07-23",
    verificationSource: "official"
  },
  {
    id: "mercadona-cordoba",
    name: "Mercadona",
    slug: "mercadona",
    category: "standard",
    address: "Calle Córdoba 35, 29640 Fuengirola",
    coordinates: { lat: 36.5404, lng: -4.6216 },
    walkingDistanceMeters: 1100,
    walkingTimeMinutes: 14,
    drivingTimeMinutes: 5,
    descriptionKey: "mercadona",
    bestForKeys: ["weeklyShop", "ownBrand", "freshDaily", "cleaning", "hygiene"],
    filterKeys: ["large", "walk", "car"],
    officialUrl: supermarketOfficialUrls.mercadona,
    storeLocatorUrl: supermarketOfficialUrls.mercadona,
    directionsUrl: "https://www.openstreetmap.org/directions?from=&to=36.5404%2C-4.6216",
    active: true,
    lastVerified: "2026-07-23",
    verificationSource: "third-party"
  },
  {
    id: "lidl-calerita",
    name: "Lidl",
    slug: "lidl",
    category: "discount",
    address: "Calle Calerita s/n, 29640 Fuengirola",
    coordinates: { lat: 36.5427, lng: -4.634 },
    walkingDistanceMeters: 1500,
    walkingTimeMinutes: 20,
    drivingTimeMinutes: 6,
    descriptionKey: "lidl",
    bestForKeys: ["weeklyOffers", "breakfast", "bakery", "europeanProducts", "seasonalItems"],
    filterKeys: ["discount", "car"],
    officialUrl: supermarketOfficialUrls.lidl,
    storeLocatorUrl: supermarketOfficialUrls.lidl,
    directionsUrl: "https://www.openstreetmap.org/directions?from=&to=36.5427%2C-4.6340",
    active: true,
    lastVerified: "2026-07-23",
    verificationSource: "official"
  },
  {
    id: "aldi-malvarrosa",
    name: "Aldi",
    slug: "aldi",
    category: "discount",
    address: "Calle Malvarrosa 1, 29640 Fuengirola",
    coordinates: { lat: 36.5492, lng: -4.625 },
    walkingDistanceMeters: 1900,
    walkingTimeMinutes: 25,
    drivingTimeMinutes: 7,
    descriptionKey: "aldi",
    bestForKeys: ["discountShop", "ownBrand", "quickBasics", "weeklyOffers"],
    filterKeys: ["discount", "car"],
    officialUrl: supermarketOfficialUrls.aldi,
    storeLocatorUrl: supermarketOfficialUrls.aldi,
    directionsUrl: "https://www.openstreetmap.org/directions?from=&to=36.5492%2C-4.6250",
    active: true,
    lastVerified: "2026-07-23",
    verificationSource: "official"
  },
  {
    id: "dia-huelva-camino-coin",
    name: "Dia",
    slug: "dia",
    category: "convenience",
    address: "Calle Huelva 1 esquina Camino de Coín 18, 29640 Fuengirola",
    coordinates: { lat: 36.5407, lng: -4.6266 },
    walkingDistanceMeters: 1000,
    walkingTimeMinutes: 13,
    drivingTimeMinutes: 5,
    descriptionKey: "dia",
    bestForKeys: ["quickBasics", "topUp", "drinks", "basicFood"],
    filterKeys: ["quick", "walk"],
    officialUrl: supermarketOfficialUrls.dia,
    storeLocatorUrl: supermarketOfficialUrls.dia,
    directionsUrl: "https://www.openstreetmap.org/directions?from=&to=36.5407%2C-4.6266",
    active: true,
    lastVerified: "2026-07-23",
    verificationSource: "official"
  }
];

export const supermarketFilters: SupermarketFilter[] = ["all", "nearest", "large", "discount", "quick", "walk", "car"];
