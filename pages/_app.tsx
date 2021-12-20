import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../components/general/GlobalStyle'
import { THEME } from '../constants'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={THEME}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
