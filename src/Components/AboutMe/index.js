

import {
  aboutMeTitle,
  aboutMeP1,
  bioTitle,
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
            <h2>{aboutMeTitle}</h2>
          </Title>

          <Paragraph 
            text={aboutMeP1}  
          />

          <Title>
            <h2>{bioTitle}</h2>
          </Title>

          <Table array={bioXP}/>

        </Text>
      
    </MainContainer>
  )
}