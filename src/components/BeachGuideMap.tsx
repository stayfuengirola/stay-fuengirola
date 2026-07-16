"use client";

import type { LatLngExpression, Map as LeafletMap } from "leaflet";
import { useEffect, useRef } from "react";
import { property } from "@/config/property";

const apartmentLocation: LatLngExpression = [property.mapCoordinates.latitude, property.mapCoordinates.longitude];
const beachPoints: Array<{ key: string; label: string; icon: string; position: LatLngExpression }> = [
  { key: "fuengirola", label: "Playa de Fuengirola", icon: "🏖", position: [36.5364, -4.6219] },
  { key: "santa-amalia", label: "Playa Santa Amalia", icon: "🏖", position: [36.5329, -4.6253] },
  { key: "castillo", label: "Playa del Castillo", icon: "🏰", position: [36.5288, -4.6288] }
];

type Props = {
  ariaLabel: string;
  apartmentLabel: string;
  apartmentPopup: string;
};

export function BeachGuideMap({ ariaLabel, apartmentLabel, apartmentPopup }: Props) {
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
        initTimer = window.setTimeout(() => {
          void initMap();
        }, 120);
        return;
      }

      const L = await import("leaflet");
      if (!active || !mapElement.current || mapInstance.current) return;

      const map = L.map(mapElement.current, {
        center: [36.5335, -4.6252],
        zoom: 14,
        scrollWheelZoom: false
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.circle(apartmentLocation, {
        radius: 260,
        color: "#0f7f9b",
        weight: 2,
        fillColor: "#0f7f9b",
        fillOpacity: 0.16
      })
        .addTo(map)
        .bindPopup(`<strong>📍 ${apartmentLabel}</strong><br />${apartmentPopup}`);

      beachPoints.forEach((point) => {
        L.marker(point.position, {
          icon: L.divIcon({
            className: "beach-map-marker",
            html: `<span aria-hidden="true">${point.icon}</span>`,
            iconSize: [34, 34],
            iconAnchor: [17, 17]
          })
        })
          .addTo(map)
          .bindPopup(`<strong>${point.icon} ${point.label}</strong>`);
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
  }, [apartmentLabel, apartmentPopup]);

  return (
    <div className="leaflet-map-frame beach-guide-map">
      <div ref={mapElement} className="leaflet-map" aria-label={ariaLabel} />
    </div>
  );
}
