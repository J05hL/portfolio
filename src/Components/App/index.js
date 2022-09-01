/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { Route, Routes } from "react-router-dom";
import { useEffect } from 'react';

import {h1} from '../../Content/appTitle'
import {description} from '../../Content/appTitle'

import {Nav} from '../Nav' 
import {Home} from '../Home'
import {AboutMe} from '../AboutMe'
import {MyProjects} from '../MyProjects'
import {Title} from '../Title'
import {Footer} from '../Footer'
import {Text} from '../Text'


const all = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
`

const scroll = css`
  overflow-y: scroll;
  padding: 0 30px;
`

function App() {

  //dev only remove*
  useEffect(()=> {
    return ()=> console.log(`app is unmounting`, Date())
  }, [])

  return (
    <div css={all}>
      <Nav/>
      <div css={scroll}>
        <Text>
          <Title>
            <h1>{h1}</h1>
            <p>{description}</p>
          </Title>
        </Text>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/aboutme" element={<AboutMe/>}></Route>
          <Route path="/myprojects" element={<MyProjects/>}></Route>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
