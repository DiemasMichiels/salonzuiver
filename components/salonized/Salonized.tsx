import { VisuallyHidden } from '@components/general/VisuallyHidden/styled'
import * as styled from './styled'

type Props = {
  isVisible?: boolean
  setHidden: () => void
}

const Salonized = ({ isVisible, setHidden }: Props) => {
  return (
    <styled.Salonized isVisible={isVisible}>
      <button onClick={() => setHidden()}>
        <VisuallyHidden>Close</VisuallyHidden>
      </button>
      <iframe
        // Company needs to hardcoded to show up
        src='https://widget.salonized.com/widget/?color=%2374a512&amp;language=nl&amp;company=pyTQfwvJPZATu5oPvG6H6uDz'
        frameBorder='0'
        // @ts-ignore
        allowtransparency='true'
        width='100%'
        height='100%'
      />
    </styled.Salonized>
  )
}

export const SalonizedVoucher = ({ isVisible, setHidden }: Props) => {
  return (
    <styled.Salonized isVisible={isVisible}>
      <button onClick={() => setHidden()}>
        <VisuallyHidden>Close</VisuallyHidden>
      </button>
      <iframe
        // Company needs to hardcoded to show up
        src='https://widget.salonized.com/widget/?color=%2374a512&amp;language=nl&amp;company=pyTQfwvJPZATu5oPvG6H6uDz&amp;voucher=true'
        frameBorder='0'
        // @ts-ignore
        allowtransparency='true'
        width='100%'
        height='100%'
      />
    </styled.Salonized>
  )
}

export default Salonized
