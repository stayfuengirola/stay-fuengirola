import { notFound } from "next/navigation";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { isLocale, Locale, locales } from "@/i18n/locales";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale}>
      <body>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
