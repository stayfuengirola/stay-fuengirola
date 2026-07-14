import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale } from "@/i18n/locales";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname !== "/") {
    return NextResponse.next();
  }

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferred = acceptLanguage
    .split(",")
    .map((part) => part.trim().split(";")[0]?.slice(0, 2).toLowerCase())
    .find((part) => part && isLocale(part));

  return NextResponse.redirect(new URL(`/${preferred ?? defaultLocale}`, request.url));
}

export const config = {
  matcher: "/:path*"
};
