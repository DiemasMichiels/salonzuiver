import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 40px;
  padding: 4px;
  background-color: ${({ theme }) => theme.colors.brown92};

  p,
  a {
    font-weight: 300;
    font-size: 1.3rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.colors.brown32};
  }
`
