import { PrismicRichText } from '@prismicio/react'
import { isFilled, type RichTextField } from '@prismicio/client'
import InfoIcon from '@assets/icons/info.svg'
import * as styled from './styled'

type Props = {
  notice: RichTextField
}

const Notice = ({ notice }: Props) => {
  return isFilled.richText(notice) ? (
    <styled.Notice>
      <InfoIcon />
      <PrismicRichText field={notice} />
    </styled.Notice>
  ) : null
}

export default Notice
