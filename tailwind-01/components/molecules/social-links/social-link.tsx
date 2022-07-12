import { Link } from '../../atoms/link'
import { DribbbleIcon, InstagramIcon, TwitterIcon } from '../../../icons'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const SocialLink = ({ children }: Props) => (
  <li className="w-7">
    <Link href="/">{children}</Link>
  </li>
)
