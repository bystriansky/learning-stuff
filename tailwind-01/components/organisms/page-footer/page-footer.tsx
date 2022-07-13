import { Link } from '../../atoms/link'
import { Logo, SocialLinks } from '../../molecules'

export const PageFooter = () => (
  <footer className="wrapper py-7 flex items-center justify-between bg-primary-dark ">
    <Logo variant="large" />
    <ul className="hidden md:flex gap-8 text:lg lg:text-xl text-text-light">
      <li className="hover:text-white">
        <Link href="/">Features</Link>
      </li>
      <li>
        <Link href="/">Solutions</Link>
      </li>
      <li>
        <Link href="/">Plans & Pricing</Link>
      </li>
    </ul>

    <SocialLinks />
  </footer>
)
