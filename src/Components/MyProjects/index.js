import {
  myProjectsTitle,
  myProjectsP1,
  projectsArray
} from '../../Content/myProjects'

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

      {projectsArray.map((item, index)=>
        <Card key={index}>
          <Title>
            {item.title}
          </Title>
          <Image
            src={item.image}
            alt={item.title}
            link={item.links[0].seeMore}
          />
          <Text>
            {item.text.map((x, i)=> 
              <Paragraph
                key={i}
                text={x}
              />
            )}
            {item.links.map((x, i)=>
              <a 
                key={i}
                href={x.seeMore}
              >
                <p>{x.name}</p>
              </a>
            )}
          </Text>
              

        </Card>
      )}
        
        

      </MainContainer>

    </MainContainer>
  )
}