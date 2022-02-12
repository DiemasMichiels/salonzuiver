import { PRISMIC_SLICES } from '@utils/prismic/constants'
import * as styled from './styled'
import type { ReactNode } from 'react'
import type SliceTypes from '@slices/sliceTypes'

const BIG_SLICE_TYPES = [PRISMIC_SLICES.HERO]

type Props = {
  firstSlice?: SliceTypes
  children: ReactNode
}

const Page = ({ firstSlice, children }: Props) => {
  const isFirstBig =
    firstSlice && BIG_SLICE_TYPES.includes(firstSlice.slice_type)

  return <styled.Page isFirstBig={isFirstBig}>{children}</styled.Page>
}

export default Page
