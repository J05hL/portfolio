import './style.css';

import { Route, Routes } from "react-router-dom";



import {Nav} from '../Nav' 
import {Home} from '../Home'
import {AboutMe} from '../AboutMe'
import {MyProjects} from '../MyProjects'
import { useEffect } from 'react';
import lorem from '../../Content/lorem';

function App() {

  useEffect(()=> {
    return ()=> console.log(`app is unmounting`, Date())
  }, [])

  return (
    <div className="App">

    <Nav/>
      <h1 className='appTitle'>{lorem.slice(0,17)}</h1>
      <p className='appTitle'>{lorem.slice(0,40)}</p>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/aboutme" element={<AboutMe/>}></Route>
        <Route path="/myprojects" element={<MyProjects/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
