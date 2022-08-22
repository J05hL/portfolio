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

const deployed = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`

const dummyLinks = [
  {name: lorem.slice(0,5), link: `#`},
  {name: lorem.slice(0,5), link: `#`}
]

export const dummy = {
  title: dummyTitle,
  deployed: deployed,
  text: dummyText,
  tech: dummyTech,
  links: dummyLinks,
  image: dummyImage
}