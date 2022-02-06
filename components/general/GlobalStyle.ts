import { createGlobalStyle } from 'styled-components'

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

  h1, h2, h3, h4, h5, h6, p, span, a {
    margin: 0;
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
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 3.6rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.green20};

    &:hover {
      text-decoration: underline;
    }
  }
`
