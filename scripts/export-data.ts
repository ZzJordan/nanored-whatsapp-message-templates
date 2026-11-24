import fs from 'node:fs'
import { WHATSAPP_TEMPLATES, SECTOR_LABELS, TYPE_LABELS, TEMPLATE_VARIABLES, TEMPLATE_SECTORS, TEMPLATE_TYPES } from '../src/lib/tools/whatsapp-templates'

// Genera data/whatsapp-templates.json y data/whatsapp-templates.md a partir del código (única fuente de verdad).
const json = {
  count: WHATSAPP_TEMPLATES.length,
  languages: ['es', 'en', 'fr'],
  variables: Object.fromEntries(Object.entries(TEMPLATE_VARIABLES).map(([k, v]) => [k, { tokens: v.token, label: v.label, example: v.example }])),
  templates: WHATSAPP_TEMPLATES.map((t) => ({ id: t.id, sector: t.sector, sector_label: SECTOR_LABELS[t.sector], type: t.type, type_label: TYPE_LABELS[t.type], text: t.text })),
}
fs.mkdirSync('data', { recursive: true })
fs.writeFileSync('data/whatsapp-templates.json', JSON.stringify(json, null, 2) + '\n')

let md = '# WhatsApp message templates for businesses / Plantillas de mensajes de WhatsApp para negocios\n\n'
md += `${WHATSAPP_TEMPLATES.length} templates in Spanish, English and French. Variables in curly braces ({nombre}, {name}, {nom}...) are placeholders to fill in. By [NanoRed Labs](https://nanoredlabs.com) (MIT).\n\n`
for (const s of TEMPLATE_SECTORS) {
  md += `## ${SECTOR_LABELS[s].en} / ${SECTOR_LABELS[s].es}\n\n`
  for (const ty of TEMPLATE_TYPES) {
    const list = WHATSAPP_TEMPLATES.filter((t) => t.sector === s && t.type === ty)
    if (!list.length) continue
    md += `### ${TYPE_LABELS[ty].en} / ${TYPE_LABELS[ty].es}\n\n`
    for (const t of list) md += `**ES**\n> ${t.text.es}\n\n**EN**\n> ${t.text.en}\n\n**FR**\n> ${t.text.fr}\n\n`
  }
}
fs.writeFileSync('data/whatsapp-templates.md', md)
console.log('templates:', WHATSAPP_TEMPLATES.length)
