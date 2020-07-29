import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px 0;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  margin-top: 5px;
  padding: 8px 4px;
  display: block;
  width: 100%;
`

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: calc(32px + 12px);
  display: block;
  width: 100%;
  text-align: center;
`

export const Title = styled.h1`
  font-size: 25px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 500;
  padding: 8px 0;
`

export const Error = styled.span`
  text-align: center;
  margin: 10px 0;
  color: #8d00ff;
  display: block;
`

export const Loader = styled.img`
  margin: 6px auto;
  display: block;
  height: 32px;
`
