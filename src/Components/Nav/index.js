import './style.css'

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

          <a href='#' className='toggleButton' onClick={handleToggle}>
            <span className='bar' />

            <span className="bar" />

            <span className="bar" />
          </a>

          <div id="navLinks" className={isActive ? `active` : null}>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/aboutme">About Me</a>
              </li>

              <li>
                <a href="/myprojects">My Projects</a>
              </li>

            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
