import { css } from '@emotion/react'

export const outerFooterDiv = css`
  display: flex;
  flex-direction: row;
  margin-top:auto; 
  justify-content: space-between;
  width: 100%;
  background-color: #342e37;
  color: #FAF9F6;
  box-shadow: 0px 3px 0px #FAF9F6 inset;
  @media(min-width: 800px) {
    box-shadow: 0px 3px 0px #FAF9F6 inset, 0px 6px 0px #342e37 inset, 0px 9px 0px #FAF9F6 inset, 0px 12px 0px #342e37 inset, 0px 15px 0px #FAF9F6 inset;
  }
`

export const connect = css`
  align-self: flex-end;
  padding: 20px;
`

export const footerLinksContainer = css`
  max-width: 80%;
  min-width: 60%;
  padding-top: 16px;
`

export const footerLinks = css`
  font-weight: 600;
  display:flex;
  flex-direction: row;
  justify-content: space-between;  
  max-width: 75%;
`

export const image = css`
  max-height: 50px;
  max-width: 50px;
`

export const li = css`
  list-style: none;
  text-align: center;
`