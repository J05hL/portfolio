/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


const style = css `
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #FAF9F6;
  @media(min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around
  } 
`

export const SubContainer = ({children}) => {
  return <div css={style}>
    {children}
  </div>
}