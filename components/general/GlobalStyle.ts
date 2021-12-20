import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
  *, ::after, ::before {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    color: #663600;
    font-family: "Oswald", sans-serif;
    font-size: 62.5%;
    overflow-x: hidden;
  }

  &::selection {
    color: #ffffff;
    text-shadow: none;
    background: #663600;
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
