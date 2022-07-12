import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const HeadlineSubtitle = ({ children }: Props) => (
  <p className="text-text-dark">{children}</p>
)
