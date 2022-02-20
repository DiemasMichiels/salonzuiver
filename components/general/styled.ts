import styled, { css } from 'styled-components'
import { fadeIn } from './keyframes'

export const ContainerStyle = css`
  width: 100%;
  padding-right: 16px;
  padding-left: 16px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
    padding-right: calc(16px + ${({ theme }) => theme.sizes.sideBarWidth});
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1170px;
  }
`

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
    background-color: ${({ theme }) => theme.colors.brown96};
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
  background-size: 205%;
  transition: 0.25s ease-in-out;

  &:hover {
    background-position: left;
  }
`

export const LinkHoverStyleRL = css`
  background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.green48p32} 50%,
      transparent 50%
    )
    left;
  background-size: 205%;
  transition: 0.25s ease-in-out;

  &:hover {
    background-position: right;
  }
`

export const LinkHoverStyleTB = css`
  background: linear-gradient(
      to top,
      transparent 50%,
      ${({ theme }) => theme.colors.green48p32} 50%
    )
    bottom;
  background-size: 100% 205%;
  transition: 0.25s ease-in-out;

  &:hover {
    text-decoration: none;
    background-position: top;
  }
`
