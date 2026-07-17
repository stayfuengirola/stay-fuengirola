import { Locale } from "@/i18n/locales";

export type ThingsToDoEventsContent = {
  title: string;
  intro: string;
  concertsTitle: string;
  concertsIntro: string;
  noImageLabel: string;
  filtersLabel: string;
  filterLabels: Record<"all" | "concert" | "festival" | "fair" | "family" | "culture" | "sport", string>;
  categoryLabels: Record<"concert" | "festival" | "fair" | "family" | "culture" | "sport" | "market" | "other", string>;
  statusLabels: Record<"upcoming" | "today" | "ongoing" | "past" | "cancelled" | "postponed" | "rescheduled", string>;
  freeLabel: string;
  officialInfoLabel: string;
  ticketLabel: string;
  emptyTitle: string;
  emptyText: string;
  officialAgendaCta: string;
  marenostrumTitle: string;
  marenostrumText: string;
  marenostrumCta: string;
  annualTitle: string;
  agendaTitle: string;
  permanentTitle: string;
  permanentIntro: string;
  tipsTitle: string;
  tips: string[];
  mapTitle: string;
  mapAria: string;
  mapApartment: string;
  pastTitle: string;
  pastIntro: string;
  showPast: string;
  hidePast: string;
  faqTitle: string;
  faqs: Array<{ question: string; answer: string }>;
};

export const thingsToDoEventsContent: Record<Locale, ThingsToDoEventsContent> = {
  es: {
    title: "Eventos y conciertos en Fuengirola",
    intro:
      "Fuengirola ofrece actividades durante todo el año. Además de sus playas, la ciudad acoge conciertos internacionales, festivales, ferias, mercados y eventos culturales para toda la familia.",
    concertsTitle: "Próximos eventos y conciertos en Fuengirola",
    concertsIntro:
      "Consulta los próximos conciertos, festivales, ferias y actividades que se celebran en Fuengirola durante tu estancia.",
    noImageLabel: "Concierto en Fuengirola",
    filtersLabel: "Filtrar eventos",
    filterLabels: { all: "Todos", concert: "Conciertos", festival: "Festivales", fair: "Ferias", family: "Familia", culture: "Cultura", sport: "Deportes" },
    categoryLabels: { concert: "Concierto", festival: "Festival", fair: "Feria", family: "Familia", culture: "Cultura", sport: "Deporte", market: "Mercado", other: "Evento" },
    statusLabels: { upcoming: "Próximamente", today: "Hoy", ongoing: "En curso", past: "Finalizado", cancelled: "Cancelado", postponed: "Aplazado", rescheduled: "Reprogramado" },
    freeLabel: "Entrada gratuita",
    officialInfoLabel: "Ver información",
    ticketLabel: "Comprar entradas",
    emptyTitle: "Ahora mismo no tenemos nuevos eventos publicados.",
    emptyText: "Consulta próximamente la agenda oficial de Fuengirola.",
    officialAgendaCta: "Ver agenda oficial",
    marenostrumTitle: "Marenostrum Fuengirola",
    marenostrumText:
      "Marenostrum es un recinto frente al mar, junto al Castillo Sohail, con una programación de verano muy reconocible en la Costa del Sol. Cada temporada reúne conciertos, festivales y artistas nacionales e internacionales en un entorno muy especial.",
    marenostrumCta: "Ver programación oficial",
    annualTitle: "Eventos destacados en Fuengirola",
    agendaTitle: "Agenda",
    permanentTitle: "Actividades para hacer durante todo el año",
    permanentIntro: "Planes sencillos y cercanos que no dependen de una fecha concreta.",
    tipsTitle: "Consejos Stay Fuengirola",
    tips: [
      "Compra entradas con antelación.",
      "En verano conviene reservar restaurantes antes del concierto.",
      "Si hay concierto en Marenostrum puedes ir caminando desde el apartamento.",
      "Llega con tiempo para disfrutar del paseo marítimo."
    ],
    mapTitle: "Mapa de eventos",
    mapAria: "Mapa con la zona del apartamento, Marenostrum, Castillo Sohail, recinto ferial y centro histórico",
    mapApartment: "Zona aproximada del apartamento",
    pastTitle: "Eventos anteriores",
    pastIntro: "Los eventos pasados se conservan como referencia y aparecen en segundo plano.",
    showPast: "Ver eventos anteriores",
    hidePast: "Ocultar eventos anteriores",
    faqTitle: "Preguntas frecuentes sobre eventos en Fuengirola",
    faqs: [
      {
        question: "¿Cuándo se celebra Marenostrum?",
        answer: "Marenostrum se celebra principalmente durante la primavera y el verano. La programación cambia cada temporada, por lo que conviene revisar la web oficial antes de comprar entradas."
      },
      {
        question: "¿Dónde está el recinto?",
        answer: "El recinto de Marenostrum está junto al Castillo Sohail, frente al mar, en la zona oeste de Fuengirola."
      },
      {
        question: "¿Se puede ir andando desde el apartamento?",
        answer: "Sí. Desde la zona del apartamento se puede llegar caminando al entorno de Marenostrum y el Castillo Sohail."
      },
      {
        question: "¿Cuándo son las ferias de Fuengirola?",
        answer: "La Feria Internacional de los Países suele celebrarse en primavera y la Feria del Rosario en octubre. Las fechas exactas pueden variar cada año."
      },
      {
        question: "¿Hay actividades para niños?",
        answer: "Sí. Fuengirola suele contar con actividades familiares, ferias, mercados y eventos culturales durante el año."
      }
    ]
  },
  en: {
    title: "Events and concerts in Fuengirola",
    intro:
      "Fuengirola offers activities throughout the year. Beyond its beaches, the town hosts international concerts, festivals, fairs, markets, and cultural events for the whole family.",
    concertsTitle: "Upcoming events and concerts in Fuengirola",
    concertsIntro:
      "Check upcoming concerts, festivals, fairs, and activities taking place in Fuengirola during your stay.",
    noImageLabel: "Concert in Fuengirola",
    filtersLabel: "Filter events",
    filterLabels: { all: "All", concert: "Concerts", festival: "Festivals", fair: "Fairs", family: "Family", culture: "Culture", sport: "Sports" },
    categoryLabels: { concert: "Concert", festival: "Festival", fair: "Fair", family: "Family", culture: "Culture", sport: "Sport", market: "Market", other: "Event" },
    statusLabels: { upcoming: "Upcoming", today: "Today", ongoing: "Ongoing", past: "Finished", cancelled: "Cancelled", postponed: "Postponed", rescheduled: "Rescheduled" },
    freeLabel: "Free entry",
    officialInfoLabel: "View info",
    ticketLabel: "Buy tickets",
    emptyTitle: "We do not have new events published right now.",
    emptyText: "Check Fuengirola's official agenda soon.",
    officialAgendaCta: "View official agenda",
    marenostrumTitle: "Marenostrum Fuengirola",
    marenostrumText:
      "Marenostrum is a seafront venue next to Sohail Castle, with a well-known summer programme on the Costa del Sol. Each season it brings concerts, festivals, and national and international artists to a very special setting.",
    marenostrumCta: "View official programme",
    annualTitle: "Highlighted events in Fuengirola",
    agendaTitle: "Agenda",
    permanentTitle: "Things to do all year round",
    permanentIntro: "Simple nearby plans that do not depend on a specific date.",
    tipsTitle: "Stay Fuengirola tips",
    tips: [
      "Buy tickets in advance.",
      "In summer, book restaurants before the concert.",
      "If there is a concert at Marenostrum, you can walk from the apartment area.",
      "Arrive early and enjoy the seafront promenade."
    ],
    mapTitle: "Events map",
    mapAria: "Map showing the apartment area, Marenostrum, Sohail Castle, fairground and historic center",
    mapApartment: "Approximate apartment area",
    pastTitle: "Previous events",
    pastIntro: "Past events are kept as a reference and shown with quieter styling.",
    showPast: "View previous events",
    hidePast: "Hide previous events",
    faqTitle: "Frequently asked questions about events in Fuengirola",
    faqs: [
      {
        question: "When does Marenostrum take place?",
        answer: "Marenostrum mainly takes place in spring and summer. The programme changes each season, so it is best to check the official website before buying tickets."
      },
      {
        question: "Where is the venue?",
        answer: "Marenostrum is next to Sohail Castle, by the sea, in the western part of Fuengirola."
      },
      {
        question: "Can you walk there from the apartment?",
        answer: "Yes. From the apartment area you can walk to the Marenostrum and Sohail Castle area."
      },
      {
        question: "When are Fuengirola's fairs?",
        answer: "The International Fair of Countries is usually held in spring and the Rosario Fair in October. Exact dates may vary each year."
      },
      {
        question: "Are there activities for children?",
        answer: "Yes. Fuengirola usually has family activities, fairs, markets, and cultural events throughout the year."
      }
    ]
  },
  fi: {
    title: "Tapahtumat ja konsertit Fuengirolassa",
    intro:
      "Fuengirolassa on tapahtumia ympäri vuoden. Rantojen lisäksi kaupungissa järjestetään kansainvälisiä konsertteja, festivaaleja, feria-juhlia, markkinoita ja kulttuuritapahtumia koko perheelle.",
    concertsTitle: "Tulevat tapahtumat ja konsertit Fuengirolassa",
    concertsIntro:
      "Katso tulevat konsertit, festivaalit, juhlat ja aktiviteetit, joita Fuengirolassa järjestetään oleskelusi aikana.",
    noImageLabel: "Konsertti Fuengirolassa",
    filtersLabel: "Suodata tapahtumia",
    filterLabels: { all: "Kaikki", concert: "Konsertit", festival: "Festivaalit", fair: "Feriat", family: "Perhe", culture: "Kulttuuri", sport: "Urheilu" },
    categoryLabels: { concert: "Konsertti", festival: "Festivaali", fair: "Feria", family: "Perhe", culture: "Kulttuuri", sport: "Urheilu", market: "Markkinat", other: "Tapahtuma" },
    statusLabels: { upcoming: "Tulossa", today: "Tänään", ongoing: "Käynnissä", past: "Päättynyt", cancelled: "Peruttu", postponed: "Siirretty", rescheduled: "Uusi ajankohta" },
    freeLabel: "Vapaa pääsy",
    officialInfoLabel: "Katso tiedot",
    ticketLabel: "Osta liput",
    emptyTitle: "Meillä ei juuri nyt ole uusia tapahtumia julkaistuna.",
    emptyText: "Tarkista Fuengirolan virallinen tapahtumakalenteri myöhemmin.",
    officialAgendaCta: "Katso virallinen agenda",
    marenostrumTitle: "Marenostrum Fuengirola",
    marenostrumText:
      "Marenostrum on meren äärellä, Sohailin linnan vieressä sijaitseva konserttialue, jolla on tunnettu kesäohjelma Costa del Solilla. Joka kausi siellä järjestetään konsertteja ja festivaaleja sekä espanjalaisten että kansainvälisten artistien kanssa.",
    marenostrumCta: "Katso virallinen ohjelma",
    annualTitle: "Fuengirolan tärkeimmät tapahtumat",
    agendaTitle: "Tapahtumakalenteri",
    permanentTitle: "Tekemistä ympäri vuoden",
    permanentIntro: "Helppoja lähellä olevia suunnitelmia, jotka eivät riipu tietystä päivämäärästä.",
    tipsTitle: "Stay Fuengirolan vinkit",
    tips: [
      "Osta liput ajoissa.",
      "Kesällä ravintola kannattaa varata ennen konserttia.",
      "Jos konsertti on Marenostrumissa, alueelle voi kävellä asunnon läheltä.",
      "Saavu ajoissa ja nauti rantapromenadista."
    ],
    mapTitle: "Tapahtumakartta",
    mapAria: "Kartta, jossa näkyvät asunnon likimääräinen alue, Marenostrum, Sohailin linna, feria-alue ja historiallinen keskusta",
    mapApartment: "Asunnon likimääräinen alue",
    pastTitle: "Aiemmat tapahtumat",
    pastIntro: "Menneet tapahtumat säilytetään viitteenä ja näytetään rauhallisemmalla tyylillä.",
    showPast: "Näytä aiemmat tapahtumat",
    hidePast: "Piilota aiemmat tapahtumat",
    faqTitle: "Usein kysytyt kysymykset Fuengirolan tapahtumista",
    faqs: [
      {
        question: "Milloin Marenostrum järjestetään?",
        answer: "Marenostrum järjestetään pääasiassa keväällä ja kesällä. Ohjelma vaihtuu joka kausi, joten virallinen sivusto kannattaa tarkistaa ennen lippujen ostamista."
      },
      {
        question: "Missä konserttialue sijaitsee?",
        answer: "Marenostrum sijaitsee Sohailin linnan vieressä, meren äärellä, Fuengirolan länsiosassa."
      },
      {
        question: "Voiko sinne kävellä asunnolta?",
        answer: "Kyllä. Asunnon alueelta voi kävellä Marenostrumin ja Sohailin linnan alueelle."
      },
      {
        question: "Milloin Fuengirolan feriat järjestetään?",
        answer: "Kansainvälinen maiden feria järjestetään yleensä keväällä ja Feria del Rosario lokakuussa. Tarkat päivämäärät voivat vaihdella vuosittain."
      },
      {
        question: "Onko tapahtumia lapsille?",
        answer: "Kyllä. Fuengirolassa on yleensä perheaktiviteetteja, feria-juhlia, markkinoita ja kulttuuritapahtumia ympäri vuoden."
      }
    ]
  },
  sv: {
    title: "Evenemang och konserter i Fuengirola",
    intro:
      "Fuengirola erbjuder aktiviteter året runt. Förutom stränderna har staden internationella konserter, festivaler, ferior, marknader och kulturevenemang för hela familjen.",
    concertsTitle: "Kommande evenemang och konserter i Fuengirola",
    concertsIntro:
      "Se kommande konserter, festivaler, ferior och aktiviteter som äger rum i Fuengirola under din vistelse.",
    noImageLabel: "Konsert i Fuengirola",
    filtersLabel: "Filtrera evenemang",
    filterLabels: { all: "Alla", concert: "Konserter", festival: "Festivaler", fair: "Ferior", family: "Familj", culture: "Kultur", sport: "Sport" },
    categoryLabels: { concert: "Konsert", festival: "Festival", fair: "Feria", family: "Familj", culture: "Kultur", sport: "Sport", market: "Marknad", other: "Evenemang" },
    statusLabels: { upcoming: "Kommande", today: "Idag", ongoing: "Pågår", past: "Avslutat", cancelled: "Inställt", postponed: "Uppskjutet", rescheduled: "Nytt datum" },
    freeLabel: "Fri entré",
    officialInfoLabel: "Se information",
    ticketLabel: "Köp biljetter",
    emptyTitle: "Just nu har vi inga nya evenemang publicerade.",
    emptyText: "Kontrollera Fuengirolas officiella agenda snart.",
    officialAgendaCta: "Se officiell agenda",
    marenostrumTitle: "Marenostrum Fuengirola",
    marenostrumText:
      "Marenostrum är en konsertplats vid havet, intill Sohail-slottet, med ett välkänt sommarprogram på Costa del Sol. Varje säsong samlar den konserter, festivaler och både spanska och internationella artister i en mycket speciell miljö.",
    marenostrumCta: "Se officiellt program",
    annualTitle: "Utvalda evenemang i Fuengirola",
    agendaTitle: "Agenda",
    permanentTitle: "Saker att göra året runt",
    permanentIntro: "Enkla närliggande planer som inte beror på ett specifikt datum.",
    tipsTitle: "Tips från Stay Fuengirola",
    tips: [
      "Köp biljetter i god tid.",
      "På sommaren är det klokt att boka restaurang före konserten.",
      "Om konserten är på Marenostrum kan du gå från lägenhetsområdet.",
      "Kom i god tid och njut av strandpromenaden."
    ],
    mapTitle: "Evenemangskarta",
    mapAria: "Karta med lägenhetens ungefärliga område, Marenostrum, Sohail-slottet, feriaområdet och historiska centrum",
    mapApartment: "Lägenhetens ungefärliga område",
    pastTitle: "Tidigare evenemang",
    pastIntro: "Tidigare evenemang sparas som referens och visas med lugnare stil.",
    showPast: "Visa tidigare evenemang",
    hidePast: "Dölj tidigare evenemang",
    faqTitle: "Vanliga frågor om evenemang i Fuengirola",
    faqs: [
      {
        question: "När äger Marenostrum rum?",
        answer: "Marenostrum äger främst rum under våren och sommaren. Programmet ändras varje säsong, så kontrollera den officiella webbplatsen innan du köper biljetter."
      },
      {
        question: "Var ligger arenan?",
        answer: "Marenostrum ligger intill Sohail-slottet, vid havet, i västra Fuengirola."
      },
      {
        question: "Kan man gå dit från lägenheten?",
        answer: "Ja. Från lägenhetsområdet kan du promenera till Marenostrum och Sohail-slottet."
      },
      {
        question: "När hålls feriorna i Fuengirola?",
        answer: "Internationella ländernas feria hålls vanligtvis på våren och Feria del Rosario i oktober. Exakta datum kan variera från år till år."
      },
      {
        question: "Finns det aktiviteter för barn?",
        answer: "Ja. Fuengirola har vanligtvis familjeaktiviteter, ferior, marknader och kulturevenemang under året."
      }
    ]
  },
  no: {
    title: "Arrangementer og konserter i Fuengirola",
    intro:
      "Fuengirola tilbyr aktiviteter hele året. I tillegg til strendene arrangerer byen internasjonale konserter, festivaler, ferier, markeder og kulturarrangementer for hele familien.",
    concertsTitle: "Kommende arrangementer og konserter i Fuengirola",
    concertsIntro:
      "Se kommende konserter, festivaler, ferier og aktiviteter som finner sted i Fuengirola under oppholdet ditt.",
    noImageLabel: "Konsert i Fuengirola",
    filtersLabel: "Filtrer arrangementer",
    filterLabels: { all: "Alle", concert: "Konserter", festival: "Festivaler", fair: "Ferier", family: "Familie", culture: "Kultur", sport: "Sport" },
    categoryLabels: { concert: "Konsert", festival: "Festival", fair: "Feria", family: "Familie", culture: "Kultur", sport: "Sport", market: "Marked", other: "Arrangement" },
    statusLabels: { upcoming: "Kommende", today: "I dag", ongoing: "Pågår", past: "Avsluttet", cancelled: "Avlyst", postponed: "Utsatt", rescheduled: "Ny dato" },
    freeLabel: "Gratis inngang",
    officialInfoLabel: "Se informasjon",
    ticketLabel: "Kjøp billetter",
    emptyTitle: "Akkurat nå har vi ingen nye arrangementer publisert.",
    emptyText: "Sjekk Fuengirolas offisielle agenda snart.",
    officialAgendaCta: "Se offisiell agenda",
    marenostrumTitle: "Marenostrum Fuengirola",
    marenostrumText:
      "Marenostrum er en konsertarena ved sjøen, ved siden av Sohail-slottet, med et kjent sommerprogram på Costa del Sol. Hver sesong samler den konserter, festivaler og både spanske og internasjonale artister i en helt spesiell ramme.",
    marenostrumCta: "Se offisielt program",
    annualTitle: "Utvalgte arrangementer i Fuengirola",
    agendaTitle: "Agenda",
    permanentTitle: "Ting å gjøre hele året",
    permanentIntro: "Enkle planer i nærheten som ikke er avhengige av en bestemt dato.",
    tipsTitle: "Tips fra Stay Fuengirola",
    tips: [
      "Kjøp billetter i god tid.",
      "Om sommeren er det lurt å reservere restaurant før konserten.",
      "Hvis konserten er på Marenostrum, kan du gå fra leilighetsområdet.",
      "Kom i god tid og nyt strandpromenaden."
    ],
    mapTitle: "Arrangementskart",
    mapAria: "Kart med omtrentlig leilighetsområde, Marenostrum, Sohail-slottet, messeområdet og historisk sentrum",
    mapApartment: "Omtrentlig leilighetsområde",
    pastTitle: "Tidligere arrangementer",
    pastIntro: "Tidligere arrangementer beholdes som referanse og vises med roligere stil.",
    showPast: "Vis tidligere arrangementer",
    hidePast: "Skjul tidligere arrangementer",
    faqTitle: "Vanlige spørsmål om arrangementer i Fuengirola",
    faqs: [
      {
        question: "Når arrangeres Marenostrum?",
        answer: "Marenostrum arrangeres hovedsakelig om våren og sommeren. Programmet endres hver sesong, så sjekk den offisielle nettsiden før du kjøper billetter."
      },
      {
        question: "Hvor ligger arenaen?",
        answer: "Marenostrum ligger ved siden av Sohail-slottet, ved sjøen, i den vestlige delen av Fuengirola."
      },
      {
        question: "Kan man gå dit fra leiligheten?",
        answer: "Ja. Fra leilighetsområdet kan du gå til Marenostrum og Sohail-slottet."
      },
      {
        question: "Når er feriene i Fuengirola?",
        answer: "Den internasjonale landfestivalen holdes vanligvis om våren og Feria del Rosario i oktober. Nøyaktige datoer kan variere fra år til år."
      },
      {
        question: "Finnes det aktiviteter for barn?",
        answer: "Ja. Fuengirola har vanligvis familieaktiviteter, ferier, markeder og kulturarrangementer gjennom året."
      }
    ]
  }
};
