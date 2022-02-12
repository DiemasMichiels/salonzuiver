import { Hero, Prices, Product, Notice } from '@slices'
import { PRISMIC_SLICES } from '@utils/prismic/constants'
import Grid from '@components/grid/Grid'
import type SliceTypes from '@slices/sliceTypes'
import type { Statics } from '@utils/api/statics'

type Props = {
  slices: SliceTypes[]
  statics?: Statics
}

const Slices = ({ slices, statics }: Props) => {
  const gridSlices: SliceTypes[] = []

  const slicesMap = slices.map((slice, i) => {
    switch (slice.slice_type) {
      case PRISMIC_SLICES.HERO:
        return <Hero key={`${slice}-${i}`} slice={slice} />
      case PRISMIC_SLICES.PRICES:
        return (
          <Prices
            key={`${slice}-${i}`}
            slice={slice}
            products={statics?.products ?? null}
          />
        )
      case PRISMIC_SLICES.PRODUCT:
        return <Product key={`${slice}-${i}`} slice={slice} />
      case PRISMIC_SLICES.HOURS:
        gridSlices.push(slice)
        break
      case PRISMIC_SLICES.CONTACT:
        gridSlices.push(slice)
        break
      case PRISMIC_SLICES.ADDRESS:
        gridSlices.push(slice)
        break
      case PRISMIC_SLICES.NOTICE:
        return <Notice key={`${slice}-${i}`} slice={slice} />
      default:
        return null
    }
  })

  return (
    <>
      {gridSlices.length > 0 && <Grid slices={gridSlices} />}
      {slicesMap}
    </>
  )
}

export default Slices
