import { ReactNode } from 'react'

type Props = {
  title: ReactNode
  desc: ReactNode
}

export const PerksItem = ({ title, desc }: Props) => (
  <article className="grid grid-cols-350px items-center gap-2">
    <h3 className="leading-snug text-5xl font-medium">{title}</h3>
    <p className="text-text-dark">{desc}</p>
  </article>
)
