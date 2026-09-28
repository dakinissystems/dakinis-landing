import { useEffect } from "react";
import CorporateShell from "./components/CorporateShell.jsx";
import { useLanguage } from "./context/LanguageContext.jsx";
import { dakinisTrackEvent, DAKINIS_ANALYTICS_EVENTS } from "./utils/analytics.js";
import LandingHeroSection from "./landing/LandingHeroSection.jsx";
import LandingStorySections from "./landing/LandingStorySections.jsx";
import LandingClosingSections from "./landing/LandingClosingSections.jsx";

function trackHubCta(from) {
  dakinisTrackEvent(DAKINIS_ANALYTICS_EVENTS.HUB_OPENED, { from });
  dakinisTrackEvent(DAKINIS_ANALYTICS_EVENTS.SIGNUP_STARTED, { from, surface: "home" });
}

function trackOneCta(from) {
  dakinisTrackEvent(DAKINIS_ANALYTICS_EVENTS.CTA_DAKINIS_ONE_CLICKED, { from });
}

export default function LandingPage() {
  const { locale, t } = useLanguage();

  useEffect(() => {
    dakinisTrackEvent(DAKINIS_ANALYTICS_EVENTS.LANDING_PAGE_VIEW, { surface: "home" });
  }, []);

  return (
    <CorporateShell activeNav="home">
      <LandingHeroSection t={t} trackHubCta={trackHubCta} />
      <LandingStorySections t={t} trackHubCta={trackHubCta} trackOneCta={trackOneCta} />
      <LandingClosingSections t={t} locale={locale} trackHubCta={trackHubCta} />
    </CorporateShell>
  );
}
