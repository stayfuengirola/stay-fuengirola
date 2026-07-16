import { NextRequest, NextResponse } from "next/server";

const locales = ["es", "en", "fi", "sv", "no"] as const;
const defaultLocale = "en";
const localeAliases: Record<string, (typeof locales)[number]> = {
  es: "es",
  en: "en",
  fi: "fi",
  sv: "sv",
  no: "no",
  nb: "no",
  nn: "no"
};

function isLocale(value: string): value is (typeof locales)[number] {
  return (locales as readonly string[]).includes(value);
}

function detectLocale(acceptLanguage: string) {
  for (const language of acceptLanguage.split(",")) {
    const code = language.trim().split(";")[0]?.split("-")[0]?.toLowerCase();
    if (code && localeAliases[code]) return localeAliases[code];
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    const preferred = detectLocale(request.headers.get("accept-language") ?? "");
    return NextResponse.redirect(new URL(`/${preferred}`, request.url));
  }

  if (pathname === "/guia" || pathname.startsWith("/guia/")) {
    return NextResponse.next();
  }

  const firstSegment = pathname.split("/")[1];

  if (firstSegment && !isLocale(firstSegment)) {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  if (firstSegment && isLocale(firstSegment)) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)"]
};
