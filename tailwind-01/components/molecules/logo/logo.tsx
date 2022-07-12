import NextLink from 'next/link'

type Props = {
  variant?: 'small' | 'large'
}

export const Logo = ({ variant = 'small' }: Props) => {
  const fontSize = variant === 'small' ? 'text-3xl' : 'text-5xl'

  return (
    <div className={`${fontSize} font-medium`}>
      <NextLink href="/">rite.</NextLink>
    </div>
  )
}
