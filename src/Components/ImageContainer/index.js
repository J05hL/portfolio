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

const fixed = css `
  display: none;
  @media(min-width: 1100px) and (max-height: 650px) {
    position: fixed;
    top: 25vh;
    left: 1vh;
    width: 40vh; 
    height: 40vh;  
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: inherit;
  }
  @media(min-width: 1100px) {
    position: fixed;
    top: 25vh;
    width: 40vh; 
    height: 40vh;  
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: inherit;
  }
  
`


const normal = css `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: inherit;
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
  background-color: inherit;
`

const small = css `
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
`

//bigImage ? bigImage : smallImage

export const ImageContainer = ({banner, children, tiny, fix}) => {
  return <div css={fix ? fixed : banner ? wide : tiny ? small : normal}>
    {children}
  </div>
}