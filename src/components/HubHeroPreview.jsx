import { useState } from "react";
import { HUB_SHOWCASE_IMAGE } from "../config/hub-showcase.js";

const MOCK_APPS = [
  { id: "one", label: "Dakinis One", accent: "from-cyan-500/30 to-cyan-600/10" },
  { id: "finanzas", label: "Finanzas", accent: "from-emerald-500/25 to-emerald-600/10" },
  { id: "sa", label: "StreamAutomator", accent: "from-purple-500/25 to-purple-600/10" },
  { id: "akoe", label: "AkoeNet", accent: "from-rose-500/25 to-rose-600/10" }
];

function HubMock({ labels, caption }) {
  const apps = MOCK_APPS.map((app) => ({
    ...app,
    label: labels?.[app.id] || app.label
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
          <p className="mb-2 text-xs font-medium text-gray-500">{labels?.appsTitle || "Tus productos"}</p>
          <div className="grid grid-cols-2 gap-2">
            {apps.map((app) => (
              <div
                key={app.id}
                className={`rounded-xl border border-white/10 bg-gradient-to-br ${app.accent} px-3 py-4 text-center text-xs font-semibold text-gray-100`}
              >
                {app.label}
              </div>
            ))}
          </div>
        </div>
      </figure>
      {caption ? <figcaption className="mt-2 text-center text-xs text-gray-500 lg:text-left">{caption}</figcaption> : null}
    </div>
  );
}

export default function HubHeroPreview({ labels, caption }) {
  const [useImage, setUseImage] = useState(true);
  const [loaded, setLoaded] = useState(false);

  if (useImage) {
    return (
      <div className="w-full max-w-xl lg:max-w-none">
        <figure className="overflow-hidden rounded-2xl border border-white/15 bg-[#14141c] shadow-2xl shadow-black/40 ring-1 ring-white/10">
          <div className="flex items-center gap-2 border-b border-white/10 bg-[#1a1a24] px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" aria-hidden />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" aria-hidden />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" aria-hidden />
            <span className="ml-2 truncate text-xs text-gray-500">{labels?.windowTitle || "Dakinis Hub"}</span>
          </div>
          <img
            src={HUB_SHOWCASE_IMAGE}
            alt={labels?.alt || "Dakinis Hub"}
            width={1280}
            height={800}
            className={`block w-full bg-[#0f1117] ${loaded ? "opacity-100" : "opacity-0"}`}
            loading="eager"
            fetchPriority="high"
            onLoad={() => setLoaded(true)}
            onError={() => setUseImage(false)}
          />
          {!loaded ? (
            <div className="flex min-h-[240px] items-center justify-center bg-[#0f1117] text-xs text-gray-600">
              …
            </div>
          ) : null}
        </figure>
        {caption ? <figcaption className="mt-2 text-center text-xs text-gray-500 lg:text-left">{caption}</figcaption> : null}
      </div>
    );
  }

  return <HubMock labels={labels} caption={caption} />;
}
