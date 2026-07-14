"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BookingButton } from "@/components/BookingButton";
import { LanguageSelect } from "@/components/LanguageSelect";
import { property } from "@/config/property";
import { Locale } from "@/i18n/locales";

type Props = {
  locale: Locale;
  nav: Record<string, string>;
  bookingLabel: string;
  menuLabel: string;
};

export function Header({ locale, nav, bookingLabel, menuLabel }: Props) {
  const [open, setOpen] = useState(false);
  const links = [
    ["#apartment", nav.apartment],
    ["#gallery", nav.gallery],
    ["#location", nav.location],
    ["#reviews", nav.reviews],
    ["#faq", nav.faq]
  ];

  return (
    <header className="header">
      <div className="container header-inner">
        <a className="brand brand-stack" href={`/${locale}`} aria-label={`${property.brandName}, ${property.featuredAccommodation}`}>
          <span>{property.brandName}</span>
          <small>{property.featuredAccommodation} · Fuengirola</small>
        </a>
        <nav className="nav" aria-label="Primary navigation">
          {links.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <LanguageSelect locale={locale} />
          <BookingButton label={bookingLabel} />
          <button className="hamburger" aria-label={menuLabel} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <BookingButton label={bookingLabel} />
        </nav>
      ) : null}
    </header>
  );
}
