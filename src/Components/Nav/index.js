/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

//import './style.css'

import {Link} from 'react-router-dom'

import {useState} from 'react'

const outerNavDiv = css `
  background-color: #342e37
`

const toggleButton = css `
  position: absolute;
  border: none;
  padding: 0;
  top: .75rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
  @media(min-width: 800px) {
    display: none;
  }
`

const navBar = css `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  align-items: flex-start;
  @media(min-width: 800px) {
    flex-direction: row;
    height: 80px;
    align-items: center;
    justify-content: center;
    display: flex;
    margin: 0 20px 0 20px;
  }
`

const barActive = css `
  height: 3px;
  width: 100%;
  background-color: #FAF9F6;
  border-radius: 10px;
  `

const barNotActive = css `
  height: 3px;
  width: 100%;
  background-color: #342e37;
  border-radius: 10px;
  `



const navLinks = css `
  width: 100%;
  display: none;
  align-items: center;
  height: 100%;
  @media(min-width: 800px) {
    display: block;
    width: 100%;
    align-items: center;
    height: 100%
  }
  `

const navLinksActive = css `
  width: 100%;
  display: none;
  align-items: center;
  height: 100%;
  display: flex;
  @media(min-width: 800px) {
    display: flex;
}
  `

const linkActive = css `
  justify-content: center;
  display: flex;
  color: #FAF9F6;
  font-weight: 600;
  text-decoration: none;
  margin-bottom: 5px;
  @media(min-width: 800px) {
    padding: 1rem;
    display: block;
    text-decoration: none;
}
`

const navLinksUl = css `
  padding: 0;
  width: 100%;
  flex-direction: column;
  @media(min-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: right;
}
`

const li = css`
  list-style: none;
  text-align: center;
  @media(min-width: 800px) {
    display: block;
}
`

// const outerNavDiv = css ``



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
