import {lorem} from '../lorem'

import dummyImage from '../../Images/placeholder.jpg'

const dummyTitle = lorem.slice(0,17)

const dummyP1 = lorem.slice(0,91)

const dummyP2 =  lorem.slice(0,91)

const dummyP3 =  lorem.slice(0,91)

const dummyText = [
  dummyP1,
  dummyP2,
  dummyP3
]

const dummyTech = [
  lorem.slice(0,5),
  lorem.slice(0,5),
  lorem.slice(0,5),
  lorem.slice(0,5),
  lorem.slice(0,5),
]

const dummyLinks = [
  {name: lorem.slice(0,5), SeeMore: `#`},
  {name: lorem.slice(0,5), SeeMore: `#`}
]

export const dummy = {
  title: dummyTitle,
  text: dummyText,
  tech: dummyTech,
  links: dummyLinks,
  image: dummyImage
}