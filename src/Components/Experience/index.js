import {
  Flex, 
  Spacer,  
  VStack, 
  HStack, 
  Wrap, 
  WrapItem, 
  Box, 
  Center
} from "@chakra-ui/react"

import {
  xpTitle,
  xpText,
  xpHistory
} from '../../Content/xp'

import {tech} from '../../Content/tech.js'

import { Table } from '../Table'

export const Experience = ()=> {

  return (   
    <section>
      <Flex m={5} >
        <VStack
          spacing={3}
          maxWidth='85%'
        >
          {xpText.map((item, index)=> 
            <p key={index}>{item} </p> 
      )}
        </VStack>
        
        <Spacer/>

        <Center 
          fontSize="30px"
          width="100%"
          m={5}  
        >
          <h2>{xpTitle}</h2>
        </Center>
      </Flex>

      <VStack>
        <Box 
          fontSize="30px"
          m={5}  
        >    
          <h3>Tech I'm comfortable with</h3>
        </Box>    
        
        <Wrap>
          {tech.filter((x)=> x.comfortable).map((x, i)=> 
            <WrapItem key={i} justify='center'>
              <HStack 
                spacing={3}
                justify='center'
              >
                <img
                  // minWidth='100%'
                  // minHeight='100%'
                  maxWidth='100%'
                  width='100px'
                  // maxHeight='20px'
                  src={x.image}
                  alt={x.name}
                />
                <p>{x.name}</p>
              </HStack>
            </WrapItem>)}
        </Wrap>      

      </VStack>

      <h4>Tech I'm exploring right now</h4>
    
        
        {tech.filter((x)=> !x.comfortable).map((x, i)=> <span key={i}>
              <img
                src={x.image}
                alt={x.name}
              />
              <p>
                text={x.name}
              </p>
              </span>)}

      <h3>Employment History</h3>

      <Table array={xpHistory}/>
    </section>  
  )
}