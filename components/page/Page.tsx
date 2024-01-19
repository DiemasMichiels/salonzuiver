import * as styled from './styled'
import type { ReactNode } from 'react'
import type { DynamicPageDocumentDataSlicesSlice } from '@root/prismicio-types'

type Props = {
  firstSlice?: DynamicPageDocumentDataSlicesSlice
  children: ReactNode
}

const Page = ({ firstSlice, children }: Props) => {
  const isFirstBig = firstSlice && 'hero'.includes(firstSlice.slice_type)

  return <styled.Page isFirstBig={isFirstBig}>{children}</styled.Page>
}

export default Page
