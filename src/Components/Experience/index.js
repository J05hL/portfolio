/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import {
  xpTitle,
  xpText,
  xpHistory
} from '../../Content/xp'

import {tech} from '../../Content/tech.js'

import joshImage from '../../Images/JoshImage.png'

import {Image} from '../Image'
import {Text} from '../Text'
import {Paragraph} from '../Paragraph'
import { MainContainer } from '../MainContainer'
import { Title } from '../Title'
import { Table } from '../Table'

export const Experience = ()=> {

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
          <h2>{xpTitle}</h2>
        </Title>

        {xpText.map((item, index)=> 
            <Paragraph 
              key={index}
              text={item}  
            />)}

        <Title>Tech I'm comfortable with</Title>

        <MainContainer
          rowOnLarge={true}
          wrap={true}
        >
          
          {tech.filter((x)=> x.comfortable).map((x, i)=> <span key={i}>
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

        <Title>Tech I'm exploring right now</Title>
        
        <MainContainer
          rowOnLarge={true}
          wrap={true}
        >
          
          {tech.filter((x)=> !x.comfortable).map((x, i)=> <span key={i}>
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

        <Title>Employment History</Title>

        <Table array={xpHistory}/>

      </Text>


      
    </MainContainer>
  )
}