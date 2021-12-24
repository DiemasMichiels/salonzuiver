import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
  *, ::after, ::before {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-size: 62.5%;
  }

  body {
    padding: 0;
    margin: 0;
    color: ${({ theme }) => theme.colors.brand};
    font-family: ${({ theme }) => theme.fonts.brand};
    overflow-x: hidden;
  }

  &::selection {
    color: #ffffff;
    text-shadow: none;
    background: ${({ theme }) => theme.colors.brand};
  }

  h1, h2, h3, h4, h5, h6, p, span, a {
    margin: 0;
  }

  h1 {
    margin: 2.5rem 0;
    font-size: 4rem;
    font-weight: 600;
    line-height: 4.5rem;
  }

  p {
    font-size: 1.7rem;
    line-height: 3.4rem;
  }
`
