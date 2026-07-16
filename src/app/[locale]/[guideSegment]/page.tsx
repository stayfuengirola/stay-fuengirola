import { getGuidePath, isGuideBaseSegment } from "@/config/guides";
import { isLocale, locales } from "@/i18n/locales";
import GuidePage, { generateMetadata as generateGuideMetadata } from "../guia/page";
import { notFound, redirect } from "next/navigation";

type Props = { params: Promise<{ locale: string; guideSegment: string }> };

export function generateStaticParams() {
  return locales
    .filter((locale) => getGuidePath(locale) !== `/${locale}/guia`)
    .map((locale) => ({ locale, guideSegment: getGuidePath(locale).split("/")[2] }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, guideSegment } = await params;
  if (!isLocale(locale) || !isGuideBaseSegment(locale, guideSegment)) return {};
  return generateGuideMetadata({ params: Promise.resolve({ locale }) });
}

export default async function LocalizedGuidePage({ params }: Props) {
  const { locale, guideSegment } = await params;
  if (!isLocale(locale)) notFound();
  if (!isGuideBaseSegment(locale, guideSegment)) notFound();
  const canonicalPath = getGuidePath(locale);
  if (`/${locale}/${guideSegment}` !== canonicalPath) redirect(canonicalPath);
  return <GuidePage params={Promise.resolve({ locale })} />;
}
