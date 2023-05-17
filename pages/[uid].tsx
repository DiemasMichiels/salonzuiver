import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { PRISMIC_TYPES } from '@utils/prismic/constants'
import createClient from '@utils/prismic/client'
import { getStaticsForSlices } from '@utils/api/statics'
import Slices from '@components/slices/Slices'
import Page from '@components/page/Page'
import type { NavigationData } from '@customtypes/navigation/types'
import type { DynamicPageData } from '@customtypes/dynamic-page/types'
import type { GetStaticProps, NextPage } from 'next'
import type { Statics } from '@utils/api/statics'
import type { FooterData } from '@customtypes/footer/types'
import type { PrismicDocumentWithUID } from '@prismicio/types'

type Props = {
  doc: PrismicDocumentWithUID<DynamicPageData>
  statics: Statics
}

const DynamicPage: NextPage<Props> = ({ doc, statics }) => {
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
      {!router.isFallback && (
        <Slices slices={doc.data.slices} statics={statics} />
      )}
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async ({
  params,
  previewData,
}) => {
  const uid = typeof params?.uid === 'string' ? params.uid : ''

  let doc = null
  let navigation = null
  let footer = null
  let statics = null

  try {
    const client = createClient({ previewData })
    doc = await client.getByUID<PrismicDocumentWithUID<DynamicPageData>>(
      PRISMIC_TYPES.DYNAMIC_PAGE,
      uid,
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

    statics = await getStaticsForSlices(client, doc.data.slices)
  } catch (error) {}

  return {
    props: {
      doc,
      navigation,
      footer,
      statics,
    },
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  let docs = undefined

  try {
    const client = createClient()
    docs = await client.getAllByType(PRISMIC_TYPES.DYNAMIC_PAGE)
  } catch (error) {}

  return {
    paths: docs?.map((doc) => `/${doc.uid}`),
    fallback: true,
  }
}

export default DynamicPage
