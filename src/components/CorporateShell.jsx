import company from "@dakinis/shared-brand/company";
import { DAKINIS_CONTACT_EMAIL } from "@dakinis/shared-brand/social-links";
import logoGrande from "../../Logo Grande.jpeg";
import logoSimple from "../../Logo Simple.jpeg";
import { DAKINIS_URL_CORE, DAKINIS_URL_HUB } from "../config/product-urls.js";
import { useLanguage } from "../context/LanguageContext.jsx";

function navigate(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function FooterSep() {
  return (
    <span className="text-gray-600" aria-hidden>
      ·
    </span>
  );
}

function FooterNavLink({ href, children, onNavigate }) {
  const isInternal = href.startsWith("/") && !href.startsWith("//");
  if (isInternal) {
    return (
      <a
        href={href}
        className="text-gray-400 transition hover:text-cyan-300"
        onClick={(e) => {
          e.preventDefault();
          onNavigate(href);
        }}
      >
        {children}
      </a>
    );
  }
  return (
    <a href={href} className="text-gray-400 transition hover:text-cyan-300">
      {children}
    </a>
  );
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
      <footer className="border-t border-white/10 px-6 py-10 text-sm text-gray-500">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 text-center">
          <p className="font-medium text-gray-400">
            {String(t.footer.copyright).replace("{year}", String(new Date().getFullYear()))}{" "}
            {t.footer.rights}
          </p>
          <p className="max-w-xl text-xs text-gray-600">{company.tagline}</p>
          <nav
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
            aria-label={String(t.footer.navAria)}
          >
            <FooterNavLink href={t.footer.links.privacy} onNavigate={navigate}>
              {t.legal.footer.privacy}
            </FooterNavLink>
            <FooterSep />
            <FooterNavLink href={t.footer.links.notice} onNavigate={navigate}>
              {t.legal.footer.notice}
            </FooterNavLink>
            <FooterSep />
            <FooterNavLink href={t.footer.links.cookies} onNavigate={navigate}>
              {t.legal.footer.cookies}
            </FooterNavLink>
            <FooterSep />
            <a
              href={`mailto:${DAKINIS_CONTACT_EMAIL}`}
              className="text-gray-400 transition hover:text-cyan-300"
            >
              {t.legal.footer.contact}
            </a>
            <FooterSep />
            <a
              href="/#contacto"
              className="text-gray-400 transition hover:text-cyan-300"
              onClick={(e) => {
                e.preventDefault();
                const scrollContact = () =>
                  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
                const pathNow = window.location.pathname.replace(/\/$/, "") || "/";
                if (pathNow === "/") {
                  scrollContact();
                  return;
                }
                window.addEventListener("popstate", () => window.setTimeout(scrollContact, 80), {
                  once: true
                });
                navigate("/");
              }}
            >
              {t.nav.contacto}
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
