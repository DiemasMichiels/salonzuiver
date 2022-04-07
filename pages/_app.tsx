import { ThemeProvider } from 'styled-components'
import { DefaultSeo, NextSeo } from 'next-seo'
import Head from 'next/head'
import { PrismicPreview } from '@prismicio/next'
import { PrismicProvider } from '@prismicio/react'
import SEO from '@root/next-seo.config'
import THEME from '@theme/theme'
import * as styled from '@components/general/styled'
import Navigation from '@customtypes/navigation/Navigation'
import { GlobalStyle } from '@components/general/GlobalStyle'
import Footer from '@customtypes/footer/Footer'
import { getActiveYears } from '@utils/replacers'
import { repositoryName } from '@utils/prismic/client'
import { linkResolver } from '@utils/prismic/routes'
import Link from '@components/general/Link/Link'
import type { PrismicDocumentWithUID } from '@prismicio/types'
import type { DynamicPageData } from '@customtypes/dynamic-page/types'
import type { AppProps } from 'next/app'
import type { NavigationData } from '@customtypes/navigation/types'
import type { FooterData } from '@customtypes/footer/types'

type PageProps = {
  doc: PrismicDocumentWithUID<DynamicPageData>
  navigation: PrismicDocumentWithUID<NavigationData>
  footer: PrismicDocumentWithUID<FooterData>
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
          description={getActiveYears(seoDescription) ?? undefined}
          openGraph={{
            description: getActiveYears(seoDescription) ?? undefined,
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
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }) => (
          <Link href={href} {...props}>
            {children}
          </Link>
        )}
      >
        <PrismicPreview repositoryName={repositoryName}>
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
            <Footer footer={pageProps.footer} />
          </ThemeProvider>
        </PrismicPreview>
      </PrismicProvider>
    </>
  )
}

export default App
