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
    padding: 5px;
  }
`

const wide = css `
  padding: 10px;
  align-items: center;
  width: 95%;
  max-height: 25%;
  @media(min-width: 800px) {
    padding: 5px;
  }
`

//bigImage ? bigImage : smallImage

export const ImageContainer = ({banner, children}) => {
  return <div css={banner ? wide : normal}>
    {children}
  </div>
}