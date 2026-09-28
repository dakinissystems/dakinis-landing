import { getHubProductLogo } from "@dakinis/shared-brand/hub-product-logos";
import ProductBrandLogo from "./ProductBrandLogo.jsx";

const MOCK_APPS = [
  { id: "one", productId: "dakinis-one", label: "Dakinis One" },
  { id: "finanzas", productId: "lifeflow", label: "Finanzas" },
  { id: "sa", productId: "streamautomator", label: "StreamAutomator" },
  { id: "akoe", productId: "akoenet", label: "AkoeNet" },
];

function HubMock({ labels, caption }) {
  const apps = MOCK_APPS.map((app) => ({
    ...app,
    label: labels?.[app.id] || getHubProductLogo(app.productId)?.alt || app.label,
  }));

  return (
    <div className="w-full max-w-xl lg:max-w-none">
      <figure className="overflow-hidden rounded-2xl border border-white/15 bg-[#14141c] shadow-2xl shadow-black/40 ring-1 ring-white/10">
        <div className="flex items-center gap-2 border-b border-white/10 bg-[#1a1a24] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" aria-hidden />
          <span className="ml-2 truncate text-xs text-gray-500">{labels?.windowTitle || "Dakinis Hub"}</span>
        </div>
        <div className="bg-gradient-to-br from-[#12141c] via-[#0f1117] to-[#16182a] p-4 md:p-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-cyan-400/90">
            {labels?.miDia || "Mi día"}
          </p>
          <div className="mb-4 grid grid-cols-3 gap-2">
            {(labels?.widgets || ["3 citas hoy", "2 alertas", "1 factura"]).map((w) => (
              <div
                key={w}
                className="rounded-lg border border-white/10 bg-white/5 px-2 py-2 text-center text-[10px] text-gray-300 md:text-xs"
              >
                {w}
              </div>
            ))}
          </div>
          <p className="mb-3 text-xs font-medium text-gray-500">{labels?.appsTitle || "Tus productos"}</p>
          <div className="grid grid-cols-4 gap-2">
            {apps.map((app) => (
              <div
                key={app.id}
                className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-2 py-3"
              >
                <ProductBrandLogo productId={app.productId} size={48} />
                <span className="text-center text-[10px] font-semibold leading-tight text-gray-100 md:text-xs">
                  {app.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </figure>
      {caption ? <figcaption className="mt-2 text-center text-xs text-gray-500 lg:text-left">{caption}</figcaption> : null}
    </div>
  );
}

/** Hub preview with canonical product logos (not Lucide placeholders / stale screenshot). */
export default function HubHeroPreview({ labels, caption }) {
  return <HubMock labels={labels} caption={caption} />;
}
