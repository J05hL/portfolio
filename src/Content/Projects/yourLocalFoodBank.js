import ylfbImage from '../../Images/your_local_foodbank.png'
import {
  findTechObjectByUpperCase,
} from '../tech.js'
const ylfbTitle = `Your Local Foodbank`

const ylfbP1 = `Your Local Foodbank was our final project for School of Code. As a team of six we decided to build an application that 
would assist small foodbanks in better communication with their communities. We decided on 3 main users, the beneficiary, the volunteer and the 
foodbank manager. Once we had established the user personas we identified a number of user stories to zero in on the problems we would solve 
while delivering this product. We were able to interview a food bank manager which allowed us to get real life understanding of those problems.`

const ylfbP2 = `We first used Miro and Figma to flesh out our wireframes and design our component tree and the structure of our backend. 
Once those plans were in place we starting breaking down those stories into tickets using Trello so we could begin work in an Agile manner. Before 
we began any work we wrote a manifesto to agree how we would manage conflicts, manage our branching strategy on GitHub and how we would work as 
a team, swapping partners daily to ensure knowledge was spread equally across the team. The most important part of that manifesto was our 
to open and honest communication where we made sure everybody was free to express their ideas without prejudice.`

const ylfbP3 =  `We choose to build a number of components from scratch rather than using component libraries. We understood this was not the 
most efficient choice in terms of delivery but it allowed us an extra degree of flexibility and also was an opportunity to learn. The carousel and 
the accordions are two examples of this. We also integrated a Google Maps API to add a map feature better display information on the location for 
the foodbank displayed.`

const ylfbP4 = `Our backend supplied data from both our MongoDB non-relational database and an external API which was served to our front end. 
We again made the decision to use a technology we were not familar with for our database to experiment and further our knowledge. We also built 
a CMS for a food bank manager to log in and edit details for their foodbank.` 

const ylfbP5 = `We have a number of features we would like to add in future iterations but we are extremely proud of what we were able to deliver 
in a short space of time.` 

const ylfbText = [
  ylfbP1,
  ylfbP2,
  ylfbP3,
  ylfbP4,
  ylfbP5
]

const ylfbTech = [
  findTechObjectByUpperCase(`JAVASCRIPT`),
  findTechObjectByUpperCase(`REACT`),
  findTechObjectByUpperCase(`NODE.JS`),
  findTechObjectByUpperCase(`EXPRESS`),
  findTechObjectByUpperCase(`MONGODB`),
  findTechObjectByUpperCase(`EMOTION`),
  findTechObjectByUpperCase(`JEST`),
  findTechObjectByUpperCase(`CYPRESS`),
]

const deployed = `https://your-local-foodbank.netlify.app/`

const ylfbLinks = [
  {name: `Our front end GitHub repo`, link: `https://github.com/SchoolOfCode/final-project_front-end-jazzy-code-superheros`},
  {name: `Our back end GitHub repo`, link: `https://github.com/SchoolOfCode/final-project_back-end-jazzy-code-superheros`}
]

export const ylfb = {
  title: ylfbTitle,
  deployed: deployed,
  text: ylfbText,
  tech: ylfbTech,
  links: ylfbLinks,
  image: ylfbImage
}