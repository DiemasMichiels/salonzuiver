import Image from 'next/image'
import * as styled from './styled'
import Link from '@components/general/Link/Link'
import FacebookIcon from '@assets/icons/facebook.svg'
import InstagramIcon from '@assets/icons/instagram.svg'

import type { NavigationData } from '@customtypes/navigation/types'
import type { Document } from '@prismicio/client/types/documents'

type Props = {
  navigation: Document<NavigationData>
  isHome?: boolean
}

const Navigation = ({ navigation, isHome = false }: Props) => {
  const { logo, socialItems, menuItems } = navigation.data

  return (
    <nav>
      <styled.TopBar>
        <Link href='/'>
          {logo?.url && (
            <Image
              src={logo.url}
              alt={logo.alt ?? undefined}
              width={logo.dimensions.width}
              height={logo.dimensions.height}
            />
          )}
        </Link>
      </styled.TopBar>
      <styled.SideBar isHome={isHome}>
        <styled.SocialItems>
          {socialItems.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>
                {item.social === 'facebook' && <FacebookIcon />}
                {item.social === 'instagram' && <InstagramIcon />}
              </Link>
            </li>
          ))}
        </styled.SocialItems>
        <styled.MenuItems>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </styled.MenuItems>
      </styled.SideBar>
    </nav>
  )
}

export default Navigation
