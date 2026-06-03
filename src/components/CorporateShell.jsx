import logoGrande from "../../Logo Grande.jpeg";
import logoSimple from "../../Logo Simple.jpeg";
import { DAKINIS_URL_CORE, DAKINIS_URL_HUB } from "../config/product-urls.js";
import { useLanguage } from "../context/LanguageContext.jsx";

function navigate(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export default function CorporateShell({ children, activeNav = "" }) {
  const { locale, setLocale, t } = useLanguage();

  const navClass = (id) =>
    activeNav === id ? "text-cyan-300 font-semibold" : "transition hover:text-cyan-300";

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0B0B0F]/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
          <a href="/" className="flex items-center gap-3" onClick={(e) => { e.preventDefault(); navigate("/"); }} aria-label={String(t.brand.homeAria)}>
            <img src={logoGrande} alt="Dakinis Systems" width={220} height={60} className="hidden h-12 w-auto rounded-lg border border-white/15 bg-white/5 object-contain p-1 md:block" />
            <img src={logoSimple} alt="" width={44} height={44} className="h-11 w-11 rounded-xl border border-cyan-300/40 bg-cyan-400/10 object-contain p-1 md:hidden" />
            <span className="text-sm font-semibold text-gray-100 md:hidden">Dakinis Systems</span>
          </a>
          <div className="flex items-center gap-3 md:gap-5">
            <nav aria-label={String(t.nav.label)} className="hidden items-center gap-5 text-sm text-gray-300 md:flex">
              <a href="/" className={navClass("home")} onClick={(e) => { e.preventDefault(); navigate("/"); }}>{t.nav.empresa}</a>
              <a href="/productos" className={navClass("productos")} onClick={(e) => { e.preventDefault(); navigate("/productos"); }}>{t.nav.productos}</a>
              <a href="/servicios" className={navClass("servicios")} onClick={(e) => { e.preventDefault(); navigate("/servicios"); }}>{t.nav.servicios}</a>
              <a href="/#casos" className={navClass("casos")}>{t.nav.casos}</a>
              <a href="/#contacto" className={navClass("contacto")}>{t.nav.contacto}</a>
            </nav>
            <a href={DAKINIS_URL_HUB} className="hidden rounded-lg border border-cyan-500/40 px-3 py-1.5 text-sm font-semibold text-cyan-200 hover:bg-cyan-500/10 md:inline-block">
              {t.nav.hub}
            </a>
            <a href={`${DAKINIS_URL_CORE.replace(/\/$/, "")}/login`} className="rounded-lg bg-cyan-500 px-3 py-1.5 text-sm font-semibold text-black hover:bg-cyan-400">
              {t.nav.login}
            </a>
            <div className="flex shrink-0 items-center rounded-lg border border-white/15 bg-white/5 p-0.5" role="group" aria-label={String(t.lang.switchLabel)}>
              <button type="button" className={`rounded-md px-2 py-1 text-xs font-semibold ${locale === "es" ? "bg-cyan-500/25 text-cyan-200" : "text-gray-400"}`} onClick={() => setLocale("es")}>{t.lang.es}</button>
              <button type="button" className={`rounded-md px-2 py-1 text-xs font-semibold ${locale === "en" ? "bg-cyan-500/25 text-cyan-200" : "text-gray-400"}`} onClick={() => setLocale("en")}>{t.lang.en}</button>
            </div>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        <p>{t.footer.rights}</p>
      </footer>
    </div>
  );
}
