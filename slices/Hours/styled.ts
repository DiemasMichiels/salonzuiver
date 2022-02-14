import styled, { css } from 'styled-components'

export const HoursSection = styled.section`
  width: 100%;
  flex-grow: 1;

  @media (min-width: 992px) {
    width: auto;
    flex-grow: 0.5;
  }

  h2 {
    margin-bottom: 16px;
  }
`

export const Table = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;

  &,
  th,
  td {
    border: 1px solid ${({ theme }) => theme.colors.brown72};
  }
`

export const TableRow = styled.tr<{ closed?: boolean }>`
  th,
  td {
    width: 50%;
    padding: 8px 16px;
  }

  ${({ theme, closed }) =>
    closed &&
    css`
      background-color: ${theme.colors.brown92};

      th {
        color: ${({ theme }) => theme.colors.brown32};
      }

      td {
        color: ${({ theme }) => theme.colors.red36};
      }
    `}
`
