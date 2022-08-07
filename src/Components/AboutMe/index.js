import './style.css'

import lorem from '../../Content/lorem'

import {Image} from '../Image'
import {Text} from '../Text'
import {Paragraph} from '../Paragraph'

export const AboutMe = ()=> {

  return (
    <div id='AboutMe'>

        <Image
          divId='myImgContainerAboutMe'
          imageId='myImgAboutMe'
          src='https://images.unsplash.com/photo-1598620617377-3bfb505b4384?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          alt='this is a placeholder img'
        />

      <Text id='textContainerAboutMe'>

        <h2 id='aboutMeTitle' className='pageTitle'>
          {lorem.slice(0,17)}
        </h2>

        <Paragraph 
          id='aboutMeP1AboutMe' 
          className='aboutMeText'
          text={lorem.slice(0,200)}  
        />

        <Paragraph 
          id='aboutMeP2AboutMe' 
          className='aboutMeText'
          text={lorem.slice(0,150)}
        />

      </Text>

    </div>
  )
}