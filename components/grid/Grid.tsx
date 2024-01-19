import { Hours, Contact, Address } from '@slices'
import { PRISMIC_SLICES } from '@utils/prismic/constants'
import * as styled from './styled'
import type { DynamicPageDocumentDataSlicesSlice } from '@root/prismicio-types'

type Props = {
  slices: DynamicPageDocumentDataSlicesSlice[]
}

const Grid = ({ slices }: Props) => {
  return (
    <styled.Grid>
      {slices.map((slice, i) => {
        switch (slice.slice_type) {
          case PRISMIC_SLICES.HOURS:
            return <Hours key={`${slice}-${i}`} slice={slice} />
          case PRISMIC_SLICES.CONTACT:
            return <Contact key={`${slice}-${i}`} slice={slice} />
          case PRISMIC_SLICES.ADDRESS:
            return <Address key={`${slice}-${i}`} slice={slice} />
          default:
            console.info('Grid Slice not found for: ', slice.slice_type)
            return null
        }
      })}
    </styled.Grid>
  )
}

export default Grid
