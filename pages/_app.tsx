import { ThemeProvider } from 'styled-components'
import { DefaultSeo, NextSeo } from 'next-seo'
import NextApp from 'next/app'
import Head from 'next/head'
import { Document } from '@prismicio/client/types/documents'
import SEO from '@root/next-seo.config'
import Client from '@utils/prismic/client'
import THEME from '@theme/theme'
import * as styled from '@components/general/styled'
import Navigation from '@components/navigation/Navigation'
import { GlobalStyle } from '@components/general/GlobalStyle'
import { PRISMIC_TYPES } from '@utils/prismic/constants'
import { DynamicPageData } from '@customtypes/dynamic-page/types'
import type { AppContext, AppInitialProps, AppProps } from 'next/app'
import type { NavigationData } from '@customtypes/navigation/types'

type PageProps = {
  doc: Document<DynamicPageData>
  navigation: Document<NavigationData>
}

const App = ({
  Component,
  pageProps,
  router,
}: Omit<AppProps<PageProps>, 'pageProps'> & {
  pageProps: PageProps
}) => {
  const { seoTitle, seoDescription, seoImage } = pageProps.doc?.data ?? {}

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <DefaultSeo {...SEO} />
      {seoTitle && (
        <NextSeo
          title={seoTitle ?? undefined}
          description={seoDescription ?? undefined}
          openGraph={{
            description: seoDescription ?? undefined,
            images: seoImage?.url
              ? [
                  {
                    url: seoImage.url,
                    alt: seoImage.alt ?? undefined,
                    width: seoImage.dimensions?.width,
                    height: seoImage.dimensions?.height,
                  },
                ]
              : undefined,
            site_name: seoTitle ?? undefined,
            title: seoTitle ?? undefined,
            type: 'website',
            url: typeof window !== 'undefined' ? window.location.href : '',
          }}
        />
      )}
      <ThemeProvider theme={THEME}>
        <GlobalStyle />
        <styled.Background />
        {pageProps.navigation && (
          <Navigation
            isHome={router.pathname === '/'}
            navigation={pageProps.navigation}
          />
        )}
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
  const navigation = await Client().getSingle<NavigationData>(
    PRISMIC_TYPES.NAVIGATION,
    {},
  )

  return {
    ...appProps,
    pageProps: { ...appProps.pageProps, navigation },
  }
}

export default App
