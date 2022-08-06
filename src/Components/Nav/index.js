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

          <button href='#' className={'toggleButton'} onClick={handleToggle}>
            <span className='bar' />

            <span className="bar" />

            <span className="bar" />
          </button>

          <div id="navLinks" className={isActive ? `active` : null}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/aboutme">About Me</Link>
              </li>

              <li>
                <Link to="/myprojects">My Projects</Link>
              </li>

            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
