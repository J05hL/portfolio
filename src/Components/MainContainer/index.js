/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import { css } from '@emotion/react'


const style = css `
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FAF9F6;
`

export const MainContainer = ({children}) => {
  return <div css={style}>
    {children}
  </div>
}