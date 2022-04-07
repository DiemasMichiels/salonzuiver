import styled, { keyframes } from 'styled-components'

const enterFadeKeyframe = keyframes`
  0%,
  62% {
    opacity: 0;
    transform: translate3d(0, 100px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

const exitFadeKeyframe = keyframes`
  0%,
  49.99% {
    opacity: 1;
  }
  50%,
  100% {
    opacity: 0;
  }
`

const hiByeKeyframe = keyframes`
  0% {
    transform: translateX(100%);
  }
  50% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
`

export const AnimatedContainer = styled.div`
  position: absolute;
  width: 100%;

  &.entering,
  &.entered {
    animation: ${enterFadeKeyframe} 1.3s;
  }

  &.exiting {
    > * {
      animation: ${exitFadeKeyframe} 0.8s;
    }

    &::after {
      content: '';
      z-index: 5;
      position: fixed;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      background-color: ${({ theme }) => theme.colors.white};
      transform: translateX(100%);
      animation: ${hiByeKeyframe} 0.8s;
    }
  }
`
