import { PrismicRichText } from '@prismicio/react'
import InfoIcon from '@assets/icons/info.svg'
import * as styled from './styled'
import type { Content } from '@prismicio/client'

type Props = { slice: Content.NoticeSlice }

const Notice = ({ slice }: Props) => (
  <styled.NoticeSection data-aos='fade-up'>
    <div>
      <InfoIcon />
      <PrismicRichText field={slice.primary.text} />
    </div>
  </styled.NoticeSection>
)

export default Notice
