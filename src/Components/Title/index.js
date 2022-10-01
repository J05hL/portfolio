import {Center} from "@chakra-ui/react"

import './style.css';

export const Title = ({title}) => {
  return (
    <Center
          className="title" 
          fontSize="30px"
          width="100%"
          m={5}  
        >  
          <h2>{title}</h2>
        </Center>
  )
}