import { ReactNode } from 'react'
import styled from 'styled-components'

export const Products = styled.div<{ children: ReactNode }>`
  margin-top: 40px;
`

export const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
`
