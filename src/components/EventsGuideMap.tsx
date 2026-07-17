"use client";

import type { LatLngExpression, Map as LeafletMap } from "leaflet";
import { useEffect, useRef } from "react";
import { property } from "@/config/property";

const apartmentLocation: LatLngExpression = [property.mapCoordinates.latitude, property.mapCoordinates.longitude];

type MapPoint = {
  key: string;
  label: string;
  icon: string;
  position: LatLngExpression;
};

const points: MapPoint[] = [
  { key: "marenostrum", label: "Marenostrum", icon: "♪", position: [36.5284, -4.6279] },
  { key: "castillo-sohail", label: "Castillo Sohail", icon: "⌂", position: [36.5289, -4.6267] },
  { key: "recinto-ferial", label: "Recinto ferial", icon: "◌", position: [36.5481, -4.6226] },
  { key: "centro-historico", label: "Centro histórico", icon: "◆", position: [36.5391, -4.6247] }
];

type Props = {
  ariaLabel: string;
  apartmentLabel: string;
};

export function EventsGuideMap({ ariaLabel, apartmentLabel }: Props) {
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
        center: [36.5378, -4.6256],
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
        .bindPopup(`<strong>${apartmentLabel}</strong>`);

      points.forEach((point) => {
        L.marker(point.position, {
          icon: L.divIcon({
            className: "event-map-marker",
            html: `<span aria-hidden="true">${point.icon}</span>`,
            iconSize: [34, 34],
            iconAnchor: [17, 17]
          })
        })
          .addTo(map)
          .bindPopup(`<strong>${point.label}</strong>`);
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
  }, [apartmentLabel]);

  return (
    <div className="leaflet-map-frame event-guide-map">
      <div ref={mapElement} className="leaflet-map" aria-label={ariaLabel} />
    </div>
  );
}
