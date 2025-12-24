import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";

const COOKIE_CONSENT_KEY = "cookie_consent";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setShowBanner(false);
    // Disable analytics if declined
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg p-4 sm:p-6"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie size={24} className="text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 id="cookie-consent-title" className="font-semibold text-foreground mb-1">
                Cookie Consent
              </h3>
              <p id="cookie-consent-description" className="text-sm text-muted-foreground">
                We use cookies to enhance your browsing experience, analyze site traffic, and assist in our
                marketing efforts. By clicking "Accept", you consent to our use of cookies.{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button variant="outline" size="sm" onClick={handleDecline}>
              Decline
            </Button>
            <Button size="sm" onClick={handleAccept}>
              Accept
            </Button>
            <button
              onClick={() => setShowBanner(false)}
              className="p-1 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close cookie consent banner"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

