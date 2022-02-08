import styled from 'styled-components'
import { fadeIn } from './keyframes'

export const Background = styled.div`
  z-index: -1;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url('/background.png');
  background-size: cover;
  background-position: center;
  animation: ${fadeIn} 1s;

  &::after {
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.brown92};
    mix-blend-mode: hard-light;
  }
`
