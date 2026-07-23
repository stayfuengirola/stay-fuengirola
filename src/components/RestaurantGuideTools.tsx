"use client";

import type { LatLngExpression, Map as LeafletMap } from "leaflet";
import { CheckCircle2, Clock, ExternalLink, MapPin, Phone, Utensils } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Restaurant, RestaurantFilter, RestaurantGuideContent } from "@/config/restaurantGuide";
import { restaurantFilters } from "@/config/restaurantGuide";
import type { Locale } from "@/i18n/locales";
import { currentPagePath, languageParam, trackEvent } from "@/lib/analytics";

export function RestaurantDirectory({ content, locale }: { content: RestaurantGuideContent; locale: Locale }) {
  const [activeFilter, setActiveFilter] = useState<RestaurantFilter>("all");
  const visibleRestaurants = useMemo(
    () =>
      content.restaurants.filter((restaurant) => activeFilter === "all" || restaurant.categories.includes(activeFilter)),
    [activeFilter, content.restaurants]
  );

  return (
    <div className="restaurant-directory">
      <div className="shopping-filter-bar restaurant-filter-bar" aria-label={content.labels.filters}>
        {restaurantFilters.map((filter) => (
          <button
            className={filter === activeFilter ? "shopping-filter active" : "shopping-filter"}
            type="button"
            aria-pressed={filter === activeFilter}
            key={filter}
            onClick={() => {
              setActiveFilter(filter);
              trackEvent("restaurant_filter", {
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

      {visibleRestaurants.length ? (
        <div className="restaurant-card-grid">
          {visibleRestaurants.map((restaurant) => (
            <RestaurantCard content={content} locale={locale} restaurant={restaurant} key={restaurant.id} />
          ))}
        </div>
      ) : (
        <p className="map-note">{content.labels.noResults}</p>
      )}
    </div>
  );
}

function RestaurantCard({
  content,
  locale,
  restaurant
}: {
  content: RestaurantGuideContent;
  locale: Locale;
  restaurant: Restaurant;
}) {
  const actionLabel = restaurant.action === "website" && restaurant.website ? content.labels.visitWebsite : content.labels.viewLocation;
  const href = restaurant.action === "website" && restaurant.website ? restaurant.website : restaurant.mapUrl;

  return (
    <article className="restaurant-card" id={restaurant.id}>
      <div className="restaurant-card-top">
        <span className="restaurant-type">
          <Utensils aria-hidden="true" size={17} />
          {restaurant.type}
        </span>
        <span className="restaurant-price" aria-label={`${content.labels.price}: ${restaurant.price}`}>
          {restaurant.price}
        </span>
      </div>
      <h2>{restaurant.name}</h2>
      <div className="restaurant-badges" aria-label={content.labels.filters}>
        {restaurant.badges.map((badge) => (
          <span key={badge}>{content.badgeLabels[badge]}</span>
        ))}
      </div>
      <p>{restaurant.description}</p>

      <div className="restaurant-detail-grid">
        <RestaurantFact title={content.labels.special} text={restaurant.special} />
        <RestaurantFact title={content.labels.order} text={restaurant.order} />
        <RestaurantFact title={content.labels.recommendedFor} text={restaurant.recommendedFor} />
        <RestaurantFact title={content.labels.atmosphere} text={restaurant.atmosphere} />
      </div>

      <ul className="guide-check-list restaurant-meta-list">
        <li>
          <MapPin aria-hidden="true" size={18} />
          <span>
            <strong>{content.labels.location}:</strong> {restaurant.location}
          </span>
        </li>
        <li>
          <MapPin aria-hidden="true" size={18} />
          <span>
            <strong>{content.labels.address}:</strong> {restaurant.address}
          </span>
        </li>
        <li>
          <Clock aria-hidden="true" size={18} />
          <span>
            <strong>{content.labels.hours}:</strong> {restaurant.hours}
          </span>
        </li>
        {restaurant.phone ? (
          <li>
            <Phone aria-hidden="true" size={18} />
            <span>
              <strong>{content.labels.phone}:</strong> {restaurant.phone}
            </span>
          </li>
        ) : null}
        <li>
          <CheckCircle2 aria-hidden="true" size={18} />
          <span>
            <strong>{content.labels.reserve}:</strong> {restaurant.reserve}
          </span>
        </li>
      </ul>

      <div className="restaurant-tip-card">
        <strong>{content.labels.tip}</strong>
        <span>{restaurant.tip}</span>
      </div>

      <div className="restaurant-action-row">
        <a
          className="text-link"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            trackEvent("restaurant_click", {
              restaurant: restaurant.id,
              action: restaurant.action,
              page_path: currentPagePath(),
              language: languageParam(locale)
            });
            if (restaurant.action === "website") {
              trackEvent("restaurant_web_click", {
                restaurant: restaurant.id,
                page_path: currentPagePath(),
                language: languageParam(locale)
              });
            }
          }}
        >
          <ExternalLink aria-hidden="true" size={17} />
          {actionLabel}
        </a>
      </div>
    </article>
  );
}

function RestaurantFact({ title, text }: { title: string; text: string }) {
  return (
    <div className="restaurant-fact">
      <strong>{title}</strong>
      <span>{text}</span>
    </div>
  );
}

export function RestaurantGuideMap({ content, locale }: { content: RestaurantGuideContent; locale: Locale }) {
  const mapElement = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (!mapElement.current || mapInstance.current) return;
    let active = true;
    let resizeFrame = 0;
    let initTimer = 0;

    function invalidateMapSize() {
      window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(() => mapInstance.current?.invalidateSize());
    }

    async function initMap() {
      if (!active || !mapElement.current || mapInstance.current) return;
      const bounds = mapElement.current.getBoundingClientRect();
      if (bounds.width === 0 || bounds.height === 0) {
        initTimer = window.setTimeout(() => void initMap(), 120);
        return;
      }

      const L = await import("leaflet");
      if (!active || !mapElement.current || mapInstance.current) return;

      const coordinates = content.restaurants.map((restaurant) => [restaurant.coordinates.lat, restaurant.coordinates.lng] as LatLngExpression);
      const map = L.map(mapElement.current, {
        center: [36.54, -4.63],
        zoom: 13,
        scrollWheelZoom: false,
        fadeAnimation: false,
        markerZoomAnimation: false,
        zoomAnimation: false,
        inertia: false
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        updateWhenIdle: true,
        updateWhenZooming: false,
        keepBuffer: 1
      }).addTo(map);

      content.restaurants.forEach((restaurant) => {
        const marker = L.marker([restaurant.coordinates.lat, restaurant.coordinates.lng], {
          icon: L.divIcon({
            className: "shopping-map-marker restaurant-map-marker",
            html: `<span aria-hidden="true">${restaurant.name.slice(0, 1)}</span>`,
            iconSize: [34, 34],
            iconAnchor: [17, 17]
          })
        })
          .addTo(map)
          .bindPopup(
            `<strong>${restaurant.name}</strong><br />${restaurant.type}<br /><a href="#${restaurant.id}">${content.labels.mapButton}</a>`
          );

        marker.on("click", () =>
          trackEvent("restaurant_map_click", {
            restaurant: restaurant.id,
            page_path: currentPagePath(),
            language: languageParam(locale)
          })
        );
      });

      map.fitBounds(L.latLngBounds(coordinates), { padding: [28, 28], maxZoom: 13 });
      mapInstance.current = map;
      map.whenReady(invalidateMapSize);
      window.setTimeout(invalidateMapSize, 0);
      window.setTimeout(invalidateMapSize, 250);
    }

    void initMap();
    window.addEventListener("resize", invalidateMapSize);
    window.addEventListener("orientationchange", invalidateMapSize);

    return () => {
      active = false;
      window.clearTimeout(initTimer);
      window.cancelAnimationFrame(resizeFrame);
      window.removeEventListener("resize", invalidateMapSize);
      window.removeEventListener("orientationchange", invalidateMapSize);
      mapInstance.current?.remove();
      mapInstance.current = null;
    };
  }, [content, locale]);

  return (
    <div className="leaflet-map-frame restaurant-guide-map-frame">
      <div ref={mapElement} className="leaflet-map restaurant-guide-map" aria-label={content.mapAria} />
    </div>
  );
}
