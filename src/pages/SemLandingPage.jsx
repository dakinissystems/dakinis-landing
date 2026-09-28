import { useEffect } from "react";
import CorporateShell from "../components/CorporateShell.jsx";
import ProductHeroPreview from "../components/ProductHeroPreview.jsx";
import { CORE_PRICING_URL, CORE_SAVINGS_CALC_URL, CORE_TRIAL_URL } from "../config/core-links.js";
import { HUB_START_URL } from "../config/hub-links.js";
import { useLanguage } from "../context/LanguageContext.jsx";
import { dakinisTrackEvent, DAKINIS_ANALYTICS_EVENTS } from "../utils/analytics.js";

function trackOneCta(from) {
  dakinisTrackEvent(DAKINIS_ANALYTICS_EVENTS.CTA_DAKINIS_ONE_CLICKED, { from });
}

/** Landing SEM — intención de compra (Google/Meta Ads). Hero “Deja Excel”. */
export default function SemLandingPage() {
  const { t } = useLanguage();
  const sem = t.sem;

  useEffect(() => {
    dakinisTrackEvent(DAKINIS_ANALYTICS_EVENTS.LANDING_PAGE_VIEW, { surface: "sem" });
    if (sem?.meta?.title) document.title = sem.meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc && sem?.meta?.description) desc.setAttribute("content", sem.meta.description);
  }, [sem]);

  return (
    <CorporateShell activeNav="">
      <section className="px-6 py-16 md:py-20" aria-labelledby="sem-hero-heading">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="order-1 text-center lg:text-left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">{sem.hero.kicker}</p>
            <h1 id="sem-hero-heading" className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {sem.hero.line1}
              <span className="mt-3 block text-xl font-semibold text-cyan-400 md:text-2xl lg:text-3xl">
                {sem.hero.line2}
              </span>
            </h1>
            {sem.hero.socialProof ? <p className="mb-4 text-sm text-gray-400">{sem.hero.socialProof}</p> : null}
          </div>

          <div className="order-2 mx-auto w-full lg:mx-0">
            <ProductHeroPreview tabs={t.hero.previewTabs} caption={t.hero.previewCaption} />
          </div>

          <div className="order-3 text-center lg:col-span-2 lg:text-left">
            <ul className="mb-8 flex flex-wrap justify-center gap-2 text-sm text-gray-300 lg:justify-start">
              {(sem.hero.pillars || []).map((item) => (
                <li key={item} className="rounded-full border border-white/15 px-3 py-1">
                  ✓ {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center gap-3 lg:items-start">
              <a
                href={CORE_TRIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-cyan-500 px-10 py-4 text-lg font-bold text-black shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400 md:text-xl"
                onClick={() => trackOneCta("sem_hero_primary")}
              >
                {sem.hero.ctaPrimary}
              </a>
              {sem.hero.ctaSubtext ? <p className="text-sm text-gray-400">{sem.hero.ctaSubtext}</p> : null}
              {(sem.hero.trustBullets || []).length > 0 ? (
                <ul className="flex max-w-lg flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-gray-300 lg:justify-start">
                  {(sem.hero.trustBullets || []).map((item) => (
                    <li key={item} className="flex items-center gap-1.5">
                      <span className="text-emerald-400" aria-hidden>
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              <a
                href={CORE_PRICING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-gray-600 px-5 py-2.5 text-sm transition hover:bg-gray-800"
                onClick={() =>
                  dakinisTrackEvent(DAKINIS_ANALYTICS_EVENTS.LANDING_PRICING_CLICKED, { from: "sem_hero" })
                }
              >
                {sem.hero.ctaPricing}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="ahorro"
        className="border-y border-cyan-500/20 bg-gradient-to-br from-cyan-950/40 via-[#111117] to-purple-950/30 px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-400">{t.savings.kicker}</p>
          <h2 className="mb-3 text-3xl font-bold leading-tight md:text-4xl">{t.savings.headline}</h2>
          {t.savings.credibility ? (
            <p className="mx-auto mb-4 max-w-2xl text-sm text-cyan-200/90">{t.savings.credibility}</p>
          ) : null}
          <p className="mx-auto mb-8 max-w-2xl text-gray-300">{t.savings.body}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={CORE_SAVINGS_CALC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-cyan-500 px-8 py-3.5 font-semibold text-black hover:bg-cyan-400"
              onClick={() =>
                dakinisTrackEvent(DAKINIS_ANALYTICS_EVENTS.LANDING_SAVINGS_CALC_CLICKED, { from: "sem_savings" })
              }
            >
              {t.savings.ctaCalc}
            </a>
            <a
              href={CORE_TRIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-gray-600 px-8 py-3.5 font-semibold transition hover:bg-gray-800"
              onClick={() => trackOneCta("sem_savings_trial")}
            >
              {t.savings.ctaTrial}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#111117] px-6 py-20">
        <h2 className="mb-4 text-center text-3xl font-bold">{t.whyOne.title}</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">{t.whyOne.lead}</p>
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(t.whyOne.benefits || []).map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-[#1A1A22] p-6 text-left">
              <h3 className="mb-2 font-semibold text-cyan-400">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center">
          <a
            href={CORE_TRIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-black hover:bg-cyan-400"
            onClick={() => trackOneCta("sem_why_one")}
          >
            {t.whyOne.cta}
          </a>
        </p>
      </section>

      <section className="px-6 py-12 text-center text-sm text-gray-500">
        <a href="/" className="text-cyan-400 hover:underline">
          {t.hero.ctaSecondary} → Dakinis Platform
        </a>
        <span className="mx-2" aria-hidden>
          ·
        </span>
        <a href={HUB_START_URL} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
          {t.hero.ctaHub}
        </a>
      </section>
    </CorporateShell>
  );
}
