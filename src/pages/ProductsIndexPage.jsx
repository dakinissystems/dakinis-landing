import { DAKINIS_PRODUCTS } from "@dakinis/shared-brand/products";
import CorporateShell from "../components/CorporateShell.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";
import { DAKINIS_URL_CORE } from "../config/product-urls.js";

function navigate(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export default function ProductsIndexPage() {
  const { t } = useLanguage();
  const products = DAKINIS_PRODUCTS.filter((p) => p.role === "flagship" || p.role === "product");

  return (
    <CorporateShell activeNav="productos">
      <section className="px-6 py-16 text-center md:py-20">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">{t.productos.title}</h1>
        <p className="mx-auto max-w-2xl text-gray-400">{t.productos.lead}</p>
      </section>
      <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-20 sm:grid-cols-2">
        {products.map((p) => (
          <article key={p.id} className="rounded-2xl border border-white/10 bg-[#1A1A22] p-6 text-left">
            <h2 className="mb-2 text-xl font-semibold text-cyan-400">{p.name}</h2>
            <p className="mb-4 text-sm text-gray-400">{p.summary}</p>
            <div className="flex flex-wrap gap-3">
              {p.landingPath ? (
                <button type="button" className="rounded-lg border border-gray-600 px-4 py-2 text-sm hover:bg-gray-800" onClick={() => navigate(p.landingPath)}>
                  {t.productos.more}
                </button>
              ) : null}
              {p.external ? (
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-black hover:bg-cyan-400">
                  {t.productos.open}
                </a>
              ) : (
                <a href={DAKINIS_URL_CORE} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-black hover:bg-cyan-400">
                  {t.productos.open}
                </a>
              )}
            </div>
          </article>
        ))}
      </section>
    </CorporateShell>
  );
}
