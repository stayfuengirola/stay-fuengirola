import { Locale } from "@/i18n/locales";

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const cookieConsentStorageKey = "fuengirola-cookie-consent";
export const analyticsDisabledStorageKey = "fuengirola-analytics-disabled";
const productionHosts = new Set(["stayfuengirola.com", "www.stayfuengirola.com"]);

export type AnalyticsEventParams = Record<string, string | number | boolean | undefined>;
export type AnalyticsEventName =
  | "booking_click"
  | "whatsapp_click"
  | "language_change"
  | "event_info_click"
  | "ticket_click"
  | "guide_internal_click";

export function isAnalyticsBuildEnabled() {
  const vercelEnv = process.env.NEXT_PUBLIC_VERCEL_ENV ?? process.env.VERCEL_ENV;
  return Boolean(GA_MEASUREMENT_ID && process.env.NODE_ENV === "production" && (!vercelEnv || vercelEnv === "production"));
}

export function isAnalyticsRuntimeDisabled() {
  if (typeof window === "undefined") return true;
  if (!productionHosts.has(window.location.hostname)) return true;
  return window.localStorage.getItem(analyticsDisabledStorageKey) === "1";
}

export function syncAnalyticsOptOutFromUrl() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  if (params.get("disable_analytics") === "1") {
    window.localStorage.setItem(analyticsDisabledStorageKey, "1");
  }
  if (params.get("enable_analytics") === "1") {
    window.localStorage.removeItem(analyticsDisabledStorageKey);
  }
}

export function canUseAnalytics() {
  return Boolean(isAnalyticsBuildEnabled() && !isAnalyticsRuntimeDisabled());
}

export function trackPageView(pagePath: string) {
  if (typeof window === "undefined") return;
  if (!canUseAnalytics()) return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", "page_view", {
    page_path: pagePath,
    page_location: window.location.href,
    page_title: document.title,
    send_to: GA_MEASUREMENT_ID
  });
}

export function trackEvent(eventName: AnalyticsEventName, params: AnalyticsEventParams = {}) {
  if (typeof window === "undefined") return;
  if (!canUseAnalytics()) return;
  if (typeof window.gtag !== "function") {
    if (process.env.NODE_ENV !== "production") console.debug("[analytics skipped]", eventName, params);
    return;
  }

  window.gtag("event", eventName, compactParams(params));
}

export function currentPagePath() {
  if (typeof window === "undefined") return "";
  return `${window.location.pathname}${window.location.search}`;
}

export function languageParam(locale: Locale) {
  return locale;
}

function compactParams(params: AnalyticsEventParams) {
  return Object.fromEntries(Object.entries(params).filter(([, value]) => value !== undefined));
}
