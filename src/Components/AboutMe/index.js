

import {
  bioTitle,
  aboutMeP1,
  aboutMeP2,
  aboutMeP3,
  bioXP
} from '../../Content/aboutMe'

import joshImage from '../../Images/josh_image.jpg'

import {Image} from '../Image'
import {Text} from '../Text'
import {Paragraph} from '../Paragraph'
import { MainContainer } from '../MainContainer'
import { Title } from '../Title'
import { Table } from '../Table'

export const AboutMe = ()=> {

  return (

    <MainContainer rowOnLarge={true}
    wrap={false}
    >

        <Image
          src={joshImage}
          alt='Joshua Langford image'
          link={false}
        />

        <Text>

          <Title>
            <h2>{bioTitle}</h2>
          </Title>

          <Table array={bioXP}/>

          <Paragraph 
            text={aboutMeP1}  
          />

          <Paragraph 
            text={aboutMeP2}  
          />

          <Paragraph 
            text={aboutMeP3}  
          />

        </Text>
      
    </MainContainer>
  )
}