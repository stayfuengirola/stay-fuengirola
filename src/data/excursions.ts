export type ExcursionCategory = "culture" | "nature" | "family" | "coast" | "village" | "adventure";
export type ExcursionDuration = "half-day" | "full-day" | "long-full-day";
export type ExcursionTransport = "train" | "bus" | "car" | "taxi" | "organized-tour";
export type ExcursionDifficulty = "easy" | "moderate" | "demanding";
export type ExcursionOfficialDestination = "tourism" | "transport" | "tickets" | "access";

export interface ExcursionOfficialLink {
  destination: ExcursionOfficialDestination;
  url: string;
}

export interface Excursion {
  id: string;
  slug: string;
  titleKey: string;
  introKey: string;
  descriptionKey: string;
  categories: ExcursionCategory[];
  duration: ExcursionDuration;
  transport: ExcursionTransport[];
  suitableWithoutCar: boolean;
  suitableForChildren: boolean;
  advanceBooking: boolean;
  difficulty?: ExcursionDifficulty;
  officialLinks: ExcursionOfficialLink[];
  image: string;
  featured?: boolean;
  active: boolean;
  lastVerified: string;
  coordinates: [number, number];
}

export const excursionOfficialUrls = {
  mijasTourism: "https://turismo.mijas.es/en/",
  malagaTourism: "https://www.spain.info/en/destination/malaga/",
  renfeMalaga: "https://www.renfe.com/es/en/suburban/suburban-malaga/lines",
  benalmadenaTourism: "https://www.visitcostadelsol.com/destinations/western-costa-del-sol/benalmadena-p9971",
  benalmadenaCableCar: "https://www.telefericobenalmadena.com/",
  marbellaTourism: "https://turismo.marbella.es/",
  rondaTourism: "https://info.turismoderonda.es/",
  rondaBridge: "https://info.turismoderonda.es/patrimonio-cultural/puente-nuevo-sobre-el-tajo/",
  nerjaSpainInfo: "https://www.spain.info/en/destination/nerja/",
  frigilianaTourism: "https://www.turismofrigiliana.es/en/what-to-see.html",
  nerjaCaves: "https://www.cuevadenerja.es/",
  caminitoTickets: "https://www.caminitodelrey.info/",
  caminitoRules: "https://www.caminitodelrey.info/es/tu-visita/prohibiciones",
  caminitoHowToArrive: "https://www.caminitodelrey.info/es/como-llegar",
  granadaTourism: "https://turismo.granada.org/en/",
  alhambraTickets: "https://tickets.alhambra-patronato.es/",
  gibraltarTourism: "https://www.visitgibraltar.gi/",
  gibraltarEntry: "https://www.gov.uk/foreign-travel-advice/gibraltar/entry-requirements",
  esteponaTourism: "https://turismo.estepona.es/",
  esteponaSpainInfo: "https://www.spain.info/en/destination/estepona/",
  avanzaBus: "https://booking.avanzabus.com/",
  consorcioMalaga: "https://ctmam.es/"
} as const;

export const excursions: Excursion[] = [
  {
    id: "mijas-pueblo",
    slug: "mijas-pueblo",
    titleKey: "mijasTitle",
    introKey: "mijasIntro",
    descriptionKey: "mijasDescription",
    categories: ["village", "culture", "family"],
    duration: "half-day",
    transport: ["bus", "taxi", "car"],
    suitableWithoutCar: true,
    suitableForChildren: true,
    advanceBooking: false,
    difficulty: "easy",
    officialLinks: [{ destination: "tourism", url: excursionOfficialUrls.mijasTourism }],
    image: "/images/mijas-pueblo.webp",
    featured: true,
    active: true,
    lastVerified: "2026-07-23",
    coordinates: [36.5956, -4.6373]
  },
  {
    id: "malaga",
    slug: "malaga",
    titleKey: "malagaTitle",
    introKey: "malagaIntro",
    descriptionKey: "malagaDescription",
    categories: ["culture", "family", "coast"],
    duration: "full-day",
    transport: ["train", "car"],
    suitableWithoutCar: true,
    suitableForChildren: true,
    advanceBooking: true,
    difficulty: "easy",
    officialLinks: [
      { destination: "tourism", url: excursionOfficialUrls.malagaTourism },
      { destination: "transport", url: excursionOfficialUrls.renfeMalaga }
    ],
    image: "/images/guide/excursions/malaga-centro-historico.svg",
    featured: true,
    active: true,
    lastVerified: "2026-07-23",
    coordinates: [36.7213, -4.4214]
  },
  {
    id: "benalmadena",
    slug: "benalmadena",
    titleKey: "benalmadenaTitle",
    introKey: "benalmadenaIntro",
    descriptionKey: "benalmadenaDescription",
    categories: ["family", "coast", "nature"],
    duration: "half-day",
    transport: ["train", "bus", "car", "taxi"],
    suitableWithoutCar: true,
    suitableForChildren: true,
    advanceBooking: false,
    difficulty: "easy",
    officialLinks: [
      { destination: "tourism", url: excursionOfficialUrls.benalmadenaTourism },
      { destination: "tickets", url: excursionOfficialUrls.benalmadenaCableCar }
    ],
    image: "/images/guide/excursions/benalmadena-puerto-marina.svg",
    active: true,
    lastVerified: "2026-07-23",
    coordinates: [36.5994, -4.5160]
  },
  {
    id: "marbella",
    slug: "marbella",
    titleKey: "marbellaTitle",
    introKey: "marbellaIntro",
    descriptionKey: "marbellaDescription",
    categories: ["culture", "coast"],
    duration: "full-day",
    transport: ["bus", "car", "organized-tour"],
    suitableWithoutCar: true,
    suitableForChildren: true,
    advanceBooking: false,
    difficulty: "easy",
    officialLinks: [{ destination: "tourism", url: excursionOfficialUrls.marbellaTourism }],
    image: "/images/guide/excursions/marbella-casco-antiguo.svg",
    active: true,
    lastVerified: "2026-07-23",
    coordinates: [36.5101, -4.8824]
  },
  {
    id: "ronda",
    slug: "ronda",
    titleKey: "rondaTitle",
    introKey: "rondaIntro",
    descriptionKey: "rondaDescription",
    categories: ["culture", "nature"],
    duration: "full-day",
    transport: ["car", "bus", "organized-tour"],
    suitableWithoutCar: true,
    suitableForChildren: true,
    advanceBooking: true,
    difficulty: "moderate",
    officialLinks: [
      { destination: "tourism", url: excursionOfficialUrls.rondaTourism },
      { destination: "tickets", url: excursionOfficialUrls.rondaBridge }
    ],
    image: "/images/guide/excursions/ronda-puente-nuevo.svg",
    featured: true,
    active: true,
    lastVerified: "2026-07-23",
    coordinates: [36.7423, -5.1671]
  },
  {
    id: "nerja-frigiliana",
    slug: "nerja-frigiliana",
    titleKey: "nerjaTitle",
    introKey: "nerjaIntro",
    descriptionKey: "nerjaDescription",
    categories: ["coast", "village", "culture", "family"],
    duration: "full-day",
    transport: ["car", "organized-tour"],
    suitableWithoutCar: false,
    suitableForChildren: true,
    advanceBooking: true,
    difficulty: "moderate",
    officialLinks: [
      { destination: "tourism", url: excursionOfficialUrls.nerjaSpainInfo },
      { destination: "tourism", url: excursionOfficialUrls.frigilianaTourism },
      { destination: "tickets", url: excursionOfficialUrls.nerjaCaves }
    ],
    image: "/images/guide/excursions/nerja-balcon-europa.svg",
    featured: true,
    active: true,
    lastVerified: "2026-07-23",
    coordinates: [36.7469, -3.8790]
  },
  {
    id: "caminito-del-rey",
    slug: "caminito-del-rey",
    titleKey: "caminitoTitle",
    introKey: "caminitoIntro",
    descriptionKey: "caminitoDescription",
    categories: ["nature", "adventure"],
    duration: "full-day",
    transport: ["car", "organized-tour", "train"],
    suitableWithoutCar: false,
    suitableForChildren: false,
    advanceBooking: true,
    difficulty: "demanding",
    officialLinks: [
      { destination: "tickets", url: excursionOfficialUrls.caminitoTickets },
      { destination: "access", url: excursionOfficialUrls.caminitoRules },
      { destination: "transport", url: excursionOfficialUrls.caminitoHowToArrive }
    ],
    image: "/images/guide/excursions/caminito-del-rey.svg",
    featured: true,
    active: true,
    lastVerified: "2026-07-23",
    coordinates: [36.9149, -4.7724]
  },
  {
    id: "granada",
    slug: "granada",
    titleKey: "granadaTitle",
    introKey: "granadaIntro",
    descriptionKey: "granadaDescription",
    categories: ["culture"],
    duration: "long-full-day",
    transport: ["car", "bus", "organized-tour"],
    suitableWithoutCar: true,
    suitableForChildren: true,
    advanceBooking: true,
    difficulty: "moderate",
    officialLinks: [
      { destination: "tourism", url: excursionOfficialUrls.granadaTourism },
      { destination: "tickets", url: excursionOfficialUrls.alhambraTickets }
    ],
    image: "/images/guide/excursions/granada-alhambra.svg",
    featured: true,
    active: true,
    lastVerified: "2026-07-23",
    coordinates: [37.1761, -3.5881]
  },
  {
    id: "gibraltar",
    slug: "gibraltar",
    titleKey: "gibraltarTitle",
    introKey: "gibraltarIntro",
    descriptionKey: "gibraltarDescription",
    categories: ["culture", "nature", "family"],
    duration: "long-full-day",
    transport: ["car", "bus", "organized-tour"],
    suitableWithoutCar: true,
    suitableForChildren: true,
    advanceBooking: true,
    difficulty: "moderate",
    officialLinks: [
      { destination: "tourism", url: excursionOfficialUrls.gibraltarTourism },
      { destination: "access", url: excursionOfficialUrls.gibraltarEntry }
    ],
    image: "/images/guide/excursions/gibraltar-roca.svg",
    featured: true,
    active: true,
    lastVerified: "2026-07-23",
    coordinates: [36.1408, -5.3536]
  },
  {
    id: "estepona",
    slug: "estepona",
    titleKey: "esteponaTitle",
    introKey: "esteponaIntro",
    descriptionKey: "esteponaDescription",
    categories: ["coast", "culture", "family"],
    duration: "full-day",
    transport: ["car", "bus"],
    suitableWithoutCar: true,
    suitableForChildren: true,
    advanceBooking: false,
    difficulty: "easy",
    officialLinks: [
      { destination: "tourism", url: excursionOfficialUrls.esteponaTourism },
      { destination: "tourism", url: excursionOfficialUrls.esteponaSpainInfo }
    ],
    image: "/images/guide/excursions/estepona-centro-historico.svg",
    active: true,
    lastVerified: "2026-07-23",
    coordinates: [36.4256, -5.1473]
  }
];

export const secondaryExcursionIdeas = [
  "antequera",
  "torremolinos",
  "la-cala-de-mijas",
  "casares",
  "puerto-de-la-duquesa",
  "el-torcal",
  "ronda-wineries",
  "coastal-route",
  "white-villages"
] as const;

