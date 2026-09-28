import HubHeroPreview from "../components/HubHeroPreview.jsx";
import ProductHeroPreview from "../components/ProductHeroPreview.jsx";
import { HUB_START_URL } from "../config/hub-links.js";
import { CORE_TRIAL_URL } from "../config/core-links.js";

export default function LandingStorySections({ t, trackHubCta, trackOneCta }) {
  return (
    <>
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

      <section id="ia" className="bg-[#111117] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold">{t.ai.title}</h2>
          <p className="mb-4 text-gray-300">{t.ai.lead}</p>
          <p className="text-gray-400">{t.ai.sub}</p>
        </div>
      </section>

      <section id="conocimiento" className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold">{t.knowledge.title}</h2>
          <p className="mb-6 text-gray-300">{t.knowledge.lead}</p>
          <p className="text-lg italic text-cyan-300/90">{t.knowledge.quote}</p>
        </div>
      </section>
    </>
  );
}
