import { ChakraProvider } from '@chakra-ui/react'
import {VStack, Box} from "@chakra-ui/react"



import {Introduction} from '../Introduction'
import {MainTitle} from '../MainTitle'
import {Experience} from '../Experience'
import {MyProjects} from '../MyProjects'
import {Socials} from '../Socials'


const App = () => {

  return (
    <ChakraProvider>
      <VStack>
        <MainTitle/> 
        <Socials/>
        <Introduction/>
        <Experience/>
        <MyProjects/>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
