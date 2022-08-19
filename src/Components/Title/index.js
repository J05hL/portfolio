/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import { css } from '@emotion/react'


const style = css `
  text-align: center;
  font-weight: bolder;
  font-size: 20px
`

export const Title = ({children}) => {
  return <div css={style}>
    {children}
  </div>
}