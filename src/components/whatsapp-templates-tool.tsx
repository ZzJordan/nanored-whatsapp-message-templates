'use client'

import { useId, useMemo, useState } from 'react'
import Link from 'next/link'
import { Copy, Link2 } from 'lucide-react'
import type { Language } from '@/lib/translations'
import {
  MESSAGE_LANGUAGE_LABELS, PREFILL_PARAM, SECTOR_LABELS, TEMPLATE_SECTORS, TEMPLATE_TYPES, TEMPLATE_VARIABLES, TYPE_LABELS,
  fillTemplate, filterTemplates, missingVariables, templateVariables,
  type MessageLanguage, type TemplateSector, type TemplateType, type TemplateValues, type TemplateVariable,
} from '@/lib/tools/whatsapp-templates'
import { TOOL_PATHS } from '@/lib/tools/tools-content'
import { trackEvent } from '@/lib/analytics'
import { useCopy } from './use-copy'

/**
 * Plantillas de WhatsApp filtrables por sector y tipo, en español, inglés o francés, con variables rellenables.
 * Lo que escribe el usuario no sale del navegador: el paso al generador de enlaces va en el fragmento (#),
 * que el navegador no envía al servidor.
 */
const copy = {
  es: {
    sector: 'Sector',
    allSectors: 'Todos los sectores',
    type: 'Tipo de mensaje',
    allTypes: 'Todos los tipos',
    language: 'Idioma del mensaje',
    varsTitle: 'Rellena los datos (opcional)',
    varsHint: 'Se sustituyen en todas las plantillas que ves. Lo que dejes vacío queda entre llaves para que lo completes después.',
    count: (n: number) => (n === 1 ? '1 plantilla' : `${n} plantillas`),
    none: 'No hay plantillas para esta combinación. Prueba con «Todos los tipos» o con el sector «General».',
    copy: 'Copiar',
    copied: 'Copiado',
    copyError: 'No se ha podido copiar: selecciona el texto y cópialo a mano.',
    link: 'Crear enlace de WhatsApp con este mensaje',
    missing: (list: string) => `Falta por rellenar: ${list}.`,
    generalTag: 'General',
    privacy: 'Lo que escribes no sale de tu navegador.',
  },
  en: {
    sector: 'Sector',
    allSectors: 'All sectors',
    type: 'Message type',
    allTypes: 'All types',
    language: 'Message language',
    varsTitle: 'Fill in the details (optional)',
    varsHint: 'They are inserted into every template shown. Anything you leave empty stays in braces so you can complete it later.',
    count: (n: number) => (n === 1 ? '1 template' : `${n} templates`),
    none: 'There are no templates for this combination. Try «All types» or the «General» sector.',
    copy: 'Copy',
    copied: 'Copied',
    copyError: 'Could not copy: select the text and copy it by hand.',
    link: 'Create a WhatsApp link with this message',
    missing: (list: string) => `Still to fill in: ${list}.`,
    generalTag: 'General',
    privacy: 'What you type never leaves your browser.',
  },
} as const

export function WhatsAppTemplatesTool({ language }: { language: Language }) {
  const t = copy[language]
  const id = useId()
  const [sector, setSector] = useState<TemplateSector | 'todos'>('todos')
  const [type, setType] = useState<TemplateType | 'todos'>('recordatorio')
  const [lang, setLang] = useState<MessageLanguage>(language)
  const [values, setValues] = useState<TemplateValues>({})
  const { copied, copy: copyText } = useCopy()

  const list = useMemo(() => filterTemplates(sector, type), [sector, type])
  const vars = useMemo(() => {
    const used = new Set<TemplateVariable>()
    for (const tp of list) for (const v of templateVariables(tp.text[lang])) used.add(v)
    return (Object.keys(TEMPLATE_VARIABLES) as TemplateVariable[]).filter((v) => used.has(v))
  }, [list, lang])

  const generator = TOOL_PATHS['enlace-whatsapp'][language]
  const token = (v: TemplateVariable) => `{${TEMPLATE_VARIABLES[v].token[lang]}}`
  const filter = (fn: () => void) => { fn(); trackEvent('tool_action', { tool: 'plantillas_whatsapp', action: 'filter' }) }

  return (
    <div className="tool-panel">
      <form className="grid gap-5" onSubmit={(e) => e.preventDefault()} noValidate>
        <div className="grid gap-5 sm:grid-cols-3">
          <div>
            <label className="lead-label" htmlFor={`${id}-sector`}>{t.sector}</label>
            <select id={`${id}-sector`} className="lead-input" value={sector} onChange={(e) => filter(() => setSector(e.target.value as TemplateSector | 'todos'))}>
              <option value="todos">{t.allSectors}</option>
              {TEMPLATE_SECTORS.map((s) => <option key={s} value={s}>{SECTOR_LABELS[s][language]}</option>)}
            </select>
          </div>
          <div>
            <label className="lead-label" htmlFor={`${id}-type`}>{t.type}</label>
            <select id={`${id}-type`} className="lead-input" value={type} onChange={(e) => filter(() => setType(e.target.value as TemplateType | 'todos'))}>
              <option value="todos">{t.allTypes}</option>
              {TEMPLATE_TYPES.map((s) => <option key={s} value={s}>{TYPE_LABELS[s][language]}</option>)}
            </select>
          </div>
          <div>
            <label className="lead-label" htmlFor={`${id}-lang`}>{t.language}</label>
            <select id={`${id}-lang`} className="lead-input" value={lang} onChange={(e) => filter(() => setLang(e.target.value as MessageLanguage))}>
              {(['es', 'en', 'fr'] as const).map((l) => <option key={l} value={l}>{MESSAGE_LANGUAGE_LABELS[l][language]}</option>)}
            </select>
          </div>
        </div>

        {vars.length ? (
          <fieldset>
            <legend className="tool-subtitle">{t.varsTitle}</legend>
            <p className="tool-hint mb-4">{t.varsHint}</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {vars.map((v) => (
                <div key={v}>
                  <label className="lead-label" htmlFor={`${id}-var-${v}`}>{TEMPLATE_VARIABLES[v].label[language]} <span className="font-mono font-normal">{token(v)}</span></label>
                  <input
                    id={`${id}-var-${v}`} className="lead-input" type="text" autoComplete="off" maxLength={120}
                    value={values[v] ?? ''} placeholder={`${language === 'es' ? 'p. ej.' : 'e.g.'} ${TEMPLATE_VARIABLES[v].example[language]}`}
                    onChange={(e) => setValues((p) => ({ ...p, [v]: e.target.value }))}
                  />
                </div>
              ))}
            </div>
          </fieldset>
        ) : null}
        <p className="tool-hint">{t.privacy}</p>
      </form>

      <section className="tool-result" aria-labelledby={`${id}-count`}>
        <h3 id={`${id}-count`} className="tool-subtitle" role="status">{list.length ? t.count(list.length) : t.none}</h3>
        <ul className="tool-templates">
          {list.map((tp) => {
            const text = fillTemplate(tp.text[lang], values, lang)
            const missing = missingVariables(tp.text[lang], values)
            const status = copied === tp.id ? t.copied : copied === `${tp.id}:error` ? t.copyError : ''
            return (
              <li key={tp.id} className="tool-template">
                <p className="tool-template-tag">{tp.sector === 'general' ? t.generalTag : SECTOR_LABELS[tp.sector][language]} · {TYPE_LABELS[tp.type][language]}</p>
                <p className="tool-template-text" lang={lang}>{text}</p>
                {missing.length ? <p className="tool-hint">{t.missing(missing.map(token).join(', '))}</p> : null}
                <div className="flex flex-wrap gap-3 mt-4">
                  <button type="button" className="tool-button" onClick={() => { copyText(tp.id, text); trackEvent('tool_action', { tool: 'plantillas_whatsapp', action: 'copy_template' }) }}>
                    <Copy className="w-4 h-4" aria-hidden="true" />{t.copy}<span className="sr-only">: {TYPE_LABELS[tp.type][language]}</span>
                  </button>
                  <Link
                    className="tool-button" href={`${generator}#${PREFILL_PARAM[language]}=${encodeURIComponent(text)}`}
                    onClick={() => trackEvent('tool_action', { tool: 'plantillas_whatsapp', action: 'open_generator' })}
                  >
                    <Link2 className="w-4 h-4" aria-hidden="true" />{t.link}
                  </Link>
                </div>
                <p className="tool-status" role="status">{status}</p>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
