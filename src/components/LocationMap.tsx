"use client";

import type { LatLngExpression, Map as LeafletMap } from "leaflet";
import { useEffect, useRef } from "react";

const approximateLocation: LatLngExpression = [36.5357, -4.6266];
const openStreetMapUrl = "https://www.openstreetmap.org/search?query=Calle%20Burgos%2C%20Fuengirola%2C%20Malaga%2C%20Spain";

type Props = {
  ariaLabel: string;
  openLabel: string;
};

export function LocationMap({ ariaLabel, openLabel }: Props) {
  const mapElement = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (!mapElement.current || mapInstance.current) return;
    let active = true;

    async function initMap() {
      const L = await import("leaflet");

      if (!active || !mapElement.current || mapInstance.current) return;

      const map = L.map(mapElement.current, {
        center: approximateLocation,
        zoom: 15,
        scrollWheelZoom: false
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      const markerIcon = L.divIcon({
        className: "stay-map-marker",
        html: "<span></span>",
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -16]
      });

      L.marker(approximateLocation, { icon: markerIcon })
        .addTo(map)
        .bindPopup("<strong>Stay Fuengirola</strong><br />Apartamento Veramar<br />Fuengirola · Costa del Sol")
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
    </div>
  );
}
