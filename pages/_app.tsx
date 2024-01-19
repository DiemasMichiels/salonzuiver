import { ThemeProvider } from 'styled-components'
import { DefaultSeo, NextSeo } from 'next-seo'
import { RouterScrollProvider } from '@moxy/next-router-scroll'
import Head from 'next/head'
import { PrismicProvider } from '@prismicio/react'
import { useEffect } from 'react'
import AOS from 'aos'
import Script from 'next/script'
import { PrismicPreview } from '@prismicio/next'
import PageTransition from '@components/pageTransition/PageTransition'
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
import type { AppProps } from 'next/app'
import type {
  DynamicPageDocument,
  FooterDocument,
  NavigationDocument,
} from '@root/prismicio-types'

import 'aos/dist/aos.css'

type PageProps = {
  doc: DynamicPageDocument
  navigation: NavigationDocument
  footer: FooterDocument
}

const App = ({
  Component,
  pageProps,
  router,
}: Omit<AppProps<PageProps>, 'pageProps'> & {
  pageProps: PageProps
}) => {
  const { seoTitle, seoDescription, seoImage } = pageProps.doc?.data ?? {}

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: 'ease-out',
    })
  }, [])

  useEffect(() => {
    try {
      navigator.serviceWorker.getRegistrations().then(function (registrations) {
        for (const registration of registrations) {
          registration.unregister()
        }
      })
    } catch {}
  }, [])

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Script src='https://static-widget.salonized.com/loader.js' />
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
        <PrismicPreview repositoryName={repositoryName} />
        <RouterScrollProvider>
          <ThemeProvider theme={THEME}>
            <GlobalStyle />
            {pageProps.navigation && (
              <Navigation
                isHome={router.pathname === '/'}
                navigation={pageProps.navigation}
              />
            )}
            <PageTransition>
              <styled.Background data-aos='fade' />
              <Component {...pageProps} />
              <Footer footer={pageProps.footer} />
            </PageTransition>
          </ThemeProvider>
        </RouterScrollProvider>
      </PrismicProvider>
    </>
  )
}

export default App
