import RichText from '@components/prismic/RichText'
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
      <RichText render={notice} />
    </styled.Notice>
  ) : null
}

export default Notice
