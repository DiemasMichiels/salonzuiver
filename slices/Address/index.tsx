import { PrismicRichText } from '@prismicio/react'
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
  <styled.AddressSection data-aos='fade-up'>
    <PrismicRichText field={slice.primary.title} />
    <address>
      <PrismicRichText field={slice.primary.address} />
    </address>
  </styled.AddressSection>
)

export default Address
