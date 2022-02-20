import { useScrollIntoView } from '@mantine/hooks'
import { useEffect } from 'react'
import Button from '@components/general/button/Button'
import RichText from '@components/prismic/RichText'
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

  const { scrollIntoView, targetRef } = useScrollIntoView({
    offset: 100,
  })

  useEffect(() => {
    const scrollToElement = document.getElementById('cta')

    if (scrollToElement) {
      targetRef.current = scrollToElement
    }
  }, [targetRef])

  return (
    <styled.Section>
      <styled.Content>
        {title && <RichText render={title} />}
        {description && <RichText render={description} />}
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
