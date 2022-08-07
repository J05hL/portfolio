import './style.css'

import lorem from '../../Content/lorem';

import {Image} from '../Image'
import {Text} from '../Text'
import {Paragraph} from '../Paragraph'

export const Home = ()=> {
  return (
    <div id='Home'>

      <Image
        divClassName='myImgHomeContainer'
        imageId='myImgHome'
        src='https://images.unsplash.com/photo-1598620617377-3bfb505b4384?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        alt='this is a placeholder img'
        link='#'
      />
      
      <Text>

        <h2 id='homeTitle' className='pageTitle'>
          {lorem.slice(0,17)}
        </h2>

        <Paragraph
          id=''
          text={lorem.slice(0,500)}
          />

      </Text>    

    </div>
  )
}