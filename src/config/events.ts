import { Locale } from "@/i18n/locales";

export type LocalizedText = Record<Locale, string>;
export type EventCategory = "concert" | "festival" | "fair" | "family" | "culture" | "sport" | "market" | "other";
export type EventLifecycleStatus = "upcoming" | "today" | "ongoing" | "past";
export type EventScheduleStatus = "scheduled" | "cancelled" | "postponed" | "rescheduled";

export interface FuengirolaEvent {
  id: string;
  slug: string;
  title: LocalizedText;
  subtitle?: LocalizedText;
  description: LocalizedText;
  startDate: string;
  endDate?: string;
  startTime?: string;
  venue: LocalizedText;
  location?: LocalizedText;
  category: EventCategory;
  image?: string;
  officialUrl?: string;
  ticketUrl?: string;
  featured?: boolean;
  free?: boolean;
  recurring?: boolean;
  published?: boolean;
  status?: EventScheduleStatus;
}

export type PermanentActivity = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  tag: LocalizedText;
};

export type AnnualEvent = {
  id: string;
  icon: "fair" | "world" | "christmas" | "fire" | "music" | "culture" | "sport";
  title: LocalizedText;
  season: LocalizedText;
  description: LocalizedText;
};

export type AgendaMonth = {
  id: string;
  month: LocalizedText;
  events: LocalizedText[];
};

export const marenostrumOfficialUrl = "https://marenostrumfuengirola.com/";
export const fuengirolaOfficialAgendaUrl = "https://turismo.fuengirola.es/";

// Añadir aquí únicamente eventos confirmados mediante fuentes oficiales.
export const fuengirolaEvents: FuengirolaEvent[] = [
  {
    id: "pablo-alboran-2026",
    slug: "pablo-alboran-marenostrum-2026",
    title: {
      es: "Pablo Alborán",
      en: "Pablo Alborán",
      fi: "Pablo Alborán",
      sv: "Pablo Alborán",
      no: "Pablo Alborán"
    },
    subtitle: {
      es: "Concierto en Marenostrum",
      en: "Concert at Marenostrum",
      fi: "Konsertti Marenostrumissa",
      sv: "Konsert på Marenostrum",
      no: "Konsert på Marenostrum"
    },
    description: {
      es: "Una noche de música en el recinto junto al Castillo Sohail.",
      en: "An evening of music at the venue next to Sohail Castle.",
      fi: "Musiikki-ilta Sohailin linnan vieressä sijaitsevalla alueella.",
      sv: "En musikkväll på området intill Sohail-slottet.",
      no: "En musikkaften på arenaen ved siden av Sohail-slottet."
    },
    startDate: "2026-06-06",
    startTime: "22:00",
    venue: {
      es: "Marenostrum Fuengirola",
      en: "Marenostrum Fuengirola",
      fi: "Marenostrum Fuengirola",
      sv: "Marenostrum Fuengirola",
      no: "Marenostrum Fuengirola"
    },
    location: {
      es: "Junto al Castillo Sohail",
      en: "Next to Sohail Castle",
      fi: "Sohailin linnan vieressä",
      sv: "Intill Sohail-slottet",
      no: "Ved siden av Sohail-slottet"
    },
    category: "concert",
    officialUrl: "https://marenostrumfuengirola.com/eventos/pablo-alboran/",
    ticketUrl: "https://marenostrumfuengirola.com/eventos/pablo-alboran/",
    featured: true
  },
  {
    id: "aitana-2026",
    slug: "aitana-marenostrum-2026",
    title: { es: "Aitana", en: "Aitana", fi: "Aitana", sv: "Aitana", no: "Aitana" },
    subtitle: {
      es: "Concierto en Marenostrum",
      en: "Concert at Marenostrum",
      fi: "Konsertti Marenostrumissa",
      sv: "Konsert på Marenostrum",
      no: "Konsert på Marenostrum"
    },
    description: {
      es: "Concierto de verano dentro de la programación de Marenostrum Fuengirola.",
      en: "A summer concert within the Marenostrum Fuengirola programme.",
      fi: "Kesäkonsertti osana Marenostrum Fuengirolan ohjelmaa.",
      sv: "Sommarkonsert inom programmet för Marenostrum Fuengirola.",
      no: "Sommerkonsert som del av programmet til Marenostrum Fuengirola."
    },
    startDate: "2026-06-19",
    startTime: "22:00",
    venue: {
      es: "Marenostrum Fuengirola",
      en: "Marenostrum Fuengirola",
      fi: "Marenostrum Fuengirola",
      sv: "Marenostrum Fuengirola",
      no: "Marenostrum Fuengirola"
    },
    location: {
      es: "Junto al Castillo Sohail",
      en: "Next to Sohail Castle",
      fi: "Sohailin linnan vieressä",
      sv: "Intill Sohail-slottet",
      no: "Ved siden av Sohail-slottet"
    },
    category: "concert",
    officialUrl: "https://marenostrumfuengirola.com/eventos/aitana/",
    ticketUrl: "https://marenostrumfuengirola.com/eventos/aitana/",
    featured: true
  },
  {
    id: "sting-2026",
    slug: "sting-marenostrum-2026",
    title: { es: "Sting", en: "Sting", fi: "Sting", sv: "Sting", no: "Sting" },
    subtitle: {
      es: "Concierto en Marenostrum",
      en: "Concert at Marenostrum",
      fi: "Konsertti Marenostrumissa",
      sv: "Konsert på Marenostrum",
      no: "Konsert på Marenostrum"
    },
    description: {
      es: "Actuación internacional en el ciclo de conciertos de Marenostrum.",
      en: "An international performance in the Marenostrum concert series.",
      fi: "Kansainvälinen esiintyminen Marenostrumin konserttisarjassa.",
      sv: "Internationellt framträdande i Marenostrums konsertserie.",
      no: "Internasjonal opptreden i Marenostrums konsertserie."
    },
    startDate: "2026-07-13",
    startTime: "22:00",
    venue: {
      es: "Marenostrum Fuengirola",
      en: "Marenostrum Fuengirola",
      fi: "Marenostrum Fuengirola",
      sv: "Marenostrum Fuengirola",
      no: "Marenostrum Fuengirola"
    },
    location: {
      es: "Junto al Castillo Sohail",
      en: "Next to Sohail Castle",
      fi: "Sohailin linnan vieressä",
      sv: "Intill Sohail-slottet",
      no: "Ved siden av Sohail-slottet"
    },
    category: "concert",
    officialUrl: "https://marenostrumfuengirola.com/eventos/sting/",
    ticketUrl: "https://marenostrumfuengirola.com/eventos/sting/"
  },
  {
    id: "alejandro-sanz-2026",
    slug: "alejandro-sanz-marenostrum-2026",
    title: {
      es: "Alejandro Sanz",
      en: "Alejandro Sanz",
      fi: "Alejandro Sanz",
      sv: "Alejandro Sanz",
      no: "Alejandro Sanz"
    },
    subtitle: {
      es: "Concierto en Marenostrum",
      en: "Concert at Marenostrum",
      fi: "Konsertti Marenostrumissa",
      sv: "Konsert på Marenostrum",
      no: "Konsert på Marenostrum"
    },
    description: {
      es: "Concierto dentro de la programación de verano de Marenostrum Fuengirola.",
      en: "A concert within the summer programme at Marenostrum Fuengirola.",
      fi: "Konsertti Marenostrum Fuengirolan kesäohjelmassa.",
      sv: "Konsert inom sommarprogrammet på Marenostrum Fuengirola.",
      no: "Konsert i sommerprogrammet til Marenostrum Fuengirola."
    },
    startDate: "2026-07-24",
    startTime: "22:00",
    venue: {
      es: "Marenostrum Fuengirola",
      en: "Marenostrum Fuengirola",
      fi: "Marenostrum Fuengirola",
      sv: "Marenostrum Fuengirola",
      no: "Marenostrum Fuengirola"
    },
    location: {
      es: "Junto al Castillo Sohail",
      en: "Next to Sohail Castle",
      fi: "Sohailin linnan vieressä",
      sv: "Intill Sohail-slottet",
      no: "Ved siden av Sohail-slottet"
    },
    category: "concert",
    officialUrl: marenostrumOfficialUrl,
    ticketUrl: marenostrumOfficialUrl,
    featured: true
  },
  {
    id: "lola-indigo-2026",
    slug: "lola-indigo-marenostrum-2026",
    title: { es: "Lola Indigo", en: "Lola Indigo", fi: "Lola Indigo", sv: "Lola Indigo", no: "Lola Indigo" },
    subtitle: {
      es: "Concierto en Marenostrum",
      en: "Concert at Marenostrum",
      fi: "Konsertti Marenostrumissa",
      sv: "Konsert på Marenostrum",
      no: "Konsert på Marenostrum"
    },
    description: {
      es: "Concierto de verano junto al mar en Fuengirola.",
      en: "A summer concert by the sea in Fuengirola.",
      fi: "Kesäkonsertti meren äärellä Fuengirolassa.",
      sv: "Sommarkonsert vid havet i Fuengirola.",
      no: "Sommerkonsert ved sjøen i Fuengirola."
    },
    startDate: "2026-08-14",
    startTime: "22:00",
    venue: {
      es: "Marenostrum Fuengirola",
      en: "Marenostrum Fuengirola",
      fi: "Marenostrum Fuengirola",
      sv: "Marenostrum Fuengirola",
      no: "Marenostrum Fuengirola"
    },
    location: {
      es: "Junto al Castillo Sohail",
      en: "Next to Sohail Castle",
      fi: "Sohailin linnan vieressä",
      sv: "Intill Sohail-slottet",
      no: "Ved siden av Sohail-slottet"
    },
    category: "concert",
    officialUrl: marenostrumOfficialUrl,
    ticketUrl: marenostrumOfficialUrl
  }
];

export const permanentActivities: PermanentActivity[] = [
  {
    id: "bioparc",
    title: { es: "Bioparc Fuengirola", en: "Bioparc Fuengirola", fi: "Bioparc Fuengirola", sv: "Bioparc Fuengirola", no: "Bioparc Fuengirola" },
    tag: { es: "Familias", en: "Families", fi: "Perheet", sv: "Familjer", no: "Familier" },
    description: {
      es: "Un plan cómodo para descubrir naturaleza y animales cerca del centro.",
      en: "An easy plan for discovering nature and animals close to the town center.",
      fi: "Helppo tapa tutustua luontoon ja eläimiin lähellä keskustaa.",
      sv: "Ett smidigt sätt att upptäcka natur och djur nära centrum.",
      no: "En enkel måte å oppleve natur og dyr nær sentrum."
    }
  },
  {
    id: "castillo-sohail",
    title: { es: "Castillo Sohail", en: "Sohail Castle", fi: "Sohailin linna", sv: "Sohail-slottet", no: "Sohail-slottet" },
    tag: { es: "Paseo", en: "Walk", fi: "Kävely", sv: "Promenad", no: "Tur" },
    description: {
      es: "Un lugar perfecto para pasear, ver el mar y conectar con la historia de Fuengirola.",
      en: "A perfect place to walk, see the sea, and connect with Fuengirola's history.",
      fi: "Täydellinen paikka kävellä, nähdä meri ja tutustua Fuengirolan historiaan.",
      sv: "En perfekt plats för promenad, havsutsikt och Fuengirolas historia.",
      no: "Et perfekt sted for en tur, havutsikt og Fuengirolas historie."
    }
  },
  {
    id: "parque-fluvial",
    title: { es: "Parque fluvial", en: "Riverside park", fi: "Jokipuisto", sv: "Flodparken", no: "Elveparken" },
    tag: { es: "Aire libre", en: "Outdoors", fi: "Ulkona", sv: "Utomhus", no: "Utendørs" },
    description: {
      es: "Zona tranquila para caminar, correr o ir hacia el entorno del castillo.",
      en: "A quiet area for walking, running, or heading towards the castle area.",
      fi: "Rauhallinen alue kävelyyn, juoksuun tai linnan suuntaan kulkemiseen.",
      sv: "Ett lugnt område för promenader, löpning eller vägen mot slottet.",
      no: "Et rolig område for turer, løping eller veien mot slottet."
    }
  },
  {
    id: "paseo-maritimo",
    title: { es: "Paseo marítimo", en: "Seafront promenade", fi: "Rantapromenadi", sv: "Strandpromenaden", no: "Strandpromenaden" },
    tag: { es: "Todo el año", en: "All year", fi: "Ympäri vuoden", sv: "Hela året", no: "Hele året" },
    description: {
      es: "Ideal para caminar junto al mar, tomar algo o ver el atardecer.",
      en: "Ideal for walking by the sea, having a drink, or watching the sunset.",
      fi: "Ihanteellinen kävelyyn meren äärellä, juomalle tai auringonlaskun katseluun.",
      sv: "Perfekt för promenader vid havet, en drink eller solnedgången.",
      no: "Ideell for turer ved sjøen, noe å drikke eller solnedgangen."
    }
  },
  {
    id: "playas",
    title: { es: "Playas", en: "Beaches", fi: "Rannat", sv: "Stränder", no: "Strender" },
    tag: { es: "Costa del Sol", en: "Costa del Sol", fi: "Costa del Sol", sv: "Costa del Sol", no: "Costa del Sol" },
    description: {
      es: "Playas amplias para familias, paseos, baño tranquilo o deportes acuáticos.",
      en: "Wide beaches for families, walks, calm swimming, or water sports.",
      fi: "Leveitä rantoja perheille, kävelyyn, rauhalliseen uintiin tai vesiurheiluun.",
      sv: "Breda stränder för familjer, promenader, lugna bad eller vattensport.",
      no: "Brede strender for familier, turer, rolige bad eller vannsport."
    }
  },
  {
    id: "puerto-deportivo",
    title: { es: "Puerto deportivo", en: "Marina", fi: "Venesatama", sv: "Småbåtshamnen", no: "Småbåthavnen" },
    tag: { es: "Mar", en: "Sea", fi: "Meri", sv: "Hav", no: "Sjø" },
    description: {
      es: "Un paseo agradable para ver barcos, terrazas y ambiente costero.",
      en: "A pleasant walk for boats, terraces, and a coastal atmosphere.",
      fi: "Mukava kävely veneiden, terassien ja rannikkotunnelman äärellä.",
      sv: "En trevlig promenad med båtar, uteserveringar och kustkänsla.",
      no: "En hyggelig tur med båter, terrasser og kyststemning."
    }
  },
  {
    id: "barco",
    title: { es: "Excursiones en barco", en: "Boat trips", fi: "Veneretket", sv: "Båtutflykter", no: "Båtturer" },
    tag: { es: "Temporada", en: "Seasonal", fi: "Kausiluonteinen", sv: "Säsong", no: "Sesong" },
    description: {
      es: "Una forma relajada de ver la costa desde el mar cuando hay salidas disponibles.",
      en: "A relaxed way to see the coast from the sea when departures are available.",
      fi: "Rento tapa nähdä rannikko mereltä, kun lähtöjä on saatavilla.",
      sv: "Ett avkopplande sätt att se kusten från havet när avgångar finns.",
      no: "En rolig måte å se kysten fra sjøen når turer er tilgjengelige."
    }
  },
  {
    id: "acuaticas",
    title: { es: "Actividades acuáticas", en: "Water activities", fi: "Vesiaktiviteetit", sv: "Vattenaktiviteter", no: "Vannaktiviteter" },
    tag: { es: "Verano", en: "Summer", fi: "Kesä", sv: "Sommar", no: "Sommer" },
    description: {
      es: "Paddle surf, juegos en el mar y opciones de temporada para días de playa.",
      en: "Paddleboarding, sea activities, and seasonal options for beach days.",
      fi: "Suppailua, merileikkejä ja kausivaihtoehtoja rantapäiviin.",
      sv: "Paddelsurf, aktiviteter i havet och säsongsalternativ för stranddagar.",
      no: "Paddleboard, sjøaktiviteter og sesongtilbud for stranddager."
    }
  },
  {
    id: "centro-historico",
    title: { es: "Centro histórico", en: "Historic center", fi: "Historiallinen keskusta", sv: "Historiska centrum", no: "Historisk sentrum" },
    tag: { es: "Local", en: "Local", fi: "Paikallinen", sv: "Lokalt", no: "Lokalt" },
    description: {
      es: "Calles peatonales, tiendas, heladerías y terrazas para un paseo tranquilo.",
      en: "Pedestrian streets, shops, ice cream parlors, and terraces for a relaxed stroll.",
      fi: "Kävelykatuja, kauppoja, jäätelöbaareja ja terasseja rauhalliseen kävelyyn.",
      sv: "Gågator, butiker, glassbarer och uteserveringar för en lugn promenad.",
      no: "Gågater, butikker, iskrembarer og terrasser for en rolig spasertur."
    }
  },
  {
    id: "lluvia",
    title: { es: "Qué hacer cuando llueve", en: "What to do when it rains", fi: "Mitä tehdä sateella", sv: "Vad man kan göra när det regnar", no: "Hva du kan gjøre når det regner" },
    tag: { es: "Plan alternativo", en: "Backup plan", fi: "Vaihtoehtoinen suunnitelma", sv: "Reservplan", no: "Reserveplan" },
    description: {
      es: "Miramar, cine, compras, cafeterías y planes tranquilos para días menos soleados.",
      en: "Miramar, cinema, shopping, cafes, and quieter plans for less sunny days.",
      fi: "Miramar, elokuvateatteri, ostokset, kahvilat ja rauhalliset suunnitelmat pilvisempiin päiviin.",
      sv: "Miramar, bio, shopping, kaféer och lugnare planer för mindre soliga dagar.",
      no: "Miramar, kino, shopping, kaféer og rolige planer for mindre solfylte dager."
    }
  }
];

export const annualFuengirolaEvents: AnnualEvent[] = [
  {
    id: "feria-del-rosario",
    icon: "fair",
    title: { es: "Feria del Rosario", en: "Rosario Fair", fi: "Rosarion feria", sv: "Rosario-festen", no: "Rosario-festivalen" },
    season: { es: "Octubre", en: "October", fi: "Lokakuu", sv: "Oktober", no: "Oktober" },
    description: {
      es: "La feria grande de Fuengirola, con ambiente local, música y casetas.",
      en: "Fuengirola's main fair, with a local atmosphere, music, and fair booths.",
      fi: "Fuengirolan pääjuhla, jossa on paikallista tunnelmaa, musiikkia ja juhlatelttoja.",
      sv: "Fuengirolas stora feria, med lokal stämning, musik och festtält.",
      no: "Fuengirolas store feria, med lokal stemning, musikk og festtelt."
    }
  },
  {
    id: "feria-internacional-paises",
    icon: "world",
    title: {
      es: "Feria Internacional de los Países",
      en: "International Fair of Countries",
      fi: "Kansainvälinen maiden feria",
      sv: "Internationella ländernas feria",
      no: "Internasjonal landfestival"
    },
    season: { es: "Primavera", en: "Spring", fi: "Kevät", sv: "Vår", no: "Vår" },
    description: {
      es: "Uno de los eventos más conocidos de la ciudad, con gastronomía, música y culturas del mundo.",
      en: "One of the city's best-known events, with food, music, and cultures from around the world.",
      fi: "Yksi kaupungin tunnetuimmista tapahtumista, jossa on ruokaa, musiikkia ja kulttuureja eri puolilta maailmaa.",
      sv: "Ett av stadens mest kända evenemang, med mat, musik och kulturer från hela världen.",
      no: "Et av byens mest kjente arrangementer, med mat, musikk og kulturer fra hele verden."
    }
  },
  {
    id: "navidad",
    icon: "christmas",
    title: { es: "Navidad", en: "Christmas", fi: "Joulu", sv: "Jul", no: "Jul" },
    season: { es: "Diciembre y enero", en: "December and January", fi: "Joulukuu ja tammikuu", sv: "December och januari", no: "Desember og januar" },
    description: {
      es: "Luces, mercados y actividades familiares en el centro durante el invierno.",
      en: "Lights, markets, and family activities in the town center during winter.",
      fi: "Valoja, markkinoita ja perheaktiviteetteja keskustassa talven aikana.",
      sv: "Belysning, marknader och familjeaktiviteter i centrum under vintern.",
      no: "Lys, markeder og familieaktiviteter i sentrum gjennom vinteren."
    }
  },
  {
    id: "san-juan",
    icon: "fire",
    title: { es: "Noche de San Juan", en: "San Juan Night", fi: "San Juan -yö", sv: "San Juan-natten", no: "San Juan-natten" },
    season: { es: "Junio", en: "June", fi: "Kesäkuu", sv: "Juni", no: "Juni" },
    description: {
      es: "Una noche especial junto al mar para dar la bienvenida al verano.",
      en: "A special night by the sea to welcome the summer.",
      fi: "Erityinen ilta meren äärellä kesän vastaanottamiseksi.",
      sv: "En speciell kväll vid havet för att välkomna sommaren.",
      no: "En spesiell kveld ved havet for å ønske sommeren velkommen."
    }
  },
  {
    id: "marenostrum",
    icon: "music",
    title: { es: "Marenostrum", en: "Marenostrum", fi: "Marenostrum", sv: "Marenostrum", no: "Marenostrum" },
    season: { es: "Primavera y verano", en: "Spring and summer", fi: "Kevät ja kesä", sv: "Vår och sommar", no: "Vår og sommer" },
    description: {
      es: "Conciertos y festivales frente al mar, junto al Castillo Sohail.",
      en: "Concerts and festivals by the sea, next to Sohail Castle.",
      fi: "Konsertteja ja festivaaleja meren äärellä, Sohailin linnan vieressä.",
      sv: "Konserter och festivaler vid havet, intill Sohail-slottet.",
      no: "Konserter og festivaler ved sjøen, ved siden av Sohail-slottet."
    }
  },
  {
    id: "semana-santa",
    icon: "culture",
    title: { es: "Semana Santa", en: "Holy Week", fi: "Pääsiäisviikko", sv: "Påskveckan", no: "Påskeuken" },
    season: { es: "Marzo o abril", en: "March or April", fi: "Maaliskuu tai huhtikuu", sv: "Mars eller april", no: "Mars eller april" },
    description: {
      es: "Procesiones y tradición andaluza en las calles del centro.",
      en: "Processions and Andalusian tradition in the town center streets.",
      fi: "Kulkueita ja andalusialaista perinnettä keskustan kaduilla.",
      sv: "Processioner och andalusisk tradition på gatorna i centrum.",
      no: "Prosesjoner og andalusisk tradisjon i gatene i sentrum."
    }
  },
  {
    id: "eventos-deportivos",
    icon: "sport",
    title: { es: "Eventos deportivos", en: "Sports events", fi: "Urheilutapahtumat", sv: "Sportevenemang", no: "Sportsarrangementer" },
    season: { es: "Todo el año", en: "All year", fi: "Ympäri vuoden", sv: "Hela året", no: "Hele året" },
    description: {
      es: "Carreras, torneos y actividades al aire libre aprovechando el clima suave.",
      en: "Races, tournaments, and outdoor activities that make the most of the mild climate.",
      fi: "Juoksutapahtumia, turnauksia ja ulkoaktiviteetteja leudossa ilmastossa.",
      sv: "Lopp, turneringar och utomhusaktiviteter tack vare det milda klimatet.",
      no: "Løp, turneringer og utendørsaktiviteter som utnytter det milde klimaet."
    }
  }
];

export const fuengirolaAgenda: AgendaMonth[] = [
  {
    id: "april",
    month: { es: "Abril", en: "April", fi: "Huhtikuu", sv: "April", no: "April" },
    events: [
      {
        es: "Semana Santa y primeros eventos de primavera",
        en: "Holy Week and the first spring events",
        fi: "Pääsiäisviikko ja kevään ensimmäiset tapahtumat",
        sv: "Påskveckan och vårens första evenemang",
        no: "Påskeuken og de første vårarrangementene"
      }
    ]
  },
  {
    id: "may",
    month: { es: "Mayo", en: "May", fi: "Toukokuu", sv: "Maj", no: "Mai" },
    events: [
      {
        es: "Feria Internacional de los Países y arranque de conciertos",
        en: "International Fair of Countries and the start of the concert season",
        fi: "Kansainvälinen maiden feria ja konserttikauden alku",
        sv: "Internationella ländernas feria och starten på konsertsäsongen",
        no: "Internasjonal landfestival og starten på konsertsesongen"
      }
    ]
  },
  {
    id: "june",
    month: { es: "Junio", en: "June", fi: "Kesäkuu", sv: "Juni", no: "Juni" },
    events: [
      {
        es: "Marenostrum, Noche de San Juan y actividades junto al mar",
        en: "Marenostrum, San Juan Night, and seaside activities",
        fi: "Marenostrum, San Juan -yö ja tapahtumia meren äärellä",
        sv: "Marenostrum, San Juan-natten och aktiviteter vid havet",
        no: "Marenostrum, San Juan-natten og aktiviteter ved sjøen"
      }
    ]
  },
  {
    id: "july",
    month: { es: "Julio", en: "July", fi: "Heinäkuu", sv: "Juli", no: "Juli" },
    events: [
      {
        es: "Grandes conciertos de verano en Marenostrum",
        en: "Major summer concerts at Marenostrum",
        fi: "Suuret kesäkonsertit Marenostrumissa",
        sv: "Stora sommarkonserter på Marenostrum",
        no: "Store sommerkonserter på Marenostrum"
      }
    ]
  },
  {
    id: "august",
    month: { es: "Agosto", en: "August", fi: "Elokuu", sv: "Augusti", no: "August" },
    events: [
      {
        es: "Festivales, música y ambiente de verano en la costa",
        en: "Festivals, music, and summer atmosphere on the coast",
        fi: "Festivaaleja, musiikkia ja kesätunnelmaa rannikolla",
        sv: "Festivaler, musik och sommarkänsla vid kusten",
        no: "Festivaler, musikk og sommerstemning ved kysten"
      }
    ]
  },
  {
    id: "september",
    month: { es: "Septiembre", en: "September", fi: "Syyskuu", sv: "September", no: "September" },
    events: [
      {
        es: "Últimos eventos de verano y planes más tranquilos",
        en: "Late-summer events and quieter plans",
        fi: "Loppukesän tapahtumia ja rauhallisempia suunnitelmia",
        sv: "Sensommarevenemang och lugnare planer",
        no: "Sensommerarrangementer og roligere planer"
      }
    ]
  }
];

function parseLocalDate(isoDate: string) {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function startOfLocalDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function eventEndDate(event: FuengirolaEvent) {
  return parseLocalDate(event.endDate ?? event.startDate);
}

export function getPublishedEvents(events: FuengirolaEvent[] = fuengirolaEvents) {
  return events.filter((event) => event.published !== false);
}

export function getEventLifecycleStatus(event: FuengirolaEvent, today = new Date()): EventLifecycleStatus {
  const currentDay = startOfLocalDay(today).getTime();
  const startDay = parseLocalDate(event.startDate).getTime();
  const endDay = eventEndDate(event).getTime();

  if (currentDay < startDay) return "upcoming";
  if (currentDay === startDay) return event.endDate && endDay > startDay ? "ongoing" : "today";
  if (currentDay > startDay && currentDay <= endDay) return "ongoing";
  return "past";
}

export function isUpcomingEvent(event: FuengirolaEvent, today = new Date()) {
  return getEventLifecycleStatus(event, today) === "upcoming";
}

export function isOngoingEvent(event: FuengirolaEvent, today = new Date()) {
  return getEventLifecycleStatus(event, today) === "ongoing";
}

export function isPastEvent(event: FuengirolaEvent, today = new Date()) {
  return getEventLifecycleStatus(event, today) === "past";
}

export function sortEventsByDate(events: FuengirolaEvent[]) {
  return [...events].sort((a, b) => {
    const dateCompare = parseLocalDate(a.startDate).getTime() - parseLocalDate(b.startDate).getTime();
    if (dateCompare !== 0) return dateCompare;
    const timeCompare = (a.startTime ?? "").localeCompare(b.startTime ?? "");
    if (timeCompare !== 0) return timeCompare;
    return a.title.en.localeCompare(b.title.en);
  });
}

export function getVisibleUpcomingEvents(events: FuengirolaEvent[], today = new Date()) {
  const lifecycleOrder: Record<EventLifecycleStatus, number> = { ongoing: 0, today: 1, upcoming: 2, past: 3 };
  return sortEventsByDate(
    events.filter((event) => {
      const status = getEventLifecycleStatus(event, today);
      return status !== "past" && event.status !== "cancelled";
    })
  ).sort((a, b) => lifecycleOrder[getEventLifecycleStatus(a, today)] - lifecycleOrder[getEventLifecycleStatus(b, today)]);
}

export function getPastEvents(events: FuengirolaEvent[], today = new Date()) {
  return sortEventsByDate(events.filter((event) => getEventLifecycleStatus(event, today) === "past")).reverse();
}

export function isFeatureableEvent(event: FuengirolaEvent, today = new Date()) {
  return Boolean(event.featured && event.status !== "cancelled" && getEventLifecycleStatus(event, today) !== "past");
}
