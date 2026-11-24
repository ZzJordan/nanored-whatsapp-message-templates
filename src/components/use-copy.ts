'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

/** Copia al portapapeles (con respaldo para navegadores sin Clipboard API) y recuerda qué se copió 2,5 s. */
export function useCopy() {
  const [copied, setCopied] = useState<string | null>(null)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current) }, [])
  const copy = useCallback(async (key: string, text: string) => {
    let ok = false
    try {
      await navigator.clipboard.writeText(text)
      ok = true
    } catch {
      try {
        const area = document.createElement('textarea')
        area.value = text
        area.setAttribute('readonly', '')
        area.style.position = 'fixed'
        area.style.opacity = '0'
        document.body.appendChild(area)
        area.select()
        ok = document.execCommand('copy')
        area.remove()
      } catch { ok = false }
    }
    if (timer.current) clearTimeout(timer.current)
    setCopied(ok ? key : `${key}:error`)
    timer.current = setTimeout(() => setCopied(null), 2500)
    return ok
  }, [])
  return { copied, copy }
}

/** Descarga un Blob generado en el navegador (no hay servidor de por medio). */
export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
