import { ReactNode } from 'react'

type Props = {
  icon: ReactNode
  title: ReactNode
  desc: ReactNode
}

export const AdvantagesItem = ({ icon, title, desc }: Props) => (
  <article className="flex flex-col gap-7 flex-1  px-6 pt-7 pb-8 bg-primary-dark border-secondary-main border-b-2">
    <div className="w-8 h-8 text-text-heading">{icon}</div>
    <h3 className="text-xl text-text-heading font-medium">{title}</h3>
    <p className="text-sm text-text-dark">{desc}</p>
  </article>
)
