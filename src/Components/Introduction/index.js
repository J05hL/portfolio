import {Flex, Spacer,  VStack, Box} from "@chakra-ui/react"

import {
  homeTitle, 
  homeText } from '../../Content/home';

export const Introduction = ()=> {
  return (
    <section>
      <Flex m={5} >
        <Box 
          fontSize="30px"
          m={5}  
        >
          <h2>{homeTitle}</h2>
        </Box>

        <Spacer/>

        <VStack
          spacing={3}
          maxWidth='85%'
        >
          {homeText.map((item, index)=> 
            <p key={index}>{item}</p>)}
        </VStack>
      </Flex>
    </section>
  )
}