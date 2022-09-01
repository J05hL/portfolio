/** @jsxImportSource @emotion/react */

import github from '../../Images/GitHubIcon.png'
import linkedIn from '../../Images/LinkedInIcon.png'

import {
  outerFooterDiv,
  footerLinks,
  image,
  li,
} from './styled.js'




export const Footer = ()=> {
  return (
    <footer css={outerFooterDiv}>
      
        <ul css={footerLinks}>

          <li css={li}>
            Where to find me
          </li>
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

        </ul>
    </footer>
  )
}