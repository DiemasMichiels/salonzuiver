import { ThemeProvider } from 'styled-components'
import { DefaultSeo, NextSeo } from 'next-seo'
import { THEME } from '@constants'
import { GlobalStyle } from '@components/general/GlobalStyle'
import SEO from '@root/next-seo.config'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <NextSeo
        title={pageProps.doc.data.seoTitle}
        description={pageProps.doc.data.seoDescription}
        openGraph={{
          description: pageProps.doc.data.seoDescription,
          images: [
            {
              url: pageProps.doc.data.seoImage.url,
              alt: pageProps.doc.data.seoImage.alt,
              width: pageProps.doc.data.seoImage.dimensions.width,
              height: pageProps.doc.data.seoImage.dimensions.height,
            },
          ],
          site_name: pageProps.doc.data.seoTitle,
          title: pageProps.doc.data.seoTitle,
          type: 'website',
          url: typeof window !== 'undefined' ? window.location.href : '',
        }}
      />
      <ThemeProvider theme={THEME}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
