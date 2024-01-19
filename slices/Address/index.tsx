import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import * as styled from './styled'
import type { Content } from '@prismicio/client'

export type AddressSlice = SliceComponentProps<Content.AddressSlice>

const Address = ({ slice }: AddressSlice) => (
  <styled.AddressSection data-aos='fade-up'>
    <PrismicRichText field={slice.primary.title} />
    <address>
      <PrismicRichText field={slice.primary.address} />
    </address>
  </styled.AddressSection>
)

export default Address
