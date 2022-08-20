/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const style = css`
  ${'' /* background-color: red */}
`

export const Text = ({children})=> {

  return (
    <div css={style}>
      {children}
    </div>
  )

}