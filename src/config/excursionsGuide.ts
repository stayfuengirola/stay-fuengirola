import { GuideCategoryKey } from "@/config/guides";
import { ExcursionCategory, ExcursionDifficulty, ExcursionDuration, ExcursionOfficialDestination, ExcursionTransport, secondaryExcursionIdeas } from "@/data/excursions";
import { Locale } from "@/i18n/locales";

type ExcursionTextKey =
  | "mijasTitle" | "mijasIntro" | "mijasDescription"
  | "malagaTitle" | "malagaIntro" | "malagaDescription"
  | "benalmadenaTitle" | "benalmadenaIntro" | "benalmadenaDescription"
  | "marbellaTitle" | "marbellaIntro" | "marbellaDescription"
  | "rondaTitle" | "rondaIntro" | "rondaDescription"
  | "nerjaTitle" | "nerjaIntro" | "nerjaDescription"
  | "caminitoTitle" | "caminitoIntro" | "caminitoDescription"
  | "granadaTitle" | "granadaIntro" | "granadaDescription"
  | "gibraltarTitle" | "gibraltarIntro" | "gibraltarDescription"
  | "esteponaTitle" | "esteponaIntro" | "esteponaDescription";

export type ExcursionsGuideContent = {
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
  quickNote: string;
  quickPicks: Array<{ label: string; destinationId: string; reason: string }>;
  navTitle: string;
  filterLabels: Record<"all" | "half-day" | "full-day" | "without-car" | "family" | "culture" | "nature" | "coast" | "booking", string>;
  comparisonTitle: string;
  comparisonHeaders: { destination: string; duration: string; transport: string; ideal: string; booking: string };
  labels: {
    duration: string;
    transport: string;
    plan: string;
    children: string;
    booking: string;
    difficulty: string;
    details: string;
    official: string;
    verified: string;
    yes: string;
    no: string;
    recommended: string;
    depends: string;
    note: string;
  };
  durationLabels: Record<ExcursionDuration, string>;
  transportLabels: Record<ExcursionTransport, string>;
  categoryLabels: Record<ExcursionCategory, string>;
  difficultyLabels: Record<ExcursionDifficulty, string>;
  officialLabels: Record<ExcursionOfficialDestination, string>;
  texts: Record<ExcursionTextKey, string> & Record<string, string>;
  editorials: Record<string, {
    badge?: string;
    title: string;
    paragraphs: string[];
    seeTitle: string;
    see: string[];
    arrivalTitle: string;
    arrival: string[];
    timeTitle: string;
    time: string;
    idealTitle: string;
    ideal: string[];
    tipTitle: string;
    tip: string;
  }>;
  secondaryTitle: string;
  secondaryIntro: string;
  secondaryIdeas: Record<(typeof secondaryExcursionIdeas)[number], { title: string; text: string }>;
  noCarTitle: string;
  noCarGroups: Array<{ title: string; items: string[] }>;
  kidsTitle: string;
  kidsText: string;
  timeBlocksTitle: string;
  timeBlocks: Array<{ title: string; items: string[] }>;
  seasonTitle: string;
  seasons: Array<{ title: string; text: string }>;
  plannerTitle: string;
  plannerIntro: string;
  plannerQuestions: { car: string; duration: string; interest: string };
  plannerOptions: Record<string, string>;
  plannerEmpty: string;
  mapTitle: string;
  mapAria: string;
  mapOrigin: string;
  mapPopupDuration: string;
  mapPopupLink: string;
  tipsTitle: string;
  tips: string[];
  officialTitle: string;
  officialNote: string;
  changingNote: string;
  faqTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  relatedTitle: string;
  related: Array<{ key: GuideCategoryKey; title: string; text: string }>;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  schemaAbout: string[];
};

const es: ExcursionsGuideContent = {
  metaTitle: "Excursiones desde Fuengirola: Mijas, Málaga, Ronda y más | Stay Fuengirola",
  metaDescription: "Descubre las mejores excursiones desde Fuengirola: Mijas, Málaga, Marbella, Ronda, Nerja, Caminito del Rey, Granada y Gibraltar.",
  breadcrumbGuide: "Guía de Fuengirola",
  breadcrumbArticle: "Excursiones desde Fuengirola",
  kicker: "Guía de Fuengirola · Excursiones",
  h1: "Las mejores excursiones desde Fuengirola",
  intro: "Fuengirola es una base excelente para descubrir la Costa del Sol y algunos de los lugares más especiales de Andalucía. Desde pueblos blancos muy cercanos hasta ciudades históricas, paisajes naturales y excursiones de día completo, aquí encontrarás las mejores opciones y cómo organizar cada visita.",
  heroImageAlt: "Vista editorial de rutas por la Costa del Sol desde Fuengirola",
  backLabel: "Volver a la guía",
  quickTitle: "¿Qué excursión elegir?",
  quickNote: "Estas selecciones son recomendaciones editoriales, no rankings absolutos.",
  quickPicks: [
    { label: "La más cercana", destinationId: "mijas-pueblo", reason: "Mijas Pueblo" },
    { label: "La más fácil sin coche", destinationId: "malaga", reason: "Málaga" },
    { label: "La mejor para familias", destinationId: "benalmadena", reason: "Benalmádena" },
    { label: "La más monumental", destinationId: "ronda", reason: "Ronda" },
    { label: "La combinación más bonita", destinationId: "nerja-frigiliana", reason: "Nerja y Frigiliana" },
    { label: "La más aventurera", destinationId: "caminito-del-rey", reason: "Caminito del Rey" },
    { label: "La mejor para un día completo", destinationId: "granada", reason: "Granada" },
    { label: "La más diferente", destinationId: "gibraltar", reason: "Gibraltar" }
  ],
  navTitle: "Filtrar excursiones",
  filterLabels: { all: "Todas", "half-day": "Medio día", "full-day": "Día completo", "without-car": "Sin coche", family: "Con niños", culture: "Cultura", nature: "Naturaleza", coast: "Costa", booking: "Reserva previa" },
  comparisonTitle: "Comparativa rápida",
  comparisonHeaders: { destination: "Destino", duration: "Duración recomendada", transport: "Transporte", ideal: "Ideal para", booking: "Reserva" },
  labels: { duration: "Duración", transport: "Transporte", plan: "Tipo de plan", children: "Niños", booking: "Reserva", difficulty: "Dificultad", details: "Ver detalles", official: "Información oficial", verified: "Verificado", yes: "Sí", no: "No", recommended: "Recomendable", depends: "Depende", note: "Nota" },
  durationLabels: { "half-day": "Medio día", "full-day": "Día completo", "long-full-day": "Día completo largo" },
  transportLabels: { train: "Tren", bus: "Autobús", car: "Coche", taxi: "Taxi", "organized-tour": "Excursión organizada" },
  categoryLabels: { culture: "Cultura", nature: "Naturaleza", family: "Familias", coast: "Costa", village: "Pueblo blanco", adventure: "Aventura" },
  difficultyLabels: { easy: "Fácil", moderate: "Moderada", demanding: "Exigente" },
  officialLabels: { tourism: "Turismo oficial", transport: "Transporte oficial", tickets: "Entradas oficiales", access: "Normas de acceso" },
  texts: {
    mijasTitle: "Mijas Pueblo", mijasIntro: "Pueblo blanco cercano, miradores y calles encaladas para una primera escapada sencilla.", mijasDescription: "Buena opción de media jornada para pasear sin prisa, tomar algo y disfrutar de vistas hacia la costa.",
    malagaTitle: "Málaga", malagaIntro: "La excursión cultural más cómoda sin coche, con tren y un centro histórico muy caminable.", malagaDescription: "Ideal para combinar Alcazaba, Catedral, museos, calle Larios, Soho y un paseo por el puerto.",
    benalmadenaTitle: "Benalmádena", benalmadenaIntro: "Plan flexible para familias, puerto, playa, Parque de la Paloma y teleférico si está operativo.", benalmadenaDescription: "Funciona como medio día tranquilo o día completo combinando Arroyo de la Miel, costa y Puerto Marina.",
    marbellaTitle: "Marbella", marbellaIntro: "Casco antiguo, paseo marítimo y Puerto Banús como complemento opcional.", marbellaDescription: "Marbella no es solo lujo: el centro histórico y la Plaza de los Naranjos son la parte más agradable para una visita cultural.",
    rondaTitle: "Ronda", rondaIntro: "Paisaje e historia alrededor del Tajo y el Puente Nuevo.", rondaDescription: "Excursión de día completo con miradores, casco histórico, patrimonio y calles con desniveles.",
    nerjaTitle: "Nerja y Frigiliana", nerjaIntro: "Costa, Balcón de Europa, Cuevas de Nerja y uno de los pueblos blancos más bonitos de la Axarquía.", nerjaDescription: "Una combinación muy completa para un día con coche o excursión organizada, alternando costa y pueblo blanco.",
    caminitoTitle: "Caminito del Rey", caminitoIntro: "Pasarelas, desfiladero y naturaleza con entrada, horario y normas oficiales.", caminitoDescription: "Espectacular, pero requiere planificación, calzado adecuado y revisar condiciones de acceso antes de reservar.",
    granadaTitle: "Granada y la Alhambra", granadaIntro: "Excursión larga para ver uno de los conjuntos monumentales más importantes de España.", granadaDescription: "Conviene reservar Alhambra con antelación y no intentar verlo todo en una sola jornada.",
    gibraltarTitle: "Gibraltar", gibraltarIntro: "Una excursión diferente con frontera, la Roca, Main Street y miradores.", gibraltarDescription: "Plan de día completo largo que requiere margen y comprobar requisitos de entrada según nacionalidad.",
    esteponaTitle: "Estepona", esteponaIntro: "Casco antiguo florido, paseo marítimo y ambiente más tranquilo que otras zonas de la costa.", esteponaDescription: "Alternativa agradable a Marbella para pasear, fotografiar calles blancas y terminar junto al mar."
  },
  editorials: {
    "mijas-pueblo": { badge: "La excursión más cercana", title: "Mijas Pueblo", paragraphs: ["Mijas Pueblo está situado en la sierra y conserva una imagen clásica de pueblo blanco andaluz: calles encaladas, miradores, plazas pequeñas, tiendas artesanales y vistas abiertas hacia la costa.", "Es una excursión muy agradecida si solo tienes una mañana o quieres empezar por algo fácil desde Fuengirola."], seeTitle: "Qué ver", see: ["Centro histórico", "Miradores", "Calles tradicionales", "Plaza principal", "Ermitas y espacios históricos confirmados", "Comercios artesanales"], arrivalTitle: "Cómo llegar", arrival: ["Autobús, taxi o coche. Consulta siempre horarios vigentes antes de salir."], timeTitle: "Cuánto tiempo dedicar", time: "Entre una mañana y media jornada suele ser suficiente para recorrer el centro con tranquilidad, tomar algo y disfrutar de los miradores.", idealTitle: "Ideal para", ideal: ["Parejas", "Familias", "Fotografía", "Paseo tranquilo", "Primera excursión desde Fuengirola"], tipTitle: "Consejo Stay Fuengirola", tip: "Ve sin prisa y lleva calzado cómodo: las calles son bonitas, pero algunas tienen pendiente." },
    malaga: { badge: "La más fácil sin coche", title: "Málaga", paragraphs: ["Málaga se organiza muy bien como excursión de día completo desde Fuengirola. El tren facilita la visita sin coche y el centro histórico concentra muchos puntos de interés.", "Para una primera visita, combina casco histórico, uno o dos monumentos y final de tarde junto al puerto."], seeTitle: "Qué ver", see: ["Alcazaba", "Teatro Romano", "Catedral", "Calle Larios", "Museo Picasso u otros museos", "Soho", "Muelle Uno y puerto"], arrivalTitle: "Cómo llegar", arrival: ["El tren Cercanías es la opción más práctica. Consulta horarios vigentes en Renfe."], timeTitle: "Plan sugerido", time: "Mañana en el centro histórico, mediodía para almorzar y tarde para museo, Muelle Uno o paseo por el puerto.", idealTitle: "Ideal para", ideal: ["Cultura", "Gastronomía", "Museos", "Viajar sin coche"], tipTitle: "Consejo Stay Fuengirola", tip: "No intentes verlo todo. Málaga se disfruta más eligiendo bien dos o tres paradas principales." },
    benalmadena: { title: "Benalmádena", paragraphs: ["Benalmádena se adapta bien a familias, parejas o una visita ligera. Tiene varias zonas con personalidad distinta: Benalmádena Pueblo, Arroyo de la Miel, Puerto Marina y la costa.", "Puedes convertirla en medio día o ampliarla si combinas parque, puerto, playa y teleférico cuando esté operativo."], seeTitle: "Posibles planes", see: ["Puerto Marina", "Benalmádena Pueblo", "Parque de la Paloma", "Teleférico si está operativo", "Costa y restauración"], arrivalTitle: "Cómo llegar", arrival: ["Tren para Arroyo de la Miel; bus, taxi o coche para combinar otras zonas."], timeTitle: "Cuánto tiempo dedicar", time: "Medio día para un plan concreto o día completo si quieres combinar varias zonas.", idealTitle: "Ideal para", ideal: ["Familias", "Puerto", "Paseo", "Actividades variadas"], tipTitle: "Consejo Stay Fuengirola", tip: "Elige una zona principal para no perder tiempo moviéndote entre puntos." },
    marbella: { title: "Marbella", paragraphs: ["Marbella no es únicamente Puerto Banús. Para una visita agradable, el casco antiguo suele ser la mejor primera parada: Plaza de los Naranjos, calles blancas, pequeñas tiendas y terrazas.", "Después puedes añadir paseo marítimo, playa o Puerto Banús si te interesa el ambiente del puerto deportivo y las firmas premium."], seeTitle: "Qué ver", see: ["Casco antiguo", "Plaza de los Naranjos", "Paseo marítimo", "Puerto Banús opcional", "Tiendas y terrazas"], arrivalTitle: "Cómo llegar", arrival: ["Autobús, coche o excursión organizada. Revisa horarios si viajas sin coche."], timeTitle: "Cuánto tiempo dedicar", time: "Día completo si combinas casco antiguo y costa; medio día si solo quieres una visita breve.", idealTitle: "Ideal para", ideal: ["Casco antiguo", "Paseo", "Compras", "Costa"], tipTitle: "Consejo Stay Fuengirola", tip: "Prioriza el casco antiguo. Puerto Banús funciona mejor como complemento, no como único motivo de la visita." },
    ronda: { badge: "Paisaje e historia", title: "Ronda", paragraphs: ["Ronda es una de las excursiones más monumentales desde Fuengirola. Su ubicación sobre el Tajo, el Puente Nuevo y los miradores justifican dedicarle un día completo.", "Las calles tienen desniveles y conviene caminar con calma para apreciar el paisaje desde varios puntos."], seeTitle: "Qué ver", see: ["Puente Nuevo", "Miradores", "Casco antiguo", "Puente Viejo", "Baños Árabes si están operativos", "Plaza de toros como visita patrimonial opcional"], arrivalTitle: "Cómo llegar", arrival: ["Coche, autobús o excursión organizada. Las carreteras pueden ser sinuosas."], timeTitle: "Duración", time: "Día completo.", idealTitle: "Ideal para", ideal: ["Historia", "Paisajes", "Fotografía", "Gastronomía"], tipTitle: "Consejo Stay Fuengirola", tip: "Lleva calzado cómodo y deja tiempo para varios miradores, no solo para el Puente Nuevo." },
    "nerja-frigiliana": { badge: "Costa y pueblo blanco", title: "Nerja y Frigiliana", paragraphs: ["Nerja y Frigiliana combinan mar, miradores y pueblo blanco en una excursión de día completo. Nerja aporta costa, Balcón de Europa y Cuevas; Frigiliana suma calles blancas, cuestas, artesanía y vistas.", "Es mejor hacerla con coche o excursión organizada para unir ambos lugares sin depender de demasiadas conexiones."], seeTitle: "Qué ver", see: ["Balcón de Europa", "Centro de Nerja", "Cuevas de Nerja", "Frigiliana", "Miradores", "Calles blancas"], arrivalTitle: "Cómo organizar el día", arrival: ["Mañana en Cuevas o centro de Nerja, mediodía para almorzar y tarde en Frigiliana."], timeTitle: "Reserva", time: "Consulta y reserva las Cuevas de Nerja en la web oficial si quieres incluirlas.", idealTitle: "Ideal para", ideal: ["Costa", "Pueblo blanco", "Fotografía", "Familias con buena planificación"], tipTitle: "Consejo Stay Fuengirola", tip: "Frigiliana tiene cuestas: mejor visitarla con calma y evitar las horas de más calor." },
    "caminito-del-rey": { badge: "Naturaleza y aventura", title: "Caminito del Rey", paragraphs: ["El Caminito del Rey es una de las excursiones más espectaculares, pero también una de las que más planificación requiere. La visita tiene entrada, horario asignado, normas de acceso y posibles cierres por meteorología.", "No es un simple paseo: hay altura, pasarelas, necesidad de caminar y puede no ser adecuado para personas con vértigo."], seeTitle: "Antes de reservar", see: ["Entrada oficial", "Normas de acceso", "Calzado apropiado", "Condiciones meteorológicas", "Restricciones para menores", "Cómo llegar"], arrivalTitle: "Transporte", arrival: ["Coche, excursión organizada o transporte público con planificación. No improvises la ruta el mismo día."], timeTitle: "Menores y dificultad", time: "La información oficial indica que los menores de 8 años no pueden acceder. Consulta siempre las normas oficiales para menores, identificación, acompañamiento y accesibilidad.", idealTitle: "Ideal para", ideal: ["Naturaleza", "Aventura", "Adultos sin vértigo", "Viajeros que reservan con antelación"], tipTitle: "Consejo Stay Fuengirola", tip: "Reserva solo después de revisar las normas oficiales. Lleva agua, protección solar y calzado sujeto al pie." },
    granada: { badge: "Excursión de día completo largo", title: "Granada y la Alhambra", paragraphs: ["Granada merece más de un día, pero puede hacerse como excursión larga si eliges bien. La Alhambra, el Albaicín, los miradores, la Catedral y el centro histórico compiten por tu tiempo.", "La Alhambra necesita reserva anticipada en muchas fechas y no conviene confiar en entradas de último minuto."], seeTitle: "Qué ver", see: ["Alhambra", "Albaicín", "Miradores", "Catedral", "Centro histórico", "Gastronomía"], arrivalTitle: "Cómo llegar", arrival: ["Coche, autobús o excursión organizada. Es una jornada larga desde la Costa del Sol."], timeTitle: "Recomendación editorial", time: "Si es tu primera visita, centra el día en la Alhambra y el Albaicín. Intentar abarcar toda la ciudad puede resultar agotador.", idealTitle: "Ideal para", ideal: ["Historia", "Patrimonio", "Alhambra", "Viajeros culturales"], tipTitle: "Consejo Stay Fuengirola", tip: "Reserva la Alhambra en la plataforma oficial y revisa el horario de acceso a Palacios Nazaríes." },
    gibraltar: { badge: "Una excursión diferente", title: "Gibraltar", paragraphs: ["Gibraltar ofrece una experiencia distinta: territorio británico, Main Street, la Roca, miradores y naturaleza. También implica frontera, posible espera y requisitos de entrada.", "Los requisitos pueden variar según nacionalidad, así que conviene revisar fuentes oficiales antes de desplazarse."], seeTitle: "Qué ver", see: ["Main Street", "La Roca", "Miradores", "Reserva natural", "Teleférico o tour si está operativo", "Ambiente británico"], arrivalTitle: "Cómo llegar", arrival: ["Coche, autobús con conexión o excursión organizada. Deja margen por posibles esperas en frontera."], timeTitle: "Documentación", time: "Los requisitos de entrada pueden variar según la nacionalidad. Consulta siempre la información oficial antes de salir.", idealTitle: "Ideal para", ideal: ["Experiencia diferente", "Miradores", "Compras", "Familias con documentación revisada"], tipTitle: "Consejo Stay Fuengirola", tip: "No planifiques otra visita importante el mismo día: la frontera puede alterar los tiempos." },
    estepona: { title: "Estepona", paragraphs: ["Estepona es una alternativa más tranquila a Marbella, con casco antiguo cuidado, calles decoradas, plazas, paseo marítimo y puerto.", "Funciona bien para una jornada relajada de paseo, fotos, compras pequeñas y comida junto al mar."], seeTitle: "Qué ver", see: ["Casco antiguo", "Calles con macetas", "Plazas", "Paseo marítimo", "Puerto", "Murales y rutas urbanas"], arrivalTitle: "Cómo llegar", arrival: ["Coche o autobús. Revisa horarios vigentes si viajas sin coche."], timeTitle: "Cuánto tiempo dedicar", time: "Día completo tranquilo o medio día largo si solo visitas el centro y el paseo marítimo.", idealTitle: "Ideal para", ideal: ["Parejas", "Paseo", "Fotografía", "Gastronomía", "Costa tranquila"], tipTitle: "Consejo Stay Fuengirola", tip: "Combina el casco antiguo con el paseo marítimo para tener una visita equilibrada." }
  },
  secondaryTitle: "Más ideas para descubrir la provincia",
  secondaryIntro: "Estas ideas quedan preparadas para futuras guías o rutas más concretas. Antes de planificarlas, conviene comprobar transporte y horarios vigentes.",
  secondaryIdeas: {
    antequera: { title: "Antequera", text: "Patrimonio, centro histórico y posible combinación con El Torcal si organizas bien el día." },
    torremolinos: { title: "Torremolinos", text: "Costa cercana y fácil en tren para un paseo diferente." },
    "la-cala-de-mijas": { title: "La Cala de Mijas", text: "Plan costero tranquilo con paseo junto al mar." },
    casares: { title: "Casares", text: "Pueblo blanco muy fotogénico, mejor con coche." },
    "puerto-de-la-duquesa": { title: "Puerto de la Duquesa", text: "Puerto deportivo y costa occidental, recomendable con coche." },
    "el-torcal": { title: "El Torcal de Antequera", text: "Naturaleza y formaciones rocosas; revisa meteorología y accesos." },
    "ronda-wineries": { title: "Bodegas de Ronda", text: "Plan específico para amantes del vino, normalmente con reserva." },
    "coastal-route": { title: "Ruta costera", text: "Una jornada flexible combinando varios puntos del litoral." },
    "white-villages": { title: "Pueblos blancos", text: "Ideas para una ruta más lenta por el interior de Málaga." }
  },
  noCarTitle: "Excursiones fáciles sin coche",
  noCarGroups: [
    { title: "Muy sencillas", items: ["Málaga", "Benalmádena", "Torremolinos"] },
    { title: "Posibles con autobús o combinación", items: ["Mijas Pueblo", "Marbella", "Estepona"] },
    { title: "Mejor con coche o excursión organizada", items: ["Ronda", "Nerja y Frigiliana", "Caminito del Rey", "Granada", "Gibraltar"] }
  ],
  kidsTitle: "Mejores excursiones con niños",
  kidsText: "Benalmádena, Mijas Pueblo, Málaga, Nerja, Marbella y Estepona suelen ser opciones más manejables. Para Caminito del Rey hay restricciones oficiales de edad y condiciones específicas; no todas las excursiones son cómodas con carrito, calor o trayectos largos.",
  timeBlocksTitle: "Excursiones según el tiempo disponible",
  timeBlocks: [
    { title: "Si solo tienes una mañana", items: ["Mijas Pueblo", "Benalmádena", "Málaga en visita breve"] },
    { title: "Si tienes un día completo", items: ["Málaga", "Marbella", "Ronda", "Nerja y Frigiliana", "Estepona", "Caminito del Rey"] },
    { title: "Si no te importa regresar tarde", items: ["Granada", "Gibraltar"] }
  ],
  seasonTitle: "Cuándo hacer cada excursión",
  seasons: [
    { title: "Verano", text: "Prioriza salidas tempranas, lleva agua y protección solar, y evita caminar por pueblos interiores en las horas de más calor." },
    { title: "Primavera y otoño", text: "Suelen ser buenas épocas para caminar por Ronda, Caminito del Rey y pueblos blancos." },
    { title: "Invierno", text: "Málaga, Marbella, Mijas y Granada pueden seguir siendo interesantes; revisa meteorología y horarios antes de salir." }
  ],
  plannerTitle: "Elige tu excursión",
  plannerIntro: "Responde de forma rápida y la guía filtrará opciones útiles. Es una ayuda editorial, no una reserva.",
  plannerQuestions: { car: "¿Tienes coche?", duration: "¿Cuánto tiempo tienes?", interest: "¿Qué prefieres?" },
  plannerOptions: { yes: "Sí", no: "No", "half-day": "Medio día", "full-day": "Un día", "long-full-day": "Día completo largo", culture: "Cultura", nature: "Naturaleza", coast: "Costa", family: "Familias" },
  plannerEmpty: "No hay una coincidencia perfecta. Prueba con más tiempo o sin limitar el transporte.",
  mapTitle: "Mapa general de excursiones",
  mapAria: "Mapa con excursiones desde Fuengirola",
  mapOrigin: "Fuengirola · origen aproximado",
  mapPopupDuration: "Duración recomendada",
  mapPopupLink: "Ver bloque",
  tipsTitle: "Consejos Stay Fuengirola",
  tips: ["Comprueba horarios y entradas antes de salir.", "Reserva con antelación las atracciones más demandadas.", "Evita intentar combinar demasiados destinos en un solo día.", "En verano, sal temprano y lleva agua.", "Para Ronda, Nerja, Granada o Gibraltar, valora una excursión organizada si no quieres conducir.", "Consulta el tiempo antes de visitar espacios naturales.", "No dependas de horarios antiguos publicados en blogs."],
  officialTitle: "Enlaces oficiales y fuentes útiles",
  officialNote: "Priorizamos fuentes oficiales o fiables. Los enlaces se abren en una pestaña nueva.",
  changingNote: "Los horarios, accesos, precios y condiciones pueden cambiar. Consulta siempre las fuentes oficiales antes de organizar la excursión.",
  faqTitle: "Preguntas frecuentes",
  faqs: [
    { question: "¿Cuál es la mejor excursión desde Fuengirola?", answer: "Depende del viaje: Mijas Pueblo es la más cercana, Málaga la más fácil sin coche, Ronda una de las más monumentales y Caminito del Rey una de las más espectaculares si reservas con antelación." },
    { question: "¿Qué excursiones se pueden hacer sin coche?", answer: "Málaga y Benalmádena son las más sencillas. Mijas Pueblo, Marbella y Estepona pueden hacerse con autobús o combinación, revisando horarios vigentes." },
    { question: "¿Se puede ir a Málaga en tren desde Fuengirola?", answer: "Sí. La línea C1 conecta Fuengirola con Málaga. Consulta siempre horarios y paradas actualizadas en Renfe." },
    { question: "¿Cuánto tiempo hace falta para visitar Mijas Pueblo?", answer: "Una mañana o media jornada suele ser suficiente para pasear por el centro, disfrutar de los miradores y tomar algo." },
    { question: "¿Se puede visitar Ronda en un día?", answer: "Sí, pero es una excursión de día completo y conviene organizar bien transporte, calzado y tiempos." },
    { question: "¿Merece la pena combinar Nerja y Frigiliana?", answer: "Sí, especialmente con coche o excursión organizada. Combina costa, Balcón de Europa, Cuevas de Nerja y pueblo blanco." },
    { question: "¿Es necesario reservar el Caminito del Rey?", answer: "Sí, debe consultarse disponibilidad y reservarse mediante la plataforma oficial. También hay que revisar normas de acceso." },
    { question: "¿Pueden entrar niños al Caminito del Rey?", answer: "La información oficial indica que los menores de 8 años no pueden acceder. Para menores, identificación y acompañamiento, consulta siempre las normas oficiales." },
    { question: "¿Se puede visitar Granada desde Fuengirola en un día?", answer: "Sí, pero es un día largo. Si es tu primera visita, prioriza Alhambra y Albaicín." },
    { question: "¿Qué documentación hace falta para ir a Gibraltar?", answer: "Depende de la nacionalidad y la normativa vigente. Consulta siempre fuentes oficiales antes de desplazarte." },
    { question: "¿Cuáles son las mejores excursiones con niños?", answer: "Benalmádena, Mijas Pueblo, Málaga, Nerja, Marbella y Estepona suelen ser opciones más cómodas. Evita planes largos o con restricciones sin revisar antes." }
  ],
  relatedTitle: "También te puede interesar",
  related: [
    { key: "thingsToDo", title: "Qué hacer en Fuengirola", text: "Planes dentro de la ciudad para alternar con excursiones." },
    { key: "beaches", title: "Playas", text: "Playas cercanas al Apartamento Veramar." },
    { key: "restaurants", title: "Restaurantes", text: "Dónde comer durante tu estancia." },
    { key: "shopping", title: "Compras", text: "Miramar, centro y compras prácticas." },
    { key: "bioparc", title: "Bioparc Fuengirola", text: "Una visita familiar muy cerca del apartamento." },
    { key: "airport", title: "Cómo llegar desde el aeropuerto", text: "Tren, taxi, VTC y coche de alquiler." }
  ],
  ctaTitle: "Fuengirola es una base cómoda para descubrir la Costa del Sol",
  ctaText: "Consulta la disponibilidad del Apartamento Veramar y organiza tus excursiones desde una ubicación bien conectada.",
  ctaButton: "Ver disponibilidad en Booking",
  schemaAbout: ["excursiones desde Fuengirola", "Costa del Sol", "Mijas", "Málaga", "Ronda", "Caminito del Rey", "Granada", "Gibraltar"]
};

function translate(base: ExcursionsGuideContent, patch: Partial<ExcursionsGuideContent>): ExcursionsGuideContent {
  return { ...base, ...patch };
}

const en = translate(es, {
  metaTitle: "Day Trips from Fuengirola: Mijas, Malaga, Ronda and More | Stay Fuengirola",
  metaDescription: "Discover the best day trips from Fuengirola: Mijas, Malaga, Marbella, Ronda, Nerja, Caminito del Rey, Granada and Gibraltar.",
  breadcrumbGuide: "Fuengirola Guide",
  breadcrumbArticle: "Day trips from Fuengirola",
  kicker: "Fuengirola Guide · Day Trips",
  h1: "The best day trips from Fuengirola",
  intro: "Fuengirola is an excellent base for exploring the Costa del Sol and some of Andalusia's most memorable places. From nearby white villages to historic cities, natural landscapes and full-day excursions, this guide helps you choose and plan each visit.",
  heroImageAlt: "Editorial view of Costa del Sol day trips from Fuengirola",
  backLabel: "Back to the guide",
  quickTitle: "Which day trip should you choose?",
  quickNote: "These selections are editorial recommendations, not absolute rankings.",
  quickPicks: es.quickPicks.map((item) => ({ ...item, label: ({ "La más cercana": "Closest", "La más fácil sin coche": "Easiest without a car", "La mejor para familias": "Best for families", "La más monumental": "Most monumental", "La combinación más bonita": "Best combination", "La más aventurera": "Most adventurous", "La mejor para un día completo": "Best full-day trip", "La más diferente": "Most different" } as Record<string, string>)[item.label] ?? item.label })),
  navTitle: "Filter day trips",
  filterLabels: { all: "All", "half-day": "Half day", "full-day": "Full day", "without-car": "No car", family: "With children", culture: "Culture", nature: "Nature", coast: "Coast", booking: "Advance booking" },
  comparisonTitle: "Quick comparison",
  comparisonHeaders: { destination: "Destination", duration: "Recommended time", transport: "Transport", ideal: "Best for", booking: "Booking" },
  labels: { duration: "Duration", transport: "Transport", plan: "Type of plan", children: "Children", booking: "Booking", difficulty: "Difficulty", details: "View details", official: "Official information", verified: "Verified", yes: "Yes", no: "No", recommended: "Recommended", depends: "Depends", note: "Note" },
  durationLabels: { "half-day": "Half day", "full-day": "Full day", "long-full-day": "Long full day" },
  transportLabels: { train: "Train", bus: "Bus", car: "Car", taxi: "Taxi", "organized-tour": "Organized tour" },
  categoryLabels: { culture: "Culture", nature: "Nature", family: "Families", coast: "Coast", village: "White village", adventure: "Adventure" },
  difficultyLabels: { easy: "Easy", moderate: "Moderate", demanding: "Demanding" },
  officialLabels: { tourism: "Official tourism", transport: "Official transport", tickets: "Official tickets", access: "Access rules" },
  texts: {
    mijasTitle: "Mijas Pueblo", mijasIntro: "Nearby white village, viewpoints and whitewashed streets for an easy first trip.", mijasDescription: "A good half-day option for a relaxed walk, a drink and views towards the coast.",
    malagaTitle: "Malaga", malagaIntro: "The easiest cultural day trip without a car, with train access and a walkable historic centre.", malagaDescription: "Ideal for combining the Alcazaba, Cathedral, museums, Calle Larios, Soho and the harbour.",
    benalmadenaTitle: "Benalmadena", benalmadenaIntro: "Flexible family plan with marina, beach, Parque de la Paloma and cable car if operating.", benalmadenaDescription: "Works as a relaxed half day or full day combining Arroyo de la Miel, coast and Puerto Marina.",
    marbellaTitle: "Marbella", marbellaIntro: "Old town, seafront and Puerto Banus as an optional extra.", marbellaDescription: "Marbella is not only luxury: the old town and Plaza de los Naranjos are the nicest part for a cultural visit.",
    rondaTitle: "Ronda", rondaIntro: "Landscape and history around the gorge and Puente Nuevo.", rondaDescription: "A full-day trip with viewpoints, old town, heritage and streets with slopes.",
    nerjaTitle: "Nerja and Frigiliana", nerjaIntro: "Coast, Balcony of Europe, Nerja Caves and one of Axarquia's prettiest white villages.", nerjaDescription: "A very complete day by car or organized tour, mixing coast and white village.",
    caminitoTitle: "Caminito del Rey", caminitoIntro: "Walkways, gorge and nature with tickets, assigned time and official rules.", caminitoDescription: "Spectacular, but it requires planning, proper footwear and checking access conditions before booking.",
    granadaTitle: "Granada and the Alhambra", granadaIntro: "A long trip to one of Spain's most important monumental sites.", granadaDescription: "Book the Alhambra in advance and avoid trying to see the whole city in one day.",
    gibraltarTitle: "Gibraltar", gibraltarIntro: "A different day trip with border crossing, the Rock, Main Street and viewpoints.", gibraltarDescription: "A long full-day plan that needs margin and entry requirements checked for your nationality.",
    esteponaTitle: "Estepona", esteponaIntro: "Flower-filled old town, seafront and a calmer mood than some coastal resorts.", esteponaDescription: "A pleasant alternative to Marbella for walking, photos and ending by the sea."
  },
  secondaryTitle: "More ideas for exploring the province",
  secondaryIntro: "These ideas are prepared for future guides or more specific routes. Check current transport and opening information before planning them.",
  noCarTitle: "Easy day trips without a car",
  kidsTitle: "Best day trips with children",
  kidsText: "Benalmadena, Mijas Pueblo, Malaga, Nerja, Marbella and Estepona are usually easier choices. Caminito del Rey has official age restrictions and access rules; not every trip is comfortable with a buggy, heat or long transfers.",
  timeBlocksTitle: "Day trips by available time",
  seasonTitle: "When to do each day trip",
  plannerTitle: "Choose your day trip",
  plannerIntro: "Answer quickly and the guide will filter useful options. This is editorial help, not a booking tool.",
  plannerQuestions: { car: "Do you have a car?", duration: "How much time do you have?", interest: "What do you prefer?" },
  plannerOptions: { yes: "Yes", no: "No", "half-day": "Half day", "full-day": "One day", "long-full-day": "Long full day", culture: "Culture", nature: "Nature", coast: "Coast", family: "Families" },
  plannerEmpty: "No perfect match. Try allowing more time or removing the transport limit.",
  mapTitle: "General day-trip map",
  mapAria: "Map of day trips from Fuengirola",
  mapOrigin: "Fuengirola · approximate origin",
  mapPopupDuration: "Recommended time",
  mapPopupLink: "View section",
  tipsTitle: "Stay Fuengirola tips",
  officialTitle: "Official links and useful sources",
  officialNote: "We prioritise official or reliable sources. External links open in a new tab.",
  changingNote: "Times, access, prices and conditions can change. Always check official sources before organizing your day trip.",
  faqTitle: "Frequently asked questions",
  relatedTitle: "You may also be interested in",
  ctaTitle: "Fuengirola is a comfortable base for exploring the Costa del Sol",
  ctaText: "Check availability at Apartamento Veramar and plan your day trips from a well-connected location.",
  ctaButton: "Check availability on Booking",
  schemaAbout: ["day trips from Fuengirola", "Costa del Sol", "Mijas", "Malaga", "Ronda", "Caminito del Rey", "Granada", "Gibraltar"]
});

const fi = translate(en, {
  metaTitle: "Päiväretket Fuengirolasta: Mijas, Malaga, Ronda ja muuta | Stay Fuengirola",
  metaDescription: "Tutustu parhaisiin päiväretkiin Fuengirolasta: Mijas, Malaga, Marbella, Ronda, Nerja, Caminito del Rey, Granada ja Gibraltar.",
  breadcrumbGuide: "Fuengirola-opas",
  breadcrumbArticle: "Päiväretket Fuengirolasta",
  kicker: "Fuengirola-opas · Päiväretket",
  h1: "Parhaat päiväretket Fuengirolasta",
  intro: "Fuengirola on erinomainen tukikohta Costa del Solin ja Andalusian kiinnostavien kohteiden tutkimiseen. Tässä oppaassa vertailet valkoisia kyliä, historiallisia kaupunkeja, luontokohteita ja pidempiä päiväretkiä käytännöllisesti.",
  backLabel: "Takaisin oppaaseen",
  quickTitle: "Minkä päiväretken valita?",
  quickNote: "Nämä valinnat ovat toimituksellisia suosituksia, eivät ehdottomia ranking-listoja.",
  navTitle: "Suodata retkiä",
  filterLabels: { all: "Kaikki", "half-day": "Puoli päivää", "full-day": "Koko päivä", "without-car": "Ilman autoa", family: "Lasten kanssa", culture: "Kulttuuri", nature: "Luonto", coast: "Rannikko", booking: "Varaus etukäteen" },
  labels: { ...en.labels, duration: "Kesto", transport: "Kulku", plan: "Retkityyppi", children: "Lapset", booking: "Varaus", difficulty: "Vaativuus", details: "Katso tiedot", official: "Virallinen tieto", verified: "Tarkistettu", yes: "Kyllä", no: "Ei", recommended: "Suositeltava", depends: "Riippuu", note: "Huomio" },
  durationLabels: { "half-day": "Puoli päivää", "full-day": "Koko päivä", "long-full-day": "Pitkä kokopäivä" },
  transportLabels: { train: "Juna", bus: "Bussi", car: "Auto", taxi: "Taksi", "organized-tour": "Järjestetty retki" },
  categoryLabels: { culture: "Kulttuuri", nature: "Luonto", family: "Perheet", coast: "Rannikko", village: "Valkoinen kylä", adventure: "Seikkailu" },
  difficultyLabels: { easy: "Helppo", moderate: "Kohtalainen", demanding: "Vaativa" },
  officialLabels: { tourism: "Virallinen matkailu", transport: "Virallinen liikenne", tickets: "Viralliset liput", access: "Pääsysäännöt" },
  secondaryTitle: "Lisää ideoita provinssin tutkimiseen",
  noCarTitle: "Helpot retket ilman autoa",
  kidsTitle: "Parhaat retket lasten kanssa",
  timeBlocksTitle: "Retket käytettävissä olevan ajan mukaan",
  seasonTitle: "Milloin retket kannattaa tehdä",
  plannerTitle: "Valitse retki",
  plannerQuestions: { car: "Onko sinulla auto?", duration: "Kuinka paljon aikaa sinulla on?", interest: "Mitä haluat mieluiten?" },
  plannerOptions: { yes: "Kyllä", no: "Ei", "half-day": "Puoli päivää", "full-day": "Yksi päivä", "long-full-day": "Pitkä kokopäivä", culture: "Kulttuuri", nature: "Luonto", coast: "Rannikko", family: "Perheet" },
  mapTitle: "Yleiskartta päiväretkistä",
  tipsTitle: "Stay Fuengirolan vinkit",
  officialTitle: "Viralliset linkit ja hyödylliset lähteet",
  faqTitle: "Usein kysytyt kysymykset",
  relatedTitle: "Saatat olla kiinnostunut myös",
  ctaTitle: "Fuengirola on mukava tukikohta Costa del Solin tutkimiseen",
  ctaButton: "Tarkista saatavuus Bookingissa"
});

const sv = translate(en, {
  metaTitle: "Dagsutflykter från Fuengirola: Mijas, Malaga, Ronda och mer | Stay Fuengirola",
  metaDescription: "Upptäck de bästa dagsutflykterna från Fuengirola: Mijas, Malaga, Marbella, Ronda, Nerja, Caminito del Rey, Granada och Gibraltar.",
  breadcrumbGuide: "Fuengirola-guide",
  breadcrumbArticle: "Dagsutflykter från Fuengirola",
  kicker: "Fuengirola-guide · Dagsutflykter",
  h1: "De bästa dagsutflykterna från Fuengirola",
  intro: "Fuengirola är en utmärkt bas för att upptäcka Costa del Sol och några av Andalusiens mest minnesvärda platser. Här jämför du vita byar, historiska städer, naturupplevelser och längre dagsutflykter på ett praktiskt sätt.",
  backLabel: "Tillbaka till guiden",
  quickTitle: "Vilken dagsutflykt ska du välja?",
  quickNote: "Urvalet är redaktionella rekommendationer, inte absoluta rankningar.",
  navTitle: "Filtrera utflykter",
  filterLabels: { all: "Alla", "half-day": "Halvdag", "full-day": "Heldag", "without-car": "Utan bil", family: "Med barn", culture: "Kultur", nature: "Natur", coast: "Kust", booking: "Förbokning" },
  labels: { ...en.labels, duration: "Tid", transport: "Transport", plan: "Typ av plan", children: "Barn", booking: "Bokning", difficulty: "Svårighet", details: "Visa detaljer", official: "Officiell information", verified: "Kontrollerad", yes: "Ja", no: "Nej", recommended: "Rekommenderas", depends: "Beror på", note: "Obs" },
  durationLabels: { "half-day": "Halvdag", "full-day": "Heldag", "long-full-day": "Lång heldag" },
  transportLabels: { train: "Tåg", bus: "Buss", car: "Bil", taxi: "Taxi", "organized-tour": "Organiserad utflykt" },
  categoryLabels: { culture: "Kultur", nature: "Natur", family: "Familjer", coast: "Kust", village: "Vit by", adventure: "Äventyr" },
  difficultyLabels: { easy: "Lätt", moderate: "Måttlig", demanding: "Krävande" },
  officialLabels: { tourism: "Officiell turism", transport: "Officiell transport", tickets: "Officiella biljetter", access: "Tillträdesregler" },
  secondaryTitle: "Fler idéer för att upptäcka provinsen",
  noCarTitle: "Enkla utflykter utan bil",
  kidsTitle: "Bästa dagsutflykterna med barn",
  timeBlocksTitle: "Utflykter efter tillgänglig tid",
  seasonTitle: "När passar varje utflykt bäst?",
  plannerTitle: "Välj din utflykt",
  plannerQuestions: { car: "Har du bil?", duration: "Hur mycket tid har du?", interest: "Vad föredrar du?" },
  plannerOptions: { yes: "Ja", no: "Nej", "half-day": "Halvdag", "full-day": "En dag", "long-full-day": "Lång heldag", culture: "Kultur", nature: "Natur", coast: "Kust", family: "Familjer" },
  mapTitle: "Översiktskarta över dagsutflykter",
  tipsTitle: "Stay Fuengirola tips",
  officialTitle: "Officiella länkar och användbara källor",
  faqTitle: "Vanliga frågor",
  relatedTitle: "Du kanske också är intresserad av",
  ctaTitle: "Fuengirola är en bekväm bas för att upptäcka Costa del Sol",
  ctaButton: "Kontrollera tillgänglighet på Booking"
});

const no = translate(en, {
  metaTitle: "Dagsturer fra Fuengirola: Mijas, Malaga, Ronda og mer | Stay Fuengirola",
  metaDescription: "Oppdag de beste dagsturene fra Fuengirola: Mijas, Malaga, Marbella, Ronda, Nerja, Caminito del Rey, Granada og Gibraltar.",
  breadcrumbGuide: "Fuengirola-guide",
  breadcrumbArticle: "Dagsturer fra Fuengirola",
  kicker: "Fuengirola-guide · Dagsturer",
  h1: "De beste dagsturene fra Fuengirola",
  intro: "Fuengirola er en utmerket base for å oppdage Costa del Sol og noen av Andalusias mest minneverdige steder. Her sammenligner du hvite landsbyer, historiske byer, naturopplevelser og lengre dagsturer på en praktisk måte.",
  backLabel: "Tilbake til guiden",
  quickTitle: "Hvilken dagstur bør du velge?",
  quickNote: "Disse valgene er redaksjonelle anbefalinger, ikke absolutte rangeringer.",
  navTitle: "Filtrer turer",
  filterLabels: { all: "Alle", "half-day": "Halv dag", "full-day": "Hel dag", "without-car": "Uten bil", family: "Med barn", culture: "Kultur", nature: "Natur", coast: "Kyst", booking: "Forhåndsbestilling" },
  labels: { ...en.labels, duration: "Varighet", transport: "Transport", plan: "Type plan", children: "Barn", booking: "Bestilling", difficulty: "Vanskelighet", details: "Se detaljer", official: "Offisiell informasjon", verified: "Kontrollert", yes: "Ja", no: "Nei", recommended: "Anbefales", depends: "Avhenger", note: "Merk" },
  durationLabels: { "half-day": "Halv dag", "full-day": "Hel dag", "long-full-day": "Lang heldag" },
  transportLabels: { train: "Tog", bus: "Buss", car: "Bil", taxi: "Taxi", "organized-tour": "Organisert tur" },
  categoryLabels: { culture: "Kultur", nature: "Natur", family: "Familier", coast: "Kyst", village: "Hvit landsby", adventure: "Eventyr" },
  difficultyLabels: { easy: "Lett", moderate: "Moderat", demanding: "Krevende" },
  officialLabels: { tourism: "Offisiell turisme", transport: "Offisiell transport", tickets: "Offisielle billetter", access: "Adgangsregler" },
  secondaryTitle: "Flere ideer for å oppdage provinsen",
  noCarTitle: "Enkle dagsturer uten bil",
  kidsTitle: "Beste dagsturer med barn",
  timeBlocksTitle: "Dagsturer etter tilgjengelig tid",
  seasonTitle: "Når passer hver dagstur best?",
  plannerTitle: "Velg dagstur",
  plannerQuestions: { car: "Har du bil?", duration: "Hvor mye tid har du?", interest: "Hva foretrekker du?" },
  plannerOptions: { yes: "Ja", no: "Nei", "half-day": "Halv dag", "full-day": "En dag", "long-full-day": "Lang heldag", culture: "Kultur", nature: "Natur", coast: "Kyst", family: "Familier" },
  mapTitle: "Oversiktskart over dagsturer",
  tipsTitle: "Stay Fuengirola-tips",
  officialTitle: "Offisielle lenker og nyttige kilder",
  faqTitle: "Vanlige spørsmål",
  relatedTitle: "Du kan også være interessert i",
  ctaTitle: "Fuengirola er en praktisk base for å oppdage Costa del Sol",
  ctaButton: "Sjekk tilgjengelighet på Booking"
});

export const excursionsGuideContent: Record<Locale, ExcursionsGuideContent> = { es, en, fi, sv, no };
