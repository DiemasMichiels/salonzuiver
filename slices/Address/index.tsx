import { PrismicRichText } from '@prismicio/react'
import * as styled from './styled'
import type { Content } from '@prismicio/client'

type Props = { slice: Content.AddressSlice }

const Address = ({ slice }: Props) => (
  <styled.AddressSection data-aos='fade-up'>
    <PrismicRichText field={slice.primary.title} />
    <address>
      <PrismicRichText field={slice.primary.address} />
    </address>
  </styled.AddressSection>
)

export default Address
