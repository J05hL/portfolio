
import github from '../../Images/GitHubIcon.png'
import linkedIn from '../../Images/LinkedInIcon.png'


export const Socials = ()=> {
  return (
    <section>
      
        <ul>

          <li>
            Where to find me
          </li>
          <li>
            <a href="https://github.com/J05hL" target="_blank" rel="noreferrer">
              <img 
                
                src={github}
                alt='github logo'
              />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/-joshua-langford/" target="_blank" rel="noreferrer">
              <img 
               
                src={linkedIn}
                alt='linkedIn logo'
              />
            </a>
          </li>

        </ul>
    </section>
  )
}