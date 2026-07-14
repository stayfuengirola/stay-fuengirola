import { Locale } from "./locales";

type Dictionary = {
  meta: { title: string; description: string };
  nav: Record<string, string>;
  common: Record<string, string>;
  hero: Record<string, string>;
  summary: Record<string, string>;
  winter: Record<string, string>;
  description: Record<string, string>;
  gallery: Record<string, string>;
  services: Record<string, string>;
  amenities: { title: string; kitchen: string[]; bathroom: string[]; living: string[]; other: string[] };
  location: Record<string, string>;
  area: Record<string, string>;
  nordic: Record<string, string>;
  explore: Record<string, string>;
  longStay: Record<string, string>;
  reviews: Record<string, string>;
  host: Record<string, string>;
  rules: Record<string, string>;
  faq: Record<string, string>;
  closing: Record<string, string>;
  footer: Record<string, string>;
  cookies: Record<string, string>;
  legal: Record<string, string>;
};

const en: Dictionary = {
  meta: {
    title: "Stay Fuengirola | Apartamento Veramar",
    description: "Holiday apartment in Fuengirola for winter holidays and long stays on the Costa del Sol, 600 m from the beach and an easy base for Marbella, Málaga and Mijas."
  },
  nav: { apartment: "Apartment", gallery: "Gallery", location: "Location", reviews: "Reviews", faq: "Questions" },
  common: {
    booking: "Check availability on Booking",
    bookingLong: "Check availability and book on Booking.com",
    whatsapp: "Ask on WhatsApp",
    whatsappHost: "Ask Nieves on WhatsApp",
    trust: "Availability, prices and booking are checked securely on Booking.com.",
    close: "Close",
    next: "Next image",
    previous: "Previous image",
    menu: "Open menu",
    size: "Size",
    guests: "Guests",
    beach: "Beach",
    rating: "Rating",
    language: "Language"
  },
  hero: {
    eyebrow: "Fuengirola · Costa del Sol",
    title: "Your sunny corner close to the beach",
    text: "A bright and comfortable apartment for winter sun, long stays and relaxed beach days in Fuengirola, with easy day trips to Marbella and the Costa del Sol."
  },
  summary: { size: "35 m²", guests: "Up to 4 guests", beach: "Beach 600 m away", rating: "9.4 out of 10" },
  winter: {
    title: "Escape the Nordic Winter",
    text: "When winter settles over Northern Europe, Fuengirola still offers mild days, open terraces, walks by the sea and an easy Mediterranean rhythm for much of the year.",
    sun: "More than 300 days of sunshine a year",
    climate: "Mild winter climate",
    promenade: "A seafront promenade for every season",
    terraces: "Restaurants and terraces open year-round",
    airport: "Easy access from Malaga Airport",
    long: "Comfortable for longer stays"
  },
  description: {
    title: "A bright private studio near the beach in Fuengirola",
    text: "Apartamento Veramar is a bright 35 m² apartment in Fuengirola, just a few minutes on foot from the beach and close to Miramar Shopping Centre, restaurants, supermarkets and leisure areas.",
    text2: "The apartment has a double bed and a double sofa bed, so it can host up to four people. It includes an equipped kitchen, private bathroom, dining area, air conditioning, heating, free Wi-Fi and washing machine.",
    text3: "Its location makes it a practical beach apartment in Fuengirola for winter holidays, longer Costa del Sol stays and easy day trips to Marbella, Málaga, Mijas Pueblo and nearby coastal towns."
  },
  gallery: {
    title: "A first look at the apartment and surroundings",
    intro: "Current reference photographs remain ready to be replaced with the original apartment images.",
    living: "Bright Mediterranean living room reference image",
    bedroom: "Sleeping area reference image",
    kitchen: "Equipped kitchen reference image",
    terrace: "Communal terrace and Costa del Sol light reference image",
    beach: "Fuengirola beach promenade reference image",
    mijas: "Mijas Pueblo white street reference image"
  },
  services: {
    title: "Main features",
    private: "Whole place for you",
    size: "35 m²",
    pool: "Outdoor pool",
    wifi: "Free Wi-Fi",
    air: "Air conditioning",
    kitchen: "Equipped kitchen",
    washer: "Washing machine",
    lift: "Lift",
    bathroom: "Private bathroom",
    garden: "Communal garden"
  },
  amenities: {
    title: "Full equipment",
    kitchen: ["Dining table", "Coffee machine", "Cleaning products", "Toaster", "Kitchenware", "Electric kettle", "Kitchen", "Washing machine", "Microwave", "Refrigerator", "Kitchenette"],
    bathroom: ["Toilet paper", "Towels", "Bath or shower", "Private bathroom", "WC", "Toiletries", "Hairdryer", "Shower"],
    living: ["Bed linen", "Wardrobe", "Dining area", "Sofa", "Seating area", "Socket near the bed", "Sofa bed", "Drying rack", "Clothes rack", "Tile or marble floor"],
    other: ["Flat-screen TV", "Heating", "Non-smoking accommodation", "Family friendly", "Garden or communal-area views"]
  },
  location: {
    title: "Your ideal base to explore the Costa del Sol",
    text: "From here you can walk to the beach, restaurants, supermarkets and Miramar Shopping Centre. Marbella, Málaga and some of the best-known Costa del Sol places are also within easy reach.",
    zoneLabel: "Area",
    note: "A privileged location, just a few minutes on foot from the beach, the promenade and Miramar Shopping Centre.",
    fuengirolaBeach: "Fuengirola Beach",
    fuengirolaBeachTime: "≈ 8 min walk",
    castleBeach: "El Castillo Beach",
    castleBeachTime: "≈ 15 min walk",
    miramar: "Miramar Shopping Centre",
    miramarTime: "≈ 7 min walk",
    sohail: "Sohail Castle",
    sohailTime: "≈ 15 min walk",
    station: "Fuengirola train station",
    stationTime: "≈ 12 min walk",
    boliches: "Los Boliches",
    mijas: "Mijas Pueblo",
    marbella: "Marbella, approx.",
    malagaCenter: "Malaga city centre, approx.",
    airport: "Malaga Airport, approx.",
    map: "Approximate map area",
    openMap: "Open in OpenStreetMap",
    airportTitle: "Arriving from Malaga Airport",
    airportText: "Malaga Airport is approximately 25 km away, depending on the route. Guests can arrive by car, taxi or public transport, combining the commuter train with a short transfer to the apartment.",
    carTitle: "By car",
    carText: "Approximately 20-25 minutes, depending on traffic.",
    trainTitle: "By train",
    trainText: "C1 line to Fuengirola and a short transfer to the apartment.",
    airportCardTitle: "From the airport",
    airportCardText: "Simple connection by car, taxi or public transport."
  },
  area: {
    title: "Everything close to your stay",
    beachesTitle: "Beaches",
    beachesText: "Fuengirola Beach and the seafront promenade are close enough for easy morning walks and relaxed days by the sea.",
    shoppingTitle: "Shopping",
    shoppingText: "Miramar Shopping Centre, supermarkets and everyday services are within easy reach for longer stays.",
    transportTitle: "Transport",
    transportText: "Train, taxi and road connections make it simple to move around Fuengirola and the Costa del Sol.",
    leisureTitle: "Leisure",
    leisureText: "Sohail Castle, coastal walks and year-round town life give the area a practical holiday rhythm.",
    airportTitle: "Airport",
    airportText: "Malaga Airport is straightforward to reach by car, taxi or public transport."
  },
  nordic: {
    title: "Why Nordic guests love Fuengirola",
    text: "Fuengirola has a well-established international community and is especially known for its Finnish presence. For many visitors from Finland, Sweden and Norway, that makes longer winter stays feel familiar without losing the relaxed Spanish coastal lifestyle.",
    text2: "International shops, restaurants, a cosmopolitan atmosphere and services open throughout the year make the town practical outside the summer season too."
  },
  explore: {
    title: "Explore the Costa del Sol",
    text: "Stay in Fuengirola and discover the Costa del Sol at an easy pace. Marbella is only a short drive away, while Málaga, Mijas Pueblo and other coastal favourites work well as day trips.",
    fuengirolaTitle: "Fuengirola",
    fuengirolaTime: "Local base",
    fuengirolaText: "Beach, promenade, restaurants and public transport close to the apartment.",
    marbellaTitle: "Marbella",
    marbellaTime: "Approx. 30-40 min by car",
    marbellaText: "Perfect location to explore Marbella and the Costa del Sol without staying in a busier resort.",
    banusTitle: "Puerto Banús",
    banusTime: "Approx. 40-45 min by car",
    banusText: "A classic day trip for marina walks, shopping and restaurants.",
    mijasTitle: "Mijas Pueblo",
    mijasTime: "Approx. 15-20 min by car",
    mijasText: "White streets, viewpoints and a slower Andalusian village rhythm.",
    malagaTitle: "Málaga",
    malagaTime: "Approx. 35-45 min by train or car",
    malagaText: "Museums, old town, shopping and winter city life by the sea.",
    caminitoTitle: "Caminito del Rey",
    caminitoTime: "Approx. 1 h 15 min by car",
    caminitoText: "A memorable mountain walk for guests who want a full-day excursion."
  },
  longStay: {
    title: "Long Winter Stays",
    text: "Apartamento Veramar is comfortable for remote work, retirees, longer escapes and guests who want to spend several weeks enjoying the Mediterranean climate from October to March.",
    text2: "Heating, air conditioning, Wi-Fi, washing machine and an equipped kitchen make everyday routines simple during a longer stay.",
    cta: "Ask us about long stays",
    cardTitle: "Ideal for long stays",
    benefitWifi: "Fast Wi-Fi",
    benefitKitchen: "Fully equipped kitchen",
    benefitWasher: "Washing machine",
    benefitClimate: "Air conditioning and heating",
    benefitBeach: "Close to the beach",
    benefitNearby: "Supermarkets and restaurants a few minutes away"
  },
  reviews: {
    title: "Guest ratings on Booking.com",
    source: "Scores according to the Booking.com listing at the time this website was updated. They may change with new reviews.",
    overall: "9.4 out of 10",
    comments: "54 reviews",
    staff: "Staff",
    cleanliness: "Cleanliness",
    comfort: "Comfort",
    facilities: "Facilities",
    location: "Location",
    value: "Value for money",
    wifi: "Free Wi-Fi",
    spain: "Spain",
    translated: "Translated review",
    one: "Very central, close to the beach, with bars, restaurants and supermarkets nearby.",
    two: "Clean and well-located apartment. I would definitely stay again.",
    three: "Bright, very clean and tastefully renovated. Well equipped. The host was excellent in every way."
  },
  host: {
    title: "Your host, Nieves",
    text: "Hello, I am Nieves. I will be happy to help you before and during your stay so you can enjoy Fuengirola with peace of mind. Our goal is for you to find the apartment clean, comfortable and ready to feel at home.",
    text2: "If you have any questions before booking about the location, arrival, pool, parking or any other detail, you can write to me directly on WhatsApp.",
    languages: "Communication languages: Spanish and English."
  },
  rules: {
    title: "House rules and useful details",
    checkin: "Check-in: from 15:00 to 21:00. Guests must communicate their approximate arrival time in advance.",
    checkout: "Check-out: until 12:00.",
    rules: "No smoking. No parties or events. Pets are not allowed. Children of any age can stay; cots and extra beds are not available. Guests under 18 must stay with a parent or legal guardian.",
    damages: "Guests are responsible for any damage they may cause during the stay, according to the conditions applicable to their Booking.com reservation.",
    cancellation: "Cancellation, prepayment and payment conditions may vary depending on dates and the selected rate. Check the exact conditions when booking on Booking.com.",
    pool: "The accommodation has a seasonal outdoor communal pool, suitable for all ages. It usually opens approximately from 20 June to 15 September, although dates may vary according to the community.",
    parking: "The building may have communal parking spaces subject to availability. A space cannot be guaranteed, especially during high season. Ask before arrival if you need more information."
  },
  faq: {
    title: "Questions before booking",
    checkinQ: "What time can I check in?",
    checkinA: "From 15:00 to 21:00. You need to communicate your approximate arrival time in advance.",
    checkoutQ: "What time should I leave the apartment?",
    checkoutA: "Until 12:00.",
    beachQ: "How far is the beach?",
    beachA: "Fuengirola Beach is approximately 600 metres away.",
    poolQ: "Is the pool open all year?",
    poolA: "No. It is a seasonal communal pool that usually opens approximately from 20 June to 15 September.",
    parkingQ: "Is there parking?",
    parkingA: "There may be communal spaces subject to availability, but a space is not guaranteed. It is best to ask before arrival.",
    petsQ: "Are pets allowed?",
    petsA: "Pets are not allowed.",
    smokingQ: "Can guests smoke?",
    smokingA: "No. Smoking is not allowed inside the accommodation.",
    childrenQ: "Are children allowed?",
    childrenA: "Yes, children of any age can stay. There are no cots or extra beds.",
    capacityQ: "How many people can stay?",
    capacityA: "Up to four people, using a double bed and a double sofa bed.",
    bookingQ: "How can I book?",
    bookingA: "Availability, prices and booking are managed through Booking.com.",
    questionQ: "Can I ask a question before booking?",
    questionA: "Yes. You can contact Nieves on WhatsApp.",
    airportQ: "How do I arrive from the airport?",
    airportA: "Malaga Airport is approximately 25 km away. You can arrive by car, taxi or public transport, combining the commuter train with a short transfer.",
    winterQ: "Is it suitable for winter stays?",
    winterA: "Yes. The accommodation has heating, air conditioning, equipped kitchen, washing machine and Wi-Fi. The pool is not available in winter."
  },
  closing: { title: "Ready for Fuengirola sun and an easy stay near the beach?", text: "Check dates, prices and booking conditions securely on Booking.com." },
  footer: {
    legal: "Legal notice",
    privacy: "Privacy",
    cookies: "Cookies",
    current: "Currently featuring Apartamento Veramar in Fuengirola.",
    disclaimer: "This is the information website for Apartamento Veramar Fuengirola. Availability, bookings and payments are managed through Booking.com, an external and independent platform."
  },
  cookies: {
    title: "Cookie preferences",
    text: "We use Google Analytics to understand visits and improve the website. You can accept or reject analytics cookies.",
    accept: "Accept",
    reject: "Reject"
  },
  legal: {
    title: "Legal information",
    text: "This website provides information about Apartamento Veramar Fuengirola. Availability, bookings and payments are managed independently by Booking.com.",
    privacy: "The WhatsApp button opens an external service. The user voluntarily decides whether to start the conversation. This website does not store the message sent through WhatsApp. Booking.com independently manages reservations and payments.",
    cookies: "This website uses Google Analytics to measure visits and improve content. Analytics storage is controlled by the cookie preference shown on the website."
  }
};

const es: Dictionary = {
  ...en,
  meta: {
    title: "Stay Fuengirola | Apartamento Veramar",
    description: "Apartamento en Fuengirola para vacaciones de invierno y estancias largas en la Costa del Sol, a 600 m de la playa y con fácil acceso a Marbella, Málaga y Mijas."
  },
  nav: { apartment: "Apartamento", gallery: "Galería", location: "Ubicación", reviews: "Opiniones", faq: "Preguntas" },
  common: { ...en.common, booking: "Ver disponibilidad en Booking", bookingLong: "Ver disponibilidad y reservar en Booking.com", whatsapp: "Preguntar por WhatsApp", whatsappHost: "Preguntar a Nieves por WhatsApp", trust: "La disponibilidad, los precios y la reserva se consultan de forma segura en Booking.com.", close: "Cerrar", next: "Imagen siguiente", previous: "Imagen anterior", menu: "Abrir menú", size: "Superficie", guests: "Huéspedes", beach: "Playa", rating: "Valoración", language: "Idioma" },
  hero: { eyebrow: "Fuengirola · Costa del Sol", title: "Tu rincón de sol cerca de la playa", text: "Un apartamento luminoso y confortable para disfrutar del sol de invierno en Fuengirola, estancias largas y escapadas por Marbella y la Costa del Sol." },
  summary: { size: "35 m²", guests: "Hasta 4 huéspedes", beach: "Playa a 600 m", rating: "9,4 sobre 10" },
  winter: { title: "Escapa del invierno nórdico", text: "Mientras el invierno llega al norte de Europa, en Fuengirola es posible disfrutar de temperaturas suaves, terrazas abiertas, paseos junto al mar y un estilo de vida relajado durante gran parte del año.", sun: "Más de 300 días de sol al año", climate: "Clima suave durante el invierno", promenade: "Paseo marítimo ideal todo el año", terraces: "Restaurantes y terrazas abiertos", airport: "Fácil acceso desde el aeropuerto de Málaga", long: "Perfecto para estancias largas" },
  description: {
    title: "Un estudio privado y luminoso cerca de la playa en Fuengirola",
    text: "Apartamento Veramar es un luminoso estudio de 35 m² situado en Fuengirola, a unos minutos a pie de la playa y cerca del Centro Comercial Miramar, restaurantes, supermercados y zonas de ocio.",
    text2: "El alojamiento dispone de una cama de matrimonio y un sofá cama doble, por lo que puede alojar hasta cuatro personas. Cuenta con cocina equipada, baño privado, zona de comedor, aire acondicionado, calefacción, Wi-Fi gratuito y lavadora.",
    text3: "Su ubicación resulta práctica para vacaciones de invierno, estancias largas en la Costa del Sol y excursiones sencillas a Marbella, Málaga, Mijas Pueblo y otros puntos de la costa."
  },
  gallery: { ...en.gallery, title: "Un primer vistazo al apartamento y su entorno", intro: "Se mantienen fotografías actuales de referencia hasta recibir las imágenes originales del alojamiento.", living: "Salón luminoso de estilo mediterráneo de referencia", bedroom: "Zona de descanso de referencia", kitchen: "Cocina equipada de referencia", terrace: "Luz de la Costa del Sol y zonas comunes de referencia", beach: "Paseo marítimo de Fuengirola de referencia", mijas: "Calle blanca de Mijas Pueblo de referencia" },
  services: { title: "Servicios destacados", private: "Todo el alojamiento para ti", size: "35 m²", pool: "Piscina exterior", wifi: "Wi-Fi gratuito", air: "Aire acondicionado", kitchen: "Cocina equipada", washer: "Lavadora", lift: "Ascensor", bathroom: "Baño privado", garden: "Jardín comunitario" },
  amenities: { title: "Equipamiento completo", kitchen: ["Mesa de comedor", "Cafetera", "Productos de limpieza", "Tostadora", "Utensilios de cocina", "Hervidor eléctrico", "Cocina", "Lavadora", "Microondas", "Nevera", "Zona de cocina"], bathroom: ["Papel higiénico", "Toallas", "Bañera o ducha", "Baño privado", "WC", "Artículos de aseo", "Secador de pelo", "Ducha"], living: ["Ropa de cama", "Armario", "Zona de comedor", "Sofá", "Zona de estar", "Enchufe cerca de la cama", "Sofá cama", "Tendedero", "Perchero", "Suelo de baldosas o mármol"], other: ["Televisión de pantalla plana", "Calefacción", "Alojamiento para no fumadores", "Adecuado para familias", "Vistas al jardín o a las zonas comunes"] },
  location: { ...en.location, title: "Tu base ideal para explorar la Costa del Sol", text: "Desde aquí podrás llegar caminando a la playa, supermercados y al Centro Comercial Miramar. Además, Marbella, Málaga y algunos de los lugares más conocidos de la Costa del Sol están a poca distancia.", zoneLabel: "Zona", note: "Ubicación privilegiada, a pocos minutos andando de la playa, el paseo marítimo y el Centro Comercial Miramar.", fuengirolaBeach: "Playa de Fuengirola", fuengirolaBeachTime: "≈ 8 min andando", castleBeach: "Playa de El Castillo", castleBeachTime: "≈ 15 min andando", miramar: "Centro Comercial Miramar", miramarTime: "≈ 7 min andando", sohail: "Castillo Sohail", sohailTime: "≈ 15 min andando", station: "Estación de tren de Fuengirola", stationTime: "≈ 12 min andando", boliches: "Los Boliches", mijas: "Mijas Pueblo", marbella: "Marbella, aprox.", malagaCenter: "Málaga Centro, aprox.", airport: "Aeropuerto de Málaga, aprox.", map: "Mapa de ubicación", openMap: "Abrir en OpenStreetMap", airportTitle: "Cómo llegar desde el aeropuerto de Málaga", airportText: "El Aeropuerto de Málaga se encuentra aproximadamente a 25 kilómetros, según la ruta. Se puede llegar en coche, taxi o transporte público, combinando el tren de cercanías con un pequeño desplazamiento hasta el apartamento.", carTitle: "En coche", carText: "20-25 minutos aproximadamente, según el tráfico.", trainTitle: "En tren", trainText: "Línea C1 hasta Fuengirola y breve trayecto hasta el apartamento.", airportCardTitle: "Desde el aeropuerto", airportCardText: "Conexión sencilla mediante coche, taxi o transporte público." },
  area: { title: "Todo cerca de tu estancia", beachesTitle: "Playas", beachesText: "La playa y el paseo marítimo quedan cerca para paseos tranquilos, días de sol y baños junto al Mediterráneo.", shoppingTitle: "Compras", shoppingText: "El Centro Comercial Miramar, supermercados y servicios cotidianos facilitan tanto escapadas como estancias largas.", transportTitle: "Transporte", transportText: "Tren, taxis y conexiones por carretera permiten moverse con facilidad por Fuengirola y la Costa del Sol.", leisureTitle: "Ocio", leisureText: "El Castillo Sohail, los paseos junto al mar y la vida local abierta todo el año completan la experiencia.", airportTitle: "Aeropuerto", airportText: "El Aeropuerto de Málaga tiene conexión sencilla mediante coche, taxi o transporte público." },
  nordic: { title: "Por qué los huéspedes nórdicos eligen Fuengirola", text: "Fuengirola cuenta con una comunidad internacional consolidada y es especialmente conocida por su comunidad finlandesa. Para muchos visitantes de Finlandia, Suecia y Noruega, esto hace que las estancias largas en invierno resulten cómodas y familiares sin renunciar al estilo de vida mediterráneo.", text2: "Comercios internacionales, restaurantes, ambiente cosmopolita y servicios abiertos durante todo el año hacen que la ciudad funcione bien también fuera del verano." },
  explore: { title: "Explora la Costa del Sol", text: "Alojarse en Fuengirola permite descubrir la Costa del Sol con calma. Marbella está a un trayecto corto en coche, y Málaga, Mijas Pueblo y otros puntos de la costa encajan muy bien como excursiones de un día.", fuengirolaTitle: "Fuengirola", fuengirolaTime: "Base local", fuengirolaText: "Playa, paseo marítimo, restaurantes y transporte público cerca del apartamento.", marbellaTitle: "Marbella", marbellaTime: "Aprox. 30-40 min en coche", marbellaText: "Ubicación perfecta para explorar Marbella y la Costa del Sol sin alojarse en una zona más concurrida.", banusTitle: "Puerto Banús", banusTime: "Aprox. 40-45 min en coche", banusText: "Una escapada clásica para pasear por el puerto, tiendas y restaurantes.", mijasTitle: "Mijas Pueblo", mijasTime: "Aprox. 15-20 min en coche", mijasText: "Calles blancas, miradores y un ritmo andaluz más tranquilo.", malagaTitle: "Málaga", malagaTime: "Aprox. 35-45 min en tren o coche", malagaText: "Museos, centro histórico, compras y vida urbana junto al mar.", caminitoTitle: "Caminito del Rey", caminitoTime: "Aprox. 1 h 15 min en coche", caminitoText: "Una excursión de día completo para quienes buscan naturaleza y montaña." },
  longStay: { title: "Estancias largas de invierno", text: "Apartamento Veramar resulta cómodo para teletrabajo, jubilados, escapadas largas y huéspedes que desean pasar varias semanas disfrutando del clima mediterráneo entre octubre y marzo.", text2: "Calefacción, aire acondicionado, Wi-Fi, lavadora y cocina equipada facilitan el día a día durante una estancia larga.", cta: "Consultar estancias largas", cardTitle: "Ideal para estancias largas", benefitWifi: "Wi-Fi rápido", benefitKitchen: "Cocina totalmente equipada", benefitWasher: "Lavadora", benefitClimate: "Aire acondicionado y calefacción", benefitBeach: "Cerca de la playa", benefitNearby: "Supermercados y restaurantes a pocos minutos" },
  reviews: { ...en.reviews, title: "Valoraciones de huéspedes en Booking.com", source: "Puntuaciones según la ficha del alojamiento en Booking.com en el momento de actualizar esta web. Pueden cambiar con nuevas valoraciones.", overall: "9,4 sobre 10", comments: "54 comentarios", staff: "Personal", cleanliness: "Limpieza", comfort: "Confort", facilities: "Instalaciones y servicios", location: "Ubicación", value: "Relación calidad-precio", wifi: "Wi-Fi gratuito", spain: "España", translated: "", one: "Muy céntrico, cerca de la playa, con bares, restaurantes y supermercados en los alrededores.", two: "Apartamento limpio y bien situado. Repetiría sin duda.", three: "Luminoso, muy limpio y renovado con gusto. Bien equipado. La anfitriona estupenda en todos los sentidos." },
  host: { title: "Tu anfitriona, Nieves", text: "Hola, soy Nieves. Estaré encantada de ayudarte antes y durante tu estancia para que puedas disfrutar de Fuengirola con tranquilidad. Nuestro objetivo es que encuentres el apartamento limpio, cómodo y preparado para que te sientas como en casa.", text2: "Si tienes alguna duda antes de reservar sobre la ubicación, la llegada, la piscina, el aparcamiento o cualquier otro detalle, puedes escribirme directamente por WhatsApp.", languages: "Idiomas de comunicación: español e inglés." },
  rules: { title: "Normas y detalles útiles", checkin: "Entrada: de 15:00 a 21:00. El huésped debe comunicar con antelación su hora aproximada de llegada.", checkout: "Salida: hasta las 12:00.", rules: "No se permite fumar. No se permiten fiestas ni eventos. No se admiten mascotas. Los niños pueden alojarse a cualquier edad; no hay cunas ni camas supletorias. Los menores de 18 años deben alojarse acompañados por un progenitor o tutor legal.", damages: "Los huéspedes son responsables de los daños que puedan causar durante la estancia, de acuerdo con las condiciones aplicables a su reserva en Booking.com.", cancellation: "Las condiciones de cancelación, prepago y pago pueden variar según las fechas y la tarifa seleccionada. Consulta las condiciones exactas al realizar la reserva en Booking.com.", pool: "El alojamiento dispone de una piscina exterior comunitaria de temporada, adecuada para todas las edades. Su apertura habitual es aproximadamente del 20 de junio al 15 de septiembre, aunque las fechas pueden variar según la comunidad.", parking: "El edificio puede disponer de plazas de aparcamiento comunitario sujetas a disponibilidad. No es posible garantizar una plaza, especialmente durante la temporada alta. Consulta antes de tu llegada si necesitas más información." },
  faq: { ...en.faq, title: "Preguntas antes de reservar", checkinQ: "¿A qué hora se puede entrar?", checkinA: "De 15:00 a 21:00. Es necesario comunicar con antelación la hora aproximada de llegada.", checkoutQ: "¿A qué hora debe dejarse el apartamento?", checkoutA: "Hasta las 12:00.", beachQ: "¿A qué distancia está la playa?", beachA: "La Playa de Fuengirola se encuentra aproximadamente a 600 metros.", poolQ: "¿La piscina abre todo el año?", poolA: "No. Es una piscina comunitaria de temporada que suele abrir aproximadamente del 20 de junio al 15 de septiembre.", parkingQ: "¿Hay aparcamiento?", parkingA: "Puede haber plazas comunitarias sujetas a disponibilidad, pero no se garantiza una plaza. Se recomienda consultar antes de la llegada.", petsQ: "¿Se admiten mascotas?", petsA: "No se admiten mascotas.", smokingQ: "¿Se puede fumar?", smokingA: "No. Está prohibido fumar dentro del alojamiento.", childrenQ: "¿Se admiten niños?", childrenA: "Sí, pueden alojarse niños de cualquier edad. No hay cunas ni camas supletorias.", capacityQ: "¿Cuántas personas pueden alojarse?", capacityA: "Hasta cuatro personas, utilizando una cama de matrimonio y un sofá cama doble.", bookingQ: "¿Cómo puedo reservar?", bookingA: "La disponibilidad, los precios y la reserva se gestionan mediante Booking.com.", questionQ: "¿Puedo hacer una consulta antes de reservar?", questionA: "Sí. Puedes contactar con Nieves por WhatsApp.", airportQ: "¿Cómo llegar desde el aeropuerto?", airportA: "El Aeropuerto de Málaga se encuentra aproximadamente a 25 kilómetros. Se puede llegar en coche, taxi o transporte público, combinando el tren de cercanías con un pequeño desplazamiento hasta el apartamento.", winterQ: "¿Es adecuado para estancias de invierno?", winterA: "Sí. El alojamiento dispone de calefacción, aire acondicionado, cocina equipada, lavadora y Wi-Fi, por lo que puede resultar cómodo para estancias fuera de temporada. La piscina no está disponible durante el invierno." },
  closing: { title: "¿Listo para disfrutar Fuengirola cerca de la playa?", text: "Comprueba fechas, precios y condiciones de reserva de forma segura en Booking.com." },
  footer: { legal: "Aviso legal", privacy: "Privacidad", cookies: "Cookies", current: "Actualmente presentamos Apartamento Veramar en Fuengirola.", disclaimer: "Esta es la web informativa del alojamiento Apartamento Veramar Fuengirola. La disponibilidad, las reservas y los pagos se gestionan mediante Booking.com, una plataforma externa e independiente." },
  cookies: { title: "Preferencias de cookies", text: "Utilizamos Google Analytics para entender las visitas y mejorar la web. Puedes aceptar o rechazar las cookies de analítica.", accept: "Aceptar", reject: "Rechazar" },
  legal: { title: "Información legal", text: "Esta web ofrece información sobre Apartamento Veramar Fuengirola. La disponibilidad, las reservas y los pagos se gestionan de forma independiente mediante Booking.com.", privacy: "El botón de WhatsApp abre un servicio externo. El usuario decide voluntariamente iniciar la conversación. Esta web no almacena el mensaje enviado mediante WhatsApp. Booking.com gestiona de forma independiente la reserva y los pagos.", cookies: "Esta web utiliza Google Analytics para medir visitas y mejorar el contenido. El almacenamiento de analítica se controla mediante las preferencias de cookies mostradas en la web." }
};

const fi: Dictionary = {
  ...en,
  meta: { title: "Stay Fuengirola | Apartamento Veramar", description: "Loma-asunto Fuengirolassa talvilomille ja pidemmille oleskeluille Costa del Solilla, 600 m rannalta ja helppo tukikohta Marbellaan, Malagaan ja Mijasiin." },
  nav: { apartment: "Asunto", gallery: "Galleria", location: "Sijainti", reviews: "Arviot", faq: "Kysymykset" },
  common: { ...en.common, booking: "Tarkista saatavuus Bookingissa", bookingLong: "Tarkista saatavuus ja varaa Booking.comissa", whatsapp: "Kysy WhatsAppissa", whatsappHost: "Kysy Nievesiltä WhatsAppissa", trust: "Saatavuus, hinnat ja varaus tarkistetaan turvallisesti Booking.comissa.", menu: "Avaa valikko", size: "Koko", guests: "Vieraat", beach: "Ranta", rating: "Arvio", language: "Kieli" },
  hero: { eyebrow: "Fuengirola · Costa del Sol", title: "Aurinkoinen paikkasi lähellä rantaa", text: "Valoisa ja mukava asunto talviaurinkoon, pidempiin oleskeluihin ja rauhallisiin päiviin Fuengirolassa, lähellä Marbellaa ja Costa del Solin kohteita." },
  summary: { size: "35 m²", guests: "Enintään 4 vierasta", beach: "Ranta 600 m", rating: "9,4 / 10" },
  winter: { title: "Pakoon pohjoisen talvea", text: "Kun talvi saapuu Pohjois-Eurooppaan, Fuengirolassa voi edelleen nauttia leudoista päivistä, avoimista terasseista, kävelyistä meren rannalla ja rennosta Välimeren rytmistä suuren osan vuodesta.", sun: "Yli 300 aurinkoista päivää vuodessa", climate: "Leuto ilmasto talvella", promenade: "Rantakatu toimii ympäri vuoden", terraces: "Ravintolat ja terassit avoinna", airport: "Helppo yhteys Malagan lentoasemalta", long: "Mukava myös pidempiin oleskeluihin" },
  description: { title: "Valoisa yksityinen studio lähellä rantaa Fuengirolassa", text: "Apartamento Veramar on valoisa 35 m² studio Fuengirolassa, muutaman minuutin kävelymatkan päässä rannalta ja lähellä Miramar-ostoskeskusta, ravintoloita, supermarketteja ja vapaa-ajan palveluja.", text2: "Asunnossa on parivuode ja parivuodesohva, joten siellä voi majoittua enintään neljä henkilöä. Varustukseen kuuluu varusteltu keittiö, oma kylpyhuone, ruokailutila, ilmastointi, lämmitys, maksuton Wi-Fi ja pesukone.", text3: "Kesäkaudella vieraat voivat käyttää yhteistä ulkouima-allasta ja puutarhaa. Sijainnin ansiosta Fuengirolaa, rantaa, Sohailin linnaa, keskustaa ja julkista liikennettä on helppo hyödyntää kävellen." },
  gallery: { ...en.gallery, title: "Ensimmäinen katsaus asuntoon ja ympäristöön", intro: "Nykyiset viitekuvat voidaan myöhemmin korvata asunnon alkuperäisillä kuvilla.", living: "Valoisa välimerellinen olohuone, viitekuva", bedroom: "Makuutila, viitekuva", kitchen: "Varusteltu keittiö, viitekuva", terrace: "Yhteiset alueet ja Costa del Solin valo, viitekuva", beach: "Fuengirolan rantakatu, viitekuva", mijas: "Mijas Pueblon valkoinen katu, viitekuva" },
  services: { ...en.services, title: "Tärkeimmät mukavuudet", private: "Koko asunto käytössäsi", size: "35 m²", pool: "Ulkouima-allas", wifi: "Maksuton Wi-Fi", air: "Ilmastointi", kitchen: "Varusteltu keittiö", washer: "Pesukone", lift: "Hissi", bathroom: "Oma kylpyhuone", garden: "Yhteinen puutarha" },
  amenities: { title: "Koko varustelu", kitchen: ["Ruokapöytä", "Kahvinkeitin", "Siivoustarvikkeet", "Leivänpaahdin", "Keittiövälineet", "Vedenkeitin", "Keittiö", "Pesukone", "Mikroaaltouuni", "Jääkaappi", "Keittotila"], bathroom: ["WC-paperi", "Pyyhkeet", "Kylpyamme tai suihku", "Oma kylpyhuone", "WC", "Kylpytuotteet", "Hiustenkuivaaja", "Suihku"], living: ["Liinavaatteet", "Vaatekaappi", "Ruokailutila", "Sohva", "Oleskelualue", "Pistorasia vuoteen lähellä", "Vuodesohva", "Kuivausteline", "Vaateripustin", "Laatta- tai marmorilattia"], other: ["Taulu-tv", "Lämmitys", "Savuton majoitus", "Perheystävällinen", "Näkymä puutarhaan tai yhteisille alueille"] },
  location: { ...en.location, title: "Hyvä tukikohta Costa del Solin tutkimiseen", text: "Täältä pääset kävellen rannalle, supermarketteihin ja Miramar-ostoskeskukseen. Myös Marbella, Málaga ja monet Costa del Solin tunnetut kohteet ovat helposti saavutettavissa.", zoneLabel: "Alue", note: "Erinomainen sijainti vain muutaman minuutin kävelymatkan päässä rannalta, rantakadulta ja Miramar-ostoskeskuksesta.", fuengirolaBeach: "Fuengirolan ranta", fuengirolaBeachTime: "≈ 8 min kävellen", castleBeach: "El Castillon ranta", castleBeachTime: "≈ 15 min kävellen", miramar: "Miramar-ostoskeskus", miramarTime: "≈ 7 min kävellen", sohail: "Sohailin linna", sohailTime: "≈ 15 min kävellen", station: "Fuengirolan rautatieasema", stationTime: "≈ 12 min kävellen", boliches: "Los Boliches", mijas: "Mijas Pueblo", marbella: "Marbella, noin", malagaCenter: "Málagan keskusta, noin", airport: "Malagan lentoasema, noin", map: "Sijaintikartta", openMap: "Avaa OpenStreetMapissa", airportTitle: "Saapuminen Malagan lentoasemalta", airportText: "Malagan lentoasema on noin 25 km päässä reitistä riippuen. Perille pääsee autolla, taksilla tai julkisilla kulkuvälineillä yhdistämällä lähijunan ja lyhyen siirtymän asunnolle.", carTitle: "Autolla", carText: "Noin 20-25 minuuttia liikenteestä riippuen.", trainTitle: "Junalla", trainText: "C1-linja Fuengirolaan ja lyhyt siirtymä asunnolle.", airportCardTitle: "Lentoasemalta", airportCardText: "Helppo yhteys autolla, taksilla tai julkisilla kulkuvälineillä." },
  area: { title: "Kaikki lähellä oleskeluasi", beachesTitle: "Rannat", beachesText: "Ranta ja rantakatu ovat lähellä rauhallisia kävelyjä, aurinkoisia päiviä ja helppoja merihetkiä varten.", shoppingTitle: "Ostokset", shoppingText: "Miramar-ostoskeskus, supermarketit ja arjen palvelut helpottavat sekä lyhyitä lomia että pidempiä oleskeluja.", transportTitle: "Liikkuminen", transportText: "Juna, taksit ja tieyhteydet tekevät Fuengirolassa ja Costa del Solilla liikkumisesta vaivatonta.", leisureTitle: "Vapaa-aika", leisureText: "Sohailin linna, rantakävelyt ja ympäri vuoden elävä kaupunki luovat mukavan lomarytmin.", airportTitle: "Lentoasema", airportText: "Malagan lentoasemalle on helppo yhteys autolla, taksilla tai julkisilla kulkuvälineillä." },
  nordic: { title: "Miksi pohjoismaiset vieraat viihtyvät Fuengirolassa", text: "Fuengirolassa on vakiintunut kansainvälinen yhteisö, ja kaupunki tunnetaan erityisesti suuresta suomalaisyhteisöstään. Monille Suomesta, Ruotsista ja Norjasta tuleville vieraille se tekee pitkistä talvioleskeluista käytännöllisiä ja kotoisia.", text2: "Kansainväliset kaupat, ravintolat, kosmopoliittinen ilmapiiri ja ympäri vuoden avoinna olevat palvelut tekevät Fuengirolasta toimivan myös talvikaudella." },
  explore: { title: "Tutustu Costa del Soliin", text: "Fuengirolasta käsin Costa del Soliin voi tutustua rauhalliseen tahtiin. Marbella on lyhyen ajomatkan päässä, ja Málaga, Mijas Pueblo sekä muut rannikon kohteet sopivat hyvin päiväretkiksi.", fuengirolaTitle: "Fuengirola", fuengirolaTime: "Paikallinen tukikohta", fuengirolaText: "Ranta, rantakatu, ravintolat ja julkinen liikenne lähellä asuntoa.", marbellaTitle: "Marbella", marbellaTime: "Noin 30-40 min autolla", marbellaText: "Hyvä sijainti Marbellaan ja Costa del Soliin tutustumiseen ilman vilkkaammassa lomakeskuksessa majoittumista.", banusTitle: "Puerto Banús", banusTime: "Noin 40-45 min autolla", banusText: "Klassinen päiväretki satamaan, ostoksille ja ravintoloihin.", mijasTitle: "Mijas Pueblo", mijasTime: "Noin 15-20 min autolla", mijasText: "Valkoisia kujia, näköalapaikkoja ja rauhallisempi andalusialainen tunnelma.", malagaTitle: "Málaga", malagaTime: "Noin 35-45 min junalla tai autolla", malagaText: "Museoita, vanhakaupunki, ostoksia ja merellinen kaupunkipäivä.", caminitoTitle: "Caminito del Rey", caminitoTime: "Noin 1 h 15 min autolla", caminitoText: "Koko päivän retki vuoristomaisemiin ja kävelyreitille." },
  longStay: { title: "Pitkät talvioleskelut", text: "Apartamento Veramar sopii etätyöhön, eläkeläisille, pidempiin irtiottoihin ja vieraille, jotka haluavat viettää useita viikkoja Välimeren ilmastossa loka-maaliskuun välillä.", text2: "Lämmitys, ilmastointi, Wi-Fi, pesukone ja varusteltu keittiö tekevät arjesta helppoa pidemmänkin oleskelun aikana.", cta: "Kysy pitkistä oleskeluista", cardTitle: "Ihanteellinen pitkään oleskeluun", benefitWifi: "Nopea Wi-Fi", benefitKitchen: "Täysin varusteltu keittiö", benefitWasher: "Pesukone", benefitClimate: "Ilmastointi ja lämmitys", benefitBeach: "Lähellä rantaa", benefitNearby: "Supermarketit ja ravintolat muutaman minuutin päässä" },
  reviews: { ...en.reviews, title: "Vieraiden arviot Booking.comissa", source: "Pisteet perustuvat Booking.com-kohteen tietoihin tämän sivuston päivityshetkellä. Ne voivat muuttua uusien arvioiden myötä.", overall: "9,4 / 10", comments: "54 arviota", staff: "Henkilökunta", cleanliness: "Siisteys", comfort: "Mukavuus", facilities: "Mukavuudet ja palvelut", location: "Sijainti", value: "Hinta-laatusuhde", wifi: "Maksuton Wi-Fi", spain: "Espanja", translated: "Käännetty arvio", one: "Erittäin keskeinen sijainti, lähellä rantaa sekä baareja, ravintoloita ja supermarketteja.", two: "Siisti ja hyvällä paikalla oleva asunto. Tulisin ehdottomasti uudelleen.", three: "Valoisa, erittäin siisti ja hyvällä maulla remontoitu. Hyvin varusteltu. Majoittaja oli erinomainen kaikin tavoin." },
  host: { title: "Majoittajasi Nieves", text: "Hei, olen Nieves. Autan mielelläni ennen oleskeluasi ja sen aikana, jotta voit nauttia Fuengirolasta rauhassa. Tavoitteemme on, että asunto on siisti, mukava ja valmis tuntumaan kodilta.", text2: "Jos sinulla on ennen varausta kysyttävää sijainnista, saapumisesta, uima-altaasta, pysäköinnistä tai muista yksityiskohdista, voit kirjoittaa minulle suoraan WhatsAppissa.", languages: "Viestintäkielet: espanja ja englanti." },
  rules: { title: "Säännöt ja hyödylliset tiedot", checkin: "Sisäänkirjautuminen: 15.00-21.00. Arvioitu saapumisaika on ilmoitettava etukäteen.", checkout: "Uloskirjautuminen: klo 12.00 mennessä.", rules: "Tupakointi on kielletty. Juhlat ja tapahtumat eivät ole sallittuja. Lemmikit eivät ole sallittuja. Lapset ovat tervetulleita kaikenikäisinä; vauvansänkyjä tai lisävuoteita ei ole. Alle 18-vuotiaiden tulee majoittua vanhemman tai laillisen huoltajan kanssa.", damages: "Vieraat vastaavat oleskelun aikana aiheuttamistaan vahingoista Booking.com-varauksen ehtojen mukaisesti.", cancellation: "Peruutus-, ennakkomaksu- ja maksuehdot voivat vaihdella päivämäärien ja valitun hinnan mukaan. Tarkista tarkat ehdot Booking.comissa varauksen yhteydessä.", pool: "Majoituksessa on kausiluonteinen yhteinen ulkouima-allas, joka sopii kaikenikäisille. Se on yleensä avoinna noin 20.6.-15.9., mutta päivämäärät voivat vaihdella taloyhtiön mukaan.", parking: "Rakennuksessa voi olla yhteisiä pysäköintipaikkoja saatavuuden mukaan. Paikkaa ei voida taata, erityisesti sesonkiaikana. Kysy ennen saapumista, jos tarvitset lisätietoja." },
  faq: { ...en.faq, title: "Kysymyksiä ennen varausta", checkinQ: "Mihin aikaan voi kirjautua sisään?", checkinA: "Kello 15.00-21.00. Arvioitu saapumisaika tulee ilmoittaa etukäteen.", checkoutQ: "Mihin aikaan asunto tulee luovuttaa?", checkoutA: "Klo 12.00 mennessä.", beachQ: "Kuinka kaukana ranta on?", beachA: "Fuengirolan ranta on noin 600 metrin päässä.", poolQ: "Onko uima-allas avoinna ympäri vuoden?", poolA: "Ei. Se on kausiluonteinen yhteinen allas, joka on yleensä avoinna noin 20.6.-15.9.", parkingQ: "Onko pysäköintiä?", parkingA: "Yhteisiä paikkoja voi olla saatavuuden mukaan, mutta paikkaa ei taata. Suosittelemme kysymään ennen saapumista.", petsQ: "Ovatko lemmikit sallittuja?", petsA: "Lemmikit eivät ole sallittuja.", smokingQ: "Saako tupakoida?", smokingA: "Ei. Tupakointi on kielletty majoitustilassa.", childrenQ: "Ovatko lapset sallittuja?", childrenA: "Kyllä, kaikenikäiset lapset voivat majoittua. Vauvansänkyjä tai lisävuoteita ei ole.", capacityQ: "Kuinka monta henkilöä voi majoittua?", capacityA: "Enintään neljä henkilöä, parivuoteessa ja parivuodesohvalla.", bookingQ: "Miten voin varata?", bookingA: "Saatavuus, hinnat ja varaus hoidetaan Booking.comin kautta.", questionQ: "Voinko kysyä ennen varausta?", questionA: "Kyllä. Voit ottaa yhteyttä Nieveseen WhatsAppissa.", airportQ: "Miten saapua lentokentältä?", airportA: "Malagan lentoasema on noin 25 km päässä. Perille pääsee autolla, taksilla tai julkisilla kulkuvälineillä.", winterQ: "Sopiiko asunto talvikauden oleskeluun?", winterA: "Kyllä. Majoituksessa on lämmitys, ilmastointi, varusteltu keittiö, pesukone ja Wi-Fi. Uima-allas ei ole käytettävissä talvella." },
  footer: { ...en.footer, legal: "Lakiteksti", privacy: "Tietosuoja", cookies: "Evästeet", current: "Esittelemme tällä hetkellä Apartamento Veramaria Fuengirolassa." },
  cookies: { ...en.cookies, title: "Evästeasetukset", text: "Käytämme Google Analyticsia käyntien ymmärtämiseen ja sivuston parantamiseen. Voit hyväksyä tai hylätä analytiikkaevästeet.", accept: "Hyväksy", reject: "Hylkää" },
  legal: { ...en.legal, title: "Lakitiedot", cookies: "Tämä verkkosivusto käyttää Google Analyticsia käyntien mittaamiseen ja sisällön parantamiseen. Analytiikan tallennusta hallitaan sivustolla näytettävien evästeasetusten kautta." }
};

const sv: Dictionary = {
  ...en,
  meta: { title: "Stay Fuengirola | Apartamento Veramar", description: "Semesterlägenhet i Fuengirola för vintersemester och längre vistelser på Costa del Sol, 600 m från stranden och med enkel tillgång till Marbella, Málaga och Mijas." },
  nav: { apartment: "Lägenhet", gallery: "Galleri", location: "Läge", reviews: "Omdömen", faq: "Frågor" },
  common: { ...en.common, booking: "Se tillgänglighet på Booking", bookingLong: "Se tillgänglighet och boka på Booking.com", whatsapp: "Fråga via WhatsApp", whatsappHost: "Fråga Nieves via WhatsApp", trust: "Tillgänglighet, priser och bokning kontrolleras säkert på Booking.com.", menu: "Öppna meny", size: "Storlek", guests: "Gäster", beach: "Strand", rating: "Betyg", language: "Språk" },
  hero: { eyebrow: "Fuengirola · Costa del Sol", title: "Din soliga plats nära stranden", text: "En ljus och bekväm lägenhet för vintersol, längre vistelser och lugna dagar i Fuengirola, nära Marbella och resten av Costa del Sol." },
  summary: { size: "35 m²", guests: "Upp till 4 gäster", beach: "Strand 600 m", rating: "9,4 av 10" },
  winter: { title: "Fly den nordiska vintern", text: "När vintern kommer till norra Europa erbjuder Fuengirola fortfarande milda dagar, öppna terrasser, promenader vid havet och ett avslappnat medelhavstempo under stora delar av året.", sun: "Över 300 soldagar om året", climate: "Milt klimat under vintern", promenade: "Strandpromenad året runt", terraces: "Restauranger och terrasser öppna", airport: "Enkel resa från Malagas flygplats", long: "Passar bra för längre vistelser" },
  gallery: { ...en.gallery, title: "En första titt på lägenheten och området", intro: "Nuvarande referensbilder kan senare ersättas med originalbilder från boendet." },
  description: { title: "En ljus privat studio nära stranden i Fuengirola", text: "Apartamento Veramar är en ljus studio på 35 m² i Fuengirola, några minuters promenad från stranden och nära Miramar köpcentrum, restauranger, mataffärer och nöjen.", text2: "Boendet har en dubbelsäng och en dubbel bäddsoffa och rymmer upp till fyra personer. Här finns utrustat kök, eget badrum, matplats, luftkonditionering, värme, gratis Wi-Fi och tvättmaskin.", text3: "Under sommarsäsongen kan gästerna använda den gemensamma utomhuspoolen och trädgården. Läget gör det enkelt att utforska Fuengirola till fots och nå stranden, Sohailborgen, centrum och kollektivtrafik." },
  services: { ...en.services, title: "Utvalda bekvämligheter", private: "Hela boendet för dig", size: "35 m²", pool: "Utomhuspool", wifi: "Gratis Wi-Fi", air: "Luftkonditionering", kitchen: "Utrustat kök", washer: "Tvättmaskin", lift: "Hiss", bathroom: "Eget badrum", garden: "Gemensam trädgård" },
  amenities: { ...en.amenities, title: "Full utrustning" },
  location: { ...en.location, title: "En perfekt bas för att upptäcka Costa del Sol", text: "Härifrån kan du promenera till stranden, mataffärer och Miramar köpcentrum. Marbella, Málaga och flera av Costa del Sols mest kända platser ligger också inom bekvämt räckhåll.", zoneLabel: "Område", note: "Privilegierat läge, bara några minuters promenad från stranden, strandpromenaden och Miramar köpcentrum.", fuengirolaBeach: "Fuengirola strand", fuengirolaBeachTime: "≈ 8 min till fots", castleBeach: "El Castillo strand", castleBeachTime: "≈ 15 min till fots", miramar: "Miramar köpcentrum", miramarTime: "≈ 7 min till fots", sohail: "Sohailborgen", sohailTime: "≈ 15 min till fots", station: "Fuengirola tågstation", stationTime: "≈ 12 min till fots", boliches: "Los Boliches", mijas: "Mijas Pueblo", marbella: "Marbella, ca", malagaCenter: "Málaga centrum, ca", airport: "Malagas flygplats, ca", map: "Lägeskarta", openMap: "Öppna i OpenStreetMap", airportTitle: "Ankomst från Malagas flygplats", airportText: "Malagas flygplats ligger cirka 25 km bort beroende på rutt. Du kan komma med bil, taxi eller kollektivtrafik.", carTitle: "Med bil", carText: "Cirka 20-25 minuter beroende på trafik.", trainTitle: "Med tåg", trainText: "C1-linjen till Fuengirola och en kort fortsättning till lägenheten.", airportCardTitle: "Från flygplatsen", airportCardText: "Enkel anslutning med bil, taxi eller kollektivtrafik." },
  area: { title: "Allt nära din vistelse", beachesTitle: "Stränder", beachesText: "Stranden och strandpromenaden ligger nära för lugna promenader, soliga dagar och enkla bad.", shoppingTitle: "Shopping", shoppingText: "Miramar köpcentrum, mataffärer och vardagsservice gör både korta resor och längre vistelser smidiga.", transportTitle: "Transport", transportText: "Tåg, taxi och vägförbindelser gör det lätt att ta sig runt Fuengirola och Costa del Sol.", leisureTitle: "Nöjen", leisureText: "Sohailborgen, promenader vid havet och stadsliv året runt ger området en bekväm semesterrytm.", airportTitle: "Flygplats", airportText: "Malagas flygplats nås enkelt med bil, taxi eller kollektivtrafik." },
  reviews: { ...en.reviews, title: "Gästbetyg på Booking.com", source: "Betygen följer boendets sida på Booking.com när denna webbplats uppdaterades. De kan ändras med nya omdömen.", overall: "9,4 av 10", comments: "54 omdömen", translated: "Översatt omdöme" },
  nordic: { title: "Därför trivs nordiska gäster i Fuengirola", text: "Fuengirola har en etablerad internationell gemenskap och är särskilt känd för sin stora finska närvaro. För många besökare från Finland, Sverige och Norge gör det längre vintervistelser både enkla och bekväma.", text2: "Internationella butiker, restauranger, kosmopolitisk atmosfär och service som är öppen året runt gör staden praktisk även utanför sommaren." },
  explore: { title: "Upptäck Costa del Sol", text: "Med Fuengirola som bas kan du upptäcka Costa del Sol i lugn takt. Marbella ligger bara en kort bilresa bort, medan Málaga, Mijas Pueblo och andra kustorter passar fint som dagsutflykter.", fuengirolaTitle: "Fuengirola", fuengirolaTime: "Lokal bas", fuengirolaText: "Strand, strandpromenad, restauranger och kollektivtrafik nära lägenheten.", marbellaTitle: "Marbella", marbellaTime: "Ca 30-40 min med bil", marbellaText: "Perfekt läge för att utforska Marbella och Costa del Sol utan att bo i en mer intensiv semesterort.", banusTitle: "Puerto Banús", banusTime: "Ca 40-45 min med bil", banusText: "En klassisk dagsutflykt för marina, shopping och restauranger.", mijasTitle: "Mijas Pueblo", mijasTime: "Ca 15-20 min med bil", mijasText: "Vita gator, utsikter och ett lugnare andalusiskt tempo.", malagaTitle: "Málaga", malagaTime: "Ca 35-45 min med tåg eller bil", malagaText: "Museer, gamla stan, shopping och stadsliv vid havet.", caminitoTitle: "Caminito del Rey", caminitoTime: "Ca 1 h 15 min med bil", caminitoText: "En minnesvärd heldagsutflykt för vandring och bergslandskap." },
  longStay: { title: "Längre vintervistelser", text: "Apartamento Veramar passar för distansarbete, pensionärer, längre ledigheter och gäster som vill tillbringa flera veckor i medelhavsklimat från oktober till mars.", text2: "Värme, luftkonditionering, Wi-Fi, tvättmaskin och utrustat kök gör vardagen enkel under en längre vistelse.", cta: "Fråga om längre vistelser", cardTitle: "Perfekt för längre vistelser", benefitWifi: "Snabbt Wi-Fi", benefitKitchen: "Fullt utrustat kök", benefitWasher: "Tvättmaskin", benefitClimate: "Luftkonditionering och värme", benefitBeach: "Nära stranden", benefitNearby: "Mataffärer och restauranger några minuter bort" },
  host: { ...en.host, title: "Din värd, Nieves", text: "Hej, jag heter Nieves. Jag hjälper dig gärna före och under vistelsen så att du kan njuta av Fuengirola i lugn och ro.", text2: "Om du har frågor före bokning om läge, ankomst, pool, parkering eller något annat kan du skriva direkt till mig på WhatsApp.", languages: "Kommunikationsspråk: spanska och engelska." },
  rules: { ...en.rules, title: "Regler och praktisk information", checkin: "Incheckning: 15.00-21.00. Gäster ska meddela ungefärlig ankomsttid i förväg.", checkout: "Utcheckning: senast 12.00." },
  faq: { ...en.faq, title: "Frågor före bokning", checkinQ: "När kan jag checka in?", checkinA: "Från 15.00 till 21.00. Du behöver meddela ungefärlig ankomsttid i förväg.", checkoutQ: "När ska lägenheten lämnas?", checkoutA: "Senast 12.00.", questionQ: "Kan jag fråga något före bokning?" },
  footer: { ...en.footer, legal: "Juridisk information", privacy: "Integritet", cookies: "Cookies", current: "För närvarande presenterar vi Apartamento Veramar i Fuengirola." },
  cookies: { ...en.cookies, title: "Cookieinställningar", text: "Vi använder Google Analytics för att förstå besök och förbättra webbplatsen. Du kan acceptera eller avvisa analyscookies.", accept: "Acceptera", reject: "Avvisa" },
  legal: { ...en.legal, title: "Juridisk information", cookies: "Denna webbplats använder Google Analytics för att mäta besök och förbättra innehållet. Lagring för analys styrs via de cookieinställningar som visas på webbplatsen." }
};

const no: Dictionary = {
  ...en,
  meta: { title: "Stay Fuengirola | Apartamento Veramar", description: "Ferieleilighet i Fuengirola for vinterferie og lengre opphold på Costa del Sol, 600 m fra stranden og med enkel tilgang til Marbella, Málaga og Mijas." },
  nav: { apartment: "Leilighet", gallery: "Galleri", location: "Beliggenhet", reviews: "Omtaler", faq: "Spørsmål" },
  common: { ...en.common, booking: "Se tilgjengelighet på Booking", bookingLong: "Se tilgjengelighet og bestill på Booking.com", whatsapp: "Spør på WhatsApp", whatsappHost: "Spør Nieves på WhatsApp", trust: "Tilgjengelighet, priser og booking sjekkes trygt på Booking.com.", menu: "Åpne meny", size: "Størrelse", guests: "Gjester", beach: "Strand", rating: "Vurdering", language: "Språk" },
  hero: { eyebrow: "Fuengirola · Costa del Sol", title: "Ditt solrike sted nær stranden", text: "En lys og komfortabel leilighet for vintersol, lengre opphold og rolige dager i Fuengirola, nær Marbella og resten av Costa del Sol." },
  summary: { size: "35 m²", guests: "Opptil 4 gjester", beach: "Strand 600 m", rating: "9,4 av 10" },
  winter: { title: "Unnslipp den nordiske vinteren", text: "Når vinteren kommer til Nord-Europa, byr Fuengirola fortsatt på milde dager, åpne terrasser, turer langs sjøen og en avslappet middelhavsrytme store deler av året.", sun: "Mer enn 300 soldager i året", climate: "Mildt klima om vinteren", promenade: "Strandpromenade hele året", terraces: "Restauranter og terrasser åpne", airport: "Enkel adkomst fra Malaga flyplass", long: "Godt egnet for lengre opphold" },
  gallery: { ...en.gallery, title: "Et første blikk på leiligheten og området", intro: "Nåværende referansebilder kan senere erstattes med originale bilder fra overnattingsstedet." },
  description: { title: "Et lyst privat studio nær stranden i Fuengirola", text: "Apartamento Veramar er et lyst studio på 35 m² i Fuengirola, noen minutters gange fra stranden og nær Miramar kjøpesenter, restauranter, supermarkeder og fritidstilbud.", text2: "Boligen har en dobbeltseng og en dobbel sovesofa, og passer for opptil fire personer. Den har utstyrt kjøkken, privat bad, spiseplass, klimaanlegg, oppvarming, gratis Wi-Fi og vaskemaskin.", text3: "I sommersesongen kan gjestene bruke det felles utendørsbassenget og hagen. Beliggenheten gjør det enkelt å utforske Fuengirola til fots og komme til stranden, Sohail-slottet, sentrum og kollektivtransport." },
  services: { ...en.services, title: "Utvalgte fasiliteter", private: "Hele stedet for deg", size: "35 m²", pool: "Utendørsbasseng", wifi: "Gratis Wi-Fi", air: "Klimaanlegg", kitchen: "Utstyrt kjøkken", washer: "Vaskemaskin", lift: "Heis", bathroom: "Privat bad", garden: "Felles hage" },
  amenities: { ...en.amenities, title: "Fullt utstyr" },
  location: { ...en.location, title: "En ideell base for å utforske Costa del Sol", text: "Herfra kan du gå til stranden, supermarkeder og Miramar kjøpesenter. Marbella, Málaga og flere av Costa del Sols mest kjente steder er også lett tilgjengelige.", zoneLabel: "Område", note: "Privilegert beliggenhet, bare noen minutters gange fra stranden, strandpromenaden og Miramar kjøpesenter.", fuengirolaBeach: "Fuengirola-stranden", fuengirolaBeachTime: "≈ 8 min til fots", castleBeach: "El Castillo-stranden", castleBeachTime: "≈ 15 min til fots", miramar: "Miramar kjøpesenter", miramarTime: "≈ 7 min til fots", sohail: "Sohail-slottet", sohailTime: "≈ 15 min til fots", station: "Fuengirola togstasjon", stationTime: "≈ 12 min til fots", boliches: "Los Boliches", mijas: "Mijas Pueblo", marbella: "Marbella, ca.", malagaCenter: "Málaga sentrum, ca.", airport: "Malaga flyplass, ca.", map: "Beliggenhetskart", openMap: "Åpne i OpenStreetMap", airportTitle: "Ankomst fra Malaga flyplass", airportText: "Malaga flyplass ligger omtrent 25 km unna, avhengig av rute. Du kan komme med bil, taxi eller kollektivtransport.", carTitle: "Med bil", carText: "Omtrent 20-25 minutter, avhengig av trafikk.", trainTitle: "Med tog", trainText: "C1-linjen til Fuengirola og en kort tur videre til leiligheten.", airportCardTitle: "Fra flyplassen", airportCardText: "Enkel forbindelse med bil, taxi eller offentlig transport." },
  area: { title: "Alt nær oppholdet ditt", beachesTitle: "Strender", beachesText: "Stranden og strandpromenaden ligger nært for rolige turer, soldager og enkle bad ved Middelhavet.", shoppingTitle: "Shopping", shoppingText: "Miramar kjøpesenter, supermarkeder og daglige tjenester gjør både korte turer og lengre opphold praktiske.", transportTitle: "Transport", transportText: "Tog, taxi og veiforbindelser gjør det enkelt å bevege seg rundt i Fuengirola og på Costa del Sol.", leisureTitle: "Fritid", leisureText: "Sohail-slottet, turer langs sjøen og byliv året rundt gir området en behagelig ferierytme.", airportTitle: "Flyplass", airportText: "Malaga flyplass er enkel å nå med bil, taxi eller offentlig transport." },
  reviews: { ...en.reviews, title: "Gjestevurderinger på Booking.com", source: "Poengene følger overnattingsstedets side på Booking.com da denne nettsiden ble oppdatert. De kan endres med nye omtaler.", overall: "9,4 av 10", comments: "54 omtaler", translated: "Oversatt omtale" },
  nordic: { title: "Derfor liker nordiske gjester Fuengirola", text: "Fuengirola har et etablert internasjonalt miljø og er spesielt kjent for sitt store finske miljø. For mange besøkende fra Finland, Sverige og Norge gjør dette lengre vinteropphold trygge, praktiske og komfortable.", text2: "Internasjonale butikker, restauranter, kosmopolitisk stemning og tjenester som holder åpent hele året gjør byen godt egnet også utenfor sommeren." },
  explore: { title: "Utforsk Costa del Sol", text: "Med Fuengirola som base kan du oppdage Costa del Sol i rolig tempo. Marbella ligger en kort kjøretur unna, mens Málaga, Mijas Pueblo og andre kyststeder passer godt som dagsturer.", fuengirolaTitle: "Fuengirola", fuengirolaTime: "Lokal base", fuengirolaText: "Strand, strandpromenade, restauranter og kollektivtransport nær leiligheten.", marbellaTitle: "Marbella", marbellaTime: "Ca. 30-40 min med bil", marbellaText: "Perfekt beliggenhet for å utforske Marbella og Costa del Sol uten å bo i et mer hektisk feriested.", banusTitle: "Puerto Banús", banusTime: "Ca. 40-45 min med bil", banusText: "En klassisk dagstur for marina, shopping og restauranter.", mijasTitle: "Mijas Pueblo", mijasTime: "Ca. 15-20 min med bil", mijasText: "Hvite gater, utsiktspunkter og en roligere andalusisk rytme.", malagaTitle: "Málaga", malagaTime: "Ca. 35-45 min med tog eller bil", malagaText: "Museer, gamlebyen, shopping og byliv ved havet.", caminitoTitle: "Caminito del Rey", caminitoTime: "Ca. 1 t 15 min med bil", caminitoText: "En minneverdig heldagstur for fjellandskap og vandring." },
  longStay: { title: "Lengre vinteropphold", text: "Apartamento Veramar passer for fjernarbeid, pensjonister, lengre avbrekk og gjester som vil tilbringe flere uker i middelhavsklima fra oktober til mars.", text2: "Oppvarming, klimaanlegg, Wi-Fi, vaskemaskin og utstyrt kjøkken gjør hverdagen enkel under et lengre opphold.", cta: "Spør om lengre opphold", cardTitle: "Ideell for lengre opphold", benefitWifi: "Rask Wi-Fi", benefitKitchen: "Fullt utstyrt kjøkken", benefitWasher: "Vaskemaskin", benefitClimate: "Klimaanlegg og oppvarming", benefitBeach: "Nær stranden", benefitNearby: "Supermarkeder og restauranter noen minutter unna" },
  host: { ...en.host, title: "Verten din, Nieves", text: "Hei, jeg heter Nieves. Jeg hjelper deg gjerne før og under oppholdet, slik at du kan nyte Fuengirola i ro og mak.", text2: "Hvis du har spørsmål før booking om beliggenhet, ankomst, basseng, parkering eller andre detaljer, kan du skrive direkte til meg på WhatsApp.", languages: "Kommunikasjonsspråk: spansk og engelsk." },
  rules: { ...en.rules, title: "Regler og nyttig informasjon", checkin: "Innsjekking: 15.00-21.00. Gjester må oppgi omtrentlig ankomsttid på forhånd.", checkout: "Utsjekking: senest 12.00." },
  faq: { ...en.faq, title: "Spørsmål før booking", checkinQ: "Når kan jeg sjekke inn?", checkinA: "Fra 15.00 til 21.00. Du må oppgi omtrentlig ankomsttid på forhånd.", checkoutQ: "Når må leiligheten forlates?", checkoutA: "Senest 12.00.", questionQ: "Kan jeg stille et spørsmål før booking?" },
  footer: { ...en.footer, legal: "Juridisk informasjon", privacy: "Personvern", cookies: "Informasjonskapsler", current: "For øyeblikket presenterer vi Apartamento Veramar i Fuengirola." },
  cookies: { ...en.cookies, title: "Innstillinger for informasjonskapsler", text: "Vi bruker Google Analytics for å forstå besøk og forbedre nettsiden. Du kan godta eller avslå analyse-informasjonskapsler.", accept: "Godta", reject: "Avslå" },
  legal: { ...en.legal, title: "Juridisk informasjon", cookies: "Dette nettstedet bruker Google Analytics for å måle besøk og forbedre innholdet. Lagring for analyse styres av innstillingene for informasjonskapsler som vises på nettstedet." }
};

export const dictionaries: Record<Locale, Dictionary> = { es, en, fi, sv, no };

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
