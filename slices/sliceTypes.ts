import { Slice } from '@prismicio/types'
import { PRISMIC_SLICES } from '@utils/prismic/constants'
import { HeroSlice } from './Hero'

type SliceTypes = HeroSlice | Slice<keyof PRISMIC_SLICES, any>

export default SliceTypes
