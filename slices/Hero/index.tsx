import React from 'react'
import RichText from '@components/prismic/RichText'
import { PRISMIC_SLICES } from '@utils/prismic/constants'

import type {
  ImageField,
  KeyTextField,
  RichTextField,
  Slice,
} from '@prismicio/types'
export type HeroSlice = Slice<
  PRISMIC_SLICES.HERO,
  {
    title: RichTextField
    description: RichTextField
    image: ImageField
    cta: KeyTextField
  }
>

type Props = {
  slice: HeroSlice
}

const Hero = ({ slice }: Props) => (
  <section>
    {slice.primary.title && <RichText render={slice.primary.title} />}
    {slice.primary.description && (
      <RichText render={slice.primary.description} />
    )}
  </section>
)

export default Hero
