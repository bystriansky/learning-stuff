import { Link } from '../../atoms/link'
import { Logo, SocialLinks } from '../../molecules'

export const PageFooter = () => (
  <footer className="px-20 py-7 flex items-center justify-between bg-primary-dark ">
    <Logo variant="large" />
    <ul className="flex gap-8 text-xl text-text-light">
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
