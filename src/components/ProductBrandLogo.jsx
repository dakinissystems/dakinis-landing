import { getHubProductLogo } from "@dakinis/shared-brand/hub-product-logos";

/**
 * Logo de marca de producto (assets hub-logos con alpha), no iconos Lucide.
 * @param {{ productId: string; size?: number; className?: string; label?: boolean }} props
 */
export default function ProductBrandLogo({ productId, size = 64, className = "", label = false }) {
  const logo = getHubProductLogo(productId);
  if (!logo) return null;

  return (
    <span
      className={`inline-flex flex-col items-center justify-center gap-2 ${className}`.trim()}
      style={{ width: size }}
    >
      <span
        className="flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-transparent"
        style={{ width: size, height: size }}
        aria-hidden={!label}
      >
        <img
          src={logo.src}
          alt={label ? logo.alt : ""}
          width={size}
          height={size}
          loading="lazy"
          decoding="async"
          className="h-[85%] w-[85%] object-contain object-center"
        />
      </span>
      {label ? <span className="text-center text-xs font-medium text-gray-200">{logo.alt}</span> : null}
    </span>
  );
}
