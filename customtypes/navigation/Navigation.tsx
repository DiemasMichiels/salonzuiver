import Image from 'next/image'
import { useWindowScroll, useViewportSize } from '@mantine/hooks'
import { useState } from 'react'
import Link from '@components/general/Link/Link'
import FacebookIcon from '@assets/icons/facebook.svg'
import InstagramIcon from '@assets/icons/instagram.svg'
import CloseIcon from '@assets/icons/close.svg'
import * as styled from './styled'
import type { NavigationData } from '@customtypes/navigation/types'
import type { Document } from '@prismicio/client/types/documents'

const SMALL_TOP_BAR_AFTER_X_PX = 60
const MOBILE_MENU_MAX_WIDTH = 768

type Props = {
  navigation: Document<NavigationData>
  isHome?: boolean
}

const Navigation = ({ navigation, isHome = false }: Props) => {
  const { logo, socialItems, menuText, menuItems } = navigation.data

  const bodyScrollHeight =
    typeof window !== 'undefined'
      ? window.document.body.scrollHeight
      : undefined
  const [scroll] = useWindowScroll()
  const { width, height } = useViewportSize()
  const isMobile = width < MOBILE_MENU_MAX_WIDTH
  const bottomPaddingMobile = bodyScrollHeight
    ? scroll.y - (bodyScrollHeight - height) + 64
    : 0

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const MenuItems = (
    <styled.MenuItems isMenuOpen={isMenuOpen}>
      {menuItems.map((item, index) => (
        <li key={index}>
          <Link href={item.link} onClick={() => setIsMenuOpen(false)}>
            {item.title}
          </Link>
        </li>
      ))}
    </styled.MenuItems>
  )

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
      <styled.SideBar
        isMenuOpen={isMenuOpen}
        isHome={isHome}
        bottomPaddingMobile={bottomPaddingMobile <= 0 ? 0 : 40}
      >
        <styled.SocialItems isMenuOpen={isMenuOpen}>
          {socialItems.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>
                {item.social === 'facebook' && <FacebookIcon />}
                {item.social === 'instagram' && <InstagramIcon />}
              </Link>
            </li>
          ))}
        </styled.SocialItems>
        {isMobile && (
          <styled.MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <CloseIcon /> : menuText}
          </styled.MenuButton>
        )}
        {!isMobile && MenuItems}
      </styled.SideBar>
      {isMobile && MenuItems}
    </nav>
  )
}

export default Navigation
