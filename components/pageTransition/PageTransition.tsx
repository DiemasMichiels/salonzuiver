import { TransitionGroup, Transition } from 'react-transition-group'
import * as styled from './styled'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  location: string
}

const PageTransition = ({ children, location }: Props) => {
  return (
    <TransitionGroup>
      <Transition key={location} timeout={700} unmountOnExit={true}>
        {(state) => (
          <styled.AnimatedContainer className={state}>
            {children}
          </styled.AnimatedContainer>
        )}
      </Transition>
    </TransitionGroup>
  )
}
export default PageTransition
