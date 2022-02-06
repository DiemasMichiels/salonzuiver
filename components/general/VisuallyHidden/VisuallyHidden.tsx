import { ReactNode } from 'react'
import * as styled from './styled'

type Props = {
  children: ReactNode
}

const VisuallyHidden = ({ children }: Props): JSX.Element => (
  <styled.VisuallyHidden>{children}</styled.VisuallyHidden>
)

export default VisuallyHidden
