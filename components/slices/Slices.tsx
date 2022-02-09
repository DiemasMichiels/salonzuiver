import { Hero } from '@slices'
import SliceTypes from '@slices/sliceTypes'
import { PRISMIC_SLICES } from '@utils/prismic/constants'

type Props = {
  slices: SliceTypes[]
}

const Slices = ({ slices }: Props) => {
  return (
    <>
      {slices.map((slice, i) => {
        switch (slice.slice_type) {
          case PRISMIC_SLICES.HERO:
            return <Hero key={`${slice}-${i}`} slice={slice} />
          default:
            console.info('Slice not found for: ', slice.slice_type)
            return null
        }
      })}
    </>
  )
}

export default Slices
