import { css } from '@emotion/react'

export const outerFooterDiv = css`
  display: flex;
  flex-direction: row;
  margin-top:auto; 
  justify-content: center;
  width: 100%;
  background-color: #342e37;
  color: #FAF9F6;
  box-shadow: 0px 3px 0px #FAF9F6 inset;
  @media(min-width: 800px) {
    box-shadow: 0px 3px 0px #FAF9F6 inset, 0px 6px 0px #342e37 inset, 0px 9px 0px #FAF9F6 inset, 0px 12px 0px #342e37 inset, 0px 15px 0px #FAF9F6 inset;
  }
`

export const footerLinksContainer = css`
  padding-top: 16px;
`

export const footerLinks = css`
  padding-top: 16px;
  display:flex;
  gap: 20px;
  flex-direction: row;
  align-items: center; 
  justify-content: space-between;
  @media(min-width: 800px) {
    gap: 40px;
  }  
`

export const image = css`
  max-height: 50px;
  max-width: 50px;
`

export const li = css`
  list-style: none;
  text-align: center;
`