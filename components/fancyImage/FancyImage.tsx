import { ImageField } from '@prismicio/types'
import Image from 'next/image'
import * as styled from './styled'

type Props = {
  image: ImageField
}

const FancyImage = ({ image }: Props) => {
  return image.url ? (
    <styled.ImageContainer>
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
