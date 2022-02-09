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
    font-size: 2rem;
    font-family: ${({ theme }) => theme.fonts.brand};
    color: ${({ theme }) => theme.colors.green20};
    background-color: ${({ theme }) => theme.colors.brown92};
    overflow-x: hidden;
  }

  &::selection {
    text-shadow: none;
    color: #ffffff;
    background: ${({ theme }) => theme.colors.green36};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.title};
  }

  h1 {
    margin: 0;
    font-size: 5.6rem;
    line-height: 6.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.green08};
  }

  p, span, time {
    font-size: 2rem;
    line-height: 3.2rem;
    font-weight: 300;
  }

  a {
    padding: 0 0.4rem;
    font-size: 1.6rem;
    line-height: 1.5em;
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.green20};

    ${LinkHoverStyleLR}
  }

  button {
    padding: 0 0.4rem;
    font: inherit;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.green08};
    background: none;
    border: none;
    cursor: pointer;
    outline: inherit;
  }
`
