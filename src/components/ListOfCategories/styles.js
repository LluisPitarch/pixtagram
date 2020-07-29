import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  ${(props) =>
    props.fixed &&
    css`
       {
        ${fadeIn({ time: '0.2s', type: 'ease' })};
        background: #fff;
        border-radius: 30px;
        box-shadow: 0 0 20 rgba(0, 0, 0, 0.7);
        margin: 0 auto;
        max-width: 600px;
        padding: 10px;
        position: fixed;
        left: 0;
        right: 0;
        top: 0px;
        transform: scale(0.8);
        z-index: 1;
      }
    `}
`

export const Item = styled.li`
  padding: 0 8px;
`
