import { Link } from '../../atoms/link'
import { Logo, SignUpLink } from '../../molecules'
import { Hamburger } from '../../../icons'

export const PageHeader = () => (
  <header className="text-sm flex items-center justify-between px-5 md:px-12 py-5">
    <nav className="hidden sm:block">
      <ul className="flex gap-8">
        <li className="font-medium">
          <Link href="/">Features</Link>
        </li>
        <li className="font-medium">
          <Link href="/">Pricing & Plans</Link>
        </li>
      </ul>
    </nav>
    <Logo />
    <SignUpLink />
    <div className="sm:hidden w-8 h-8 text-white cursor-pointer">
      <Hamburger />
    </div>
  </header>
)
