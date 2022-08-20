

import {
  homeTitle, 
  homeP1,
  homeP2,
  homeP3,
  homeP4 } from '../../Content/home';

import joshImage from '../../Images/josh_image.jpg'

import {Image} from '../Image'
import {Text} from '../Text'
import {Paragraph} from '../Paragraph'
import { Title } from '../Title';
import { MainContainer } from '../MainContainer';

export const Home = ()=> {
  return (
    
    <MainContainer 
      rowOnLarge={true}
      wrap={false}
      >

        <Image
          src={joshImage}
          alt='this is a placeholder img'
          link={false}
        />
        
        <Text>
          <Title>
            <h2>{homeTitle}</h2>
          </Title>

          <Paragraph
            text={homeP1}
          />

          <Paragraph
            text={homeP2}
          />

          <Paragraph
            text={homeP3}
          />

          <Paragraph
            text={homeP4}
          />

        </Text>   

    </MainContainer>
  )
}