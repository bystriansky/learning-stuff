import { Link } from '../../atoms/link'
import { Logo, SignUpLink } from '../../molecules'

export const PageHeader = () => (
  <header className="text-sm flex items-center justify-between px-12 py-5">
    <nav>
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
  </header>
)
