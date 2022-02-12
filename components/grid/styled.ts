import styled from 'styled-components'
import { ContainerStyle } from '@components/general/styled'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 15%;
  margin-top: 40px;

  ${ContainerStyle}
`
