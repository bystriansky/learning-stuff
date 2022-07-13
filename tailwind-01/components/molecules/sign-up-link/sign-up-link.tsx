import NextLink from 'next/link'

export const SignUpLink = () => (
  <NextLink href="/">
    <a
      className="hidden sm:block border-2 px-7 py-2 transition-all hover:bg-white hover:text-text-dark"
      href="/"
    >
      Sing Up
    </a>
  </NextLink>
)
