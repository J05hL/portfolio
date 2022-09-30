import {HStack, Box} from "@chakra-ui/react"

import github from '../../Images/GitHubIcon.png'
import linkedIn from '../../Images/LinkedInIcon.png'


export const Socials = ()=> {
  return (
    <section>
      
          <HStack>
          <p>
            Where to find me
          </p>

            <Box
            >
              <a href="https://github.com/J05hL" target="_blank" rel="noreferrer">
                <img 
                  width='50px'
                  src={github}
                  alt='github logo'
                />
              </a>
            </Box>

            <Box>
              <a href="https://www.linkedin.com/in/-joshua-langford/" target="_blank" rel="noreferrer">
                <img 
                  width='50px'
                  src={linkedIn}
                  alt='linkedIn logo'
                />
              </a>
            </Box>
          </HStack>

    </section>
  )
}