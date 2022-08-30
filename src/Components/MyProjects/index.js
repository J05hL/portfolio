import {
  myProjectsTitle,
  myProjectsText,
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

          {myProjectsText.map((item, index)=> 
            <Paragraph 
              key={index}
              text={item}  
            />)}

        </Text>

      </MainContainer>

      <MainContainer 
         rowOnLarge={false}
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
            link={item.deployed}
            banner={true}
          />
          <Text>
            {item.text.map((x, i)=> 
              <Paragraph
                key={i}
                text={x}
              />
            )}
            <p>Have a closer look!</p>
            {item.links.map((x, i)=>
              <a 
                key={i}
                href={x.link}
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