import styled, { css } from 'styled-components'

export const Page = styled.div<{ isFirstBig?: boolean }>`
  ${({ theme, isFirstBig }) =>
    !isFirstBig &&
    css`
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      padding-top: ${theme.sizes.topBarHeight};
    `}
`
