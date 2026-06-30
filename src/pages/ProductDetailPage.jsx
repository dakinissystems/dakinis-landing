import { useEffect } from "react";
import { dakinisProductField } from "@dakinis/shared-brand/i18n";
import { dakinisGetProduct } from "@dakinis/shared-brand/products";
import { CORE_LOGIN_URL, CORE_TRIAL_URL } from "../config/core-links.js";
import CorporateShell from "../components/CorporateShell.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";
import { dakinisTrackEvent, DAKINIS_ANALYTICS_EVENTS } from "../utils/analytics.js";

export default function ProductDetailPage({ productId }) {
  const { locale, t } = useLanguage();
  const product = dakinisGetProduct(productId);

  useEffect(() => {
    dakinisTrackEvent(DAKINIS_ANALYTICS_EVENTS.LANDING_PRODUCT_VIEW, { productId });
  }, [productId]);

  const copy = t.productos?.detail?.[productId];

  if (!product) {
    return (
      <CorporateShell>
        <p className="px-6 py-20 text-center">{t.productos.notFound}</p>
      </CorporateShell>
    );
  }

  const ctaUrl = product.external && product.url ? product.url : CORE_TRIAL_URL;

  return (
    <CorporateShell activeNav="productos">
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <p className="mb-2 text-sm text-cyan-400">{t.productos.kicker}</p>
        <h1 className="mb-4 text-3xl font-bold">{dakinisProductField(product, "name", locale)}</h1>
        <p className="mb-6 text-gray-300 leading-relaxed">{copy?.body || product.summary}</p>
        {copy?.bullets?.length ? (
          <ul className="mb-8 list-disc space-y-2 pl-5 text-gray-400">
            {copy.bullets.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        ) : null}
        <a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black hover:bg-cyan-400"
          onClick={() => {
            if (product.id === "dakinis-one") {
              dakinisTrackEvent(DAKINIS_ANALYTICS_EVENTS.CTA_DAKINIS_ONE_CLICKED, { page: "product_detail" });
            }
          }}
        >
          {product.id === "dakinis-one" ? t.productos.enterOne : t.productos.open}
        </a>
        {product.id === "dakinis-one" ? (
          <p className="mt-4 text-sm text-gray-500">
            <a href={CORE_LOGIN_URL} className="text-cyan-400 hover:underline">
              {t.nav.login}
            </a>
          </p>
        ) : null}
      </section>
    </CorporateShell>
  );
}
