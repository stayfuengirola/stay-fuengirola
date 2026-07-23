"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { CheckCircle2, ExternalLink, MapPinned } from "lucide-react";
import { ExcursionsGuideContent } from "@/config/excursionsGuide";
import { Excursion, ExcursionCategory, ExcursionDuration, ExcursionOfficialDestination } from "@/data/excursions";
import { Locale } from "@/i18n/locales";
import { currentPagePath, languageParam, trackEvent } from "@/lib/analytics";

type FilterKey = "all" | "half-day" | "full-day" | "without-car" | "family" | "culture" | "nature" | "coast" | "booking";
type PlannerInterest = "culture" | "nature" | "coast" | "family";

const filters: FilterKey[] = ["all", "half-day", "full-day", "without-car", "family", "culture", "nature", "coast", "booking"];

export function ExcursionPlanner({ content, excursions, locale }: { content: ExcursionsGuideContent; excursions: Excursion[]; locale: Locale }) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [hasCar, setHasCar] = useState<"yes" | "no">("yes");
  const [duration, setDuration] = useState<ExcursionDuration>("full-day");
  const [interest, setInterest] = useState<PlannerInterest>("culture");

  const visibleExcursions = useMemo(() => excursions.filter((excursion) => matchesFilter(excursion, activeFilter)), [activeFilter, excursions]);
  const plannerMatches = useMemo(
    () =>
      excursions.filter((excursion) => {
        if (hasCar === "no" && !excursion.suitableWithoutCar) return false;
        if (duration === "half-day" && excursion.duration !== "half-day") return false;
        if (duration === "full-day" && excursion.duration === "long-full-day") return false;
        return excursion.categories.includes(interest);
      }),
    [duration, excursions, hasCar, interest]
  );

  function updateFilter(filter: FilterKey) {
    setActiveFilter(filter);
    trackEvent("excursion_filter_use", {
      filter,
      page_path: currentPagePath(),
      language: languageParam(locale)
    });
  }

  return (
    <>
      <div className="excursion-filter-bar" aria-label={content.navTitle} role="group">
        {filters.map((filter) => (
          <button
            aria-pressed={activeFilter === filter}
            className={activeFilter === filter ? "shopping-filter active" : "shopping-filter"}
            key={filter}
            onClick={() => updateFilter(filter)}
            type="button"
          >
            {content.filterLabels[filter]}
          </button>
        ))}
      </div>

      <div className="excursion-card-grid">
        {visibleExcursions.map((excursion) => (
          <ExcursionCard content={content} excursion={excursion} key={excursion.id} locale={locale} />
        ))}
      </div>

      <section className="guide-content-section excursion-planner-card" aria-labelledby="excursion-planner-title">
        <div>
          <h2 id="excursion-planner-title">{content.plannerTitle}</h2>
          <p>{content.plannerIntro}</p>
        </div>
        <div className="excursion-planner-controls">
          <PlannerButtonGroup
            label={content.plannerQuestions.car}
            options={["yes", "no"]}
            value={hasCar}
            onChange={(value) => setHasCar(value as "yes" | "no")}
            content={content}
          />
          <PlannerButtonGroup
            label={content.plannerQuestions.duration}
            options={["half-day", "full-day", "long-full-day"]}
            value={duration}
            onChange={(value) => setDuration(value as ExcursionDuration)}
            content={content}
          />
          <PlannerButtonGroup
            label={content.plannerQuestions.interest}
            options={["culture", "nature", "coast", "family"]}
            value={interest}
            onChange={(value) => setInterest(value as PlannerInterest)}
            content={content}
          />
        </div>
        <div className="excursion-card-grid compact">
          {plannerMatches.length > 0 ? (
            plannerMatches.slice(0, 4).map((excursion) => (
              <a className="excursion-result-card" href={`#${excursion.slug}`} key={excursion.id}>
                <MapPinned aria-hidden="true" size={20} />
                <strong>{content.texts[excursion.titleKey]}</strong>
                <span>{content.texts[excursion.introKey]}</span>
              </a>
            ))
          ) : (
            <p className="map-note">{content.plannerEmpty}</p>
          )}
        </div>
      </section>
    </>
  );
}

function PlannerButtonGroup({
  content,
  label,
  onChange,
  options,
  value
}: {
  content: ExcursionsGuideContent;
  label: string;
  onChange: (value: string) => void;
  options: string[];
  value: string;
}) {
  return (
    <div className="planner-button-group">
      <strong>{label}</strong>
      <div>
        {options.map((option) => (
          <button
            aria-pressed={value === option}
            className={value === option ? "shopping-filter active" : "shopping-filter"}
            key={option}
            onClick={() => onChange(option)}
            type="button"
          >
            {content.plannerOptions[option]}
          </button>
        ))}
      </div>
    </div>
  );
}

function ExcursionCard({ content, excursion, locale }: { content: ExcursionsGuideContent; excursion: Excursion; locale: Locale }) {
  return (
    <article className="excursion-card">
      <div className="excursion-card-image">
        <Image src={excursion.image} alt={content.texts[excursion.titleKey]} fill sizes="(max-width: 960px) 100vw, 320px" loading="lazy" className="image-cover" />
      </div>
      <div className="excursion-card-body">
        <div className="shopping-store-head">
          <span>{content.durationLabels[excursion.duration]}</span>
          <span>{excursion.advanceBooking ? content.labels.recommended : content.labels.no}</span>
        </div>
        <h3>{content.texts[excursion.titleKey]}</h3>
        <p>{content.texts[excursion.descriptionKey]}</p>
        <dl>
          <div>
            <dt>{content.labels.transport}</dt>
            <dd>{excursion.transport.map((transport) => content.transportLabels[transport]).join(" · ")}</dd>
          </div>
          <div>
            <dt>{content.labels.plan}</dt>
            <dd>{excursion.categories.map((category) => content.categoryLabels[category]).join(" · ")}</dd>
          </div>
          <div>
            <dt>{content.labels.children}</dt>
            <dd>{excursion.suitableForChildren ? content.labels.yes : content.labels.depends}</dd>
          </div>
        </dl>
        <a className="text-link" href={`#${excursion.slug}`}>
          {content.labels.details}
        </a>
      </div>
    </article>
  );
}

export function ExcursionOfficialLink({
  content,
  destination,
  excursion,
  locale,
  url
}: {
  content: ExcursionsGuideContent;
  destination: ExcursionOfficialDestination;
  excursion: string;
  locale: Locale;
  url: string;
}) {
  return (
    <a
      className="guide-related-card"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackEvent("excursion_official_click", {
          excursion,
          destination,
          page_path: currentPagePath(),
          language: languageParam(locale)
        })
      }
    >
      <ExternalLink aria-hidden="true" size={20} />
      <strong>{content.officialLabels[destination]}</strong>
    </a>
  );
}

function matchesFilter(excursion: Excursion, filter: FilterKey) {
  if (filter === "all") return true;
  if (filter === "without-car") return excursion.suitableWithoutCar;
  if (filter === "family") return excursion.suitableForChildren;
  if (filter === "booking") return excursion.advanceBooking;
  if (filter === "half-day" || filter === "full-day") return excursion.duration === filter;
  return excursion.categories.includes(filter as ExcursionCategory);
}
