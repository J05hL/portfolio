/** @jsxImportSource @emotion/react */

import github from '../../Images/GitHubIcon.png'
import linkedIn from '../../Images/LinkedInIcon.png'
import email from '../../Images/EmailIcon.png'

import {
  outerFooterDiv,
  connect,
  footerLinksContainer,
  footerLinks,
  image,
  li
} from './styled.js'




export const Footer = ()=> {
  return (
    <footer css={outerFooterDiv}>
      
      <div css={connect}>
        Connect With Me:
      </div>

    <div css={footerLinksContainer}>
      <ul css={footerLinks}>
        <li css={li}>
          <a href="https://github.com/J05hL" target="_blank" rel="noreferrer">
            <img 
              css={image} 
              src={github}
              alt='github logo'
            />
          </a>
        </li>

        <li css={li}>
          <a href="https://www.linkedin.com/in/-joshua-langford/" target="_blank" rel="noreferrer">
            <img 
              css={image}
              src={linkedIn}
              alt='linkedIn logo'
            />
          </a>
        </li>

        <li css={li}>
          <a href="mailto: josh.langford@hotmail.co.uk">
            <img 
              css={image}
              src={email}
              alt='email logo'
            />
          </a>
        </li>

      </ul>
    </div>

    </footer>
  )
}