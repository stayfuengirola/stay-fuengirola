import { Locale } from "@/i18n/locales";

export type LocalizedText = Record<Locale, string>;

export type GuideConcert = {
  id: string;
  artist: string;
  title?: LocalizedText;
  date: string;
  dateLabel: LocalizedText;
  venue: LocalizedText;
  category: LocalizedText;
  image?: string;
  url: string;
  ctaLabel: LocalizedText;
  featured?: boolean;
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

export const guideConcerts: GuideConcert[] = [
  {
    id: "pablo-alboran-2026",
    artist: "Pablo Alborán",
    date: "2026-06-06",
    dateLabel: { es: "6 junio 2026", en: "6 June 2026", fi: "6. kesäkuuta 2026", sv: "6 juni 2026", no: "6. juni 2026" },
    venue: {
      es: "Marenostrum Fuengirola",
      en: "Marenostrum Fuengirola",
      fi: "Marenostrum Fuengirola",
      sv: "Marenostrum Fuengirola",
      no: "Marenostrum Fuengirola"
    },
    category: { es: "Concierto", en: "Concert", fi: "Konsertti", sv: "Konsert", no: "Konsert" },
    url: "https://marenostrumfuengirola.com/eventos/pablo-alboran/",
    ctaLabel: { es: "Ver entradas", en: "View tickets", fi: "Katso liput", sv: "Se biljetter", no: "Se billetter" },
    featured: true
  },
  {
    id: "aitana-2026",
    artist: "Aitana",
    date: "2026-06-19",
    dateLabel: { es: "19 junio 2026", en: "19 June 2026", fi: "19. kesäkuuta 2026", sv: "19 juni 2026", no: "19. juni 2026" },
    venue: {
      es: "Marenostrum Fuengirola",
      en: "Marenostrum Fuengirola",
      fi: "Marenostrum Fuengirola",
      sv: "Marenostrum Fuengirola",
      no: "Marenostrum Fuengirola"
    },
    category: { es: "Concierto", en: "Concert", fi: "Konsertti", sv: "Konsert", no: "Konsert" },
    url: "https://marenostrumfuengirola.com/eventos/aitana/",
    ctaLabel: { es: "Ver entradas", en: "View tickets", fi: "Katso liput", sv: "Se biljetter", no: "Se billetter" },
    featured: true
  },
  {
    id: "la-oreja-de-van-gogh-2026",
    artist: "La Oreja de Van Gogh",
    date: "2026-06-27",
    dateLabel: { es: "27 junio 2026", en: "27 June 2026", fi: "27. kesäkuuta 2026", sv: "27 juni 2026", no: "27. juni 2026" },
    venue: {
      es: "Marenostrum Fuengirola",
      en: "Marenostrum Fuengirola",
      fi: "Marenostrum Fuengirola",
      sv: "Marenostrum Fuengirola",
      no: "Marenostrum Fuengirola"
    },
    category: { es: "Concierto", en: "Concert", fi: "Konsertti", sv: "Konsert", no: "Konsert" },
    url: "https://marenostrumfuengirola.com/eventos/la-oreja-de-van-gogh-tantas-cosas-que-contar-tour-2026/",
    ctaLabel: { es: "Ver información", en: "View info", fi: "Katso tiedot", sv: "Se information", no: "Se informasjon" }
  },
  {
    id: "sting-2026",
    artist: "Sting",
    date: "2026-07-13",
    dateLabel: { es: "13 julio 2026", en: "13 July 2026", fi: "13. heinäkuuta 2026", sv: "13 juli 2026", no: "13. juli 2026" },
    venue: {
      es: "Marenostrum Fuengirola",
      en: "Marenostrum Fuengirola",
      fi: "Marenostrum Fuengirola",
      sv: "Marenostrum Fuengirola",
      no: "Marenostrum Fuengirola"
    },
    category: { es: "Concierto", en: "Concert", fi: "Konsertti", sv: "Konsert", no: "Konsert" },
    url: "https://marenostrumfuengirola.com/eventos/sting/",
    ctaLabel: { es: "Ver información", en: "View info", fi: "Katso tiedot", sv: "Se information", no: "Se informasjon" }
  },
  {
    id: "alejandro-sanz-2026",
    artist: "Alejandro Sanz",
    date: "2026-07-24",
    dateLabel: { es: "24 julio 2026", en: "24 July 2026", fi: "24. heinäkuuta 2026", sv: "24 juli 2026", no: "24. juli 2026" },
    venue: {
      es: "Marenostrum Fuengirola",
      en: "Marenostrum Fuengirola",
      fi: "Marenostrum Fuengirola",
      sv: "Marenostrum Fuengirola",
      no: "Marenostrum Fuengirola"
    },
    category: { es: "Concierto", en: "Concert", fi: "Konsertti", sv: "Konsert", no: "Konsert" },
    url: "https://marenostrumfuengirola.com/",
    ctaLabel: { es: "Ver entradas", en: "View tickets", fi: "Katso liput", sv: "Se biljetter", no: "Se billetter" },
    featured: true
  },
  {
    id: "lola-indigo-2026",
    artist: "Lola Indigo",
    date: "2026-08-14",
    dateLabel: { es: "14 agosto 2026", en: "14 August 2026", fi: "14. elokuuta 2026", sv: "14 augusti 2026", no: "14. august 2026" },
    venue: {
      es: "Marenostrum Fuengirola",
      en: "Marenostrum Fuengirola",
      fi: "Marenostrum Fuengirola",
      sv: "Marenostrum Fuengirola",
      no: "Marenostrum Fuengirola"
    },
    category: { es: "Concierto", en: "Concert", fi: "Konsertti", sv: "Konsert", no: "Konsert" },
    url: "https://marenostrumfuengirola.com/",
    ctaLabel: { es: "Ver programación", en: "View programme", fi: "Katso ohjelma", sv: "Se program", no: "Se program" }
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
    title: {
      es: "Marenostrum",
      en: "Marenostrum",
      fi: "Marenostrum",
      sv: "Marenostrum",
      no: "Marenostrum"
    },
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
