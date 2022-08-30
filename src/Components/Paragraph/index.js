/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const style = css`
  padding: 10px;
  text-align: justify;
`

export const Paragraph = ({text})=> {

  return (
    <p css={style}>
      {text}
    </p>
  )

}