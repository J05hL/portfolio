/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import { css } from '@emotion/react'

const style = css`
  padding: 20px;
  text-align: justify;
`

export const Paragraph = ({text})=> {

  return (
    <p css={style}>
      {text}
    </p>
  )

}