import CorporateShell from "../components/CorporateShell.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";
import { DAKINIS_CONTACT_EMAIL } from "@dakinis/shared-brand/social-links";

const SERVICE_IDS = ["web", "backend", "auto", "devops"];

export default function ServicesPage() {
  const { t } = useLanguage();
  const mailto = `mailto:${DAKINIS_CONTACT_EMAIL}?subject=${encodeURIComponent(String(t.contacto.emailSubject))}`;

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
      <section className="px-6 py-12">
        <h2 className="mb-8 text-center text-2xl font-bold">{t.proceso.title}</h2>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {t.proceso.steps.map((step, i) => (
            <article key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-cyan-300">{step.kicker}</p>
              <p className="text-sm text-gray-300">{step.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="px-6 pb-20 text-center">
        <a href={mailto} className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black hover:bg-cyan-400">
          {t.contacto.email}
        </a>
      </section>
    </CorporateShell>
  );
}
