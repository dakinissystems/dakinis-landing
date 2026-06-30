import logoAkoenet from "../Akoenet.png";
import logoStreamAutomator from "../StreamAutomator.png";
import { DAKINIS_LANDING_PROJECTS } from "./config/landing-projects.js";
import { dakinisMailtoContact } from "./config/contact.js";
import { CORE_PRICING_URL, CORE_TRIAL_URL } from "./config/core-links.js";
import { DAKINIS_URL_HUB } from "./config/product-urls.js";
import { dakinisProductField } from "@dakinis/shared-brand/i18n";
import { DAKINIS_PRODUCTS } from "@dakinis/shared-brand/products";
import CorporateShell from "./components/CorporateShell.jsx";
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

  return (
    <CorporateShell activeNav="home">
      <section className="px-6 py-20 text-center md:py-24" aria-labelledby="hero-heading">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">{t.hero.kicker}</p>
        <h1 id="hero-heading" className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
          {t.hero.line1}
          <span className="block text-cyan-400">{t.hero.line2}</span>
        </h1>
        <p className="mx-auto mb-4 max-w-2xl text-gray-300 md:text-lg">{t.hero.body}</p>
        {t.hero.modules ? (
          <p className="mx-auto mb-8 max-w-xl text-sm text-gray-500">{t.hero.modules}</p>
        ) : null}
        <ul className="mx-auto mb-10 flex max-w-2xl flex-wrap justify-center gap-2 text-sm text-gray-300">
          {(t.hero.pillars || []).map((item) => (
            <li key={item} className="rounded-full border border-white/15 px-3 py-1">
              ✓ {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center gap-4">
          <a
            href={CORE_TRIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-cyan-500 px-10 py-4 text-lg font-bold text-black shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400 md:text-xl"
            onClick={() => trackOneCta("landing_hero_primary")}
          >
            {t.hero.ctaPrimary}
          </a>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <a
              href={CORE_PRICING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-gray-600 px-5 py-2.5 transition hover:bg-gray-800"
              onClick={() => trackOneCta("landing_hero_pricing")}
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
          {t.hero.trustLine ? (
            <p className="mt-2 max-w-md text-xs text-gray-500">{t.hero.trustLine}</p>
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
