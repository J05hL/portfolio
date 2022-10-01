import {HStack, Box, Button} from "@chakra-ui/react"

import './style.css';
import github from '../../Images/GitHubIcon.png'
import linkedIn from '../../Images/LinkedInIcon.png'

import { useState } from "react";


export const Socials = ()=> {

  const [clicked, setClicked] = useState(false)

  return (
    <section>
     
          <Button
            className={clicked ? 'hidden' : 'whereToFindMeButton'}
            onClick={()=>setClicked(!clicked)}
          >
            Where to find me
          </Button>

          <HStack
            className={clicked ? 'socials' : 'hidden'}
          >
            <Box spacing={6}
              className={clicked ? 'socials' : 'hidden'}
            >
              <a 
                className={clicked ? 'socials' : 'hidden'}
                href="https://github.com/J05hL" target="_blank" rel="noreferrer">
                <img 
                  className={clicked ? 'socials' : 'hidden'}
                  width='50px'
                  src={github}
                  alt='github logo'
                />
              </a>
            </Box>

            <Box>
              <a
                className={clicked ? 'socials' : 'hidden'} 
                href="https://www.linkedin.com/in/-joshua-langford/" target="_blank" rel="noreferrer">
                <img
                  className={clicked ? 'socials' : 'hidden'} 
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