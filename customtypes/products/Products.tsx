import RichText from '@components/prismic/RichText'
import Slices from '@components/slices/Slices'
import Notice from '@components/notice/Notice'
import * as styled from './styled'
import type { ProductsData } from './types'
import type { Document } from '@prismicio/client/types/documents'

type Props = {
  doc: Document<ProductsData>
}

const Products = ({ doc }: Props) => {
  return (
    <styled.Products>
      <RichText render={doc.data.groupTitle} />
      <styled.ProductsList>
        <Slices slices={doc.data.slices} />
      </styled.ProductsList>
      <Notice notice={doc.data.notice} />
    </styled.Products>
  )
}

export default Products
