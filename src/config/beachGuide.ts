import { Locale } from "@/i18n/locales";

export type BeachGuideContent = {
  metaTitle: string;
  metaDescription: string;
  breadcrumbGuide: string;
  breadcrumbArticle: string;
  kicker: string;
  h1: string;
  intro: string;
  backLabel: string;
  mapTitle: string;
  mapAria: string;
  mapApartment: string;
  mapApartmentPopup: string;
  quickTitle: string;
  quickItems: Array<{ label: string; time: string; icon: "beach" | "castle" }>;
  sectionTitle: string;
  servicesTitle: string;
  idealTitle: string;
  tipTitle: string;
  ratingLabel: string;
  sourceNote: string;
  beaches: Array<{
    key: "fuengirola" | "santaAmalia" | "castle";
    name: string;
    badge: string;
    walkingTime: string;
    image: string;
    imageAlt: string;
    description: string;
    services: string[];
    idealFor: string[];
    tip: string;
  }>;
  featureCards: Array<{ title: string; text: string; icon: "families" | "water" | "showers" | "bars" | "sunbeds" | "surf" | "dogs" | "toilets" | "accessible" }>;
  comparisonTitle: string;
  comparisonHeaders: { beach: string; distance: string; families: string; restaurants: string; walking: string };
  comparison: Array<{ beach: string; distance: string; families: string; restaurants: string; walking: string }>;
  galleryTitle: string;
  galleryIntro: string;
  gallery: Array<{ src: string; alt: string }>;
  faqTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  relatedTitle: string;
  related: Array<{ title: string; text: string; hrefKey: "airport" | "restaurants" | "supermarkets" | "castle" | "miramar" }>;
  schemaAbout: string[];
};

const beachImages = {
  fuengirolaSunbeds: "/images/guide/playas/01-playa-fuengirola-sombrillas.webp",
  fuengirolaShoreline: "/images/guide/playas/02-playa-fuengirola-orilla.webp",
  santaAmaliaPort: "/images/guide/playas/03-playa-santa-amalia-puerto.webp",
  fuengirolaPanorama: "/images/guide/playas/04-playa-fuengirola-panoramica.webp",
  fuengirolaHamacas: "/images/guide/playas/05-playa-fuengirola-hamacas.webp",
  costaDelSolPanorama: "/images/guide/playas/06-costa-del-sol-playa-panoramica.webp",
  castleWide: "/images/guide/playas/07-playa-del-castillo-amplia.webp"
} as const;

export const beachGuideContent: Record<Locale, BeachGuideContent> = {
  es: {
    metaTitle: "Playas cerca del Apartamento Veramar en Fuengirola | Stay Fuengirola",
    metaDescription: "Guía premium de playas cerca del Apartamento Veramar en Fuengirola: Playa de Fuengirola, Santa Amalia y Playa del Castillo, con tiempos a pie, servicios y consejos.",
    breadcrumbGuide: "Guía de Fuengirola",
    breadcrumbArticle: "Playas",
    kicker: "Guía de Fuengirola · Playas",
    h1: "Las mejores playas cerca del Apartamento Veramar en Fuengirola",
    intro: "Desde el apartamento puedes llegar caminando a varias de las mejores playas de Fuengirola. Descubre cuál elegir según si buscas tranquilidad, familias, deporte o un paseo al atardecer.",
    backLabel: "Volver a la guía",
    mapTitle: "Mapa de playas cerca del Apartamento Veramar",
    mapAria: "Mapa con la zona aproximada del apartamento y playas cercanas en Fuengirola",
    mapApartment: "Apartamento",
    mapApartmentPopup: "Zona aproximada del apartamento",
    quickTitle: "Desde el apartamento llegarás andando a:",
    quickItems: [
      { label: "Playa de Fuengirola", time: "≈ 8 minutos", icon: "beach" },
      { label: "Playa Santa Amalia", time: "≈ 12 minutos", icon: "beach" },
      { label: "Playa del Castillo", time: "≈ 18 minutos", icon: "castle" }
    ],
    sectionTitle: "Qué playa elegir",
    servicesTitle: "Servicios",
    idealTitle: "Ideal para",
    tipTitle: "Consejo Stay Fuengirola",
    ratingLabel: "Valoración orientativa Stay Fuengirola",
    sourceNote: "Los servicios pueden variar según temporada. La información se basa en datos turísticos oficiales y debe confirmarse in situ si necesitas un servicio concreto.",
    beaches: [
      {
        key: "fuengirola",
        name: "Playa de Fuengirola",
        badge: "Principal · Paseo marítimo",
        walkingTime: "≈ 8 minutos andando",
        image: beachImages.fuengirolaSunbeds,
        imageAlt: "Playa de Fuengirola junto al paseo marítimo",
        description: "Es la playa principal y más cómoda para el día a día. Tiene arena amplia, aguas generalmente tranquilas, paseo marítimo y muchos chiringuitos y restaurantes cerca. Es una opción práctica para familias y para quienes quieren bajar a la playa sin planificar demasiado.",
        services: ["Duchas y lavapiés", "Aseos públicos", "Chiringuitos", "Zona infantil", "Equipamiento deportivo", "Acceso fácil a pie"],
        idealFor: ["Familias", "Pasear", "Hamacas", "Restaurantes", "Baño tranquilo"],
        tip: "Si llegas antes de las 10:00 encontrarás mucho más espacio incluso en verano."
      },
      {
        key: "santaAmalia",
        name: "Playa Santa Amalia",
        badge: "Familiar · Cerca del apartamento",
        walkingTime: "≈ 12 minutos andando",
        image: beachImages.santaAmaliaPort,
        imageAlt: "Zona de playa y paseo marítimo en Fuengirola",
        description: "Santa Amalia es una playa urbana y familiar, conectada con el paseo marítimo y muy práctica desde la zona del apartamento. Suele ser cómoda para pasar unas horas, caminar junto al mar o combinar playa con chiringuito.",
        services: ["Duchas", "Aseos", "Chiringuitos y restaurantes", "Zona infantil", "Alquiler de hamacas en temporada", "Actividades náuticas según temporada"],
        idealFor: ["Familias", "Paseo marítimo", "Zona tranquila", "Chiringuitos", "Baño cómodo"],
        tip: "Es una buena elección si quieres playa cercana sin alejarte demasiado de supermercados, restaurantes y paseo marítimo."
      },
      {
        key: "castle",
        name: "Playa del Castillo",
        badge: "Amplia · Castillo Sohail",
        walkingTime: "≈ 18 minutos andando",
        image: beachImages.castleWide,
        imageAlt: "Playa amplia de Fuengirola con ambiente mediterráneo",
        description: "La Playa del Castillo es más amplia y abierta, junto al Castillo Sohail. Es una de las mejores para pasear, ver el atardecer y disfrutar de un ambiente algo más despejado. También cuenta con zona canina delimitada y espacios deportivos.",
        services: ["Duchas y aseos", "Zona canina delimitada", "Espacios deportivos", "Zona infantil", "Chiringuitos", "Acceso a pie o en coche"],
        idealFor: ["Atardeceres", "Pasear", "Perros", "Deportes acuáticos", "Más espacio"],
        tip: "Combínala con un paseo hasta el Castillo Sohail o el parque fluvial si quieres una tarde tranquila."
      }
    ],
    featureCards: [
      { title: "Ideal para familias", text: "Playas urbanas, paseo marítimo y servicios cerca.", icon: "families" },
      { title: "Aguas tranquilas", text: "La zona suele ser cómoda para baños relajados.", icon: "water" },
      { title: "Duchas", text: "Servicios habituales en las playas principales.", icon: "showers" },
      { title: "Chiringuitos", text: "Opciones para comer o tomar algo junto al mar.", icon: "bars" },
      { title: "Hamacas", text: "Alquiler disponible en temporada en varias zonas.", icon: "sunbeds" },
      { title: "Paddle surf", text: "Actividades náuticas según playa y temporada.", icon: "surf" },
      { title: "Playa para perros", text: "Zona delimitada en el entorno de Playa del Castillo.", icon: "dogs" },
      { title: "Baños", text: "Aseos públicos en las playas principales.", icon: "toilets" },
      { title: "Accesible", text: "Fuengirola trabaja la accesibilidad en su litoral.", icon: "accessible" }
    ],
    comparisonTitle: "Comparativa rápida",
    comparisonHeaders: { beach: "Playa", distance: "Distancia", families: "Familias", restaurants: "Restaurantes", walking: "Pasear" },
    comparison: [
      { beach: "Playa de Fuengirola", distance: "≈ 8 min", families: "Excelente", restaurants: "Muy cerca", walking: "Muy buena" },
      { beach: "Playa Santa Amalia", distance: "≈ 12 min", families: "Muy buena", restaurants: "Cerca", walking: "Muy buena" },
      { beach: "Playa del Castillo", distance: "≈ 18 min", families: "Buena", restaurants: "Algunos", walking: "Excelente" }
    ],
    galleryTitle: "Galería",
    galleryIntro: "Una selección visual de playas y paseos junto al mar en Fuengirola para ayudarte a elegir tu plan de playa.",
    gallery: [
      { src: beachImages.fuengirolaSunbeds, alt: "Playa de Fuengirola con sombrillas y mar tranquilo" },
      { src: beachImages.fuengirolaShoreline, alt: "Orilla de la Playa de Fuengirola para pasear junto al mar" },
      { src: beachImages.santaAmaliaPort, alt: "Playa Santa Amalia junto a la zona del puerto" },
      { src: beachImages.fuengirolaPanorama, alt: "Vista panorámica de playa en Fuengirola y la Costa del Sol" },
      { src: beachImages.fuengirolaHamacas, alt: "Hamacas y sombrillas en la Playa de Fuengirola" },
      { src: beachImages.costaDelSolPanorama, alt: "Panorámica de playa de la Costa del Sol cerca de Fuengirola" },
      { src: beachImages.castleWide, alt: "Playa amplia cerca del Castillo Sohail en Fuengirola" }
    ],
    faqTitle: "Preguntas frecuentes",
    faqs: [
      { question: "¿Hay duchas?", answer: "Sí, las playas principales de Fuengirola cuentan habitualmente con duchas o lavapiés. La disponibilidad puede variar según temporada o mantenimiento." },
      { question: "¿Hay socorristas?", answer: "Fuengirola dispone de servicio de vigilancia y socorrismo en temporada de playas. Conviene comprobar horarios oficiales si viajas fuera de verano." },
      { question: "¿Hay hamacas?", answer: "En varias zonas hay alquiler de hamacas y sombrillas durante la temporada turística." },
      { question: "¿Cuál es la playa más tranquila?", answer: "Para un ambiente más amplio y despejado, la Playa del Castillo suele sentirse menos urbana que la zona central." },
      { question: "¿Cuál está más cerca del apartamento?", answer: "La Playa de Fuengirola es la opción más cercana, a unos 8 minutos andando de la zona del apartamento." },
      { question: "¿Hay playa para perros?", answer: "Sí, en el entorno de Playa del Castillo existe una zona canina delimitada. Revisa siempre la señalización local antes de acceder." }
    ],
    relatedTitle: "También te puede interesar",
    related: [
      { title: "Cómo llegar desde el aeropuerto", text: "Tren, taxi, VTC y coche desde Málaga.", hrefKey: "airport" },
      { title: "Restaurantes", text: "Guía gastronómica en preparación.", hrefKey: "restaurants" },
      { title: "Supermercados", text: "Compras prácticas cerca del apartamento.", hrefKey: "supermarkets" },
      { title: "Castillo Sohail", text: "Paseo recomendado junto a Playa del Castillo.", hrefKey: "castle" },
      { title: "Centro Comercial Miramar", text: "Compras y ocio a pocos minutos.", hrefKey: "miramar" }
    ],
    schemaAbout: ["Fuengirola", "Playas de Fuengirola", "Playa de Fuengirola", "Playa Santa Amalia", "Playa del Castillo", "Costa del Sol"]
  },
  en: {
    metaTitle: "Best Beaches near Apartamento Veramar in Fuengirola | Stay Fuengirola",
    metaDescription: "Premium beach guide near Apartamento Veramar in Fuengirola: Fuengirola Beach, Santa Amalia and Castle Beach with walking times, services and local tips.",
    breadcrumbGuide: "Fuengirola Guide",
    breadcrumbArticle: "Beaches",
    kicker: "Fuengirola Guide · Beaches",
    h1: "The best beaches near Apartamento Veramar in Fuengirola",
    intro: "From the apartment you can walk to several of Fuengirola’s best beaches. Choose the right one for families, calm water, sport, space or an evening walk by the sea.",
    backLabel: "Back to the guide",
    mapTitle: "Map of beaches near Apartamento Veramar",
    mapAria: "Map with the approximate apartment area and nearby beaches in Fuengirola",
    mapApartment: "Apartment",
    mapApartmentPopup: "Approximate apartment area",
    quickTitle: "From the apartment you can walk to:",
    quickItems: [
      { label: "Fuengirola Beach", time: "≈ 8 min", icon: "beach" },
      { label: "Santa Amalia Beach", time: "≈ 12 min", icon: "beach" },
      { label: "Castle Beach", time: "≈ 18 min", icon: "castle" }
    ],
    sectionTitle: "Which beach to choose",
    servicesTitle: "Services",
    idealTitle: "Best for",
    tipTitle: "Stay Fuengirola tip",
    ratingLabel: "Stay Fuengirola quick rating",
    sourceNote: "Services may vary by season. Information is based on official tourism sources and should be checked locally if you need a specific service.",
    beaches: [
      { key: "fuengirola", name: "Fuengirola Beach", badge: "Main beach · Promenade", walkingTime: "≈ 8 min walk", image: beachImages.fuengirolaSunbeds, imageAlt: "Fuengirola Beach beside the seafront promenade", description: "This is the main and easiest beach for everyday plans. It has a broad sandy area, generally calm water, the promenade and plenty of beach bars and restaurants nearby. It is practical for families and for guests who want to go to the beach without much planning.", services: ["Showers and foot showers", "Public toilets", "Beach bars", "Children's area", "Sports equipment", "Easy access on foot"], idealFor: ["Families", "Walking", "Sunbeds", "Restaurants", "Calm swimming"], tip: "Arrive before 10:00 and you will usually find much more space, even in summer." },
      { key: "santaAmalia", name: "Santa Amalia Beach", badge: "Family friendly · Close by", walkingTime: "≈ 12 min walk", image: beachImages.santaAmaliaPort, imageAlt: "Beach and promenade area in Fuengirola", description: "Santa Amalia is an urban, family-friendly beach connected to the seafront promenade and convenient from the apartment area. It works well for a few relaxed hours, a walk by the sea or a beach bar stop.", services: ["Showers", "Toilets", "Beach bars and restaurants", "Children's area", "Seasonal sunbed rental", "Seasonal water activities"], idealFor: ["Families", "Promenade walks", "Calmer area", "Beach bars", "Easy swimming"], tip: "Choose it when you want a nearby beach without moving far from supermarkets, restaurants and the promenade." },
      { key: "castle", name: "Castle Beach", badge: "Wide beach · Sohail Castle", walkingTime: "≈ 18 min walk", image: beachImages.castleWide, imageAlt: "Wide Mediterranean beach area in Fuengirola", description: "Castle Beach is wider and more open, next to Sohail Castle. It is one of the best options for walking, sunsets and a more spacious feel. It also has a designated dog beach area and sports spaces.", services: ["Showers and toilets", "Designated dog area", "Sports areas", "Children's area", "Beach bars", "Access on foot or by car"], idealFor: ["Sunsets", "Walking", "Dogs", "Water sports", "More space"], tip: "Combine it with a walk to Sohail Castle or the river park for an easy late afternoon plan." }
    ],
    featureCards: [
      { title: "Great for families", text: "Urban beaches, promenade and services nearby.", icon: "families" },
      { title: "Calm water", text: "The area is usually comfortable for relaxed swimming.", icon: "water" },
      { title: "Showers", text: "Common services on the main beaches.", icon: "showers" },
      { title: "Beach bars", text: "Places to eat or drink by the sea.", icon: "bars" },
      { title: "Sunbeds", text: "Seasonal rental in several beach areas.", icon: "sunbeds" },
      { title: "Paddle surf", text: "Water activities depend on beach and season.", icon: "surf" },
      { title: "Dog beach", text: "Designated area near Castle Beach.", icon: "dogs" },
      { title: "Toilets", text: "Public toilets on the main beaches.", icon: "toilets" },
      { title: "Accessible", text: "Fuengirola works on accessibility along the coast.", icon: "accessible" }
    ],
    comparisonTitle: "Quick comparison",
    comparisonHeaders: { beach: "Beach", distance: "Distance", families: "Families", restaurants: "Restaurants", walking: "Walking" },
    comparison: [
      { beach: "Fuengirola Beach", distance: "≈ 8 min", families: "Excellent", restaurants: "Very close", walking: "Very good" },
      { beach: "Santa Amalia Beach", distance: "≈ 12 min", families: "Very good", restaurants: "Close", walking: "Very good" },
      { beach: "Castle Beach", distance: "≈ 18 min", families: "Good", restaurants: "Some", walking: "Excellent" }
    ],
    galleryTitle: "Gallery",
    galleryIntro: "A visual selection of beaches and seafront walks in Fuengirola to help you choose your beach plan.",
    gallery: [
      { src: beachImages.fuengirolaSunbeds, alt: "Fuengirola Beach with parasols and calm water" },
      { src: beachImages.fuengirolaShoreline, alt: "Fuengirola Beach shoreline for a walk by the sea" },
      { src: beachImages.santaAmaliaPort, alt: "Santa Amalia Beach near the harbour area" },
      { src: beachImages.fuengirolaPanorama, alt: "Panoramic beach view in Fuengirola and the Costa del Sol" },
      { src: beachImages.fuengirolaHamacas, alt: "Sunbeds and parasols on Fuengirola Beach" },
      { src: beachImages.costaDelSolPanorama, alt: "Costa del Sol beach panorama near Fuengirola" },
      { src: beachImages.castleWide, alt: "Wide beach near Sohail Castle in Fuengirola" }
    ],
    faqTitle: "Frequently asked questions",
    faqs: [
      { question: "Are there showers?", answer: "Yes, Fuengirola’s main beaches usually have showers or foot showers. Availability may vary by season or maintenance." },
      { question: "Are there lifeguards?", answer: "Fuengirola operates beach surveillance and lifeguard services during the beach season. Check official timings if travelling outside summer." },
      { question: "Are there sunbeds?", answer: "Several areas offer sunbed and parasol rental during the tourist season." },
      { question: "Which beach is the quietest?", answer: "For more space and a less central feel, Castle Beach is usually the best option." },
      { question: "Which beach is closest to the apartment?", answer: "Fuengirola Beach is the closest option, around 8 minutes on foot from the apartment area." },
      { question: "Is there a dog beach?", answer: "Yes, there is a designated dog area around Castle Beach. Always check local signs before entering." }
    ],
    relatedTitle: "You may also be interested in",
    related: [
      { title: "How to arrive from the airport", text: "Train, taxi, VTC and car from Malaga.", hrefKey: "airport" },
      { title: "Restaurants", text: "Food guide coming soon.", hrefKey: "restaurants" },
      { title: "Supermarkets", text: "Practical shopping near the apartment.", hrefKey: "supermarkets" },
      { title: "Sohail Castle", text: "Recommended walk beside Castle Beach.", hrefKey: "castle" },
      { title: "Miramar Shopping Centre", text: "Shopping and leisure within easy reach.", hrefKey: "miramar" }
    ],
    schemaAbout: ["Fuengirola", "Fuengirola beaches", "Fuengirola Beach", "Santa Amalia Beach", "Castle Beach", "Costa del Sol"]
  },
  fi: {
    metaTitle: "Parhaat rannat Apartamento Veramarin lähellä Fuengirolassa | Stay Fuengirola",
    metaDescription: "Tyylikäs rantaopas Apartamento Veramarin lähellä: Fuengirolan ranta, Santa Amalia ja Castillo-ranta, kävelyajat, palvelut ja vinkit.",
    breadcrumbGuide: "Fuengirola-opas", breadcrumbArticle: "Rannat", kicker: "Fuengirola-opas · Rannat",
    h1: "Parhaat rannat Apartamento Veramarin lähellä Fuengirolassa",
    intro: "Asunnolta voit kävellä useille Fuengirolan parhaista rannoista. Valitse sopiva ranta sen mukaan, kaipaatko rauhaa, perheystävällisyyttä, liikuntaa tai iltakävelyä meren äärellä.",
    backLabel: "Takaisin oppaaseen", mapTitle: "Kartta rannoista Apartamento Veramarin lähellä", mapAria: "Kartta, jossa näkyy asunnon arvioitu alue ja lähirannat Fuengirolassa", mapApartment: "Asunto", mapApartmentPopup: "Asunnon arvioitu alue",
    quickTitle: "Asunnolta kävelet näille rannoille:", quickItems: [{ label: "Fuengirolan ranta", time: "≈ 8 min", icon: "beach" }, { label: "Santa Amalian ranta", time: "≈ 12 min", icon: "beach" }, { label: "Castillo-ranta", time: "≈ 18 min", icon: "castle" }],
    sectionTitle: "Mikä ranta kannattaa valita", servicesTitle: "Palvelut", idealTitle: "Sopii erityisesti", tipTitle: "Stay Fuengirola -vinkki", ratingLabel: "Stay Fuengirolan pika-arvio", sourceNote: "Palvelut voivat vaihdella kauden mukaan. Tiedot perustuvat virallisiin matkailulähteisiin, mutta tarkista paikan päällä, jos tarvitset tietyn palvelun.",
    beaches: [
      { key: "fuengirola", name: "Fuengirolan ranta", badge: "Pääranta · Rantakatu", walkingTime: "≈ 8 min kävellen", image: beachImages.fuengirolaSunbeds, imageAlt: "Fuengirolan ranta rantakadun vieressä", description: "Fuengirolan ranta on helpoin valinta arkeen. Leveä hiekkaranta, yleensä rauhallinen vesi, rantakatu sekä monet chiringuitot ja ravintolat tekevät siitä käytännöllisen etenkin perheille.", services: ["Suihkut ja jalkasuihkut", "Julkiset wc:t", "Chiringuitot", "Leikkialue", "Liikuntavarusteita", "Helppo pääsy kävellen"], idealFor: ["Perheet", "Kävely", "Aurinkotuolit", "Ravintolat", "Rauhallinen uinti"], tip: "Saavu ennen klo 10.00, niin tilaa löytyy yleensä paremmin myös kesällä." },
      { key: "santaAmalia", name: "Santa Amalian ranta", badge: "Perheystävällinen · Lähellä", walkingTime: "≈ 12 min kävellen", image: beachImages.santaAmaliaPort, imageAlt: "Ranta- ja rantakatualue Fuengirolassa", description: "Santa Amalia on kaupunkimainen ja perheystävällinen ranta, joka liittyy suoraan rantakatuun. Se sopii muutaman tunnin rentoon rantapäivään, kävelyyn tai chiringuito-pysähdykseen.", services: ["Suihkut", "Wc:t", "Chiringuitot ja ravintolat", "Leikkialue", "Aurinkotuoleja kaudella", "Vesiaktiviteetteja kaudella"], idealFor: ["Perheet", "Rantakatu", "Rauhallisempi alue", "Chiringuitot", "Helppo uinti"], tip: "Hyvä valinta, kun haluat rannan läheltä ilman että poistut kauas kaupoista, ravintoloista ja rantakadulta." },
      { key: "castle", name: "Castillo-ranta", badge: "Laaja ranta · Sohailin linna", walkingTime: "≈ 18 min kävellen", image: beachImages.castleWide, imageAlt: "Laaja välimerellinen ranta Fuengirolassa", description: "Castillo-ranta on leveämpi ja avoimempi ranta Sohailin linnan vieressä. Se sopii kävelyyn, auringonlaskuihin ja väljempään rantatunnelmaan. Alueella on myös rajattu koiraranta ja liikuntapaikkoja.", services: ["Suihkut ja wc:t", "Rajattu koira-alue", "Liikunta-alueita", "Leikkialue", "Chiringuitot", "Pääsy kävellen tai autolla"], idealFor: ["Auringonlaskut", "Kävely", "Koirat", "Vesiurheilu", "Väljyys"], tip: "Yhdistä ranta kävelyyn Sohailin linnalle tai jokipuistoon rauhallista iltaa varten." }
    ],
    featureCards: [
      { title: "Hyvä perheille", text: "Kaupunkirannat, rantakatu ja palvelut lähellä.", icon: "families" },
      { title: "Rauhallinen vesi", text: "Alue sopii yleensä rentoon uimiseen.", icon: "water" },
      { title: "Suihkut", text: "Tavallisia palveluja päärannoilla.", icon: "showers" },
      { title: "Chiringuitot", text: "Ruokaa ja juomaa meren äärellä.", icon: "bars" },
      { title: "Aurinkotuolit", text: "Vuokrausta kaudella useilla alueilla.", icon: "sunbeds" },
      { title: "Paddle surf", text: "Vesiaktiviteetit riippuvat rannasta ja kaudesta.", icon: "surf" },
      { title: "Koiraranta", text: "Rajattu alue Castillo-rannan ympäristössä.", icon: "dogs" },
      { title: "Wc:t", text: "Julkisia wc-tiloja päärannoilla.", icon: "toilets" },
      { title: "Esteettömyys", text: "Fuengirola kehittää rannikon esteettömyyttä.", icon: "accessible" }
    ], comparisonTitle: "Nopea vertailu", comparisonHeaders: { beach: "Ranta", distance: "Etäisyys", families: "Perheet", restaurants: "Ravintolat", walking: "Kävely" }, comparison: [{ beach: "Fuengirolan ranta", distance: "≈ 8 min", families: "Erinomainen", restaurants: "Hyvin lähellä", walking: "Erittäin hyvä" }, { beach: "Santa Amalian ranta", distance: "≈ 12 min", families: "Erittäin hyvä", restaurants: "Lähellä", walking: "Erittäin hyvä" }, { beach: "Castillo-ranta", distance: "≈ 18 min", families: "Hyvä", restaurants: "Muutamia", walking: "Erinomainen" }],
    galleryTitle: "Galleria", galleryIntro: "Valikoima ranta- ja merimaisemia Fuengirolasta, jotta voit valita omaan päivääsi sopivan rannan.",
    gallery: [
      { src: beachImages.fuengirolaSunbeds, alt: "Fuengirolan ranta aurinkovarjoineen ja rauhallisine merineen" },
      { src: beachImages.fuengirolaShoreline, alt: "Fuengirolan rantaviiva kävelyä varten" },
      { src: beachImages.santaAmaliaPort, alt: "Santa Amalian ranta satama-alueen lähellä" },
      { src: beachImages.fuengirolaPanorama, alt: "Panoraamanäkymä Fuengirolan rannalle ja Costa del Solille" },
      { src: beachImages.fuengirolaHamacas, alt: "Aurinkotuoleja ja varjoja Fuengirolan rannalla" },
      { src: beachImages.costaDelSolPanorama, alt: "Costa del Solin rantapanoraama Fuengirolan lähellä" },
      { src: beachImages.castleWide, alt: "Laaja ranta Sohailin linnan lähellä Fuengirolassa" }
    ],
    faqTitle: "Usein kysytyt kysymykset", faqs: [{ question: "Onko rannoilla suihkuja?", answer: "Kyllä, Fuengirolan päärannoilla on yleensä suihkuja tai jalkasuihkuja. Saatavuus voi vaihdella kauden tai huollon mukaan." }, { question: "Onko rannoilla hengenpelastajia?", answer: "Fuengirolassa on rantavalvontaa ja hengenpelastuspalveluja rantakaudella. Tarkista viralliset ajat, jos matkustat kesän ulkopuolella." }, { question: "Onko aurinkotuoleja?", answer: "Useilla alueilla on aurinkotuolien ja varjojen vuokrausta matkailukaudella." }, { question: "Mikä ranta on rauhallisin?", answer: "Väljempää tunnelmaa varten Castillo-ranta on yleensä paras vaihtoehto." }, { question: "Mikä ranta on lähimpänä asuntoa?", answer: "Fuengirolan ranta on lähin, noin 8 minuutin kävelymatkan päässä asunnon alueelta." }, { question: "Onko koiraranta?", answer: "Kyllä, Castillo-rannan alueella on rajattu koira-alue. Tarkista aina paikalliset opasteet." }],
    relatedTitle: "Saatat olla kiinnostunut myös", related: [{ title: "Saapuminen lentokentältä", text: "Juna, taksi, VTC ja auto Malagasta.", hrefKey: "airport" }, { title: "Ravintolat", text: "Ruokaopas tulossa.", hrefKey: "restaurants" }, { title: "Supermarketit", text: "Käytännön ostokset lähellä asuntoa.", hrefKey: "supermarkets" }, { title: "Sohailin linna", text: "Suositeltu kävely Castillo-rannan vieressä.", hrefKey: "castle" }, { title: "Miramar-ostoskeskus", text: "Ostoksia ja vapaa-aikaa lähellä.", hrefKey: "miramar" }],
    schemaAbout: ["Fuengirola", "Fuengirolan rannat", "Fuengirolan ranta", "Santa Amalian ranta", "Castillo-ranta", "Costa del Sol"]
  },
  sv: {
    metaTitle: "Bästa stränderna nära Apartamento Veramar i Fuengirola | Stay Fuengirola",
    metaDescription: "Premiumguide till stränder nära Apartamento Veramar: Fuengirola strand, Santa Amalia och Castillo med promenadtider, service och lokala tips.",
    breadcrumbGuide: "Fuengirola-guide", breadcrumbArticle: "Stränder", kicker: "Fuengirola-guide · Stränder",
    h1: "De bästa stränderna nära Apartamento Veramar i Fuengirola",
    intro: "Från lägenheten kan du promenera till flera av Fuengirolas bästa stränder. Välj strand efter om du söker lugn, familjevänlighet, sport eller en kvällspromenad vid havet.",
    backLabel: "Tillbaka till guiden", mapTitle: "Karta över stränder nära Apartamento Veramar", mapAria: "Karta med ungefärligt läge för lägenheten och närliggande stränder i Fuengirola", mapApartment: "Lägenhet", mapApartmentPopup: "Ungefärligt område för lägenheten",
    quickTitle: "Från lägenheten promenerar du till:", quickItems: [{ label: "Fuengirola strand", time: "≈ 8 min", icon: "beach" }, { label: "Santa Amalia strand", time: "≈ 12 min", icon: "beach" }, { label: "Castillo strand", time: "≈ 18 min", icon: "castle" }],
    sectionTitle: "Vilken strand ska du välja", servicesTitle: "Service", idealTitle: "Passar bäst för", tipTitle: "Stay Fuengirola-tips", ratingLabel: "Stay Fuengirola-snabbomdöme", sourceNote: "Service kan variera efter säsong. Informationen bygger på officiella turistkällor och bör kontrolleras lokalt om du behöver en viss service.",
    beaches: [
      { key: "fuengirola", name: "Fuengirola strand", badge: "Huvudstrand · Strandpromenad", walkingTime: "≈ 8 min till fots", image: beachImages.fuengirolaSunbeds, imageAlt: "Fuengirola strand intill strandpromenaden", description: "Fuengirola strand är det enklaste valet för vardagliga strandplaner. Den breda sandytan, det oftast lugna vattnet, strandpromenaden och många chiringuitos och restauranger nära gör den mycket praktisk, särskilt för familjer.", services: ["Duschar och fotduschar", "Offentliga toaletter", "Chiringuitos", "Lekplats", "Sportutrustning", "Enkel åtkomst till fots"], idealFor: ["Familjer", "Promenader", "Solstolar", "Restauranger", "Lugnt bad"], tip: "Kom före kl. 10.00 så hittar du oftast mer plats, även på sommaren." },
      { key: "santaAmalia", name: "Santa Amalia strand", badge: "Familjevänlig · Nära", walkingTime: "≈ 12 min till fots", image: beachImages.santaAmaliaPort, imageAlt: "Strand och strandpromenad i Fuengirola", description: "Santa Amalia är en urban och familjevänlig strand som hänger ihop med strandpromenaden. Den passar bra för några lugna timmar, en promenad vid havet eller ett stopp på en chiringuito.", services: ["Duschar", "Toaletter", "Chiringuitos och restauranger", "Lekplats", "Solstolar under säsong", "Vattenaktiviteter under säsong"], idealFor: ["Familjer", "Strandpromenad", "Lugnare område", "Chiringuitos", "Bekvämt bad"], tip: "Välj den om du vill ha en närliggande strand utan att komma långt från butiker, restauranger och promenaden." },
      { key: "castle", name: "Castillo strand", badge: "Bred strand · Sohail slott", walkingTime: "≈ 18 min till fots", image: beachImages.castleWide, imageAlt: "Bred medelhavsstrand i Fuengirola", description: "Castillo strand är bredare och öppnare, intill Sohail slott. Den passar bra för promenader, solnedgångar och en luftigare strandkänsla. Här finns också ett avgränsat hundområde och sportytor.", services: ["Duschar och toaletter", "Avgränsat hundområde", "Sportytor", "Lekplats", "Chiringuitos", "Åtkomst till fots eller med bil"], idealFor: ["Solnedgångar", "Promenader", "Hundar", "Vattensport", "Mer utrymme"], tip: "Kombinera stranden med en promenad till Sohail slott eller flodparken för en lugn eftermiddag." }
    ],
    featureCards: [
      { title: "Bra för familjer", text: "Urbana stränder, promenad och service nära.", icon: "families" },
      { title: "Lugnt vatten", text: "Området är oftast bekvämt för avslappnade bad.", icon: "water" },
      { title: "Duschar", text: "Vanlig service på huvudstränderna.", icon: "showers" },
      { title: "Chiringuitos", text: "Mat och dryck vid havet.", icon: "bars" },
      { title: "Solstolar", text: "Uthyrning under säsong på flera platser.", icon: "sunbeds" },
      { title: "Paddle surf", text: "Vattenaktiviteter beror på strand och säsong.", icon: "surf" },
      { title: "Hundstrand", text: "Avgränsat område nära Castillo strand.", icon: "dogs" },
      { title: "Toaletter", text: "Offentliga toaletter på huvudstränderna.", icon: "toilets" },
      { title: "Tillgänglighet", text: "Fuengirola arbetar med tillgänglighet längs kusten.", icon: "accessible" }
    ],
    comparisonTitle: "Snabb jämförelse", comparisonHeaders: { beach: "Strand", distance: "Avstånd", families: "Familjer", restaurants: "Restauranger", walking: "Promenad" }, comparison: [{ beach: "Fuengirola strand", distance: "≈ 8 min", families: "Utmärkt", restaurants: "Mycket nära", walking: "Mycket bra" }, { beach: "Santa Amalia strand", distance: "≈ 12 min", families: "Mycket bra", restaurants: "Nära", walking: "Mycket bra" }, { beach: "Castillo strand", distance: "≈ 18 min", families: "Bra", restaurants: "Några", walking: "Utmärkt" }],
    galleryTitle: "Galleri", galleryIntro: "Ett visuellt urval av stränder och promenader vid havet i Fuengirola som hjälper dig att välja rätt stranddag.",
    gallery: [
      { src: beachImages.fuengirolaSunbeds, alt: "Fuengirola-stranden med parasoller och lugnt hav" },
      { src: beachImages.fuengirolaShoreline, alt: "Vattenlinjen vid Fuengirola-stranden för promenader" },
      { src: beachImages.santaAmaliaPort, alt: "Santa Amalia-stranden nära hamnområdet" },
      { src: beachImages.fuengirolaPanorama, alt: "Panoramavy över stranden i Fuengirola och Costa del Sol" },
      { src: beachImages.fuengirolaHamacas, alt: "Solstolar och parasoller på Fuengirola-stranden" },
      { src: beachImages.costaDelSolPanorama, alt: "Strandpanorama över Costa del Sol nära Fuengirola" },
      { src: beachImages.castleWide, alt: "Bred strand nära Sohailborgen i Fuengirola" }
    ],
    faqTitle: "Vanliga frågor", faqs: [{ question: "Finns det duschar?", answer: "Ja, Fuengirolas huvudstränder har vanligtvis duschar eller fotduschar. Tillgänglighet kan variera efter säsong eller underhåll." }, { question: "Finns det badvakter?", answer: "Fuengirola har strandbevakning och livräddning under badsäsongen. Kontrollera officiella tider om du reser utanför sommaren." }, { question: "Finns det solstolar?", answer: "På flera områden finns uthyrning av solstolar och parasoller under turistsäsongen." }, { question: "Vilken strand är lugnast?", answer: "För mer utrymme och en mindre central känsla är Castillo strand oftast bästa valet." }, { question: "Vilken strand ligger närmast lägenheten?", answer: "Fuengirola strand ligger närmast, cirka 8 minuter till fots från lägenhetsområdet." }, { question: "Finns det hundstrand?", answer: "Ja, det finns ett avgränsat hundområde vid Castillo strand. Kontrollera alltid lokal skyltning." }],
    relatedTitle: "Du kanske också är intresserad av", related: [{ title: "Från flygplatsen", text: "Tåg, taxi, VTC och bil från Malaga.", hrefKey: "airport" }, { title: "Restauranger", text: "Matguide kommer snart.", hrefKey: "restaurants" }, { title: "Mataffärer", text: "Praktiska inköp nära lägenheten.", hrefKey: "supermarkets" }, { title: "Sohail slott", text: "Rekommenderad promenad vid Castillo strand.", hrefKey: "castle" }, { title: "Miramar köpcentrum", text: "Shopping och nöjen nära.", hrefKey: "miramar" }],
    schemaAbout: ["Fuengirola", "Fuengirolas stränder", "Fuengirola strand", "Santa Amalia strand", "Castillo strand", "Costa del Sol"]
  },
  no: {
    metaTitle: "De beste strendene nær Apartamento Veramar i Fuengirola | Stay Fuengirola",
    metaDescription: "Premiumguide til strender nær Apartamento Veramar: Fuengirola-stranden, Santa Amalia og Castillo med gangtider, tjenester og lokale tips.",
    breadcrumbGuide: "Fuengirola-guide", breadcrumbArticle: "Strender", kicker: "Fuengirola-guide · Strender",
    h1: "De beste strendene nær Apartamento Veramar i Fuengirola",
    intro: "Fra leiligheten kan du gå til flere av Fuengirolas beste strender. Velg strand etter om du ønsker ro, familievennlighet, sport eller en kveldstur langs sjøen.",
    backLabel: "Tilbake til guiden", mapTitle: "Kart over strender nær Apartamento Veramar", mapAria: "Kart med omtrentlig område for leiligheten og nærliggende strender i Fuengirola", mapApartment: "Leilighet", mapApartmentPopup: "Omtrentlig område for leiligheten",
    quickTitle: "Fra leiligheten kan du gå til:", quickItems: [{ label: "Fuengirola-stranden", time: "≈ 8 min", icon: "beach" }, { label: "Santa Amalia-stranden", time: "≈ 12 min", icon: "beach" }, { label: "Castillo-stranden", time: "≈ 18 min", icon: "castle" }],
    sectionTitle: "Hvilken strand bør du velge", servicesTitle: "Tjenester", idealTitle: "Passer best for", tipTitle: "Stay Fuengirola-tips", ratingLabel: "Stay Fuengirola-hurtigvurdering", sourceNote: "Tjenester kan variere etter sesong. Informasjonen bygger på offisielle turistkilder og bør kontrolleres lokalt hvis du trenger en bestemt tjeneste.",
    beaches: [
      { key: "fuengirola", name: "Fuengirola-stranden", badge: "Hovedstrand · Strandpromenade", walkingTime: "≈ 8 min til fots", image: beachImages.fuengirolaSunbeds, imageAlt: "Fuengirola-stranden ved strandpromenaden", description: "Fuengirola-stranden er det enkleste valget til hverdagslige strandplaner. Bred sand, vanligvis rolig vann, strandpromenade og mange chiringuitos og restauranter i nærheten gjør den praktisk, spesielt for familier.", services: ["Dusjer og fotdusjer", "Offentlige toaletter", "Chiringuitos", "Lekeområde", "Sportsutstyr", "Enkel tilgang til fots"], idealFor: ["Familier", "Turer", "Solsenger", "Restauranter", "Rolig bading"], tip: "Kom før kl. 10.00, så finner du vanligvis mer plass, også om sommeren." },
      { key: "santaAmalia", name: "Santa Amalia-stranden", badge: "Familievennlig · Nær", walkingTime: "≈ 12 min til fots", image: beachImages.santaAmaliaPort, imageAlt: "Strand og strandpromenade i Fuengirola", description: "Santa Amalia er en urban og familievennlig strand som henger sammen med strandpromenaden. Den passer godt for noen rolige timer, en tur langs sjøen eller et stopp på en chiringuito.", services: ["Dusjer", "Toaletter", "Chiringuitos og restauranter", "Lekeområde", "Solsenger i sesong", "Vannaktiviteter i sesong"], idealFor: ["Familier", "Strandpromenade", "Roligere område", "Chiringuitos", "Enkel bading"], tip: "Velg den når du vil ha en nærliggende strand uten å gå langt fra butikker, restauranter og promenaden." },
      { key: "castle", name: "Castillo-stranden", badge: "Bred strand · Sohail-slottet", walkingTime: "≈ 18 min til fots", image: beachImages.castleWide, imageAlt: "Bred middelhavsstrand i Fuengirola", description: "Castillo-stranden er bredere og mer åpen, ved Sohail-slottet. Den passer godt for turer, solnedganger og en luftigere strandfølelse. Området har også en avgrenset hundesone og sportsområder.", services: ["Dusjer og toaletter", "Avgrenset hundeområde", "Sportsområder", "Lekeområde", "Chiringuitos", "Tilgang til fots eller med bil"], idealFor: ["Solnedganger", "Turer", "Hunder", "Vannsport", "Mer plass"], tip: "Kombiner stranden med en tur til Sohail-slottet eller elveparken for en rolig ettermiddag." }
    ],
    featureCards: [
      { title: "Bra for familier", text: "Urbane strender, promenade og tjenester i nærheten.", icon: "families" },
      { title: "Rolig vann", text: "Området er vanligvis behagelig for avslappet bading.", icon: "water" },
      { title: "Dusjer", text: "Vanlige tjenester på hovedstrendene.", icon: "showers" },
      { title: "Chiringuitos", text: "Mat og drikke ved sjøen.", icon: "bars" },
      { title: "Solsenger", text: "Utleie i sesong på flere områder.", icon: "sunbeds" },
      { title: "Paddle surf", text: "Vannaktiviteter avhenger av strand og sesong.", icon: "surf" },
      { title: "Hundestrand", text: "Avgrenset område ved Castillo-stranden.", icon: "dogs" },
      { title: "Toaletter", text: "Offentlige toaletter på hovedstrendene.", icon: "toilets" },
      { title: "Tilgjengelighet", text: "Fuengirola jobber med tilgjengelighet langs kysten.", icon: "accessible" }
    ],
    comparisonTitle: "Rask sammenligning", comparisonHeaders: { beach: "Strand", distance: "Avstand", families: "Familier", restaurants: "Restauranter", walking: "Turer" }, comparison: [{ beach: "Fuengirola-stranden", distance: "≈ 8 min", families: "Utmerket", restaurants: "Svært nær", walking: "Svært bra" }, { beach: "Santa Amalia-stranden", distance: "≈ 12 min", families: "Svært bra", restaurants: "Nær", walking: "Svært bra" }, { beach: "Castillo-stranden", distance: "≈ 18 min", families: "Bra", restaurants: "Noen", walking: "Utmerket" }],
    galleryTitle: "Galleri", galleryIntro: "Et visuelt utvalg av strender og turer langs sjøen i Fuengirola, slik at du lettere kan velge strand for dagen.",
    gallery: [
      { src: beachImages.fuengirolaSunbeds, alt: "Fuengirola-stranden med parasoller og rolig sjø" },
      { src: beachImages.fuengirolaShoreline, alt: "Vannkanten ved Fuengirola-stranden for spaserturer" },
      { src: beachImages.santaAmaliaPort, alt: "Santa Amalia-stranden nær havneområdet" },
      { src: beachImages.fuengirolaPanorama, alt: "Panoramautsikt over stranden i Fuengirola og Costa del Sol" },
      { src: beachImages.fuengirolaHamacas, alt: "Solsenger og parasoller på Fuengirola-stranden" },
      { src: beachImages.costaDelSolPanorama, alt: "Strandpanorama over Costa del Sol nær Fuengirola" },
      { src: beachImages.castleWide, alt: "Bred strand nær Sohail-slottet i Fuengirola" }
    ],
    faqTitle: "Vanlige spørsmål", faqs: [{ question: "Finnes det dusjer?", answer: "Ja, Fuengirolas hovedstrender har vanligvis dusjer eller fotdusjer. Tilgjengeligheten kan variere etter sesong eller vedlikehold." }, { question: "Finnes det badevakter?", answer: "Fuengirola har strandvakt og livredning i strandsesongen. Sjekk offisielle tider hvis du reiser utenfor sommeren." }, { question: "Finnes det solsenger?", answer: "Flere områder tilbyr utleie av solsenger og parasoller i turistsesongen." }, { question: "Hvilken strand er roligst?", answer: "For mer plass og en mindre sentral følelse er Castillo-stranden vanligvis det beste valget." }, { question: "Hvilken strand ligger nærmest leiligheten?", answer: "Fuengirola-stranden ligger nærmest, omtrent 8 minutter til fots fra leilighetsområdet." }, { question: "Finnes det hundestrand?", answer: "Ja, det finnes et avgrenset hundeområde ved Castillo-stranden. Sjekk alltid lokal skilting." }],
    relatedTitle: "Du kan også være interessert i", related: [{ title: "Fra flyplassen", text: "Tog, taxi, VTC og bil fra Malaga.", hrefKey: "airport" }, { title: "Restauranter", text: "Matguide kommer snart.", hrefKey: "restaurants" }, { title: "Supermarkeder", text: "Praktiske innkjøp nær leiligheten.", hrefKey: "supermarkets" }, { title: "Sohail-slottet", text: "Anbefalt tur ved Castillo-stranden.", hrefKey: "castle" }, { title: "Miramar kjøpesenter", text: "Shopping og fritid i nærheten.", hrefKey: "miramar" }],
    schemaAbout: ["Fuengirola", "Fuengirolas strender", "Fuengirola-stranden", "Santa Amalia-stranden", "Castillo-stranden", "Costa del Sol"]
  }
};
