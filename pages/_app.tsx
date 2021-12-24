import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { THEME } from '../constants'
import { GlobalStyle } from '../components/general/GlobalStyle'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Schoonheidssalon Zuiver</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Oswald:wght@300;400&display=swap'
          rel='stylesheet'
        />
      </Head>
      <ThemeProvider theme={THEME}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
