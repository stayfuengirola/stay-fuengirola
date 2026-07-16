import { notFound } from "next/navigation";
import { FloatingBookingButton } from "@/components/FloatingBookingButton";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, locales } from "@/i18n/locales";

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
  const t = getDictionary(locale);

  return (
    <html lang={locale}>
      <body>
        {children}
        <FloatingBookingButton label={t.common.booking} />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
