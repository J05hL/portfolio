import {lorem} from '../../Content/lorem';
import {
  myProjectsTitle,
  myProjectsP1
} from '../../Content/myProjects'

import placeholder from '../../Images/placeholder.jpg'

import {Card} from '../Card'
import {Image} from '../Image'
import {Text} from '../Text'
import {Paragraph} from '../Paragraph'
import {MainContainer} from '../MainContainer'
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
            <h2>{myProjectsTitle}</h2>
          </Title>

          <Paragraph
            text={myProjectsP1}
          />

        </Text>

      </MainContainer>

      <MainContainer 
         rowOnLarge={true}
        wrap={true}
        >

        <Card>

          <Image
            src={placeholder}
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
            src={placeholder}
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
            src={placeholder}
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