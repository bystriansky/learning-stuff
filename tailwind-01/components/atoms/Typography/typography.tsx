import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  variant?: 'h1' | 'h2' | 'div'
}

const variantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
}

export const Typography = ({ children, variant = 'div' }: Props) => {
  switch (variant) {
    case 'h1':
      return <h1 className="text-6xl font-extrabold">{children}</h1>
    case 'h2':
      return <h2>{children}</h2>
    default:
      return <div>{children}</div>
  }
}
