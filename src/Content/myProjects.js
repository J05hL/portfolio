import {
  ylfbTitle,
  ylfbP1,
  ylfbP2,
  ylfbTech,
  ylfbLinks
} from './yourLocalFoodBank.js'
import {
  dummyTitle,
  dummyP1,
  dummyP2,
  dummyP3,
  dummyTech,
  dummyLinks
} from './dummyExample.js'


import ylfbImage from '../Images/your_local_foodbank.png'
import dummyImage from '../Images/placeholder.jpg'

export const myProjectsTitle = `Some things I've built`

export const myProjectsP1 = `Just a few things I've worked on or am currently working on and I'd like to show off`

export const projectsArray = [
 {
    title: ylfbTitle,
    text: [ylfbP1, ylfbP2],
    tech: ylfbTech,
    links: ylfbLinks,
    image: ylfbImage
  },
  {
    title: dummyTitle,
    text: [dummyP1, dummyP2, dummyP3],
    tech: dummyTech,
    links: dummyLinks,
    image: dummyImage
  },
  {
    title: dummyTitle,
    text: [dummyP1, dummyP2, dummyP3],
    tech: dummyTech,
    links: dummyLinks,
    image: dummyImage
  },
]

