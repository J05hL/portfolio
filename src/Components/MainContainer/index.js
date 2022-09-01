/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


const noRowNoWrap = css `
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: inherit;
`

const rowNoWrap = css `
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: inherit;
  @media(min-width: 1000px) {
    align-items: flex-start;
    flex-direction: row;
  }
`

const rowAndWrap = css `
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: inherit;
`

export const MainContainer = ({rowOnLarge, wrap, children}) => {
  return <div css={rowOnLarge && wrap ? rowAndWrap : rowOnLarge && !wrap ? rowNoWrap : noRowNoWrap}>
    {children}
  </div>
}