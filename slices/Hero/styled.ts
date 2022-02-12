import styled from 'styled-components'
import { ContainerStyle } from '@components/general/styled'

export const Section = styled.section`
  ${ContainerStyle}

  display: flex;
  align-items: center;
  gap: 100px;
  height: 100vh;
  margin-right: ${({ theme }) => theme.sizes.sideBarWidth};
  padding: 60px 0;

  @media (min-width: 1440px) {
    margin-right: ${({ theme }) => theme.sizes.sideBarWidth};
    width: auto;
    max-width: initial;
    margin-right: 12rem;
    margin-left: 12rem;
  }
`

export const Content = styled.div`
  flex: 1;

  h1,
  p {
    max-width: 600px;
  }

  .cta {
    margin-top: 80px;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  width: 40%;
  height: 100%;
  margin-right: 24px;
`
