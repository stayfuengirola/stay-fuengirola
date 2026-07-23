"use client";

import type { LatLngExpression, Map as LeafletMap } from "leaflet";
import { useEffect, useRef } from "react";
import { ExcursionsGuideContent } from "@/config/excursionsGuide";
import { Excursion } from "@/data/excursions";
import { property } from "@/config/property";

const origin: LatLngExpression = [property.mapCoordinates.latitude, property.mapCoordinates.longitude];

export function ExcursionsGuideMap({ content, excursions }: { content: ExcursionsGuideContent; excursions: Excursion[] }) {
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
        center: [36.68, -4.72],
        zoom: 8,
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

      L.circle(origin, {
        radius: 600,
        color: "#0f7f9b",
        weight: 2,
        fillColor: "#0f7f9b",
        fillOpacity: 0.16
      })
        .addTo(map)
        .bindPopup(`<strong>${content.mapOrigin}</strong>`);

      const markerBounds: LatLngExpression[] = [origin];

      excursions.forEach((excursion, index) => {
        markerBounds.push(excursion.coordinates);
        L.marker(excursion.coordinates, {
          icon: L.divIcon({
            className: "excursion-map-marker",
            html: `<span aria-hidden="true">${index + 1}</span>`,
            iconSize: [34, 34],
            iconAnchor: [17, 17]
          })
        })
          .addTo(map)
          .bindPopup(
            `<strong>${content.texts[excursion.titleKey]}</strong><br />${content.mapPopupDuration}: ${content.durationLabels[excursion.duration]}<br /><a href="#${excursion.slug}">${content.mapPopupLink}</a>`
          );
      });

      map.fitBounds(L.latLngBounds(markerBounds), { padding: [22, 22] });
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
  }, [content, excursions]);

  return (
    <div className="leaflet-map-frame excursion-guide-map">
      <div ref={mapElement} className="leaflet-map" aria-label={content.mapAria} />
    </div>
  );
}

