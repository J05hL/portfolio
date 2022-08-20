/** @jsxImportSource @emotion/react */

import {Link} from 'react-router-dom'

import {useState} from 'react'

//styling
import {
  li,
  navLinksUl,
  linkActive,
  navLinksActive,
  navLinks,
  barNotActive,
  barActive,
  navBar,
  toggleButton,
  outerNavDiv
} from './styled.js'

export const Nav = () => {
  const [isActive, setIsActive] = useState(`false`);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div css={outerNavDiv}>

      <div id='innerNavDiv'>

        <nav css={navBar}>

          <a href='#' css={toggleButton} onClick={handleToggle}>
            <span css={isActive ? barActive : barNotActive} />

            <span css={isActive ? barActive : barNotActive} />

            <span css={isActive ? barActive : barNotActive} />
          </a>

          <div css={isActive ? navLinksActive : navLinks}>
            <ul css={navLinksUl}>
              <li css={li}>
                <Link css={linkActive} to="/">Home</Link>
              </li>

              <li css={li}>
                <Link css={linkActive} to="/aboutme">About Me</Link>
              </li>

              <li css={li}>
                <Link css={linkActive} to="/myprojects">My Projects</Link>
              </li>

            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
