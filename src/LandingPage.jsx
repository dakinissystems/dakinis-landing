import logoAkoenet from "../Akoenet.png";
import logoStreamAutomator from "../StreamAutomator.png";
import { DAKINIS_LANDING_PROJECTS } from "./config/landing-projects.js";
import { dakinisMailtoContact } from "./config/contact.js";
import { DAKINIS_URL_CORE, DAKINIS_URL_HUB } from "./config/product-urls.js";
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

export default function LandingPage() {
  const { locale, t } = useLanguage();

  const saleProducts = DAKINIS_PRODUCTS.filter((p) => p.role === "flagship" || p.role === "product");

  return (
    <CorporateShell activeNav="home">
      <section className="px-6 py-20 text-center md:py-24" aria-labelledby="hero-heading">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">{t.hero.kicker}</p>
        <h1 id="hero-heading" className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
          {t.hero.line1}
          <span className="block text-cyan-400">{t.hero.line2}</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-gray-400 md:text-lg">{t.hero.body}</p>
        <ul className="mx-auto mb-8 flex max-w-xl flex-wrap justify-center gap-2 text-sm text-gray-300">
          {(t.hero.pillars || []).map((item) => (
            <li key={item} className="rounded-full border border-white/15 px-3 py-1">
              ✓ {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#productos-home"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
          >
            {t.hero.ctaProducts}
          </a>
          <a
            href={DAKINIS_URL_HUB}
            className="rounded-xl border border-gray-600 px-6 py-3 transition hover:bg-gray-800"
            onClick={() => dakinisTrackEvent(DAKINIS_ANALYTICS_EVENTS.HUB_OPENED, { from: "landing_hero" })}
          >
            {t.hero.ctaHub}
          </a>
        </div>
      </section>

      <section id="productos-home" className="bg-[#111117] px-6 py-20">
        <h2 className="mb-4 text-center text-3xl font-bold">{t.productosHome.title}</h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-gray-400">{t.productosHome.lead}</p>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {saleProducts.map((p) => (
            <article key={p.id} className="rounded-2xl border border-white/10 bg-[#1A1A22] p-6 text-center">
              <h3 className="mb-2 text-lg font-semibold text-cyan-400">{dakinisProductField(p, "name", locale)}</h3>
              <p className="mb-4 text-sm text-gray-400">{dakinisProductField(p, "summary", locale)}</p>
              <button
                type="button"
                className="text-sm text-cyan-300 hover:underline"
                onClick={() => navigate(p.landingPath || "/productos")}
              >
                {t.productos.more}
              </button>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-gray-500">{t.productosHome.oneWhatsapp}</p>
      </section>

      <section id="no-desde-cero" className="px-6 py-20 text-center" aria-labelledby="no-desde-cero-heading">
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
      </section>

      <section id="dakinis-one" className="bg-[#0E1018] px-6 py-16 text-center">
        <h2 className="mb-4 text-2xl font-bold">{t.dakinisOne.title}</h2>
        <p className="mx-auto mb-6 max-w-2xl text-gray-400">{t.dakinisOne.body}</p>
        <a
          href={DAKINIS_URL_CORE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-xl border border-gray-600 px-6 py-3 transition hover:bg-gray-800"
        >
          {t.dakinisOne.cta}
        </a>
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
            href={dakinisMailtoContact(t.contacto.emailSubject)}
            className="rounded-xl bg-black px-8 py-4 font-semibold text-white hover:bg-gray-900"
          >
            {t.contacto.email}
          </a>
        </div>
        <p className="mx-auto mt-4 max-w-md text-sm text-black/75">{t.contacto.whatsappFabHint}</p>
      </section>
    </CorporateShell>
  );
}
