import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { THEME } from '../constants'
import { GlobalStyle } from '../components/general/GlobalStyle'
import PageTransition from '../components/PageTransition/PageTransition'
import SEO from '../next-seo.config'

import type { AppProps } from 'next/app'

const slideRight = {
  name: 'Slide Right',
  variants: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  },
  transition: {
    duration: 0.7,
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <ThemeProvider theme={THEME}>
        <GlobalStyle />
        <PageTransition>
          <Component {...pageProps} />
        </PageTransition>
      </ThemeProvider>
    </>
  )
}

export default MyApp
