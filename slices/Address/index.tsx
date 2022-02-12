import RichText from '@components/prismic/RichText'
import * as styled from './styled'
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
  <styled.AddressSection>
    <RichText render={slice.primary.title} />
    <address>
      <RichText render={slice.primary.address} />
    </address>
  </styled.AddressSection>
)

export default Address
