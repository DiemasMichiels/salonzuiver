import RichText from '@components/prismic/RichText'
import type { PRISMIC_SLICES } from '@utils/prismic/constants'
import type {
  Slice,
  RichTextField,
  SelectField,
  RelationField,
} from '@prismicio/types'

export type PricesSlice = Slice<
  PRISMIC_SLICES.PRICES,
  {
    title: RichTextField
  },
  {
    products: RelationField
    closed: SelectField
  }
>

type Props = {
  slice: PricesSlice
}

const Prices = ({ slice }: Props) => (
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

export default Prices
