import styled, { css } from 'styled-components'
import { fadeIn } from './keyframes'

export const Background = styled.div`
  z-index: -1;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url('/background.png');
  background-size: cover;
  background-position: center;
  animation: ${fadeIn} 1s;

  &::after {
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.brown92};
    mix-blend-mode: hard-light;
  }
`

export const LinkHoverStyleLR = css`
  background: linear-gradient(
      to left,
      transparent 50%,
      ${({ theme }) => theme.colors.green48p32} 50%
    )
    right;
  background-size: 200%;
  transition: 0.25s ease-in-out;

  &:hover {
    background-position: left;
  }
`

export const LinkHoverStyleTB = css`
  background: linear-gradient(
      to top,
      transparent 50%,
      ${({ theme }) => theme.colors.green48p32} 50%
    )
    bottom;
  background-size: 100% 200%;
  transition: 0.25s ease-in-out;

  &:hover {
    text-decoration: none;
    background-position: top;
  }
`
