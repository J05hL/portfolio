

import {lorem} from '../../Content/lorem'

import {Image} from '../Image'
import {Text} from '../Text'
import {Paragraph} from '../Paragraph'
import { MainContainer } from '../MainContainer'
import { Title } from '../Title'

export const AboutMe = ()=> {

  return (

    <MainContainer rowOnLarge={true}
    wrap={false}
    >

        <Image
          src='https://images.unsplash.com/photo-1598620617377-3bfb505b4384?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          alt='this is a placeholder img'
          link={false}
        />

        <Text>

          <Title>
            <h2>{lorem.slice(0,17)}</h2>
          </Title>

          <Paragraph 
            text={lorem.slice(0,762)}  
          />

          <Paragraph 
            text={lorem.slice(0,253)}
          />

        </Text>
      
    </MainContainer>
  )
}