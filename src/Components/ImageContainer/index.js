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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  @media(min-width: 800px) {
    min-width: 40vh;
    min-height: 40vh;
  }
`

const wide = css `
  padding: 10px;
  align-items: center;
  width: 95%;
  max-height: 25%;
`

const small = css `
  display: flex;
  align-items: center;
  justify-content: center;
`

//bigImage ? bigImage : smallImage

export const ImageContainer = ({banner, children, tiny}) => {
  return <div css={banner ? wide : tiny ? small : normal}>
    {children}
  </div>
}