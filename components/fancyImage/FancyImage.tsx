import Image from 'next/image'
import * as styled from './styled'
import type { ImageField } from '@prismicio/types'

type Props = {
  small?: boolean
  image: ImageField
}

const FancyImage = ({ small = false, image }: Props) => {
  return image.url ? (
    <styled.ImageContainer small={small} data-aos='show-box'>
      <Image
        src={image.url}
        alt={image.alt ?? undefined}
        layout='fill'
        objectFit='cover'
        priority
      />
    </styled.ImageContainer>
  ) : null
}

export default FancyImage
