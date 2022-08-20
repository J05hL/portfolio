/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const style = css`
  padding: 10px;
`

export const Text = ({children})=> {

  return (
    <div css={style}>
      {children}
    </div>
  )

}