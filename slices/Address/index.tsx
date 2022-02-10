import RichText from '@components/prismic/RichText'
import type { Slice, RichTextField } from '@prismicio/types'
import type { PRISMIC_SLICES } from '@utils/prismic/constants'

export type AddressSlice = Slice<
  PRISMIC_SLICES.ADDRESS,
  {
    title: RichTextField
    address: RichTextField
  }
>

type Props = {
  slice: AddressSlice
}

const Address = ({ slice }: Props) => (
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

export default Address
