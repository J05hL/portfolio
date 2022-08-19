

import {lorem} from '../../Content/lorem';

import {Image} from '../Image'
import {Text} from '../Text'
import {Paragraph} from '../Paragraph'
import { Title } from '../Title';
import { MainContainer } from '../MainContainer';
import { SubContainer } from '../SubContainer';

export const Home = ()=> {
  return (
    <MainContainer>

      <SubContainer>

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
            text={lorem.slice(0,118)}
          />

          <Paragraph
            text={lorem.slice(0,191)}
          />

        </Text>   

      </SubContainer> 

    </MainContainer>
  )
}