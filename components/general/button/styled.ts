import styled from 'styled-components'
import { ReactNode } from 'react'
import { LinkHoverStyleLR, LinkHoverStyleRL } from '../styled'

export const Button = styled.button<{
  children: ReactNode
  className?: string
  onClick: () => void
}>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 2rem;
  line-height: 1.6em;
  text-transform: uppercase;
  transition-delay: 0s;

  ${LinkHoverStyleLR}

  &:hover {
    transition-delay: 0.25s;

    &::before {
      transition-delay: 0s;
      background-position: right;
    }
  }

  &::before {
    position: absolute;
    content: '';
    width: 40%;
    height: 12px;
    left: -8px;
    bottom: 0px;

    ${LinkHoverStyleRL}

    transition-delay: 0.25s;
  }

  span {
    z-index: 1;
    font-weight: 400;
    letter-spacing: 0.01em;
  }
`
