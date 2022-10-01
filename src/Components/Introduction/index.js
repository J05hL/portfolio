import {Flex, Spacer,  VStack, Center} from "@chakra-ui/react"

import {
  homeTitle, 
  homeText } from '../../Content/home';

export const Introduction = ()=> {
  return (
    <section>
      <Flex m={5} >
        <Center 
          fontSize="30px"
          width="100%"
          m={5}  
        >  
          <h2>{homeTitle}</h2>
        </Center>

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