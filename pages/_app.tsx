import { ThemeProvider } from 'styled-components'
import { DefaultSeo, NextSeo } from 'next-seo'
import { GlobalStyle } from '@components/general/GlobalStyle'
import SEO from '@root/next-seo.config'
import Client from '@utils/prismic/client'
import NextApp from 'next/app'
import Navigation from '@components/navigation/Navigation'
import THEME from '@theme/theme'

import type { NavigationData } from '@customtypes/navigation/types'
import type { AppContext, AppInitialProps, AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  const { seoTitle, seoDescription, seoImage } = pageProps.doc.data

  return (
    <>
      <DefaultSeo {...SEO} />
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        openGraph={{
          description: seoDescription,
          images: [
            {
              url: seoImage.url,
              alt: seoImage.alt,
              width: seoImage.dimensions.width,
              height: seoImage.dimensions.height,
            },
          ],
          site_name: seoTitle,
          title: seoTitle,
          type: 'website',
          url: typeof window !== 'undefined' ? window.location.href : '',
        }}
      />
      <ThemeProvider theme={THEME}>
        <GlobalStyle />
        <Navigation navigation={pageProps.navigation} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

// This will always make the pages SSR.
// If pages can be statically rendered this cannot be done here and needs to move to the dynamic pages
App.getInitialProps = async (
  appContext: AppContext,
): Promise<AppInitialProps> => {
  const appProps = await NextApp.getInitialProps(appContext)
  const navigation = await Client().getSingle<NavigationData>('navigation', {})
  return { ...appProps, pageProps: { ...appProps.pageProps, navigation } }
}

export default App
