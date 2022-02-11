import { ThemeProvider } from 'styled-components'
import { DefaultSeo, NextSeo } from 'next-seo'
import Head from 'next/head'
import SEO from '@root/next-seo.config'
import THEME from '@theme/theme'
import * as styled from '@components/general/styled'
import Navigation from '@components/navigation/Navigation'
import { GlobalStyle } from '@components/general/GlobalStyle'
import type { Document } from '@prismicio/client/types/documents'
import type { DynamicPageData } from '@customtypes/dynamic-page/types'
import type { AppProps } from 'next/app'
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

export default App
