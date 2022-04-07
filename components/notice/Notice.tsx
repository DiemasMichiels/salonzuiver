import { PrismicRichText } from '@prismicio/react'
import InfoIcon from '@assets/icons/info.svg'
import * as styled from './styled'
import type { RichTextField } from '@prismicio/types'

type Props = {
  notice: RichTextField
}

const Notice = ({ notice }: Props) => {
  return notice.length ? (
    <styled.Notice>
      <InfoIcon />
      <PrismicRichText field={notice} />
    </styled.Notice>
  ) : null
}

export default Notice
