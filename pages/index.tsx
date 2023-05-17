import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { HOMEPAGE_UID, PRISMIC_TYPES } from '@utils/prismic/constants'
import createClient from '@utils/prismic/client'
import Slices from '@components/slices/Slices'
import Page from '@components/page/Page'
import type { NavigationData } from '@customtypes/navigation/types'
import type { GetStaticProps, NextPage } from 'next'
import type { DynamicPageData } from '@customtypes/dynamic-page/types'
import type { FooterData } from '@customtypes/footer/types'
import type { PrismicDocumentWithUID } from '@prismicio/types'

type Props = {
  doc: PrismicDocumentWithUID<DynamicPageData>
}

const Home: NextPage<Props> = ({ doc }) => {
  const router = useRouter()

  useEffect(() => {
    if (!doc || !doc.id) {
      router.replace('/')
    }
  }, [doc, router])

  if (!doc || !doc.id) {
    return null
  }

  return (
    <Page firstSlice={doc.data.slices[0]}>
      {!router.isFallback && <Slices slices={doc.data.slices} />}
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  let doc = null
  let navigation = null
  let footer = null

  try {
    const client = createClient({ previewData })
    doc = await client.getByUID<PrismicDocumentWithUID<DynamicPageData>>(
      PRISMIC_TYPES.DYNAMIC_PAGE,
      HOMEPAGE_UID,
      {},
    )
    navigation = await client.getSingle<PrismicDocumentWithUID<NavigationData>>(
      PRISMIC_TYPES.NAVIGATION,
      {},
    )
    footer = await client.getSingle<PrismicDocumentWithUID<FooterData>>(
      PRISMIC_TYPES.FOOTER,
      {},
    )
  } catch (error) {}

  return {
    props: {
      doc,
      navigation,
      footer,
    },
    revalidate: 60,
  }
}

export default Home
