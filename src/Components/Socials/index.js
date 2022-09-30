/** @jsxImportSource @emotion/react */

import github from '../../Images/GitHubIcon.png'
import linkedIn from '../../Images/LinkedInIcon.png'


export const Socials = ()=> {
  return (
    <section css={null}>
      
        <ul css={null}>

          <li css={null}>
            Where to find me
          </li>
          <li css={null}>
            <a href="https://github.com/J05hL" target="_blank" rel="noreferrer">
              <img 
                css={null} 
                src={github}
                alt='github logo'
              />
            </a>
          </li>

          <li css={null}>
            <a href="https://www.linkedin.com/in/-joshua-langford/" target="_blank" rel="noreferrer">
              <img 
                css={null}
                src={linkedIn}
                alt='linkedIn logo'
              />
            </a>
          </li>

        </ul>
    </section>
  )
}