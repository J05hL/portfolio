/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


const noRowNoWrap = css `
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FAF9F6;
`

const rowNoWrap = css `
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FAF9F6;
  @media(min-width: 800px) {
    align-items: start;
    flex-direction: row;
  }
`

const rowAndWrap = css `
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FAF9F6;
  @media(min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around
  }
`

export const MainContainer = ({rowOnLarge, wrap, children}) => {
  return <div css={rowOnLarge && wrap ? rowAndWrap : rowOnLarge && !wrap ? rowNoWrap : noRowNoWrap}>
    {children}
  </div>
}