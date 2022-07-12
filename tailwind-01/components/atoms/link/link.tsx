import NextLink from 'next/link'
import { ReactNode } from 'react'

type Props = {
  href: string
  children: ReactNode
}
export const Link = ({ href, children }: Props) => (
  <NextLink href={href}>
    <a
      className="text-text-light transition-colors hover:text-white"
      href={href}
    >
      {children}
    </a>
  </NextLink>
)
