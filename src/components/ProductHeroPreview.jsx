import { useState } from "react";
import { LANDING_HERO_SHOWCASE } from "../config/hero-showcase.js";

export default function ProductHeroPreview({ tabs, caption }) {
  const items = LANDING_HERO_SHOWCASE.map((shot) => ({
    ...shot,
    label: tabs?.[shot.id] || shot.id
  }));
  const [activeId, setActiveId] = useState(items[0]?.id || "dashboard");
  const active = items.find((item) => item.id === activeId) || items[0];

  if (!active) return null;

  return (
    <div className="w-full max-w-xl lg:max-w-none">
      <div
        className="mb-3 flex flex-wrap justify-center gap-2 lg:justify-start"
        role="tablist"
        aria-label={caption}
      >
        {items.map((item) => {
          const selected = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={selected}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition md:text-sm ${
                selected
                  ? "bg-cyan-500/20 text-cyan-200 ring-1 ring-cyan-400/50"
                  : "border border-white/15 text-gray-400 hover:border-white/30 hover:text-gray-200"
              }`}
              onClick={() => setActiveId(item.id)}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <figure
        className="overflow-hidden rounded-2xl border border-white/15 bg-[#14141c] shadow-2xl shadow-black/40 ring-1 ring-white/10"
        role="tabpanel"
        aria-label={active.label}
      >
        <div className="flex items-center gap-2 border-b border-white/10 bg-[#1a1a24] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" aria-hidden />
          <span className="ml-2 truncate text-xs text-gray-500">Dakinis One — {active.label}</span>
        </div>
        <img
          src={active.image}
          alt={active.label}
          width={active.width}
          height={active.height}
          className="block w-full bg-[#0f1117]"
          loading="eager"
          fetchPriority="high"
        />
      </figure>
      {caption ? <figcaption className="mt-2 text-center text-xs text-gray-500 lg:text-left">{caption}</figcaption> : null}
    </div>
  );
}
