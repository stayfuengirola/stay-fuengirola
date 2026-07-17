import { Locale } from "@/i18n/locales";

export type ThingsToDoEventsContent = {
  title: string;
  intro: string;
  concertsTitle: string;
  noImageLabel: string;
  marenostrumTitle: string;
  marenostrumText: string;
  marenostrumCta: string;
  annualTitle: string;
  agendaTitle: string;
  tipsTitle: string;
  tips: string[];
  mapTitle: string;
  mapAria: string;
  mapApartment: string;
  faqTitle: string;
  faqs: Array<{ question: string; answer: string }>;
};

export const thingsToDoEventsContent: Record<Locale, ThingsToDoEventsContent> = {
  es: {
    title: "Eventos y conciertos en Fuengirola",
    intro:
      "Fuengirola ofrece actividades durante todo el año. Además de sus playas, la ciudad acoge conciertos internacionales, festivales, ferias, mercados y eventos culturales para toda la familia.",
    concertsTitle: "Próximos conciertos",
    noImageLabel: "Concierto en Fuengirola",
    marenostrumTitle: "Marenostrum Fuengirola",
    marenostrumText:
      "Marenostrum es un recinto frente al mar, junto al Castillo Sohail, y uno de los ciclos de conciertos más importantes de España. Cada verano reúne programación nacional e internacional en un entorno muy especial de la Costa del Sol.",
    marenostrumCta: "Ver programación oficial",
    annualTitle: "Eventos destacados en Fuengirola",
    agendaTitle: "Agenda",
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
    concertsTitle: "Upcoming concerts",
    noImageLabel: "Concert in Fuengirola",
    marenostrumTitle: "Marenostrum Fuengirola",
    marenostrumText:
      "Marenostrum is a seafront venue next to Sohail Castle and one of Spain's most important concert series. Every summer it brings national and international artists to a very special setting on the Costa del Sol.",
    marenostrumCta: "View official programme",
    annualTitle: "Highlighted events in Fuengirola",
    agendaTitle: "Agenda",
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
    concertsTitle: "Tulevat konsertit",
    noImageLabel: "Konsertti Fuengirolassa",
    marenostrumTitle: "Marenostrum Fuengirola",
    marenostrumText:
      "Marenostrum on meren äärellä, Sohailin linnan vieressä sijaitseva konserttialue ja yksi Espanjan tärkeimmistä kesäisistä konserttisarjoista. Joka kesä siellä nähdään espanjalaisia ja kansainvälisiä artisteja Costa del Solin erityisessä ympäristössä.",
    marenostrumCta: "Katso virallinen ohjelma",
    annualTitle: "Fuengirolan tärkeimmät tapahtumat",
    agendaTitle: "Tapahtumakalenteri",
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
    concertsTitle: "Kommande konserter",
    noImageLabel: "Konsert i Fuengirola",
    marenostrumTitle: "Marenostrum Fuengirola",
    marenostrumText:
      "Marenostrum är en konsertplats vid havet, intill Sohail-slottet, och en av Spaniens viktigaste konsertserier. Varje sommar samlar den spanska och internationella artister i en mycket speciell miljö på Costa del Sol.",
    marenostrumCta: "Se officiellt program",
    annualTitle: "Utvalda evenemang i Fuengirola",
    agendaTitle: "Agenda",
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
    concertsTitle: "Kommende konserter",
    noImageLabel: "Konsert i Fuengirola",
    marenostrumTitle: "Marenostrum Fuengirola",
    marenostrumText:
      "Marenostrum er en konsertarena ved sjøen, ved siden av Sohail-slottet, og en av Spanias viktigste konsertserier. Hver sommer samler den spanske og internasjonale artister i en helt spesiell ramme på Costa del Sol.",
    marenostrumCta: "Se offisielt program",
    annualTitle: "Utvalgte arrangementer i Fuengirola",
    agendaTitle: "Agenda",
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
