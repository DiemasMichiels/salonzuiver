import { useState, useEffect, ReactNode } from 'react'
import * as styled from './styled'

type Props = {
  children: ReactNode
}

const PageTransition = ({ children }: Props) => {
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState('out')

  useEffect(() => {
    setTransitionStage('show')
  }, [])

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage('out')
  }, [children, displayChildren])

  return (
    <>
      <styled.RightAnimationPane
        show={transitionStage === 'out'}
        onTransitionEnd={() => {
          if (transitionStage === 'out') {
            setTransitionStage('in')
          }
        }}
      />
      <styled.LeftAnimationPane
        show={transitionStage === 'in' || transitionStage === 'show'}
        onTransitionEnd={() => {
          if (transitionStage === 'in') {
            setTransitionStage('show')
            setDisplayChildren(children)
          }
        }}
      />
      <styled.FadeTransition show={transitionStage === 'show'}>
        {displayChildren}
      </styled.FadeTransition>
    </>
  )
}

export default PageTransition
