export type TransportMode = "walking" | "train" | "urban-bus" | "intercity-bus" | "taxi" | "car" | "bike";
export type TransportOfficialDestination = "official_site" | "timetable" | "map" | "tickets" | "directions" | "service_alerts";

export interface TransportOption {
  id: string;
  mode: TransportMode;
  titleKey: string;
  descriptionKey: string;
  bestForKeys: string[];
  officialUrl?: string;
  mapUrl?: string;
  featured?: boolean;
  active: boolean;
  lastVerified?: string;
}

export interface TransportRoute {
  id: string;
  origin: string;
  destination: string;
  recommendedMode: TransportMode[];
  alternativeModes?: TransportMode[];
  notesKey: string;
  officialUrl?: string;
  active: boolean;
  lastVerified?: string;
}

export interface TransportMapPoint {
  id: string;
  type: "apartment" | "train" | "bus" | "taxi" | "shopping" | "attraction" | "city" | "airport";
  lat: number;
  lng: number;
  sectionId: string;
  externalUrl?: string;
}

export const transportLastVerified = "2026-07-23";

export const transportOfficialUrls = {
  renfeLines: "https://www.renfe.com/es/es/cercanias/cercanias-malaga/lineas",
  renfeTickets: "https://www.renfe.com/es/es/cercanias/cercanias-malaga/tarifas/billetes",
  renfeAccessibility: "https://grupo.renfe.com/es/es/sostenibilidad/social/accesibilidad",
  urbanBus: "https://www.transportefuengirola.com/",
  urbanBusLines: "https://www.transportefuengirola.com/lineas-menu",
  townHallTransport: "https://www.fuengirola.es/concejalia/concejalia-de-movilidad/transporte-urbano/",
  intercityConsortium: "https://ctmam.ctan.es/",
  mijasRoute: "https://siu.ctmam.ctan.es/es/horarios_lineas_tabla.php?linea=10",
  radioTaxi: "https://pidetaxi.es/",
  tourismTaxi: "https://turismo.fuengirola.es/en/establecimiento/radio-taxi-de-fuengirola/",
  tourismMap: "https://mapas.fuengirola.es/es/inicio",
  busStation: "https://mapas.fuengirola.es/en/servicios/resource/estacion-de-autobuses/bus-station",
  parkingInfo: "https://turismo.fuengirola.es/servicios/",
  transportApps: "https://www.transportefuengirola.com/"
} as const;

export const transportOptions: TransportOption[] = [
  {
    id: "walking",
    mode: "walking",
    titleKey: "walking",
    descriptionKey: "walking",
    bestForKeys: ["nearby", "beach", "miramar", "castle"],
    featured: true,
    active: true,
    lastVerified: transportLastVerified
  },
  {
    id: "train",
    mode: "train",
    titleKey: "train",
    descriptionKey: "train",
    bestForKeys: ["airport", "malaga", "benalmadena", "torremolinos"],
    officialUrl: transportOfficialUrls.renfeLines,
    featured: true,
    active: true,
    lastVerified: transportLastVerified
  },
  {
    id: "urban-bus",
    mode: "urban-bus",
    titleKey: "urbanBus",
    descriptionKey: "urbanBus",
    bestForKeys: ["local", "neighbourhoods", "miramar"],
    officialUrl: transportOfficialUrls.urbanBus,
    active: true,
    lastVerified: transportLastVerified
  },
  {
    id: "intercity-bus",
    mode: "intercity-bus",
    titleKey: "intercityBus",
    descriptionKey: "intercityBus",
    bestForKeys: ["mijas", "marbella", "estepona"],
    officialUrl: transportOfficialUrls.intercityConsortium,
    active: true,
    lastVerified: transportLastVerified
  },
  {
    id: "taxi",
    mode: "taxi",
    titleKey: "taxi",
    descriptionKey: "taxi",
    bestForKeys: ["luggage", "night", "doorToDoor"],
    officialUrl: transportOfficialUrls.radioTaxi,
    active: true,
    lastVerified: transportLastVerified
  },
  {
    id: "car",
    mode: "car",
    titleKey: "car",
    descriptionKey: "car",
    bestForKeys: ["ronda", "nerja", "granada", "villages"],
    active: true,
    lastVerified: transportLastVerified
  },
  {
    id: "bike",
    mode: "bike",
    titleKey: "bike",
    descriptionKey: "bike",
    bestForKeys: ["promenade", "shortTrips"],
    active: true,
    lastVerified: transportLastVerified
  }
];

export const transportRoutes: TransportRoute[] = [
  { id: "airport", origin: "Apartamento Veramar", destination: "Aeropuerto de Malaga", recommendedMode: ["train"], alternativeModes: ["taxi", "car"], notesKey: "airport", officialUrl: transportOfficialUrls.renfeLines, active: true, lastVerified: transportLastVerified },
  { id: "malaga", origin: "Fuengirola", destination: "Malaga Centro", recommendedMode: ["train"], alternativeModes: ["car"], notesKey: "malaga", officialUrl: transportOfficialUrls.renfeLines, active: true, lastVerified: transportLastVerified },
  { id: "maria-zambrano", origin: "Fuengirola", destination: "Malaga Maria Zambrano", recommendedMode: ["train"], alternativeModes: ["car"], notesKey: "mariaZambrano", officialUrl: transportOfficialUrls.renfeLines, active: true, lastVerified: transportLastVerified },
  { id: "benalmadena", origin: "Fuengirola", destination: "Benalmadena", recommendedMode: ["train"], alternativeModes: ["taxi", "car"], notesKey: "benalmadena", officialUrl: transportOfficialUrls.renfeLines, active: true, lastVerified: transportLastVerified },
  { id: "torremolinos", origin: "Fuengirola", destination: "Torremolinos", recommendedMode: ["train"], alternativeModes: ["taxi", "car"], notesKey: "torremolinos", officialUrl: transportOfficialUrls.renfeLines, active: true, lastVerified: transportLastVerified },
  { id: "plaza-mayor", origin: "Fuengirola", destination: "Plaza Mayor", recommendedMode: ["train"], alternativeModes: ["car"], notesKey: "plazaMayor", officialUrl: transportOfficialUrls.renfeLines, active: true, lastVerified: transportLastVerified },
  { id: "mijas", origin: "Fuengirola", destination: "Mijas Pueblo", recommendedMode: ["intercity-bus"], alternativeModes: ["taxi", "car"], notesKey: "mijas", officialUrl: transportOfficialUrls.mijasRoute, active: true, lastVerified: transportLastVerified },
  { id: "marbella", origin: "Fuengirola", destination: "Marbella", recommendedMode: ["intercity-bus", "car"], alternativeModes: ["taxi"], notesKey: "marbella", officialUrl: transportOfficialUrls.intercityConsortium, active: true, lastVerified: transportLastVerified },
  { id: "inside-fuengirola", origin: "Apartamento Veramar", destination: "Fuengirola", recommendedMode: ["walking", "urban-bus"], alternativeModes: ["taxi"], notesKey: "inside", officialUrl: transportOfficialUrls.urbanBus, active: true, lastVerified: transportLastVerified }
];

export const transportMapPoints: TransportMapPoint[] = [
  { id: "apartment-zone", type: "apartment", lat: 36.5349, lng: -4.6323, sectionId: "walking" },
  { id: "fuengirola-train", type: "train", lat: 36.5392, lng: -4.6247, sectionId: "train", externalUrl: transportOfficialUrls.renfeLines },
  { id: "bus-station", type: "bus", lat: 36.5402, lng: -4.6253, sectionId: "intercity-bus", externalUrl: transportOfficialUrls.busStation },
  { id: "taxi-zone", type: "taxi", lat: 36.5398, lng: -4.6261, sectionId: "taxi", externalUrl: transportOfficialUrls.radioTaxi },
  { id: "miramar", type: "shopping", lat: 36.5324, lng: -4.6348, sectionId: "parking", externalUrl: "https://www.miramarcc.com/" },
  { id: "sohail", type: "attraction", lat: 36.5297, lng: -4.6345, sectionId: "walking" },
  { id: "historic-centre", type: "city", lat: 36.5394, lng: -4.6258, sectionId: "walking" },
  { id: "bioparc", type: "attraction", lat: 36.5386, lng: -4.6282, sectionId: "walking" },
  { id: "airport", type: "airport", lat: 36.6752, lng: -4.4896, sectionId: "train", externalUrl: transportOfficialUrls.renfeLines },
  { id: "malaga", type: "city", lat: 36.7202, lng: -4.4203, sectionId: "train", externalUrl: transportOfficialUrls.renfeLines }
];
