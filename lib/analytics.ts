/**
 * Lightweight analytics helper.
 *
 * This project does NOT ship any real analytics credentials or IDs.
 * `trackEvent` currently pushes events to `window.dataLayer`, which is the
 * standard integration point for Google Tag Manager / Google Analytics 4.
 *
 * To go live:
 * 1. Add the GTM/GA4 snippet with your real container/measurement ID in
 *    app/layout.tsx (or via a GTM container published separately).
 * 2. That's it — every call below will already be flowing into
 *    window.dataLayer and picked up by your tag configuration.
 */

export type AnalyticsEvent =
  | "whatsapp_click_urgency_bar"
  | "whatsapp_click_header"
  | "whatsapp_click_hero"
  | "whatsapp_click_problem"
  | "whatsapp_click_how_it_works"
  | "whatsapp_click_students"
  | "whatsapp_click_families"
  | "whatsapp_click_faq"
  | "whatsapp_click_final_cta"
  | "whatsapp_click_floating_button"
  | "whatsapp_click_mobile_sticky"
  | "privacy_modal_open"
  | "terms_modal_open";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(event: AnalyticsEvent, extra?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...extra,
  });

  // Helpful during local development; safe to leave since it doesn't touch
  // any external service.
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.info(`[analytics] ${event}`, extra ?? {});
  }
}
