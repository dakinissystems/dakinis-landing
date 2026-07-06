import { useEffect } from "react";
import logoAkoenet from "../Akoenet.png";
import logoStreamAutomator from "../StreamAutomator.png";
import { dakinisMailtoContact } from "./config/contact.js";
import { CORE_PRICING_URL, CORE_SAVINGS_CALC_URL, CORE_TRIAL_URL } from "./config/core-links.js";
import { HUB_START_URL } from "./config/hub-links.js";
import { dakinisProductField } from "@dakinis/shared-brand/i18n";
import { DAKINIS_PRODUCTS } from "@dakinis/shared-brand/products";
import CorporateShell from "./components/CorporateShell.jsx";
import HubHeroPreview from "./components/HubHeroPreview.jsx";
import ProductHeroPreview from "./components/ProductHeroPreview.jsx";
import { useLanguage } from "./context/LanguageContext.jsx";
import { dakinisTrackEvent, DAKINIS_ANALYTICS_EVENTS } from "./utils/analytics.js";

const ECOSYSTEM_PRODUCTS = DAKINIS_PRODUCTS.filter(
  (p) => p.role === "product" && p.status === "active" && p.id !== "dnd"
);

function navigate(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

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
      {/* Hero — plataforma */}
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

      {/* Problema */}
      <section id="problema" className="border-y border-white/10 bg-[#0E1018] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold">{t.problem.title}</h2>
          <p className="mb-4 text-gray-300">{t.problem.body}</p>
          <p className="mb-6 text-gray-400">{t.problem.body2}</p>
          <p className="text-lg font-semibold text-gray-100">
            {t.problem.close}{" "}
            <span className="text-cyan-400">{t.problem.closePlatform}</span>
          </p>
        </div>
      </section>

      {/* Plataforma */}
      <section id="plataforma" className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-4 text-3xl font-bold">{t.platform.title}</h2>
          <p className="mx-auto mb-2 max-w-2xl text-gray-300">{t.platform.lead}</p>
          <p className="mx-auto mb-12 max-w-2xl font-semibold text-cyan-400">{t.platform.leadHub}</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {(t.platform.pillars || []).map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-[#1A1A22] p-6 text-left">
                <h3 className="mb-2 font-semibold text-cyan-400">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como-funciona" className="bg-[#111117] px-6 py-20" aria-labelledby="how-heading">
        <h2 id="how-heading" className="mb-12 text-center text-3xl font-bold">
          {t.howItWorks.title}
        </h2>
        <ol className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
          {(t.howItWorks.steps || []).map((step, i) => (
            <li key={step.title} className="text-center">
              <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-lg font-bold text-cyan-300">
                {i + 1}
              </span>
              <h3 className="mb-2 font-semibold">{step.title}</h3>
              <p className="text-sm text-gray-400">{step.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Hub — protagonista */}
      <section id="hub" className="border-y border-cyan-500/20 bg-gradient-to-br from-cyan-950/30 via-[#111117] to-purple-950/20 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-400">{t.hub.eyebrow}</p>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">{t.hub.title}</h2>
            <p className="mb-4 font-medium text-cyan-200/90">{t.hub.lead}</p>
            <p className="mb-3 text-gray-300">{t.hub.body}</p>
            <p className="mb-6 text-gray-400">{t.hub.body2}</p>
            <ul className="mb-8 space-y-2 text-sm text-gray-300">
              {(t.hub.bullets || []).map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-cyan-400" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={HUB_START_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-black hover:bg-cyan-400"
              onClick={() => trackHubCta("landing_hub_block")}
            >
              {t.hero.ctaPrimary}
            </a>
          </div>
          <HubHeroPreview labels={t.hero.hubPreview} caption={t.hero.hubPreviewCaption} />
        </div>
      </section>

      {/* Dakinis One — producto estrella */}
      <section id="dakinis-one" className="px-6 py-20" aria-labelledby="one-heading">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">{t.dakinisOneProduct.eyebrow}</p>
            <h2 id="one-heading" className="mb-4 text-3xl font-bold">
              {t.dakinisOneProduct.title}
            </h2>
            <p className="mb-6 text-gray-300">{t.dakinisOneProduct.lead}</p>
            <ul className="mb-8 space-y-2 text-sm text-gray-300">
              {(t.dakinisOneProduct.bullets || []).map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-cyan-400" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={CORE_TRIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl border border-cyan-500/50 px-8 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-500/10"
              onClick={() => trackOneCta("landing_one_product")}
            >
              {t.dakinisOneProduct.cta}
            </a>
          </div>
          <ProductHeroPreview tabs={t.hero.previewTabs} caption={t.hero.previewCaption} />
        </div>
      </section>

      {/* IA */}
      <section id="ia" className="bg-[#111117] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold">{t.ai.title}</h2>
          <p className="mb-4 text-gray-300">{t.ai.lead}</p>
          <p className="text-gray-400">{t.ai.sub}</p>
        </div>
      </section>

      {/* Knowledge */}
      <section id="conocimiento" className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold">{t.knowledge.title}</h2>
          <p className="mb-6 text-gray-300">{t.knowledge.lead}</p>
          <p className="text-lg italic text-cyan-300/90">{t.knowledge.quote}</p>
        </div>
      </section>

      {/* Otros productos */}
      <section id="ecosistema" className="bg-[#0E1018] px-6 py-20">
        <h2 className="mb-4 text-center text-3xl font-bold">{t.ecosystem.title}</h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-gray-400">{t.ecosystem.lead}</p>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {ECOSYSTEM_PRODUCTS.map((p) => (
            <article key={p.id} className="rounded-2xl border border-white/10 bg-[#1A1A22] p-6 text-center">
              <h3 className="mb-2 text-lg font-semibold text-gray-100">{dakinisProductField(p, "name", locale)}</h3>
              <p className="mb-4 text-sm text-gray-400">{dakinisProductField(p, "summary", locale)}</p>
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                {p.landingPath ? (
                  <button
                    type="button"
                    className="text-cyan-300 hover:underline"
                    onClick={() => navigate(p.landingPath)}
                  >
                    {t.productos.more}
                  </button>
                ) : null}
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-300"
                  >
                    {t.productos.open}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-gray-500">{t.ecosystem.footnote}</p>
      </section>

      {/* Precios teaser */}
      <section id="precios" className="px-6 py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold">{t.pricing.title}</h2>
        <p className="mx-auto mb-6 max-w-2xl text-gray-300">{t.pricing.lead}</p>
        <a
          href={CORE_PRICING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-black hover:bg-cyan-400"
          onClick={() =>
            dakinisTrackEvent(DAKINIS_ANALYTICS_EVENTS.LANDING_PRICING_CLICKED, { from: "landing_pricing" })
          }
        >
          {t.pricing.cta}
        </a>
        {t.pricing.footnote ? <p className="mx-auto mt-4 max-w-md text-xs text-gray-500">{t.pricing.footnote}</p> : null}
      </section>

      {/* Calculadora — conversión, debajo del fold */}
      <section
        id="ahorro"
        className="border-y border-cyan-500/20 bg-gradient-to-br from-cyan-950/40 via-[#111117] to-purple-950/30 px-6 py-16 md:py-20"
        aria-labelledby="savings-heading"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-400">{t.savings.kicker}</p>
          <h2 id="savings-heading" className="mb-3 text-3xl font-bold leading-tight md:text-4xl">
            {t.savings.headline}
          </h2>
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
                dakinisTrackEvent(DAKINIS_ANALYTICS_EVENTS.LANDING_SAVINGS_CALC_CLICKED, { from: "landing_savings" })
              }
            >
              {t.savings.ctaCalc}
            </a>
            <a
              href={HUB_START_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-gray-600 px-8 py-3.5 font-semibold transition hover:bg-gray-800"
              onClick={() => trackHubCta("landing_savings_trial")}
            >
              {t.hero.ctaPrimary}
            </a>
          </div>
          {t.savings.footnote ? (
            <p className="mx-auto mt-5 max-w-xl text-xs text-gray-500">{t.savings.footnote}</p>
          ) : null}
        </div>
      </section>

      {/* Beta pilotos */}
      <section className="px-6 py-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">{t.beta.title}</p>
        <p className="mx-auto mt-2 max-w-xl text-sm text-gray-500">{t.beta.lead}</p>
      </section>

      {/* CTA final */}
      <section id="contacto" className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-20 text-center">
        <h2 className="mb-3 text-3xl font-bold text-black">{t.contacto.title}</h2>
        <p className="mx-auto mb-6 max-w-2xl text-sm text-black/85">{t.contacto.body}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={HUB_START_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-black px-8 py-4 font-semibold text-white hover:bg-gray-900"
            onClick={() => trackHubCta("landing_contact")}
          >
            {t.contacto.ctaAccount}
          </a>
          <a
            href={dakinisMailtoContact(t.contacto.emailSubject)}
            className="rounded-xl border-2 border-black/30 bg-white/90 px-8 py-4 font-semibold text-black hover:bg-white"
          >
            {t.contacto.email}
          </a>
        </div>
        <p className="mx-auto mt-4 max-w-md text-sm text-black/75">{t.contacto.whatsappFabHint}</p>
      </section>
    </CorporateShell>
  );
}
