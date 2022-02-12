import styled, { css } from 'styled-components'

export const Page = styled.div<{ isFirstBig?: boolean }>`
  ${({ theme, isFirstBig }) =>
    !isFirstBig &&
    css`
      margin-top: ${theme.sizes.topBarHeight};
      margin-bottom: 100px;
    `}
`
