import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { THEME } from '../constants'
import { GlobalStyle } from '../components/general/GlobalStyle'
import SEO from '../next-seo.config'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <ThemeProvider theme={THEME}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
