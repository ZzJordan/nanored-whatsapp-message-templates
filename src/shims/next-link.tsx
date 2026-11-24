import type { AnchorHTMLAttributes } from 'react'

/** Sustituto mínimo de next/link: aquí no hay router, solo enlaces normales. */
export default function Link(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a {...props} />
}
