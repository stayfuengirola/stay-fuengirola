export const guideCategories = [
  { key: "airport", slug: "como-llegar-desde-el-aeropuerto" },
  { key: "beaches", slug: "playas" },
  { key: "supermarkets", slug: "supermercados" },
  { key: "restaurants", slug: "restaurantes" },
  { key: "shopping", slug: "compras" },
  { key: "transport", slug: "transporte" },
  { key: "excursions", slug: "excursiones" },
  { key: "rain", slug: "que-hacer-cuando-llueve" }
] as const;

export type GuideCategory = (typeof guideCategories)[number];
export type GuideCategoryKey = GuideCategory["key"];
export type GuideSlug = GuideCategory["slug"];

export function getGuideCategory(slug: string) {
  return guideCategories.find((category) => category.slug === slug);
}
