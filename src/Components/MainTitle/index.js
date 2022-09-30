import {Box} from "@chakra-ui/react"

import {h1} from '../../Content/appTitle'
import {description} from '../../Content/appTitle'


export const MainTitle = () => {

  return (
    <section>
      <Box
        fontSize="45px"
        m={5} 
      >
        <h1>{h1}</h1>
      </Box>
      <Box
        fontSize="30px"
        m={5} 
      >
        <p>{description}</p>
      </Box>
    </section>
  )
}