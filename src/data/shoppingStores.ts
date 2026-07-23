export type ShoppingCategory = "all" | "fashion" | "shoes" | "beauty" | "technology" | "sport" | "home" | "children" | "jewellery" | "services" | "supermarket" | "pets" | "gifts";
export type ShoppingArea = "miramar" | "retail-park" | "historic-centre";
export type ShoppingFloor = "ground" | "upper" | "external" | "parking";
export type ShoppingPrice = "budget" | "mid" | "premium";

export interface ShoppingStore {
  id: string;
  name: string;
  category: Exclude<ShoppingCategory, "all">;
  area: ShoppingArea;
  descriptionKey: string;
  audienceKey: string;
  productKey: string;
  price: ShoppingPrice;
  officialUrl?: string;
  featured?: boolean;
  active: boolean;
  lastVerified?: string;
  floor?: ShoppingFloor;
}

export const miramarStoresDirectoryUrl = "https://www.miramarcc.com/tiendas/";
export const miramarHoursUrl = "https://www.miramarcc.com/horario/";
export const miramarRetailParkUrl = "https://www.miramarcc.com/parque-comercial-miramar/";
export const fuengirolaMarketsUrl = "https://www.visitafuengirola.com/que-hacer/ocio/de-compras/mercadillos/";
export const fuengirolaMarketsCalendarUrl = "https://www.fuengirola.es/aviso/calendario-mercadillos-2026/";

const verified = "2026-07-23";

export const shoppingStores: ShoppingStore[] = [
  { id: "zara", name: "Zara", category: "fashion", area: "miramar", descriptionKey: "zara", audienceKey: "family", productKey: "fashionSeason", price: "mid", officialUrl: miramarStoresDirectoryUrl, active: true, featured: true, floor: "upper", lastVerified: verified },
  { id: "primark", name: "Primark", category: "fashion", area: "miramar", descriptionKey: "primark", audienceKey: "family", productKey: "basicsBeachHome", price: "budget", officialUrl: miramarStoresDirectoryUrl, active: true, featured: true, floor: "upper", lastVerified: verified },
  { id: "mango", name: "Mango", category: "fashion", area: "miramar", descriptionKey: "mango", audienceKey: "womenTeen", productKey: "fashionSeason", price: "mid", officialUrl: miramarStoresDirectoryUrl, active: true, featured: true, floor: "upper", lastVerified: verified },
  { id: "massimo-dutti", name: "Massimo Dutti", category: "fashion", area: "miramar", descriptionKey: "massimo", audienceKey: "adults", productKey: "smartFashion", price: "premium", officialUrl: miramarStoresDirectoryUrl, active: true, featured: true, floor: "upper", lastVerified: verified },
  { id: "hm", name: "H&M", category: "fashion", area: "miramar", descriptionKey: "hm", audienceKey: "family", productKey: "basicsFashion", price: "mid", officialUrl: miramarStoresDirectoryUrl, active: true, floor: "ground", lastVerified: verified },
  { id: "ca", name: "C&A", category: "fashion", area: "miramar", descriptionKey: "ca", audienceKey: "family", productKey: "basicsFashion", price: "mid", officialUrl: miramarStoresDirectoryUrl, active: true, floor: "ground", lastVerified: verified },
  { id: "bershka", name: "Bershka", category: "fashion", area: "miramar", descriptionKey: "bershka", audienceKey: "young", productKey: "casualFashion", price: "mid", officialUrl: miramarStoresDirectoryUrl, active: true, floor: "upper", lastVerified: verified },
  { id: "pull-bear", name: "Pull&Bear", category: "fashion", area: "miramar", descriptionKey: "pullbear", audienceKey: "young", productKey: "casualFashion", price: "mid", officialUrl: miramarStoresDirectoryUrl, active: true, floor: "upper", lastVerified: verified },
  { id: "stradivarius", name: "Stradivarius", category: "fashion", area: "miramar", descriptionKey: "stradivarius", audienceKey: "womenTeen", productKey: "casualFashion", price: "mid", officialUrl: miramarStoresDirectoryUrl, active: true, floor: "upper", lastVerified: verified },
  { id: "oysho", name: "Oysho", category: "fashion", area: "miramar", descriptionKey: "oysho", audienceKey: "women", productKey: "sportSwimComfort", price: "mid", officialUrl: miramarStoresDirectoryUrl, active: true, floor: "upper", lastVerified: verified },
  { id: "levis", name: "Levi's", category: "fashion", area: "miramar", descriptionKey: "levis", audienceKey: "adults", productKey: "denim", price: "premium", officialUrl: miramarStoresDirectoryUrl, active: true, floor: "upper", lastVerified: verified },
  { id: "guess", name: "Guess", category: "fashion", area: "miramar", descriptionKey: "guess", audienceKey: "adults", productKey: "smartFashion", price: "premium", officialUrl: miramarStoresDirectoryUrl, active: true, floor: "ground", lastVerified: verified },
  { id: "lacoste", name: "Lacoste", category: "fashion", area: "miramar", descriptionKey: "lacoste", audienceKey: "adults", productKey: "smartCasual", price: "premium", officialUrl: miramarStoresDirectoryUrl, active: true, floor: "ground", lastVerified: verified },
  { id: "kiabi", name: "Kiabi", category: "fashion", area: "retail-park", descriptionKey: "kiabi", audienceKey: "family", productKey: "basicsFashion", price: "budget", officialUrl: miramarRetailParkUrl, active: true, featured: true, floor: "external", lastVerified: verified },
  { id: "chika10", name: "CHIKA10", category: "shoes", area: "miramar", descriptionKey: "chika10", audienceKey: "family", productKey: "shoesAccessories", price: "mid", officialUrl: miramarStoresDirectoryUrl, active: true, featured: true, floor: "upper", lastVerified: verified },
  { id: "deichmann", name: "Deichmann", category: "shoes", area: "miramar", descriptionKey: "deichmann", audienceKey: "family", productKey: "shoesBasics", price: "budget", officialUrl: miramarStoresDirectoryUrl, active: true, floor: "ground", lastVerified: verified },
  { id: "pikolinos", name: "Pikolinos", category: "shoes", area: "miramar", descriptionKey: "pikolinos", audienceKey: "adults", productKey: "comfortableShoes", price: "premium", officialUrl: miramarStoresDirectoryUrl, active: true, floor: "upper", lastVerified: verified },
  { id: "skechers", name: "Skechers", category: "shoes", area: "miramar", descriptionKey: "skechers", audienceKey: "family", productKey: "comfortableShoes", price: "mid", officialUrl: miramarStoresDirectoryUrl, active: true, lastVerified: verified },
  { id: "primor", name: "Primor", category: "beauty", area: "miramar", descriptionKey: "primor", audienceKey: "all", productKey: "beautySun", price: "mid", officialUrl: miramarStoresDirectoryUrl, active: true, featured: true, floor: "ground", lastVerified: verified },
  { id: "rituals", name: "Rituals", category: "beauty", area: "miramar", descriptionKey: "rituals", audienceKey: "gifts", productKey: "beautyGifts", price: "premium", officialUrl: miramarStoresDirectoryUrl, active: true, featured: true, floor: "ground", lastVerified: verified },
  { id: "kiko", name: "KIKO Milano", category: "beauty", area: "miramar", descriptionKey: "kiko", audienceKey: "all", productKey: "makeup", price: "mid", officialUrl: miramarStoresDirectoryUrl, active: true, floor: "ground", lastVerified: verified },
  { id: "yves-rocher", name: "Yves Rocher", category: "beauty", area: "miramar", descriptionKey: "yvesRocher", audienceKey: "all", productKey: "beautyCare", price: "mid", officialUrl: miramarStoresDirectoryUrl, active: true, floor: "ground", lastVerified: verified },
  { id: "mediamarkt", name: "MediaMarkt", category: "technology", area: "retail-park", descriptionKey: "mediamarkt", audienceKey: "all", productKey: "techTravel", price: "mid", officialUrl: miramarRetailParkUrl, active: true, featured: true, floor: "external", lastVerified: verified },
  { id: "rossellimac", name: "Rossellimac", category: "technology", area: "miramar", descriptionKey: "rossellimac", audienceKey: "all", productKey: "apple", price: "premium", officialUrl: miramarStoresDirectoryUrl, active: true, floor: "upper", lastVerified: verified },
  { id: "game", name: "GAME", category: "technology", area: "miramar", descriptionKey: "game", audienceKey: "family", productKey: "gaming", price: "mid", officialUrl: miramarStoresDirectoryUrl, active: true, floor: "ground", lastVerified: verified },
  { id: "movistar", name: "Movistar", category: "technology", area: "miramar", descriptionKey: "movistar", audienceKey: "all", productKey: "phoneServices", price: "mid", officialUrl: miramarStoresDirectoryUrl, active: true, floor: "ground", lastVerified: verified },
  { id: "orange", name: "Orange", category: "technology", area: "miramar", descriptionKey: "orange", audienceKey: "all", productKey: "phoneServices", price: "mid", officialUrl: miramarStoresDirectoryUrl, active: true, floor: "ground", lastVerified: verified },
  { id: "decathlon", name: "Decathlon", category: "sport", area: "retail-park", descriptionKey: "decathlon", audienceKey: "family", productKey: "sportBeach", price: "mid", officialUrl: miramarRetailParkUrl, active: true, featured: true, floor: "external", lastVerified: verified },
  { id: "base", name: "Base Deportes Santa Gema", category: "sport", area: "miramar", descriptionKey: "base", audienceKey: "sport", productKey: "sportTraining", price: "mid", officialUrl: miramarStoresDirectoryUrl, active: true, floor: "ground", lastVerified: verified },
  { id: "jd-sports", name: "JD Sports", category: "sport", area: "miramar", descriptionKey: "jd", audienceKey: "young", productKey: "sportFashion", price: "mid", officialUrl: miramarStoresDirectoryUrl, active: true, floor: "upper", lastVerified: verified },
  { id: "leroy-merlin", name: "Leroy Merlin", category: "home", area: "retail-park", descriptionKey: "leroy", audienceKey: "longStay", productKey: "homeDiy", price: "mid", officialUrl: miramarRetailParkUrl, active: true, featured: true, floor: "external", lastVerified: verified },
  { id: "jysk", name: "JYSK", category: "home", area: "retail-park", descriptionKey: "jysk", audienceKey: "longStay", productKey: "homeNordic", price: "mid", officialUrl: miramarRetailParkUrl, active: true, featured: true, floor: "external", lastVerified: verified },
  { id: "zara-home", name: "Zara Home", category: "home", area: "miramar", descriptionKey: "zaraHome", audienceKey: "gifts", productKey: "homeDecor", price: "premium", officialUrl: miramarStoresDirectoryUrl, active: true, floor: "upper", lastVerified: verified },
  { id: "carrefour", name: "Carrefour", category: "supermarket", area: "miramar", descriptionKey: "carrefour", audienceKey: "all", productKey: "dailyShopping", price: "mid", officialUrl: miramarHoursUrl, active: true, featured: true, lastVerified: verified },
  { id: "kiwoko", name: "Kiwoko", category: "pets", area: "retail-park", descriptionKey: "kiwoko", audienceKey: "pets", productKey: "petBasics", price: "mid", officialUrl: miramarRetailParkUrl, active: true, featured: true, floor: "external", lastVerified: verified },
  { id: "pandora", name: "Pandora", category: "jewellery", area: "miramar", descriptionKey: "pandora", audienceKey: "gifts", productKey: "jewelleryGifts", price: "mid", officialUrl: miramarStoresDirectoryUrl, active: true, floor: "upper", lastVerified: verified },
  { id: "flying-tiger", name: "Flying Tiger Copenhagen", category: "gifts", area: "miramar", descriptionKey: "tiger", audienceKey: "gifts", productKey: "giftsSmall", price: "budget", officialUrl: miramarStoresDirectoryUrl, active: true, floor: "ground", lastVerified: verified },
  { id: "natura", name: "Natura", category: "gifts", area: "miramar", descriptionKey: "natura", audienceKey: "gifts", productKey: "giftsDecor", price: "mid", officialUrl: miramarStoresDirectoryUrl, active: true, floor: "ground", lastVerified: verified }
];
