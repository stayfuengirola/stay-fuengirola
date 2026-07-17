import { Locale } from "@/i18n/locales";

export type RestaurantGuideContent = {
  metaTitle: string;
  metaDescription: string;
  breadcrumbGuide: string;
  breadcrumbArticle: string;
  kicker: string;
  h1: string;
  intro: string;
  backLabel: string;
  restaurants: Array<{
    id: string;
    name: string;
    subtitle: string;
    description: string;
    address: string;
    hours: string;
    tip: string;
  }>;
  closing: string;
  schemaAbout: string[];
};

export const restaurantGuideContent: Record<Locale, RestaurantGuideContent> = {
  es: {
    metaTitle: "Dónde comer cerca del Apartamento Veramar en Fuengirola | Stay Fuengirola",
    metaDescription:
      "Dos restaurantes recomendados cerca del Apartamento Veramar en Fuengirola: pescaíto frito en Freiduría Casa Diego y carne a la brasa en Donny's Bar.",
    breadcrumbGuide: "Guía de Fuengirola",
    breadcrumbArticle: "Restaurantes",
    kicker: "Guía de Fuengirola · Restaurantes",
    h1: "Dónde comer cerca del Apartamento Veramar en Fuengirola",
    intro:
      "A un paseo del apartamento tienes dos clásicos de Fuengirola que no defraudan: uno de pescaíto frito y otro de carne a la brasa. Ambos son sitios de toda la vida, muy queridos por locales y visitantes.",
    backLabel: "Volver a la guía",
    restaurants: [
      {
        id: "freiduria-casa-diego",
        name: "Freiduría Casa Diego",
        subtitle: "Pescaíto frito",
        description:
          "Abierto desde 2007, es un referente del pescado frito en Fuengirola. Fritura fresca, marisco del día y ese sabor a Mediterráneo que solo dan las freidurías de barrio. Prueba las chirlas, las croquetas de choco o la gamba de Fuengirola.",
        address: "Calle Málaga, 5, 29640 Fuengirola",
        hours: "Martes a sábado 12:00-16:00 y 20:00-23:00 · Domingo 12:00-16:00 · Lunes cerrado",
        tip: "Consejo: mejor reservar los fines de semana, suele llenarse."
      },
      {
        id: "donnys-bar",
        name: "Donny's Bar",
        subtitle: "Carne a la brasa",
        description:
          "Un clásico de Fuengirola para los amantes de la barbacoa: costillas, entrecot, brochetas y su famosa patata asada rellena, siempre a precios muy razonables. Ambiente informal y animado, perfecto para ir en familia o grupo.",
        address: "Calle Málaga, 7, 29640 Fuengirola",
        hours: "Martes a viernes 19:00-23:30 · Sábado y domingo 13:30-17:30 y 19:30-23:30 · Lunes cerrado",
        tip: "Consejo: reserva con antelación, especialmente fines de semana; suele estar completo."
      }
    ],
    closing:
      "Ambos restaurantes están a poca distancia del apartamento, así que puedes llegar caminando después de un día de playa. Iremos ampliando esta guía con más recomendaciones de la zona.",
    schemaAbout: ["Fuengirola", "restaurantes en Fuengirola", "Freiduría Casa Diego", "Donny's Bar", "Apartamento Veramar"]
  },
  en: {
    metaTitle: "Where to Eat near Apartamento Veramar in Fuengirola | Stay Fuengirola",
    metaDescription:
      "Two recommended restaurants near Apartamento Veramar in Fuengirola: fried fish at Freiduría Casa Diego and grilled meat at Donny's Bar.",
    breadcrumbGuide: "Fuengirola Guide",
    breadcrumbArticle: "Restaurants",
    kicker: "Fuengirola Guide · Restaurants",
    h1: "Where to eat near Apartamento Veramar in Fuengirola",
    intro:
      "A short walk from the apartment you'll find two Fuengirola classics that never disappoint: one for fried fish, the other for grilled meat. Both are long-standing local favorites, loved by residents and visitors alike.",
    backLabel: "Back to the guide",
    restaurants: [
      {
        id: "freiduria-casa-diego",
        name: "Freiduría Casa Diego",
        subtitle: "Fried fish",
        description:
          "Open since 2007, this is a Fuengirola landmark for fried fish. Fresh frying, daily seafood, and that Mediterranean flavor only a proper neighborhood freiduría can deliver. Try the clams, the cuttlefish croquettes, or the local Fuengirola prawns.",
        address: "Calle Málaga, 5, 29640 Fuengirola",
        hours: "Tuesday-Saturday 12:00-16:00 and 20:00-23:00 · Sunday 12:00-16:00 · Closed Mondays",
        tip: "Tip: booking ahead is recommended on weekends, it fills up fast."
      },
      {
        id: "donnys-bar",
        name: "Donny's Bar",
        subtitle: "Grilled meat",
        description:
          "A Fuengirola classic for barbecue lovers: ribs, sirloin, skewers, and their famous stuffed baked potato, all at very fair prices. Casual, lively atmosphere, great for families or groups.",
        address: "Calle Málaga, 7, 29640 Fuengirola",
        hours: "Tuesday-Friday 19:00-23:30 · Saturday & Sunday 13:30-17:30 and 19:30-23:30 · Closed Mondays",
        tip: "Tip: book ahead, especially on weekends; it's usually full."
      }
    ],
    closing:
      "Both restaurants are within easy walking distance of the apartment, perfect after a day at the beach. We'll keep adding more local recommendations to this guide.",
    schemaAbout: ["Fuengirola", "restaurants in Fuengirola", "Freiduría Casa Diego", "Donny's Bar", "Apartamento Veramar"]
  },
  fi: {
    metaTitle: "Missä syödä lähellä Apartamento Veramaria Fuengirolassa | Stay Fuengirola",
    metaDescription:
      "Kaksi ravintolasuositusta lähellä Apartamento Veramaria Fuengirolassa: paistettua kalaa Freiduría Casa Diegossa ja grillattua lihaa Donny's Barissa.",
    breadcrumbGuide: "Fuengirola-opas",
    breadcrumbArticle: "Ravintolat",
    kicker: "Fuengirola-opas · Ravintolat",
    h1: "Missä syödä lähellä Apartamento Veramaria Fuengirolassa",
    intro:
      "Lyhyen kävelymatkan päässä asunnosta löydät kaksi Fuengirolan klassikkoa, jotka eivät koskaan petä: toinen paistetulle kalalle, toinen grillatulle lihalle. Molemmat ovat pitkäaikaisia paikallisia suosikkeja, joita niin asukkaat kuin matkailijatkin rakastavat.",
    backLabel: "Takaisin oppaaseen",
    restaurants: [
      {
        id: "freiduria-casa-diego",
        name: "Freiduría Casa Diego",
        subtitle: "Paistettu kala",
        description:
          "Avoinna vuodesta 2007, tämä on Fuengirolan tunnetuimpia paikkoja paistetulle kalalle. Tuoretta paistoa, päivittäistä merenelävää ja sitä Välimeren makua, jonka vain kunnollinen naapuruston freiduría osaa tarjota. Kokeile simpukoita, seepian pyöryköitä tai paikallisia Fuengirolan katkarapuja.",
        address: "Calle Málaga, 5, 29640 Fuengirola",
        hours: "Ti-la 12:00-16:00 ja 20:00-23:00 · Su 12:00-16:00 · Suljettu maanantaisin",
        tip: "Vinkki: pöytävaraus kannattaa tehdä etukäteen viikonloppuisin, paikka täyttyy nopeasti."
      },
      {
        id: "donnys-bar",
        name: "Donny's Bar",
        subtitle: "Grillattu liha",
        description:
          "Fuengirolan klassikko grilliruoan ystäville: kylkiluita, ulkofileetä, vartaita ja heidän kuuluisa täytetty uuniperuna, kaikki erittäin kohtuulliseen hintaan. Rento, eloisa tunnelma, loistava paikka perheille tai ryhmille.",
        address: "Calle Málaga, 7, 29640 Fuengirola",
        hours: "Ti-pe 19:00-23:30 · La ja su 13:30-17:30 ja 19:30-23:30 · Suljettu maanantaisin",
        tip: "Vinkki: varaa pöytä etukäteen, erityisesti viikonloppuisin; paikka on yleensä täynnä."
      }
    ],
    closing:
      "Molemmat ravintolat ovat lyhyen kävelymatkan päässä asunnosta, täydellisiä rantapäivän jälkeen. Lisäämme oppaaseen jatkuvasti lisää paikallisia suosituksia.",
    schemaAbout: ["Fuengirola", "Fuengirolan ravintolat", "Freiduría Casa Diego", "Donny's Bar", "Apartamento Veramar"]
  },
  sv: {
    metaTitle: "Var man äter nära Apartamento Veramar i Fuengirola | Stay Fuengirola",
    metaDescription:
      "Två restaurangtips nära Apartamento Veramar i Fuengirola: friterad fisk på Freiduría Casa Diego och grillat kött på Donny's Bar.",
    breadcrumbGuide: "Fuengirola-guide",
    breadcrumbArticle: "Restauranger",
    kicker: "Fuengirola-guide · Restauranger",
    h1: "Var man äter nära Apartamento Veramar i Fuengirola",
    intro:
      "En kort promenad från lägenheten hittar du två klassiker i Fuengirola som aldrig gör dig besviken: en för friterad fisk, en för grillat kött. Båda är sedan länge lokala favoriter, älskade av både invånare och besökare.",
    backLabel: "Tillbaka till guiden",
    restaurants: [
      {
        id: "freiduria-casa-diego",
        name: "Freiduría Casa Diego",
        subtitle: "Friterad fisk",
        description:
          "Öppen sedan 2007, är detta ett landmärke i Fuengirola för friterad fisk. Färsk fritering, dagsfärska skaldjur och den där medelhavssmaken som bara ett riktigt grannskaps-freiduría kan leverera. Prova musslorna, bläckfiskkroketterna eller de lokala Fuengirola-räkorna.",
        address: "Calle Málaga, 5, 29640 Fuengirola",
        hours: "Tisdag-lördag 12:00-16:00 och 20:00-23:00 · Söndag 12:00-16:00 · Stängt måndagar",
        tip: "Tips: boka gärna bord i förväg på helger, det blir snabbt fullt."
      },
      {
        id: "donnys-bar",
        name: "Donny's Bar",
        subtitle: "Grillat kött",
        description:
          "En klassiker i Fuengirola för grillälskare: revben, ryggbiff, spett och deras berömda fyllda bakade potatis, allt till mycket rimliga priser. Avslappnad, livlig atmosfär, perfekt för familjer eller grupper.",
        address: "Calle Málaga, 7, 29640 Fuengirola",
        hours: "Tisdag-fredag 19:00-23:30 · Lördag & söndag 13:30-17:30 och 19:30-23:30 · Stängt måndagar",
        tip: "Tips: boka i förväg, särskilt på helger; det är oftast fullbokat."
      }
    ],
    closing:
      "Båda restaurangerna ligger på gångavstånd från lägenheten, perfekt efter en dag på stranden. Vi fortsätter fylla på guiden med fler lokala rekommendationer.",
    schemaAbout: ["Fuengirola", "restauranger i Fuengirola", "Freiduría Casa Diego", "Donny's Bar", "Apartamento Veramar"]
  },
  no: {
    metaTitle: "Hvor du kan spise nær Apartamento Veramar i Fuengirola | Stay Fuengirola",
    metaDescription:
      "To restauranttips nær Apartamento Veramar i Fuengirola: stekt fisk hos Freiduría Casa Diego og grillet kjøtt hos Donny's Bar.",
    breadcrumbGuide: "Fuengirola-guide",
    breadcrumbArticle: "Restauranter",
    kicker: "Fuengirola-guide · Restauranter",
    h1: "Hvor du kan spise nær Apartamento Veramar i Fuengirola",
    intro:
      "Kort gange fra leiligheten finner du to klassikere i Fuengirola som aldri skuffer: en for stekt fisk, en for grillet kjøtt. Begge er langvarige lokale favoritter, elsket av både innbyggere og besøkende.",
    backLabel: "Tilbake til guiden",
    restaurants: [
      {
        id: "freiduria-casa-diego",
        name: "Freiduría Casa Diego",
        subtitle: "Stekt fisk",
        description:
          "Åpen siden 2007, dette er et landemerke i Fuengirola for stekt fisk. Fersk steking, daglig sjømat og den middelhavssmaken som bare en ordentlig nabolags-freiduría kan gi. Prøv muslingene, blekksprutkroketter eller de lokale Fuengirola-rekene.",
        address: "Calle Málaga, 5, 29640 Fuengirola",
        hours: "Tirsdag-lørdag 12:00-16:00 og 20:00-23:00 · Søndag 12:00-16:00 · Stengt mandager",
        tip: "Tips: bestill bord på forhånd i helgene, det blir fort fullt."
      },
      {
        id: "donnys-bar",
        name: "Donny's Bar",
        subtitle: "Grillet kjøtt",
        description:
          "En klassiker i Fuengirola for BBQ-elskere: ribbe, ytrefilet, spyd og deres berømte fylte bakte potet, alt til svært rimelige priser. Avslappet, livlig atmosfære, perfekt for familier eller grupper.",
        address: "Calle Málaga, 7, 29640 Fuengirola",
        hours: "Tirsdag-fredag 19:00-23:30 · Lørdag & søndag 13:30-17:30 og 19:30-23:30 · Stengt mandager",
        tip: "Tips: bestill på forhånd, spesielt i helgene; det er som regel fullt."
      }
    ],
    closing:
      "Begge restaurantene ligger i gangavstand fra leiligheten, perfekt etter en dag på stranden. Vi fortsetter å fylle på guiden med flere lokale anbefalinger.",
    schemaAbout: ["Fuengirola", "restauranter i Fuengirola", "Freiduría Casa Diego", "Donny's Bar", "Apartamento Veramar"]
  }
};
