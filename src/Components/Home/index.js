

import {
  homeTitle, 
  homeText } from '../../Content/home';

  import joshImage from '../../Images/JoshImage.png'

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

          {homeText.map((item, index)=> 
            <Paragraph 
              key={index}
              text={item}  
            />)}

        </Text>   

    </MainContainer>
  )
}