import type { GuideCategoryKey } from "@/config/guides";
import { miramarHoursUrl, miramarRetailParkUrl, miramarStoresDirectoryUrl, fuengirolaMarketsCalendarUrl, fuengirolaMarketsUrl, ShoppingArea, ShoppingCategory, ShoppingPrice } from "@/data/shoppingStores";
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
  quickNav: Array<{ href: string; label: string }>;
  quickTitle: string;
  quickLinks: Array<{ title: string; target: string; text: string }>;
  labels: {
    all: string;
    category: string;
    area: string;
    audience: string;
    product: string;
    price: string;
    official: string;
    verified: string;
    showDirectory: string;
  };
  categoryLabels: Record<ShoppingCategory, string>;
  areaLabels: Record<ShoppingArea, string>;
  priceLabels: Record<ShoppingPrice, string>;
  audienceLabels: Record<string, string>;
  productLabels: Record<string, string>;
  storeDescriptions: Record<string, string>;
  sections: Array<{ id: string; title: string; paragraphs: string[] }>;
  miramarTitle: string;
  miramarIntro: string[];
  idealTitle: string;
  idealItems: string[];
  directoryTitle: string;
  directoryIntro: string;
  categorySections: Array<{ id: string; title: string; intro: string; categories: ShoppingCategory[]; note?: string }>;
  beachForgotTitle: string;
  beachForgotItems: string[];
  retailTitle: string;
  retailText: string;
  retailComparison: Array<{ title: string; text: string }>;
  historicTitle: string;
  historicParagraphs: string[];
  historicIdeasTitle: string;
  historicIdeas: string[];
  marketsTitle: string;
  marketsIntro: string;
  markets: Array<{ title: string; when: string; text: string }>;
  municipalMarketsTitle: string;
  municipalMarketsText: string;
  comparisonTitle: string;
  comparison: Array<{ zone: string; bestFor: string; fromApartment: string; type: string }>;
  travellerTitle: string;
  travellers: Array<{ title: string; text: string }>;
  tipsTitle: string;
  tips: string[];
  mapTitle: string;
  mapAria: string;
  mapApartment: string;
  mapApartmentPopup: string;
  mapPoints: Record<"miramar" | "retailPark" | "historicCentre" | "fairground" | "municipalMarket", string>;
  faqTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  officialTitle: string;
  editorialNote: string;
  officialLinks: Array<{ title: string; href: string }>;
  relatedTitle: string;
  related: Array<{ key: GuideCategoryKey; title: string; text: string }>;
  schemaAbout: string[];
};

const storeDescriptions = {
  es: {
    zara: "Moda actual para mujer, hombre y niños, con básicos, prendas de temporada y opciones más arregladas.",
    primark: "Moda económica para mujer, hombre y niños, además de accesorios, belleza y hogar. Muy útil para ropa básica, playa o prendas olvidadas.",
    mango: "Moda de temporada con prendas cómodas y arregladas, especialmente útil para renovar ropa de vacaciones.",
    massimo: "Una alternativa más elegante, con moda clásica y contemporánea para mujer y hombre.",
    hm: "Básicos, moda casual, ropa infantil y accesorios para resolver compras sencillas durante la estancia.",
    ca: "Ropa práctica para mujer, hombre y niños, con tallas amplias y precios medios.",
    bershka: "Moda joven, urbana y casual para compras rápidas de temporada.",
    pullbear: "Ropa informal, denim, camisetas y prendas cómodas para un estilo relajado de vacaciones.",
    stradivarius: "Moda femenina joven, accesorios y prendas de temporada.",
    oysho: "Ropa deportiva, baño, prendas cómodas, lencería y colecciones para yoga, gimnasio o playa.",
    levis: "Denim, camisetas y prendas casual de estilo reconocible.",
    guess: "Moda y complementos de estilo más vestido para salir o comprar un regalo.",
    lacoste: "Moda casual premium, polos, calzado y accesorios.",
    kiabi: "Moda familiar y básicos a precios ajustados en el parque comercial.",
    chika10: "Buena opción para sandalias cómodas, zapatillas, calzado urbano o zapatos para salir.",
    deichmann: "Calzado económico y práctico para adultos y niños.",
    pikolinos: "Calzado cómodo de piel, útil para caminar y para un estilo más cuidado.",
    skechers: "Zapatillas y calzado cómodo para paseos largos o viajes.",
    primor: "Perfumería y cosmética multimarca con perfumes, maquillaje, cuidado facial, capilar y protección solar.",
    rituals: "Productos de baño, cuidado corporal, fragancias de hogar y sets de regalo.",
    kiko: "Maquillaje, esmaltes, productos faciales y colecciones de temporada a precios medios.",
    yvesRocher: "Cosmética, cuidado corporal y productos de belleza de uso diario.",
    mediamarkt: "La opción más completa de la zona para cargadores, adaptadores, auriculares, pequeños electrodomésticos o accesorios informáticos.",
    rossellimac: "Apple Premium Partner para accesorios, dispositivos y soporte relacionado con productos Apple.",
    game: "Videojuegos, consolas, accesorios gaming y regalos para niños o adolescentes.",
    movistar: "Tienda útil para gestiones de telefonía, incidencias o servicios móviles.",
    orange: "Operador móvil para gestiones, tarjetas y consultas de conectividad.",
    decathlon: "Muy práctico para escarpines, gafas de buceo, toallas, bañadores, material acuático, senderismo y deporte.",
    base: "Tienda deportiva orientada a running, entrenamiento, fitness, fútbol y moda deportiva.",
    jd: "Zapatillas y moda deportiva urbana, especialmente para público joven.",
    leroy: "Gran superficie de bricolaje, ferretería, iluminación, baño, jardín y pequeñas reparaciones.",
    jysk: "Tienda de estilo nórdico con textiles, almacenaje, muebles auxiliares y artículos de hogar.",
    zaraHome: "Textiles, decoración, aromas y detalles de hogar con estética cuidada.",
    carrefour: "Hipermercado útil para la primera compra, agua, desayunos, higiene, playa, niños y estancias largas.",
    kiwoko: "Alimentación, accesorios, higiene, juguetes y productos básicos para mascotas.",
    pandora: "Joyería y pequeños regalos fáciles de transportar.",
    tiger: "Objetos pequeños, papelería, regalos, juguetes y básicos divertidos.",
    natura: "Regalos, decoración, aromas, accesorios y pequeños detalles."
  },
  en: {
    zara: "Current fashion for women, men and children, with basics, seasonal pieces and smarter options.",
    primark: "Budget fashion for women, men and children, plus accessories, beauty and home. Useful for basics, beach items or forgotten clothing.",
    mango: "Seasonal fashion with comfortable and smarter pieces, useful for refreshing a holiday wardrobe.",
    massimo: "A more elegant option with classic and contemporary fashion for women and men.",
    hm: "Basics, casual fashion, children’s clothing and accessories for easy holiday shopping.",
    ca: "Practical clothing for women, men and children, with broad sizing and mid-range prices.",
    bershka: "Young, urban and casual fashion for quick seasonal shopping.",
    pullbear: "Casual clothing, denim, T-shirts and relaxed holiday pieces.",
    stradivarius: "Young women’s fashion, accessories and seasonal pieces.",
    oysho: "Sportswear, swimwear, comfortable clothing, lingerie and collections for yoga, gym or beach.",
    levis: "Denim, T-shirts and casual pieces with a recognisable style.",
    guess: "Fashion and accessories with a dressier feel for evenings or gifts.",
    lacoste: "Premium casual fashion, polos, shoes and accessories.",
    kiabi: "Family fashion and basics at accessible prices in the retail park.",
    chika10: "Good for comfortable sandals, trainers, urban shoes or a pair for going out.",
    deichmann: "Budget-friendly practical footwear for adults and children.",
    pikolinos: "Comfortable leather footwear, useful for walking and a neater look.",
    skechers: "Trainers and comfortable shoes for long walks or travel.",
    primor: "Multi-brand perfumery and cosmetics with fragrances, makeup, skincare, haircare and sun protection.",
    rituals: "Bath products, body care, home fragrances and gift sets.",
    kiko: "Makeup, nail products, facial products and seasonal collections at mid-range prices.",
    yvesRocher: "Cosmetics, body care and everyday beauty products.",
    mediamarkt: "The most complete local option for chargers, adapters, headphones, small appliances or computer accessories.",
    rossellimac: "Apple Premium Partner for accessories, devices and Apple-related support.",
    game: "Video games, consoles, gaming accessories and gifts for children or teenagers.",
    movistar: "Useful for mobile service questions, issues or connectivity needs.",
    orange: "Mobile operator for service queries, SIM cards and connectivity questions.",
    decathlon: "Very practical for water shoes, snorkels, towels, swimwear, water gear, hiking and sport.",
    base: "Sports shop focused on running, training, fitness, football and sports fashion.",
    jd: "Trainers and urban sports fashion, especially for younger shoppers.",
    leroy: "Large DIY store for hardware, lighting, bathroom, garden and small repairs.",
    jysk: "Nordic-style store with textiles, storage, small furniture and home items.",
    zaraHome: "Textiles, decoration, scents and home details with a polished look.",
    carrefour: "Hypermarket for first groceries, water, breakfast, hygiene, beach items, children and long stays.",
    kiwoko: "Food, accessories, hygiene, toys and basics for pets.",
    pandora: "Jewellery and small gifts that travel easily.",
    tiger: "Small objects, stationery, gifts, toys and playful basics.",
    natura: "Gifts, decoration, scents, accessories and small details."
  }
} as const;

const commonSections = {
  officialLinks: [
    { title: "Directorio oficial de Miramar", href: miramarStoresDirectoryUrl },
    { title: "Horarios de Miramar", href: miramarHoursUrl },
    { title: "Parque Comercial Miramar", href: miramarRetailParkUrl },
    { title: "Mercadillos de Fuengirola", href: fuengirolaMarketsUrl },
    { title: "Calendario municipal 2026", href: fuengirolaMarketsCalendarUrl }
  ]
};

function nordicStoreDescriptions(locale: "fi" | "sv" | "no"): Record<string, string> {
  if (locale === "fi") {
    return {
      zara: "Ajankohtaista muotia naisille, miehille ja lapsille sekä perusvaatteita ja siistimpiä vaihtoehtoja.",
      primark: "Edullista muotia, asusteita, kauneustuotteita ja kodin pieniä tavaroita. Hyvä unohtuneisiin vaatteisiin ja rantatarpeisiin.",
      mango: "Sesonkimuotia ja mukavia vaatteita lomavaatekaapin täydentämiseen.",
      massimo: "Tyylikkäämpi vaihtoehto klassiseen ja moderniin pukeutumiseen.",
      hm: "Perusvaatteita, lastenvaatteita ja helppoja ostoksia lomalle.",
      ca: "Käytännöllisiä vaatteita koko perheelle ja laaja kokovalikoima.",
      bershka: "Nuorekasta ja rentoa kaupunkimuotia.",
      pullbear: "Rentoja vaatteita, farkkuja ja lomaan sopivia perusvaatteita.",
      stradivarius: "Nuorekasta naisten muotia, asusteita ja sesonkivaatteita.",
      oysho: "Urheiluvaatteita, uimapukuja, alusvaatteita ja mukavia vaatteita rannalle tai joogaan.",
      levis: "Farkkuja, T-paitoja ja rentoa klassista tyyliä.",
      guess: "Muotia ja asusteita hieman juhlavampaan tyyliin tai lahjaksi.",
      lacoste: "Premium-henkistä rentoa muotia, pikeepaitoja, kenkiä ja asusteita.",
      kiabi: "Edullista perhemuotia ja perusvaatteita Parque Comercial Miramarissa.",
      chika10: "Hyvä paikka sandaaleille, tennareille ja mukaville kaupunkikengille.",
      deichmann: "Edullisia ja käytännöllisiä kenkiä aikuisille ja lapsille.",
      pikolinos: "Mukavia nahkakenkiä kävelyyn ja siistimpään pukeutumiseen.",
      skechers: "Mukavia kenkiä pitkiin kävelyihin ja matkustamiseen.",
      primor: "Hajuvesiä, kosmetiikkaa, aurinkosuojaa, hius- ja ihonhoitoa.",
      rituals: "Kylpy- ja vartalotuotteita, kodintuoksuja ja lahjapakkauksia.",
      kiko: "Meikkejä, kynsituotteita ja sesonkikokoelmia keskihintaan.",
      yvesRocher: "Kosmetiikkaa ja vartalonhoitotuotteita arkeen.",
      mediamarkt: "Latureita, adaptereita, kuulokkeita, pieniä kodinkoneita ja tietotekniikan tarvikkeita.",
      rossellimac: "Apple-tuotteisiin liittyviä laitteita, tarvikkeita ja tukea.",
      game: "Pelejä, konsoleita ja pelitarvikkeita.",
      movistar: "Hyödyllinen puhelinliittymien ja mobiilipalvelujen asiointiin.",
      orange: "Mobiilipalveluja, SIM-kortteja ja yhteysasioita.",
      decathlon: "Rantakengät, snorkkelit, pyyhkeet, uima-asut, retkeily ja urheilutarvikkeet.",
      base: "Juoksu, treeni, fitness, jalkapallo ja urheilumuoti.",
      jd: "Tennareita ja urbaania urheilumuotia.",
      leroy: "Rautakauppa, valaistus, kylpyhuone, puutarha ja pienet korjaukset.",
      jysk: "Pohjoismaistyylisiä tekstiilejä, säilytystä, pieniä huonekaluja ja kodintuotteita.",
      zaraHome: "Tekstiilejä, sisustusta, tuoksuja ja viimeisteltyjä kodin yksityiskohtia.",
      carrefour: "Ensimmäinen ruokakauppa, vesi, aamupalat, hygienia, rantatarvikkeet ja pitkät oleskelut.",
      kiwoko: "Ruokaa, tarvikkeita, hygieniaa ja perustarpeita lemmikeille.",
      pandora: "Koruja ja pieniä helposti kuljetettavia lahjoja.",
      tiger: "Pieniä tavaroita, paperituotteita, lahjoja ja leluja.",
      natura: "Lahjoja, sisustusta, tuoksuja ja pieniä yksityiskohtia."
    };
  }
  if (locale === "sv") {
    return Object.fromEntries(Object.entries(nordicStoreDescriptions("fi")).map(([key]) => [key, {
      zara: "Aktuellt mode för dam, herr och barn, med basplagg och mer uppklädda alternativ.",
      primark: "Prisvärt mode, accessoarer, skönhet och hem. Bra för basplagg, strandartiklar och sådant som glömts hemma.",
      mango: "Säsongsmode och bekväma plagg för semesterstilen.",
      massimo: "Ett elegantare alternativ för klassiskt och modernt mode.",
      hm: "Basplagg, barnkläder och enkla semesterköp.",
      ca: "Praktiska kläder för hela familjen och breda storlekar.",
      bershka: "Ungt och avslappnat stadsmode.",
      pullbear: "Lediga plagg, denim och bekväma semesterkläder.",
      stradivarius: "Ungt dammode, accessoarer och säsongsplagg.",
      oysho: "Sport, bad, bekväma plagg och kollektioner för yoga, gym och strand.",
      levis: "Denim, T-shirts och avslappnad klassisk stil.",
      guess: "Mode och accessoarer för en mer uppklädd stil eller presenter.",
      lacoste: "Premium casual, pikétröjor, skor och accessoarer.",
      kiabi: "Prisvärt familjemode och basplagg i Parque Comercial Miramar.",
      chika10: "Bra för sandaler, sneakers och bekväma stadsskor.",
      deichmann: "Prisvärda och praktiska skor för vuxna och barn.",
      pikolinos: "Bekväma läderskor för promenader och en mer vårdad stil.",
      skechers: "Bekväma skor för långa promenader och resor.",
      primor: "Parfym, kosmetik, solskydd, hår- och hudvård.",
      rituals: "Bad- och kroppsvård, hemdofter och presentset.",
      kiko: "Makeup, nagelprodukter och säsongskollektioner.",
      yvesRocher: "Kosmetik och kroppsvård för vardagen.",
      mediamarkt: "Laddare, adaptrar, hörlurar, småapparater och datortillbehör.",
      rossellimac: "Apple-relaterade enheter, tillbehör och support.",
      game: "Spel, konsoler och gamingtillbehör.",
      movistar: "Användbart för mobilärenden och tjänster.",
      orange: "Mobiltjänster, SIM-kort och uppkopplingsfrågor.",
      decathlon: "Badskor, snorklar, handdukar, badkläder, vandring och sportartiklar.",
      base: "Löpning, träning, fitness, fotboll och sportmode.",
      jd: "Sneakers och urbant sportmode.",
      leroy: "Bygg, belysning, badrum, trädgård och små reparationer.",
      jysk: "Nordiska textilier, förvaring, småmöbler och hemartiklar.",
      zaraHome: "Textilier, inredning, dofter och stilrena hemdetaljer.",
      carrefour: "Första matinköpet, vatten, frukost, hygien, strandartiklar och längre vistelser.",
      kiwoko: "Mat, tillbehör, hygien och basvaror för husdjur.",
      pandora: "Smycken och små presenter som är lätta att resa med.",
      tiger: "Småsaker, papper, presenter och leksaker.",
      natura: "Presenter, inredning, dofter och små detaljer."
    }[key] ?? "Praktiskt köpställe i Fuengirola."])) as Record<string, string>;
  }
  const sv = nordicStoreDescriptions("sv");
  return Object.fromEntries(Object.entries(sv).map(([key, value]) => [key, value
    .replaceAll("Prisvärt", "Rimelig")
    .replaceAll("Bra för", "Bra for")
    .replaceAll("och", "og")
    .replaceAll("för", "for")
    .replaceAll("Skor", "Sko")
    .replaceAll("Presenter", "Gaver")])) as Record<string, string>;
}

export const shoppingGuideContent: Record<Locale, ShoppingGuideContent> = {
  es: {
    metaTitle: "Compras en Fuengirola: Miramar, tiendas y mercadillos | Stay Fuengirola",
    metaDescription: "Guía de compras en Fuengirola: tiendas de Miramar, parque comercial, moda, tecnología, deporte, supermercados, centro histórico y mercadillos.",
    breadcrumbGuide: "Guía de Fuengirola",
    breadcrumbArticle: "Compras",
    kicker: "Guía de Fuengirola · Compras",
    h1: "Compras en Fuengirola",
    intro: "Fuengirola ofrece una combinación muy cómoda de grandes marcas, comercios de proximidad, supermercados y tiendas especializadas. Cerca del apartamento encontrarás el Centro Comercial Miramar y su parque comercial, mientras que el centro histórico es ideal para descubrir boutiques, zapaterías y pequeños negocios locales.",
    backLabel: "Volver a la guía",
    quickNav: ["Miramar", "Moda", "Calzado", "Belleza", "Tecnología", "Deporte", "Hogar", "Centro histórico", "Mercadillos", "Consejos"].map((label, index) => ({ label, href: ["#miramar", "#moda", "#calzado", "#belleza", "#tecnologia", "#deporte", "#hogar", "#centro-historico", "#mercadillos", "#consejos"][index] })),
    quickTitle: "Dónde comprar según lo que buscas",
    quickLinks: [
      { title: "Moda y grandes marcas", target: "#moda", text: "Centro Comercial Miramar" },
      { title: "Tecnología y electrónica", target: "#tecnologia", text: "MediaMarkt y tiendas de telefonía" },
      { title: "Deporte y playa", target: "#deporte", text: "Decathlon y tiendas deportivas" },
      { title: "Bricolaje y hogar", target: "#hogar", text: "Leroy Merlin, JYSK y Zara Home" },
      { title: "Compra semanal", target: "#supermercado", text: "Carrefour" },
      { title: "Boutiques y comercio local", target: "#centro-historico", text: "Centro histórico" },
      { title: "Regalos y recuerdos", target: "#centro-historico", text: "Centro y paseo marítimo" },
      { title: "Mercadillos", target: "#mercadillos", text: "Recinto ferial y zona Santa Amalia" }
    ],
    labels: { all: "Todas", category: "Categoría", area: "Zona", audience: "Para", product: "Producto", price: "Rango", official: "Ver en directorio", verified: "Verificado", showDirectory: "Ver directorio completo de Miramar" },
    categoryLabels: { all: "Todas", fashion: "Moda", shoes: "Calzado", beauty: "Belleza", technology: "Tecnología", sport: "Deporte", home: "Hogar", children: "Niños", jewellery: "Joyería", services: "Servicios", supermarket: "Supermercado", pets: "Mascotas", gifts: "Regalos" },
    areaLabels: { miramar: "Centro Comercial Miramar", "retail-park": "Parque Comercial Miramar", "historic-centre": "Centro histórico" },
    priceLabels: { budget: "Económico", mid: "Medio", premium: "Premium" },
    audienceLabels: { all: "Todos", family: "Familias", womenTeen: "Mujer y jóvenes", adults: "Adultos", young: "Público joven", women: "Mujer", gifts: "Regalos", sport: "Deporte", longStay: "Estancias largas", pets: "Mascotas" },
    productLabels: { fashionSeason: "Moda de temporada", basicsBeachHome: "Básicos, playa y hogar", smartFashion: "Moda cuidada", basicsFashion: "Básicos", casualFashion: "Moda casual", sportSwimComfort: "Deporte y baño", denim: "Denim", smartCasual: "Casual premium", shoesAccessories: "Calzado y complementos", shoesBasics: "Calzado práctico", comfortableShoes: "Calzado cómodo", beautySun: "Belleza y solar", beautyGifts: "Belleza y regalos", makeup: "Maquillaje", beautyCare: "Cuidado personal", techTravel: "Tecnología de viaje", apple: "Apple y accesorios", gaming: "Gaming", phoneServices: "Telefonía", sportBeach: "Deporte y playa", sportTraining: "Entrenamiento", sportFashion: "Moda deportiva", homeDiy: "Bricolaje", homeNordic: "Hogar nórdico", homeDecor: "Decoración", dailyShopping: "Compra diaria", petBasics: "Mascotas", jewelleryGifts: "Joyería", giftsSmall: "Regalos pequeños", giftsDecor: "Regalos y decoración" },
    storeDescriptions: storeDescriptions.es,
    miramarTitle: "Centro Comercial Miramar",
    miramarIntro: ["Centro Comercial Miramar está muy cerca del apartamento y se puede plantear a pie si la compra no es voluminosa. Reúne moda, belleza, alimentación, ocio, restauración, hipermercado, cine y aparcamiento.", "El centro indica que cuenta con más de 140 establecimientos y una superficie aproximada de 119.000 m². Es útil tanto para una tarde de compras como para resolver necesidades prácticas durante la estancia."],
    idealTitle: "Ideal para",
    idealItems: ["Ropa para toda la familia", "Calzado y complementos", "Cosmética", "Regalos", "Compra semanal", "Cine", "Restauración", "Compras en días de lluvia"],
    directoryTitle: "Directorio editorial de tiendas útiles",
    directoryIntro: "Una selección práctica de tiendas confirmadas en fuentes oficiales. No mostramos las 140 tiendas: priorizamos las más útiles para visitantes y estancias en Fuengirola.",
    categorySections: [
      { id: "moda", title: "Moda y grandes marcas", intro: "Para ropa de temporada, básicos, baño, prendas arregladas o algo que se haya quedado fuera de la maleta.", categories: ["fashion"] },
      { id: "calzado", title: "Calzado, bolsos y complementos", intro: "Opciones para sandalias, zapatillas cómodas, calzado urbano, bolsos y pequeños accesorios.", categories: ["shoes", "jewellery", "gifts"] },
      { id: "belleza", title: "Belleza y cuidado personal", intro: "Especialmente práctico para protector solar, perfumes, maquillaje, productos de viaje o cosmética olvidada.", categories: ["beauty"] },
      { id: "deporte", title: "Deporte, piscina y playa", intro: "Para artículos de playa, senderismo, entrenamiento, niños o piscina.", categories: ["sport"], note: "La disponibilidad de productos concretos puede variar según temporada." },
      { id: "tecnologia", title: "Tecnología, móviles y accesorios", intro: "Para cargadores, adaptadores, auriculares, telefonía o sustituir un accesorio averiado durante el viaje.", categories: ["technology"] },
      { id: "hogar", title: "Hogar y decoración", intro: "No es la categoría turística habitual, pero resulta útil en estancias largas o si necesitas una pequeña solución para casa, coche o playa.", categories: ["home"] },
      { id: "supermercado", title: "Carrefour y compra diaria", intro: "Para primera compra al llegar, desayuno, agua, higiene, productos de playa, niños, productos internacionales y estancias largas.", categories: ["supermarket", "pets"] }
    ],
    beachForgotTitle: "¿Has olvidado algo para la playa?",
    beachForgotItems: ["Sombrilla", "Escarpines", "Tubo y gafas", "Manguitos", "Bolsa estanca", "Chanclas", "Toalla", "Protección solar"],
    retailTitle: "Parque Comercial Miramar",
    retailText: "Junto al centro comercial se concentran comercios de gran formato como MediaMarkt, Leroy Merlin, Decathlon, Kiwoko, Kiabi y JYSK, según el directorio oficial del área Miramar.",
    retailComparison: [{ title: "Centro Comercial Miramar", text: "Mejor para moda, cosmética, ocio, restaurantes y compras variadas." }, { title: "Parque Comercial Miramar", text: "Mejor para tecnología, deporte, hogar, bricolaje y compras específicas." }],
    historicTitle: "Compras en el centro histórico",
    historicParagraphs: ["El centro histórico ofrece un ambiente más local, con calles peatonales, Plaza de la Constitución, Calle Marbella, Calle España y Avenida Condes de San Isidro como zonas comerciales naturales.", "Es mejor hablar por categorías que inventar nombres de pequeños comercios: boutiques independientes, zapaterías, joyerías, regalos, moda local, comercios tradicionales, perfumerías, librerías, productos gourmet y decoración."],
    historicIdeasTitle: "Ideal para combinar compras con",
    historicIdeas: ["Café en una terraza", "Paseo por la Plaza de la Constitución", "Almuerzo", "Helado", "Paseo marítimo"],
    marketsTitle: "Mercados y mercadillos de Fuengirola",
    marketsIntro: "Fuengirola mantiene mercadillos tradicionales y un rastro de segunda mano. Conviene comprobar el calendario municipal porque pueden suspenderse por ferias o eventos.",
    markets: [{ title: "Mercadillo del martes", when: "Recinto Ferial", text: "Amplio mercadillo con ropa, complementos, calzado, hogar, alimentación y productos variados." }, { title: "Rastro del sábado", when: "Recinto Ferial", text: "Más orientado a segunda mano, coleccionismo, antigüedades y artículos curiosos." }, { title: "Mercadillo del domingo", when: "Calle Méndez Núñez, zona Santa Amalia", text: "Mercadillo con piel, calzado, artesanía, bisutería, bolsos, cerámica, regalos y textil según la información turística municipal." }],
    municipalMarketsTitle: "Mercados municipales",
    municipalMarketsText: "Un supermercado sirve para una compra rápida y amplia; un mercado tradicional se centra en puestos y producto fresco; un mercadillo al aire libre es más informal y depende del día. La información turística municipal describe mercados con puestos, locales, quioscos y aparcamiento público.",
    comparisonTitle: "Comparativa rápida",
    comparison: [{ zone: "Centro Comercial Miramar", bestFor: "Moda, belleza, ocio", fromApartment: "A pie", type: "Grandes marcas" }, { zone: "Parque Comercial Miramar", bestFor: "Deporte, tecnología, hogar", fromApartment: "A pie", type: "Grandes superficies" }, { zone: "Centro histórico", bestFor: "Boutiques y regalos", fromApartment: "Paseo o taxi", type: "Comercio local" }, { zone: "Mercadillos", bestFor: "Ofertas y segunda mano", fromApartment: "Transporte corto", type: "Compra informal" }],
    travellerTitle: "Recomendaciones según el viajero",
    travellers: [{ title: "Para familias", text: "Primark, H&M, C&A, Kiabi, Decathlon y Carrefour." }, { title: "Para moda", text: "Zara, Mango, Massimo Dutti, Stradivarius, Bershka y Pull&Bear." }, { title: "Para artículos olvidados", text: "Carrefour, Primark, MediaMarkt y Decathlon." }, { title: "Para regalos", text: "Rituals, perfumerías, joyerías y tiendas del centro histórico." }, { title: "Para un día de lluvia", text: "Miramar, cine, compras y restauración bajo el mismo techo." }],
    tipsTitle: "Consejos para ir de compras en Fuengirola",
    tips: ["Comprueba horarios en domingos y festivos.", "Conserva tickets para cambios.", "Revisa límites de equipaje si vuelas.", "Ve andando a Miramar si la compra no es voluminosa.", "Usa coche o taxi para Leroy Merlin o compras grandes.", "Evita horas de mayor afluencia en temporada alta.", "Combina el centro histórico con comida o paseo."],
    mapTitle: "Mapa de zonas de compras",
    mapAria: "Mapa con zona aproximada del apartamento y zonas de compras de Fuengirola",
    mapApartment: "Zona aproximada del apartamento",
    mapApartmentPopup: "La ubicación exacta se facilita tras confirmar la reserva.",
    mapPoints: { miramar: "Centro Comercial Miramar", retailPark: "Parque Comercial Miramar", historicCentre: "Centro histórico", fairground: "Recinto ferial", municipalMarket: "Mercado municipal" },
    faqTitle: "Preguntas frecuentes",
    faqs: [{ question: "¿Qué centro comercial está más cerca del apartamento?", answer: "Centro Comercial Miramar y el parque comercial son las opciones más prácticas cerca del apartamento." }, { question: "¿Se puede ir andando a Miramar?", answer: "Sí, se puede plantear andando si no vas a hacer compras voluminosas." }, { question: "¿Qué tiendas hay en Centro Comercial Miramar?", answer: "Hay moda, belleza, tecnología, deporte, alimentación, ocio y servicios. Esta guía selecciona tiendas útiles y enlaza al directorio oficial para el listado completo." }, { question: "¿Dónde comprar artículos para la playa?", answer: "Decathlon, Carrefour y Primark suelen ser opciones prácticas para artículos de playa, según disponibilidad." }, { question: "¿Dónde comprar un cargador o accesorios de móvil?", answer: "MediaMarkt, Rossellimac, Movistar, Orange y otras tiendas de telefonía o tecnología pueden ser útiles." }, { question: "¿Dónde comprar ropa barata en Fuengirola?", answer: "Primark, Kiabi, C&A, H&M y Deichmann son opciones orientadas a compras económicas o medias." }, { question: "¿Dónde comprar productos para mascotas?", answer: "Kiwoko, en el Parque Comercial Miramar, es la referencia destacada en esta guía." }, { question: "¿Qué días hay mercadillo en Fuengirola?", answer: "La información turística municipal indica mercadillos martes y domingos, y rastro los sábados. Comprueba el calendario por posibles suspensiones." }, { question: "¿Dónde comprar regalos o productos locales?", answer: "El centro histórico, el paseo marítimo, Rituals, Natura, Flying Tiger Copenhagen y joyerías son buenas opciones según lo que busques." }],
    officialTitle: "Información oficial",
    editorialNote: "La oferta comercial puede cambiar. Consulta el directorio oficial antes de desplazarte si buscas una tienda concreta.",
    officialLinks: commonSections.officialLinks,
    relatedTitle: "También te puede interesar",
  related: [{ key: "supermarkets", title: "Supermercados", text: "Dónde hacer la primera compra y compras grandes." }, { key: "restaurants", title: "Restaurantes", text: "Dónde comer después de comprar." }, { key: "beaches", title: "Playas", text: "Planes junto al mar cerca del apartamento." }, { key: "thingsToDo", title: "Qué hacer", text: "Más ideas para tu estancia." }, { key: "airport", title: "Cómo llegar desde el aeropuerto", text: "Transporte desde Málaga." }],
    sections: [],
    schemaAbout: ["compras en Fuengirola", "Centro Comercial Miramar", "Parque Comercial Miramar", "Primark Fuengirola", "Decathlon Fuengirola", "MediaMarkt Fuengirola", "mercadillo Fuengirola"]
  },
  en: {} as ShoppingGuideContent,
  fi: {} as ShoppingGuideContent,
  sv: {} as ShoppingGuideContent,
  no: {} as ShoppingGuideContent
};

shoppingGuideContent.en = {
  ...shoppingGuideContent.es,
  metaTitle: "Shopping in Fuengirola: Miramar, stores and markets | Stay Fuengirola",
  metaDescription: "Shopping guide in Fuengirola: Miramar shops, retail park, fashion, technology, sports, supermarkets, old town and street markets.",
  breadcrumbGuide: "Fuengirola Guide",
  breadcrumbArticle: "Shopping",
  kicker: "Fuengirola Guide · Shopping",
  h1: "Shopping in Fuengirola",
  intro: "Fuengirola offers an easy mix of major brands, local shops, supermarkets and specialist stores. Near the apartment you have Centro Comercial Miramar and its retail park, while the old town is ideal for boutiques, shoe shops and small local businesses.",
  backLabel: "Back to the guide",
  quickNav: ["Miramar", "Fashion", "Shoes", "Beauty", "Technology", "Sport", "Home", "Old town", "Markets", "Tips"].map((label, index) => ({ label, href: shoppingGuideContent.es.quickNav[index].href })),
  quickTitle: "Where to shop depending on what you need",
  labels: { all: "All", category: "Category", area: "Area", audience: "For", product: "Product", price: "Range", official: "View in directory", verified: "Verified", showDirectory: "View full Miramar directory" },
  categoryLabels: { all: "All", fashion: "Fashion", shoes: "Shoes", beauty: "Beauty", technology: "Technology", sport: "Sport", home: "Home", children: "Children", jewellery: "Jewellery", services: "Services", supermarket: "Supermarket", pets: "Pets", gifts: "Gifts" },
  areaLabels: { miramar: "Centro Comercial Miramar", "retail-park": "Parque Comercial Miramar", "historic-centre": "Old town" },
  priceLabels: { budget: "Budget", mid: "Mid-range", premium: "Premium" },
  storeDescriptions: storeDescriptions.en,
  miramarIntro: ["Centro Comercial Miramar is very close to the apartment and works well on foot if your shopping is not bulky. It brings together fashion, beauty, groceries, leisure, restaurants, a hypermarket, cinema and parking.", "The centre states that it has more than 140 shops and around 119,000 m². It is useful both for an afternoon of shopping and for practical needs during your stay."],
  directoryIntro: "A practical selection of stores confirmed in official sources. We do not show all 140 shops: this guide prioritises the most useful ones for visitors and stays in Fuengirola.",
  categorySections: shoppingGuideContent.es.categorySections.map((s) => ({ ...s, title: ({ "Moda y grandes marcas": "Fashion and major brands", "Calzado, bolsos y complementos": "Shoes, bags and accessories", "Belleza y cuidado personal": "Beauty and personal care", "Deporte, piscina y playa": "Sport, pool and beach", "Tecnología, móviles y accesorios": "Technology, phones and accessories", "Hogar y decoración": "Home and decoration", "Carrefour y compra diaria": "Carrefour and daily shopping" } as Record<string,string>)[s.title] ?? s.title })),
  marketsTitle: "Markets and street markets in Fuengirola",
  historicTitle: "Shopping in the old town",
  faqTitle: "Frequently asked questions",
  officialTitle: "Official information",
  editorialNote: "The commercial offer may change. Check the official directory before travelling if you need a specific shop.",
  relatedTitle: "You may also like"
};

shoppingGuideContent.fi = {
  ...shoppingGuideContent.en,
  metaTitle: "Ostokset Fuengirolassa: Miramar, liikkeet ja markkinat | Stay Fuengirola",
  metaDescription: "Ostosopas Fuengirolaan: Miramar, muoti, teknologia, urheilu, supermarketit, vanha keskusta ja markkinat.",
  breadcrumbGuide: "Fuengirola-opas",
  breadcrumbArticle: "Ostokset",
  kicker: "Fuengirola-opas · Ostokset",
  h1: "Ostokset Fuengirolassa",
  intro: "Fuengirolassa on helppo yhdistää suuret merkit, paikalliset liikkeet, supermarketit ja erikoisliikkeet. Asunnon lähellä ovat Centro Comercial Miramar ja sen parque comercial, kun taas vanha keskusta sopii putiikkeihin, kenkäkauppoihin ja paikallisiin ostoksiin.",
  backLabel: "Takaisin oppaaseen",
  quickNav: ["Miramar", "Muoti", "Kengät", "Kauneus", "Teknologia", "Urheilu", "Koti", "Vanha keskusta", "Markkinat", "Vinkit"].map((label, index) => ({ label, href: shoppingGuideContent.es.quickNav[index].href })),
  quickTitle: "Mistä ostaa sen mukaan, mitä tarvitset",
  quickLinks: shoppingGuideContent.es.quickLinks.map((item) => ({ ...item, title: item.title.replace("Moda y grandes marcas", "Muoti ja suuret merkit").replace("Tecnología y electrónica", "Teknologia ja elektroniikka").replace("Deporte y playa", "Urheilu ja ranta").replace("Bricolaje y hogar", "Koti ja pienet korjaukset").replace("Compra semanal", "Viikon ostokset").replace("Boutiques y comercio local", "Putiikit ja paikalliset liikkeet").replace("Regalos y recuerdos", "Lahjat ja muistot").replace("Mercadillos", "Markkinat") })),
  labels: { all: "Kaikki", category: "Kategoria", area: "Alue", audience: "Kenelle", product: "Tuote", price: "Hintataso", official: "Avaa hakemistossa", verified: "Tarkistettu", showDirectory: "Avaa Miramarin koko hakemisto" },
  categoryLabels: { ...shoppingGuideContent.en.categoryLabels, all: "Kaikki", fashion: "Muoti", shoes: "Kengät", beauty: "Kauneus", technology: "Teknologia", sport: "Urheilu", home: "Koti", children: "Lapset", supermarket: "Supermarketit", pets: "Lemmikit", gifts: "Lahjat" },
  areaLabels: { miramar: "Centro Comercial Miramar", "retail-park": "Parque Comercial Miramar", "historic-centre": "Vanha keskusta" },
  priceLabels: { budget: "Edullinen", mid: "Keskitaso", premium: "Premium" },
  storeDescriptions: nordicStoreDescriptions("fi"),
  miramarTitle: "Centro Comercial Miramar",
  miramarIntro: ["Centro Comercial Miramar on hyvin lähellä asuntoa ja sinne voi mennä kävellen, jos ostokset eivät ole suuria.", "Keskus kertoo, että siellä on yli 140 liikettä ja noin 119 000 m². Se sopii ostospäivään ja käytännön tarpeisiin loman aikana."],
  idealTitle: "Sopii erityisesti",
  directoryTitle: "Hyödyllisten liikkeiden toimituksellinen valikoima",
  directoryIntro: "Valikoima virallisista lähteistä vahvistettuja liikkeitä. Emme näytä kaikkia 140 liikettä, vaan matkailijalle hyödyllisimmät.",
  historicTitle: "Ostokset vanhassa keskustassa",
  marketsTitle: "Fuengirolan markkinat",
  mapTitle: "Ostosalueiden kartta",
  faqTitle: "Usein kysytyt kysymykset",
  officialTitle: "Virallinen tieto",
  editorialNote: "Liikevalikoima voi muuttua. Tarkista virallinen hakemisto ennen lähtöä, jos etsit tiettyä liikettä.",
  relatedTitle: "Saatat pitää myös näistä"
};
shoppingGuideContent.sv = {
  ...shoppingGuideContent.fi,
  metaTitle: "Shopping i Fuengirola: Miramar, butiker och marknader | Stay Fuengirola",
  metaDescription: "Shoppingguide i Fuengirola: Miramar, mode, teknik, sport, supermarket, gamla stan och marknader.",
  breadcrumbGuide: "Fuengirola-guide",
  breadcrumbArticle: "Shopping",
  kicker: "Fuengirola-guide · Shopping",
  h1: "Shopping i Fuengirola",
  intro: "Fuengirola kombinerar stora varumärken, lokala butiker, supermarket och specialbutiker på ett enkelt sätt. Nära lägenheten finns Centro Comercial Miramar och dess retail park, medan gamla stan passar för boutiquer, skobutiker och lokala köp.",
  backLabel: "Tillbaka till guiden",
  quickNav: ["Miramar", "Mode", "Skor", "Skönhet", "Teknik", "Sport", "Hem", "Gamla stan", "Marknader", "Tips"].map((label, index) => ({ label, href: shoppingGuideContent.es.quickNav[index].href })),
  quickTitle: "Var du ska handla beroende på vad du behöver",
  labels: { all: "Alla", category: "Kategori", area: "Område", audience: "För", product: "Produkt", price: "Prisnivå", official: "Visa i katalogen", verified: "Kontrollerad", showDirectory: "Visa hela Miramar-katalogen" },
  categoryLabels: { ...shoppingGuideContent.en.categoryLabels, all: "Alla", fashion: "Mode", shoes: "Skor", beauty: "Skönhet", technology: "Teknik", sport: "Sport", home: "Hem", children: "Barn", supermarket: "Supermarket", pets: "Husdjur", gifts: "Presenter" },
  areaLabels: { miramar: "Centro Comercial Miramar", "retail-park": "Parque Comercial Miramar", "historic-centre": "Gamla stan" },
  priceLabels: { budget: "Prisvärd", mid: "Mellan", premium: "Premium" },
  storeDescriptions: nordicStoreDescriptions("sv"),
  miramarIntro: ["Centro Comercial Miramar ligger mycket nära lägenheten och fungerar bra till fots om köpen inte är skrymmande.", "Centret anger fler än 140 butiker och cirka 119 000 m². Det passar både shopping och praktiska behov under vistelsen."],
  idealTitle: "Passar för",
  directoryTitle: "Redaktionellt urval av användbara butiker",
  directoryIntro: "Ett praktiskt urval av butiker bekräftade i officiella källor. Vi visar inte alla 140 butiker, utan de mest relevanta för besökare.",
  historicTitle: "Shopping i gamla stan",
  marketsTitle: "Marknader i Fuengirola",
  mapTitle: "Karta över shoppingområden",
  faqTitle: "Vanliga frågor",
  officialTitle: "Officiell information",
  editorialNote: "Butiksutbudet kan ändras. Kontrollera den officiella katalogen innan du åker om du söker en specifik butik.",
  relatedTitle: "Du kanske också gillar"
};
shoppingGuideContent.no = {
  ...shoppingGuideContent.sv,
  metaTitle: "Shopping i Fuengirola: Miramar, butikker og markeder | Stay Fuengirola",
  metaDescription: "Shoppingguide i Fuengirola: Miramar, mote, teknologi, sport, supermarked, gamlebyen og markeder.",
  breadcrumbGuide: "Fuengirola-guide",
  breadcrumbArticle: "Shopping",
  kicker: "Fuengirola-guide · Shopping",
  h1: "Shopping i Fuengirola",
  intro: "Fuengirola kombinerer store merker, lokale butikker, supermarkeder og spesialbutikker på en enkel måte. Nær leiligheten ligger Centro Comercial Miramar og handelsparken, mens gamlebyen passer for boutiquer, skobutikker og lokale kjøp.",
  backLabel: "Tilbake til guiden",
  quickNav: ["Miramar", "Mote", "Sko", "Skjønnhet", "Teknologi", "Sport", "Hjem", "Gamlebyen", "Markeder", "Tips"].map((label, index) => ({ label, href: shoppingGuideContent.es.quickNav[index].href })),
  quickTitle: "Hvor du bør handle etter hva du trenger",
  labels: { all: "Alle", category: "Kategori", area: "Område", audience: "For", product: "Produkt", price: "Prisnivå", official: "Vis i katalogen", verified: "Kontrollert", showDirectory: "Vis hele Miramar-katalogen" },
  categoryLabels: { ...shoppingGuideContent.en.categoryLabels, all: "Alle", fashion: "Mote", shoes: "Sko", beauty: "Skjønnhet", technology: "Teknologi", sport: "Sport", home: "Hjem", children: "Barn", supermarket: "Supermarked", pets: "Kjæledyr", gifts: "Gaver" },
  areaLabels: { miramar: "Centro Comercial Miramar", "retail-park": "Parque Comercial Miramar", "historic-centre": "Gamlebyen" },
  priceLabels: { budget: "Rimelig", mid: "Middels", premium: "Premium" },
  storeDescriptions: nordicStoreDescriptions("no"),
  miramarIntro: ["Centro Comercial Miramar ligger svært nær leiligheten og kan nås til fots hvis kjøpene ikke er store.", "Senteret oppgir mer enn 140 butikker og omtrent 119 000 m². Det passer både til shopping og praktiske behov under oppholdet."],
  idealTitle: "Passer for",
  directoryTitle: "Redaksjonelt utvalg av nyttige butikker",
  directoryIntro: "Et praktisk utvalg av butikker bekreftet i offisielle kilder. Vi viser ikke alle 140 butikkene, men de mest relevante for besøkende.",
  historicTitle: "Shopping i gamlebyen",
  marketsTitle: "Markeder i Fuengirola",
  mapTitle: "Kart over shoppingområder",
  faqTitle: "Ofte stilte spørsmål",
  officialTitle: "Offisiell informasjon",
  editorialNote: "Butikkutvalget kan endre seg. Sjekk den offisielle katalogen før du drar hvis du leter etter en bestemt butikk.",
  relatedTitle: "Du vil kanskje også like"
};

Object.assign(shoppingGuideContent.en, {
  quickLinks: shoppingGuideContent.en.quickLinks.map((item, index) => ({
    ...item,
    text: ["Centro Comercial Miramar", "MediaMarkt and phone shops", "Decathlon and sports shops", "Leroy Merlin, JYSK and Zara Home", "Carrefour", "Old town", "Town centre and seafront promenade", "Fairground and Santa Amalia area"][index]
  })),
  idealItems: ["Forgotten clothes", "Beach items", "Cosmetics", "Technology", "Long-stay shopping"],
  categorySections: [
    { id: "moda", title: "Fashion and major brands", intro: "Miramar is the easiest place for clothes, shoes and accessories during your stay.", categories: ["fashion"] as ShoppingCategory[] },
    { id: "calzado", title: "Shoes, bags and accessories", intro: "Useful options for sandals, comfortable shoes and a smarter evening pair.", categories: ["shoes", "jewellery"] as ShoppingCategory[] },
    { id: "belleza", title: "Beauty and personal care", intro: "Practical for sun protection, cosmetics, gifts and everyday care products.", categories: ["beauty"] as ShoppingCategory[] },
    { id: "deporte", title: "Sport, pool and beach", intro: "Useful for beach days, water activities, walking and training.", categories: ["sport"] as ShoppingCategory[] },
    { id: "tecnologia", title: "Technology, phones and accessories", intro: "For chargers, adapters, headphones and mobile service needs.", categories: ["technology", "services"] as ShoppingCategory[] },
    { id: "hogar", title: "Home and decoration", intro: "Useful during longer stays or for small home, car or beach solutions.", categories: ["home"] as ShoppingCategory[] },
    { id: "supermercado", title: "Carrefour and daily shopping", intro: "For first groceries, water, hygiene, beach items, children and longer stays.", categories: ["supermarket", "pets"] as ShoppingCategory[] }
  ],
  beachForgotTitle: "Forgot something for the beach?",
  beachForgotItems: ["Parasol", "Water shoes", "Snorkel", "Armbands", "Dry bag", "Flip-flops", "Towel", "Sun protection"],
  retailText: "Next to the shopping centre, the retail park brings together larger stores such as MediaMarkt, Leroy Merlin, Decathlon, Kiwoko, Kiabi and JYSK, according to the official Miramar directory.",
  retailComparison: [{ title: "Centro Comercial Miramar", text: "Best for fashion, cosmetics, leisure, restaurants and varied shopping." }, { title: "Parque Comercial Miramar", text: "Best for technology, sport, home, DIY and specific purchases." }],
  historicParagraphs: ["Fuengirola old town has a more local feel, with pedestrian streets, squares and small shops.", "It is better to think in categories than invent names of small businesses: independent boutiques, shoe shops, jewellery, gifts, local fashion, traditional shops and gourmet products."],
  historicIdeasTitle: "Good to combine shopping with",
  historicIdeas: ["Coffee on a terrace", "A walk through the centre", "Lunch", "Ice cream", "Seafront promenade"],
  marketsIntro: "Fuengirola has traditional markets and a second-hand market. Check the municipal calendar because events may be suspended.",
  markets: [{ title: "Tuesday market", when: "Fairground", text: "Large market for clothing, accessories, shoes, home items, food and varied products." }, { title: "Saturday second-hand market", when: "Fairground", text: "More focused on second-hand items, collectibles, antiques and curious finds." }, { title: "Sunday market", when: "Santa Amalia area", text: "Market with crafts, jewellery, bags, ceramics, gifts and textiles according to municipal tourism information." }],
  municipalMarketsText: "A supermarket is best for a quick broad shop; a traditional market focuses on fresh products; an outdoor market is more informal and depends on the day.",
  comparison: [{ zone: "Centro Comercial Miramar", bestFor: "Fashion, beauty, leisure", fromApartment: "On foot", type: "Major brands" }, { zone: "Parque Comercial Miramar", bestFor: "Sport, technology, home", fromApartment: "On foot", type: "Large stores" }, { zone: "Old town", bestFor: "Boutiques and gifts", fromApartment: "Walk or taxi", type: "Local shops" }, { zone: "Markets", bestFor: "Finds and second hand", fromApartment: "Short transfer", type: "Informal shopping" }],
  travellerTitle: "Recommendations by traveller",
  travellers: [{ title: "For families", text: "Primark, H&M, C&A, Kiabi, Decathlon and Carrefour." }, { title: "For fashion", text: "Zara, Mango, Massimo Dutti, Stradivarius, Bershka and Pull&Bear." }, { title: "For forgotten items", text: "Carrefour, Primark, MediaMarkt and Decathlon." }, { title: "For gifts", text: "Rituals, perfumeries, jewellery shops and old town stores." }, { title: "For a rainy day", text: "Miramar, cinema, shopping and restaurants under the same roof." }],
  tips: ["Check opening times on Sundays and public holidays.", "Keep receipts for exchanges.", "Remember luggage limits if you fly.", "Walk to Miramar if shopping is not bulky.", "Use a car or taxi for large purchases.", "Avoid peak times in high season.", "Combine the old town with food or a walk."],
  mapPoints: { miramar: "Centro Comercial Miramar", retailPark: "Parque Comercial Miramar", historicCentre: "Old town", fairground: "Fairground", municipalMarket: "Municipal market" },
  faqs: [{ question: "Which shopping centre is closest to the apartment?", answer: "Centro Comercial Miramar and the retail park are the most practical options close to the apartment." }, { question: "Can you walk to Miramar?", answer: "Yes, if you are not buying bulky or heavy items." }, { question: "What shops are in Centro Comercial Miramar?", answer: "There is fashion, beauty, technology, sport, food, leisure and services. Check the official directory for the full list." }, { question: "Where can I buy beach items?", answer: "Decathlon, Carrefour and Primark are practical options depending on availability." }, { question: "Where can I buy a charger or phone accessories?", answer: "MediaMarkt, Rossellimac, Movistar and Orange can be useful." }, { question: "Where can I buy affordable clothes?", answer: "Primark, Kiabi, C&A, H&M and Deichmann are budget or mid-range options." }, { question: "Where can I buy pet products?", answer: "Kiwoko is the main pet store highlighted in this guide." }, { question: "When are the Fuengirola markets?", answer: "Municipal tourism information lists markets on Tuesdays and Sundays and a second-hand market on Saturdays. Check the calendar." }, { question: "Where can I buy gifts?", answer: "The old town, seafront promenade, Rituals, Natura, Flying Tiger Copenhagen and jewellery shops are good options." }],
  officialLinks: [{ title: "Official Miramar directory", href: miramarStoresDirectoryUrl }, { title: "Miramar opening times", href: miramarHoursUrl }, { title: "Parque Comercial Miramar", href: miramarRetailParkUrl }, { title: "Fuengirola markets", href: fuengirolaMarketsUrl }, { title: "Municipal calendar 2026", href: fuengirolaMarketsCalendarUrl }],
  related: [{ key: "supermarkets", title: "Supermarkets", text: "Where to do the first grocery shop and larger purchases." }, { key: "restaurants", title: "Restaurants", text: "Where to eat after shopping." }, { key: "beaches", title: "Beaches", text: "Plans by the sea near the apartment." }, { key: "thingsToDo", title: "Things to do", text: "More ideas for your stay." }, { key: "airport", title: "From the airport", text: "Transport from Malaga." }]
});

const shoppingLocaleOverrides: Record<string, any> = {
  fi: {
    quickLinks: [
      { title: "Muoti ja suuret merkit", text: "Centro Comercial Miramar" },
      { title: "Teknologia ja elektroniikka", text: "MediaMarkt ja puhelinliikkeet" },
      { title: "Urheilu ja ranta", text: "Decathlon ja urheiluliikkeet" },
      { title: "Koti ja pienet korjaukset", text: "Leroy Merlin, JYSK ja Zara Home" },
      { title: "Viikon ostokset", text: "Carrefour" },
      { title: "Putiikit ja paikalliset liikkeet", text: "Vanha keskusta" },
      { title: "Lahjat ja muistot", text: "Keskusta ja rantakatu" },
      { title: "Markkinat", text: "Recinto Ferial ja Santa Amalia" }
    ],
    idealItems: ["Unohtuneet vaatteet", "Rantatarvikkeet", "Kosmetiikka", "Teknologia", "Pitkän oleskelun ostokset"],
    categorySections: [
      { id: "moda", title: "Muoti ja suuret merkit", intro: "Miramar on helpoin paikka vaatteille, kengille ja asusteille loman aikana.", categories: ["fashion"] as ShoppingCategory[] },
      { id: "calzado", title: "Kengät, laukut ja asusteet", intro: "Käytännöllisiä vaihtoehtoja sandaaleihin, mukaviin kenkiin ja iltamenoihin.", categories: ["shoes", "jewellery"] as ShoppingCategory[] },
      { id: "belleza", title: "Kauneus ja ihonhoito", intro: "Hyvä osasto aurinkosuojalle, kosmetiikalle, lahjoille ja päivittäisille tuotteille.", categories: ["beauty"] as ShoppingCategory[] },
      { id: "deporte", title: "Urheilu, uima-allas ja ranta", intro: "Käytännöllinen rannalle, vesiliikuntaan, kävelyyn ja treeniin.", categories: ["sport"] as ShoppingCategory[] },
      { id: "tecnologia", title: "Teknologia, puhelimet ja tarvikkeet", intro: "Latureihin, adaptereihin, kuulokkeisiin ja puhelinasioihin.", categories: ["technology", "services"] as ShoppingCategory[] },
      { id: "hogar", title: "Koti ja sisustus", intro: "Hyödyllinen pitkällä oleskelulla tai kodin pieniin tarpeisiin.", categories: ["home"] as ShoppingCategory[] },
      { id: "supermercado", title: "Carrefour ja arjen ostokset", intro: "Ensimmäiseen ruokakauppaan, veteen, hygieniaan, rantatarvikkeisiin ja pitkiin oleskeluihin.", categories: ["supermarket", "pets"] as ShoppingCategory[] }
    ],
    beachForgotTitle: "Unohtuiko jotain rannalle?",
    beachForgotItems: ["Aurinkovarjo", "Rantakengät", "Snorkkeli", "Kellukkeet", "Vesitiivis pussi", "Sandaalit", "Pyyhe", "Aurinkosuoja"],
    retailText: "Miramarin kauppapuistossa on suuria liikkeitä kuten MediaMarkt, Leroy Merlin, Decathlon, Kiwoko, Kiabi ja JYSK virallisen hakemiston mukaan.",
    retailComparison: [{ title: "Centro Comercial Miramar", text: "Paras muodille, kosmetiikalle, vapaa-ajalle, ravintoloille ja vaihteleville ostoksille." }, { title: "Parque Comercial Miramar", text: "Paras teknologialle, urheilulle, kodille, korjauksille ja täsmäostoksille." }],
    historicParagraphs: ["Vanha keskusta tarjoaa paikallisemman tunnelman kävelykaduilla, aukioilla ja pienissä liikkeissä.", "Tässä on parempi puhua kategorioista kuin keksiä yksittäisiä nimiä: putiikit, kenkäkaupat, lahjat, paikallinen muoti, perinteiset liikkeet ja pienet gourmet-tuotteet."],
    historicIdeasTitle: "Hyvä yhdistää ostoksiin",
    historicIdeas: ["Kahvi terassilla", "Kävely keskustassa", "Lounas", "Jäätelö", "Rantakatu"],
    marketsIntro: "Fuengirolassa on perinteisiä markkinoita ja kirpputorityyppinen tapahtuma. Tarkista kunnan kalenteri, koska tapahtumia voidaan perua.",
    markets: [{ title: "Tiistain markkinat", when: "Recinto Ferial", text: "Laaja markkina vaatteille, asusteille, kengille, kotiin ja moniin arjen tuotteisiin." }, { title: "Lauantain kirpputori", when: "Recinto Ferial", text: "Painottuu käytettyihin tuotteisiin, keräilyyn ja erikoisempiin löytöihin." }, { title: "Sunnuntain markkinat", when: "Santa Amalian alue", text: "Markkina käsityölle, lahjoille, laukuille, koruille ja tekstiileille kunnan matkailutiedon mukaan." }],
    municipalMarketsText: "Supermarket sopii nopeaan ja laajaan ostokseen; perinteinen markkina keskittyy tuoreisiin tuotteisiin; ulkomarkkina riippuu päivästä ja säästä.",
    comparison: [{ zone: "Centro Comercial Miramar", bestFor: "Muoti, kauneus, vapaa-aika", fromApartment: "Kävellen", type: "Suuret merkit" }, { zone: "Parque Comercial Miramar", bestFor: "Urheilu, teknologia, koti", fromApartment: "Kävellen", type: "Suuret liikkeet" }, { zone: "Vanha keskusta", bestFor: "Putiikit ja lahjat", fromApartment: "Kävely tai taksi", type: "Paikalliset liikkeet" }, { zone: "Markkinat", bestFor: "Löydöt ja käytetyt tavarat", fromApartment: "Lyhyt kulku", type: "Rento ostos" }],
    travellerTitle: "Suositukset matkailijan mukaan",
    travellers: [{ title: "Perheille", text: "Primark, H&M, C&A, Kiabi, Decathlon ja Carrefour." }, { title: "Muotiin", text: "Zara, Mango, Massimo Dutti, Stradivarius, Bershka ja Pull&Bear." }, { title: "Unohtuneisiin tavaroihin", text: "Carrefour, Primark, MediaMarkt ja Decathlon." }, { title: "Lahjoihin", text: "Rituals, kosmetiikkaliikkeet, koruliikkeet ja vanha keskusta." }, { title: "Sadepäivään", text: "Miramar, elokuvat, ostokset ja ravintolat saman katon alla." }],
    tips: ["Tarkista sunnuntain ja pyhäpäivien aukioloajat.", "Säilytä kuitit vaihtoja varten.", "Muista matkatavaroiden rajat lennolla.", "Kävele Miramariin, jos ostokset eivät ole suuria.", "Käytä autoa tai taksia isoihin ostoksiin.", "Vältä ruuhkaisimpia aikoja sesongissa.", "Yhdistä keskusta ruokaan tai kävelyyn."],
    mapPoints: { miramar: "Centro Comercial Miramar", retailPark: "Parque Comercial Miramar", historicCentre: "Vanha keskusta", fairground: "Recinto Ferial", municipalMarket: "Kunnallinen markkina" },
    faqs: [{ question: "Mikä ostoskeskus on lähimpänä asuntoa?", answer: "Centro Comercial Miramar ja kauppapuisto ovat käytännöllisimmät vaihtoehdot lähellä asuntoa." }, { question: "Voiko Miramariin kävellä?", answer: "Kyllä, jos et osta suuria tai painavia tavaroita." }, { question: "Mitä kauppoja Miramarissa on?", answer: "Muotia, kauneutta, teknologiaa, urheilua, ruokaa, vapaa-aikaa ja palveluja. Täysi lista kannattaa tarkistaa virallisesta hakemistosta." }, { question: "Mistä ostaa rantatarvikkeita?", answer: "Decathlon, Carrefour ja Primark ovat käytännöllisiä vaihtoehtoja saatavuuden mukaan." }, { question: "Mistä saa laturin tai puhelintarvikkeita?", answer: "MediaMarkt, Rossellimac, Movistar ja Orange voivat olla hyödyllisiä." }, { question: "Mistä löytää edullisia vaatteita?", answer: "Primark, Kiabi, C&A, H&M ja Deichmann ovat edullisia tai keskihintaisia vaihtoehtoja." }, { question: "Mistä ostaa lemmikkitarvikkeita?", answer: "Kiwoko on tämän oppaan tärkein lemmikkiliike Miramarin kauppapuistossa." }, { question: "Milloin Fuengirolassa on markkinoita?", answer: "Kunnan matkailutieto kertoo markkinoista tiistaisin ja sunnuntaisin sekä kirpputorista lauantaisin. Tarkista kalenteri." }, { question: "Mistä ostaa lahjoja?", answer: "Vanha keskusta, rantakatu, Rituals, Natura, Flying Tiger Copenhagen ja koruliikkeet ovat hyviä vaihtoehtoja." }],
    officialLinks: [{ title: "Miramarin virallinen hakemisto", href: miramarStoresDirectoryUrl }, { title: "Miramarin aukioloajat", href: miramarHoursUrl }, { title: "Parque Comercial Miramar", href: miramarRetailParkUrl }, { title: "Fuengirolan markkinat", href: fuengirolaMarketsUrl }, { title: "Kunnan kalenteri 2026", href: fuengirolaMarketsCalendarUrl }],
    related: [{ key: "supermarkets", title: "Supermarketit", text: "Ensimmäinen ruokaostos ja isommat hankinnat." }, { key: "restaurants", title: "Ravintolat", text: "Missä syödä ostosten jälkeen." }, { key: "beaches", title: "Rannat", text: "Suunnitelmia meren äärellä." }, { key: "thingsToDo", title: "Mitä tehdä", text: "Lisää ideoita oleskeluun." }, { key: "airport", title: "Saapuminen lentoasemalta", text: "Kulku Malagasta." }]
  }
};

shoppingLocaleOverrides.sv = {
  ...shoppingLocaleOverrides.fi,
  quickLinks: shoppingLocaleOverrides.fi.quickLinks.map((item: { title: string; text: string }) => ({ ...item, title: item.title.replace("Muoti ja suuret merkit", "Mode och stora märken").replace("Teknologia ja elektroniikka", "Teknik och elektronik").replace("Urheilu ja ranta", "Sport och strand").replace("Koti ja pienet korjaukset", "Hem och små behov").replace("Viikon ostokset", "Veckans inköp").replace("Putiikit ja paikalliset liikkeet", "Boutiquer och lokala butiker").replace("Lahjat ja muistot", "Presenter och minnen").replace("Markkinat", "Marknader"), text: item.text.replace("Vanha keskusta", "Gamla stan").replace("Keskusta ja rantakatu", "Centrum och strandpromenaden") })),
  idealItems: ["Glömda kläder", "Strandartiklar", "Kosmetik", "Teknik", "Inköp för längre vistelser"],
  beachForgotTitle: "Har du glömt något till stranden?",
  travellerTitle: "Rekommendationer efter resenär",
  historicIdeasTitle: "Bra att kombinera shopping med",
  marketsIntro: "Fuengirola har traditionella marknader och en loppmarknad. Kontrollera kommunens kalender eftersom evenemang kan ställas in.",
  municipalMarketsText: "Supermarket passar snabba och breda inköp; traditionell marknad fokuserar mer på färska produkter; utomhusmarknad beror på dag och väder.",
  officialLinks: [{ title: "Miramar officiell katalog", href: miramarStoresDirectoryUrl }, { title: "Miramar öppettider", href: miramarHoursUrl }, { title: "Parque Comercial Miramar", href: miramarRetailParkUrl }, { title: "Fuengirola marknader", href: fuengirolaMarketsUrl }, { title: "Kommunal kalender 2026", href: fuengirolaMarketsCalendarUrl }]
};

shoppingLocaleOverrides.no = {
  ...shoppingLocaleOverrides.sv,
  quickLinks: shoppingLocaleOverrides.sv.quickLinks.map((item: { title: string; text: string }) => ({ ...item, title: item.title.replace("Mode och stora märken", "Mote og store merker").replace("Teknik och elektronik", "Teknologi og elektronikk").replace("Sport och strand", "Sport og strand").replace("Hem och små behov", "Hjem og små behov").replace("Veckans inköp", "Ukens innkjøp").replace("Boutiquer och lokala butiker", "Boutiquer og lokale butikker").replace("Presenter och minnen", "Gaver og minner").replace("Marknader", "Markeder"), text: item.text.replace("Gamla stan", "Gamlebyen").replace("Centrum och strandpromenaden", "Sentrum og strandpromenaden") })),
  idealItems: ["Glemte klær", "Strandartikler", "Kosmetikk", "Teknologi", "Innkjøp for lengre opphold"],
  beachForgotTitle: "Har du glemt noe til stranden?",
  travellerTitle: "Anbefalinger etter reisende",
  historicIdeasTitle: "Bra å kombinere shopping med",
  marketsIntro: "Fuengirola har tradisjonelle markeder og et bruktmarked. Sjekk kommunens kalender fordi arrangementer kan avlyses.",
  municipalMarketsText: "Supermarked passer raske og brede innkjøp; tradisjonelt marked fokuserer mer på ferske varer; utendørsmarked avhenger av dag og vær.",
  officialLinks: [{ title: "Miramar offisiell katalog", href: miramarStoresDirectoryUrl }, { title: "Miramar åpningstider", href: miramarHoursUrl }, { title: "Parque Comercial Miramar", href: miramarRetailParkUrl }, { title: "Fuengirola markeder", href: fuengirolaMarketsUrl }, { title: "Kommunal kalender 2026", href: fuengirolaMarketsCalendarUrl }]
};

function applyShoppingLocale(locale: "fi" | "sv" | "no") {
  const target = shoppingGuideContent[locale];
  const overrides = shoppingLocaleOverrides[locale]!;
  Object.assign(target, {
    quickLinks: overrides.quickLinks.map((item: { title: string; text: string }, index: number) => ({ ...item, target: shoppingGuideContent.es.quickLinks[index].target })),
    idealItems: overrides.idealItems,
    categorySections: overrides.categorySections,
    beachForgotTitle: overrides.beachForgotTitle,
    beachForgotItems: overrides.beachForgotItems,
    retailText: overrides.retailText,
    retailComparison: overrides.retailComparison,
    historicParagraphs: overrides.historicParagraphs,
    historicIdeasTitle: overrides.historicIdeasTitle,
    historicIdeas: overrides.historicIdeas,
    marketsIntro: overrides.marketsIntro,
    markets: overrides.markets,
    municipalMarketsText: overrides.municipalMarketsText,
    comparison: overrides.comparison,
    travellerTitle: overrides.travellerTitle,
    travellers: overrides.travellers,
    tips: overrides.tips,
    mapPoints: overrides.mapPoints,
    faqs: overrides.faqs,
    officialLinks: overrides.officialLinks,
    related: overrides.related
  });
}

applyShoppingLocale("fi");
applyShoppingLocale("sv");
applyShoppingLocale("no");

Object.assign(shoppingGuideContent.sv, {
  categorySections: [
    { id: "moda", title: "Mode och stora märken", intro: "Miramar är den enklaste platsen för kläder, skor och accessoarer under vistelsen.", categories: ["fashion"] as ShoppingCategory[] },
    { id: "calzado", title: "Skor, väskor och accessoarer", intro: "Praktiskt för sandaler, bekväma skor och ett par för kvällen.", categories: ["shoes", "jewellery"] as ShoppingCategory[] },
    { id: "belleza", title: "Skönhet och personlig vård", intro: "Bra för solskydd, kosmetik, presenter och vardagsprodukter.", categories: ["beauty"] as ShoppingCategory[] },
    { id: "deporte", title: "Sport, pool och strand", intro: "Användbart för stranddagar, vattenaktiviteter, promenader och träning.", categories: ["sport"] as ShoppingCategory[] },
    { id: "tecnologia", title: "Teknik, telefoner och tillbehör", intro: "För laddare, adaptrar, hörlurar och mobilrelaterade behov.", categories: ["technology", "services"] as ShoppingCategory[] },
    { id: "hogar", title: "Hem och inredning", intro: "Praktiskt vid längre vistelser eller för små behov i hemmet.", categories: ["home"] as ShoppingCategory[] },
    { id: "supermercado", title: "Carrefour och vardagsinköp", intro: "För första matinköpet, vatten, hygien, strandartiklar och längre vistelser.", categories: ["supermarket", "pets"] as ShoppingCategory[] }
  ],
  beachForgotItems: ["Parasoll", "Badskor", "Snorkel", "Armpuffar", "Vattentät påse", "Flip-flops", "Handduk", "Solskydd"],
  retailText: "I Miramars handelsområde finns större butiker som MediaMarkt, Leroy Merlin, Decathlon, Kiwoko, Kiabi och JYSK enligt den officiella katalogen.",
  retailComparison: [{ title: "Centro Comercial Miramar", text: "Bäst för mode, kosmetik, fritid, restauranger och varierad shopping." }, { title: "Parque Comercial Miramar", text: "Bäst för teknik, sport, hem, gör-det-själv och mer specifika inköp." }],
  historicParagraphs: ["Fuengirolas gamla stad har en mer lokal känsla med gågator, torg och små butiker.", "Här är det bättre att tänka i kategorier än att hitta på enskilda butiksnamn: boutiquer, skobutiker, smycken, presenter, lokalt mode, traditionella butiker och små gourmetprodukter."],
  historicIdeas: ["Kaffe på en terrass", "Promenad genom centrum", "Lunch", "Glass", "Strandpromenaden"],
  markets: [{ title: "Tisdagsmarknaden", when: "Recinto Ferial", text: "Stor marknad för kläder, accessoarer, skor, hemartiklar, mat och varierade produkter." }, { title: "Loppmarknad på lördagar", when: "Recinto Ferial", text: "Mer inriktad på begagnade varor, samlarobjekt, antikviteter och oväntade fynd." }, { title: "Söndagsmarknaden", when: "Santa Amalia-området", text: "Marknad med hantverk, smycken, väskor, keramik, presenter och textilier enligt kommunens turistinformation." }],
  comparison: [{ zone: "Centro Comercial Miramar", bestFor: "Mode, skönhet, fritid", fromApartment: "Till fots", type: "Stora märken" }, { zone: "Parque Comercial Miramar", bestFor: "Sport, teknik, hem", fromApartment: "Till fots", type: "Större butiker" }, { zone: "Gamla stan", bestFor: "Boutiquer och presenter", fromApartment: "Promenad eller taxi", type: "Lokala butiker" }, { zone: "Marknader", bestFor: "Fynd och begagnat", fromApartment: "Kort transport", type: "Informell shopping" }],
  travellers: [{ title: "För familjer", text: "Primark, H&M, C&A, Kiabi, Decathlon och Carrefour." }, { title: "För mode", text: "Zara, Mango, Massimo Dutti, Stradivarius, Bershka och Pull&Bear." }, { title: "För glömda saker", text: "Carrefour, Primark, MediaMarkt och Decathlon." }, { title: "För presenter", text: "Rituals, parfymbutiker, smyckesbutiker och gamla stan." }, { title: "För en regnig dag", text: "Miramar, bio, shopping och restauranger under samma tak." }],
  tips: ["Kontrollera öppettider på söndagar och helgdagar.", "Spara kvitton för byten.", "Tänk på bagageregler om du flyger.", "Gå till Miramar om inköpen inte är skrymmande.", "Använd bil eller taxi för större inköp.", "Undvik de mest hektiska tiderna under högsäsong.", "Kombinera centrum med mat eller en promenad."],
  mapPoints: { miramar: "Centro Comercial Miramar", retailPark: "Parque Comercial Miramar", historicCentre: "Gamla stan", fairground: "Recinto Ferial", municipalMarket: "Kommunal marknad" },
  faqs: [{ question: "Vilket köpcentrum ligger närmast lägenheten?", answer: "Centro Comercial Miramar och handelsområdet bredvid är de mest praktiska alternativen nära lägenheten." }, { question: "Kan man gå till Miramar?", answer: "Ja, om du inte köper stora eller tunga saker." }, { question: "Vilka butiker finns i Centro Comercial Miramar?", answer: "Det finns mode, skönhet, teknik, sport, mat, fritid och tjänster. Kontrollera den officiella katalogen för hela listan." }, { question: "Var kan jag köpa strandartiklar?", answer: "Decathlon, Carrefour och Primark är praktiska alternativ beroende på tillgänglighet." }, { question: "Var kan jag köpa laddare eller telefontillbehör?", answer: "MediaMarkt, Rossellimac, Movistar och Orange kan vara användbara." }, { question: "Var hittar jag prisvärda kläder?", answer: "Primark, Kiabi, C&A, H&M och Deichmann är prisvärda eller mellanklassalternativ." }, { question: "Var kan jag köpa saker till husdjur?", answer: "Kiwoko är den viktigaste djurbutiken i den här guiden." }, { question: "När är det marknader i Fuengirola?", answer: "Kommunens turistinformation listar marknader på tisdagar och söndagar samt loppmarknad på lördagar. Kontrollera kalendern." }, { question: "Var kan jag köpa presenter?", answer: "Gamla stan, strandpromenaden, Rituals, Natura, Flying Tiger Copenhagen och smyckesbutiker är bra alternativ." }],
  related: [{ key: "supermarkets", title: "Mataffärer", text: "Första matinköpet och större inköp." }, { key: "restaurants", title: "Restauranger", text: "Var du kan äta efter shopping." }, { key: "beaches", title: "Stränder", text: "Planer vid havet nära lägenheten." }, { key: "thingsToDo", title: "Saker att göra", text: "Fler idéer för vistelsen." }, { key: "airport", title: "Från flygplatsen", text: "Transport från Málaga." }]
});

Object.assign(shoppingGuideContent.no, {
  categorySections: [
    { id: "moda", title: "Mote og store merker", intro: "Miramar er det enkleste stedet for klær, sko og tilbehør under oppholdet.", categories: ["fashion"] as ShoppingCategory[] },
    { id: "calzado", title: "Sko, vesker og tilbehør", intro: "Praktisk for sandaler, komfortable sko og et penere par til kvelden.", categories: ["shoes", "jewellery"] as ShoppingCategory[] },
    { id: "belleza", title: "Skjønnhet og personlig pleie", intro: "Nyttig for solbeskyttelse, kosmetikk, gaver og hverdagsprodukter.", categories: ["beauty"] as ShoppingCategory[] },
    { id: "deporte", title: "Sport, basseng og strand", intro: "Nyttig for stranddager, vannaktiviteter, gåturer og trening.", categories: ["sport"] as ShoppingCategory[] },
    { id: "tecnologia", title: "Teknologi, telefoner og tilbehør", intro: "For ladere, adaptere, hodetelefoner og mobilrelaterte behov.", categories: ["technology", "services"] as ShoppingCategory[] },
    { id: "hogar", title: "Hjem og interiør", intro: "Praktisk ved lengre opphold eller små behov i hjemmet.", categories: ["home"] as ShoppingCategory[] },
    { id: "supermercado", title: "Carrefour og daglige innkjøp", intro: "For første matinnkjøp, vann, hygiene, strandartikler og lengre opphold.", categories: ["supermarket", "pets"] as ShoppingCategory[] }
  ],
  beachForgotItems: ["Parasoll", "Badesko", "Snorkel", "Armringer", "Vanntett pose", "Flip-flops", "Håndkle", "Solbeskyttelse"],
  retailText: "I Miramars handelsområde finnes større butikker som MediaMarkt, Leroy Merlin, Decathlon, Kiwoko, Kiabi og JYSK ifølge den offisielle katalogen.",
  retailComparison: [{ title: "Centro Comercial Miramar", text: "Best for mote, kosmetikk, fritid, restauranter og variert shopping." }, { title: "Parque Comercial Miramar", text: "Best for teknologi, sport, hjem, gjør-det-selv og mer spesifikke innkjøp." }],
  historicParagraphs: ["Fuengirolas gamleby har en mer lokal følelse med gågater, torg og små butikker.", "Her er det bedre å tenke i kategorier enn å finne opp enkeltbutikker: boutiquer, skobutikker, smykker, gaver, lokal mote, tradisjonelle butikker og små gourmetprodukter."],
  historicIdeas: ["Kaffe på en terrasse", "Gåtur gjennom sentrum", "Lunsj", "Iskrem", "Strandpromenaden"],
  markets: [{ title: "Tirsdagsmarkedet", when: "Recinto Ferial", text: "Stort marked for klær, tilbehør, sko, ting til hjemmet, mat og varierte produkter." }, { title: "Bruktmarked på lørdager", when: "Recinto Ferial", text: "Mer rettet mot brukte varer, samleobjekter, antikviteter og uventede funn." }, { title: "Søndagsmarkedet", when: "Santa Amalia-området", text: "Marked med håndverk, smykker, vesker, keramikk, gaver og tekstiler ifølge kommunal turistinformasjon." }],
  comparison: [{ zone: "Centro Comercial Miramar", bestFor: "Mote, skjønnhet, fritid", fromApartment: "Til fots", type: "Store merker" }, { zone: "Parque Comercial Miramar", bestFor: "Sport, teknologi, hjem", fromApartment: "Til fots", type: "Større butikker" }, { zone: "Gamlebyen", bestFor: "Boutiquer og gaver", fromApartment: "Gåtur eller taxi", type: "Lokale butikker" }, { zone: "Markeder", bestFor: "Funn og brukt", fromApartment: "Kort transport", type: "Uformell shopping" }],
  travellers: [{ title: "For familier", text: "Primark, H&M, C&A, Kiabi, Decathlon og Carrefour." }, { title: "For mote", text: "Zara, Mango, Massimo Dutti, Stradivarius, Bershka og Pull&Bear." }, { title: "For glemte ting", text: "Carrefour, Primark, MediaMarkt og Decathlon." }, { title: "For gaver", text: "Rituals, parfymerier, smykkebutikker og gamlebyen." }, { title: "For en regnværsdag", text: "Miramar, kino, shopping og restauranter under samme tak." }],
  tips: ["Sjekk åpningstider på søndager og helligdager.", "Ta vare på kvitteringer for bytte.", "Husk bagasjebegrensninger hvis du flyr.", "Gå til Miramar hvis innkjøpene ikke er store.", "Bruk bil eller taxi for store innkjøp.", "Unngå de travleste tidene i høysesongen.", "Kombiner sentrum med mat eller en gåtur."],
  mapPoints: { miramar: "Centro Comercial Miramar", retailPark: "Parque Comercial Miramar", historicCentre: "Gamlebyen", fairground: "Recinto Ferial", municipalMarket: "Kommunalt marked" },
  faqs: [{ question: "Hvilket kjøpesenter ligger nærmest leiligheten?", answer: "Centro Comercial Miramar og handelsområdet ved siden av er de mest praktiske alternativene nær leiligheten." }, { question: "Kan man gå til Miramar?", answer: "Ja, hvis du ikke kjøper store eller tunge ting." }, { question: "Hvilke butikker finnes i Centro Comercial Miramar?", answer: "Det finnes mote, skjønnhet, teknologi, sport, mat, fritid og tjenester. Sjekk den offisielle katalogen for full liste." }, { question: "Hvor kan jeg kjøpe strandartikler?", answer: "Decathlon, Carrefour og Primark er praktiske alternativer avhengig av tilgjengelighet." }, { question: "Hvor kan jeg kjøpe lader eller telefontilbehør?", answer: "MediaMarkt, Rossellimac, Movistar og Orange kan være nyttige." }, { question: "Hvor finner jeg rimelige klær?", answer: "Primark, Kiabi, C&A, H&M og Deichmann er rimelige eller mellomklassealternativer." }, { question: "Hvor kan jeg kjøpe produkter til kjæledyr?", answer: "Kiwoko er den viktigste dyrebutikken i denne guiden." }, { question: "Når er det markeder i Fuengirola?", answer: "Kommunal turistinformasjon viser markeder på tirsdager og søndager samt bruktmarked på lørdager. Sjekk kalenderen." }, { question: "Hvor kan jeg kjøpe gaver?", answer: "Gamlebyen, strandpromenaden, Rituals, Natura, Flying Tiger Copenhagen og smykkebutikker er gode alternativer." }],
  related: [{ key: "supermarkets", title: "Supermarkeder", text: "Første dagligvarehandel og større innkjøp." }, { key: "restaurants", title: "Restauranter", text: "Hvor du kan spise etter shopping." }, { key: "beaches", title: "Strender", text: "Planer ved sjøen nær leiligheten." }, { key: "thingsToDo", title: "Ting å gjøre", text: "Flere ideer for oppholdet." }, { key: "airport", title: "Fra flyplassen", text: "Transport fra Málaga." }]
});
