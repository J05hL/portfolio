import './style.css'

import lorem from '../../Content/lorem';

import {Card} from '../Card'
import {Image} from '../Image'
import {Text} from '../Text'
import {Paragraph} from '../Paragraph'

export const MyProjects = ()=> {
  return (
    <div id='MyProjects'>

      <section id='MyProjectsIntro' >
        
        <Text>

          <Paragraph
            id=''
            text={lorem.slice(0,191)}
          />

        </Text>

      </section>

      <section id='MyProjectsCards' >

        <Card>

          <Image
            divClassName='imgCardContainer'
            imageClassName='imgCard'
            src='https://images.unsplash.com/photo-1598620617377-3bfb505b4384?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
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
            divClassName='imgCardContainer'
            imageClassName='imgCard'
            src='https://images.unsplash.com/photo-1598620617377-3bfb505b4384?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
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
            divId=''
            divClassName='imgCardContainer'
            imageId=''
            imageClassName='imgCard'
            src='https://images.unsplash.com/photo-1598620617377-3bfb505b4384?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
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
        

      </section>

    </div>
  )
}