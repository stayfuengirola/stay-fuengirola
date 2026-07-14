"use client";

import type { LatLngExpression, Map as LeafletMap } from "leaflet";
import { useEffect, useRef } from "react";
import { property } from "@/config/property";

const apartmentLocation: LatLngExpression = [property.mapCoordinates.latitude, property.mapCoordinates.longitude];
const approximateRadius = 280;
const openStreetMapUrl = `https://www.openstreetmap.org/#map=16/${property.mapCoordinates.latitude}/${property.mapCoordinates.longitude}`;

type Props = {
  ariaLabel: string;
  openLabel: string;
  note: string;
};

export function LocationMap({ ariaLabel, openLabel, note }: Props) {
  const mapElement = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (!mapElement.current || mapInstance.current) return;
    let active = true;

    async function initMap() {
      const L = await import("leaflet");

      if (!active || !mapElement.current || mapInstance.current) return;

      const map = L.map(mapElement.current, {
        center: apartmentLocation,
        zoom: 15,
        scrollWheelZoom: false
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.circle(apartmentLocation, {
        radius: approximateRadius,
        color: "#0f7f9b",
        weight: 2,
        fillColor: "#0f7f9b",
        fillOpacity: 0.18
      })
        .addTo(map)
        .bindPopup("<strong>📍 Zona del apartamento</strong><br />Fuengirola · Costa del Sol")
        .openPopup();

      mapInstance.current = map;
      window.setTimeout(() => map.invalidateSize(), 0);
    }

    void initMap();

    return () => {
      active = false;
      mapInstance.current?.remove();
      mapInstance.current = null;
    };
  }, []);

  return (
    <div className="map-panel">
      <div ref={mapElement} className="leaflet-map" aria-label={ariaLabel} />
      <a href={openStreetMapUrl} target="_blank" rel="noopener noreferrer" className="map-link">
        {openLabel}
      </a>
      <p className="map-note">{note}</p>
    </div>
  );
}
