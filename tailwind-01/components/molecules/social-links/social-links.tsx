import { Link } from '../../atoms/link'
import { DribbbleIcon, InstagramIcon, TwitterIcon } from '../../../icons'
import { SocialLink } from './social-link'

export const SocialLinks = () => (
  <ul className="flex gap-5">
    <SocialLink>
      <InstagramIcon />
    </SocialLink>

    <SocialLink>
      <DribbbleIcon />
    </SocialLink>

    <SocialLink>
      <TwitterIcon />
    </SocialLink>
  </ul>
)
