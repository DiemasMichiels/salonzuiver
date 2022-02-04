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
    color: ${({ theme }) => theme.colors.brand};
    font-family: ${({ theme }) => theme.fonts.brand};
    background: url('/background.png');
    background-size: cover;
    background-position: center;
    overflow-x: hidden;
  }

  &::selection {
    color: #ffffff;
    text-shadow: none;
    background: ${({ theme }) => theme.colors.brand};
  }

  h1 {
    font-size: 20rem;
  }

  h1, h2, h3, h4, h5, h6, p, span, a {
    margin: 0;
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
    color: ${({ theme }) => theme.colors.brand};

    &:hover {
      text-decoration: underline;
    }
  }
`
