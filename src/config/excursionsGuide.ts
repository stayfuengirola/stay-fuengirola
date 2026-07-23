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

function applyEnglishExcursions() {
  const common = { see: "What to see", arrival: "How to get there", time: "Recommended time", ideal: "Best for", tip: "Stay Fuengirola tip" };
  const editorials = Object.fromEntries(Object.entries({
    "mijas-pueblo": "mijas",
    malaga: "malaga",
    benalmadena: "benalmadena",
    marbella: "marbella",
    ronda: "ronda",
    "nerja-frigiliana": "nerja",
    "caminito-del-rey": "caminito",
    granada: "granada",
    gibraltar: "gibraltar",
    estepona: "estepona"
  }).map(([id, prefix]) => [id, {
    badge: "Recommended",
    title: en.texts[`${prefix}Title`],
    paragraphs: [en.texts[`${prefix}Intro`], en.texts[`${prefix}Description`]],
    seeTitle: common.see,
    see: [en.texts[`${prefix}Title`], "Costa del Sol", "Walkable areas"],
    arrivalTitle: common.arrival,
    arrival: ["Check current transport links and official information before leaving."],
    timeTitle: common.time,
    time: "Plan at a relaxed pace and leave some margin for transport.",
    idealTitle: common.ideal,
    ideal: id === "caminito-del-rey" ? ["Nature", "Adventure"] : ["Couples", "Families"],
    tipTitle: common.tip,
    tip: "Choose one main destination for the day so the trip feels comfortable rather than rushed."
  }]));
  Object.assign(en, {
    editorials,
    secondaryIdeas: {
      antequera: { title: "Antequera", text: "Heritage, old town and possible combination with El Torcal if planned carefully." },
      torremolinos: { title: "Torremolinos", text: "A nearby coastal town that is easy by train." },
      "la-cala-de-mijas": { title: "La Cala de Mijas", text: "A relaxed coastal plan with a seaside walk." },
      casares: { title: "Casares", text: "A very photogenic white village, best with a car." },
      "puerto-de-la-duquesa": { title: "Puerto de la Duquesa", text: "Marina and western Costa del Sol, recommended by car." },
      "el-torcal": { title: "El Torcal de Antequera", text: "Nature and rock formations; check weather and access." },
      "ronda-wineries": { title: "Ronda wineries", text: "A specific plan for wine lovers, usually with reservation." },
      "coastal-route": { title: "Coastal route", text: "A flexible day combining several places along the coast." },
      "white-villages": { title: "White villages", text: "Ideas for a slower route through inland Malaga." }
    },
    noCarGroups: [
      { title: "Very easy", items: ["Malaga", "Benalmadena", "Torremolinos"] },
      { title: "Possible by bus or combination", items: ["Mijas Pueblo", "Marbella", "Estepona"] },
      { title: "Better by car or organized tour", items: ["Ronda", "Nerja and Frigiliana", "Caminito del Rey", "Granada", "Gibraltar"] }
    ],
    timeBlocks: [
      { title: "If you only have a morning", items: ["Mijas Pueblo", "Benalmadena", "A short Malaga visit"] },
      { title: "If you have a full day", items: ["Malaga", "Marbella", "Ronda", "Nerja and Frigiliana", "Estepona", "Caminito del Rey"] },
      { title: "If returning late is fine", items: ["Granada", "Gibraltar"] }
    ],
    seasons: [
      { title: "Summer", text: "Start early, bring water and sun protection, and avoid inland villages during the hottest hours." },
      { title: "Spring and autumn", text: "Often the best seasons for walking in Ronda, Caminito del Rey and white villages." },
      { title: "Winter", text: "Malaga, Marbella, Mijas and Granada can still be interesting; check weather and opening times." }
    ],
    tips: ["Check schedules and tickets before leaving.", "Book popular attractions in advance.", "Do not try to combine too many places in one day.", "In summer, start early and bring water.", "For Ronda, Nerja, Granada or Gibraltar, consider an organized tour if you do not want to drive.", "Check the weather before nature trips.", "Do not rely on old timetables from blogs."],
    faqs: [
      { question: "What is the best day trip from Fuengirola?", answer: "It depends on your trip: Mijas Pueblo is closest, Malaga is easiest without a car, Ronda is one of the most monumental and Caminito del Rey is spectacular if booked in advance." },
      { question: "Which day trips can be done without a car?", answer: "Malaga and Benalmadena are the easiest. Mijas Pueblo, Marbella and Estepona can work by bus or a combination if you check current schedules." },
      { question: "Can you go from Fuengirola to Malaga by train?", answer: "Yes. The C1 line connects Fuengirola with Malaga. Check updated times with Renfe." },
      { question: "How long do you need for Mijas Pueblo?", answer: "A morning or half day is usually enough." },
      { question: "Can Ronda be visited in one day?", answer: "Yes, but it is a full-day trip and needs good planning." },
      { question: "Is it worth combining Nerja and Frigiliana?", answer: "Yes, especially by car or organized tour." },
      { question: "Do you need to book Caminito del Rey?", answer: "Yes. Check availability and book through the official platform." },
      { question: "Can children enter Caminito del Rey?", answer: "Official information says children under 8 cannot enter. Always check the rules." },
      { question: "Can Granada be visited from Fuengirola in one day?", answer: "Yes, but it is a long day. Prioritise the Alhambra and Albaicin on a first visit." },
      { question: "What documents are needed for Gibraltar?", answer: "It depends on nationality and current rules. Always check official sources." },
      { question: "Which day trips are best with children?", answer: "Benalmadena, Mijas Pueblo, Malaga, Nerja, Marbella and Estepona are usually the easiest." }
    ],
    related: [
      { key: "thingsToDo", title: "Things to do in Fuengirola", text: "Local plans to combine with day trips." },
      { key: "beaches", title: "Beaches", text: "Beaches close to Apartamento Veramar." },
      { key: "restaurants", title: "Restaurants", text: "Where to eat during your stay." },
      { key: "shopping", title: "Shopping", text: "Miramar, town centre and practical shopping." },
      { key: "bioparc", title: "Bioparc Fuengirola", text: "A family visit close to the apartment." },
      { key: "airport", title: "From the airport", text: "Train, taxi, VTC and rental car." }
    ]
  });
}

applyEnglishExcursions();

const nordicExcursionText = {
  fi: {
    mijasTitle: "Mijas Pueblo", mijasIntro: "Läheinen valkoinen kylä, näköalapaikkoja ja helppo ensimmäinen retki.", mijasDescription: "Hyvä puolipäiväretki rauhalliseen kävelyyn, kahvitaukoon ja rannikon maisemiin.",
    malagaTitle: "Malaga", malagaIntro: "Helpoin kulttuuriretki ilman autoa, junayhteys ja käveltävä keskusta.", malagaDescription: "Sopii Alcazaban, katedraalin, museoiden, Calle Lariosin, Sohon ja sataman yhdistämiseen.",
    benalmadenaTitle: "Benalmadena", benalmadenaIntro: "Joustava perhepäivä sataman, rannan, Parque de la Paloman ja mahdollisen köysiradan kanssa.", benalmadenaDescription: "Toimii rauhallisena puolipäivänä tai kokonaisena päivänä, jos yhdistät Arroyo de la Mielin, rannikon ja Puerto Marinan.",
    marbellaTitle: "Marbella", marbellaIntro: "Vanha kaupunki, rantakatu ja Puerto Banus halutessasi lisänä.", marbellaDescription: "Marbella ei ole pelkkää luksusta: vanha kaupunki ja Plaza de los Naranjos ovat miellyttävin osa kulttuurikäyntiä.",
    rondaTitle: "Ronda", rondaIntro: "Maisemia ja historiaa Tajo-rotkon ja Puente Nuevon ympärillä.", rondaDescription: "Kokopäiväretki näköalapaikoille, vanhaan kaupunkiin ja historiallisille kaduille, joissa on korkeuseroja.",
    nerjaTitle: "Nerja ja Frigiliana", nerjaIntro: "Rannikko, Balcon de Europa, Nerjan luolat ja yksi Axarquian kauneimmista valkoisista kylistä.", nerjaDescription: "Monipuolinen päivä autolla tai järjestetyllä retkellä, jossa yhdistyvät meri ja valkoinen kylä.",
    caminitoTitle: "Caminito del Rey", caminitoIntro: "Rotko, kävelysillat ja luonto lipulla, aikavarauksella ja virallisilla säännöillä.", caminitoDescription: "Upea kohde, mutta vaatii suunnittelua, sopivat kengät ja pääsyehtojen tarkistamisen ennen varausta.",
    granadaTitle: "Granada ja Alhambra", granadaIntro: "Pitkä retki yhteen Espanjan tärkeimmistä monumenttikokonaisuuksista.", granadaDescription: "Varaa Alhambra ajoissa ja vältä yrittämästä nähdä koko kaupunkia yhdessä päivässä.",
    gibraltarTitle: "Gibraltar", gibraltarIntro: "Erilainen päiväretki rajanylityksellä, Kalliolla, Main Streetillä ja näköalapaikoilla.", gibraltarDescription: "Pitkä kokopäiväretki, johon kannattaa jättää väljyyttä ja tarkistaa oman kansalaisuuden maahantuloehdot.",
    esteponaTitle: "Estepona", esteponaIntro: "Kukkiva vanha kaupunki, rantakatu ja rauhallisempi tunnelma kuin monissa rannikon kohteissa.", esteponaDescription: "Mukava vaihtoehto Marbellalle kävelyyn, valokuviin ja päivään meren äärellä."
  },
  sv: {
    mijasTitle: "Mijas Pueblo", mijasIntro: "Närliggande vit by med utsiktsplatser och enkla promenader.", mijasDescription: "Ett bra halvdagval för en lugn promenad, något att dricka och vyer mot kusten.",
    malagaTitle: "Malaga", malagaIntro: "Den enklaste kulturutflykten utan bil, med tåg och en lättgången historisk stadskärna.", malagaDescription: "Passar för Alcazaba, katedralen, museer, Calle Larios, Soho och hamnen.",
    benalmadenaTitle: "Benalmadena", benalmadenaIntro: "Flexibelt familjeupplägg med marina, strand, Parque de la Paloma och linbana när den är i drift.", benalmadenaDescription: "Fungerar som lugn halvdag eller heldag om du kombinerar Arroyo de la Miel, kusten och Puerto Marina.",
    marbellaTitle: "Marbella", marbellaIntro: "Gamla stan, strandpromenaden och Puerto Banus som frivilligt tillägg.", marbellaDescription: "Marbella är inte bara lyx: gamla stan och Plaza de los Naranjos är den trevligaste delen för ett kulturellt besök.",
    rondaTitle: "Ronda", rondaIntro: "Landskap och historia kring Tajo-ravinen och Puente Nuevo.", rondaDescription: "Heldagsutflykt med utsiktsplatser, gamla stan, kulturarv och gator med nivåskillnader.",
    nerjaTitle: "Nerja och Frigiliana", nerjaIntro: "Kust, Balcon de Europa, Nerjagrottorna och en av Axarquias vackraste vita byar.", nerjaDescription: "En komplett dag med bil eller organiserad utflykt där kust och vit by kombineras.",
    caminitoTitle: "Caminito del Rey", caminitoIntro: "Spänger, ravin och natur med biljett, tilldelad tid och officiella regler.", caminitoDescription: "Spektakulärt, men kräver planering, bra skor och kontroll av tillträdesregler före bokning.",
    granadaTitle: "Granada och Alhambra", granadaIntro: "En lång utflykt till ett av Spaniens viktigaste monumentområden.", granadaDescription: "Boka Alhambra i förväg och försök inte hinna med hela staden på en dag.",
    gibraltarTitle: "Gibraltar", gibraltarIntro: "En annorlunda dagsutflykt med gräns, Klippan, Main Street och utsiktsplatser.", gibraltarDescription: "En lång heldag som kräver marginal och kontroll av inresekrav för din nationalitet.",
    esteponaTitle: "Estepona", esteponaIntro: "Blommande gamla stan, strandpromenad och lugnare känsla än många andra kustorter.", esteponaDescription: "Ett behagligt alternativ till Marbella för promenad, fotografering och en avslutning vid havet."
  },
  no: {
    mijasTitle: "Mijas Pueblo", mijasIntro: "Nærliggende hvit landsby med utsiktspunkter og en enkel første utflukt.", mijasDescription: "Et godt halvdagvalg for en rolig spasertur, noe å drikke og utsikt mot kysten.",
    malagaTitle: "Malaga", malagaIntro: "Den enkleste kulturutflukten uten bil, med tog og et sentrum som er lett å gå i.", malagaDescription: "Passer godt for Alcazaba, katedralen, museer, Calle Larios, Soho og havnen.",
    benalmadenaTitle: "Benalmadena", benalmadenaIntro: "Fleksibel familietur med marina, strand, Parque de la Paloma og taubane når den er i drift.", benalmadenaDescription: "Fungerer som en rolig halvdag eller hel dag hvis du kombinerer Arroyo de la Miel, kysten og Puerto Marina.",
    marbellaTitle: "Marbella", marbellaIntro: "Gamlebyen, strandpromenaden og Puerto Banus som valgfritt tillegg.", marbellaDescription: "Marbella er ikke bare luksus: gamlebyen og Plaza de los Naranjos er den hyggeligste delen for et kulturelt besøk.",
    rondaTitle: "Ronda", rondaIntro: "Landskap og historie rundt Tajo-kløften og Puente Nuevo.", rondaDescription: "Heldagstur med utsiktspunkter, gamleby, kulturarv og gater med nivåforskjeller.",
    nerjaTitle: "Nerja og Frigiliana", nerjaIntro: "Kyst, Balcon de Europa, Nerja-grottene og en av Axarquias vakreste hvite landsbyer.", nerjaDescription: "En innholdsrik dag med bil eller organisert tur, der kyst og hvit landsby kombineres.",
    caminitoTitle: "Caminito del Rey", caminitoIntro: "Gangbroer, kløft og natur med billett, fast tidspunkt og offisielle regler.", caminitoDescription: "Spektakulært, men krever planlegging, gode sko og kontroll av adgangsreglene før bestilling.",
    granadaTitle: "Granada og Alhambra", granadaIntro: "En lang tur til et av Spanias viktigste monumentområder.", granadaDescription: "Bestill Alhambra i god tid og ikke prøv å se hele byen på én dag.",
    gibraltarTitle: "Gibraltar", gibraltarIntro: "En annerledes dagstur med grensepassering, Klippen, Main Street og utsiktspunkter.", gibraltarDescription: "En lang heldagstur som krever god margin og kontroll av innreisekrav etter nasjonalitet.",
    esteponaTitle: "Estepona", esteponaIntro: "Blomstrende gamleby, strandpromenade og roligere stemning enn mange andre kyststeder.", esteponaDescription: "Et behagelig alternativ til Marbella for spasertur, bilder og en avslutning ved sjøen."
  }
} as const;

const nordicExcursionUi = {
  fi: {
    comparisonHeaders: { destination: "Kohde", duration: "Suositeltu aika", transport: "Kulku", ideal: "Sopii", booking: "Varaus" },
    secondaryIntro: "Nämä ideat on jätetty valmiiksi tulevia oppaita varten. Tarkista aina ajantasaiset yhteydet ja aukiolot ennen suunnittelua.",
    secondaryIdeas: {
      antequera: { title: "Antequera", text: "Historiaa, keskusta ja mahdollinen yhdistelmä El Torcalin kanssa hyvällä suunnittelulla." },
      torremolinos: { title: "Torremolinos", text: "Läheinen rannikkokohde, johon on helppo mennä junalla." },
      "la-cala-de-mijas": { title: "La Cala de Mijas", text: "Rauhallinen rannikkosuunnitelma meren äärellä." },
      casares: { title: "Casares", text: "Erittäin kuvauksellinen valkoinen kylä, paras autolla." },
      "puerto-de-la-duquesa": { title: "Puerto de la Duquesa", text: "Ven satama ja läntinen rannikko, suositeltava autolla." },
      "el-torcal": { title: "El Torcal de Antequera", text: "Luontoa ja kivimuodostelmia; tarkista sää ja pääsy." },
      "ronda-wineries": { title: "Rondan viinitilat", text: "Erityinen suunnitelma viinin ystäville, yleensä varauksella." },
      "coastal-route": { title: "Rannikkoreitti", text: "Joustava päivä useiden rannikkokohteiden välillä." },
      "white-villages": { title: "Valkoiset kylät", text: "Ideoita hitaampaan reittiin Malagan sisämaassa." }
    },
    noCarGroups: [
      { title: "Erittäin helppoja", items: ["Malaga", "Benalmadena", "Torremolinos"] },
      { title: "Mahdollisia bussilla tai yhdistelmällä", items: ["Mijas Pueblo", "Marbella", "Estepona"] },
      { title: "Parempi autolla tai järjestetyllä retkellä", items: ["Ronda", "Nerja ja Frigiliana", "Caminito del Rey", "Granada", "Gibraltar"] }
    ],
    kidsText: "Benalmadena, Mijas Pueblo, Malaga, Nerja, Marbella ja Estepona ovat yleensä helpompia lasten kanssa. Caminito del Reyllä on virallisia ikärajoja ja pääsyehtoja; kaikki retket eivät sovi vaunujen, kuumuuden tai pitkien matkojen kanssa.",
    timeBlocks: [
      { title: "Jos sinulla on vain aamu", items: ["Mijas Pueblo", "Benalmadena", "Lyhyt käynti Malagassa"] },
      { title: "Jos sinulla on koko päivä", items: ["Malaga", "Marbella", "Ronda", "Nerja ja Frigiliana", "Estepona", "Caminito del Rey"] },
      { title: "Jos myöhäinen paluu ei haittaa", items: ["Granada", "Gibraltar"] }
    ],
    seasons: [
      { title: "Kesä", text: "Lähde aikaisin, ota vettä ja aurinkosuoja mukaan ja vältä sisämaan kyliä kuumimpaan aikaan." },
      { title: "Kevät ja syksy", text: "Usein parhaat ajat kävelyyn Rondassa, Caminito del Reyllä ja valkoisissa kylissä." },
      { title: "Talvi", text: "Malaga, Marbella, Mijas ja Granada voivat olla hyviä myös talvella; tarkista sää ja aukiolot." }
    ],
    plannerIntro: "Vastaa nopeasti, niin opas suodattaa sopivia vaihtoehtoja. Tämä on toimituksellinen apu, ei varausjärjestelmä.",
    plannerEmpty: "Täydellistä osumaa ei löytynyt. Kokeile pidempää aikaa tai poista kulkurajoitus.",
    mapAria: "Kartta päiväretkistä Fuengirolasta", mapOrigin: "Fuengirola · likimääräinen lähtöalue", mapPopupDuration: "Suositeltu aika", mapPopupLink: "Näytä kohta",
    tips: ["Tarkista aikataulut ja liput ennen lähtöä.", "Varaa suosituimmat kohteet ajoissa.", "Älä yritä yhdistää liian montaa kohdetta yhteen päivään.", "Kesällä lähde aikaisin ja ota vettä mukaan.", "Rondaan, Nerjaan, Granadaan tai Gibraltarille järjestetty retki voi olla hyvä vaihtoehto ilman ajamista.", "Tarkista sää ennen luontokohteita.", "Älä luota vanhoihin blogiaikatauluihin."],
    officialNote: "Käytämme ensisijaisesti virallisia tai luotettavia lähteitä. Ulkoiset linkit avautuvat uuteen välilehteen.",
    changingNote: "Aikataulut, pääsy, hinnat ja ehdot voivat muuttua. Tarkista aina viralliset lähteet ennen retkeä.",
    faqs: [
      { question: "Mikä on paras päiväretki Fuengirolasta?", answer: "Se riippuu matkasta: Mijas Pueblo on lähin, Malaga helpoin ilman autoa, Ronda monumentaalinen ja Caminito del Rey näyttävä, jos varaat ajoissa." },
      { question: "Mitä retkiä voi tehdä ilman autoa?", answer: "Malaga ja Benalmadena ovat helpoimmat. Mijas Pueblo, Marbella ja Estepona onnistuvat bussilla tai yhdistelmällä, kun tarkistat aikataulut." },
      { question: "Voiko Fuengirolasta mennä junalla Malagaan?", answer: "Kyllä. C1-linja yhdistää Fuengirolan Malagaan. Tarkista ajantasaiset aikataulut Renfeltä." },
      { question: "Kuinka kauan Mijas Puebloon kannattaa varata?", answer: "Aamu tai puolipäivä riittää yleensä keskustaan, näköaloihin ja taukoon." },
      { question: "Voiko Rondassa käydä päivässä?", answer: "Kyllä, mutta se on kokopäiväretki ja vaatii hyvän suunnittelun." },
      { question: "Kannattaako Nerja ja Frigiliana yhdistää?", answer: "Kyllä, erityisesti autolla tai järjestetyllä retkellä." },
      { question: "Pitääkö Caminito del Rey varata?", answer: "Kyllä. Tarkista saatavuus ja varaa viralliselta alustalta." },
      { question: "Pääsevätkö lapset Caminito del Reylle?", answer: "Virallinen tieto kertoo, että alle 8-vuotiaat eivät pääse. Tarkista aina säännöt." },
      { question: "Voiko Granadassa käydä Fuengirolasta päivässä?", answer: "Kyllä, mutta päivä on pitkä. Ensikäynnillä keskity Alhambraan ja Albaiciniin." },
      { question: "Mitä asiakirjoja Gibraltarille tarvitaan?", answer: "Se riippuu kansalaisuudesta ja voimassa olevista säännöistä. Tarkista viralliset lähteet." },
      { question: "Mitkä retket sopivat parhaiten lapsille?", answer: "Benalmadena, Mijas Pueblo, Malaga, Nerja, Marbella ja Estepona ovat yleensä helpoimpia." }
    ],
    related: [
      { key: "thingsToDo", title: "Mitä tehdä Fuengirolassa", text: "Kaupungin omat suunnitelmat retkien rinnalle." },
      { key: "beaches", title: "Rannat", text: "Rantoja lähellä Apartamento Veramaria." },
      { key: "restaurants", title: "Ravintolat", text: "Missä syödä oleskelun aikana." },
      { key: "shopping", title: "Ostokset", text: "Miramar, keskusta ja käytännön ostokset." },
      { key: "bioparc", title: "Bioparc Fuengirola", text: "Perhekäynti lähellä asuntoa." },
      { key: "airport", title: "Saapuminen lentoasemalta", text: "Juna, taksi, VTC ja vuokra-auto." }
    ],
    ctaText: "Tarkista Apartamento Veramarin saatavuus ja suunnittele retket hyvin yhteydessä olevasta sijainnista.",
    schemaAbout: ["päiväretket Fuengirolasta", "Costa del Sol", "Mijas", "Malaga", "Ronda", "Caminito del Rey", "Granada", "Gibraltar"]
  },
  sv: {
    comparisonHeaders: { destination: "Mål", duration: "Rekommenderad tid", transport: "Transport", ideal: "Passar för", booking: "Bokning" },
    secondaryIntro: "Dessa idéer är förberedda för framtida guider. Kontrollera alltid aktuella förbindelser och öppettider innan du planerar.",
    noCarGroups: [
      { title: "Mycket enkla", items: ["Malaga", "Benalmadena", "Torremolinos"] },
      { title: "Möjliga med buss eller kombination", items: ["Mijas Pueblo", "Marbella", "Estepona"] },
      { title: "Bäst med bil eller organiserad tur", items: ["Ronda", "Nerja och Frigiliana", "Caminito del Rey", "Granada", "Gibraltar"] }
    ],
    kidsText: "Benalmadena, Mijas Pueblo, Malaga, Nerja, Marbella och Estepona är oftast smidigare med barn. Caminito del Rey har officiella åldersregler och tillträdesvillkor.",
    timeBlocks: [
      { title: "Om du bara har en morgon", items: ["Mijas Pueblo", "Benalmadena", "Kort besök i Malaga"] },
      { title: "Om du har en heldag", items: ["Malaga", "Marbella", "Ronda", "Nerja och Frigiliana", "Estepona", "Caminito del Rey"] },
      { title: "Om sen hemkomst går bra", items: ["Granada", "Gibraltar"] }
    ],
    seasons: [
      { title: "Sommar", text: "Starta tidigt, ta med vatten och solskydd och undvik inlandet under dagens varmaste timmar." },
      { title: "Vår och höst", text: "Ofta bäst för promenader i Ronda, Caminito del Rey och vita byar." },
      { title: "Vinter", text: "Malaga, Marbella, Mijas och Granada kan fortfarande vara mycket intressanta; kontrollera väder och öppettider." }
    ],
    plannerIntro: "Svara snabbt så filtrerar guiden fram användbara alternativ. Det är redaktionell hjälp, inte en bokning.",
    plannerEmpty: "Ingen perfekt träff. Prova mer tid eller ta bort transportbegränsningen.",
    mapAria: "Karta över dagsutflykter från Fuengirola", mapOrigin: "Fuengirola · ungefärlig startpunkt", mapPopupDuration: "Rekommenderad tid", mapPopupLink: "Visa avsnitt",
    tips: ["Kontrollera tider och biljetter innan du åker.", "Boka populära sevärdheter i förväg.", "Försök inte hinna med för många mål samma dag.", "På sommaren: åk tidigt och ta med vatten.", "Överväg organiserad tur till Ronda, Nerja, Granada eller Gibraltar om du inte vill köra.", "Kontrollera vädret före naturutflykter.", "Lita inte på gamla tider från bloggar."],
    officialNote: "Vi prioriterar officiella eller pålitliga källor. Externa länkar öppnas i ny flik.",
    changingNote: "Tider, tillträde, priser och villkor kan ändras. Kontrollera alltid officiella källor innan du planerar.",
    faqs: [
      { question: "Vilken är den bästa dagsutflykten från Fuengirola?", answer: "Det beror på resan: Mijas Pueblo är närmast, Malaga enklast utan bil, Ronda mest monumental och Caminito del Rey mycket spektakulär med förbokning." },
      { question: "Vilka utflykter kan göras utan bil?", answer: "Malaga och Benalmadena är enklast. Mijas Pueblo, Marbella och Estepona kan fungera med buss eller kombination." },
      { question: "Kan man åka tåg från Fuengirola till Malaga?", answer: "Ja. C1-linjen förbinder Fuengirola med Malaga. Kontrollera tider hos Renfe." },
      { question: "Hur lång tid behövs för Mijas Pueblo?", answer: "En morgon eller halvdag brukar räcka." },
      { question: "Kan man besöka Ronda på en dag?", answer: "Ja, men det är en heldagsutflykt och kräver bra planering." },
      { question: "Är Nerja och Frigiliana värda att kombinera?", answer: "Ja, särskilt med bil eller organiserad tur." },
      { question: "Måste Caminito del Rey bokas?", answer: "Ja. Kontrollera tillgänglighet och boka via den officiella plattformen." },
      { question: "Får barn gå Caminito del Rey?", answer: "Officiell information anger att barn under 8 år inte får tillträde. Kontrollera alltid reglerna." },
      { question: "Kan man besöka Granada från Fuengirola på en dag?", answer: "Ja, men dagen blir lång. Fokusera på Alhambra och Albaicin första gången." },
      { question: "Vilka dokument krävs för Gibraltar?", answer: "Det beror på nationalitet och aktuella regler. Kontrollera officiella källor." },
      { question: "Vilka utflykter passar bäst med barn?", answer: "Benalmadena, Mijas Pueblo, Malaga, Nerja, Marbella och Estepona är oftast lättast." }
    ],
    related: [
      { key: "thingsToDo", title: "Saker att göra i Fuengirola", text: "Planer i staden att kombinera med utflykter." },
      { key: "beaches", title: "Stränder", text: "Stränder nära Apartamento Veramar." },
      { key: "restaurants", title: "Restauranger", text: "Var du kan äta under vistelsen." },
      { key: "shopping", title: "Shopping", text: "Miramar, centrum och praktiska inköp." },
      { key: "bioparc", title: "Bioparc Fuengirola", text: "Ett familjebesök nära lägenheten." },
      { key: "airport", title: "Från flygplatsen", text: "Tåg, taxi, VTC och hyrbil." }
    ],
    ctaText: "Kontrollera tillgänglighet för Apartamento Veramar och planera dina utflykter från ett väl anslutet läge.",
    schemaAbout: ["dagsutflykter från Fuengirola", "Costa del Sol", "Mijas", "Malaga", "Ronda", "Caminito del Rey", "Granada", "Gibraltar"]
  },
  no: {
    comparisonHeaders: { destination: "Mål", duration: "Anbefalt tid", transport: "Transport", ideal: "Passer for", booking: "Bestilling" },
    secondaryIntro: "Disse ideene er klargjort for fremtidige guider. Sjekk alltid aktuelle forbindelser og åpningstider før du planlegger.",
    noCarGroups: [
      { title: "Svært enkle", items: ["Malaga", "Benalmadena", "Torremolinos"] },
      { title: "Mulige med buss eller kombinasjon", items: ["Mijas Pueblo", "Marbella", "Estepona"] },
      { title: "Best med bil eller organisert tur", items: ["Ronda", "Nerja og Frigiliana", "Caminito del Rey", "Granada", "Gibraltar"] }
    ],
    kidsText: "Benalmadena, Mijas Pueblo, Malaga, Nerja, Marbella og Estepona er vanligvis enklere med barn. Caminito del Rey har offisielle aldersregler og adgangsvilkår.",
    timeBlocks: [
      { title: "Hvis du bare har en morgen", items: ["Mijas Pueblo", "Benalmadena", "Kort besøk i Malaga"] },
      { title: "Hvis du har en hel dag", items: ["Malaga", "Marbella", "Ronda", "Nerja og Frigiliana", "Estepona", "Caminito del Rey"] },
      { title: "Hvis sen retur går fint", items: ["Granada", "Gibraltar"] }
    ],
    seasons: [
      { title: "Sommer", text: "Dra tidlig, ta med vann og solbeskyttelse, og unngå innlandet i de varmeste timene." },
      { title: "Vår og høst", text: "Ofte best for turer i Ronda, Caminito del Rey og hvite landsbyer." },
      { title: "Vinter", text: "Malaga, Marbella, Mijas og Granada kan fortsatt være interessante; sjekk vær og åpningstider." }
    ],
    plannerIntro: "Svar raskt, så filtrerer guiden frem nyttige alternativer. Dette er redaksjonell hjelp, ikke en bestilling.",
    plannerEmpty: "Ingen perfekt match. Prøv mer tid eller fjern transportbegrensningen.",
    mapAria: "Kart over dagsturer fra Fuengirola", mapOrigin: "Fuengirola · omtrentlig startområde", mapPopupDuration: "Anbefalt tid", mapPopupLink: "Vis avsnitt",
    tips: ["Sjekk tider og billetter før du drar.", "Bestill populære attraksjoner i god tid.", "Ikke prøv å kombinere for mange steder på én dag.", "Om sommeren bør du dra tidlig og ta med vann.", "Vurder organisert tur til Ronda, Nerja, Granada eller Gibraltar hvis du ikke vil kjøre.", "Sjekk været før naturutflukter.", "Ikke stol på gamle rutetider fra blogger."],
    officialNote: "Vi prioriterer offisielle eller pålitelige kilder. Eksterne lenker åpnes i ny fane.",
    changingNote: "Tider, adgang, priser og vilkår kan endre seg. Sjekk alltid offisielle kilder før du planlegger.",
    faqs: [
      { question: "Hva er den beste dagsturen fra Fuengirola?", answer: "Det avhenger av reisen: Mijas Pueblo er nærmest, Malaga enklest uten bil, Ronda mest monumental og Caminito del Rey svært spektakulær med forhåndsbestilling." },
      { question: "Hvilke utflukter kan gjøres uten bil?", answer: "Malaga og Benalmadena er enklest. Mijas Pueblo, Marbella og Estepona kan fungere med buss eller kombinasjon." },
      { question: "Kan man ta tog fra Fuengirola til Malaga?", answer: "Ja. C1-linjen forbinder Fuengirola med Malaga. Sjekk tider hos Renfe." },
      { question: "Hvor lang tid trengs for Mijas Pueblo?", answer: "En morgen eller halv dag er vanligvis nok." },
      { question: "Kan man besøke Ronda på én dag?", answer: "Ja, men det er en heldagstur som krever god planlegging." },
      { question: "Er Nerja og Frigiliana verdt å kombinere?", answer: "Ja, særlig med bil eller organisert tur." },
      { question: "Må Caminito del Rey bestilles?", answer: "Ja. Sjekk tilgjengelighet og bestill via den offisielle plattformen." },
      { question: "Kan barn gå Caminito del Rey?", answer: "Offisiell informasjon sier at barn under 8 år ikke har adgang. Sjekk alltid reglene." },
      { question: "Kan man besøke Granada fra Fuengirola på én dag?", answer: "Ja, men dagen blir lang. Prioriter Alhambra og Albaicin første gang." },
      { question: "Hvilke dokumenter trengs for Gibraltar?", answer: "Det avhenger av nasjonalitet og gjeldende regler. Sjekk offisielle kilder." },
      { question: "Hvilke utflukter passer best med barn?", answer: "Benalmadena, Mijas Pueblo, Malaga, Nerja, Marbella og Estepona er vanligvis enklest." }
    ],
    related: [
      { key: "thingsToDo", title: "Ting å gjøre i Fuengirola", text: "Planer i byen som kan kombineres med utflukter." },
      { key: "beaches", title: "Strender", text: "Strender nær Apartamento Veramar." },
      { key: "restaurants", title: "Restauranter", text: "Hvor du kan spise under oppholdet." },
      { key: "shopping", title: "Shopping", text: "Miramar, sentrum og praktiske innkjøp." },
      { key: "bioparc", title: "Bioparc Fuengirola", text: "Et familiebesøk nær leiligheten." },
      { key: "airport", title: "Fra flyplassen", text: "Tog, taxi, VTC og leiebil." }
    ],
    ctaText: "Sjekk tilgjengelighet for Apartamento Veramar og planlegg utfluktene fra en godt tilkoblet beliggenhet.",
    schemaAbout: ["dagsturer fra Fuengirola", "Costa del Sol", "Mijas", "Malaga", "Ronda", "Caminito del Rey", "Granada", "Gibraltar"]
  }
} as const;

function applyExcursionLocale(locale: "fi" | "sv" | "no") {
  const ui = nordicExcursionUi[locale];
  const text = nordicExcursionText[locale] as Record<string, string>;
  const common = {
    fi: { see: "Mitä nähdä", arrival: "Miten saapua", time: "Suositeltu aika", ideal: "Sopii", tip: "Stay Fuengirolan vinkki", badge: "Suositus", transport: "Tarkista aina ajantasaiset yhteydet ja viralliset tiedot ennen lähtöä.", timeText: "Varaa aikaa rauhalliseen käyntiin ja jätä joustoa siirtymiin.", tipText: "Valitse yksi pääkohde päivälle, niin retki pysyy mukavana ja kiireettömänä." },
    sv: { see: "Vad du kan se", arrival: "Så tar du dig dit", time: "Rekommenderad tid", ideal: "Passar för", tip: "Stay Fuengirola tips", badge: "Rekommendation", transport: "Kontrollera alltid aktuella förbindelser och officiell information före avresa.", timeText: "Planera med lugn takt och lämna marginal för transport.", tipText: "Välj ett huvudmål per dag så blir utflykten mer behaglig." },
    no: { see: "Hva du kan se", arrival: "Slik kommer du dit", time: "Anbefalt tid", ideal: "Passer for", tip: "Stay Fuengirola-tips", badge: "Anbefaling", transport: "Sjekk alltid aktuelle forbindelser og offisiell informasjon før avreise.", timeText: "Planlegg i rolig tempo og legg inn litt margin for transport.", tipText: "Velg ett hovedmål per dag, så blir utflukten mer behagelig." }
  }[locale];
  const seeItems = {
    fi: {
      caminito: ["Caminito del Rey", "Viralliset säännöt", "Luontomaisemat"],
      default: (title: string) => [title, "Costa del Sol", "Kävelyalueet"]
    },
    sv: {
      caminito: ["Caminito del Rey", "Officiella regler", "Naturlandskap"],
      default: (title: string) => [title, "Costa del Sol", "Promenadområden"]
    },
    no: {
      caminito: ["Caminito del Rey", "Offisielle regler", "Naturlandskap"],
      default: (title: string) => [title, "Costa del Sol", "Områder å gå i"]
    }
  }[locale];
  const editorials = Object.fromEntries(Object.entries({
    "mijas-pueblo": text.mijasTitle,
    malaga: text.malagaTitle,
    benalmadena: text.benalmadenaTitle,
    marbella: text.marbellaTitle,
    ronda: text.rondaTitle,
    "nerja-frigiliana": text.nerjaTitle,
    "caminito-del-rey": text.caminitoTitle,
    granada: text.granadaTitle,
    gibraltar: text.gibraltarTitle,
    estepona: text.esteponaTitle
  }).map(([id, title]) => {
    const prefix = id.split("-")[0] as "mijas" | "malaga" | "benalmadena" | "marbella" | "ronda" | "nerja" | "caminito" | "granada" | "gibraltar" | "estepona";
    const introKey = `${prefix}Intro`;
    const descriptionKey = `${prefix}Description`;
    return [id, {
      badge: common.badge,
      title,
      paragraphs: [text[introKey], text[descriptionKey]],
      seeTitle: common.see,
      see: id === "caminito-del-rey" ? seeItems.caminito : seeItems.default(title),
      arrivalTitle: common.arrival,
      arrival: [common.transport],
      timeTitle: common.time,
      time: common.timeText,
      idealTitle: common.ideal,
      ideal: id === "caminito-del-rey" ? [locale === "fi" ? "Luonto" : locale === "sv" ? "Natur" : "Natur", locale === "fi" ? "Seikkailu" : locale === "sv" ? "Äventyr" : "Eventyr"] : [locale === "fi" ? "Pariskunnat" : locale === "sv" ? "Par" : "Par", locale === "fi" ? "Perheet" : locale === "sv" ? "Familjer" : "Familier"],
      tipTitle: common.tip,
      tip: common.tipText
    }];
  }));
  Object.assign(locale === "fi" ? fi : locale === "sv" ? sv : no, {
    texts: text,
    editorials,
    comparisonHeaders: ui.comparisonHeaders,
    secondaryIntro: ui.secondaryIntro,
    secondaryIdeas: locale === "fi" && "secondaryIdeas" in ui ? ui.secondaryIdeas : Object.fromEntries(Object.entries(es.secondaryIdeas).map(([key, item]) => [key, { title: item.title, text: locale === "sv" ? "Förberedd idé för en framtida guide. Kontrollera aktuella tider och transport innan du planerar." : "Klargjort som idé for en fremtidig guide. Sjekk aktuelle tider og transport før du planlegger." }])) as ExcursionsGuideContent["secondaryIdeas"],
    noCarGroups: ui.noCarGroups,
    kidsText: ui.kidsText,
    timeBlocks: ui.timeBlocks,
    seasons: ui.seasons,
    plannerIntro: ui.plannerIntro,
    plannerEmpty: ui.plannerEmpty,
    mapAria: ui.mapAria,
    mapOrigin: ui.mapOrigin,
    mapPopupDuration: ui.mapPopupDuration,
    mapPopupLink: ui.mapPopupLink,
    tips: ui.tips,
    officialNote: ui.officialNote,
    changingNote: ui.changingNote,
    faqs: ui.faqs,
    related: ui.related,
    ctaText: ui.ctaText,
    schemaAbout: ui.schemaAbout
  });
}

applyExcursionLocale("fi");
applyExcursionLocale("sv");
applyExcursionLocale("no");

export const excursionsGuideContent: Record<Locale, ExcursionsGuideContent> = { es, en, fi, sv, no };
