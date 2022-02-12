import styled, { css } from 'styled-components'
import { LinkHoverStyleLR, LinkHoverStyleTB } from '@components/general/styled'

export const TopBar = styled.div<{ small?: boolean }>`
  z-index: 8;
  position: fixed;
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.sizes.topBarHeight};
  top: 0;
  left: 0;
  right: ${({ theme }) => theme.sizes.sideBarWidth};
  padding: 40px;
  backdrop-filter: blur(1.6rem) opacity(0);
  transition: all 0.15s ease-in;

  ${({ small }) =>
    small &&
    css`
      height: 80px;
      padding: 20px 40px;
      backdrop-filter: blur(1.6rem) opacity(1);
    `}

  a {
    position: relative;
    width: 100%;
    height: 40px;
    background: none;
  }
`

export const SideBar = styled.div<{ isHome?: boolean }>`
  z-index: 8;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 76px;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 4rem 0;
  background-color: ${({ theme, isHome }) =>
    isHome ? 'transparent' : theme.colors.white};
`

export const SocialItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style-type: none;

  a {
    display: block;
    height: 2.8rem;
    padding: 0.2rem;

    ${LinkHoverStyleLR}
  }
`

export const MenuItems = styled.ul`
  display: flex;
  gap: 64px;
  margin: 0;
  padding: 0;
  list-style-type: none;
  writing-mode: vertical-lr;

  * + * {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 1px;
      height: 24px;
      top: -44px;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${({ theme }) => theme.colors.brown72};
    }
  }

  a {
    padding: 0.4rem 0;
    font-size: 1.6rem;
    line-height: 1.5em;
    font-weight: 400;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.green08};

    ${LinkHoverStyleTB}
  }
`
