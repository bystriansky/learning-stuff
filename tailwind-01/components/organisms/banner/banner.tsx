import { ReactNode } from 'react'

type Props = {
  title: ReactNode
  variant: 'small' | 'big'
}

const variantClasses = {
  small: 'text-4xl md:text-6xl py-14 md:py-20',
  big: 'text-5xl md:text-7xl py-20 md:py-28',
}

export const Banner = ({ title, variant }: Props) => (
  <div
    className={`wrapper bg-gradient-to-br banner-bg-img font-medium leading-snug from-blue-900 to-blue-800 ${
      variant === 'small' ? variantClasses['small'] : variantClasses['big']
    }`}
  >
    {title}
  </div>
)
