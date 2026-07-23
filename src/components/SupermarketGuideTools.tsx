"use client";

import { CheckCircle2, Copy, ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";
import type { SupermarketGuideContent } from "@/config/supermarketGuide";
import { Supermarket, supermarketFilters } from "@/data/supermarkets";
import type { Locale } from "@/i18n/locales";
import { currentPagePath, languageParam, trackEvent } from "@/lib/analytics";

export function SupermarketFilterGrid({
  content,
  locale,
  supermarkets
}: {
  content: SupermarketGuideContent;
  locale: Locale;
  supermarkets: Supermarket[];
}) {
  const [activeFilter, setActiveFilter] = useState("all");
  const visibleSupermarkets = useMemo(
    () =>
      supermarkets.filter(
        (supermarket) =>
          supermarket.active && (activeFilter === "all" || supermarket.filterKeys.includes(activeFilter as (typeof supermarket.filterKeys)[number]))
      ),
    [activeFilter, supermarkets]
  );

  return (
    <div className="supermarket-directory">
      <div className="shopping-filter-bar supermarket-filter-bar" aria-label={content.labels.category}>
        {supermarketFilters.map((filter) => (
          <button
            className={filter === activeFilter ? "shopping-filter active" : "shopping-filter"}
            type="button"
            aria-pressed={filter === activeFilter}
            key={filter}
            onClick={() => {
              setActiveFilter(filter);
              trackEvent("supermarket_filter_use", {
                filter,
                page_path: currentPagePath(),
                language: languageParam(locale)
              });
            }}
          >
            {content.filterLabels[filter]}
          </button>
        ))}
      </div>

      {visibleSupermarkets.length ? (
        <div className="shopping-store-grid supermarket-store-grid">
          {visibleSupermarkets.map((supermarket) => (
            <SupermarketCard content={content} locale={locale} supermarket={supermarket} key={supermarket.id} />
          ))}
        </div>
      ) : (
        <p className="map-note">{content.labels.noResults}</p>
      )}
    </div>
  );
}

export function SupermarketCard({
  content,
  locale,
  supermarket
}: {
  content: SupermarketGuideContent;
  locale: Locale;
  supermarket: Supermarket;
}) {
  return (
    <article className={supermarket.featured ? "shopping-store-card supermarket-card featured" : "shopping-store-card supermarket-card"} id={supermarket.slug}>
      <div className="shopping-store-head">
        <span>{content.categoryLabels[supermarket.category]}</span>
        <span>
          {content.labels.approx} {supermarket.walkingTimeMinutes} min {content.labels.walk}
        </span>
      </div>
      <h3>{supermarket.name}</h3>
      <p>{content.descriptions[supermarket.descriptionKey]}</p>
      <dl>
        <div>
          <dt>{content.labels.bestFor}</dt>
          <dd>{supermarket.bestForKeys.map((key) => content.bestForLabels[key]).join(" · ")}</dd>
        </div>
        <div>
          <dt>{content.labels.category}</dt>
          <dd>{content.categoryLabels[supermarket.category]}</dd>
        </div>
      </dl>
      <div className="bioparc-link-row supermarket-link-row">
        {supermarket.directionsUrl ? (
          <SupermarketExternalLink content={content} href={supermarket.directionsUrl} locale={locale} supermarket={supermarket.id} destination="directions">
            {content.labels.directions}
          </SupermarketExternalLink>
        ) : null}
        {supermarket.officialUrl ? (
          <SupermarketExternalLink content={content} href={supermarket.officialUrl} locale={locale} supermarket={supermarket.id} destination="official_site">
            {content.labels.officialSite}
          </SupermarketExternalLink>
        ) : null}
        {supermarket.storeLocatorUrl && supermarket.storeLocatorUrl !== supermarket.officialUrl ? (
          <SupermarketExternalLink content={content} href={supermarket.storeLocatorUrl} locale={locale} supermarket={supermarket.id} destination="store_locator">
            {content.labels.storeLocator}
          </SupermarketExternalLink>
        ) : null}
      </div>
      {supermarket.lastVerified ? (
        <small>
          {content.labels.verified}: {supermarket.lastVerified}
        </small>
      ) : null}
    </article>
  );
}

export function SupermarketExternalLink({
  children,
  content,
  destination,
  href,
  locale,
  supermarket
}: {
  children: string;
  content: SupermarketGuideContent;
  destination: "official_site" | "store_locator" | "directions" | "opening_hours";
  href: string;
  locale: Locale;
  supermarket: string;
}) {
  return (
    <a
      className="text-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${children}: ${supermarket}`}
      onClick={() =>
        trackEvent("supermarket_official_click", {
          supermarket,
          destination,
          page_path: currentPagePath(),
          language: languageParam(locale)
        })
      }
    >
      <ExternalLink aria-hidden="true" size={16} />
      {children || content.labels.officialSite}
    </a>
  );
}

export function ArrivalChecklist({ content, locale }: { content: SupermarketGuideContent; locale: Locale }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="shopping-ideal-card supermarket-checklist">
      <h3>{content.checklistTitle}</h3>
      <p>{content.checklistIntro}</p>
      <div className="supermarket-check-grid">
        {content.checklistItems.map((item) => (
          <label key={item}>
            <input type="checkbox" />
            <span>{item}</span>
          </label>
        ))}
      </div>
      <button
        className="text-link supermarket-copy-button"
        type="button"
        onClick={async () => {
          await navigator.clipboard?.writeText(content.checklistItems.join("\n"));
          setCopied(true);
          trackEvent("shopping_list_copy", {
            page_path: currentPagePath(),
            language: languageParam(locale)
          });
          window.setTimeout(() => setCopied(false), 1800);
        }}
      >
        {copied ? <CheckCircle2 aria-hidden="true" size={18} /> : <Copy aria-hidden="true" size={18} />}
        {copied ? content.labels.copied : content.labels.copyList}
      </button>
    </div>
  );
}
