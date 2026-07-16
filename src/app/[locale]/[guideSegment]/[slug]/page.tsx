import {
  getGuideCategoryBySlug,
  getGuideCategoryPath,
  getGuidePath,
  guideCategories,
  isGuideBaseSegment
} from "@/config/guides";
import { isLocale, locales } from "@/i18n/locales";
import GuideCategoryPage, { generateMetadata as generateGuideCategoryMetadata } from "../../guia/[slug]/page";
import { notFound, redirect } from "next/navigation";

type Props = { params: Promise<{ locale: string; guideSegment: string; slug: string }> };

export function generateStaticParams() {
  return locales
    .filter((locale) => getGuidePath(locale) !== `/${locale}/guia`)
    .flatMap((locale) =>
      guideCategories.map((category) => ({
        locale,
        guideSegment: getGuidePath(locale).split("/")[2],
        slug: category.slugs[locale]
      }))
    );
}

export async function generateMetadata({ params }: Props) {
  const { locale, guideSegment, slug } = await params;
  if (!isLocale(locale) || !isGuideBaseSegment(locale, guideSegment)) return {};
  return generateGuideCategoryMetadata({ params: Promise.resolve({ locale, slug }) });
}

export default async function LocalizedGuideCategoryPage({ params }: Props) {
  const { locale, guideSegment, slug } = await params;
  if (!isLocale(locale)) notFound();
  if (!isGuideBaseSegment(locale, guideSegment)) notFound();
  const category = getGuideCategoryBySlug(locale, slug);
  if (!category) notFound();
  const canonicalPath = getGuideCategoryPath(locale, category.key);
  if (`/${locale}/${guideSegment}/${slug}` !== canonicalPath) redirect(canonicalPath);
  return <GuideCategoryPage params={Promise.resolve({ locale, slug })} />;
}
