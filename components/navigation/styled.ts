import styled from 'styled-components'

export const TopBar = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  height: 120px;
  top: 0;
  left: 0;
  padding: 4rem;
  right: ${({ theme }) => theme.sizes.menuWidth};

  /* TODO: On scroll this needs to shrink and blur */
  /* backdrop-filter: blur(1.6rem); */
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
  gap: 2rem;
  margin: 0;
  padding: 0;
  list-style-type: none;

  a {
    display: block;
    height: 2.4rem;
    line-height: 1;
  }
`

export const MenuItems = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`
