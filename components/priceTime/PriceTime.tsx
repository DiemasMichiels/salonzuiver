import * as styled from './styled'
import type { NumberField } from '@prismicio/client'

type Props = {
  price: NumberField
  time: NumberField
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
