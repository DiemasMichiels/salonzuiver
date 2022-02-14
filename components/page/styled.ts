import styled, { css } from 'styled-components'

export const Page = styled.div<{ isFirstBig?: boolean }>`
  ${({ theme, isFirstBig }) =>
    !isFirstBig &&
    css`
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      padding-top: 64px;
      padding-bottom: 64px;

      @media (min-width: 768px) {
        padding-top: ${theme.sizes.topBarHeight};
        padding-bottom: 0;
      }
    `}
`
