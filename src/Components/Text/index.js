/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import { css } from '@emotion/react'

const style = css`
  backgroundColor: red
`

export const Text = ({children})=> {

  return (
    <div css={style}>
      {children}
    </div>
  )

}