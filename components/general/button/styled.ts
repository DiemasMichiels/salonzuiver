import styled from 'styled-components'
import { LinkHoverStyleLR, LinkHoverStyleRL } from '../styled'

export const Button = styled.button`
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
    z-index: -1;
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
    font-weight: 400;
    letter-spacing: 0.01em;
  }
`
