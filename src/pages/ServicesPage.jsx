import logoAkoenet from "../../Akoenet.png";
import logoStreamAutomator from "../../StreamAutomator.png";
import CorporateShell from "../components/CorporateShell.jsx";
import { DAKINIS_LANDING_PROJECTS } from "../config/landing-projects.js";
import { useLanguage } from "../context/LanguageContext.jsx";
import { dakinisMailtoContact } from "../config/contact.js";

const SERVICE_IDS = ["web", "backend", "auto", "devops"];

const PROJECT_LOGOS = {
  akoenet: logoAkoenet,
  stream: logoStreamAutomator
};

export default function ServicesPage() {
  const { t } = useLanguage();
  const mailto = dakinisMailtoContact(t.contacto.consultoriaEmailSubject);

  return (
    <CorporateShell activeNav="servicios">
      <section className="px-6 py-16 text-center">
        <h1 className="mb-4 text-3xl font-bold">{t.serviciosPage.title}</h1>
        <p className="mx-auto max-w-2xl text-gray-400">{t.serviciosPage.lead}</p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICE_IDS.map((id) => {
          const item = t.services.items[id];
          return (
            <article key={id} className="rounded-2xl bg-[#1A1A22] p-6 text-center">
              <h3 className="mb-2 text-lg font-semibold text-cyan-400">{item.name}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </article>
          );
        })}
      </section>

      <section className="bg-[#0E1018] px-6 py-16 text-center">
        <h2 className="mb-6 text-3xl font-bold">{t.notFromZero.title}</h2>
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

      <section className="px-6 py-12">
        <h2 className="mb-8 text-center text-2xl font-bold">{t.proceso.title}</h2>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {t.proceso.steps.map((step) => (
            <article key={step.kicker} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-cyan-300">{step.kicker}</p>
              <p className="text-sm text-gray-300">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#111117] px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">{t.trabajos.title}</h2>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {DAKINIS_LANDING_PROJECTS.map((project) => {
            const copy = t.trabajos.projects[project.id];
            const projectLogo = PROJECT_LOGOS[project.id];
            return (
              <article key={project.id} className="rounded-2xl border border-white/10 bg-[#1A1A22] p-6">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                  <img
                    src={projectLogo}
                    alt=""
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-xl border border-white/15 object-contain p-1"
                  />
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

      <section className="px-6 pb-20 text-center">
        <h2 className="mb-4 text-2xl font-bold">{t.contacto.consultoriaTitle}</h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-400">{t.contacto.consultoriaBody}</p>
        <a href={mailto} className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black hover:bg-cyan-400">
          {t.contacto.email}
        </a>
      </section>
    </CorporateShell>
  );
}
