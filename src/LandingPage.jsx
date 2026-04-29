import { SiteHeader } from './components/SiteHeader'
import { ProjectCard } from './components/ProjectCard'
import { CONTACT, PROJECTS, SERVICE_IDS, SITE } from './config/site'
import { useLanguage } from './context/LanguageContext.jsx'

const NAV_HREFS = [
  { key: 'servicios', href: '#servicios' },
  { key: 'proceso', href: '#proceso' },
  { key: 'trabajos', href: '#trabajos' },
  { key: 'contacto', href: '#contacto' },
]

export default function LandingPage() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  const mailtoHref = () => {
    const q = new URLSearchParams({ subject: t.contact.emailSubject })
    return `mailto:${CONTACT.email}?${q.toString()}`
  }

  const projectsWithCopy = PROJECTS.map((p) => {
    const copy = t.trabajos.projects[p.id]
    return {
      ...p,
      name: copy.name,
      description: copy.description,
    }
  })

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">
      <SiteHeader />

      <main>
        <section className="px-6 py-20 text-center md:py-24" aria-labelledby="hero-heading">
          <h1 id="hero-heading" className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            {t.hero.line1}
            <span className="block text-cyan-400">{t.hero.line2}</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-gray-400 md:text-lg">
            {t.hero.body.replace('{name}', SITE.name)}
          </p>

          <article className="mx-auto mb-8 max-w-3xl rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-5 text-left">
            <h2 className="mb-2 text-lg font-semibold text-cyan-300">{t.hero.platformTitle}</h2>
            <p className="mb-2 text-sm text-gray-200 md:text-base">{t.hero.platformBody}</p>
            <p className="text-sm text-cyan-200/90 md:text-base">{t.hero.platformNextStep}</p>
          </article>

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

        <section id="servicios" className="bg-[#111117] px-6 py-20" aria-labelledby="servicios-heading">
          <h2 id="servicios-heading" className="mb-12 text-center text-3xl font-bold">
            {t.services.title}
          </h2>

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

        <section id="proceso" className="px-6 py-20" aria-labelledby="proceso-heading">
          <h2 id="proceso-heading" className="mb-12 text-center text-3xl font-bold">
            {t.proceso.title}
          </h2>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {t.proceso.steps.map((step, i) => (
              <article key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-cyan-300">{step.kicker}</p>
                <p className="text-sm text-gray-300">{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="trabajos" className="bg-[#111117] px-6 py-20" aria-labelledby="trabajos-heading">
          <h2 id="trabajos-heading" className="mb-12 text-center text-3xl font-bold">
            {t.trabajos.title}
          </h2>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {projectsWithCopy.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openProjectLabel={t.trabajos.openProject}
                openAriaLabel={t.trabajos.openAria.replace('{name}', project.name)}
              />
            ))}
          </div>
        </section>

        <section id="contacto" className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-20 text-center">
          <h2 className="mb-3 text-3xl font-bold text-black">{t.contacto.title}</h2>
          <p className="mx-auto mb-6 max-w-2xl text-sm text-black/85">{t.contacto.body}</p>

          <nav aria-label={t.contacto.navAria} className="flex flex-wrap justify-center gap-3">
            <a
              href={mailtoHref()}
              className="rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              {t.contacto.email}
            </a>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-black/50 px-8 py-4 font-semibold text-black transition hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              {t.contacto.whatsapp}
            </a>
          </nav>
        </section>
      </main>

      <footer className="py-8 text-center text-sm text-gray-500">
        <nav aria-label={t.footer.navAria} className="mb-3 flex flex-wrap justify-center gap-x-4 gap-y-1 md:hidden">
          {NAV_HREFS.map(({ key, href }) => (
            <a key={href} href={href} className="text-gray-400 underline-offset-2 hover:text-gray-300 hover:underline">
              {t.nav[key]}
            </a>
          ))}
        </nav>
        <p>
          © {year} {SITE.name}. {t.footer.rights}
        </p>
      </footer>
    </div>
  )
}
