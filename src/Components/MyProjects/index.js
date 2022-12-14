/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

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

const style = css`
  color: inherit; 
  text-decoration: underline;
`

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

            <Title>
              Tech we used
            </Title>

            <MainContainer
              rowOnLarge={true}
              wrap={true}
            >
              {item.tech.map((x, i)=> <span key={i}>
                <Image
                  src={x.image}
                  alt={x.name}
                  tiny={true}
                />
                <Paragraph
                  text={x.name}
                />
              </span>)}


            </MainContainer>
              <p>Have a closer look!</p>
                {item.links.map((x, i)=>
                  <a 
                    css={style}
                    key={i}
                    href={x.link} target="_blank" rel="noreferrer"
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