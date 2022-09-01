import express from '../Images/TechIcons/express-js-icon.svg'
import javascript from '../Images/TechIcons/javascript.svg'
import mongodb from '../Images/TechIcons/mongodb-icon.svg'
import nodejs from '../Images/TechIcons/nodejs-icon.svg'
import react from '../Images/TechIcons/react.svg'
import emotion from '../Images/TechIcons/emotion.png'
import jest from '../Images/TechIcons/jest.svg'
import cypress from '../Images/TechIcons/cypress-icon.svg'
import postgresql from '../Images/TechIcons/postgresql.svg'
import html5 from '../Images/TechIcons/html-5.svg'
import css3 from '../Images/TechIcons/css-3.svg'
import python from '../Images/TechIcons/python.svg'
import couchbase from '../Images/TechIcons/couchbase.svg'
import typescript from '../Images/TechIcons/typescript-icon-round.svg'
import git from '../Images/TechIcons/git-icon.svg'
import github from '../Images/TechIcons/github-icon.svg'
import styledcomponents from '../Images/TechIcons/styled-components-1.svg'
import tailwindcss from '../Images/TechIcons/tailwindcss-icon.svg'

export const findTechObjectByUpperCase = (name)=> tech.filter((x)=> x.name.toUpperCase() === name)[0]

export const tech = [
  {name: `Git`, image: git, comfortable: true},
  {name: `GitHub`, image: github, comfortable: true},
  {name: `HTML 5`, image: html5, comfortable: true},
  {name: `CSS 3`, image: css3, comfortable: true},
  {name: `Javascript`, image: javascript, comfortable: true},
  {name: `React`, image: react, comfortable: true},
  {name: `Node.js`, image: nodejs, comfortable: true},
  {name: `Express`, image: express, comfortable: true},
  {name: `TypeScript`, image: typescript, comfortable: true},
  {name: `MongoDB`, image: mongodb, comfortable: false},
  {name: `Emotion`, image: emotion, comfortable: true},
  {name: `Styled Components`, image: styledcomponents, comfortable: true},
  {name: `Jest`, image: jest, comfortable: true},
  {name: `Cypress`, image: cypress, comfortable: true},
  {name: `PostgreSQL`, image: postgresql, comfortable: true},
  {name: `Python`, image: python, comfortable: false},
  {name: `Couchbase`, image: couchbase, comfortable: false},
  {name: `Tailwind CSS`, image: tailwindcss, comfortable: false},
  
]