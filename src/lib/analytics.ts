/**
 * Analytics utility for tracking user interactions
 * Supports Google Analytics 4 and extensible to other providers
 */

import { config } from "@/config/constants";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Initialize Google Analytics 4
 */
export function initAnalytics(): void {
  if (!config.analytics.gaId || typeof window === "undefined") {
    return;
  }

  // Load GA4 script
  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${config.analytics.gaId}`;
  document.head.appendChild(script1);

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", config.analytics.gaId, {
    page_path: window.location.pathname,
  });
}

/**
 * Track a custom event
 */
export function trackEvent(
  eventName: string,
  eventParams?: {
    [key: string]: string | number | boolean;
  }
): void {
  if (typeof window === "undefined") {
    return;
  }

  // Google Analytics 4
  if (window.gtag && config.analytics.gaId) {
    window.gtag("event", eventName, eventParams);
  }

  // Console logging for development
  if (import.meta.env.DEV) {
    console.log("Analytics Event:", eventName, eventParams);
  }
}

/**
 * Track page view
 */
export function trackPageView(path: string): void {
  if (typeof window === "undefined") {
    return;
  }

  if (window.gtag && config.analytics.gaId) {
    window.gtag("config", config.analytics.gaId, {
      page_path: path,
    });
  }

  trackEvent("page_view", { path });
}

/**
 * Track form submission
 */
export function trackFormSubmission(formName: string, success: boolean): void {
  trackEvent("form_submit", {
    form_name: formName,
    success: success,
  });
}

/**
 * Track CTA click
 */
export function trackCTAClick(ctaName: string, location: string): void {
  trackEvent("cta_click", {
    cta_name: ctaName,
    location: location,
  });
}

/**
 * Track scroll depth
 */
export function trackScrollDepth(depth: number): void {
  trackEvent("scroll_depth", {
    depth: depth,
  });
}

/**
 * Track external link click
 */
export function trackExternalLink(url: string): void {
  trackEvent("external_link_click", {
    link_url: url,
  });
}

/**
 * Track error
 */
export function trackError(error: Error, context?: string): void {
  trackEvent("error", {
    error_message: error.message,
    error_name: error.name,
    context: context || "unknown",
  });

  // Also log to console
  console.error("Error tracked:", error, context);
}

