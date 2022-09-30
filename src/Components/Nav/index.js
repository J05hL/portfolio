/** @jsxImportSource @emotion/react */

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

          <div css={toggleButton} onClick={handleToggle}>
            <span css={isActive ? barActive : barNotActive} />

            <span css={isActive ? barActive : barNotActive} />

            <span css={isActive ? barActive : barNotActive} />
          </div>

          <div css={isActive ? navLinksActive : navLinks}>
            <ul css={navLinksUl}>
              <li css={li}>
                <Link css={linkActive} onClick={handleToggle} to="/">Home</Link>
              </li>

              <li css={li}>
                <Link css={linkActive} onClick={handleToggle} to="/experience">Experience</Link>
              </li>

              <li css={li}>
                <Link css={linkActive} onClick={handleToggle} to="/myprojects">My Projects</Link>
              </li>

            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
