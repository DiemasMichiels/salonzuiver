import { HOMEPAGE_UID, PRISMIC_TYPES } from '@utils/prismic/constants'
import { Client } from '@utils/prismic/client'
import { Document } from '@prismicio/client/types/documents'

import type { GetStaticProps, NextPage } from 'next'
import type { DynamicPageData } from '@customtypes/dynamic-page/types'

type Props = {
  doc: Document<DynamicPageData>
}

const Home: NextPage<Props> = ({ doc }) => {
  return <div>{doc.data.pageTitle}</div>
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
