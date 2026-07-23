"use client";

import type { LatLngExpression, Map as LeafletMap } from "leaflet";
import { useEffect, useRef } from "react";
import { ShoppingGuideContent } from "@/config/shoppingGuide";
import { property } from "@/config/property";

const apartmentLocation: LatLngExpression = [property.mapCoordinates.latitude, property.mapCoordinates.longitude];
const mapCenter: LatLngExpression = [36.5381, -4.6259];

const points: Array<{ key: keyof ShoppingGuideContent["mapPoints"]; icon: string; position: LatLngExpression }> = [
  { key: "miramar", icon: "M", position: [36.5326, -4.6352] },
  { key: "retailPark", icon: "P", position: [36.5306, -4.6372] },
  { key: "historicCentre", icon: "C", position: [36.5391, -4.6248] },
  { key: "fairground", icon: "F", position: [36.5488, -4.6256] },
  { key: "municipalMarket", icon: "H", position: [36.5406, -4.6255] }
];

export function ShoppingGuideMap({ content }: { content: Pick<ShoppingGuideContent, "mapAria" | "mapApartment" | "mapApartmentPopup" | "mapPoints"> }) {
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

      L.circle(apartmentLocation, {
        radius: 260,
        color: "#0f7f9b",
        weight: 2,
        fillColor: "#0f7f9b",
        fillOpacity: 0.16
      })
        .addTo(map)
        .bindPopup(`<strong>${content.mapApartment}</strong><br />${content.mapApartmentPopup}`);

      points.forEach((point) => {
        L.marker(point.position, {
          icon: L.divIcon({
            className: "shopping-map-marker",
            html: `<span aria-hidden="true">${point.icon}</span>`,
            iconSize: [34, 34],
            iconAnchor: [17, 17]
          })
        })
          .addTo(map)
          .bindPopup(`<strong>${content.mapPoints[point.key]}</strong>`);
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
  }, [content]);

  return (
    <div className="leaflet-map-frame shopping-guide-map">
      <div ref={mapElement} className="leaflet-map" aria-label={content.mapAria} />
    </div>
  );
}
