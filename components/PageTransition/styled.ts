import styled, { css } from 'styled-components'

export const FadeTransition = styled.div<{ show?: boolean }>`
  opacity: 0;
  /* 
  // @ts-ignore */
  animation: ${({ show }) => console.log(show) || (show ? 'fadein' : 0)} 1s;
  animation-delay: 1s;
  animation-fill-mode: forwards;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const RightAnimationPane = styled.div<{ show?: boolean }>`
  z-index: 10;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: -100vw;
  background-color: blue;

  ${({ show }) => css`
    transform: translateX(${show ? '-100%' : 0});
    transition: transform 1s ease-in;
  `}
`

export const LeftAnimationPane = styled.div<{ show?: boolean }>`
  z-index: -1;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: -100vw;
  background-color: red;
  transform: translateX(${({ show }) => (show ? '100%' : 0)});
  transition: transform 1s ease-in;
`
