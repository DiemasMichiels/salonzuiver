import styled from 'styled-components'
import { ContainerStyle } from '@components/general/styled'

export const Section = styled.section`
  ${ContainerStyle}

  h2 {
    padding: 40px 0 0 0;
  }

  margin-bottom: 52px;
`

export const InfoBlock = styled.div<{
  imagePosition: 'right' | 'left'
}>`
  display: flex;
  flex-direction: column-reverse;
  gap: 60px;
  padding: 48px 0;

  @media (min-width: 992px) {
    flex-direction: ${({ imagePosition }) =>
      imagePosition === 'left' ? 'row-reverse' : 'row'};
  }

  @media (min-width: 1200px) {
    gap: 120px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  @media (min-width: 992px) {
    width: 60%;
  }
`

export const ImageContainer = styled.div`
  flex-grow: 1;
  position: relative;
  align-self: center;
  width: 100%;
  max-width: 430px;
  height: 300px;

  @media not all and (min-resolution: 0.001dpcm) {
    @media {
      margin-top: -60px;
      margin-bottom: 60px;
    }
  }

  @media (min-width: 992px) {
    align-self: auto;
    width: initial;
    height: initial;
    max-width: initial;
    min-height: 240px;
    margin-top: initial;
    margin-bottom: initial;
  }
`
