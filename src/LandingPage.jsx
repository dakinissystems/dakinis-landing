import { useEffect } from "react";
import logoAkoenet from "../Akoenet.png";
import logoStreamAutomator from "../StreamAutomator.png";
import { DAKINIS_LANDING_PROJECTS } from "./config/landing-projects.js";
import { dakinisMailtoContact } from "./config/contact.js";
import { CORE_PRICING_URL, CORE_SAVINGS_CALC_URL, CORE_TRIAL_URL } from "./config/core-links.js";
import { dakinisProductField } from "@dakinis/shared-brand/i18n";
import { DAKINIS_PRODUCTS } from "@dakinis/shared-brand/products";
import CorporateShell from "./components/CorporateShell.jsx";
import ProductHeroPreview from "./components/ProductHeroPreview.jsx";
import { useLanguage } from "./context/LanguageContext.jsx";
import { dakinisTrackEvent, DAKINIS_ANALYTICS_EVENTS } from "./utils/analytics.js";

const PROJECT_LOGOS = {
  akoenet: logoAkoenet,
  stream: logoStreamAutomator
};

function navigate(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function trackOneCta(from) {
  dakinisTrackEvent(DAKINIS_ANALYTICS_EVENTS.CTA_DAKINIS_ONE_CLICKED, { from });
}

/** Secondary products on home — not the flagship conversion focus. */
const ECOSYSTEM_PRODUCTS = DAKINIS_PRODUCTS.filter(
  (p) => p.role === "product" && p.status === "active" && p.id !== "dnd"
);

export default function LandingPage() {
  const { locale, t } = useLanguage();

  useEffect(() => {
    dakinisTrackEvent(DAKINIS_ANALYTICS_EVENTS.LANDING_PAGE_VIEW, { surface: "home" });
  }, []);

  return (
    <CorporateShell activeNav="home">
      <section className="px-6 py-16 md:py-20" aria-labelledby="hero-heading">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="order-1 text-center lg:order-1 lg:text-left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">{t.hero.kicker}</p>
            <h1 id="hero-heading" className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {t.hero.line1}
              <span className="mt-3 block text-xl font-semibold text-cyan-400 md:text-2xl lg:text-3xl">{t.hero.line2}</span>
            </h1>
            {t.hero.socialProof ? (
              <p className="mb-4 text-sm text-gray-400">{t.hero.socialProof}</p>
            ) : null}
          </div>

          <div className="order-2 mx-auto w-full lg:order-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:self-center">
            <ProductHeroPreview tabs={t.hero.previewTabs} caption={t.hero.previewCaption} />
          </div>

          <div className="order-3 text-center lg:order-1 lg:col-start-1 lg:row-start-2 lg:text-left">
            <ul className="mb-8 flex flex-wrap justify-center gap-2 text-sm text-gray-300 lg:justify-start">
              {(t.hero.pillars || []).map((item) => (
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
                onClick={() => trackOneCta("landing_hero_primary")}
              >
                {t.hero.ctaPrimary}
              </a>
              {t.hero.ctaSubtext ? (
                <p className="text-sm text-gray-400">{t.hero.ctaSubtext}</p>
              ) : null}
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
                <a
                  href="#ecosistema"
                  className="rounded-xl border border-gray-600 px-5 py-2.5 transition hover:bg-gray-800"
                >
                  {t.hero.ctaProducts}
                </a>
              </div>
            </div>
          </div>
        </div>
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
              href={CORE_TRIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-gray-600 px-8 py-3.5 font-semibold transition hover:bg-gray-800"
              onClick={() => trackOneCta("landing_savings_trial")}
            >
              {t.savings.ctaTrial}
            </a>
          </div>
          {t.savings.footnote ? (
            <p className="mx-auto mt-5 max-w-xl text-xs text-gray-500">{t.savings.footnote}</p>
          ) : null}
        </div>
      </section>

      <section id="por-que-one" className="bg-[#111117] px-6 py-20" aria-labelledby="why-one-heading">
        <h2 id="why-one-heading" className="mb-4 text-center text-3xl font-bold">
          {t.whyOne.title}
        </h2>
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
            onClick={() => trackOneCta("landing_why_one")}
          >
            {t.whyOne.cta}
          </a>
        </p>
      </section>

      <section id="ecosistema" className="px-6 py-20">
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
        <p className="mt-8 text-center text-sm text-gray-500">{t.productosHome.oneWhatsapp}</p>
      </section>

      <section id="no-desde-cero" className="bg-[#0E1018] px-6 py-20 text-center" aria-labelledby="no-desde-cero-heading">
        <h2 id="no-desde-cero-heading" className="mb-6 text-3xl font-bold">
          {t.notFromZero.title}
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-gray-400">{t.notFromZero.body}</p>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-[#1A1A22] p-6">
            <h3 className="font-semibold text-cyan-400">{t.notFromZero.fastTitle}</h3>
            <p className="text-sm text-gray-400">{t.notFromZero.fastDesc}</p>
          </div>
          <div className="rounded-2xl bg-[#1A1A22] p-6">
            <h3 className="font-semibold text-cyan-400">{t.notFromZero.ecoTitle}</h3>
            <p className="text-sm text-gray-400">{t.notFromZero.ecoDesc}</p>
          </div>
          <div className="rounded-2xl bg-[#1A1A22] p-6">
            <h3 className="font-semibold text-cyan-400">{t.notFromZero.scaleTitle}</h3>
            <p className="text-sm text-gray-400">{t.notFromZero.scaleDesc}</p>
          </div>
        </div>
        <p className="mt-8">
          <button
            type="button"
            className="text-sm text-cyan-400 hover:underline"
            onClick={() => navigate("/servicios")}
          >
            {t.hero.ctaSecondary} →
          </button>
        </p>
      </section>

      <section id="casos" className="bg-[#111117] px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">{t.trabajos.title}</h2>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {DAKINIS_LANDING_PROJECTS.map((project) => {
            const copy = t.trabajos.projects[project.id];
            const projectLogo = PROJECT_LOGOS[project.id];
            return (
              <article key={project.id} className="rounded-2xl border border-white/10 bg-[#1A1A22] p-6">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                  <img src={projectLogo} alt="" width={56} height={56} className="h-14 w-14 rounded-xl border border-white/15 object-contain p-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-300">{project.name}</h3>
                    <p className="text-sm text-gray-400">{copy.description}</p>
                  </div>
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section id="contacto" className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-20 text-center">
        <h2 className="mb-3 text-3xl font-bold text-black">{t.contacto.title}</h2>
        <p className="mx-auto mb-6 max-w-2xl text-sm text-black/85">{t.contacto.body}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={CORE_TRIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-black px-8 py-4 font-semibold text-white hover:bg-gray-900"
            onClick={() => trackOneCta("landing_contact_one")}
          >
            {t.hero.ctaPrimary}
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
