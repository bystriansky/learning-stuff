import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Headline = ({ children }: Props) => (
  <div className="text-center mb-16">{children}</div>
)
