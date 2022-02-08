import { createGlobalStyle } from 'styled-components'
import { LinkHoverStyleLR } from './styled'

export const GlobalStyle = createGlobalStyle`
  *, ::after, ::before {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
    font-size: 62.5%;
    overflow: hidden;
  }

  body {
    padding: 0;
    margin: 0;
    color: ${({ theme }) => theme.colors.green20};
    font-size: 2rem;
    font-family: ${({ theme }) => theme.fonts.brand};
    background-color: ${({ theme }) => theme.colors.brown92};
    overflow-x: hidden;
  }

  &::selection {
    color: #ffffff;
    text-shadow: none;
    background: ${({ theme }) => theme.colors.green36};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.title};
  }

  p, span, time {
    font-size: 2.4rem;
    line-height: 3.6rem;
    font-weight: 300;
  }

  a {
    padding: 0.4rem 0;
    color: ${({ theme }) => theme.colors.green20};
    font-size: 1.6rem;
    line-height: 1.5em;
    text-decoration: none;
    text-transform: uppercase;

    ${LinkHoverStyleLR}
  }
`
