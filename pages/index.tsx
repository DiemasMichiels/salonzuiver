import { HOMEPAGE_UID, PRISMIC_TYPES } from '@utils/prismic/constants'
import { Client } from '@utils/prismic/client'
import Slices from '@components/slices/Slices'
import type { Document } from '@prismicio/client/types/documents'
import type { GetStaticProps, NextPage } from 'next'
import type { DynamicPageData } from '@customtypes/dynamic-page/types'

type Props = {
  doc: Document<DynamicPageData>
}

const Home: NextPage<Props> = ({ doc }) => {
  return <Slices slices={doc.data.slices} />
}

export const getStaticProps: GetStaticProps = async () => {
  const doc = await Client().getByUID<DynamicPageData>(
    PRISMIC_TYPES.DYNAMIC_PAGE,
    HOMEPAGE_UID,
    {},
  )

  return {
    props: {
      doc,
    },
    revalidate: 60,
  }
}

export default Home
