/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


const noRowNoWrap = css `
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: inherit;
`

const rowOnLargeNoWrap = css `
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: inherit;
  @media(min-width: 1100px) {
    align-items: flex-start;
    flex-direction: row;
  }
`

const rowAndWrapAlways = css `
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: inherit;
`

export const MainContainer = ({rowOnLarge, wrap, children}) => {
  return <section css={rowOnLarge && wrap ? rowAndWrapAlways : rowOnLarge && !wrap ? rowOnLargeNoWrap : noRowNoWrap}>
    {children}
  </section>
}