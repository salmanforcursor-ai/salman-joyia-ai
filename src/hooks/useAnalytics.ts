import { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { initAnalytics, trackPageView, trackScrollDepth } from "@/lib/analytics";

/**
 * Hook for analytics tracking
 */
export function useAnalytics() {
  const location = useLocation();

  // Initialize analytics on mount
  useEffect(() => {
    initAnalytics();
  }, []);

  // Track page views on route change
  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  // Track scroll depth
  useEffect(() => {
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollPercent = Math.round(
        ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
      );

      // Track milestones: 25%, 50%, 75%, 100%
      if (scrollPercent >= 25 && maxScroll < 25) {
        maxScroll = 25;
        trackScrollDepth(25);
      } else if (scrollPercent >= 50 && maxScroll < 50) {
        maxScroll = 50;
        trackScrollDepth(50);
      } else if (scrollPercent >= 75 && maxScroll < 75) {
        maxScroll = 75;
        trackScrollDepth(75);
      } else if (scrollPercent >= 100 && maxScroll < 100) {
        maxScroll = 100;
        trackScrollDepth(100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    trackEvent: useCallback((eventName: string, params?: Record<string, unknown>) => {
      const { trackEvent } = require("@/lib/analytics");
      trackEvent(eventName, params);
    }, []),
  };
}

