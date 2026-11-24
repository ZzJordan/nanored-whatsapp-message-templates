import { useEffect, useState, type ComponentType } from 'react'
import type { Language } from '@/lib/translations'
import { content, meta } from './content'

function initialLanguage(): Language {
  try {
    const q = new URLSearchParams(window.location.search).get('lang')
    if (q === 'es' || q === 'en') return q
  } catch { /* sin acceso a la URL */ }
  return typeof navigator !== 'undefined' && navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
}

export function Page({ Tool }: { Tool: ComponentType<{ language: Language }> }) {
  const [language, setLanguage] = useState<Language>(initialLanguage)
  const c = content[language]
  useEffect(() => {
    document.documentElement.lang = language
    document.title = c.metaTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', c.metaDescription)
  }, [language, c])
  const es = language === 'es'
  return (
    <div className="page">
      <div className="topbar">
        <a href={meta.site}>NanoRed Labs</a>
        <div className="lang" role="group" aria-label={es ? 'Idioma' : 'Language'}>
          <button type="button" aria-pressed={es} onClick={() => setLanguage('es')} lang="es">ES</button>
          <button type="button" aria-pressed={!es} onClick={() => setLanguage('en')} lang="en">EN</button>
        </div>
      </div>
      <main>
        <p className="eyebrow">{c.eyebrow}</p>
        <h1 className="mt-2">{c.h1}</h1>
        <p className="answer">{c.answer}</p>
        <section className="mt-10" aria-label={c.toolTitle}>
          <h2 className="mb-5">{c.toolTitle}</h2>
          <Tool language={language} />
        </section>
        <section className="mt-12 prose">
          <h2>{c.howToTitle}</h2>
          <ol>{c.howToSteps.map(([t, d]) => <li key={t}><strong>{t}.</strong> {d}</li>)}</ol>
        </section>
        {c.sections.map((s) => (
          <section key={s.title} className="mt-12 prose">
            <h2>{s.title}</h2>
            {s.paragraphs?.map((p) => <p key={p} className="mt-3">{p}</p>)}
            {s.list ? <ul>{s.list.map((i) => <li key={i}>{i}</li>)}</ul> : null}
          </section>
        ))}
        <section className="mt-12 prose">
          <h2>{c.limitsTitle}</h2>
          <ul>{c.limits.map((i) => <li key={i}>{i}</li>)}</ul>
        </section>
        <section className="mt-12 faq">
          <h2 className="mb-3">{c.faqTitle}</h2>
          {c.faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        </section>
      </main>
      <footer className="footer">
        <p>
          {es ? 'Hecho por ' : 'Made by '}<a href={meta.site}>NanoRed Labs</a>{es ? ' (Málaga). ' : ' (Málaga). '}
          {es ? 'Código abierto (MIT): ' : 'Open source (MIT): '}<a href={meta.repo}>{meta.repo.replace('https://', '')}</a>.
        </p>
        <p>{es ? 'Versión en nanoredlabs.com: ' : 'Version on nanoredlabs.com: '}<a href={meta.urls[language]}>{meta.urls[language].replace('https://', '')}</a></p>
        <p>{meta.disclaimer[language]}</p>
      </footer>
    </div>
  )
}
