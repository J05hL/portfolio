/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const style = css`
  margin: 20px;
  border: 5px solid;
  border-color: white;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: 80%;
  background-color: #342e37;
  ${'' /* border-radius: 50px; */}
  color: #FAF9F6;
`

export const Card = ({children})=> {
  return (
    <div css={style}>
      {children}
    </div>
  )
}