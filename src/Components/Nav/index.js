//refactor at some point into emotion style rather
//than style sheet much nicer
//import { css } from '@emotion/react'

import './style.css'

import {Link} from 'react-router-dom'

import {useState} from 'react'

export const Nav = () => {
  const [isActive, setIsActive] = useState(`false`);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div id='outerNavDiv'>

      <div id='innerNavDiv'>

        <nav id='navBar'>

          <a href='#' className={'toggleButton'} onClick={handleToggle}>
            <span className={isActive ? `barActive` : `barNotActive`} />

            <span className={isActive ? `barActive` : `barNotActive`} />

            <span className={isActive ? `barActive` : `barNotActive`} />
          </a>

          <div id="navLinks" className={isActive ? `active` : null}>
            <ul>
              <li>
                <Link className='navLink' to="/">Home</Link>
              </li>

              <li>
                <Link className='navLink' to="/aboutme">About Me</Link>
              </li>

              <li>
                <Link className='navLink' to="/myprojects">My Projects</Link>
              </li>

            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
