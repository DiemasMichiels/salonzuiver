import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { useRouterScroll } from '@moxy/next-router-scroll'
import { useViewportSize } from '@mantine/hooks'
import { useRouter } from 'next/router'
import * as styled from './styled'
import type { ReactNode } from 'react'
const MOBILE_MENU_MAX_WIDTH = 768

type Props = {
  children: ReactNode
}

const PageTransition = ({ children }: Props) => {
  const router = useRouter()
  const { updateScroll } = useRouterScroll()

  const { width } = useViewportSize()
  const isMobile = width < MOBILE_MENU_MAX_WIDTH

  return (
    <SwitchTransition>
      <CSSTransition
        classNames='page'
        key={router.asPath}
        timeout={isMobile ? 0 : 300}
        onEnter={() => updateScroll()}
      >
        <styled.AnimatedContainer>{children}</styled.AnimatedContainer>
      </CSSTransition>
    </SwitchTransition>
  )
}
export default PageTransition
