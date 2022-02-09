import React from 'react'
import RichText from '@components/prismic/RichText'
import { PRISMIC_SLICES } from '@utils/prismic/constants'
import FancyImage from '@components/fancyImage/FancyImage'
import * as styled from './styled'
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

const Hero = ({ slice }: Props) => {
  const { title, description, image } = slice.primary

  return (
    <styled.Section>
      <styled.Content>
        {title && <RichText render={title} />}
        {description && <RichText render={description} />}
      </styled.Content>
      <styled.ImageContainer>
        <FancyImage image={image} />
      </styled.ImageContainer>
    </styled.Section>
  )
}

export default Hero
