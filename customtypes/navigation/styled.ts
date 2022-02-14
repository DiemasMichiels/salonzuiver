import styled, { css } from 'styled-components'
import { LinkHoverStyleLR, LinkHoverStyleTB } from '@components/general/styled'

export const TopBar = styled.div<{ small?: boolean }>`
  z-index: 7;
  position: fixed;
  display: flex;
  align-items: center;
  height: 64px;
  top: 0;
  left: 0;
  right: 0;
  padding: 16px;
  backdrop-filter: blur(2rem) opacity(0);
  transition: all 0.15s ease-in;

  ${({ small }) =>
    small &&
    css`
      backdrop-filter: blur(2rem) opacity(1);
    `}

  @media (min-width: 768px) {
    right: ${({ theme }) => theme.sizes.sideBarWidth};
    padding: 40px;
    height: ${({ theme }) => theme.sizes.topBarHeight};

    ${({ small }) =>
      small &&
      css`
        height: 80px;
        padding: 20px 40px;
      `}
  }

  a {
    position: relative;
    width: 100%;
    height: 32px;
    background: none;

    @media (min-width: 768px) {
      height: 40px;
    }
  }
`

export const SideBar = styled.div<{ isMenuOpen?: boolean; isHome?: boolean }>`
  z-index: 8;
  position: fixed;
  display: flex;
  align-items: center;
  gap: 20px;
  height: 48px;
  bottom: 32px;
  left: 50%;
  padding: 0 24px;
  border-radius: 48px;
  box-shadow: ${({ isMenuOpen }) =>
    !isMenuOpen &&
    `0px 8px 16px rgba(22, 41, 0, 0.08),
    0px 4px 12px rgba(22, 41, 0, 0.08), 0px 2px 8px rgba(22, 41, 0, 0.08)`};
  transition: all 0.3s ease-in;
  transform: translateX(-50%);
  background-color: ${({ theme, isMenuOpen }) =>
    isMenuOpen ? 'transparent' : theme.colors.white};

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    gap: auto;
    width: 76px;
    height: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: auto;
    padding: 40px 0;
    border-radius: initial;
    box-shadow: initial;
    transform: initial;
    background-color: ${({ theme, isHome }) =>
      isHome ? 'transparent' : theme.colors.white};
  }
`

export const SocialItems = styled.ul<{ isMenuOpen?: boolean }>`
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style-type: none;

  @media (min-width: 768px) {
    gap: 16px;
    flex-direction: column;
  }

  svg {
    flex-shrink: 0;

    path {
      fill: ${({ theme, isMenuOpen }) =>
        isMenuOpen ? theme.colors.brown92 : theme.colors.green08};

      @media (min-width: 768px) {
        fill: ${({ theme }) => theme.colors.green08};
      }
    }
  }

  a {
    display: block;
    height: 2.8rem;
    padding: 0.2rem;

    ${LinkHoverStyleLR}
  }
`

export const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  width: 35px;
  padding: 0;
  font-size: 1.6rem;
  line-height: 1.5em;
  font-weight: 400;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.green08};

  svg {
    flex-shrink: 0;

    path {
      fill: ${({ theme }) => theme.colors.brown92};
    }
  }
`

export const MenuItems = styled.ul<{ isMenuOpen?: boolean }>`
  z-index: 7;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  transition: transform 0.3s ease-in;
  transform: translateY(${({ isMenuOpen }) => (isMenuOpen ? '0%' : '200%')});
  list-style-type: none;
  background-color: ${({ theme }) => theme.colors.green08};

  @media (min-width: 768px) {
    position: relative;
    flex-direction: initial;
    gap: 64px;
    width: initial;
    height: initial;
    top: initial;
    left: initial;
    transform: initial;
    writing-mode: vertical-lr;
    background-color: initial;
  }

  * + * {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 1px;
      height: 16px;
      top: -44px;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${({ theme }) => theme.colors.green20};

      @media (min-width: 768px) {
        height: 24px;
        background-color: ${({ theme }) => theme.colors.brown72};
      }
    }
  }

  a {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 3.2rem;
    line-height: 1.3em;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.brown92};

    background: initial;

    @media (min-width: 768px) {
      font-family: ${({ theme }) => theme.fonts.brand};
      padding: 0.4rem 0;
      font-size: 1.6rem;
      line-height: 1.5em;
      font-weight: 400;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.green08};

      ${LinkHoverStyleTB}
    }
  }
`
