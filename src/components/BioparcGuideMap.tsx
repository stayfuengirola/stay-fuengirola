"use client";

import type { LatLngExpression, Map as LeafletMap } from "leaflet";
import { useEffect, useRef } from "react";
import { BioparcGuideContent } from "@/config/bioparcGuide";
import { property } from "@/config/property";

const apartmentLocation: LatLngExpression = [property.mapCoordinates.latitude, property.mapCoordinates.longitude];
const mapCenter: LatLngExpression = [36.5367, -4.6294];

const points: Array<{ key: keyof BioparcGuideContent["mapPoints"]; icon: string; position: LatLngExpression }> = [
  { key: "bioparc", icon: "B", position: [36.5379, -4.6244] },
  { key: "townHall", icon: "A", position: [36.539, -4.6247] },
  { key: "oldTown", icon: "C", position: [36.5384, -4.6259] },
  { key: "castle", icon: "S", position: [36.5289, -4.6314] },
  { key: "parking", icon: "P", position: [36.5385, -4.6263] }
];

type Props = {
  content: Pick<BioparcGuideContent, "mapAria" | "mapApartment" | "mapApartmentPopup" | "mapPoints">;
};

export function BioparcGuideMap({ content }: Props) {
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

      points.forEach((point) => {
        L.marker(point.position, {
          icon: L.divIcon({
            className: "bioparc-map-marker",
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
    <div className="leaflet-map-frame bioparc-guide-map">
      <div ref={mapElement} className="leaflet-map" aria-label={content.mapAria} />
    </div>
  );
}
