import logoGrande from '../Logo Grande.jpeg'
import logoSimple from '../Logo Simple.jpeg'
import logoAkoenet from '../Akoenet.png'
import logoStreamAutomator from '../StreamAutomator.png'
import { DAKINIS_LANDING_PROJECTS, DAKINIS_URL_CORE } from './config/product-urls.js'
import { useLanguage } from './context/LanguageContext.jsx'

const SERVICE_IDS = ['web', 'backend', 'auto', 'devops']

const PROJECT_LOGOS = {
  akoenet: logoAkoenet,
  stream: logoStreamAutomator,
}

export default function LandingPage() {
  const { locale, setLocale, t } = useLanguage()

  const mailtoHref = () => {
    const subject = encodeURIComponent(String(t.contacto.emailSubject))
    return `mailto:contacto@dakinis-systems.com?subject=${subject}`
  }

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0B0B0F]/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
          <a href="#" className="flex items-center gap-3" aria-label={String(t.brand.homeAria)}>
            <img
              src={logoGrande}
              alt="Dakinis Systems"
              width={220}
              height={60}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="hidden h-12 w-auto rounded-lg border border-white/15 bg-white/5 object-contain p-1 md:block"
            />
            <img
              src={logoSimple}
              alt=""
              width={44}
              height={44}
              loading="eager"
              decoding="async"
              className="h-11 w-11 rounded-xl border border-cyan-300/40 bg-cyan-400/10 object-contain p-1 md:hidden"
            />
            <span className="text-sm font-semibold text-gray-100 md:hidden">Dakinis Systems</span>
          </a>

          <div className="flex items-center gap-3 md:gap-6">
            <nav aria-label={String(t.nav.label)} className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
              <a href="#no-desde-cero" className="transition hover:text-cyan-300">
                {t.nav.ventaja}
              </a>
              <a href="#dakinis-one" className="transition hover:text-cyan-300">
                {t.nav.dakinisOne}
              </a>
              <a href="#servicios" className="transition hover:text-cyan-300">
                {t.nav.servicios}
              </a>
              <a href="#proceso" className="transition hover:text-cyan-300">
                {t.nav.proceso}
              </a>
              <a href="#trabajos" className="transition hover:text-cyan-300">
                {t.nav.trabajos}
              </a>
              <a href="#contacto" className="transition hover:text-cyan-300">
                {t.nav.contacto}
              </a>
            </nav>

            <div
              className="flex shrink-0 items-center rounded-lg border border-white/15 bg-white/5 p-0.5"
              role="group"
              aria-label={String(t.lang.switchLabel)}
            >
              <button
                type="button"
                className={`rounded-md px-2 py-1 text-xs font-semibold transition ${
                  locale === 'es' ? 'bg-cyan-500/25 text-cyan-200' : 'text-gray-400 hover:text-gray-200'
                }`}
                onClick={() => setLocale('es')}
                aria-pressed={locale === 'es'}
              >
                {t.lang.es}
              </button>
              <button
                type="button"
                className={`rounded-md px-2 py-1 text-xs font-semibold transition ${
                  locale === 'en' ? 'bg-cyan-500/25 text-cyan-200' : 'text-gray-400 hover:text-gray-200'
                }`}
                onClick={() => setLocale('en')}
                aria-pressed={locale === 'en'}
              >
                {t.lang.en}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="px-6 py-20 text-center md:py-24" aria-labelledby="hero-heading">
          <h1 id="hero-heading" className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            {t.hero.line1}
            <span className="block text-cyan-400">{t.hero.line2}</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-gray-400 md:text-lg">{t.hero.body}</p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contacto"
              className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#servicios"
              className="rounded-xl border border-gray-600 px-6 py-3 transition hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </section>

        <section
          id="no-desde-cero"
          className="px-6 py-20 text-center"
          aria-labelledby="no-desde-cero-heading"
        >
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

        <section
          id="dakinis-one"
          className="bg-[#111117] px-6 py-20 text-center"
          aria-labelledby="dakinis-one-heading"
        >
          <h2 id="dakinis-one-heading" className="mb-6 text-3xl font-bold">
            {t.dakinisOne.title}
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-gray-400">{t.dakinisOne.body}</p>

          <a
            href={DAKINIS_URL_CORE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl border border-gray-600 px-6 py-3 transition hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            {t.dakinisOne.cta}
          </a>
        </section>

        <section id="servicios" className="bg-[#0E1018] px-6 py-20">
          <h2 className="mb-12 text-center text-3xl font-bold">{t.services.title}</h2>

          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_IDS.map((id) => {
              const item = t.services.items[id]
              return (
                <article key={id} className="rounded-2xl bg-[#1A1A22] p-6 text-center">
                  <h3 className="mb-2 text-lg font-semibold text-cyan-400">{item.name}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section id="proceso" className="px-6 py-20">
          <h2 className="mb-12 text-center text-3xl font-bold">{t.proceso.title}</h2>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {t.proceso.steps.map((step, i) => (
              <article key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-cyan-300">{step.kicker}</p>
                <p className="text-sm text-gray-300">{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="trabajos" className="bg-[#111117] px-6 py-20">
          <h2 className="mb-12 text-center text-3xl font-bold">{t.trabajos.title}</h2>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {DAKINIS_LANDING_PROJECTS.map((project) => {
              const copy = t.trabajos.projects[project.id]
              const openAria = String(t.trabajos.openAria).replace('{name}', project.name)
              const projectLogo = PROJECT_LOGOS[project.id]
              return (
                <article
                  key={project.id}
                  className="rounded-2xl border border-white/10 bg-[#1A1A22] p-6 transition hover:-translate-y-0.5 hover:border-cyan-400/40"
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                    aria-label={openAria}
                  >
                    <img
                      src={projectLogo}
                      alt={`Logo ${project.name}`}
                      width={56}
                      height={56}
                      loading="lazy"
                      decoding="async"
                      className="h-14 w-14 rounded-xl border border-white/15 bg-white/5 object-contain p-1"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-cyan-300">{project.name}</h3>
                      <p className="text-sm text-gray-400">{copy.description}</p>
                      <p className="mt-1 text-xs text-cyan-400/90">{t.trabajos.openProject}</p>
                    </div>
                  </a>
                </article>
              )
            })}
          </div>
        </section>

        <section id="contacto" className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-20 text-center">
          <h2 className="mb-3 text-3xl font-bold text-black">{t.contacto.title}</h2>
          <p className="mx-auto mb-6 max-w-2xl text-sm text-black/85">{t.contacto.body}</p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={mailtoHref()}
              className="rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              {t.contacto.email}
            </a>
            <a
              href="https://wa.me/5490000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-black/50 px-8 py-4 font-semibold text-black transition hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              {t.contacto.whatsapp}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-500">
        <p className="mb-3">© {new Date().getFullYear()} Dakinis Systems. {t.footer.rights}</p>
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1" aria-label="Legal">
          <a href="/privacidad" className="hover:text-cyan-400">
            {t.legal.footer.privacy}
          </a>
          <a href="/aviso-legal" className="hover:text-cyan-400">
            {t.legal.footer.notice}
          </a>
          <a href="/cookies" className="hover:text-cyan-400">
            {t.legal.footer.cookies}
          </a>
          <a href="#contacto" className="hover:text-cyan-400">
            {t.legal.footer.contact}
          </a>
        </nav>
      </footer>
    </div>
  )
}
