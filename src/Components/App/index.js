import { Route, Routes } from "react-router-dom";
import { useEffect } from 'react';

import {h1} from '../../Content/appTitle'
import {description} from '../../Content/appTitle'

import {Nav} from '../Nav' 
import {Home} from '../Home'
import {AboutMe} from '../AboutMe'
import {MyProjects} from '../MyProjects'
import {Title} from '../Title'
// import {Footer} from '../Footer'



function App() {

  //dev only remove
  useEffect(()=> {
    return ()=> console.log(`app is unmounting`, Date())
  }, [])

  return (
    <div className="App">
      <Nav/>
      <Title>
        <h1>{h1}</h1>
        <p>{description}</p>
      </Title>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/aboutme" element={<AboutMe/>}></Route>
        <Route path="/myprojects" element={<MyProjects/>}></Route>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
