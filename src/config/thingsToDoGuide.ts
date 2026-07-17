import { Locale } from "@/i18n/locales";

export type ThingsToDoGuideContent = {
  metaTitle: string;
  metaDescription: string;
  breadcrumbGuide: string;
  breadcrumbArticle: string;
  kicker: string;
  h1: string;
  intro: string;
  backLabel: string;
  activities: Array<{
    id: string;
    title: string;
    paragraphs: string[];
  }>;
  schemaAbout: string[];
};

export const thingsToDoGuideContent: Record<Locale, ThingsToDoGuideContent> = {
  es: {
    metaTitle: "Qué hacer en Fuengirola | Eventos, conciertos y Marenostrum",
    metaDescription:
      "Ideas para disfrutar Fuengirola cerca del Apartamento Veramar: Bioparc, parques acuáticos, Marenostrum, conciertos y eventos durante el año.",
    breadcrumbGuide: "Guía de Fuengirola",
    breadcrumbArticle: "Qué hacer en Fuengirola",
    kicker: "Guía de Fuengirola · Qué hacer",
    h1: "Qué hacer en Fuengirola",
    intro:
      "Fuengirola tiene mucho más que playa. Estos son los tres planes favoritos de quienes se alojan con nosotros, ideal para completar tu estancia con algo de aventura, naturaleza o música en directo.",
    backLabel: "Volver a la guía",
    activities: [
      {
        id: "bioparc-fuengirola",
        title: "Bioparc Fuengirola",
        paragraphs: [
          "Un zoo de vanguardia sin jaulas, con más de 200 especies recreadas en su hábitat natural. Perfecto para ir en familia, y a un paseo corto desde el centro. Reserva entrada online para evitar colas en temporada alta."
        ]
      },
      {
        id: "parques-acuaticos",
        title: "Parques acuáticos",
        paragraphs: [
          "Si buscas refrescarte, tienes dos opciones: Costa Water Park, un parque flotante en pleno paseo marítimo de Fuengirola, ideal para una tarde de toboganes en el mar; y AquaMijas, un parque acuático más grande a solo 10 minutos en coche, con más de una docena de atracciones para toda la familia."
        ]
      },
      {
        id: "marenostrum-fuengirola",
        title: "Marenostrum Fuengirola",
        paragraphs: [
          "Uno de los grandes festivales de música al aire libre de España, celebrado cada verano junto al Castillo Sohail, a orillas del mar. En 2026 reúne a más de 100 artistas, Alejandro Sanz, Sting, Aitana, Pablo Alborán, entre otros, en cuarenta jornadas de conciertos. Consulta el cartel y las fechas en su web oficial antes de reservar entradas."
        ]
      }
    ],
    schemaAbout: ["Fuengirola", "Bioparc Fuengirola", "Costa Water Park", "AquaMijas", "Marenostrum Fuengirola", "Castillo Sohail"]
  },
  en: {
    metaTitle: "Things to Do in Fuengirola | Events, Concerts and Marenostrum",
    metaDescription:
      "Ideas for enjoying Fuengirola near Apartamento Veramar: Bioparc, water parks, Marenostrum, concerts and events throughout the year.",
    breadcrumbGuide: "Fuengirola Guide",
    breadcrumbArticle: "Things to do in Fuengirola",
    kicker: "Fuengirola Guide · Things to do",
    h1: "Things to do in Fuengirola",
    intro:
      "Fuengirola has much more than the beach. These are the three favorite plans of our guests, perfect for adding some adventure, nature, or live music to your stay.",
    backLabel: "Back to the guide",
    activities: [
      {
        id: "bioparc-fuengirola",
        title: "Bioparc Fuengirola",
        paragraphs: [
          "A cutting-edge, cageless zoo with over 200 species recreated in their natural habitat. Perfect for families, and just a short walk from the center. Book tickets online to skip the queues in high season."
        ]
      },
      {
        id: "water-parks",
        title: "Water parks",
        paragraphs: [
          "If you're looking to cool off, you have two options: Costa Water Park, a floating water park right on Fuengirola's seafront promenade, perfect for an afternoon of slides on the sea; and AquaMijas, a larger water park just a 10-minute drive away, with over a dozen attractions for the whole family."
        ]
      },
      {
        id: "marenostrum-fuengirola",
        title: "Marenostrum Fuengirola",
        paragraphs: [
          "One of Spain's great open-air music festivals, held every summer next to Sohail Castle, right by the sea. In 2026 it brings together more than 100 artists, including Alejandro Sanz, Sting, and Aitana, over forty nights of concerts. Check the lineup and dates on the official website before booking tickets."
        ]
      }
    ],
    schemaAbout: ["Fuengirola", "Bioparc Fuengirola", "Costa Water Park", "AquaMijas", "Marenostrum Fuengirola", "Sohail Castle"]
  },
  fi: {
    metaTitle: "Mitä tehdä Fuengirolassa | Tapahtumat, konsertit ja Marenostrum",
    metaDescription:
      "Ideoita Fuengirolaan Apartamento Veramarin lähellä: Bioparc, vesipuistot, Marenostrum, konsertit ja tapahtumat ympäri vuoden.",
    breadcrumbGuide: "Fuengirola-opas",
    breadcrumbArticle: "Mitä tehdä Fuengirolassa",
    kicker: "Fuengirola-opas · Tekemistä",
    h1: "Mitä tehdä Fuengirolassa",
    intro:
      "Fuengirolassa on paljon enemmän kuin ranta. Nämä ovat vieraidemme kolme suosikkia, täydellisiä lisäämään oleskeluusi seikkailua, luontoa tai livemusiikkia.",
    backLabel: "Takaisin oppaaseen",
    activities: [
      {
        id: "bioparc-fuengirola",
        title: "Bioparc Fuengirola",
        paragraphs: [
          "Moderni, häkitön eläintarha, jossa on yli 200 lajia niiden luonnollista elinympäristöä muistuttavissa tiloissa. Täydellinen perheille, ja lyhyen kävelymatkan päässä keskustasta. Varaa liput etukäteen verkosta välttääksesi jonot sesonkiaikana."
        ]
      },
      {
        id: "vesipuistot",
        title: "Vesipuistot",
        paragraphs: [
          "Jos haluat viilentyä, sinulla on kaksi vaihtoehtoa: Costa Water Park, kelluva vesipuisto suoraan Fuengirolan rantabulevardilla, täydellinen iltapäivä liukumäkiä meressä; ja AquaMijas, suurempi vesipuisto vain 10 minuutin ajomatkan päässä, yli tusinalla laitteella koko perheelle."
        ]
      },
      {
        id: "marenostrum-fuengirola",
        title: "Marenostrum Fuengirola",
        paragraphs: [
          "Yksi Espanjan suurista ulkoilmamusiikkifestivaaleista, järjestetään joka kesä Sohailin linnan vieressä, aivan meren rannalla. Vuonna 2026 se kokoaa yhteen yli 100 artistia, muun muassa Alejandro Sanzin, Stingin ja Aitanan, neljänkymmenen konsertti-illan aikana. Tarkista ohjelma ja päivämäärät virallisilta verkkosivuilta ennen lippujen varaamista."
        ]
      }
    ],
    schemaAbout: ["Fuengirola", "Bioparc Fuengirola", "Costa Water Park", "AquaMijas", "Marenostrum Fuengirola", "Sohailin linna"]
  },
  sv: {
    metaTitle: "Saker att göra i Fuengirola | Evenemang, konserter och Marenostrum",
    metaDescription:
      "Tips för Fuengirola nära Apartamento Veramar: Bioparc, vattenparker, Marenostrum, konserter och evenemang under året.",
    breadcrumbGuide: "Fuengirola-guide",
    breadcrumbArticle: "Saker att göra i Fuengirola",
    kicker: "Fuengirola-guide · Saker att göra",
    h1: "Saker att göra i Fuengirola",
    intro:
      "Fuengirola har mycket mer att erbjuda än stranden. Här är de tre favoritaktiviteterna bland våra gäster, perfekt för att lägga till lite äventyr, natur eller livemusik till din vistelse.",
    backLabel: "Tillbaka till guiden",
    activities: [
      {
        id: "bioparc-fuengirola",
        title: "Bioparc Fuengirola",
        paragraphs: [
          "En modern djurpark utan burar, med över 200 arter återskapade i sin naturliga miljö. Perfekt för familjer, och bara en kort promenad från centrum. Boka biljetter online för att slippa köer under högsäsong."
        ]
      },
      {
        id: "vattenparker",
        title: "Vattenparker",
        paragraphs: [
          "Om du vill svalka dig har du två alternativ: Costa Water Park, en flytande vattenpark precis vid Fuengirolas strandpromenad, perfekt för en eftermiddag med rutschkanor i havet; och AquaMijas, en större vattenpark bara 10 minuters bilfärd bort, med över ett dussin attraktioner för hela familjen."
        ]
      },
      {
        id: "marenostrum-fuengirola",
        title: "Marenostrum Fuengirola",
        paragraphs: [
          "En av Spaniens stora utomhusmusikfestivaler, som hålls varje sommar intill Sohail-slottet, precis vid havet. Under 2026 samlar den över 100 artister, bland andra Alejandro Sanz, Sting och Aitana, under fyrtio konsertkvällar. Kolla programmet och datumen på den officiella webbplatsen innan du bokar biljetter."
        ]
      }
    ],
    schemaAbout: ["Fuengirola", "Bioparc Fuengirola", "Costa Water Park", "AquaMijas", "Marenostrum Fuengirola", "Sohail-slottet"]
  },
  no: {
    metaTitle: "Ting å gjøre i Fuengirola | Arrangementer, konserter og Marenostrum",
    metaDescription:
      "Tips til Fuengirola nær Apartamento Veramar: Bioparc, vannparker, Marenostrum, konserter og arrangementer gjennom året.",
    breadcrumbGuide: "Fuengirola-guide",
    breadcrumbArticle: "Ting å gjøre i Fuengirola",
    kicker: "Fuengirola-guide · Ting å gjøre",
    h1: "Ting å gjøre i Fuengirola",
    intro:
      "Fuengirola har mye mer å by på enn stranden. Dette er de tre favorittaktivitetene til gjestene våre, perfekt for å legge til litt eventyr, natur eller livemusikk til oppholdet ditt.",
    backLabel: "Tilbake til guiden",
    activities: [
      {
        id: "bioparc-fuengirola",
        title: "Bioparc Fuengirola",
        paragraphs: [
          "En moderne dyrepark uten bur, med over 200 arter gjenskapt i sitt naturlige habitat. Perfekt for familier, og bare en kort spasertur fra sentrum. Bestill billetter på nett for å unngå køer i høysesongen."
        ]
      },
      {
        id: "vannparker",
        title: "Vannparker",
        paragraphs: [
          "Hvis du vil kjøle deg ned, har du to alternativer: Costa Water Park, en flytende vannpark rett ved Fuengirolas strandpromenade, perfekt for en ettermiddag med sklier i havet; og AquaMijas, en større vannpark bare 10 minutters kjøretur unna, med over et dusin attraksjoner for hele familien."
        ]
      },
      {
        id: "marenostrum-fuengirola",
        title: "Marenostrum Fuengirola",
        paragraphs: [
          "En av Spanias store utendørs musikkfestivaler, som holdes hver sommer ved siden av Sohail-slottet, rett ved havet. I 2026 samler den over 100 artister, blant andre Alejandro Sanz, Sting og Aitana, over førti konsertkvelder. Sjekk programmet og datoene på den offisielle nettsiden før du bestiller billetter."
        ]
      }
    ],
    schemaAbout: ["Fuengirola", "Bioparc Fuengirola", "Costa Water Park", "AquaMijas", "Marenostrum Fuengirola", "Sohail-slottet"]
  }
};
