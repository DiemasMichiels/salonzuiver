import { useState, useEffect, ReactNode } from 'react'
import * as styled from './styled'

type Props = {
  children: ReactNode
}

const PageTransition = ({ children }: Props) => {
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState('out')
  console.log('◇─◇──◇────◇────◇─乁(ツ)ㄏ─◇────◇─────◇──◇─◇')
  console.log('transitionStage')
  console.log(transitionStage)
  console.log('◇─◇──◇────◇────◇─乁(ツ)ㄏ─◇────◇─────◇──◇─◇')
  useEffect(() => {
    setTransitionStage('show')
  }, [])

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage('out')
  }, [children, setDisplayChildren, displayChildren])

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
      <styled.FadeTransition
        key={Math.random()}
        show={transitionStage === 'show' || transitionStage === 'out'}
      >
        {displayChildren}
      </styled.FadeTransition>
    </>
  )
}

export default PageTransition
