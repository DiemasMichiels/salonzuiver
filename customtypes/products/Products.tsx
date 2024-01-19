import { PrismicRichText } from '@prismicio/react'
import Slices from '@components/slices/Slices'
import Notice from '@components/notice/Notice'
import * as styled from './styled'
import type { ProductsDocument } from '@root/prismicio-types'

type Props = {
  doc: ProductsDocument
}

const Products = ({ doc }: Props) => {
  return (
    <styled.Products data-aos='fade-up'>
      <PrismicRichText field={doc.data.groupTitle} />
      <styled.ProductsList>
        <Slices slices={doc.data.slices} />
      </styled.ProductsList>
      <Notice notice={doc.data.notice} />
    </styled.Products>
  )
}

export default Products
