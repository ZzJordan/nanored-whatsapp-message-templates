import { describe, expect, it } from 'vitest'
import { WHATSAPP_TEMPLATES, fillTemplate, filterTemplates, missingVariables, templateVariables } from '@/lib/tools/whatsapp-templates'

describe('plantillas de WhatsApp', () => {
  it('hay 63 plantillas, todas con texto en es, en y fr', () => {
    expect(WHATSAPP_TEMPLATES).toHaveLength(63)
    for (const t of WHATSAPP_TEMPLATES) for (const l of ['es', 'en', 'fr'] as const) expect(t.text[l].length).toBeGreaterThan(20)
  })
  it('los identificadores son únicos', () => {
    expect(new Set(WHATSAPP_TEMPLATES.map((t) => t.id)).size).toBe(WHATSAPP_TEMPLATES.length)
  })
  it('rellena las variables y avisa de las que faltan', () => {
    const t = filterTemplates('general', 'recordatorio')[0]
    const vars = templateVariables(t.text.es)
    expect(vars.length).toBeGreaterThan(0)
    expect(missingVariables(t.text.es, {})).toEqual(vars)
    expect(fillTemplate(t.text.es, { nombre: 'Laura' }, 'es')).toContain('Laura')
  })
})
