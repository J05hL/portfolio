import { css } from '@emotion/react'

export const outerNavDiv = css `
  background-color: #342e37;
  box-shadow: 0px -3px 0px #FAF9F6 inset;
  
  @media(min-width: 800px) {
    box-shadow: 0px -3px 0px #FAF9F6 inset, 0px -6px 0px #342e37 inset, 0px -9px 0px #FAF9F6 inset, 0px -12px 0px #342e37 inset, 0px -15px 0px #FAF9F6 inset;
  }
 
`

export const toggleButton = css `
  position: absolute;
  border: none;
  padding: 0;
  top: .75rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
  @media(min-width: 800px) {
    display: none;
  }
`

export const navBar = css `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  align-items: flex-start;
  @media(min-width: 800px) {
    flex-direction: row;
    height: 80px;
    align-items: center;
    justify-content: center;
    display: flex;
    margin: 0 20px 0 20px;
  }
`

export const barActive = css `
  height: 3px;
  width: 100%;
  background-color: #FAF9F6;
  border-radius: 10px;
  `

export const barNotActive = css `
  height: 3px;
  width: 100%;
  background-color: #342e37;
  border-radius: 10px;
  `



export const navLinks = css `
  width: 100%;
  display: none;
  align-items: center;
  height: 100%;
  @media(min-width: 800px) {
    display: block;
    width: 100%;
    align-items: center;
    height: 100%
  }
  `

export const navLinksActive = css `
  width: 100%;
  display: none;
  align-items: center;
  height: 100%;
  display: flex;
  @media(min-width: 800px) {
    display: flex;
}
  `

export const linkActive = css `
  justify-content: center;
  display: flex;
  color: #FAF9F6;
  text-decoration: none;
  margin-bottom: 5px;
  @media(min-width: 800px) {
    padding: 1rem;
    display: block;
    text-decoration: none;
}
`

export const navLinksUl = css `
  padding: 0;
  width: 100%;
  flex-direction: column;
  @media(min-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: right;
}
`

export const li = css`
  list-style: none;
  text-align: center;
  @media(min-width: 800px) {
    display: block;
}
`

