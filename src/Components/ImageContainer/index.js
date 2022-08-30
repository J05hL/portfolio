/** @jsxImportSource @emotion/react */
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
const normal = css `
  padding: 10px;
  align-items: center;
  max-width: 40%;
  max-height: 25%;
  @media(min-width: 800px) {
    max-width: 20%;
    padding: 20px;
  }
`

const wide = css `
  padding: 10px;
  align-items: center;
  width: 95%;
  max-height: 25%;
`

const small = css `
  padding: 10px;
  align-items: center;
  width: 10%;
  max-height: 10%;
`

//bigImage ? bigImage : smallImage

export const ImageContainer = ({banner, children, tiny}) => {
  return <div css={banner ? wide : tiny ? small : normal}>
    {children}
  </div>
}