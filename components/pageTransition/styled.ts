import styled from 'styled-components'

export const AnimatedContainer = styled.div`
  width: 100%;

  &.page-enter,
  &.page-exit {
    &::after {
      content: '';
      z-index: 5;
      position: fixed;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      background-color: ${({ theme }) => theme.colors.white};
      transition: transform 0.3s ease-in;
    }
  }

  &.page-enter {
    &::after {
      transform: translateX(0%);
    }
  }
  &.page-exit {
    &::after {
      transform: translateX(100%);
    }
  }

  &.page-enter-active {
    &::after {
      transform: translateX(100%);
    }
  }

  &.page-exit-active {
    &::after {
      transform: translateX(0%);
    }
  }
`
