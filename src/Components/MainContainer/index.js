/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


const noRowNoWrap = css `
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const rowNoWrap = css `
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(min-width: 800px) {
    align-items: start;
    flex-direction: row;
  }
`

const rowAndWrap = css `
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

export const MainContainer = ({rowOnLarge, wrap, children}) => {
  return <div css={rowOnLarge && wrap ? rowAndWrap : rowOnLarge && !wrap ? rowNoWrap : noRowNoWrap}>
    {children}
  </div>
}