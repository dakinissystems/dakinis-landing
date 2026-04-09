import { SiteHeader } from './components/SiteHeader'
import { ProjectCard } from './components/ProjectCard'
import { CONTACT, NAV_LINKS, PROJECTS, SERVICES, SITE } from './config/site'

function mailtoHref() {
  const q = new URLSearchParams({ subject: CONTACT.emailSubject })
  return `mailto:${CONTACT.email}?${q.toString()}`
}

export default function LandingPage() {
  const year = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">
      <SiteHeader />

      <main>
        <section className="px-6 py-20 text-center md:py-24" aria-labelledby="hero-heading">
          <h1 id="hero-heading" className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Desarrollo de software
            <span className="block text-cyan-400">a medida para tu negocio</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-gray-400 md:text-lg">
            En {SITE.name} creamos soluciones digitales personalizadas: aplicaciones web, backend,
            automatizaciones e infraestructura para ayudarte a crecer con tecnologia estable y escalable.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contacto"
              className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              Empezar ahora
            </a>
            <a
              href="#servicios"
              className="rounded-xl border border-gray-600 px-6 py-3 transition hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              Ver servicios
            </a>
          </div>
        </section>

        <section id="servicios" className="bg-[#111117] px-6 py-20" aria-labelledby="servicios-heading">
          <h2 id="servicios-heading" className="mb-12 text-center text-3xl font-bold">
            Servicios principales
          </h2>

          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((item) => (
              <article key={item.id} className="rounded-2xl bg-[#1A1A22] p-6 text-center">
                <h3 className="mb-2 text-lg font-semibold text-cyan-400">{item.name}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="proceso" className="px-6 py-20" aria-labelledby="proceso-heading">
          <h2 id="proceso-heading" className="mb-12 text-center text-3xl font-bold">
            Como trabajamos
          </h2>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-cyan-300">01 Descubrimiento</p>
              <p className="text-sm text-gray-300">Entendemos tu negocio, objetivos y prioridades tecnicas.</p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-cyan-300">02 Construccion</p>
              <p className="text-sm text-gray-300">Desarrollamos por sprints con entregables y feedback continuo.</p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-cyan-300">03 Escalado</p>
              <p className="text-sm text-gray-300">Optimizamos rendimiento, seguridad y evolucion del producto.</p>
            </article>
          </div>
        </section>

        <section id="trabajos" className="bg-[#111117] px-6 py-20" aria-labelledby="trabajos-heading">
          <h2 id="trabajos-heading" className="mb-12 text-center text-3xl font-bold">
            Trabajos realizados
          </h2>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section id="contacto" className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-20 text-center">
          <h2 className="mb-3 text-3xl font-bold text-black">Hablemos de tu proyecto</h2>
          <p className="mx-auto mb-6 max-w-2xl text-sm text-black/85">
            Cuentanos que necesitas y te proponemos una solucion tecnica, tiempos y roadmap de desarrollo.
          </p>

          <nav aria-label="Contacto" className="flex flex-wrap justify-center gap-3">
            <a
              href={mailtoHref()}
              className="rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Escribir por email
            </a>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-black/50 px-8 py-4 font-semibold text-black transition hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Contactar por WhatsApp
            </a>
          </nav>
        </section>
      </main>

      <footer className="py-8 text-center text-sm text-gray-500">
        <nav aria-label="Pie de página" className="mb-3 flex flex-wrap justify-center gap-x-4 gap-y-1 md:hidden">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="text-gray-400 underline-offset-2 hover:text-gray-300 hover:underline">
              {label}
            </a>
          ))}
        </nav>
        <p>© {year} {SITE.name}. All rights reserved.</p>
      </footer>
    </div>
  )
}
