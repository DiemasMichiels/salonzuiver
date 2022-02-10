import RichText from '@components/prismic/RichText'
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
  <section>
    <span className='title'>
      {slice.primary.title ? (
        <RichText render={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </span>
  </section>
)

export default Product
