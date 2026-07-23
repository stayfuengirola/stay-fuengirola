"use client";

import { ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";
import { ShoppingGuideContent } from "@/config/shoppingGuide";
import { ShoppingCategory, ShoppingStore } from "@/data/shoppingStores";
import { Locale } from "@/i18n/locales";
import { currentPagePath, languageParam, trackEvent } from "@/lib/analytics";

const filters: ShoppingCategory[] = ["all", "fashion", "shoes", "beauty", "sport", "technology", "home", "children", "services"];

export function ShoppingStoreDirectory({
  content,
  locale,
  stores
}: {
  content: ShoppingGuideContent;
  locale: Locale;
  stores: ShoppingStore[];
}) {
  const [activeFilter, setActiveFilter] = useState<ShoppingCategory>("all");
  const visibleStores = useMemo(
    () => stores.filter((store) => store.active && (activeFilter === "all" || store.category === activeFilter)),
    [activeFilter, stores]
  );

  return (
    <div className="shopping-directory">
      <div className="shopping-filter-bar" aria-label={content.labels.category}>
        {filters.map((filter) => (
          <button
            className={filter === activeFilter ? "shopping-filter active" : "shopping-filter"}
            type="button"
            aria-pressed={filter === activeFilter}
            onClick={() => setActiveFilter(filter)}
            key={filter}
          >
            {content.categoryLabels[filter]}
          </button>
        ))}
      </div>

      <div className="shopping-store-grid">
        {visibleStores.map((store) => (
          <article className="shopping-store-card" key={store.id}>
            <div className="shopping-store-head">
              <span>{content.categoryLabels[store.category]}</span>
              <span>{content.areaLabels[store.area]}</span>
            </div>
            <h3>{store.name}</h3>
            <p>{content.storeDescriptions[store.descriptionKey]}</p>
            <dl>
              <div>
                <dt>{content.labels.audience}</dt>
                <dd>{content.audienceLabels[store.audienceKey]}</dd>
              </div>
              <div>
                <dt>{content.labels.product}</dt>
                <dd>{content.productLabels[store.productKey]}</dd>
              </div>
              <div>
                <dt>{content.labels.price}</dt>
                <dd>{content.priceLabels[store.price]}</dd>
              </div>
            </dl>
            {store.officialUrl ? (
              <a
                className="text-link shopping-store-link"
                href={store.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("shopping_store_click", {
                    store: store.id,
                    category: store.category,
                    area: store.area,
                    page_path: currentPagePath(),
                    language: languageParam(locale)
                  })
                }
              >
                <ExternalLink aria-hidden="true" size={16} />
                {content.labels.official}
              </a>
            ) : null}
            {store.lastVerified ? (
              <small>
                {content.labels.verified}: {store.lastVerified}
              </small>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}
