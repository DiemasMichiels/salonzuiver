import styled from 'styled-components'
import { LinkHoverStyleTB } from '@components/general/styled'

export const TopBar = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.sizes.topBarHeight};
  top: 0;
  left: 0;
  padding: 4rem;
  right: ${({ theme }) => theme.sizes.sideBarWidth};

  /* TODO: On scroll this needs to shrink and blur */
  /* backdrop-filter: blur(1.6rem); */

  a {
    background: none;
  }
`

export const SideBar = styled.div<{ isHome?: boolean }>`
  position: absolute;
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

    ${LinkHoverStyleTB}
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
    ${LinkHoverStyleTB}
  }
`
