import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

export const Salonized = styled.div<{
  isVisible?: boolean
  children: ReactNode
}>`
  z-index: 99;
  position: fixed;
  display: block;
  height: 744px;
  width: 488px;
  max-width: calc(100% - 44px);
  max-height: calc(100vh - 44px);
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0 0 10px;
  inset: auto 22px 22px auto;
  transition: transform 0.2s cubic-bezier(0.77, 0, 0.175, 1) 0s,
    opacity 0.2s ease 0s;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 768px) {
    left: initial;
    transform: initial;
    margin-right: ${({ theme }) => theme.sizes.sideBarWidth};
  }

  ${({ isVisible }) =>
    !isVisible &&
    css`
      pointer-events: none;
      transform: translateX(-50%) translateY(67px);
      opacity: 0;

      @media (min-width: 768px) {
        transform: translateY(67px);
      }

      iframe {
        display: none;
      }
    `}

  button {
    position: absolute;
    width: 50px;
    height: 68px;
    right: 0;
    top: 0;
    cursor: pointer;
  }

  iframe {
    border-radius: 10px;
  }
`
