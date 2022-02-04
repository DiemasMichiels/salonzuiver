import styled, { css, keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const FadeTransition = styled.div<{ show?: boolean }>`
  ${({ show }) =>
    show &&
    css`
      animation: ${fadeIn} 0.5s;
    `};
  animation-delay: 0.25s;
  animation-fill-mode: both;
`

export const RightAnimationPane = styled.div<{ show?: boolean }>`
  z-index: 10;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: -100vw;
  background-color: #f6f4ed;

  ${({ show }) => css`
    transform: translateX(${show ? '-100%' : 0});
    transition: transform 0.35s ease-in;
  `}
`

export const LeftAnimationPane = styled.div<{ show?: boolean }>`
  z-index: 1;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 100vw;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  background-color: red;
  transform: translateX(${({ show }) => (show ? '100%' : 0)});
  transition: transform 0.35s ease-in;
`
