import { ReactNode } from 'react'

type Props = {
  title: ReactNode
  variant: 'small' | 'big'
}

const variantClasses = {
  small: 'text-6xl py-20',
  big: 'text-7xl py-28',
}

export const Banner = ({ title, variant }: Props) => (
  <div
    className={`px-20 bg-gradient-to-br banner-bg-img font-medium leading-snug from-blue-900 to-blue-800 ${
      variant === 'small' ? variantClasses['small'] : variantClasses['big']
    }`}
  >
    {title}
  </div>
)
