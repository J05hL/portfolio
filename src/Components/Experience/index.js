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

import { TableFromArrayOfObjects } from '../TableFromArrayOfObjects'
import {Title} from '../Title'

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

        <Title 
          title={xpTitle} 
        /> 
      </Flex>

      <Flex m={5} >
      <Title 
          title="Tech I'm comfortable with" 
        />    
          
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

          <Title 
          title="Tech I'm exploring right now"
        />    
          
          
                
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
            <TableFromArrayOfObjects array={xpHistory}/>
          </Center>  
   
      </Flex>
    </section>  
  )
}