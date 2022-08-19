/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import { css } from '@emotion/react'


const style = css`
    flex-direction: row;
    height: 25%;
    align-items: space-between;
    justify-content: center;
    display: flex;
    margin: 0 20px 0 20px;
    @media(min-width: 800px) {
      align-items: center
    }
`

export const Footer = ()=> {
  <div css={style}>

    <div>
        Connect With Me
    </div>

    <div id="footerLinks">
      <ul>
        <li>
          <a className='footerLink' to="#">One</a>
        </li>

        <li>
          <a className='footerLink' href="#">Two</a>
        </li>

        <li>
          <a className='footerLink' href="#">Three</a>
        </li>

      </ul>
    </div>
  </div>
}