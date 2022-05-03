import { useScrollIntoView, useViewportSize } from '@mantine/hooks'
import { useEffect } from 'react'
import { PrismicRichText } from '@prismicio/react'
import Button from '@components/general/button/Button'
import FancyImage from '@components/fancyImage/FancyImage'
import DownCircleIcon from '@assets/icons/downCircle.svg'
import * as styled from './styled'
import type { PRISMIC_SLICES } from '@utils/prismic/constants'
import type {
  ImageField,
  KeyTextField,
  RichTextField,
  Slice,
} from '@prismicio/types'

const MOBILE_MENU_MAX_WIDTH = 768

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
  const { title, description, image, cta } = slice.primary

  const { width } = useViewportSize()
  const isMobile = width < MOBILE_MENU_MAX_WIDTH
  const { scrollIntoView, targetRef } = useScrollIntoView({
    offset: isMobile ? 40 : 100,
  })

  useEffect(() => {
    const scrollToElement = document.getElementById('cta')

    if (scrollToElement) {
      targetRef.current = scrollToElement
    }
  }, [targetRef])

  return (
    <styled.Section data-aos='fade-up'>
      <styled.Content>
        {title && <PrismicRichText field={title} />}
        {description && <PrismicRichText field={description} />}
        {cta && (
          <Button
            className='cta'
            icon={<DownCircleIcon />}
            onClick={() => scrollIntoView()}
          >
            {cta}
          </Button>
        )}
      </styled.Content>
      <styled.ImageContainer>
        <FancyImage image={image} />
      </styled.ImageContainer>
    </styled.Section>
  )
}

export default Hero
