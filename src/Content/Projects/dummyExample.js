import {lorem} from '../lorem'
import dummyImage from '../../Images/placeholder.png'
import {
  findTechObjectByUpperCase
} from '../tech.js'

const dummyTitle = lorem.slice(0,17)

const dummyP1 = lorem.slice(0,987)

const dummyP2 =  lorem.slice(0,253)

const dummyP3 =  lorem.slice(0,497)

const dummyText = [
  dummyP1,
  dummyP2,
  dummyP3
]

const dummyTech = [
  findTechObjectByUpperCase(`JAVASCRIPT`),
]

const deployed = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`

const dummyLinks = [
  {name: lorem.slice(0,53), link: deployed},
  {name: lorem.slice(0,59), link: deployed}
]

export const dummy = {
  title: dummyTitle,
  deployed: deployed,
  text: dummyText,
  tech: dummyTech,
  links: dummyLinks,
  image: dummyImage
}