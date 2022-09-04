/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { Route, Routes } from "react-router-dom";
  //dev only remove*
  //import { useEffect } from 'react';

import {h1} from '../../Content/appTitle'
import {description} from '../../Content/appTitle'
import joshImage from '../../Images/JoshImage.png'

import {Nav} from '../Nav' 
import {Home} from '../Home'
import {Experience} from '../Experience'
import {MyProjects} from '../MyProjects'
import {Title} from '../Title'
import {Footer} from '../Footer'
import {Text} from '../Text'
import {Image} from '../Image'


const all = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
  background-color:  #FAF9F6;
`

const scroll = css`
  overflow-y: scroll;
  padding: 0 30px;
  background-color: inherit;
`

function App() {

  //dev only remove*
  // useEffect(()=> {
  //   return ()=> console.log(`app is unmounting`, Date())
  // }, [])

  return (
    <div css={all}>
      <Nav/>
      <Image
          src={joshImage}
          alt='this is an image of me'
          link={false}
          fix={true}
        />
      <section css={scroll}>
        <Text>
          <Title>
            <h1>{h1}</h1>
            <p>{description}</p>
          </Title>
        </Text>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/experience" element={<Experience/>}></Route>
          <Route path="/myprojects" element={<MyProjects/>}></Route>
        </Routes>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
