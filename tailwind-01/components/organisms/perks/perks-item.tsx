import { ReactNode } from 'react'

type Props = {
  title: ReactNode
  desc: ReactNode
}

export const PerksItem = ({ title, desc }: Props) => (
  <article className="md:grid grid-cols-350px items-center gap-2">
    <h3 className="mb-5 md:mb-0 text-5xl font-medium">{title}</h3>
    <p className="text-text-dark">{desc}</p>
  </article>
)
