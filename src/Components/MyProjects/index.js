import {lorem} from '../../Content/lorem';

import {Card} from '../Card'
import {Image} from '../Image'
import {Text} from '../Text'
import {Paragraph} from '../Paragraph'
import {MainContainer} from '../MainContainer'
import {SubContainer} from '../SubContainer'
import {Title} from '../Title'

export const MyProjects = ()=> {
  return (
    <MainContainer  
    rowOnLarge={false}
    wrap={false}
    >

      <MainContainer  
        rowOnLarge={true}
        wrap={false}
        >
        
        <Text>

          <Title>
            <h2>{lorem.slice(0,17)}</h2>
          </Title>

          <Paragraph
            text={lorem.slice(0,191)}
          />

        </Text>

      </MainContainer>

      <MainContainer 
         rowOnLarge={true}
        wrap={true}
        >

        <Card>

          <Image
            src='https://images.unsplash.com/photo-1598620617377-3bfb505b4384?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            alt=''
            link='#'
          />

          <Text>

            <Paragraph
              id=''
              text={lorem.slice(0,17)}
            />

          </Text>

        </Card>

        <Card>

          <Image
            src='https://images.unsplash.com/photo-1598620617377-3bfb505b4384?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            alt=''
            link='#'
          />

          <Text>

            <Paragraph
              id=''
              text={lorem.slice(0,17)}
            />

          </Text>

        </Card>

        <Card>

          <Image
            src='https://images.unsplash.com/photo-1598620617377-3bfb505b4384?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            alt=''
            link='#'
          />

          <Text>

            <Paragraph
              id=''
              text={lorem.slice(0,17)}
            />

          </Text>

        </Card>
        

      </MainContainer>

    </MainContainer>
  )
}