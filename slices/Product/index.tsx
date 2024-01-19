import { PrismicRichText } from '@prismicio/react'
import PriceTime from '@components/priceTime/PriceTime'
import * as styled from './styled'
import type { Content } from '@prismicio/client'

type Props = { slice: Content.ProductSlice }

const Product = ({ slice }: Props) => (
  <styled.Product>
    <styled.Title>
      <PrismicRichText field={slice.primary.title} />
      <styled.PriceList>
        {slice.items.map((item, i) => (
          <PriceTime key={i} price={item.price} time={item.time} />
        ))}
      </styled.PriceList>
    </styled.Title>
    <PrismicRichText field={slice.primary.description} />
  </styled.Product>
)

export default Product
