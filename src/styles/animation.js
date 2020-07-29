import styled, { css, keyframes } from 'styled-components'

const fadeInKeyframes = keyframes`
from {
  filter: blur(1px);
  opacity:0;
}
to {
  filter: blur(0px)
  opacity:1;
}
`
export const fadeIn = ({ time = '0.5s', type = 'ease' } = {}) => css`
  animation: ${time} ${fadeInKeyframes} ${type};
`
