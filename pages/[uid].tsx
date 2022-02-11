import Prismic from '@prismicio/client'
import { PRISMIC_TYPES } from '@utils/prismic/constants'
import { Client } from '@utils/prismic/client'
import { getStaticsForSlices } from '@utils/api/statics'
import type { NavigationData } from '@customtypes/navigation/types'
import type { DynamicPageData } from '@customtypes/dynamic-page/types'
import type { Document } from '@prismicio/client/types/documents'
import type { GetStaticProps, NextPage } from 'next'
import type { Statics } from '@utils/api/statics'
import type { FooterData } from '@customtypes/footer/types'

type Props = {
  doc: Document<DynamicPageData>
  statics: Statics
}

const DynamicPage: NextPage<Props> = ({ doc }) => {
  return <div>{doc.data.pageTitle}</div>
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const uid = typeof params?.uid === 'string' ? params.uid : ''

  const doc = await Client().getByUID<DynamicPageData>(
    PRISMIC_TYPES.DYNAMIC_PAGE,
    uid,
    {},
  )
  const navigation = await Client().getSingle<NavigationData>(
    PRISMIC_TYPES.NAVIGATION,
    {},
  )
  const footer = await Client().getSingle<FooterData>(PRISMIC_TYPES.FOOTER, {})

  const statics = await getStaticsForSlices(doc.data.slices)

  return {
    props: {
      doc,
      navigation,
      footer,
      statics,
    },
    revalidate: 600,
  }
}

export async function getStaticPaths() {
  const docs = await Client().query(
    Prismic.Predicates.at('document.type', PRISMIC_TYPES.DYNAMIC_PAGE),
  )

  return {
    paths: docs.results.map((doc) => `/${doc.uid}`),
    fallback: false,
  }
}

export default DynamicPage
