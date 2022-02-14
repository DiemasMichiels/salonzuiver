import styled from 'styled-components'
import { ContainerStyle } from '@components/general/styled'

export const Section = styled.section`
  ${ContainerStyle}

  display: flex;
  align-items: center;
  gap: 100px;
  height: calc(100vh - ${({ theme }) => theme.sizes.footerHeight});
  margin-right: ${({ theme }) => theme.sizes.sideBarWidth};
  padding: 60px 15px;

  @media (min-width: 768px) {
    padding-right: 0;
  }
  @media (min-width: 1440px) {
    margin-right: ${({ theme }) => theme.sizes.sideBarWidth};
    width: auto;
    max-width: initial;
    margin-right: 120px;
    margin-left: 120px;
  }
`

export const Content = styled.div`
  flex: 1;

  h1,
  p {
    max-width: 600px;
  }

  p {
    margin-top: 24px;
  }

  .cta {
    margin-top: 80px;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  display: none;
  width: 40%;
  height: 100%;
  margin-right: 24px;

  @media (min-width: 768px) {
    display: block;
  }
`
