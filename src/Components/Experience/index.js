import {
  Flex, 
  Spacer,  
  VStack, 
  HStack, 
  Wrap, 
  WrapItem, 
  Center
} from "@chakra-ui/react"

import {
  xpTitle,
  xpText,
  xpHistory
} from '../../Content/xp'

import {tech} from '../../Content/tech.js'

import { ThisIsATable } from '../ThisIsATable'

export const Experience = ()=> {

  return (   
    <section>
    
      <Flex m={5} >
        <VStack
          spacing={3}
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

      <Flex m={5} >
          <Center 
            fontSize="30px"
            width="100%"
            m={5}  
          >    
            <h3>Tech I'm comfortable with</h3>
          </Center>    
          
          <Spacer/>
            
          <Wrap
            spacing='30px'
            minW="50%"
          >
            {tech.filter((x)=> x.comfortable).map((x, i)=> 
              <WrapItem 
                key={i} 
              >
                <Center 
                  height="100%"
                >
                  <HStack 
                    spacing={3}
                    justify='center'
                    width="160px"
                  >
                    <img
                      width='50px'
                      src={x.image}
                      alt={x.name}
                    />
                    <p>{x.name}</p>
                  </HStack>
                </Center>
              </WrapItem>)}
          </Wrap>      
      </Flex>

      <Flex m={5} >
            
          <Wrap
            spacing='30px'
            minW="50%"
          >
            {tech.filter((x)=> !x.comfortable).map((x, i)=> 
              <WrapItem 
                key={i} 
              >
                <Center 
                  height="100%"
                >
                  <HStack 
                    spacing={3}
                    justify='center'
                    width="160px"
                  >
                    <img
                      width='50px'
                      src={x.image}
                      alt={x.name}
                    />
                    <p>{x.name}</p>
                  </HStack>
                </Center>
              </WrapItem>)}
          </Wrap>

          <Spacer/>

          <Center 
            fontSize="30px"
            width="100%"
            m={5}  
          >    
            <h3>Tech I'm exploring right now</h3>
          </Center>    
          
          
                
      </Flex>

      <Flex m={5} >
          <Center 
            fontSize="30px"
            minW="50%"
            m={5}  
          >    
            <h3>Employment History</h3>
          </Center>    
          
          <Spacer/>

          <Center
            w="100%"
            minW="50%"
          >
            <ThisIsATable array={xpHistory}/>
          </Center>  
   
      </Flex>
    </section>  
  )
}