import './style.css'

import {Image} from '../Image'
import {Text} from '../Text'
import {Paragraph} from '../Paragraph'

export const AboutMe = ()=> {

  const title = `Lorem ipsum dolor.`
  const p1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor urna id porttitor pellentesque. Mauris ut eros gravida, cursus ante vel, dapibus dolor. Duis tellus libero, laoreet eu cursus sollicitudin, aliquam non leo. Etiam vitae mollis elit, in eleifend velit. Nunc pharetra lorem vel fringilla semper. Fusce pulvinar tempus turpis vel tincidunt. Donec non sapien ligula. Vivamus orci quam, volutpat et dictum quis, vulputate non enim. Aenean sed lacinia nisi. Nunc porta purus sed nulla auctor, et convallis sapien auctor. Nunc molestie semper cursus. Ut vitae tristique lacus. Aliquam vel erat in lectus sagittis ornare ut posuere erat.`
  const p2 = `Curabitur eu orci vitae justo maximus ultricies. Sed ante risus, consectetur ultrices ultricies nec, aliquet eu neque. In a neque non erat mattis convallis. Nulla vitae nunc faucibus, maximus velit vel, tincidunt ligula. Vestibulum consectetur magna diam, ut ullamcorper lorem volutpat vel. Sed tincidunt porttitor ultricies. Donec augue erat, condimentum eu aliquam ut, gravida vel purus. Pellentesque ac velit elit. Suspendisse mauris lacus, molestie non sapien nec, sodales accumsan risus. Nam a tristique libero. Nulla dictum hendrerit dolor, nec vehicula magna. Sed tristique velit nec purus dapibus, id faucibus velit aliquet. Sed non ex eget sapien volutpat sagittis. Donec in erat diam. Aliquam maximus, diam id tempor commodo, odio mi auctor ante, eget maximus sapien augue et nunc. Donec at quam ornare lectus efficitur mollis ut tempor tortor.`

  return (
    <div id='AboutMe'>

        <Image
          divId='myImgContainerAboutMe'
          imageId='myImgAboutMe'
          src='https://images.unsplash.com/photo-1598620617377-3bfb505b4384?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          alt='this is a placeholder img'
        />

      <Text id='textContainerAboutMe'>

        <h2 id='aboutMeTitleAboutMe' className='pageTitle'>
          {title}
        </h2>

        <Paragraph 
          id='aboutMeP1AboutMe' 
          className='aboutMeText'
          text={p1}  
        />

        <Paragraph 
          id='aboutMeP2AboutMe' 
          className='aboutMeText'
          text={p2}
        />

      </Text>

    </div>
  )
}