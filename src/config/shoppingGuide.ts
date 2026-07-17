import { Locale } from "@/i18n/locales";

export type ShoppingGuideContent = {
  metaTitle: string;
  metaDescription: string;
  breadcrumbGuide: string;
  breadcrumbArticle: string;
  kicker: string;
  h1: string;
  intro: string;
  backLabel: string;
  sections: Array<{
    id: string;
    title: string;
    paragraphs: string[];
  }>;
  schemaAbout: string[];
};

export const shoppingGuideContent: Record<Locale, ShoppingGuideContent> = {
  es: {
    metaTitle: "Compras en Fuengirola | Miramar, Parque Comercial y centro",
    metaDescription:
      "Guía de compras en Fuengirola cerca del Apartamento Veramar: Centro Comercial Miramar, Parque Comercial Miramar y tiendas del centro histórico.",
    breadcrumbGuide: "Guía de Fuengirola",
    breadcrumbArticle: "Compras",
    kicker: "Guía de Fuengirola · Compras",
    h1: "Compras en Fuengirola",
    intro:
      "Fuengirola es un destino excelente para ir de compras, con todo concentrado a pocos minutos del apartamento: desde grandes cadenas de moda hasta tiendas independientes en el centro histórico.",
    backLabel: "Volver a la guía",
    sections: [
      {
        id: "centro-comercial-miramar",
        title: "Centro Comercial Miramar",
        paragraphs: [
          "El Centro Comercial Miramar es uno de los más grandes de la Costa del Sol, con más de 140 tiendas repartidas en tres plantas. Encontrarás las principales cadenas de moda españolas, Zara, Mango, Bershka, Pull & Bear, Stradivarius, Massimo Dutti, Oysho, además de uno de los Primark más grandes de la zona, marcas premium como Levi's, Guess, Lacoste o Hackett, y firmas de belleza como Rituals, Kiko Milano y Primor.",
          "Tiene también supermercado Carrefour, cine de 12 salas, zona de restauración y parking gratuito, incluido subterráneo. Está a solo 500 metros del apartamento: puedes ir andando."
        ]
      },
      {
        id: "parque-comercial-miramar",
        title: "Parque Comercial Miramar (justo al lado)",
        paragraphs: [
          "Pegado al centro comercial encontrarás el Parque Comercial Miramar, con tiendas de mayor formato como MediaMarkt, electrónica y tecnología, Decathlon, deporte, Leroy Merlin, bricolaje y hogar, Kiwoko, mascotas, y Jysk, hogar y decoración.",
          "Ideal si necesitas algo más específico durante tu estancia, desde un cargador hasta artículos de playa."
        ]
      },
      {
        id: "centro-historico-fuengirola",
        title: "Centro histórico de Fuengirola",
        paragraphs: [
          "Si prefieres un ambiente más local, el centro de Fuengirola tiene calles peatonales llenas de tiendas independientes, boutiques, zapaterías y comercios de toda la vida, mezcladas con terrazas y heladerías: ideal para combinar compras con un paseo tranquilo por la ciudad."
        ]
      }
    ],
    schemaAbout: ["Fuengirola", "compras en Fuengirola", "Centro Comercial Miramar", "Parque Comercial Miramar", "Costa del Sol"]
  },
  en: {
    metaTitle: "Shopping in Fuengirola | Miramar, Retail Park and Town Center",
    metaDescription:
      "Shopping guide near Apartamento Veramar in Fuengirola: Centro Comercial Miramar, Parque Comercial Miramar, and shops in the historic town center.",
    breadcrumbGuide: "Fuengirola Guide",
    breadcrumbArticle: "Shopping",
    kicker: "Fuengirola Guide · Shopping",
    h1: "Shopping in Fuengirola",
    intro:
      "Fuengirola is an excellent destination for shopping, with everything concentrated just minutes from the apartment: from major fashion chains to independent shops in the historic center.",
    backLabel: "Back to the guide",
    sections: [
      {
        id: "centro-comercial-miramar",
        title: "Centro Comercial Miramar",
        paragraphs: [
          "Centro Comercial Miramar is one of the largest shopping centers on the Costa del Sol, with over 140 stores spread across three floors. You'll find all the major Spanish fashion chains, Zara, Mango, Bershka, Pull & Bear, Stradivarius, Massimo Dutti, Oysho, plus one of the largest Primark stores in the area, premium brands like Levi's, Guess, Lacoste, and Hackett, and beauty brands like Rituals, Kiko Milano, and Primor.",
          "It also has a Carrefour supermarket, a 12-screen cinema, a dining area, and free parking, including underground. It's just 500 meters from the apartment: you can walk there."
        ]
      },
      {
        id: "parque-comercial-miramar",
        title: "Parque Comercial Miramar (right next door)",
        paragraphs: [
          "Right beside the shopping center you'll find Parque Comercial Miramar, with larger-format stores like MediaMarkt, electronics and tech, Decathlon, sports, Leroy Merlin, DIY and home, Kiwoko, pets, and Jysk, home and decor.",
          "Perfect if you need something specific during your stay, from a charger to beach gear."
        ]
      },
      {
        id: "fuengirola-historic-center",
        title: "Fuengirola's historic center",
        paragraphs: [
          "If you prefer a more local atmosphere, Fuengirola's town center has pedestrian streets full of independent shops, boutiques, shoe stores, and long-standing local businesses, mixed with terraces and ice cream parlors: perfect for combining shopping with a relaxed stroll through the city."
        ]
      }
    ],
    schemaAbout: ["Fuengirola", "shopping in Fuengirola", "Centro Comercial Miramar", "Parque Comercial Miramar", "Costa del Sol"]
  },
  fi: {
    metaTitle: "Ostokset Fuengirolassa | Miramar, Parque Comercial ja keskusta",
    metaDescription:
      "Ostosopas Apartamento Veramarin lähellä Fuengirolassa: Centro Comercial Miramar, Parque Comercial Miramar ja historiallisen keskustan liikkeet.",
    breadcrumbGuide: "Fuengirola-opas",
    breadcrumbArticle: "Ostokset",
    kicker: "Fuengirola-opas · Ostokset",
    h1: "Ostoksilla Fuengirolassa",
    intro:
      "Fuengirola on erinomainen ostoskohde, jossa kaikki on keskittynyt vain muutaman minuutin päähän asunnosta: suurista muotiketjuista itsenäisiin liikkeisiin historiallisessa keskustassa.",
    backLabel: "Takaisin oppaaseen",
    sections: [
      {
        id: "centro-comercial-miramar",
        title: "Centro Comercial Miramar",
        paragraphs: [
          "Centro Comercial Miramar on yksi Costa del Solin suurimmista ostoskeskuksista, ja siellä on yli 140 liikettä kolmessa kerroksessa. Löydät kaikki suuret espanjalaiset muotiketjut, Zara, Mango, Bershka, Pull & Bear, Stradivarius, Massimo Dutti, Oysho, sekä yhden alueen suurimmista Primark-liikkeistä, premium-brändejä kuten Levi's, Guess, Lacoste ja Hackett, sekä kauneusbrändejä kuten Rituals, Kiko Milano ja Primor.",
          "Löytyy myös Carrefour-supermarket, 12-salinen elokuvateatteri, ravintola-alue ja ilmainen pysäköinti, myös maanalainen. Vain 500 metrin päässä asunnosta: sinne pääsee kävellen."
        ]
      },
      {
        id: "parque-comercial-miramar",
        title: "Parque Comercial Miramar (aivan vieressä)",
        paragraphs: [
          "Aivan ostoskeskuksen vieressä sijaitsee Parque Comercial Miramar, jossa on suurempia liikkeitä kuten MediaMarkt, elektroniikka ja teknologia, Decathlon, urheilu, Leroy Merlin, askartelu ja koti, Kiwoko, lemmikit, ja Jysk, koti ja sisustus.",
          "Täydellinen, jos tarvitset jotain tiettyä oleskelusi aikana, laturista rantavarusteisiin."
        ]
      },
      {
        id: "fuengirolan-historiallinen-keskusta",
        title: "Fuengirolan historiallinen keskusta",
        paragraphs: [
          "Jos suosit paikallisempaa tunnelmaa, Fuengirolan keskustassa on jalankulkukatuja täynnä itsenäisiä liikkeitä, putiikkeja, kenkäkauppoja ja pitkäaikaisia paikallisia yrityksiä, sekoittuneena terasseihin ja jäätelöbaareihin: täydellinen yhdistelmä ostoksia ja rauhallista kävelyä kaupungissa."
        ]
      }
    ],
    schemaAbout: ["Fuengirola", "ostokset Fuengirolassa", "Centro Comercial Miramar", "Parque Comercial Miramar", "Costa del Sol"]
  },
  sv: {
    metaTitle: "Shopping i Fuengirola | Miramar, Parque Comercial och centrum",
    metaDescription:
      "Shoppingguide nära Apartamento Veramar i Fuengirola: Centro Comercial Miramar, Parque Comercial Miramar och butiker i den historiska stadskärnan.",
    breadcrumbGuide: "Fuengirola-guide",
    breadcrumbArticle: "Shopping",
    kicker: "Fuengirola-guide · Shopping",
    h1: "Shopping i Fuengirola",
    intro:
      "Fuengirola är en utmärkt destination för shopping, med allt koncentrerat bara några minuter från lägenheten: från stora modekedjor till oberoende butiker i den historiska stadskärnan.",
    backLabel: "Tillbaka till guiden",
    sections: [
      {
        id: "centro-comercial-miramar",
        title: "Centro Comercial Miramar",
        paragraphs: [
          "Centro Comercial Miramar är ett av de största köpcentrumen på Costa del Sol, med över 140 butiker fördelade på tre våningar. Här hittar du alla stora spanska modekedjor, Zara, Mango, Bershka, Pull & Bear, Stradivarius, Massimo Dutti, Oysho, samt en av områdets största Primark-butiker, premiummärken som Levi's, Guess, Lacoste och Hackett, samt skönhetsmärken som Rituals, Kiko Milano och Primor.",
          "Det finns även en Carrefour-livsmedelsbutik, en biograf med 12 salonger, matplatser och gratis parkering, även underjordisk. Det ligger bara 500 meter från lägenheten: du kan gå dit."
        ]
      },
      {
        id: "parque-comercial-miramar",
        title: "Parque Comercial Miramar (precis intill)",
        paragraphs: [
          "Precis intill köpcentret hittar du Parque Comercial Miramar, med större butiker som MediaMarkt, elektronik och teknik, Decathlon, sport, Leroy Merlin, gör-det-själv och hem, Kiwoko, husdjur, och Jysk, hem och inredning.",
          "Perfekt om du behöver något specifikt under din vistelse, från en laddare till strandutrustning."
        ]
      },
      {
        id: "fuengirolas-historiska-centrum",
        title: "Fuengirolas historiska centrum",
        paragraphs: [
          "Om du föredrar en mer lokal atmosfär har Fuengirolas centrum gågator fulla av oberoende butiker, boutiquer, skobutiker och långvariga lokala verksamheter, blandat med uteserveringar och glassbarer: perfekt för att kombinera shopping med en avslappnad promenad genom staden."
        ]
      }
    ],
    schemaAbout: ["Fuengirola", "shopping i Fuengirola", "Centro Comercial Miramar", "Parque Comercial Miramar", "Costa del Sol"]
  },
  no: {
    metaTitle: "Shopping i Fuengirola | Miramar, Parque Comercial og sentrum",
    metaDescription:
      "Shoppingguide nær Apartamento Veramar i Fuengirola: Centro Comercial Miramar, Parque Comercial Miramar og butikker i det historiske sentrum.",
    breadcrumbGuide: "Fuengirola-guide",
    breadcrumbArticle: "Shopping",
    kicker: "Fuengirola-guide · Shopping",
    h1: "Shopping i Fuengirola",
    intro:
      "Fuengirola er et utmerket sted for shopping, med alt konsentrert bare noen minutter fra leiligheten: fra store moteskjeder til uavhengige butikker i det historiske sentrum.",
    backLabel: "Tilbake til guiden",
    sections: [
      {
        id: "centro-comercial-miramar",
        title: "Centro Comercial Miramar",
        paragraphs: [
          "Centro Comercial Miramar er et av de største kjøpesentrene på Costa del Sol, med over 140 butikker fordelt på tre etasjer. Her finner du alle de store spanske moteskjedene, Zara, Mango, Bershka, Pull & Bear, Stradivarius, Massimo Dutti, Oysho, samt en av områdets største Primark-butikker, premiummerker som Levi's, Guess, Lacoste og Hackett, og skjønnhetsmerker som Rituals, Kiko Milano og Primor.",
          "Det er også et Carrefour-supermarked, en kino med 12 saler, spiseområde og gratis parkering, inkludert under bakken. Det ligger bare 500 meter fra leiligheten: du kan gå dit."
        ]
      },
      {
        id: "parque-comercial-miramar",
        title: "Parque Comercial Miramar (rett ved siden av)",
        paragraphs: [
          "Rett ved siden av kjøpesenteret finner du Parque Comercial Miramar, med større butikker som MediaMarkt, elektronikk og teknologi, Decathlon, sport, Leroy Merlin, gjør-det-selv og hjem, Kiwoko, kjæledyr, og Jysk, hjem og interiør.",
          "Perfekt hvis du trenger noe spesifikt under oppholdet, fra en lader til strandutstyr."
        ]
      },
      {
        id: "fuengirolas-historiske-sentrum",
        title: "Fuengirolas historiske sentrum",
        paragraphs: [
          "Hvis du foretrekker en mer lokal atmosfære, har Fuengirola sentrum gågater fulle av uavhengige butikker, boutiker, skobutikker og langvarige lokale virksomheter, blandet med uteserveringer og iskrembarer: perfekt for å kombinere shopping med en rolig spasertur gjennom byen."
        ]
      }
    ],
    schemaAbout: ["Fuengirola", "shopping i Fuengirola", "Centro Comercial Miramar", "Parque Comercial Miramar", "Costa del Sol"]
  }
};
