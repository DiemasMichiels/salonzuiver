import Image from 'next/image'
import { useWindowScroll } from '@mantine/hooks'
import Link from '@components/general/Link/Link'
import FacebookIcon from '@assets/icons/facebook.svg'
import InstagramIcon from '@assets/icons/instagram.svg'
import * as styled from './styled'
import type { NavigationData } from '@customtypes/navigation/types'
import type { Document } from '@prismicio/client/types/documents'

const SMALL_TOP_BAR_AFTER_X_PX = 60

type Props = {
  navigation: Document<NavigationData>
  isHome?: boolean
}

const Navigation = ({ navigation, isHome = false }: Props) => {
  const { logo, socialItems, menuItems } = navigation.data

  const [scroll] = useWindowScroll()

  return (
    <nav>
      <styled.TopBar small={scroll.y > SMALL_TOP_BAR_AFTER_X_PX}>
        <Link href='/'>
          {logo?.url && (
            <Image
              src={logo.url}
              alt={logo.alt ?? undefined}
              layout='fill'
              objectFit='contain'
              objectPosition='left'
              priority
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
