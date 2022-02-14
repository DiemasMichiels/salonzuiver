import styled from 'styled-components'
import { ContainerStyle } from '@components/general/styled'

export const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 64px;
  margin-top: 40px;

  ${ContainerStyle}

  @media (min-width: 992px) {
    justify-content: space-between;
    gap: 0;
  }
`
