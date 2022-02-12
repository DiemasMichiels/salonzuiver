import { Hero, Prices, Product } from '@slices'
import { PRISMIC_SLICES } from '@utils/prismic/constants'
import type SliceTypes from '@slices/sliceTypes'
import type { Statics } from '@utils/api/statics'

type Props = {
  slices: SliceTypes[]
  statics?: Statics
}

const Slices = ({ slices, statics }: Props) => {
  return (
    <>
      {slices.map((slice, i) => {
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
          default:
            console.info('Slice not found for: ', slice.slice_type)
            return null
        }
      })}
    </>
  )
}

export default Slices
