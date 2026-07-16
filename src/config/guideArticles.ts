import { Locale } from "@/i18n/locales";

export type AirportGuideContent = {
  metaTitle: string;
  metaDescription: string;
  breadcrumbGuide: string;
  breadcrumbArticle: string;
  kicker: string;
  h1: string;
  intro: string;
  optionsAria: string;
  labels: { time: string; price: string; fiveStars: string };
  options: Array<{ title: string; time: string; price: string; note: string; recommended?: boolean }>;
  mapAria: string;
  mapTitle: string;
  sections: Array<{ id: string; title: string; paragraphs: string[]; featured?: boolean }>;
  faqTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  personalTitle: string;
  personalTips: string[];
  relatedTitle: string;
  related: Record<"beaches" | "supermarkets" | "restaurants" | "transport", { title: string; text: string }>;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  schemaAbout: string[];
};

export const airportGuideContent: Record<Locale, AirportGuideContent> = {
  es: {
    metaTitle: "Cómo llegar del Aeropuerto de Málaga a Fuengirola | Tren, Taxi, Uber y Coche",
    metaDescription:
      "Descubre todas las formas de llegar desde el Aeropuerto de Málaga a Fuengirola: tren Cercanías, taxi, Uber, Bolt o coche de alquiler. Precios, tiempos y nuestra recomendación.",
    breadcrumbGuide: "Guía de Fuengirola",
    breadcrumbArticle: "Cómo llegar desde el Aeropuerto de Málaga",
    kicker: "Guía de Fuengirola · Aeropuerto de Málaga",
    h1: "Cómo llegar desde el Aeropuerto de Málaga a Fuengirola",
    intro:
      "Llegar a Fuengirola desde el Aeropuerto de Málaga es sencillo. Hay tren directo, taxis, VTC y coches de alquiler, así que puedes elegir entre una llegada económica, rápida o más flexible según el tipo de viaje.",
    optionsAria: "Comparativa de transporte desde el aeropuerto",
    labels: { time: "Tiempo", price: "Precio", fiveStars: "Cinco estrellas" },
    options: [
      { title: "Tren", time: "35-40 min", price: "Desde 2,70 €", note: "Recomendado", recommended: true },
      { title: "Taxi", time: "20-30 min", price: "35-45 €", note: "Directo y cómodo" },
      { title: "Uber / Bolt", time: "20-30 min", price: "Precio variable", note: "Buena alternativa" },
      { title: "Coche alquiler", time: "Flexible", price: "Según compañía", note: "Ideal para recorrer la Costa del Sol" }
    ],
    mapAria: "Mapa de ruta entre el Aeropuerto de Málaga y Fuengirola",
    mapTitle: "Ruta en Google Maps desde el Aeropuerto de Málaga a Fuengirola",
    sections: [
      {
        id: "introduccion",
        title: "Introducción",
        paragraphs: [
          "El Aeropuerto de Málaga-Costa del Sol está a unos 25 kilómetros de Fuengirola. Para la mayoría de viajeros, el trayecto es cómodo y directo, especialmente si llegas con equipaje ligero o quieres evitar conducir nada más aterrizar.",
          "En esta guía resumimos las opciones más útiles para llegar a Fuengirola: tren Cercanías C1, taxi, Uber, Bolt, coche de alquiler y autobús. Los tiempos y precios son aproximados y pueden variar según horarios, tráfico y temporada."
        ]
      },
      {
        id: "tren-cercanias-c1",
        title: "Tren Cercanías C1",
        paragraphs: [
          "El tren Cercanías C1 es normalmente nuestra opción recomendada. La estación está dentro del propio aeropuerto y la línea conecta directamente con Fuengirola, sin necesidad de pasar por el centro de Málaga.",
          "El trayecto suele durar unos 35-40 minutos y el precio parte de aproximadamente 2,70 €. Es una opción práctica, económica y cómoda si no viajas con demasiado equipaje."
        ]
      },
      {
        id: "taxi",
        title: "Taxi",
        paragraphs: [
          "El taxi es la forma más directa para llegar al apartamento desde el aeropuerto. Suele tardar entre 20 y 30 minutos, dependiendo del tráfico, y evita transbordos o esperas.",
          "Como referencia, el coste habitual puede moverse entre 35 € y 45 €, aunque el precio final puede variar por horario, equipaje, suplementos o tráfico."
        ]
      },
      {
        id: "uber-y-bolt",
        title: "Uber y Bolt",
        paragraphs: [
          "Uber y Bolt funcionan en el Aeropuerto de Málaga y pueden ser una alternativa cómoda al taxi. La principal diferencia es que el precio es variable y depende de la demanda en ese momento.",
          "Para familias, llegadas tarde o viajeros con varias maletas, puede ser una opción interesante si el precio mostrado en la app encaja con tu presupuesto."
        ]
      },
      {
        id: "alquiler-de-coche",
        title: "Alquiler de coche",
        paragraphs: [
          "Alquilar coche no es imprescindible para disfrutar de Fuengirola, pero puede ser muy útil si quieres recorrer la Costa del Sol con libertad. Desde Fuengirola es fácil organizar escapadas a Marbella, Mijas Pueblo, Málaga, Ronda o Caminito del Rey.",
          "Si eliges esta opción, conviene reservar con antelación y revisar bien las condiciones de seguro, franquicia, combustible y recogida."
        ]
      },
      {
        id: "autobus",
        title: "Autobús",
        paragraphs: [
          "El autobús puede ser útil en algunos horarios, pero normalmente es menos directo que el tren para llegar a Fuengirola desde el aeropuerto. Puede requerir más espera o combinar distintas líneas.",
          "Por comodidad, para la mayoría de huéspedes recomendamos valorar primero el tren, taxi o VTC."
        ]
      },
      {
        id: "nuestra-recomendacion",
        title: "Nuestra recomendación",
        featured: true,
        paragraphs: [
          "Si buscas una llegada sencilla y económica, el tren Cercanías C1 es la mejor primera opción. Si viajas de noche, con niños, con mucho equipaje o prefieres ir puerta a puerta, taxi, Uber o Bolt serán más cómodos."
        ]
      },
      {
        id: "una-vez-llegues-a-fuengirola",
        title: "Una vez llegues a Fuengirola",
        paragraphs: [
          "La estación de tren de Fuengirola queda cerca de la zona del apartamento. Desde allí puedes continuar con un breve trayecto en taxi, VTC o caminando si viajas ligero y te apetece orientarte por el centro.",
          "La ubicación es práctica para moverse a pie durante la estancia: playa, paseo marítimo, supermercados, restaurantes y el Centro Comercial Miramar quedan a pocos minutos."
        ]
      }
    ],
    faqTitle: "Preguntas frecuentes",
    faqs: [
      { question: "¿Cuál es la forma más económica de llegar a Fuengirola desde el aeropuerto?", answer: "El tren Cercanías C1 suele ser la opción más económica. Sale desde la terminal del aeropuerto y conecta directamente con Fuengirola." },
      { question: "¿Cuánto tarda un taxi desde el Aeropuerto de Málaga?", answer: "Normalmente tarda entre 20 y 30 minutos, dependiendo del tráfico y de la hora de llegada." },
      { question: "¿Uber y Bolt funcionan en el aeropuerto?", answer: "Sí, suelen estar disponibles en el Aeropuerto de Málaga. El precio puede cambiar según la demanda, la hora y el tipo de vehículo." },
      { question: "¿Merece la pena alquilar coche?", answer: "Puede ser una buena idea si quieres visitar Marbella, Mijas Pueblo, Málaga, Ronda o distintos puntos de la Costa del Sol durante tu estancia." }
    ],
    personalTitle: "Nuestra recomendación personal",
    personalTips: [
      "Elige tren si quieres ahorrar y llegar sin preocuparte por el tráfico.",
      "Elige taxi o VTC si llegas tarde, viajas en familia o llevas mucho equipaje.",
      "Elige coche de alquiler si quieres descubrir Marbella, Mijas Pueblo, Málaga y otros puntos de la Costa del Sol."
    ],
    relatedTitle: "También puede interesarte",
    related: {
      beaches: { title: "Playas", text: "Playas y paseos junto al mar cerca del apartamento." },
      supermarkets: { title: "Supermercados", text: "Compras prácticas para estancias cortas o largas." },
      restaurants: { title: "Restaurantes", text: "Recomendaciones gastronómicas en preparación." },
      transport: { title: "Transporte", text: "Cómo moverte por Fuengirola y la Costa del Sol." }
    },
    ctaTitle: "¿Tienes alguna duda antes de viajar?",
    ctaText: "Escríbenos antes de reservar y te ayudamos con la llegada, el transporte o cualquier detalle práctico de tu estancia en Fuengirola.",
    ctaButton: "Escribir por WhatsApp",
    schemaAbout: ["Aeropuerto de Málaga", "Fuengirola", "Costa del Sol", "transporte público", "alojamiento turístico"]
  },
  en: {
    metaTitle: "How to Get from Malaga Airport to Fuengirola | Train, Taxi, Uber and Car",
    metaDescription:
      "Compare the best ways to travel from Malaga Airport to Fuengirola: C1 train, taxi, Uber, Bolt and rental car. Approximate prices, times and our recommendation.",
    breadcrumbGuide: "Fuengirola Guide",
    breadcrumbArticle: "How to get from Malaga Airport",
    kicker: "Fuengirola Guide · Malaga Airport",
    h1: "How to get from Malaga Airport to Fuengirola",
    intro:
      "Travelling from Malaga Airport to Fuengirola is straightforward. You can choose the direct C1 train, a taxi, Uber or Bolt, or a rental car depending on whether you prefer the cheapest, fastest or most flexible arrival.",
    optionsAria: "Transport comparison from Malaga Airport",
    labels: { time: "Time", price: "Price", fiveStars: "Five stars" },
    options: [
      { title: "Train", time: "35-40 min", price: "From €2.70", note: "Recommended", recommended: true },
      { title: "Taxi", time: "20-30 min", price: "€35-45", note: "Direct and comfortable" },
      { title: "Uber / Bolt", time: "20-30 min", price: "Variable fare", note: "Good alternative" },
      { title: "Rental car", time: "Flexible", price: "Depends on provider", note: "Ideal for exploring the Costa del Sol" }
    ],
    mapAria: "Route map between Malaga Airport and Fuengirola",
    mapTitle: "Google Maps route from Malaga Airport to Fuengirola",
    sections: [
      { id: "introduction", title: "Introduction", paragraphs: ["Malaga-Costa del Sol Airport is around 25 kilometres from Fuengirola. For most visitors, the journey is easy and direct, especially if you arrive with light luggage or prefer not to drive immediately after landing.", "This guide explains the most useful ways to reach Fuengirola: the C1 commuter train, taxi, Uber, Bolt, rental car and bus. Times and prices are approximate and may vary by schedule, traffic and season."] },
      { id: "c1-train", title: "Cercanías C1 train", paragraphs: ["The C1 commuter train is usually our recommended option. The station is inside the airport and the line runs directly to Fuengirola, without needing to go through Malaga city centre.", "The journey normally takes around 35-40 minutes and fares start at approximately €2.70. It is practical, affordable and comfortable if you are not carrying too much luggage."] },
      { id: "taxi", title: "Taxi", paragraphs: ["A taxi is the most direct way to reach the apartment area from the airport. The journey usually takes 20-30 minutes depending on traffic and avoids transfers or waiting for connections.", "As a guide, the fare is often around €35-45, although the final price can vary depending on time of day, luggage, supplements and traffic."] },
      { id: "uber-and-bolt", title: "Uber and Bolt", paragraphs: ["Uber and Bolt operate at Malaga Airport and can be a comfortable alternative to a taxi. The main difference is that the fare changes according to demand at the time.", "For families, late arrivals or guests with several suitcases, it can be a good option if the price shown in the app works for your budget."] },
      { id: "rental-car", title: "Rental car", paragraphs: ["A rental car is not essential for enjoying Fuengirola, but it can be useful if you want to explore the Costa del Sol freely. From Fuengirola, day trips to Marbella, Mijas Pueblo, Malaga, Ronda or Caminito del Rey are easy to plan.", "If you choose this option, book in advance and check insurance, excess, fuel policy and pick-up conditions carefully."] },
      { id: "bus", title: "Bus", paragraphs: ["The bus can work for some schedules, but it is usually less direct than the train when travelling from the airport to Fuengirola. It may involve more waiting or combining different services.", "For comfort, most guests should compare the train, taxi or VTC options first."] },
      { id: "our-recommendation", title: "Our recommendation", featured: true, paragraphs: ["If you want a simple and economical arrival, the C1 train is the best first choice. If you arrive late, travel with children, carry a lot of luggage or prefer door-to-door comfort, a taxi, Uber or Bolt will be easier."] },
      { id: "once-you-arrive", title: "Once you arrive in Fuengirola", paragraphs: ["Fuengirola train station is close to the apartment area. From there, you can continue by a short taxi or VTC ride, or walk if you are travelling light and want to get your bearings.", "The location is practical for walking during your stay: the beach, promenade, supermarkets, restaurants and Miramar Shopping Centre are all within easy reach."] }
    ],
    faqTitle: "Frequently asked questions",
    faqs: [
      { question: "What is the cheapest way to get from Malaga Airport to Fuengirola?", answer: "The C1 commuter train is usually the cheapest option. It leaves from the airport terminal and connects directly with Fuengirola." },
      { question: "How long does a taxi from Malaga Airport take?", answer: "It normally takes between 20 and 30 minutes, depending on traffic and arrival time." },
      { question: "Do Uber and Bolt work at the airport?", answer: "Yes, they are usually available at Malaga Airport. The price can change depending on demand, time and vehicle type." },
      { question: "Is renting a car worth it?", answer: "It can be a good idea if you plan to visit Marbella, Mijas Pueblo, Malaga, Ronda or other places along the Costa del Sol during your stay." }
    ],
    personalTitle: "Our personal recommendation",
    personalTips: ["Choose the train if you want to save money and avoid traffic.", "Choose taxi or VTC if you arrive late, travel as a family or have heavy luggage.", "Choose a rental car if you want to discover Marbella, Mijas Pueblo, Malaga and more of the Costa del Sol."],
    relatedTitle: "You may also be interested in",
    related: {
      beaches: { title: "Beaches", text: "Beaches and seaside walks near the apartment." },
      supermarkets: { title: "Supermarkets", text: "Useful shopping for short breaks and longer stays." },
      restaurants: { title: "Restaurants", text: "Local food recommendations coming soon." },
      transport: { title: "Transport", text: "How to move around Fuengirola and the Costa del Sol." }
    },
    ctaTitle: "Have a question before you travel?",
    ctaText: "Message us before booking and we will help with arrival, transport or any practical detail about your stay in Fuengirola.",
    ctaButton: "Write on WhatsApp",
    schemaAbout: ["Malaga Airport", "Fuengirola", "Costa del Sol", "public transport", "holiday apartment"]
  },
  fi: {
    metaTitle: "Miten päästä Malagan lentoasemalta Fuengirolaan | Juna, taksi, Uber ja auto",
    metaDescription:
      "Katso parhaat tavat matkustaa Malagan lentoasemalta Fuengirolaan: C1-juna, taksi, Uber, Bolt ja vuokra-auto. Suuntaa-antavat hinnat, ajat ja suosituksemme.",
    breadcrumbGuide: "Fuengirola-opas",
    breadcrumbArticle: "Malagan lentoasemalta Fuengirolaan",
    kicker: "Fuengirola-opas · Malagan lentoasema",
    h1: "Miten päästä Malagan lentoasemalta Fuengirolaan",
    intro:
      "Matka Malagan lentoasemalta Fuengirolaan on helppo. Voit valita suoran C1-junan, taksin, Uberin tai Boltin tai vuokra-auton sen mukaan, haluatko edullisen, nopean vai joustavan saapumisen.",
    optionsAria: "Kulkuvaihtoehtojen vertailu Malagan lentoasemalta",
    labels: { time: "Aika", price: "Hinta", fiveStars: "Viisi tähteä" },
    options: [
      { title: "Juna", time: "35-40 min", price: "Alkaen 2,70 €", note: "Suositus", recommended: true },
      { title: "Taksi", time: "20-30 min", price: "35-45 €", note: "Suora ja mukava" },
      { title: "Uber / Bolt", time: "20-30 min", price: "Vaihtelee", note: "Hyvä vaihtoehto" },
      { title: "Vuokra-auto", time: "Joustava", price: "Riippuu yhtiöstä", note: "Hyvä Costa del Solin kiertelyyn" }
    ],
    mapAria: "Reittikartta Malagan lentoaseman ja Fuengirolan välillä",
    mapTitle: "Google Maps -reitti Malagan lentoasemalta Fuengirolaan",
    sections: [
      { id: "johdanto", title: "Johdanto", paragraphs: ["Malaga-Costa del Solin lentoasema sijaitsee noin 25 kilometrin päässä Fuengirolasta. Useimmille matkailijoille matka on helppo ja selkeä, varsinkin jos saavut kevyen matkatavaran kanssa etkä halua ajaa heti lennon jälkeen.", "Tässä oppaassa käymme läpi käytännöllisimmät vaihtoehdot: C1-lähijuna, taksi, Uber, Bolt, vuokra-auto ja bussi. Ajat ja hinnat ovat suuntaa-antavia ja voivat vaihdella aikataulujen, liikenteen ja kauden mukaan."] },
      { id: "c1-juna", title: "Cercanías C1 -juna", paragraphs: ["C1-lähijuna on yleensä suosituksemme. Asema sijaitsee lentoaseman yhteydessä, ja linja kulkee suoraan Fuengirolaan ilman vaihtoa Malagan keskustassa.", "Matka kestää tavallisesti noin 35-40 minuuttia, ja liput alkavat noin 2,70 eurosta. Vaihtoehto on käytännöllinen, edullinen ja mukava, jos matkatavaraa ei ole kovin paljon."] },
      { id: "taksi", title: "Taksi", paragraphs: ["Taksi on suorin tapa päästä lentoasemalta asunnon alueelle. Matka kestää yleensä 20-30 minuuttia liikenteestä riippuen, eikä sinun tarvitse huolehtia vaihdoista tai odottelusta.", "Hinta on usein noin 35-45 €, mutta lopullinen summa voi vaihdella kellonajan, matkatavaroiden, lisämaksujen ja liikenteen mukaan."] },
      { id: "uber-ja-bolt", title: "Uber ja Bolt", paragraphs: ["Uber ja Bolt toimivat Malagan lentoasemalla ja voivat olla mukava vaihtoehto taksille. Hinta vaihtelee kysynnän mukaan juuri sillä hetkellä.", "Perheille, myöhään saapuville tai useamman matkalaukun kanssa matkustaville tämä voi olla hyvä ratkaisu, jos sovelluksessa näkyvä hinta sopii budjettiin."] },
      { id: "vuokra-auto", title: "Vuokra-auto", paragraphs: ["Vuokra-auto ei ole välttämätön Fuengirolassa viihtymiseen, mutta se voi olla hyödyllinen, jos haluat tutkia Costa del Solia vapaammin. Fuengirolasta on helppo tehdä päiväretkiä Marbellaan, Mijas Puebloon, Malagaan, Rondaan tai Caminito del Reylle.", "Jos valitset vuokra-auton, varaa ajoissa ja tarkista vakuutus, omavastuu, polttoainekäytäntö ja noutoehdot huolellisesti."] },
      { id: "bussi", title: "Bussi", paragraphs: ["Bussi voi sopia joihinkin aikatauluihin, mutta se on yleensä vähemmän suora vaihtoehto kuin juna lentoasemalta Fuengirolaan. Se voi edellyttää enemmän odottamista tai eri yhteyksien yhdistämistä.", "Mukavuuden kannalta useimmille vieraille suosittelemme vertaamaan ensin junaa, taksia tai VTC-palvelua."] },
      { id: "suosituksemme", title: "Suosituksemme", featured: true, paragraphs: ["Jos haluat helpon ja edullisen saapumisen, C1-juna on paras ensivaihtoehto. Jos saavut myöhään, matkustat lasten kanssa, sinulla on paljon matkatavaraa tai haluat ovelta ovelle -mukavuutta, taksi, Uber tai Bolt on helpompi."] },
      { id: "kun-saavut", title: "Kun saavut Fuengirolaan", paragraphs: ["Fuengirolan rautatieasema on lähellä asunnon aluetta. Sieltä voit jatkaa lyhyellä taksi- tai VTC-matkalla tai kävellä, jos matkustat kevyesti ja haluat tutustua keskustaan.", "Sijainti on käytännöllinen myös jalan liikkumiseen: ranta, rantakatu, supermarketit, ravintolat ja Miramar-ostoskeskus ovat helposti saavutettavissa."] }
    ],
    faqTitle: "Usein kysytyt kysymykset",
    faqs: [
      { question: "Mikä on edullisin tapa päästä Malagan lentoasemalta Fuengirolaan?", answer: "C1-lähijuna on yleensä edullisin vaihtoehto. Se lähtee lentoaseman terminaalilta ja kulkee suoraan Fuengirolaan." },
      { question: "Kuinka kauan taksimatka Malagan lentoasemalta kestää?", answer: "Tavallisesti noin 20-30 minuuttia liikenteestä ja saapumisajasta riippuen." },
      { question: "Toimivatko Uber ja Bolt lentoasemalla?", answer: "Kyllä, ne ovat yleensä saatavilla Malagan lentoasemalla. Hinta voi muuttua kysynnän, kellonajan ja ajoneuvotyypin mukaan." },
      { question: "Kannattaako vuokrata auto?", answer: "Se voi olla hyvä idea, jos aiot käydä Marbellassa, Mijas Pueblossa, Malagassa, Rondassa tai muissa Costa del Solin kohteissa." }
    ],
    personalTitle: "Henkilökohtainen suosituksemme",
    personalTips: ["Valitse juna, jos haluat säästää ja välttää liikenteen.", "Valitse taksi tai VTC, jos saavut myöhään, matkustat perheenä tai sinulla on paljon matkatavaraa.", "Valitse vuokra-auto, jos haluat tutustua Marbellaan, Mijas Puebloon, Malagaan ja muuhun Costa del Soliin."],
    relatedTitle: "Sinua voi kiinnostaa myös",
    related: {
      beaches: { title: "Rannat", text: "Rannat ja kävelyt meren äärellä lähellä asuntoa." },
      supermarkets: { title: "Supermarketit", text: "Käytännön ostokset lyhyille ja pidemmille oleskeluille." },
      restaurants: { title: "Ravintolat", text: "Paikallisia ruokasuosituksia tulossa." },
      transport: { title: "Liikkuminen", text: "Näin liikut Fuengirolassa ja Costa del Solilla." }
    },
    ctaTitle: "Onko sinulla kysyttävää ennen matkaa?",
    ctaText: "Kirjoita meille ennen varausta, niin autamme saapumisessa, kuljetuksissa tai muissa käytännön asioissa Fuengirolan oleskelua varten.",
    ctaButton: "Kirjoita WhatsAppissa",
    schemaAbout: ["Malagan lentoasema", "Fuengirola", "Costa del Sol", "julkinen liikenne", "loma-asunto"]
  },
  sv: {
    metaTitle: "Från Malaga flygplats till Fuengirola | Tåg, taxi, Uber och bil",
    metaDescription:
      "Jämför de bästa sätten att resa från Malaga flygplats till Fuengirola: C1-tåg, taxi, Uber, Bolt och hyrbil. Ungefärliga priser, tider och vår rekommendation.",
    breadcrumbGuide: "Fuengirola-guide",
    breadcrumbArticle: "Från Malaga flygplats",
    kicker: "Fuengirola-guide · Malaga flygplats",
    h1: "Så tar du dig från Malaga flygplats till Fuengirola",
    intro:
      "Det är enkelt att ta sig från Malaga flygplats till Fuengirola. Du kan välja direkt C1-tåg, taxi, Uber eller Bolt, eller hyrbil beroende på om du vill resa billigt, snabbt eller mer flexibelt.",
    optionsAria: "Jämförelse av transport från Malaga flygplats",
    labels: { time: "Tid", price: "Pris", fiveStars: "Fem stjärnor" },
    options: [
      { title: "Tåg", time: "35-40 min", price: "Från 2,70 €", note: "Rekommenderas", recommended: true },
      { title: "Taxi", time: "20-30 min", price: "35-45 €", note: "Direkt och bekvämt" },
      { title: "Uber / Bolt", time: "20-30 min", price: "Varierande pris", note: "Bra alternativ" },
      { title: "Hyrbil", time: "Flexibelt", price: "Beror på bolag", note: "Perfekt för att upptäcka Costa del Sol" }
    ],
    mapAria: "Ruttkarta mellan Malaga flygplats och Fuengirola",
    mapTitle: "Google Maps-rutt från Malaga flygplats till Fuengirola",
    sections: [
      { id: "introduktion", title: "Introduktion", paragraphs: ["Malaga-Costa del Sol flygplats ligger cirka 25 kilometer från Fuengirola. För de flesta resenärer är resan enkel och smidig, särskilt om du kommer med lätt bagage eller inte vill köra direkt efter landning.", "Här går vi igenom de mest praktiska alternativen: C1-pendeltåget, taxi, Uber, Bolt, hyrbil och buss. Tider och priser är ungefärliga och kan variera med tidtabell, trafik och säsong."] },
      { id: "c1-tag", title: "Cercanías C1-tåget", paragraphs: ["C1-pendeltåget är oftast vårt rekommenderade alternativ. Stationen ligger vid flygplatsen och linjen går direkt till Fuengirola utan att du behöver åka via Malaga centrum.", "Resan tar normalt cirka 35-40 minuter och biljetter kostar från ungefär 2,70 €. Det är praktiskt, prisvärt och bekvämt om du inte har för mycket bagage."] },
      { id: "taxi", title: "Taxi", paragraphs: ["Taxi är det mest direkta sättet att ta sig från flygplatsen till lägenhetsområdet. Resan tar vanligtvis 20-30 minuter beroende på trafik och du slipper byten och väntetider.", "Som riktmärke ligger priset ofta runt 35-45 €, men slutpriset kan variera beroende på tid på dygnet, bagage, tillägg och trafik."] },
      { id: "uber-och-bolt", title: "Uber och Bolt", paragraphs: ["Uber och Bolt fungerar på Malaga flygplats och kan vara ett bekvämt alternativ till taxi. Skillnaden är att priset varierar beroende på efterfrågan just då.", "För familjer, sena ankomster eller resenärer med flera väskor kan det vara ett bra val om priset i appen passar budgeten."] },
      { id: "hyrbil", title: "Hyrbil", paragraphs: ["Hyrbil behövs inte för att njuta av Fuengirola, men kan vara användbart om du vill upptäcka Costa del Sol på egen hand. Från Fuengirola är det enkelt att planera dagsutflykter till Marbella, Mijas Pueblo, Malaga, Ronda eller Caminito del Rey.", "Om du väljer hyrbil är det klokt att boka i förväg och kontrollera försäkring, självrisk, bränslepolicy och upphämtningsvillkor noggrant."] },
      { id: "buss", title: "Buss", paragraphs: ["Buss kan fungera vid vissa tider, men är oftast mindre direkt än tåget från flygplatsen till Fuengirola. Det kan innebära mer väntan eller kombination av flera linjer.", "För de flesta gäster är det bekvämare att först jämföra tåg, taxi eller VTC."] },
      { id: "var-rekommendation", title: "Vår rekommendation", featured: true, paragraphs: ["Vill du komma fram enkelt och prisvärt är C1-tåget det bästa förstahandsvalet. Kommer du sent, reser med barn, har mycket bagage eller vill åka dörr till dörr är taxi, Uber eller Bolt smidigare."] },
      { id: "nar-du-kommer-fram", title: "När du kommer fram till Fuengirola", paragraphs: ["Fuengirola tågstation ligger nära lägenhetsområdet. Därifrån kan du fortsätta med en kort taxi- eller VTC-resa, eller promenera om du reser lätt och vill orientera dig i centrum.", "Läget är praktiskt för att röra sig till fots under vistelsen: strand, strandpromenad, mataffärer, restauranger och Miramar köpcentrum finns inom bekvämt räckhåll."] }
    ],
    faqTitle: "Vanliga frågor",
    faqs: [
      { question: "Vilket är det billigaste sättet att ta sig från Malaga flygplats till Fuengirola?", answer: "C1-pendeltåget är oftast det billigaste alternativet. Det avgår från flygplatsens terminal och går direkt till Fuengirola." },
      { question: "Hur lång tid tar taxi från Malaga flygplats?", answer: "Vanligtvis mellan 20 och 30 minuter, beroende på trafik och ankomsttid." },
      { question: "Fungerar Uber och Bolt på flygplatsen?", answer: "Ja, de är vanligtvis tillgängliga på Malaga flygplats. Priset kan ändras beroende på efterfrågan, tid och biltyp." },
      { question: "Är det värt att hyra bil?", answer: "Det kan vara en bra idé om du vill besöka Marbella, Mijas Pueblo, Malaga, Ronda eller andra platser längs Costa del Sol." }
    ],
    personalTitle: "Vår personliga rekommendation",
    personalTips: ["Välj tåget om du vill spara pengar och slippa trafik.", "Välj taxi eller VTC om du kommer sent, reser med familj eller har mycket bagage.", "Välj hyrbil om du vill upptäcka Marbella, Mijas Pueblo, Malaga och mer av Costa del Sol."],
    relatedTitle: "Du kanske också är intresserad av",
    related: {
      beaches: { title: "Stränder", text: "Stränder och promenader vid havet nära lägenheten." },
      supermarkets: { title: "Mataffärer", text: "Praktiska inköp för korta och längre vistelser." },
      restaurants: { title: "Restauranger", text: "Lokala matrekommendationer kommer snart." },
      transport: { title: "Transport", text: "Så tar du dig runt Fuengirola och Costa del Sol." }
    },
    ctaTitle: "Har du en fråga innan resan?",
    ctaText: "Skriv till oss före bokning så hjälper vi dig med ankomst, transport eller praktiska detaljer inför vistelsen i Fuengirola.",
    ctaButton: "Skriv på WhatsApp",
    schemaAbout: ["Malaga flygplats", "Fuengirola", "Costa del Sol", "kollektivtrafik", "semesterlägenhet"]
  },
  no: {
    metaTitle: "Fra Malaga flyplass til Fuengirola | Tog, taxi, Uber og bil",
    metaDescription:
      "Sammenlign de beste måtene å reise fra Malaga flyplass til Fuengirola: C1-tog, taxi, Uber, Bolt og leiebil. Omtrentlige priser, tider og vår anbefaling.",
    breadcrumbGuide: "Fuengirola-guide",
    breadcrumbArticle: "Fra Malaga flyplass",
    kicker: "Fuengirola-guide · Malaga flyplass",
    h1: "Slik kommer du deg fra Malaga flyplass til Fuengirola",
    intro:
      "Det er enkelt å komme seg fra Malaga flyplass til Fuengirola. Du kan velge direkte C1-tog, taxi, Uber eller Bolt, eller leiebil avhengig av om du ønsker en rimelig, rask eller mer fleksibel ankomst.",
    optionsAria: "Sammenligning av transport fra Malaga flyplass",
    labels: { time: "Tid", price: "Pris", fiveStars: "Fem stjerner" },
    options: [
      { title: "Tog", time: "35-40 min", price: "Fra 2,70 €", note: "Anbefalt", recommended: true },
      { title: "Taxi", time: "20-30 min", price: "35-45 €", note: "Direkte og komfortabelt" },
      { title: "Uber / Bolt", time: "20-30 min", price: "Variabel pris", note: "Godt alternativ" },
      { title: "Leiebil", time: "Fleksibelt", price: "Avhenger av selskap", note: "Ideelt for å utforske Costa del Sol" }
    ],
    mapAria: "Rutekart mellom Malaga flyplass og Fuengirola",
    mapTitle: "Google Maps-rute fra Malaga flyplass til Fuengirola",
    sections: [
      { id: "introduksjon", title: "Introduksjon", paragraphs: ["Malaga-Costa del Sol flyplass ligger rundt 25 kilometer fra Fuengirola. For de fleste reisende er turen enkel og direkte, spesielt hvis du kommer med lett bagasje eller ikke ønsker å kjøre rett etter landing.", "Denne guiden forklarer de mest praktiske alternativene: C1-pendeltoget, taxi, Uber, Bolt, leiebil og buss. Tider og priser er omtrentlige og kan variere med rutetider, trafikk og sesong."] },
      { id: "c1-tog", title: "Cercanías C1-toget", paragraphs: ["C1-pendeltoget er vanligvis vårt anbefalte alternativ. Stasjonen ligger ved flyplassen, og linjen går direkte til Fuengirola uten at du må innom Malaga sentrum.", "Turen tar normalt rundt 35-40 minutter, og billettene starter på omtrent 2,70 €. Det er praktisk, rimelig og komfortabelt hvis du ikke har for mye bagasje."] },
      { id: "taxi", title: "Taxi", paragraphs: ["Taxi er den mest direkte måten å komme fra flyplassen til leilighetsområdet på. Turen tar vanligvis 20-30 minutter avhengig av trafikken, og du slipper bytter og venting.", "Som veiledning ligger prisen ofte rundt 35-45 €, men sluttprisen kan variere med tidspunkt, bagasje, tillegg og trafikk."] },
      { id: "uber-og-bolt", title: "Uber og Bolt", paragraphs: ["Uber og Bolt fungerer på Malaga flyplass og kan være et komfortabelt alternativ til taxi. Hovedforskjellen er at prisen endrer seg etter etterspørselen der og da.", "For familier, sene ankomster eller reisende med flere kofferter kan dette være et godt valg hvis prisen i appen passer budsjettet."] },
      { id: "leiebil", title: "Leiebil", paragraphs: ["Leiebil er ikke nødvendig for å nyte Fuengirola, men kan være nyttig hvis du vil utforske Costa del Sol på egen hånd. Fra Fuengirola er det enkelt å planlegge dagsturer til Marbella, Mijas Pueblo, Malaga, Ronda eller Caminito del Rey.", "Velger du leiebil, bør du bestille på forhånd og sjekke forsikring, egenandel, drivstoffregler og hentevilkår nøye."] },
      { id: "buss", title: "Buss", paragraphs: ["Buss kan passe noen rutetider, men er vanligvis mindre direkte enn tog fra flyplassen til Fuengirola. Det kan innebære mer venting eller kombinasjon av flere linjer.", "For de fleste gjester anbefaler vi å vurdere tog, taxi eller VTC først."] },
      { id: "var-anbefaling", title: "Vår anbefaling", featured: true, paragraphs: ["Hvis du ønsker en enkel og rimelig ankomst, er C1-toget det beste førstevalget. Kommer du sent, reiser med barn, har mye bagasje eller vil reise dør til dør, er taxi, Uber eller Bolt mer komfortabelt."] },
      { id: "nar-du-kommer-frem", title: "Når du kommer frem til Fuengirola", paragraphs: ["Fuengirola togstasjon ligger nær leilighetsområdet. Derfra kan du fortsette med en kort taxi- eller VTC-tur, eller gå hvis du reiser lett og vil gjøre deg kjent i sentrum.", "Beliggenheten er praktisk for å gå i løpet av oppholdet: strand, strandpromenade, supermarkeder, restauranter og Miramar kjøpesenter ligger innen rekkevidde."] }
    ],
    faqTitle: "Vanlige spørsmål",
    faqs: [
      { question: "Hva er den billigste måten å komme seg fra Malaga flyplass til Fuengirola på?", answer: "C1-pendeltoget er vanligvis det billigste alternativet. Det går fra flyplassterminalen og direkte til Fuengirola." },
      { question: "Hvor lang tid tar taxi fra Malaga flyplass?", answer: "Vanligvis mellom 20 og 30 minutter, avhengig av trafikk og ankomsttid." },
      { question: "Fungerer Uber og Bolt på flyplassen?", answer: "Ja, de er vanligvis tilgjengelige på Malaga flyplass. Prisen kan endre seg etter etterspørsel, tidspunkt og biltype." },
      { question: "Er det verdt å leie bil?", answer: "Det kan være en god idé hvis du vil besøke Marbella, Mijas Pueblo, Malaga, Ronda eller andre steder på Costa del Sol under oppholdet." }
    ],
    personalTitle: "Vår personlige anbefaling",
    personalTips: ["Velg tog hvis du vil spare penger og unngå trafikk.", "Velg taxi eller VTC hvis du kommer sent, reiser som familie eller har mye bagasje.", "Velg leiebil hvis du vil oppdage Marbella, Mijas Pueblo, Malaga og mer av Costa del Sol."],
    relatedTitle: "Du kan også være interessert i",
    related: {
      beaches: { title: "Strender", text: "Strender og turer langs sjøen nær leiligheten." },
      supermarkets: { title: "Supermarkeder", text: "Praktiske innkjøp for korte og lengre opphold." },
      restaurants: { title: "Restauranter", text: "Lokale matanbefalinger kommer snart." },
      transport: { title: "Transport", text: "Slik kommer du deg rundt i Fuengirola og på Costa del Sol." }
    },
    ctaTitle: "Har du spørsmål før reisen?",
    ctaText: "Skriv til oss før du bestiller, så hjelper vi deg med ankomst, transport eller praktiske detaljer om oppholdet i Fuengirola.",
    ctaButton: "Skriv på WhatsApp",
    schemaAbout: ["Malaga flyplass", "Fuengirola", "Costa del Sol", "kollektivtransport", "ferieleilighet"]
  }
};
