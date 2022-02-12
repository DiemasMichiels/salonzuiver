import RichText from '@components/prismic/RichText'
import PriceTime from '@components/priceTime/PriceTime'
import * as styled from './styled'
import type { PRISMIC_SLICES } from '@utils/prismic/constants'
import type { Slice, RichTextField, KeyTextField } from '@prismicio/types'

export type ProductSlice = Slice<
  PRISMIC_SLICES.PRODUCT,
  {
    title: RichTextField
    description: RichTextField
  },
  {
    price: KeyTextField
    time: KeyTextField
  }
>

type Props = {
  slice: ProductSlice
}

const Product = ({ slice }: Props) => (
  <styled.Product>
    <styled.Title>
      <RichText render={slice.primary.title} />
      <styled.PriceList>
        {slice.items.map((item, i) => (
          <PriceTime key={i} {...item} />
        ))}
      </styled.PriceList>
    </styled.Title>
    <RichText render={slice.primary.description} />
  </styled.Product>
)

export default Product
