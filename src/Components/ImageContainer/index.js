/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import { css } from '@emotion/react'


// const bigImage = css `
//   padding: 10px;
//   align-items: center;
//   max-width: 60%;
//   max-height: 25%;
//   @media(min-width: 800px) {
//     width: 200px
//     max-width: 40%;
//     padding: 5px;
//   }
// `
const style = css `
  padding: 10px;
  align-items: center;
  max-width: 40%;
  max-height: 25%;
  @media(min-width: 800px) {
    width: 10px
    max-width: 20%;
    padding: 5px;
  }
`

//bigImage ? bigImage : smallImage

export const ImageContainer = ({children}) => {
  return <div css={style}>
    {children}
  </div>
}