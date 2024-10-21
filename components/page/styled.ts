import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

export const Page = styled.div<{ isFirstBig?: boolean; children: ReactNode }>`
  ${({ theme, isFirstBig }) =>
    !isFirstBig &&
    css`
      display: flex;
      flex-direction: column;
      min-height: calc(100vh - ${({ theme }) => theme.sizes.footerHeight});
      padding-top: 64px;
      padding-bottom: 64px;

      @media (min-width: 768px) {
        padding-top: ${theme.sizes.topBarHeight};
        padding-bottom: 0;
      }
    `}
`
