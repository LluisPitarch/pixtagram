import styled, { css, keyframes } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Article = styled.article`
  margin: 30px 20px;
  min-height: 260px;
`

export const ImgContainer = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.26% 0 0 0;
  position: relative;
  width: 100%;
`

export const Img = styled.img`
  ${fadeIn({ time: '0.5s' })};
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`
export const Button = styled.button`
  padding-top: 10px;
  display: flex;
  align-items: center;
  & svg {
    margin: 0 10px;
  }
`
export const Span = styled.span`
  margin-left: 10px;
`
