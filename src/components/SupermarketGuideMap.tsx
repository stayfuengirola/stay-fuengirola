"use client";

import type { LatLngExpression, Map as LeafletMap } from "leaflet";
import { useEffect, useRef } from "react";
import type { SupermarketGuideContent } from "@/config/supermarketGuide";
import { property } from "@/config/property";
import type { Supermarket } from "@/data/supermarkets";

const apartmentLocation: LatLngExpression = [property.mapCoordinates.latitude, property.mapCoordinates.longitude];
const mapCenter: LatLngExpression = [36.538, -4.6285];

export function SupermarketGuideMap({
  content,
  supermarkets
}: {
  content: Pick<SupermarketGuideContent, "mapAria" | "mapApartment" | "mapApartmentPopup" | "mapPopupDistance" | "mapPopupSection" | "labels">;
  supermarkets: Supermarket[];
}) {
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

      const map = L.map(mapElement.current, {
        center: mapCenter,
        zoom: 14,
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

      L.circle(apartmentLocation, {
        radius: 260,
        color: "#0f7f9b",
        weight: 2,
        fillColor: "#0f7f9b",
        fillOpacity: 0.16
      })
        .addTo(map)
        .bindPopup(`<strong>${content.mapApartment}</strong><br />${content.mapApartmentPopup}`);

      supermarkets
        .filter((supermarket) => supermarket.active && supermarket.coordinates)
        .forEach((supermarket) => {
          const coordinates = supermarket.coordinates!;
          L.marker([coordinates.lat, coordinates.lng], {
            icon: L.divIcon({
              className: "shopping-map-marker supermarket-map-marker",
              html: `<span aria-hidden="true">${supermarket.name.slice(0, 1)}</span>`,
              iconSize: [34, 34],
              iconAnchor: [17, 17]
            })
          })
            .addTo(map)
            .bindPopup(
              `<strong>${supermarket.name}</strong><br />${content.mapPopupDistance}: ${content.labels.approx} ${supermarket.walkingTimeMinutes ?? "-"} min ${content.labels.walk}<br /><a href="#${supermarket.slug}">${content.mapPopupSection}</a>`
            );
        });

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
  }, [content, supermarkets]);

  return (
    <div className="leaflet-map-frame supermarket-guide-map">
      <div ref={mapElement} className="leaflet-map" aria-label={content.mapAria} />
    </div>
  );
}
