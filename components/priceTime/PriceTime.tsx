import * as styled from './styled'
import type { KeyTextField } from '@prismicio/types'

type Props = {
  price: KeyTextField
  time: KeyTextField
}

const PriceTime = ({ price, time }: Props) => {
  return (
    <styled.PriceTime>
      {price && <styled.Price>{`€${price}`}</styled.Price>}
      {time && <styled.Time>{`/${time}'`}</styled.Time>}
    </styled.PriceTime>
  )
}

export default PriceTime
