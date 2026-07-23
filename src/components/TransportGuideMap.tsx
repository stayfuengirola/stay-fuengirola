"use client";

import type { LatLngExpression, Map as LeafletMap } from "leaflet";
import { useEffect, useRef } from "react";
import type { TransportGuideContent } from "@/config/transportGuide";
import { transportMapPoints } from "@/data/transport";

const mapCenter: LatLngExpression = [36.545, -4.61];
const apartmentLocation: LatLngExpression = [36.5349, -4.6323];
const markerIcons = {
  apartment: "A",
  train: "T",
  bus: "B",
  taxi: "X",
  shopping: "M",
  attraction: "S",
  city: "C",
  airport: "✈"
};

export function TransportGuideMap({ content }: { content: Pick<TransportGuideContent, "mapAria" | "mapApartment" | "mapApartmentPopup" | "mapLabels"> }) {
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
        zoom: 12,
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

      transportMapPoints
        .filter((point) => point.type !== "apartment")
        .forEach((point) => {
          L.marker([point.lat, point.lng], {
            icon: L.divIcon({
              className: "shopping-map-marker transport-map-marker",
              html: `<span aria-hidden="true">${markerIcons[point.type]}</span>`,
              iconSize: [34, 34],
              iconAnchor: [17, 17]
            })
          })
            .addTo(map)
            .bindPopup(
              `<strong>${content.mapLabels[point.id]}</strong><br /><a href="#${point.sectionId}">${content.mapLabels[point.sectionId] ?? point.sectionId}</a>${
                point.externalUrl ? `<br /><a href="${point.externalUrl}" target="_blank" rel="noopener noreferrer">Open</a>` : ""
              }`
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
  }, [content]);

  return (
    <div className="leaflet-map-frame transport-guide-map">
      <div ref={mapElement} className="leaflet-map" aria-label={content.mapAria} />
    </div>
  );
}
