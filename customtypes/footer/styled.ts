import styled from 'styled-components'

export const Footer = styled.footer<{ isHome?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 40px;
  padding: 4px;
  background-color: ${({ theme, isHome }) =>
    isHome ? 'transparent' : theme.colors.brown92};

  p {
    font-weight: 300;
    font-size: 1.3rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.colors.brown32};
  }
`
