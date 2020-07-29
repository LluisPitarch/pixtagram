import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
  align-items: center;
  background: #131313;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 1000;
`

export const Link = styled(LinkRouter)`
  color: rgba(255, 255, 255, 0.8);
  align-items: center;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  &[aria-current] {
    ${fadeIn({ time: '0.5s' })};
    color: rgba(255, 255, 255, 1);
    &:after {
      content: '.';
      position: absolute;
      bottom: 0;
      font-size: 30px;
      line-height: 32px;
    }
  }
`
