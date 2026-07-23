import type { GuideCategoryKey } from "@/config/guides";
import type { Locale } from "@/i18n/locales";

export type TransportLinkDestination = "official_site" | "timetable" | "map" | "tickets" | "directions" | "service_alerts";
export type TransportAnalyticsMode = "train" | "urban_bus" | "intercity_bus" | "taxi" | "car" | "parking";

export type TransportGuideContent = {
  metaTitle: string;
  metaDescription: string;
  breadcrumbGuide: string;
  breadcrumbArticle: string;
  kicker: string;
  h1: string;
  intro: string;
  heroImageAlt: string;
  backLabel: string;
  quickTitle: string;
  quickItems: Array<{ title: string; recommendation: string; href: string }>;
  comparisonTitle: string;
  comparisonHeaders: { mode: string; bestFor: string; advantages: string; note: string };
  comparisonRows: Array<{ mode: string; bestFor: string; advantages: string; note: string }>;
  planner: {
    title: string;
    intro: string;
    destinationLabel: string;
    luggageLabel: string;
    carLabel: string;
    yes: string;
    no: string;
    resultTitle: string;
    destinations: Record<string, string>;
    recommendations: Record<string, string>;
  };
  sections: Array<{ id: string; title: string; paragraphs: string[]; bullets?: string[]; tip?: string; links?: string[] }>;
  stationTitle: string;
  stationCards: Array<{ title: string; text: string }>;
  trainRoutesTitle: string;
  routeCards: Array<{ title: string; mode: string; text: string }>;
  quickRoutesTitle: string;
  quickRoutes: Array<{ title: string; recommended: string; alternative: string }>;
  mapTitle: string;
  mapAria: string;
  mapLabels: Record<string, string>;
  mapApartment: string;
  mapApartmentPopup: string;
  officialTitle: string;
  officialNote: string;
  officialLinks: Array<{ title: string; href: string; mode: TransportAnalyticsMode; destination: TransportLinkDestination }>;
  changingNote: string;
  tipsTitle: string;
  tips: string[];
  faqTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  relatedTitle: string;
  related: Array<{ key: GuideCategoryKey; title: string; text: string }>;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  schemaAbout: string[];
};

const commonMapLabels = {
  "apartment-zone": "Zona aproximada del apartamento",
  "fuengirola-train": "Estacion de tren de Fuengirola",
  "bus-station": "Estacion de autobuses",
  "taxi-zone": "Zona de taxi",
  miramar: "Centro Comercial Miramar",
  sohail: "Castillo Sohail",
  "historic-centre": "Centro historico",
  bioparc: "Bioparc Fuengirola",
  airport: "Aeropuerto de Malaga",
  malaga: "Malaga"
};

export const transportGuideContent: Record<Locale, TransportGuideContent> = {
  es: {
    metaTitle: "Transporte en Fuengirola: tren, autobus y taxi | Stay Fuengirola",
    metaDescription: "Guia para moverse por Fuengirola: Cercanias al aeropuerto y Malaga, autobuses urbanos e interurbanos, taxi, coche, aparcamiento y consejos.",
    breadcrumbGuide: "Guia de Fuengirola",
    breadcrumbArticle: "Transporte",
    kicker: "Guia de Fuengirola · Transporte",
    h1: "Como moverse por Fuengirola",
    intro: "Fuengirola es una ciudad facil de recorrer a pie y esta bien conectada con el aeropuerto, Benalmadena, Torremolinos y Malaga mediante el tren de Cercanias. En esta guia encontraras las mejores opciones para cada desplazamiento: tren, autobus, taxi, coche y rutas a pie.",
    heroImageAlt: "Ilustracion mediterranea de transporte publico y paseo urbano en Fuengirola",
    backLabel: "Volver a la guia",
    quickTitle: "Que transporte elegir",
    quickItems: [
      { title: "Cerca del apartamento", recommendation: "A pie", href: "#walking" },
      { title: "Aeropuerto", recommendation: "Cercanias C1", href: "#train" },
      { title: "Malaga", recommendation: "Cercanias C1", href: "#train-routes" },
      { title: "Benalmadena o Torremolinos", recommendation: "Cercanias C1", href: "#train-routes" },
      { title: "Dentro de Fuengirola", recommendation: "Autobus urbano o taxi", href: "#urban-bus" },
      { title: "Mijas Pueblo", recommendation: "Autobus interurbano, taxi o coche", href: "#mijas" },
      { title: "Marbella", recommendation: "Autobus interurbano o coche", href: "#marbella" },
      { title: "Excursiones del interior", recommendation: "Coche o excursion organizada", href: "#car" },
      { title: "Con mucho equipaje", recommendation: "Taxi", href: "#luggage" }
    ],
    comparisonTitle: "Comparativa rapida",
    comparisonHeaders: { mode: "Medio", bestFor: "Mejor para", advantages: "Ventajas", note: "A tener en cuenta" },
    comparisonRows: [
      { mode: "A pie", bestFor: "Playas y lugares cercanos", advantages: "Gratis y sencillo", note: "Calor en verano" },
      { mode: "Cercanias", bestFor: "Aeropuerto y Malaga", advantages: "Directo y practico", note: "Consultar horarios" },
      { mode: "Autobus urbano", bestFor: "Moverse por Fuengirola", advantages: "Cobertura local", note: "Revisar linea y parada" },
      { mode: "Autobus interurbano", bestFor: "Mijas, Marbella y costa", advantages: "No requiere coche", note: "Horarios variables" },
      { mode: "Taxi", bestFor: "Equipaje y trayectos directos", advantages: "Puerta a puerta", note: "Precio segun recorrido" },
      { mode: "Coche", bestFor: "Excursiones y libertad", advantages: "Flexibilidad", note: "Trafico y aparcamiento" },
      { mode: "Bicicleta", bestFor: "Paseo maritimo y trayectos cortos", advantages: "Agradable y sostenible", note: "Respetar normas y zonas peatonales" }
    ],
    planner: {
      title: "Elige tu trayecto",
      intro: "Un planificador sencillo, sin guardar datos, para decidir rapido antes de salir.",
      destinationLabel: "A donde vas",
      luggageLabel: "Llevas equipaje",
      carLabel: "Tienes coche",
      yes: "Si",
      no: "No",
      resultTitle: "Recomendacion Stay Fuengirola",
      destinations: { airport: "Aeropuerto", malaga: "Malaga", benalmadena: "Benalmadena", mijas: "Mijas", marbella: "Marbella", local: "Dentro de Fuengirola" },
      recommendations: {
        airport: "Cercanias C1 si el equipaje es manejable; taxi si llegas tarde o con varias maletas.",
        malaga: "Cercanias C1 hasta Malaga Centro-Alameda o Maria Zambrano segun tu destino final.",
        benalmadena: "Cercanias C1 para Arroyo de la Miel; adapta el tramo final segun la visita.",
        mijas: "Autobus interurbano o taxi si no tienes coche; coche si quieres combinar varios planes.",
        marbella: "Autobus interurbano o coche. Comprueba siempre el regreso antes de salir.",
        local: "A pie para trayectos cortos; autobus urbano o taxi si hace calor, llueve o vas con equipaje."
      }
    },
    sections: [
      { id: "walking", title: "Fuengirola a pie", paragraphs: ["Desde la zona aproximada del Apartamento Veramar muchos planes cotidianos pueden hacerse caminando: playa, paseo maritimo, Centro Comercial Miramar, Parque Comercial Miramar, Castillo Sohail, restaurantes cercanos, Maskom, centro historico y Bioparc.", "La recomendacion de Stay Fuengirola es caminar para trayectos cortos y usar transporte publico o taxi cuando haga calor, viajes con ninos o lleves compras pesadas."], bullets: ["Compras cercanas", "Playa y paseo", "Restaurantes", "Castillo Sohail", "Desplazamientos cortos"], tip: "En verano, evita las horas de mas calor para trayectos largos y lleva agua. El paseo maritimo resulta especialmente agradable por la manana y al atardecer." },
      { id: "train", title: "Cercanias C1: la conexion mas util", paragraphs: ["Renfe identifica la C1 como la linea Fuengirola-Malaga Centro-Alameda. Conecta Fuengirola con Los Boliches, Torreblanca, Carvajal, Benalmadena-Arroyo de la Miel, Torremolinos, Plaza Mayor, Aeropuerto, Malaga Maria Zambrano y Malaga Centro-Alameda, entre otras paradas de la linea.", "Es la opcion mas clara para aeropuerto, Malaga, Benalmadena y Torremolinos cuando quieres evitar conducir. No publicamos frecuencias ni ultimo tren: conviene consultarlos el mismo dia."], links: ["Consultar horarios de Renfe", "Ver mapa de la linea C1", "Consultar avisos e incidencias"] },
      { id: "train-ticket", title: "Como utilizar el Cercanias", paragraphs: ["Ve a la estacion, confirma el destino, compra el billete en maquinas o utiliza los medios admitidos, conserva el titulo de transporte hasta salir y revisa anden y avisos.", "Renfe permite pagar viajes sencillos directamente en tornos mediante tarjeta bancaria o movil compatible con el sistema Cronos, ademas de las opciones habituales. Los billetes, descuentos y metodos de pago pueden cambiar: consulta siempre la informacion oficial de Renfe."] },
      { id: "urban-bus", title: "Autobus urbano", paragraphs: ["La red municipal informa de cinco lineas urbanas que cubren la ciudad y permite consultar recorridos, horarios, paradas, incidencias e informacion en tiempo real en la web y aplicacion del servicio.", "No afirmamos que el autobus sea gratuito para turistas. Las bonificaciones pueden depender de empadronamiento, tarjeta ciudadana u otras condiciones."], tip: "Consulta las condiciones vigentes antes de viajar, ya que tarifas y bonificaciones pueden depender del tipo de usuario." },
      { id: "intercity-bus", title: "Autobuses para salir de Fuengirola", paragraphs: ["Los autobuses interurbanos son utiles para destinos sin conexion directa de Cercanias, como Mijas Pueblo, Las Lagunas, Marbella, Estepona y otras localidades de la Costa del Sol.", "Usa el Consorcio de Transporte Metropolitano y operadores oficiales para verificar paradas, horarios y regreso. No incluimos numeros de linea como informacion permanente salvo que esten enlazados a fuente oficial actual."] },
      { id: "mijas", title: "Como ir de Fuengirola a Mijas Pueblo", paragraphs: ["Para Mijas Pueblo puedes valorar autobus interurbano, taxi, coche o excursion organizada. Es una consulta frecuente porque no hay Cercanias directo hasta el pueblo.", "La opcion mas razonable depende del horario de ida y vuelta, del calor, de si viajas con ninos y de si quieres combinar la visita con otros puntos."], links: ["Consultar ruta oficial"] },
      { id: "marbella", title: "Como ir a Marbella o Estepona", paragraphs: ["Con la red actual no existe conexion directa de Cercanias desde Fuengirola a Marbella o Estepona. El autobus interurbano o el coche suelen ser las opciones mas practicas.", "Los tiempos dependen mucho del trafico. Comprueba paradas y horarios de regreso antes de salir, especialmente por la tarde o en temporada alta."] },
      { id: "taxi", title: "Taxi en Fuengirola", paragraphs: ["El taxi resulta especialmente util con mucho equipaje, familias pequenas, horario nocturno, trayectos puerta a puerta, movilidad reducida o conexiones con zonas sin tren.", "Radio Taxi Fuengirola aparece enlazado desde el Ayuntamiento y desde Turismo Fuengirola. No publicamos tarifas fijas: el importe depende del trayecto, horario, suplementos y condiciones vigentes."], links: ["Solicitar taxi", "Consultar Radio Taxi Fuengirola"] },
      { id: "vtc", title: "Aplicaciones de transporte con conductor", paragraphs: ["La disponibilidad de servicios mediante aplicacion puede variar segun la hora, la temporada y la demanda. Comprueba la aplicacion antes de depender de ella para una conexion importante.", "No presentamos Uber, Bolt o Cabify como garantizados ni hacemos comparativas de precio. Para viajes sensibles, guarda una alternativa de taxi o transporte publico."] },
      { id: "car", title: "Hace falta alquilar coche", paragraphs: ["No es necesario para disfrutar de Fuengirola, playas, Miramar, Malaga, aeropuerto, Benalmadena o Torremolinos. Puede resultar util para Ronda, Nerja, Frigiliana, Granada, Caminito del Rey o pueblos del interior.", "La A-7 es el eje principal de la Costa del Sol y la AP-7 puede aparecer en algunos desplazamientos. Revisa peajes, trafico y ruta antes de salir y no dependas ciegamente de tiempos estimados."] },
      { id: "parking", title: "Aparcar en Fuengirola", paragraphs: ["En Fuengirola encontraras estacionamiento en calle, zonas reguladas cuando proceda, parkings publicos y aparcamientos asociados a puntos como Miramar o el entorno del Castillo.", "En verano, conciertos y ferias puede ser mas dificil aparcar. No publicamos tarifas ni horarios: consulta siempre la informacion oficial o del parking antes de entrar."], links: ["Consultar aparcamientos"] },
      { id: "bike", title: "Bicicleta y movilidad personal", paragraphs: ["El paseo maritimo puede resultar agradable para trayectos cortos en bicicleta, siempre respetando senalizacion, peatones y normativa local.", "No asumimos que todo el paseo admita cualquier vehiculo. Comprueba donde pueden circular bicicletas y patinetes y asegura correctamente la bicicleta."] },
      { id: "accessibility", title: "Transporte y accesibilidad", paragraphs: ["Las necesidades pueden variar segun estacion, parada y vehiculo. Renfe publica informacion de accesibilidad y el transporte urbano se presenta como servicio accesible.", "Para un viaje importante, confirma condiciones y asistencia con el operador antes de salir. No garantizamos accesibilidad total en todos los trayectos."] },
      { id: "children", title: "Transporte con ninos", paragraphs: ["Deja margen en conexiones, evita trayectos largos andando al mediodia, revisa condiciones de billetes infantiles y confirma sillas infantiles si vas a pedir taxi.", "Un carrito plegable puede ser practico, pero conviene comprobar normas de cada operador para menores, carritos y equipaje."] },
      { id: "luggage", title: "La mejor opcion con maletas", paragraphs: ["Cercanias es adecuado para aeropuerto y Malaga si el equipaje es manejable. Taxi es mas comodo con varias maletas, ninos o llegada tardia.", "El autobus puede servir segun destino, pero requiere revisar parada, espacio y tramo a pie. No asumimos espacio garantizado."] },
      { id: "pets", title: "Transporte con mascotas", paragraphs: ["Consulta las normas actuales de Renfe, autobus urbano, autobuses interurbanos y taxi antes de viajar con mascota.", "El servicio urbano contempla transporte de mascotas bajo determinadas condiciones, pero los requisitos pueden cambiar y deben consultarse en la fuente oficial."] },
      { id: "night", title: "Como volver por la noche", paragraphs: ["Consulta siempre el ultimo tren y los ultimos autobuses. No asumas servicio nocturno continuo y guarda una alternativa de taxi.", "Despues de conciertos en Marenostrum, ferias o eventos, sal con margen y revisa avisos oficiales del mismo dia."] },
      { id: "events", title: "Conciertos, ferias y dias de mucha afluencia", paragraphs: ["Puede haber trafico, refuerzos especiales, cortes de vias o cambios de servicio. Conviene usar transporte publico cuando encaje y revisar avisos oficiales.", "No presentamos planes especiales de anos anteriores como vigentes. Consulta Renfe, transporte urbano y Ayuntamiento antes de salir."] }
    ],
    stationTitle: "Estaciones utiles",
    stationCards: [
      { title: "Fuengirola", text: "Terminal de la C1 y opcion principal para moverse hacia Malaga." },
      { title: "Los Boliches", text: "Util para esa zona de la ciudad." },
      { title: "Aeropuerto", text: "Conexion directa mediante C1." },
      { title: "Malaga Maria Zambrano", text: "Conexiones con AVE, Media Distancia, metro, autobuses y otros servicios ferroviarios." },
      { title: "Malaga Centro-Alameda", text: "Practica para acceder andando al centro historico de Malaga." }
    ],
    trainRoutesTitle: "Rutas en tren mas utiles",
    routeCards: [
      { title: "Fuengirola → Aeropuerto", mode: "C1 directa", text: "Comoda con equipaje razonable; consulta horarios e incidencias." },
      { title: "Fuengirola → Malaga centro", mode: "C1 a Centro-Alameda", text: "Ideal para una excursion de dia; revisa el regreso." },
      { title: "Fuengirola → Malaga Maria Zambrano", mode: "C1", text: "Util para AVE y otros trenes; deja margen entre conexiones." },
      { title: "Fuengirola → Benalmadena", mode: "C1", text: "Arroyo de la Miel sirve para determinadas visitas; Puerto Marina requiere tramo adicional." },
      { title: "Fuengirola → Torremolinos", mode: "C1", text: "Elige estacion segun el lugar que quieras visitar." },
      { title: "Fuengirola → Plaza Mayor", mode: "C1", text: "Util para ocio, restauracion y compras." }
    ],
    quickRoutesTitle: "Rutas rapidas desde el apartamento",
    quickRoutes: [
      { title: "Al aeropuerto", recommended: "Cercanias C1", alternative: "Taxi o coche si viajas con muchas maletas." },
      { title: "Al centro de Fuengirola", recommended: "A pie", alternative: "Taxi o bus segun calor, equipaje o movilidad." },
      { title: "A Malaga", recommended: "Cercanias C1", alternative: "Coche solo si tu plan lo necesita." },
      { title: "A Mijas Pueblo", recommended: "Bus interurbano", alternative: "Taxi, coche o excursion." },
      { title: "A Marbella", recommended: "Bus interurbano o coche", alternative: "Taxi para trayectos puerta a puerta." },
      { title: "A Benalmadena", recommended: "Cercanias hasta Arroyo de la Miel", alternative: "Adapta el tramo final." },
      { title: "Al Castillo Sohail", recommended: "A pie cuando resulte razonable", alternative: "Taxi si hace calor." },
      { title: "A Miramar", recommended: "A pie", alternative: "Coche si vas a cargar compras grandes." }
    ],
    mapTitle: "Mapa de movilidad",
    mapAria: "Mapa de movilidad de Fuengirola con zona aproximada del apartamento y puntos de transporte",
    mapLabels: commonMapLabels,
    mapApartment: "Zona aproximada del apartamento",
    mapApartmentPopup: "La ubicacion exacta se facilita tras confirmar la reserva.",
    officialTitle: "Aplicaciones y enlaces utiles",
    officialNote: "Las aplicaciones y paginas oficiales son la mejor referencia para consultar horarios e incidencias el mismo dia.",
    officialLinks: [
      { title: "Renfe Cercanias Malaga", href: "https://www.renfe.com/es/es/cercanias/cercanias-malaga/lineas", mode: "train", destination: "timetable" },
      { title: "Billetes y medios de pago Renfe", href: "https://www.renfe.com/es/es/cercanias/cercanias-malaga/tarifas/billetes", mode: "train", destination: "tickets" },
      { title: "Transporte Urbano Fuengirola", href: "https://www.transportefuengirola.com/", mode: "urban_bus", destination: "official_site" },
      { title: "Lineas urbanas", href: "https://www.transportefuengirola.com/lineas-menu", mode: "urban_bus", destination: "map" },
      { title: "Consorcio de Transporte Malaga", href: "https://ctmam.ctan.es/", mode: "intercity_bus", destination: "official_site" },
      { title: "Radio Taxi Fuengirola", href: "https://pidetaxi.es/", mode: "taxi", destination: "official_site" },
      { title: "Mapa turistico municipal", href: "https://mapas.fuengirola.es/es/inicio", mode: "parking", destination: "map" }
    ],
    changingNote: "Los horarios, tarifas, recorridos y condiciones pueden cambiar. Consulta siempre la informacion oficial antes de iniciar el trayecto.",
    tipsTitle: "Consejos Stay Fuengirola",
    tips: ["Utiliza el Cercanias para aeropuerto y Malaga.", "Comprueba el ultimo tren antes de una salida nocturna.", "Para Mijas o Marbella, revisa el autobus de vuelta antes de salir.", "Con varias maletas, el taxi puede compensar.", "En verano, evita trayectos largos andando al mediodia.", "No necesitas coche para disfrutar de Fuengirola.", "Para excursiones del interior, valora alquilar coche.", "Consulta avisos e incidencias el mismo dia del viaje."],
    faqTitle: "Preguntas frecuentes",
    faqs: [
      { question: "Cual es la mejor forma de moverse por Fuengirola?", answer: "Para trayectos cercanos, a pie. Para zonas mas alejadas, autobus urbano o taxi segun horario, calor y equipaje." },
      { question: "Hace falta alquilar coche en Fuengirola?", answer: "No para disfrutar de Fuengirola, Malaga, aeropuerto, Benalmadena o Torremolinos. Puede compensar para excursiones del interior." },
      { question: "Hay tren directo desde Fuengirola al aeropuerto?", answer: "Si, la linea C1 conecta Fuengirola con el Aeropuerto de Malaga. Consulta siempre horarios oficiales." },
      { question: "Se puede ir en tren de Fuengirola a Malaga?", answer: "Si, la C1 llega a Malaga Maria Zambrano y Malaga Centro-Alameda." },
      { question: "Como ir de Fuengirola a Benalmadena?", answer: "La C1 es la opcion principal para Arroyo de la Miel; el tramo final depende del lugar exacto." },
      { question: "Como ir de Fuengirola a Mijas Pueblo?", answer: "Autobus interurbano, taxi, coche o excursion organizada. Comprueba la ruta oficial antes de salir." },
      { question: "Como ir de Fuengirola a Marbella?", answer: "Autobus interurbano o coche suelen ser las opciones practicas con la red actual." },
      { question: "Donde se compran los billetes de Cercanias?", answer: "En maquinas o medios admitidos por Renfe. Algunas estaciones permiten pago directo con tarjeta o movil compatible mediante Cronos." },
      { question: "Hay autobuses urbanos en Fuengirola?", answer: "Si, el servicio municipal informa de cinco lineas urbanas." },
      { question: "Es facil conseguir taxi?", answer: "Suele ser una opcion practica, pero en eventos o horas punta conviene pedirlo con margen." },
      { question: "Cual es la mejor opcion con maletas?", answer: "Taxi si llevas varias maletas o llegas tarde; Cercanias si el equipaje es manejable." },
      { question: "Como volver al apartamento despues de un concierto?", answer: "Comprueba ultimo tren y bus, revisa avisos y guarda taxi como alternativa." },
      { question: "Se puede viajar con mascotas?", answer: "Depende del operador y condiciones vigentes. Consulta siempre la norma oficial antes de viajar." }
    ],
    relatedTitle: "Tambien te puede interesar",
    related: [
      { key: "airport", title: "Como llegar desde el aeropuerto", text: "Tren, taxi y opciones de llegada." },
      { key: "excursions", title: "Excursiones desde Fuengirola", text: "Ideas para descubrir la Costa del Sol." },
      { key: "supermarkets", title: "Supermercados", text: "Compra practica durante la estancia." },
      { key: "shopping", title: "Compras", text: "Miramar, centro y tiendas utiles." },
      { key: "beaches", title: "Playas", text: "Playas cerca del apartamento." },
      { key: "thingsToDo", title: "Que hacer", text: "Planes, eventos y visitas." },
      { key: "restaurants", title: "Restaurantes", text: "Donde comer cerca." }
    ],
    ctaTitle: "Una base comoda para descubrir la Costa del Sol",
    ctaText: "Desde el Apartamento Veramar puedes moverte a pie por buena parte de Fuengirola y utilizar el tren, el autobus o el coche para descubrir el resto de la Costa del Sol.",
    ctaButton: "Ver disponibilidad en Booking",
    schemaAbout: ["transporte en Fuengirola", "Cercanias Malaga", "autobuses Fuengirola", "taxi Fuengirola", "Fuengirola sin coche"]
  },
  en: {
    metaTitle: "Getting around Fuengirola: train, bus and taxi | Stay Fuengirola",
    metaDescription: "Guide to getting around Fuengirola: Cercanias train to Malaga Airport and Malaga, local and intercity buses, taxi, car, parking and practical tips.",
    breadcrumbGuide: "Fuengirola guide",
    breadcrumbArticle: "Transport",
    kicker: "Fuengirola guide · Transport",
    h1: "Getting around Fuengirola",
    intro: "Fuengirola is easy to explore on foot and well connected to the airport, Benalmadena, Torremolinos and Malaga by the Cercanias train. This guide helps you choose between walking, train, bus, taxi and car.",
    heroImageAlt: "Mediterranean illustration of local transport and an urban walk in Fuengirola",
    backLabel: "Back to the guide",
    quickTitle: "Which transport should you choose?",
    quickItems: [
      { title: "Near the apartment", recommendation: "Walk", href: "#walking" },
      { title: "Airport", recommendation: "Cercanias C1", href: "#train" },
      { title: "Malaga", recommendation: "Cercanias C1", href: "#train-routes" },
      { title: "Benalmadena or Torremolinos", recommendation: "Cercanias C1", href: "#train-routes" },
      { title: "Inside Fuengirola", recommendation: "Local bus or taxi", href: "#urban-bus" },
      { title: "Mijas Pueblo", recommendation: "Intercity bus, taxi or car", href: "#mijas" },
      { title: "Marbella", recommendation: "Intercity bus or car", href: "#marbella" },
      { title: "Inland day trips", recommendation: "Car or organised tour", href: "#car" },
      { title: "Lots of luggage", recommendation: "Taxi", href: "#luggage" }
    ],
    comparisonTitle: "Quick comparison",
    comparisonHeaders: { mode: "Mode", bestFor: "Best for", advantages: "Advantages", note: "Keep in mind" },
    comparisonRows: [
      { mode: "Walking", bestFor: "Beaches and nearby places", advantages: "Free and simple", note: "Summer heat" },
      { mode: "Cercanias", bestFor: "Airport and Malaga", advantages: "Direct and practical", note: "Check timetables" },
      { mode: "Local bus", bestFor: "Getting around Fuengirola", advantages: "Local coverage", note: "Check line and stop" },
      { mode: "Intercity bus", bestFor: "Mijas, Marbella and coast", advantages: "No car needed", note: "Variable schedules" },
      { mode: "Taxi", bestFor: "Luggage and direct trips", advantages: "Door to door", note: "Fare depends on trip" },
      { mode: "Car", bestFor: "Excursions and freedom", advantages: "Flexibility", note: "Traffic and parking" },
      { mode: "Bike", bestFor: "Promenade and short trips", advantages: "Pleasant and sustainable", note: "Respect signs and pedestrians" }
    ],
    planner: {
      title: "Choose your route",
      intro: "A simple local planner. It does not store answers.",
      destinationLabel: "Where are you going?",
      luggageLabel: "Do you have luggage?",
      carLabel: "Do you have a car?",
      yes: "Yes",
      no: "No",
      resultTitle: "Stay Fuengirola recommendation",
      destinations: { airport: "Airport", malaga: "Malaga", benalmadena: "Benalmadena", mijas: "Mijas", marbella: "Marbella", local: "Inside Fuengirola" },
      recommendations: {
        airport: "Cercanias C1 if luggage is manageable; taxi if you arrive late or with several bags.",
        malaga: "Cercanias C1 to Malaga Centro-Alameda or Maria Zambrano depending on your final destination.",
        benalmadena: "Cercanias C1 to Arroyo de la Miel; adapt the last part to your visit.",
        mijas: "Intercity bus or taxi without a car; car if you want to combine several stops.",
        marbella: "Intercity bus or car. Always check the return journey before leaving.",
        local: "Walk for short trips; local bus or taxi if it is hot, raining or you have luggage."
      }
    },
    sections: [],
    stationTitle: "Useful stations",
    stationCards: [
      { title: "Fuengirola", text: "C1 terminus and main option towards Malaga." },
      { title: "Los Boliches", text: "Useful for that area of Fuengirola." },
      { title: "Airport", text: "Direct connection on the C1." },
      { title: "Malaga Maria Zambrano", text: "Connections with AVE, medium-distance trains, metro, buses and other rail services." },
      { title: "Malaga Centro-Alameda", text: "Useful for walking into Malaga historic centre." }
    ],
    trainRoutesTitle: "Most useful train routes",
    routeCards: [
      { title: "Fuengirola → Airport", mode: "Direct C1", text: "Comfortable with reasonable luggage; check timetables and alerts." },
      { title: "Fuengirola → Malaga centre", mode: "C1 to Centro-Alameda", text: "Ideal for a day trip; check the return service." },
      { title: "Fuengirola → Malaga Maria Zambrano", mode: "C1", text: "Useful for AVE and other trains; leave time between connections." },
      { title: "Fuengirola → Benalmadena", mode: "C1", text: "Arroyo de la Miel is useful for some visits; Puerto Marina needs an extra leg." },
      { title: "Fuengirola → Torremolinos", mode: "C1", text: "Choose the station according to where you want to go." },
      { title: "Fuengirola → Plaza Mayor", mode: "C1", text: "Useful for leisure, restaurants and shopping." }
    ],
    quickRoutesTitle: "Quick routes from the apartment",
    quickRoutes: [],
    mapTitle: "Mobility map",
    mapAria: "Mobility map of Fuengirola with the approximate apartment area and transport points",
    mapLabels: { ...commonMapLabels, "apartment-zone": "Approximate apartment area", "fuengirola-train": "Fuengirola train station", "bus-station": "Bus station", "taxi-zone": "Taxi area", "historic-centre": "Historic centre", airport: "Malaga Airport" },
    mapApartment: "Approximate apartment area",
    mapApartmentPopup: "The exact location is shared after booking confirmation.",
    officialTitle: "Useful apps and official links",
    officialNote: "Official apps and pages are the best reference for same-day timetables and service alerts.",
    officialLinks: [],
    changingNote: "Timetables, fares, routes and conditions may change. Always check official information before starting your journey.",
    tipsTitle: "Stay Fuengirola tips",
    tips: ["Use Cercanias for the airport and Malaga.", "Check the last train before a night out.", "For Mijas or Marbella, check the return bus before leaving.", "With several suitcases, a taxi can be worth it.", "In summer, avoid long walks at midday.", "You do not need a car to enjoy Fuengirola.", "For inland excursions, consider renting a car.", "Check alerts on the day of travel."],
    faqTitle: "Frequently asked questions",
    faqs: [],
    relatedTitle: "You may also like",
    related: [
      { key: "airport", title: "How to arrive from the airport", text: "Train, taxi and arrival options." },
      { key: "excursions", title: "Day trips from Fuengirola", text: "Ideas for exploring the Costa del Sol." },
      { key: "supermarkets", title: "Supermarkets", text: "Practical shopping during your stay." },
      { key: "shopping", title: "Shopping", text: "Miramar, town centre and useful stores." },
      { key: "beaches", title: "Beaches", text: "Beaches near the apartment." },
      { key: "thingsToDo", title: "Things to do", text: "Plans, events and visits." },
      { key: "restaurants", title: "Restaurants", text: "Where to eat nearby." }
    ],
    ctaTitle: "A comfortable base to discover the Costa del Sol",
    ctaText: "From Apartamento Veramar you can walk around much of Fuengirola and use train, bus or car to discover the rest of the Costa del Sol.",
    ctaButton: "Check availability on Booking",
    schemaAbout: ["getting around Fuengirola", "public transport Fuengirola", "Fuengirola train to Malaga", "Fuengirola airport train", "Fuengirola without a car"]
  },
  fi: {} as TransportGuideContent,
  sv: {} as TransportGuideContent,
  no: {} as TransportGuideContent
};

transportGuideContent.en.sections = [
  { id: "walking", title: "Fuengirola on foot", paragraphs: ["From the approximate area of Apartamento Veramar many everyday plans can be done on foot: beach, promenade, Miramar Shopping Centre, Parque Comercial Miramar, Sohail Castle, nearby restaurants, Maskom, the historic centre and Bioparc.", "Stay Fuengirola recommends walking for short trips and using public transport or taxi when it is hot, when travelling with children or carrying heavy shopping."], bullets: ["Nearby shopping", "Beach and promenade", "Restaurants", "Sohail Castle", "Short trips"], tip: "In summer, avoid the hottest hours for longer walks and carry water. The promenade is especially pleasant in the morning and at sunset." },
  { id: "train", title: "Cercanias C1: the most useful connection", paragraphs: ["Renfe identifies the C1 as the Fuengirola-Malaga Centro-Alameda line. It links Fuengirola with Los Boliches, Torreblanca, Carvajal, Benalmadena-Arroyo de la Miel, Torremolinos, Plaza Mayor, Airport, Malaga Maria Zambrano and Malaga Centro-Alameda, among other stops.", "It is the clearest option for the airport, Malaga, Benalmadena and Torremolinos when you prefer not to drive. We do not publish frequencies or last-train times: check them on the day."], links: ["Check Renfe timetables", "See C1 line map", "Check service alerts"] },
  { id: "train-ticket", title: "How to use Cercanias", paragraphs: ["Go to the station, confirm the destination, buy the ticket at machines or use accepted payment methods, keep the ticket until you exit and check platform and alerts.", "Renfe allows simple journeys to be paid directly at gates with a compatible bank card or mobile through Cronos, alongside the usual options. Tickets, discounts and payment methods can change: always check Renfe official information."] },
  { id: "urban-bus", title: "Local bus", paragraphs: ["The municipal network reports five urban lines covering the city and lets you check routes, timetables, stops, incidents and real-time information through the service website and app.", "We do not state that the bus is free for tourists. Discounts may depend on registration, citizen card or other conditions."], tip: "Check current conditions before travelling, because fares and discounts may depend on user type." },
  { id: "intercity-bus", title: "Buses outside Fuengirola", paragraphs: ["Intercity buses are useful for destinations without direct Cercanias connection, such as Mijas Pueblo, Las Lagunas, Marbella, Estepona and other Costa del Sol towns.", "Use the Malaga Transport Consortium and official operators to verify stops, times and return services. We do not include line numbers as permanent information unless they are linked to current official sources."] },
  { id: "mijas", title: "How to get from Fuengirola to Mijas Pueblo", paragraphs: ["For Mijas Pueblo, consider intercity bus, taxi, car or an organised tour. It is a frequent question because there is no direct Cercanias train to the village.", "The best option depends on outbound and return times, heat, children and whether you want to combine several stops."], links: ["Check official route"] },
  { id: "marbella", title: "How to get to Marbella or Estepona", paragraphs: ["With the current network there is no direct Cercanias connection from Fuengirola to Marbella or Estepona. Intercity bus or car are usually the practical options.", "Travel times depend heavily on traffic. Check stops and return times before leaving, especially in the afternoon or high season."] },
  { id: "taxi", title: "Taxi in Fuengirola", paragraphs: ["Taxi is especially useful with a lot of luggage, small children, night hours, door-to-door journeys, reduced mobility or links to areas without train.", "Radio Taxi Fuengirola is linked by the Town Hall and Fuengirola Tourism. We do not publish fixed fares: the cost depends on route, time, supplements and current conditions."], links: ["Request taxi", "Check Radio Taxi Fuengirola"] },
  { id: "vtc", title: "Ride-hailing apps", paragraphs: ["Availability through apps can vary by time, season and demand. Check the app before relying on it for an important connection.", "We do not present Uber, Bolt or Cabify as guaranteed, and we do not compare prices. For sensitive trips, keep taxi or public transport as a backup."] },
  { id: "car", title: "Do you need a rental car?", paragraphs: ["You do not need one for Fuengirola, beaches, Miramar, Malaga, the airport, Benalmadena or Torremolinos. It may help for Ronda, Nerja, Frigiliana, Granada, Caminito del Rey or inland villages.", "The A-7 is the main Costa del Sol road and the AP-7 may appear on some routes. Check tolls, traffic and route before leaving."] },
  { id: "parking", title: "Parking in Fuengirola", paragraphs: ["Fuengirola has street parking, regulated areas where applicable, public car parks and parking linked to places such as Miramar or the Castle area.", "In summer, concerts and fairs parking can be harder. We do not publish fares or hours: check official or car park information before entering."], links: ["Check parking"] },
  { id: "bike", title: "Bike and personal mobility", paragraphs: ["The promenade can be pleasant for short bicycle trips, always respecting signs, pedestrians and local rules.", "Do not assume every area allows every vehicle. Check where bikes and scooters may circulate and lock bikes properly."] },
  { id: "accessibility", title: "Transport and accessibility", paragraphs: ["Needs vary by station, stop and vehicle. Renfe publishes accessibility information and the urban transport service presents itself as accessible.", "For an important trip, confirm assistance and conditions with the operator before leaving. We do not guarantee full accessibility on every route."] },
  { id: "children", title: "Transport with children", paragraphs: ["Leave margin for connections, avoid long midday walks, check child ticket conditions and confirm child seats if ordering a taxi.", "A folding stroller can help, but check each operator rules for children, strollers and luggage."] },
  { id: "luggage", title: "Best option with suitcases", paragraphs: ["Cercanias works for the airport and Malaga if luggage is manageable. Taxi is more comfortable with several suitcases, children or late arrival.", "Bus can work depending on destination, but you need to check stop, space and walking section. Space should not be assumed as guaranteed."] },
  { id: "pets", title: "Transport with pets", paragraphs: ["Check current rules for Renfe, urban bus, intercity bus and taxi before travelling with a pet.", "Urban transport includes pets under certain conditions, but requirements can change and must be checked with the official source."] },
  { id: "night", title: "Getting back at night", paragraphs: ["Always check the last train and last buses. Do not assume continuous night service and keep taxi as a backup.", "After Marenostrum concerts, fairs or events, leave extra time and check same-day official notices."] },
  { id: "events", title: "Concerts, fairs and busy days", paragraphs: ["There may be traffic, special reinforcements, road closures or service changes. Use public transport when it fits and check official notices.", "We do not present special plans from previous years as current. Check Renfe, local buses and the Town Hall before leaving."] }
];
transportGuideContent.en.quickRoutes = transportGuideContent.es.quickRoutes.map((item, index) => [
  { title: "To the airport", recommended: "Cercanias C1", alternative: "Taxi or car if you have many suitcases." },
  { title: "To Fuengirola centre", recommended: "Walk", alternative: "Taxi or bus depending on heat, luggage or mobility." },
  { title: "To Malaga", recommended: "Cercanias C1", alternative: "Car only if your plan needs it." },
  { title: "To Mijas Pueblo", recommended: "Intercity bus", alternative: "Taxi, car or tour." },
  { title: "To Marbella", recommended: "Intercity bus or car", alternative: "Taxi for door-to-door trips." },
  { title: "To Benalmadena", recommended: "Cercanias to Arroyo de la Miel", alternative: "Adapt the final leg." },
  { title: "To Sohail Castle", recommended: "Walk when reasonable", alternative: "Taxi if it is hot." },
  { title: "To Miramar", recommended: "Walk", alternative: "Car if carrying large shopping." }
][index]);
transportGuideContent.en.officialLinks = transportGuideContent.es.officialLinks;
transportGuideContent.en.faqs = [
  { question: "What is the best way to get around Fuengirola?", answer: "Walk for nearby trips. For further areas, use local bus or taxi depending on time, heat and luggage." },
  { question: "Do you need to rent a car in Fuengirola?", answer: "Not for Fuengirola, Malaga, the airport, Benalmadena or Torremolinos. It can help for inland excursions." },
  { question: "Is there a direct train from Fuengirola to the airport?", answer: "Yes, the C1 connects Fuengirola with Malaga Airport. Always check official timetables." },
  { question: "Can you go by train from Fuengirola to Malaga?", answer: "Yes, the C1 reaches Malaga Maria Zambrano and Malaga Centro-Alameda." },
  { question: "How do you get from Fuengirola to Benalmadena?", answer: "The C1 is the main option for Arroyo de la Miel; the final leg depends on the exact destination." },
  { question: "How do you get from Fuengirola to Mijas Pueblo?", answer: "Intercity bus, taxi, car or organised tour. Check the official route before leaving." },
  { question: "How do you get from Fuengirola to Marbella?", answer: "Intercity bus or car are usually practical with the current network." },
  { question: "Where do you buy Cercanias tickets?", answer: "At machines or through methods accepted by Renfe. Some stations allow direct card or mobile payment through Cronos." },
  { question: "Are there local buses in Fuengirola?", answer: "Yes, the municipal service reports five urban lines." },
  { question: "Is it easy to get a taxi?", answer: "It is usually practical, but during events or peak times it is better to request it early." },
  { question: "What is best with suitcases?", answer: "Taxi with several suitcases or late arrivals; Cercanias if luggage is manageable." },
  { question: "How do you get back after a concert?", answer: "Check last train and bus, review alerts and keep taxi as an alternative." },
  { question: "Can you travel with pets?", answer: "It depends on the operator and current conditions. Always check official rules before travelling." }
];

transportGuideContent.fi = {
  ...transportGuideContent.en,
  metaTitle: "Liikkuminen Fuengirolassa: juna, bussi ja taksi | Stay Fuengirola",
  metaDescription: "Opas Fuengirolassa liikkumiseen: Cercanias-juna lentoasemalle ja Malagaan, paikallis- ja seutubussit, taksi, auto, pysakointi ja vinkit.",
  breadcrumbGuide: "Fuengirola-opas",
  breadcrumbArticle: "Liikkuminen",
  kicker: "Fuengirola-opas · Liikkuminen",
  h1: "Miten liikkua Fuengirolassa",
  intro: "Fuengirola on helppo kaupunki kulkea jalan, ja Cercanias-juna yhdistaa sen lentoasemaan, Benalmadenaan, Torremolinokseen ja Malagaan. Tama opas auttaa valitsemaan junan, bussin, taksin, auton tai kavelyn tilanteen mukaan.",
  heroImageAlt: "Valimerellinen kuvitus Fuengirolan paikallisliikenteesta ja kaupunkikavelyista",
  backLabel: "Takaisin oppaaseen",
  quickTitle: "Mika kulkutapa valita",
  quickItems: [
    { title: "Asunnon lahella", recommendation: "Kavellen", href: "#walking" },
    { title: "Lentoasema", recommendation: "Cercanias C1", href: "#train" },
    { title: "Malaga", recommendation: "Cercanias C1", href: "#train-routes" },
    { title: "Benalmadena tai Torremolinos", recommendation: "Cercanias C1", href: "#train-routes" },
    { title: "Fuengirolan sisalla", recommendation: "Paikallisbussi tai taksi", href: "#urban-bus" },
    { title: "Mijas Pueblo", recommendation: "Seutubussi, taksi tai auto", href: "#mijas" },
    { title: "Marbella", recommendation: "Seutubussi tai auto", href: "#marbella" },
    { title: "Sisamaan retket", recommendation: "Auto tai jarjestetty retki", href: "#car" },
    { title: "Paljon matkatavaroita", recommendation: "Taksi", href: "#luggage" }
  ],
  sections: [
    { id: "walking", title: "Fuengirola jalan", paragraphs: ["Apartamento Veramarin likimaaraiselta alueelta monet arjen kohteet onnistuvat kavellen: ranta, rantakatu, Miramar-ostoskeskus, Parque Comercial Miramar, Sohailin linna, lahiravintolat, Maskom, vanha keskusta ja Bioparc.", "Stay Fuengirola suosittelee kavelya lyhyille matkoille ja julkista liikennetta tai taksia kuumalla, lasten kanssa tai painavien ostosten kanssa."], bullets: ["Lahiostokset", "Ranta ja rantakatu", "Ravintolat", "Sohailin linna", "Lyhyet matkat"], tip: "Kesalla valta pisia kavelyja paivan kuumimpaan aikaan ja ota vetta mukaan. Rantakatu on erityisen miellyttava aamulla ja auringonlaskun aikaan." },
    { id: "train", title: "Cercanias C1: kaytannollisin yhteys", paragraphs: ["Renfe maarittelee C1-linjan reitiksi Fuengirola-Malaga Centro-Alameda. Se yhdistaa Fuengirolan Los Bolichesiin, Torreblancaan, Carvajaliin, Benalmadena-Arroyo de la Mieliin, Torremolinokseen, Plaza Mayoriin, lentoasemaan, Malaga Maria Zambranoon ja Malaga Centro-Alamedaan.", "Se on selkein valinta lentoasemalle, Malagaan, Benalmadenaan ja Torremolinokseen ilman autoa. Emme julkaise pysyvia vuorovali- tai viimeisen junan tietoja: tarkista ne matkapaivana."], links: ["Tarkista Renfen aikataulut", "Nayta C1-linjan kartta", "Tarkista hairiotiedot"] },
    { id: "train-ticket", title: "Miten Cercanias-junaa kaytetaan", paragraphs: ["Mene asemalle, tarkista maaranpaa, osta lippu automaatista tai kayta hyvaksyttya maksutapaa, sailyta lippu poistumiseen asti ja tarkista laituri seka tiedotteet.", "Renfe sallii yksittaisten matkojen maksamisen porteilla yhteensopivalla pankkikortilla tai puhelimella Cronos-jarjestelman kautta tavallisten ostotapojen lisaksi. Liput, alennukset ja maksutavat voivat muuttua."] },
    { id: "urban-bus", title: "Paikallisbussi", paragraphs: ["Kaupungin palvelu ilmoittaa viidesta linjasta, jotka kattavat Fuengirolan. Verkkosivulla ja sovelluksessa voi tarkistaa reitit, aikataulut, pysakit, hairiot ja reaaliaikaiset tiedot.", "Emme vaita, etta bussi olisi turisteille ilmainen. Edut voivat riippua asukastiedoista, kaupunkikortista tai muista ehdoista."], tip: "Tarkista voimassa olevat ehdot ennen matkaa." },
    { id: "intercity-bus", title: "Bussit Fuengirolan ulkopuolelle", paragraphs: ["Seutubussit ovat hyodyllisia kohteisiin, joihin ei ole suoraa Cercanias-yhteytta, kuten Mijas Pueblo, Las Lagunas, Marbella, Estepona ja muut Costa del Solin kaupungit.", "Tarkista pysakit, aikataulut ja paluu aina Malagan liikennekonsortiosta tai viralliselta operaattorilta."] },
    { id: "mijas", title: "Fuengirolasta Mijas Puebloon", paragraphs: ["Mijas Puebloon voi menna seutubussilla, taksilla, autolla tai jarjestetylla retkella. Kysymys on yleinen, koska kylalle ei ole suoraa Cercanias-junaa.", "Paras vaihtoehto riippuu meno- ja paluuajoista, kuumuudesta, lapsista ja siita haluatko yhdistaa muita kohteita."], links: ["Tarkista virallinen reitti"] },
    { id: "marbella", title: "Marbellaan tai Esteponaan", paragraphs: ["Nykyisessa verkossa Fuengirolasta ei ole suoraa Cercanias-yhteytta Marbellaan tai Esteponaan. Seutubussi tai auto ovat yleensa kaytannollisimmat vaihtoehdot.", "Matka-ajat riippuvat paljon liikenteesta. Tarkista pysakit ja paluuaikataulut ennen lahtoa."] },
    { id: "taxi", title: "Taksi Fuengirolassa", paragraphs: ["Taksi on erityisen hyodyllinen, jos mukana on paljon matkatavaroita, pieniä lapsia, yöaika, ovelta ovelle -matka, liikuntarajoite tai yhteys alueelle ilman junaa.", "Radio Taxi Fuengirola on linkitetty kaupungin ja matkailusivuston kautta. Emme julkaise kiinteita hintoja: hinta riippuu matkasta, ajasta, lisista ja voimassa olevista ehdoista."], links: ["Tilaa taksi", "Katso Radio Taxi Fuengirola"] },
    { id: "vtc", title: "Kuljettajasovellukset", paragraphs: ["Sovelluspalveluiden saatavuus voi vaihdella kellonajan, kauden ja kysynnan mukaan. Tarkista sovellus ennen kuin luotat siihen tarkeassa yhteydessa.", "Emme esita Uberia, Boltia tai Cabifyta taattuina emmekä vertaile hintoja."] },
    { id: "car", title: "Tarvitsetko vuokra-autoa", paragraphs: ["Autoa ei tarvita Fuengirolaan, rannoille, Miramariin, Malagaan, lentoasemalle, Benalmadenaan tai Torremolinokseen. Se voi olla hyodyllinen Rondaan, Nerjaan, Frigilianaan, Granadaan, Caminito del Reylle tai sisamaan kyliin.", "A-7 on Costa del Solin paaakseli ja AP-7 voi tulla vastaan joillakin reiteilla. Tarkista tietullit, liikenne ja reitti ennen lahtoa."] },
    { id: "parking", title: "Pysakointi Fuengirolassa", paragraphs: ["Fuengirolassa on katupysakointia, mahdollisia saanneltyja alueita, julkisia pysakointitaloja ja pysakointia kohteissa kuten Miramar tai linnan alue.", "Kesalla, konserttien ja messujen aikana pysakointi voi olla vaikeampaa. Emme julkaise pysyvia hintoja tai aukioloaikoja."], links: ["Tarkista pysakointi"] },
    { id: "bike", title: "Polkupyorat ja kevyt liikkuminen", paragraphs: ["Rantakatu voi olla miellyttava lyhyille pyoramatkoille, kunhan noudatat merkkeja, huomioit jalankulkijat ja paikalliset saannot.", "Ala oleta, etta kaikki alueet sallivat kaikki ajoneuvot. Tarkista pyorien ja potkulautojen sallitut alueet."] },
    { id: "accessibility", title: "Liikenne ja esteettomyys", paragraphs: ["Tarpeet vaihtelevat aseman, pysakin ja ajoneuvon mukaan. Renfe julkaisee esteettomyystietoja ja kaupunkibussi kuvaa palvelua esteettomaksi.", "Tarkista tarkealla matkalla apu ja ehdot operaattorilta ennen lahtoa."] },
    { id: "children", title: "Liikkuminen lasten kanssa", paragraphs: ["Jata vaihtoyhteyksiin aikaa, valta pitkat kavelyt keskipäivalla, tarkista lasten liput ja kysy lastenistuimista taksissa.", "Kokoontaitettava lastenvaunu voi olla kaytannollinen."] },
    { id: "luggage", title: "Paras vaihtoehto matkalaukkujen kanssa", paragraphs: ["Cercanias sopii lentoasemalle ja Malagaan, jos matkatavarat ovat hallittavat. Taksi on mukavampi useiden laukkujen, lasten tai myohaisen saapumisen kanssa.", "Bussi voi toimia kohteesta riippuen, mutta pysakki, tila ja kavelyosuus kannattaa tarkistaa."] },
    { id: "pets", title: "Liikkuminen lemmikkien kanssa", paragraphs: ["Tarkista Renfen, paikallisbussin, seutubussien ja taksin ajantasaiset lemmikkisaannot ennen matkaa.", "Kaupunkiliikenne sallii lemmikkeja tietyin ehdoin, mutta vaatimukset voivat muuttua."] },
    { id: "night", title: "Paluu yolla", paragraphs: ["Tarkista aina viimeinen juna ja bussit. Ala oleta jatkuvaa yoliikennetta ja pida taksi vaihtoehtona.", "Marenostrum-konserttien, messujen ja tapahtumien jalkeen varaa lisäaikaa ja tarkista saman paivan tiedotteet."] },
    { id: "events", title: "Konsertit, messut ja ruuhkapaivat", paragraphs: ["Liikennetta, lisavuoroja, sulkuja tai palvelumuutoksia voi olla. Kayta joukkoliikennetta kun se sopii ja tarkista viralliset tiedotteet.", "Aiemman vuoden erikoisjarjestelyja ei tule pitaa voimassa olevina."] }
  ],
  comparisonTitle: "Nopea vertailu",
  comparisonHeaders: { mode: "Kulkutapa", bestFor: "Paras", advantages: "Edut", note: "Huomioi" },
  comparisonRows: [
    { mode: "Kavellen", bestFor: "Rannat ja lahikohteet", advantages: "Ilmainen ja helppo", note: "Kesakuumuus" },
    { mode: "Cercanias", bestFor: "Lentoasema ja Malaga", advantages: "Suora ja kaytannollinen", note: "Tarkista aikataulut" },
    { mode: "Paikallisbussi", bestFor: "Fuengirolassa liikkuminen", advantages: "Paikallinen kattavuus", note: "Tarkista linja ja pysakki" },
    { mode: "Seutubussi", bestFor: "Mijas, Marbella ja rannikko", advantages: "Ei tarvita autoa", note: "Aikataulut vaihtelevat" },
    { mode: "Taksi", bestFor: "Matkatavarat ja suorat matkat", advantages: "Ovelta ovelle", note: "Hinta riippuu matkasta" },
    { mode: "Auto", bestFor: "Retket ja vapaus", advantages: "Joustavuus", note: "Liikenne ja pysakointi" },
    { mode: "Polkupyora", bestFor: "Rantakatu ja lyhyet matkat", advantages: "Miellyttava ja kestava", note: "Noudata merkkeja ja jalankulkijoita" }
  ],
  planner: {
    ...transportGuideContent.en.planner,
    title: "Valitse reittisi",
    intro: "Yksinkertainen paikallinen suunnittelija. Vastauksia ei tallenneta.",
    destinationLabel: "Minne olet menossa?",
    luggageLabel: "Onko sinulla matkatavaroita?",
    carLabel: "Onko sinulla auto?",
    yes: "Kylla",
    no: "Ei",
    resultTitle: "Stay Fuengirolan suositus",
    destinations: { airport: "Lentoasema", malaga: "Malaga", benalmadena: "Benalmadena", mijas: "Mijas", marbella: "Marbella", local: "Fuengirolan sisalla" },
    recommendations: {
      airport: "Cercanias C1, jos matkatavarat ovat hallittavat; taksi jos saavut myohaan tai usean laukun kanssa.",
      malaga: "Cercanias C1 Malaga Centro-Alamedaan tai Maria Zambranoon lopullisen kohteen mukaan.",
      benalmadena: "Cercanias C1 Arroyo de la Mieliin; sovita loppumatka vierailun mukaan.",
      mijas: "Seutubussi tai taksi ilman autoa; auto jos haluat yhdistaa useita paikkoja.",
      marbella: "Seutubussi tai auto. Tarkista paluumatka ennen lahtoa.",
      local: "Kavellen lyhyille matkoille; paikallisbussi tai taksi kuumalla, sateella tai matkatavaroiden kanssa."
    }
  },
  stationTitle: "Hyodylliset asemat",
  stationCards: [
    { title: "Fuengirola", text: "C1-linjan paateasema ja paavaihtoehto Malagan suuntaan." },
    { title: "Los Boliches", text: "Hyodyllinen taman Fuengirolan alueen vierailuihin." },
    { title: "Lentoasema", text: "Suora yhteys C1-linjalla." },
    { title: "Malaga Maria Zambrano", text: "Yhteydet AVE-juniin, aluejuniin, metroon, busseihin ja muihin junapalveluihin." },
    { title: "Malaga Centro-Alameda", text: "Kaytannollinen Malagan historialliseen keskustaan kavelya varten." }
  ],
  trainRoutesTitle: "Hyodyllisimmat junareitit",
  routeCards: [
    { title: "Fuengirola → lentoasema", mode: "Suora C1", text: "Mukava kohtuullisten matkatavaroiden kanssa; tarkista aikataulut ja hairiot." },
    { title: "Fuengirola → Malagan keskusta", mode: "C1 Centro-Alamedaan", text: "Hyva paivaretkeen; tarkista paluu." },
    { title: "Fuengirola → Malaga Maria Zambrano", mode: "C1", text: "Hyodyllinen AVE- ja muihin juniin; jata vaihtovaraa." },
    { title: "Fuengirola → Benalmadena", mode: "C1", text: "Arroyo de la Miel sopii moniin vierailuihin; Puerto Marina vaatii lisamatkan." },
    { title: "Fuengirola → Torremolinos", mode: "C1", text: "Valitse asema lopullisen kohteen mukaan." },
    { title: "Fuengirola → Plaza Mayor", mode: "C1", text: "Hyodyllinen vapaa-aikaan, ravintoloihin ja ostoksiin." }
  ],
  quickRoutesTitle: "Nopeat reitit asunnolta",
  quickRoutes: [
    { title: "Lentoasemalle", recommended: "Cercanias C1", alternative: "Taksi tai auto, jos laukkuja on paljon." },
    { title: "Fuengirolan keskustaan", recommended: "Kavellen", alternative: "Taksi tai bussi kuumuuden, matkatavaroiden tai liikkumisen mukaan." },
    { title: "Malagaan", recommended: "Cercanias C1", alternative: "Auto vain jos suunnitelma vaatii." },
    { title: "Mijas Puebloon", recommended: "Seutubussi", alternative: "Taksi, auto tai retki." },
    { title: "Marbellaan", recommended: "Seutubussi tai auto", alternative: "Taksi ovelta ovelle -matkaan." },
    { title: "Benalmadenaan", recommended: "Cercanias Arroyo de la Mieliin", alternative: "Sovita loppumatka." },
    { title: "Sohailin linnaan", recommended: "Kavellen kun se on jarkevaa", alternative: "Taksi kuumalla." },
    { title: "Miramariin", recommended: "Kavellen", alternative: "Auto suurten ostosten kanssa." }
  ],
  mapTitle: "Liikkumiskartta",
  mapAria: "Fuengirolan liikkumiskartta, jossa nakyy asunnon likimaarainen alue ja liikennepisteet",
  mapApartment: "Asunnon likimaarainen alue",
  mapApartmentPopup: "Tarkka sijainti annetaan vahvistetun varauksen jalkeen.",
  officialTitle: "Hyodylliset sovellukset ja viralliset linkit",
  officialNote: "Viralliset sovellukset ja sivut ovat paras lahde saman paivan aikatauluihin ja hairiotietoihin.",
  officialLinks: [
    { title: "Renfe Cercanias Malaga", href: "https://www.renfe.com/es/es/cercanias/cercanias-malaga/lineas", mode: "train", destination: "timetable" },
    { title: "Renfe liput ja maksutavat", href: "https://www.renfe.com/es/es/cercanias/cercanias-malaga/tarifas/billetes", mode: "train", destination: "tickets" },
    { title: "Fuengirolan paikallisbussi", href: "https://www.transportefuengirola.com/", mode: "urban_bus", destination: "official_site" },
    { title: "Paikallisbussien linjat", href: "https://www.transportefuengirola.com/lineas-menu", mode: "urban_bus", destination: "map" },
    { title: "Malagan liikennekonsortio", href: "https://ctmam.ctan.es/", mode: "intercity_bus", destination: "official_site" },
    { title: "Radio Taxi Fuengirola", href: "https://pidetaxi.es/", mode: "taxi", destination: "official_site" },
    { title: "Kaupungin matkailukartta", href: "https://mapas.fuengirola.es/es/inicio", mode: "parking", destination: "map" }
  ],
  changingNote: "Aikataulut, hinnat, reitit ja ehdot voivat muuttua. Tarkista aina virallinen tieto ennen matkaa.",
  tipsTitle: "Stay Fuengirolan vinkit",
  tips: ["Kayta Cercanias-junaa lentoasemalle ja Malagaan.", "Tarkista viimeinen juna ennen iltamenoa.", "Mijasiin tai Marbellaan mennessa tarkista paluubussi ennen lahtoa.", "Useiden laukkujen kanssa taksi voi kannattaa.", "Kesalla valta pitkia kavelyja keskipäivalla.", "Et tarvitse autoa Fuengirolasta nauttimiseen.", "Sisamaan retkille vuokra-auto voi olla hyodyllinen.", "Tarkista hairiotiedot matkapaivana."],
  faqTitle: "Usein kysytyt kysymykset",
  faqs: [
    { question: "Mika on paras tapa liikkua Fuengirolassa?", answer: "Lahimatkoille kavellen. Kauemmas paikallisbussi tai taksi ajan, kuumuuden ja matkatavaroiden mukaan." },
    { question: "Tarvitaanko Fuengirolassa vuokra-autoa?", answer: "Ei Fuengirolaan, Malagaan, lentoasemalle, Benalmadenaan tai Torremolinokseen. Sisamaan retkilla auto voi auttaa." },
    { question: "Onko Fuengirolasta suora juna lentoasemalle?", answer: "Kylla, C1 yhdistaa Fuengirolan Malagan lentoasemaan. Tarkista viralliset aikataulut." },
    { question: "Paaseeko Fuengirolasta junalla Malagaan?", answer: "Kylla, C1 kulkee Malaga Maria Zambranoon ja Malaga Centro-Alamedaan." },
    { question: "Miten Fuengirolasta paasee Benalmadenaan?", answer: "C1 on paavaihtoehto Arroyo de la Mieliin; loppumatka riippuu kohteesta." },
    { question: "Miten Fuengirolasta paasee Mijas Puebloon?", answer: "Seutubussilla, taksilla, autolla tai jarjestetylla retkella. Tarkista virallinen reitti." },
    { question: "Miten Fuengirolasta paasee Marbellaan?", answer: "Nykyverkossa seutubussi tai auto ovat yleensa kaytannollisia." },
    { question: "Mista Cercanias-liput ostetaan?", answer: "Automaateista tai Renfen hyvaksymin tavoin. Joillakin asemilla voi maksaa kortilla tai puhelimella Cronos-jarjestelmassa." },
    { question: "Onko Fuengirolassa paikallisbusseja?", answer: "Kylla, kaupungin palvelu ilmoittaa viidesta linjasta." },
    { question: "Onko taksin saaminen helppoa?", answer: "Yleensa kylla, mutta tapahtumissa ja ruuhkissa kannattaa pyytaa se ajoissa." },
    { question: "Mika on paras vaihtoehto matkalaukkujen kanssa?", answer: "Taksi useiden laukkujen tai myohaisen saapumisen kanssa; Cercanias jos laukut ovat hallittavat." },
    { question: "Miten palata konsertin jalkeen?", answer: "Tarkista viimeinen juna ja bussi, lue tiedotteet ja pida taksi vaihtoehtona." },
    { question: "Voiko lemmikin kanssa matkustaa?", answer: "Se riippuu operaattorista ja ehdoista. Tarkista viralliset saannot." }
  ],
  relatedTitle: "Saatat olla kiinnostunut myos",
  ctaTitle: "Mukava tukikohta Costa del Solin tutkimiseen",
  ctaText: "Apartamento Veramarista voit kulkea suuren osan Fuengirolasta jalan ja kayttaa junaa, bussia tai autoa muun Costa del Solin tutkimiseen.",
  ctaButton: "Tarkista saatavuus Bookingissa",
  schemaAbout: ["liikkuminen Fuengirolassa", "julkinen liikenne Fuengirola", "juna Fuengirola Malaga", "Fuengirola ilman autoa"]
};

transportGuideContent.sv = {
  ...transportGuideContent.fi,
  metaTitle: "Ta sig runt i Fuengirola: tag, buss och taxi | Stay Fuengirola",
  metaDescription: "Guide till transport i Fuengirola: Cercanias till flygplatsen och Malaga, lokalbussar, regionalbussar, taxi, bil, parkering och praktiska rad.",
  breadcrumbGuide: "Fuengirola-guide",
  breadcrumbArticle: "Transport",
  kicker: "Fuengirola-guide · Transport",
  h1: "Sa tar du dig runt i Fuengirola",
  intro: "Fuengirola ar latt att upptacka till fots och har bra forbindelser med flygplatsen, Benalmadena, Torremolinos och Malaga via Cercanias-taget. Guiden hjalper dig valja mellan promenad, tag, buss, taxi och bil.",
  heroImageAlt: "Medelhavsinspirerad illustration av lokaltrafik och stadspromenad i Fuengirola",
  backLabel: "Tillbaka till guiden",
  quickTitle: "Vilket transportsatt ska du valja",
  quickItems: [
    { title: "Nara lagenheten", recommendation: "Till fots", href: "#walking" },
    { title: "Flygplatsen", recommendation: "Cercanias C1", href: "#train" },
    { title: "Malaga", recommendation: "Cercanias C1", href: "#train-routes" },
    { title: "Benalmadena eller Torremolinos", recommendation: "Cercanias C1", href: "#train-routes" },
    { title: "Inom Fuengirola", recommendation: "Lokalbuss eller taxi", href: "#urban-bus" },
    { title: "Mijas Pueblo", recommendation: "Regionalbuss, taxi eller bil", href: "#mijas" },
    { title: "Marbella", recommendation: "Regionalbuss eller bil", href: "#marbella" },
    { title: "Utflykter inlandet", recommendation: "Bil eller organiserad tur", href: "#car" },
    { title: "Mycket bagage", recommendation: "Taxi", href: "#luggage" }
  ],
  comparisonTitle: "Snabb jamforelse",
  comparisonHeaders: { mode: "Satt", bestFor: "Bast for", advantages: "Fordelar", note: "Tank pa" },
  comparisonRows: [
    { mode: "Till fots", bestFor: "Strander och nara platser", advantages: "Gratis och enkelt", note: "Sommarvarme" },
    { mode: "Cercanias", bestFor: "Flygplatsen och Malaga", advantages: "Direkt och praktiskt", note: "Kontrollera tider" },
    { mode: "Lokalbuss", bestFor: "Runt Fuengirola", advantages: "Lokal tackning", note: "Kontrollera linje och hallplats" },
    { mode: "Regionalbuss", bestFor: "Mijas, Marbella och kusten", advantages: "Ingen bil behovs", note: "Tider varierar" },
    { mode: "Taxi", bestFor: "Bagage och direkta resor", advantages: "Dorr till dorr", note: "Pris beror pa resan" },
    { mode: "Bil", bestFor: "Utflykter och frihet", advantages: "Flexibilitet", note: "Trafik och parkering" },
    { mode: "Cykel", bestFor: "Strandpromenad och korta resor", advantages: "Trevligt och hallbart", note: "Respektera regler och fotgangare" }
  ],
  sections: [
    { id: "walking", title: "Fuengirola till fots", paragraphs: ["Fran lagenhetens ungefariliga omrade kan manga vardagsmal nas till fots: strand, strandpromenad, Miramar, Parque Comercial Miramar, Sohailborgen, narliggande restauranger, Maskom, centrum och Bioparc.", "Stay Fuengirola rekommenderar promenad for korta strackor och kollektivtrafik eller taxi vid varme, barn eller tunga inkop."], bullets: ["Nara inkop", "Strand och promenad", "Restauranger", "Sohailborgen", "Korta resor"], tip: "Pa sommaren, undvik langre promenader mitt pa dagen och ta med vatten." },
    { id: "train", title: "Cercanias C1: den mest anvandbara forbindelsen", paragraphs: ["Renfe anger C1 som linjen Fuengirola-Malaga Centro-Alameda. Den kopplar Fuengirola till Los Boliches, Torreblanca, Carvajal, Benalmadena-Arroyo de la Miel, Torremolinos, Plaza Mayor, flygplatsen, Malaga Maria Zambrano och Malaga Centro-Alameda.", "Det ar det tydligaste valet for flygplatsen, Malaga, Benalmadena och Torremolinos utan bil. Kontrollera tider samma dag."], links: ["Kontrollera Renfes tider", "Se karta over C1", "Kontrollera trafikmeddelanden"] },
    { id: "train-ticket", title: "Sa anvander du Cercanias", paragraphs: ["Ga till stationen, kontrollera destinationen, kop biljett i automat eller anvand godkanda betalningssatt, spara biljetten tills du gar ut och kontrollera spar samt meddelanden.", "Renfe tillater betalning av enkelresor direkt vid sparrar med kompatibelt bankkort eller mobil via Cronos, forutom vanliga kopalternativ. Villkor kan andras."] },
    { id: "urban-bus", title: "Lokalbuss", paragraphs: ["Kommunens service informerar om fem stadslinjer och visar rutter, tider, hallplatser, storningar och realtidsinformation pa webb och i app.", "Vi pastar inte att bussen ar gratis for turister. Formaner kan bero pa registrering, stadskort eller andra villkor."], tip: "Kontrollera aktuella villkor innan du reser." },
    { id: "intercity-bus", title: "Bussar utanfor Fuengirola", paragraphs: ["Regionalbussar passar for platser utan direkt Cercanias, som Mijas Pueblo, Las Lagunas, Marbella, Estepona och andra kustorter.", "Anvand Malagas transportkonsortium och officiella operatorer for hallplatser, tider och returresor."] },
    { id: "mijas", title: "Fran Fuengirola till Mijas Pueblo", paragraphs: ["Till Mijas Pueblo kan du valja regionalbuss, taxi, bil eller organiserad utflykt. Det finns ingen direkt Cercanias till byn.", "Basta valet beror pa tider, varme, barn och om du vill kombinera fler stopp."], links: ["Kontrollera officiell rutt"] },
    { id: "marbella", title: "Till Marbella eller Estepona", paragraphs: ["I nuvarande nat finns ingen direkt Cercanias fran Fuengirola till Marbella eller Estepona. Regionalbuss eller bil ar oftast mest praktiskt.", "Tider beror mycket pa trafiken. Kontrollera hallplatser och retur innan avfard."] },
    { id: "taxi", title: "Taxi i Fuengirola", paragraphs: ["Taxi ar anvandbart med mycket bagage, sma barn, sena tider, dorr-till-dorr-resor, nedsatt rorlighet eller platser utan tag.", "Radio Taxi Fuengirola lankas av kommunen och turistinformationen. Vi publicerar inte fasta priser."], links: ["Bestall taxi", "Kontrollera Radio Taxi Fuengirola"] },
    { id: "vtc", title: "Appar med forare", paragraphs: ["Tillganglighet via appar kan variera med tid, sasong och efterfragan. Kontrollera appen innan du forlater dig pa den.", "Vi garanterar inte Uber, Bolt eller Cabify och jamfor inte priser."] },
    { id: "car", title: "Behover du hyra bil", paragraphs: ["Bil behovs inte for Fuengirola, strander, Miramar, Malaga, flygplatsen, Benalmadena eller Torremolinos. Den kan vara bra for Ronda, Nerja, Frigiliana, Granada, Caminito del Rey eller byar inlandet.", "A-7 ar huvudvagen pa Costa del Sol och AP-7 kan forekomma. Kontrollera vagval, trafik och eventuella avgifter."] },
    { id: "parking", title: "Parkering i Fuengirola", paragraphs: ["Det finns gatuparkering, reglerade zoner nar de galler, publika parkeringar och parkering vid platser som Miramar eller borgen.", "Pa sommaren och vid evenemang kan parkering vara svarare. Kontrollera alltid aktuell information."], links: ["Kontrollera parkering"] },
    { id: "bike", title: "Cykel och personlig mobilitet", paragraphs: ["Strandpromenaden kan vara trevlig for korta cykelresor om skyltar, fotgangare och lokala regler respekteras.", "Anta inte att alla fordon ar tillatna overallt."] },
    { id: "accessibility", title: "Transport och tillganglighet", paragraphs: ["Behov varierar mellan stationer, hallplatser och fordon. Renfe publicerar tillganglighetsinformation och lokaltrafiken presenteras som tillganglig.", "Bekrafta hjalp och villkor med operatoren fore viktiga resor."] },
    { id: "children", title: "Transport med barn", paragraphs: ["Lamna marginal vid byten, undvik langa promenader mitt pa dagen, kontrollera barnbiljetter och fraga om barnstol i taxi.", "En hopfallbar barnvagn kan vara praktisk."] },
    { id: "luggage", title: "Basta valet med resvaskor", paragraphs: ["Cercanias fungerar till flygplatsen och Malaga om bagaget ar hanterbart. Taxi ar bekvamare med flera vaskor, barn eller sen ankomst.", "Buss kan fungera men kraver koll pa hallplats, plats och gangstracka."] },
    { id: "pets", title: "Transport med husdjur", paragraphs: ["Kontrollera aktuella regler hos Renfe, lokalbuss, regionalbuss och taxi fore resan.", "Stadstrafiken tillater husdjur under vissa villkor, men kraven kan andras."] },
    { id: "night", title: "Att komma tillbaka pa natten", paragraphs: ["Kontrollera alltid sista tag och buss. Rakna inte med kontinuerlig natttrafik och ha taxi som alternativ.", "Efter Marenostrum, marknader och evenemang bor du lamna extra tid."] },
    { id: "events", title: "Konserter, marknader och intensiva dagar", paragraphs: ["Det kan bli trafik, extra trafik, vagavstangningar eller serviceandringar. Anvand kollektivtrafik nar det passar.", "Tidigare ars specialplaner ska inte behandlas som aktuella."] }
  ],
  planner: { ...transportGuideContent.fi.planner, title: "Valj din rutt", destinationLabel: "Vart ska du?", luggageLabel: "Har du bagage?", carLabel: "Har du bil?", yes: "Ja", no: "Nej", resultTitle: "Stay Fuengirolas rekommendation" },
  stationTitle: "Anvandbara stationer",
  stationCards: [
    { title: "Fuengirola", text: "Slutstation for C1 och huvudalternativ mot Malaga." },
    { title: "Los Boliches", text: "Anvandbar for den delen av staden." },
    { title: "Flygplatsen", text: "Direkt anslutning med C1." },
    { title: "Malaga Maria Zambrano", text: "Anslutningar till AVE, regionaltag, metro, bussar och andra tag." },
    { title: "Malaga Centro-Alameda", text: "Praktisk for att ga till Malagas historiska centrum." }
  ],
  trainRoutesTitle: "Mest anvandbara tagrutter",
  quickRoutesTitle: "Snabba rutter fran lagenheten",
  quickRoutes: [
    { title: "Till flygplatsen", recommended: "Cercanias C1", alternative: "Taxi eller bil med mycket bagage." },
    { title: "Till Fuengirolas centrum", recommended: "Till fots", alternative: "Taxi eller buss beroende pa varme, bagage eller rorlighet." },
    { title: "Till Malaga", recommended: "Cercanias C1", alternative: "Bil endast om planen kraver det." },
    { title: "Till Mijas Pueblo", recommended: "Regionalbuss", alternative: "Taxi, bil eller utflykt." },
    { title: "Till Marbella", recommended: "Regionalbuss eller bil", alternative: "Taxi for dorr-till-dorr." },
    { title: "Till Benalmadena", recommended: "Cercanias till Arroyo de la Miel", alternative: "Anpassa sista delen." },
    { title: "Till Sohailborgen", recommended: "Till fots nar det passar", alternative: "Taxi vid varme." },
    { title: "Till Miramar", recommended: "Till fots", alternative: "Bil for stora inkop." }
  ],
  mapTitle: "Mobilitetskarta",
  mapAria: "Karta for transport i Fuengirola med lagenhetens ungefariliga omrade och transportpunkter",
  mapApartment: "Lagenhetens ungefariliga omrade",
  mapApartmentPopup: "Exakt lage delas efter bekraftad bokning.",
  officialTitle: "Anvandbara appar och officiella lankar",
  officialNote: "Officiella appar och sidor ar basta kallan for dagens tidtabeller och storningar.",
  changingNote: "Tidtabeller, priser, rutter och villkor kan andras. Kontrollera alltid officiell information innan resan.",
  tipsTitle: "Stay Fuengirolas tips",
  tips: ["Anvand Cercanias till flygplatsen och Malaga.", "Kontrollera sista taget innan en kvall ute.", "Till Mijas eller Marbella, kontrollera returbussen fore avfard.", "Med flera vaskor kan taxi vara vart det.", "Undvik langa promenader mitt pa dagen pa sommaren.", "Du behover inte bil for att njuta av Fuengirola.", "For utflykter inlandet kan hyrbil vara praktiskt.", "Kontrollera trafikmeddelanden samma dag."],
  faqTitle: "Vanliga fragor",
  faqs: [
    { question: "Vilket ar basta sattet att ta sig runt i Fuengirola?", answer: "Till fots for nara resor. For langre strackor, lokalbuss eller taxi beroende pa tid, varme och bagage." },
    { question: "Behover man hyra bil i Fuengirola?", answer: "Inte for Fuengirola, Malaga, flygplatsen, Benalmadena eller Torremolinos. Bil kan passa for utflykter inlandet." },
    { question: "Finns det direkt tag fran Fuengirola till flygplatsen?", answer: "Ja, C1 kopplar Fuengirola till Malagas flygplats. Kontrollera alltid officiella tider." },
    { question: "Kan man aka tag fran Fuengirola till Malaga?", answer: "Ja, C1 gar till Malaga Maria Zambrano och Malaga Centro-Alameda." },
    { question: "Hur tar man sig fran Fuengirola till Benalmadena?", answer: "C1 ar huvudalternativet till Arroyo de la Miel; sista delen beror pa exakt mal." },
    { question: "Hur tar man sig fran Fuengirola till Mijas Pueblo?", answer: "Regionalbuss, taxi, bil eller organiserad utflykt. Kontrollera officiell rutt." },
    { question: "Hur tar man sig fran Fuengirola till Marbella?", answer: "Regionalbuss eller bil ar vanligtvis praktiskt med dagens nat." },
    { question: "Var koper man Cercanias-biljetter?", answer: "I automater eller med metoder som Renfe accepterar. Vissa stationer tillater kort eller mobil via Cronos." },
    { question: "Finns lokalbussar i Fuengirola?", answer: "Ja, kommunens service anger fem stadslinjer." },
    { question: "Ar det latt att fa taxi?", answer: "Ofta ja, men vid evenemang och rusning bor den bestallas med marginal." },
    { question: "Vad ar bast med resvaskor?", answer: "Taxi med flera vaskor eller sen ankomst; Cercanias om bagaget ar hanterbart." },
    { question: "Hur kommer man tillbaka efter en konsert?", answer: "Kontrollera sista tag och buss, las trafikmeddelanden och ha taxi som alternativ." },
    { question: "Kan man resa med husdjur?", answer: "Det beror pa operator och aktuella villkor. Kontrollera officiella regler." }
  ],
  relatedTitle: "Du kanske ocksa gillar",
  ctaTitle: "En bekvam bas for att upptacka Costa del Sol",
  ctaText: "Fran Apartamento Veramar kan du ga till stora delar av Fuengirola och anvanda tag, buss eller bil for att upptacka resten av Costa del Sol.",
  ctaButton: "Kontrollera tillganglighet pa Booking",
  schemaAbout: ["transport i Fuengirola", "kollektivtrafik Fuengirola", "tag Fuengirola Malaga", "Fuengirola utan bil"]
};

transportGuideContent.no = {
  ...transportGuideContent.sv,
  metaTitle: "Transport i Fuengirola: tog, buss og taxi | Stay Fuengirola",
  metaDescription: "Guide til transport i Fuengirola: Cercanias til flyplassen og Malaga, lokalbusser, regionbusser, taxi, bil, parkering og praktiske rad.",
  breadcrumbGuide: "Fuengirola-guide",
  breadcrumbArticle: "Transport",
  kicker: "Fuengirola-guide · Transport",
  h1: "Slik kommer du deg rundt i Fuengirola",
  intro: "Fuengirola er lett a utforske til fots og har gode forbindelser til flyplassen, Benalmadena, Torremolinos og Malaga med Cercanias-toget. Guiden hjelper deg a velge mellom gange, tog, buss, taxi og bil.",
  heroImageAlt: "Middelhavsinspirert illustrasjon av lokaltransport og byvandring i Fuengirola",
  backLabel: "Tilbake til guiden",
  quickTitle: "Hvilken transport bor du velge",
  quickItems: [
    { title: "Naer leiligheten", recommendation: "Til fots", href: "#walking" },
    { title: "Flyplassen", recommendation: "Cercanias C1", href: "#train" },
    { title: "Malaga", recommendation: "Cercanias C1", href: "#train-routes" },
    { title: "Benalmadena eller Torremolinos", recommendation: "Cercanias C1", href: "#train-routes" },
    { title: "Inne i Fuengirola", recommendation: "Lokalbuss eller taxi", href: "#urban-bus" },
    { title: "Mijas Pueblo", recommendation: "Regionbuss, taxi eller bil", href: "#mijas" },
    { title: "Marbella", recommendation: "Regionbuss eller bil", href: "#marbella" },
    { title: "Utflukter i innlandet", recommendation: "Bil eller organisert tur", href: "#car" },
    { title: "Mye bagasje", recommendation: "Taxi", href: "#luggage" }
  ],
  comparisonTitle: "Rask sammenligning",
  comparisonHeaders: { mode: "Transport", bestFor: "Best for", advantages: "Fordeler", note: "Husk" },
  comparisonRows: [
    { mode: "Til fots", bestFor: "Strender og steder i naerheten", advantages: "Gratis og enkelt", note: "Sommervarme" },
    { mode: "Cercanias", bestFor: "Flyplass og Malaga", advantages: "Direkte og praktisk", note: "Sjekk rutetider" },
    { mode: "Lokalbuss", bestFor: "Rundt i Fuengirola", advantages: "Lokal dekning", note: "Sjekk linje og stopp" },
    { mode: "Regionbuss", bestFor: "Mijas, Marbella og kysten", advantages: "Ingen bil nodvendig", note: "Tider varierer" },
    { mode: "Taxi", bestFor: "Bagasje og direkte turer", advantages: "Dor til dor", note: "Pris avhenger av turen" },
    { mode: "Bil", bestFor: "Utflukter og frihet", advantages: "Fleksibilitet", note: "Trafikk og parkering" },
    { mode: "Sykkel", bestFor: "Strandpromenade og korte turer", advantages: "Hyggelig og baerekraftig", note: "Respekter regler og fotgjengere" }
  ],
  sections: [
    { id: "walking", title: "Fuengirola til fots", paragraphs: ["Fra leilighetens omtrentlige omrade kan mange hverdagssteder nas til fots: stranden, strandpromenaden, Miramar, Parque Comercial Miramar, Sohail-slottet, restauranter i naerheten, Maskom, sentrum og Bioparc.", "Stay Fuengirola anbefaler a ga korte strekninger og bruke kollektivtransport eller taxi ved varme, barn eller tunge innkjop."], bullets: ["Naere innkjop", "Strand og promenade", "Restauranter", "Sohail-slottet", "Korte turer"], tip: "Om sommeren bor lange spaserturer midt pa dagen unngas, og ta med vann." },
    { id: "train", title: "Cercanias C1: den mest nyttige forbindelsen", paragraphs: ["Renfe viser C1 som linjen Fuengirola-Malaga Centro-Alameda. Den knytter Fuengirola til Los Boliches, Torreblanca, Carvajal, Benalmadena-Arroyo de la Miel, Torremolinos, Plaza Mayor, flyplassen, Malaga Maria Zambrano og Malaga Centro-Alameda.", "Dette er det tydeligste valget til flyplassen, Malaga, Benalmadena og Torremolinos uten bil. Sjekk rutetider samme dag."], links: ["Sjekk Renfe-rutetider", "Se C1-kart", "Sjekk driftsmeldinger"] },
    { id: "train-ticket", title: "Slik bruker du Cercanias", paragraphs: ["Ga til stasjonen, kontroller destinasjonen, kjop billett i automat eller bruk godkjent betalingsmate, behold billetten til du gar ut og sjekk spor og meldinger.", "Renfe tillater betaling av enkeltreiser ved sperrene med kompatibelt bankkort eller mobil via Cronos, i tillegg til vanlige alternativer. Vilkar kan endres."] },
    { id: "urban-bus", title: "Lokalbuss", paragraphs: ["Kommunens tjeneste opplyser om fem bylinjer og viser ruter, tider, stopp, avvik og sanntidsinformasjon pa nett og i app.", "Vi sier ikke at bussen er gratis for turister. Fordeler kan avhenge av registrering, bykort eller andre vilkar."], tip: "Sjekk gjeldende vilkar for reisen." },
    { id: "intercity-bus", title: "Busser ut av Fuengirola", paragraphs: ["Regionbusser er nyttige for steder uten direkte Cercanias, som Mijas Pueblo, Las Lagunas, Marbella, Estepona og andre byer langs Costa del Sol.", "Bruk Malagas transportkonsortium og offisielle operatorer for stopp, tider og retur."] },
    { id: "mijas", title: "Fra Fuengirola til Mijas Pueblo", paragraphs: ["Til Mijas Pueblo kan du velge regionbuss, taxi, bil eller organisert utflukt. Det finnes ikke direkte Cercanias til landsbyen.", "Beste valg avhenger av tider, varme, barn og om du vil kombinere flere stopp."], links: ["Sjekk offisiell rute"] },
    { id: "marbella", title: "Til Marbella eller Estepona", paragraphs: ["Med dagens nett finnes ingen direkte Cercanias fra Fuengirola til Marbella eller Estepona. Regionbuss eller bil er vanligvis mest praktisk.", "Reisetider avhenger mye av trafikk. Sjekk stopp og retur for avreise."] },
    { id: "taxi", title: "Taxi i Fuengirola", paragraphs: ["Taxi er nyttig med mye bagasje, sma barn, sene tider, dor-til-dor-reiser, redusert mobilitet eller steder uten tog.", "Radio Taxi Fuengirola er lenket fra kommunen og turismen. Vi publiserer ikke faste priser."], links: ["Bestill taxi", "Sjekk Radio Taxi Fuengirola"] },
    { id: "vtc", title: "Transportapper med sjafor", paragraphs: ["Tilgjengelighet via apper kan variere med tid, sesong og ettersporsel. Sjekk appen for du stoler pa den.", "Vi garanterer ikke Uber, Bolt eller Cabify og sammenligner ikke priser."] },
    { id: "car", title: "Trenger du leiebil", paragraphs: ["Bil trengs ikke for Fuengirola, strender, Miramar, Malaga, flyplassen, Benalmadena eller Torremolinos. Den kan passe for Ronda, Nerja, Frigiliana, Granada, Caminito del Rey eller landsbyer i innlandet.", "A-7 er hovedveien pa Costa del Sol og AP-7 kan dukke opp pa enkelte ruter. Sjekk vei, trafikk og eventuelle avgifter."] },
    { id: "parking", title: "Parkering i Fuengirola", paragraphs: ["Det finnes gateparkering, regulerte soner nar aktuelt, offentlige parkeringshus og parkering ved steder som Miramar eller slottet.", "Om sommeren og ved arrangementer kan parkering vaere vanskeligere. Sjekk alltid aktuell informasjon."], links: ["Sjekk parkering"] },
    { id: "bike", title: "Sykkel og personlig mobilitet", paragraphs: ["Strandpromenaden kan vaere hyggelig for korte sykkelturer nar skilt, fotgjengere og lokale regler respekteres.", "Ikke anta at alle kjoretoy er tillatt overalt."] },
    { id: "accessibility", title: "Transport og tilgjengelighet", paragraphs: ["Behov varierer mellom stasjoner, stopp og kjoretoy. Renfe publiserer tilgjengelighetsinformasjon, og lokaltrafikken beskrives som tilgjengelig.", "Bekreft hjelp og vilkar med operatoren for viktige reiser."] },
    { id: "children", title: "Transport med barn", paragraphs: ["Ha margin ved bytter, unnga lange spaserturer midt pa dagen, sjekk barnebilletter og spor om barnesete i taxi.", "En sammenleggbar vogn kan vaere praktisk."] },
    { id: "luggage", title: "Beste valg med kofferter", paragraphs: ["Cercanias fungerer til flyplassen og Malaga hvis bagasjen er handterbar. Taxi er mer komfortabelt med flere kofferter, barn eller sen ankomst.", "Buss kan fungere, men stopp, plass og gangavstand ma sjekkes."] },
    { id: "pets", title: "Transport med dyr", paragraphs: ["Sjekk gjeldende regler hos Renfe, lokalbuss, regionbuss og taxi for du reiser med dyr.", "Bytransporten tillater dyr under bestemte vilkar, men krav kan endres."] },
    { id: "night", title: "A komme tilbake om natten", paragraphs: ["Sjekk alltid siste tog og buss. Ikke anta kontinuerlig nattservice, og ha taxi som alternativ.", "Etter Marenostrum, messer og arrangementer bor du beregne ekstra tid."] },
    { id: "events", title: "Konserter, messer og travle dager", paragraphs: ["Det kan bli trafikk, ekstra avganger, stengte veier eller endringer i tjenesten. Bruk kollektivtransport nar det passer.", "Spesialplaner fra tidligere ar skal ikke behandles som gjeldende."] }
  ],
  planner: { ...transportGuideContent.sv.planner, title: "Velg ruten din", destinationLabel: "Hvor skal du?", luggageLabel: "Har du bagasje?", carLabel: "Har du bil?", yes: "Ja", no: "Nei", resultTitle: "Stay Fuengirolas anbefaling" },
  stationTitle: "Nyttige stasjoner",
  trainRoutesTitle: "Mest nyttige togruter",
  quickRoutesTitle: "Raske ruter fra leiligheten",
  quickRoutes: [
    { title: "Til flyplassen", recommended: "Cercanias C1", alternative: "Taxi eller bil med mye bagasje." },
    { title: "Til Fuengirola sentrum", recommended: "Til fots", alternative: "Taxi eller buss etter varme, bagasje eller mobilitet." },
    { title: "Til Malaga", recommended: "Cercanias C1", alternative: "Bil bare hvis planen krever det." },
    { title: "Til Mijas Pueblo", recommended: "Regionbuss", alternative: "Taxi, bil eller tur." },
    { title: "Til Marbella", recommended: "Regionbuss eller bil", alternative: "Taxi dor til dor." },
    { title: "Til Benalmadena", recommended: "Cercanias til Arroyo de la Miel", alternative: "Tilpass siste del." },
    { title: "Til Sohail-slottet", recommended: "Til fots nar det passer", alternative: "Taxi i varmen." },
    { title: "Til Miramar", recommended: "Til fots", alternative: "Bil ved store innkjop." }
  ],
  mapTitle: "Mobilitetskart",
  mapAria: "Transportkart for Fuengirola med leilighetens omtrentlige omrade og transportpunkter",
  mapApartment: "Leilighetens omtrentlige omrade",
  mapApartmentPopup: "Noyaktig beliggenhet deles etter bekreftet booking.",
  officialTitle: "Nyttige apper og offisielle lenker",
  officialNote: "Offisielle apper og sider er beste kilde for dagens rutetider og avvik.",
  changingNote: "Rutetider, priser, ruter og vilkar kan endres. Sjekk alltid offisiell informasjon for reisen.",
  tipsTitle: "Stay Fuengirolas tips",
  tips: ["Bruk Cercanias til flyplassen og Malaga.", "Sjekk siste tog for en kveld ute.", "Til Mijas eller Marbella, sjekk returbussen for avreise.", "Med flere kofferter kan taxi lonne seg.", "Unnga lange spaserturer midt pa dagen om sommeren.", "Du trenger ikke bil for a nyte Fuengirola.", "For utflukter i innlandet kan leiebil vaere praktisk.", "Sjekk driftsmeldinger samme dag."],
  faqTitle: "Vanlige sporsmal",
  faqs: [
    { question: "Hva er beste mate a komme seg rundt i Fuengirola?", answer: "Til fots for naere turer. For lengre avstander, lokalbuss eller taxi etter tid, varme og bagasje." },
    { question: "Trenger man leiebil i Fuengirola?", answer: "Ikke for Fuengirola, Malaga, flyplassen, Benalmadena eller Torremolinos. Bil kan passe for innlandsturer." },
    { question: "Finnes direkte tog fra Fuengirola til flyplassen?", answer: "Ja, C1 kobler Fuengirola til Malaga flyplass. Sjekk offisielle rutetider." },
    { question: "Kan man ta tog fra Fuengirola til Malaga?", answer: "Ja, C1 gar til Malaga Maria Zambrano og Malaga Centro-Alameda." },
    { question: "Hvordan komme fra Fuengirola til Benalmadena?", answer: "C1 er hovedvalget til Arroyo de la Miel; siste del avhenger av malet." },
    { question: "Hvordan komme fra Fuengirola til Mijas Pueblo?", answer: "Regionbuss, taxi, bil eller organisert tur. Sjekk offisiell rute." },
    { question: "Hvordan komme fra Fuengirola til Marbella?", answer: "Regionbuss eller bil er vanligvis praktisk med dagens nett." },
    { question: "Hvor kjoper man Cercanias-billetter?", answer: "I automater eller med metoder Renfe godtar. Enkelte stasjoner tillater kort eller mobil via Cronos." },
    { question: "Finnes lokalbusser i Fuengirola?", answer: "Ja, kommunens tjeneste oppgir fem bylinjer." },
    { question: "Er det lett a fa taxi?", answer: "Vanligvis ja, men ved arrangementer og rushtid bor den bestilles med margin." },
    { question: "Hva er best med kofferter?", answer: "Taxi med flere kofferter eller sen ankomst; Cercanias hvis bagasjen er handterbar." },
    { question: "Hvordan komme tilbake etter konsert?", answer: "Sjekk siste tog og buss, les meldinger og ha taxi som alternativ." },
    { question: "Kan man reise med dyr?", answer: "Det avhenger av operator og vilkar. Sjekk offisielle regler." }
  ],
  relatedTitle: "Du kan ogsa like",
  ctaTitle: "En komfortabel base for a oppdage Costa del Sol",
  ctaText: "Fra Apartamento Veramar kan du ga til store deler av Fuengirola og bruke tog, buss eller bil for a oppdage resten av Costa del Sol.",
  ctaButton: "Sjekk tilgjengelighet pa Booking",
  schemaAbout: ["transport i Fuengirola", "kollektivtransport Fuengirola", "tog Fuengirola Malaga", "Fuengirola uten bil"]
};
