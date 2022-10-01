import {Flex, Spacer,  VStack, Center} from "@chakra-ui/react"

import {
  homeTitle, 
  homeText } from '../../Content/home';

import {Title} from '../Title'

export const Introduction = ()=> {
  return (
    <section>
      <Flex m={5} >
        <Title 
          title={homeTitle} 
        />  
        

        <Spacer/>

        <VStack
          spacing={3}
        >
          {homeText.map((item, index)=> 
            <p key={index}>{item}</p>)}
        </VStack>
      </Flex>
    </section>
  )
}