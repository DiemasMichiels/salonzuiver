import { ReactNode } from 'react'
import styled from 'styled-components'

export const ImageContainer = styled.div<{
  small: boolean
  children: ReactNode
}>`
  width: 100%;
  height: 100%;

  span {
    overflow: initial !important;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: ${({ theme }) => theme.colors.brown72};
    }
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url('image-pattern.svg');
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0;
    bottom: 0;
    border: 1px solid ${({ theme }) => theme.colors.brown72};
    border-top: 0;
    border-left: 0;
  }

  &[data-aos='show-box'] {
    &::before,
    &::after,
    span::before {
      transition-property: transform;
      transition-delay: 0.2s !important;
      transition-duration: 0.8s !important;
    }

    &.aos-animate {
      &::before {
        transform: translate(
          ${({ small }) => (small ? '-12px' : '-24px')},
          ${({ small }) => (small ? '-12px' : '-24px')}
        );
      }

      &::after {
        transform: translate(
          ${({ small }) => (small ? '16px' : '24px')},
          ${({ small }) => (small ? '16px' : '24px')}
        );
      }

      span {
        &::before {
          transform: translate(
            ${({ small }) => (small ? '8px' : '16px')},
            ${({ small }) => (small ? '8px' : '16px')}
          );
        }
      }
    }
  }
`
