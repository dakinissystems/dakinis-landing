import { dakinisProductField } from "@dakinis/shared-brand/i18n";
import { DAKINIS_PRODUCTS } from "@dakinis/shared-brand/products";
import { dakinisMailtoContact } from "../config/contact.js";
import { CORE_PRICING_URL, CORE_SAVINGS_CALC_URL } from "../config/core-links.js";
import { HUB_START_URL } from "../config/hub-links.js";
import { dakinisTrackEvent, DAKINIS_ANALYTICS_EVENTS } from "../utils/analytics.js";

const ECOSYSTEM_PRODUCTS = DAKINIS_PRODUCTS.filter(
  (p) => p.role === "product" && p.status === "active" && p.id !== "dnd"
);

function navigate(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export default function LandingClosingSections({ t, locale, trackHubCta }) {
  return (
    <>
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

      <section className="px-6 py-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">{t.beta.title}</p>
        <p className="mx-auto mt-2 max-w-xl text-sm text-gray-500">{t.beta.lead}</p>
      </section>

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
    </>
  );
}
