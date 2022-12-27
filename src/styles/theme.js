import { keyframes } from 'styled-components';

const theme = {
  black: '#000000',
  white: '#FFFFFF',
  lightGrey: '#B0B0B0',
  middleGrey: '#717171',
  deepGrey: '#222222',
  hoverGrey: '#DBDBDB',
  fadeIn: keyframes`
  0% {
    opacity: 0;
  } 100% {
    opacity: 1;
  }`,
};

export default theme;
