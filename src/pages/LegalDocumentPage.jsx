import { useLanguage } from '../context/LanguageContext.jsx'

function navigate(path) {
  window.history.pushState({}, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

export default function LegalDocumentPage({ docKey }) {
  const { t } = useLanguage()
  const doc = t.legal?.[docKey]
  if (!doc) return null

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-gray-200">
      <div className="mx-auto max-w-3xl px-4 py-10 md:px-6">
        <button
          type="button"
          className="mb-6 text-sm text-cyan-400 hover:text-cyan-300"
          onClick={() => navigate('/')}
        >
          {t.legal.back}
        </button>
        <h1 className="mb-2 text-3xl font-bold text-white">{doc.title}</h1>
        <p className="mb-8 text-sm text-gray-500">{t.legal.updated}</p>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          {doc.sections?.map((section) => (
            <section key={section.h}>
              <h2 className="mb-2 text-lg font-semibold text-white">{section.h}</h2>
              <p>{section.p}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
