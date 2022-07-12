import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const HeadlineTitle = ({ children }: Props) => (
  <h2 className="text-5xl font-medium mb-5">{children}</h2>
)
