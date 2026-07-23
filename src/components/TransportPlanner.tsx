"use client";

import { useMemo, useState } from "react";
import type { TransportGuideContent } from "@/config/transportGuide";
import { Locale } from "@/i18n/locales";
import { currentPagePath, languageParam, trackEvent } from "@/lib/analytics";

export function TransportPlanner({ content, locale }: { content: TransportGuideContent["planner"]; locale: Locale }) {
  const [destination, setDestination] = useState("airport");
  const [luggage, setLuggage] = useState(false);
  const [hasCar, setHasCar] = useState(false);

  const recommendation = useMemo(() => {
    if (luggage && (destination === "airport" || destination === "local")) return content.recommendations.airport;
    if (hasCar && (destination === "mijas" || destination === "marbella")) return content.recommendations[destination];
    return content.recommendations[destination];
  }, [content.recommendations, destination, hasCar, luggage]);

  function trackPlanner(nextDestination: string) {
    trackEvent("transport_planner_use", {
      destination: nextDestination,
      recommended_mode: nextDestination === "airport" || nextDestination === "malaga" || nextDestination === "benalmadena" ? "train" : nextDestination === "local" ? "walking_or_urban_bus" : "intercity_bus_or_car",
      page_path: currentPagePath(),
      language: languageParam(locale)
    });
  }

  return (
    <section className="guide-content-section transport-planner-card" aria-labelledby="transport-planner-title">
      <div>
        <h2 id="transport-planner-title">{content.title}</h2>
        <p>{content.intro}</p>
      </div>
      <div className="transport-planner-controls">
        <label>
          <strong>{content.destinationLabel}</strong>
          <select
            value={destination}
            onChange={(event) => {
              setDestination(event.target.value);
              trackPlanner(event.target.value);
            }}
          >
            {Object.entries(content.destinations).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label className="transport-toggle">
          <input type="checkbox" checked={luggage} onChange={(event) => setLuggage(event.target.checked)} />
          <span>{content.luggageLabel}</span>
        </label>
        <label className="transport-toggle">
          <input type="checkbox" checked={hasCar} onChange={(event) => setHasCar(event.target.checked)} />
          <span>{content.carLabel}</span>
        </label>
      </div>
      <div className="transport-planner-result" aria-live="polite">
        <strong>{content.resultTitle}</strong>
        <span>{recommendation}</span>
      </div>
    </section>
  );
}
