export function ProjectCard({ project, openProjectLabel, openAriaLabel }) {
  const { name, description, url, logoSrc, logoWidth, logoHeight } = project

  return (
    <article className="rounded-2xl border border-white/10 bg-[#1A1A22] p-6 transition hover:-translate-y-0.5 hover:border-cyan-400/40">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
        aria-label={openAriaLabel}
      >
        <img
          src={logoSrc}
          alt=""
          role="presentation"
          width={logoWidth}
          height={logoHeight}
          loading="lazy"
          decoding="async"
          sizes="56px"
          className="h-14 w-14 shrink-0 rounded-xl border border-white/15 bg-white/5 object-contain p-1"
        />
        <div className="min-w-0 text-left">
          <h3 className="text-lg font-semibold text-cyan-300">{name}</h3>
          <p className="text-sm text-gray-400">{description}</p>
          <p className="mt-1 text-xs text-cyan-400/90">{openProjectLabel}</p>
        </div>
      </a>
    </article>
  )
}
