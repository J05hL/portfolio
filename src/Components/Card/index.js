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
  max-height: 25%;
  max-width: 95%;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);
  background-color: #342e37;
  color: #FAF9F6;
  @media(min-width: 800px) {
    max-width: 40%;
  } 
`

export const Card = ({children})=> {
  return (
    <div css={style}>
      {children}
    </div>
  )
}