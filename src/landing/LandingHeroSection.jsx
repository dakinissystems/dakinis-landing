import HubHeroPreview from "../components/HubHeroPreview.jsx";
import { HUB_START_URL } from "../config/hub-links.js";
import { CORE_PRICING_URL } from "../config/core-links.js";
import { dakinisTrackEvent, DAKINIS_ANALYTICS_EVENTS } from "../utils/analytics.js";

export default function LandingHeroSection({ t, trackHubCta }) {
  return (
    <section className="px-6 py-16 md:py-20" aria-labelledby="hero-heading">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className="order-1 text-center lg:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">{t.hero.kicker}</p>
          <h1 id="hero-heading" className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            {t.hero.line1}
          </h1>
          <p className="mb-3 text-lg text-gray-300 md:text-xl">
            {t.hero.line2}{" "}
            <span className="font-semibold text-cyan-400">{t.hero.line2Hub}</span> {t.hero.line2Tail}
          </p>
          {t.hero.reinforcement ? (
            <p className="mb-4 text-sm italic text-gray-500">{t.hero.reinforcement}</p>
          ) : null}
        </div>

        <div className="order-2 mx-auto w-full lg:mx-0">
          <HubHeroPreview labels={t.hero.hubPreview} caption={t.hero.hubPreviewCaption} />
        </div>

        <div className="order-3 text-center lg:col-span-2 lg:text-left">
          {t.hero.trustBar ? (
            <p className="mb-6 text-center text-sm font-medium text-gray-400 lg:text-left">{t.hero.trustBar}</p>
          ) : null}
          <div className="flex flex-col items-center gap-3 lg:items-start">
            <a
              href={HUB_START_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-cyan-500 px-10 py-4 text-lg font-bold text-black shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400 md:text-xl"
              onClick={() => trackHubCta("landing_hero_primary")}
            >
              {t.hero.ctaPrimary}
            </a>
            {(t.hero.trustBullets || []).length > 0 ? (
              <ul className="flex max-w-lg flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-gray-300 lg:justify-start">
                {(t.hero.trustBullets || []).map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <span className="text-emerald-400" aria-hidden>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="flex flex-wrap justify-center gap-3 text-sm lg:justify-start">
              <a
                href="#como-funciona"
                className="rounded-xl border border-gray-600 px-5 py-2.5 transition hover:bg-gray-800"
              >
                {t.hero.ctaSecondary}
              </a>
              <a
                href={CORE_PRICING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-gray-600 px-5 py-2.5 transition hover:bg-gray-800"
                onClick={() =>
                  dakinisTrackEvent(DAKINIS_ANALYTICS_EVENTS.LANDING_PRICING_CLICKED, { from: "landing_hero" })
                }
              >
                {t.hero.ctaPricing}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
