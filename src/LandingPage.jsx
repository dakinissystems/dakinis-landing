import logoGrande from '../Logo Grande.jpeg'
import logoSimple from '../Logo Simple.jpeg'
import logoAkoenet from '../Akoenet.png'
import logoStreamAutomator from '../StreamAutomator.png'

const services = [
  { name: 'Web Apps a Medida', desc: 'React, Next.js y paneles internos' },
  { name: 'Backend Escalable', desc: 'APIs, arquitectura modular y seguridad' },
  { name: 'Automatizaciones', desc: 'Integraciones y flujos para ahorrar tiempo' },
  { name: 'DevOps y Cloud', desc: 'Docker, despliegues y observabilidad' },
]

const projects = [
  {
    name: 'AkoeNet',
    description: 'Plataforma de comunidad con enfoque en tiempo real.',
    url: 'https://akoenet-frontend.onrender.com/',
    logo: logoAkoenet,
  },
  {
    name: 'Streamer Scheduler',
    description: 'Panel para gestion y automatizacion de contenidos.',
    url: 'https://streamautomator.com/dashboard',
    logo: logoStreamAutomator,
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0B0B0F]/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#" className="flex items-center gap-3" aria-label="Inicio Dakinis Systems">
            <img
              src={logoGrande}
              alt="Dakinis Systems"
              width={220}
              height={60}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="hidden h-12 w-auto rounded-lg border border-white/15 bg-white/5 p-1 object-contain md:block"
            />
            <img
              src={logoSimple}
              alt=""
              width={44}
              height={44}
              loading="eager"
              decoding="async"
              className="h-11 w-11 rounded-xl border border-cyan-300/40 bg-cyan-400/10 p-1 object-contain md:hidden"
            />
            <span className="text-sm font-semibold text-gray-100 md:hidden">Dakinis Systems</span>
          </a>

          <nav aria-label="Principal" className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
            <a href="#servicios" className="transition hover:text-cyan-300">
              Servicios
            </a>
            <a href="#proceso" className="transition hover:text-cyan-300">
              Proceso
            </a>
            <a href="#trabajos" className="transition hover:text-cyan-300">
              Trabajos
            </a>
            <a href="#contacto" className="transition hover:text-cyan-300">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="px-6 py-20 text-center md:py-24">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Desarrollo de software
            <span className="block text-cyan-400">a medida para tu negocio</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-gray-400 md:text-lg">
            En Dakinis Systems creamos soluciones digitales personalizadas: aplicaciones web, backend,
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

        <section id="servicios" className="bg-[#111117] px-6 py-20">
          <h2 className="mb-12 text-center text-3xl font-bold">Servicios principales</h2>

          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item) => (
              <article key={item.name} className="rounded-2xl bg-[#1A1A22] p-6 text-center">
                <h3 className="mb-2 text-lg font-semibold text-cyan-400">{item.name}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="proceso" className="px-6 py-20">
          <h2 className="mb-12 text-center text-3xl font-bold">Como trabajamos</h2>
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

        <section id="trabajos" className="bg-[#111117] px-6 py-20">
          <h2 className="mb-12 text-center text-3xl font-bold">Trabajos realizados</h2>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-2xl border border-white/10 bg-[#1A1A22] p-6 transition hover:-translate-y-0.5 hover:border-cyan-400/40"
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                  aria-label={`Abrir ${project.name}`}
                >
                  <img
                    src={project.logo}
                    alt={`Logo ${project.name}`}
                    width={56}
                    height={56}
                    loading="lazy"
                    decoding="async"
                    className="h-14 w-14 rounded-xl border border-white/15 bg-white/5 object-contain p-1"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-300">{project.name}</h3>
                    <p className="text-sm text-gray-400">{project.description}</p>
                    <p className="mt-1 text-xs text-cyan-400/90">Abrir proyecto</p>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contacto" className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-20 text-center">
          <h2 className="mb-3 text-3xl font-bold text-black">Hablemos de tu proyecto</h2>
          <p className="mx-auto mb-6 max-w-2xl text-sm text-black/85">
            Cuentanos que necesitas y te proponemos una solucion tecnica, tiempos y roadmap de desarrollo.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:contacto@dakinis-systems.com?subject=Proyecto%20a%20medida"
              className="rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Escribir por email
            </a>
            <a
              href="https://wa.me/5490000000000"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-black/50 px-8 py-4 font-semibold text-black transition hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Dakinis Systems. All rights reserved.
      </footer>
    </div>
  )
}
