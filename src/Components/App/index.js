import './style.css';

import { Route, Routes } from "react-router-dom";



import {Nav} from '../Nav' 
import {Home} from '../Home'
import {AboutMe} from '../AboutMe'
import {MyProjects} from '../MyProjects'

function App() {
  return (
    <div className="App">

      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/aboutme" element={<AboutMe/>}></Route>
        <Route path="/myprojects" element={<MyProjects/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
