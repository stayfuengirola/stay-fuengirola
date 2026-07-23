"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CircleHelp,
  ExternalLink,
  Gift,
  Globe2,
  MapPin,
  Mic2,
  Music,
  Sparkles,
  Sun,
  Ticket,
  Trophy
} from "lucide-react";
import { EventsGuideMap } from "@/components/EventsGuideMap";
import {
  annualFuengirolaEvents,
  EventCategory,
  EventLifecycleStatus,
  FuengirolaEvent,
  PermanentActivity,
  fuengirolaAgenda,
  fuengirolaOfficialAgendaUrl,
  getEventLifecycleStatus,
  getPastEvents,
  getPublishedEvents,
  getVisibleUpcomingEvents,
  isFeatureableEvent,
  marenostrumOfficialUrl,
  sortEventsByDate
} from "@/config/events";
import { ThingsToDoEventsContent } from "@/config/thingsToDoEvents";
import { Locale } from "@/i18n/locales";
import { currentPagePath, languageParam, trackEvent } from "@/lib/analytics";

type FilterKey = "all" | Extract<EventCategory, "concert" | "festival" | "fair" | "family" | "culture" | "sport">;

type Props = {
  locale: Locale;
  content: ThingsToDoEventsContent;
  events: FuengirolaEvent[];
  permanentActivities: PermanentActivity[];
};

const dateLocales: Record<Locale, string> = {
  es: "es-ES",
  en: "en-GB",
  fi: "fi-FI",
  sv: "sv-SE",
  no: "nb-NO"
};

const filterKeys: FilterKey[] = ["all", "concert", "festival", "fair", "family", "culture", "sport"];
const annualEventIcons = {
  fair: Ticket,
  world: Globe2,
  christmas: Gift,
  fire: Sun,
  music: Music,
  culture: Sparkles,
  sport: Trophy
} as const;

export function EventsSection({ locale, content, events, permanentActivities }: Props) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const today = useMemo(() => new Date(), []);
  const publishedEvents = useMemo(() => getPublishedEvents(events), [events]);
  const upcomingEvents = useMemo(() => getVisibleUpcomingEvents(publishedEvents, today), [publishedEvents, today]);
  const pastEvents = useMemo(() => getPastEvents(publishedEvents, today), [publishedEvents, today]);
  const filteredEvents = activeFilter === "all" ? upcomingEvents : upcomingEvents.filter((event) => event.category === activeFilter);
  const featureableEvents = filteredEvents.filter((event) => isFeatureableEvent(event, today));
  const standardEvents = filteredEvents.filter((event) => !isFeatureableEvent(event, today));

  return (
    <div className="events-agenda" aria-labelledby="events-agenda-title">
      <div className="events-block">
        <h3 id="events-agenda-title">{content.concertsTitle}</h3>
        <p>{content.concertsIntro}</p>
        <EventFilters activeFilter={activeFilter} content={content} onChange={setActiveFilter} />

        {filteredEvents.length > 0 ? (
          <div className="concert-card-grid">
            {[...featureableEvents, ...standardEvents].map((event) => (
              <EventCard content={content} event={event} key={event.id} locale={locale} today={today} />
            ))}
          </div>
        ) : (
          <div className="events-empty-card">
            <h4>{content.emptyTitle}</h4>
            <p>{content.emptyText}</p>
            <a href={fuengirolaOfficialAgendaUrl} target="_blank" rel="noopener noreferrer">
              {content.officialAgendaCta}
              <ExternalLink aria-hidden="true" size={15} />
            </a>
          </div>
        )}
      </div>

      <section className="guide-recommendation event-highlight-card" aria-labelledby="marenostrum-title">
        <Music aria-hidden="true" size={28} />
        <div>
          <h3 id="marenostrum-title">{content.marenostrumTitle}</h3>
          <p>{content.marenostrumText}</p>
          <a href={marenostrumOfficialUrl} target="_blank" rel="noopener noreferrer" className="event-inline-link">
            {content.marenostrumCta}
            <ExternalLink aria-hidden="true" size={15} />
          </a>
        </div>
      </section>

      <div className="events-block">
        <h3>{content.annualTitle}</h3>
        <div className="annual-events-grid">
          {annualFuengirolaEvents.map((event) => {
            const Icon = annualEventIcons[event.icon];
            return (
              <article className="annual-event-card" key={event.id}>
                <Icon aria-hidden="true" size={24} />
                <strong>{event.title[locale]}</strong>
                <span>{event.season[locale]}</span>
                <p>{event.description[locale]}</p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="events-block">
        <h3>{content.permanentTitle}</h3>
        <p>{content.permanentIntro}</p>
        <div className="permanent-activity-grid">
          {permanentActivities.map((activity) => (
            <PermanentActivityCard activity={activity} key={activity.id} locale={locale} />
          ))}
        </div>
      </div>

      <div className="events-block">
        <h3>{content.agendaTitle}</h3>
        <div className="event-timeline">
          {fuengirolaAgenda.map((month) => (
            <div className="event-timeline-item" key={month.id}>
              <strong>{month.month[locale]}</strong>
              <div>
                {month.events.map((event) => (
                  <p key={event[locale]}>{event[locale]}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="guide-recommendation event-tips-card" aria-labelledby="event-tips-title">
        <CheckCircle2 aria-hidden="true" size={28} />
        <div>
          <h3 id="event-tips-title">{content.tipsTitle}</h3>
          <ul className="guide-check-list">
            {content.tips.map((tip) => (
              <li key={tip}>
                <CheckCircle2 aria-hidden="true" size={18} />
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="events-block event-map-block">
        <h3>{content.mapTitle}</h3>
        <EventsGuideMap ariaLabel={content.mapAria} apartmentLabel={content.mapApartment} />
      </div>

      <PastEventsDisclosure content={content} events={pastEvents} locale={locale} today={today} />

      <div className="events-block" id="eventos-faq">
        <h3>{content.faqTitle}</h3>
        <div className="guide-faq-list">
          {content.faqs.map((item) => (
            <details className="guide-faq-item" key={item.question}>
              <summary>
                <CircleHelp aria-hidden="true" size={18} />
                {item.question}
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}

function EventFilters({
  activeFilter,
  content,
  onChange
}: {
  activeFilter: FilterKey;
  content: ThingsToDoEventsContent;
  onChange: (filter: FilterKey) => void;
}) {
  return (
    <div className="event-filter-bar" aria-label={content.filtersLabel} role="group">
      {filterKeys.map((filter) => (
        <button
          aria-pressed={activeFilter === filter}
          className={activeFilter === filter ? "event-filter active" : "event-filter"}
          key={filter}
          onClick={() => onChange(filter)}
          type="button"
        >
          {content.filterLabels[filter]}
        </button>
      ))}
    </div>
  );
}

function EventCard({
  content,
  event,
  locale,
  today,
  past = false
}: {
  content: ThingsToDoEventsContent;
  event: FuengirolaEvent;
  locale: Locale;
  today: Date;
  past?: boolean;
}) {
  const lifecycle = getEventLifecycleStatus(event, today);
  const statusLabel = event.status && event.status !== "scheduled" ? content.statusLabels[event.status] : content.statusLabels[lifecycle];
  const canShowTickets = Boolean(event.ticketUrl && lifecycle !== "past" && event.status !== "cancelled" && event.status !== "postponed");
  const isFeatured = isFeatureableEvent(event, today);
  const dateLabel = formatEventDate(event, locale);
  const cardClass = ["concert-card", isFeatured ? "featured" : "", past ? "past-event-card" : ""].filter(Boolean).join(" ");

  return (
    <article className={cardClass}>
      <div className="concert-image" aria-label={content.noImageLabel}>
        {event.image ? (
          <Image src={event.image} alt={event.title[locale]} fill sizes="(max-width: 960px) 100vw, 320px" loading="lazy" className="image-cover" />
        ) : (
          <Mic2 aria-hidden="true" size={28} />
        )}
      </div>
      <div className="concert-card-body">
        <div className="event-card-meta">
          <span>{content.categoryLabels[event.category]}</span>
          {event.free ? <span>{content.freeLabel}</span> : null}
        </div>
        <EventStatusBadge label={statusLabel} status={event.status && event.status !== "scheduled" ? event.status : lifecycle} />
        <h4>{event.title[locale]}</h4>
        {event.subtitle ? <p className="event-subtitle">{event.subtitle[locale]}</p> : null}
        <p>
          <CalendarDays aria-hidden="true" size={16} />
          {dateLabel}
        </p>
        <p>
          <MapPin aria-hidden="true" size={16} />
          {event.location?.[locale] ?? event.venue[locale]}
        </p>
        <p>{event.description[locale]}</p>
        <div className="event-actions">
          {event.officialUrl ? (
            <a
              href={event.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("event_info_click", {
                  event_slug: event.slug,
                  event_category: event.category,
                  venue: event.venue[locale],
                  page_path: currentPagePath(),
                  language: languageParam(locale)
                })
              }
            >
              {content.officialInfoLabel}
              <ExternalLink aria-hidden="true" size={14} />
            </a>
          ) : null}
          {canShowTickets ? (
            <a
              href={event.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("ticket_click", {
                  event_slug: event.slug,
                  venue: event.venue[locale],
                  page_path: currentPagePath(),
                  language: languageParam(locale)
                })
              }
            >
              <Ticket aria-hidden="true" size={16} />
              {content.ticketLabel}
              <ExternalLink aria-hidden="true" size={14} />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function EventStatusBadge({ label, status }: { label: string; status: EventLifecycleStatus | "cancelled" | "postponed" | "rescheduled" }) {
  return <strong className={`event-status ${status}`}>{label}</strong>;
}

function PastEventsDisclosure({
  content,
  events,
  locale,
  today
}: {
  content: ThingsToDoEventsContent;
  events: FuengirolaEvent[];
  locale: Locale;
  today: Date;
}) {
  const [open, setOpen] = useState(false);
  const visibleEvents = open ? sortEventsByDate(events).reverse() : events.slice(0, 2);

  if (events.length === 0) return null;

  return (
    <section className="events-block past-events-block" aria-labelledby="past-events-title">
      <h3 id="past-events-title">{content.pastTitle}</h3>
      <p>{content.pastIntro}</p>
      <div className="concert-card-grid past-events-grid" id="past-events-list">
        {visibleEvents.map((event) => (
          <EventCard content={content} event={event} key={event.id} locale={locale} past today={today} />
        ))}
      </div>
      {events.length > 2 ? (
        <button
          aria-controls="past-events-list"
          aria-expanded={open}
          className="past-events-toggle"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? content.hidePast : content.showPast}
          {open ? <ChevronUp aria-hidden="true" size={17} /> : <ChevronDown aria-hidden="true" size={17} />}
        </button>
      ) : null}
    </section>
  );
}

function PermanentActivityCard({ activity, locale }: { activity: PermanentActivity; locale: Locale }) {
  return (
    <article className="permanent-activity-card">
      <CheckCircle2 aria-hidden="true" size={22} />
      <strong>{activity.title[locale]}</strong>
      <span>{activity.tag[locale]}</span>
      <p>{activity.description[locale]}</p>
    </article>
  );
}

function formatEventDate(event: FuengirolaEvent, locale: Locale) {
  const formatter = new Intl.DateTimeFormat(dateLocales[locale], { day: "numeric", month: "long", year: "numeric" });
  const start = parseIsoAsLocalDate(event.startDate);
  const formattedStart = formatter.format(start);
  const formattedEnd = event.endDate ? formatter.format(parseIsoAsLocalDate(event.endDate)) : "";
  const dateRange = formattedEnd && formattedEnd !== formattedStart ? `${formattedStart} - ${formattedEnd}` : formattedStart;
  return event.startTime ? `${dateRange} · ${event.startTime}` : dateRange;
}

function parseIsoAsLocalDate(isoDate: string) {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(year, month - 1, day);
}
