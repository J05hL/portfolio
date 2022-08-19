/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import { css } from '@emotion/react'


const style = css `
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60%;
  max-height: 25%;
  @media(min-width: 800px) {
    width: 200px
    max-width: 40%;
    padding: 5px;
  }
`

export const ImageContainer = ({children}) => {
  return <div css={style}>
    {children}
  </div>
}