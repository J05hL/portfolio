import './style.css';

//dev only remove
import lorem from '../../Content/lorem';

import { Route, Routes } from "react-router-dom";
import { useEffect } from 'react';

import {Nav} from '../Nav' 
import {Home} from '../Home'
import {AboutMe} from '../AboutMe'
import {MyProjects} from '../MyProjects'
import {Text} from '../Text'



function App() {

  //dev only remove
  useEffect(()=> {
    return ()=> console.log(`app is unmounting`, Date())
  }, [])

  return (
    <div className="App">
    <Nav/>
      <Text>
        <h1 className='appTitle'>Joshua Langford</h1>
        <p className='appTitle'>Full stack developer with a love of React and node.js</p>
      </Text>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/aboutme" element={<AboutMe/>}></Route>
        <Route path="/myprojects" element={<MyProjects/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
