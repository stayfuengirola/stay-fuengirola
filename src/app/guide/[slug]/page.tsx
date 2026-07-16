import { redirect } from "next/navigation";
import { getGuideCategoryByAnySlug, getGuideCategoryPath } from "@/config/guides";

type Props = { params: Promise<{ slug: string }> };

export default async function EnglishGuideCategoryRedirectPage({ params }: Props) {
  const { slug } = await params;
  const category = getGuideCategoryByAnySlug(slug);
  redirect(category ? getGuideCategoryPath("es", category.key) : `/es/guia/${slug}`);
}
