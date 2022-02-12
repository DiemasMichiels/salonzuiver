import RichText from '@components/prismic/RichText'
import InfoIcon from '@assets/icons/info.svg'
import * as styled from './styled'
import type { PRISMIC_SLICES } from '@utils/prismic/constants'
import type { Slice, RichTextField } from '@prismicio/types'

export type NoticeSlice = Slice<
  PRISMIC_SLICES.NOTICE,
  {
    text: RichTextField
  }
>

type Props = {
  slice: NoticeSlice
}

const Notice = ({ slice }: Props) => (
  <styled.NoticeSection>
    <div>
      <InfoIcon />
      <RichText render={slice.primary.text} />
    </div>
  </styled.NoticeSection>
)

export default Notice
