import ylfbImage from '../../Images/your_local_foodbank.png'

const ylfbTitle = `Your Local Foodbank`

const ylfbP1 = `This project was awesome, great team we learnt loads! We first used Miro and Figma to flesh out our plan with a strong 
focus on user personas to identify stories that we could solve. We decided on 3 main users, the beneficiary, the volunteer and the 
foodbank manager.`

const ylfbP2 =  `Built components from scratch. Used a google maps API. Our backend collated data from both our MongoDB non-relational 
database and an external API and served it to our front end. We built a CMS for a foodbank manager to log in and edit details`

const ylfbText = [
  ylfbP1,
  ylfbP2
]

const ylfbTech = [
  `Javascript`,
  `React`,
  `Node.js`,
  `Express`,
  `MongoDB`
]

const deployed = `https://your-local-foodbank.netlify.app/`

const ylfbLinks = [
  {name: `frontend`, link: `https://github.com/SchoolOfCode/final-project_front-end-jazzy-code-superheros`},
  {name: `backend`, link: `https://github.com/SchoolOfCode/final-project_back-end-jazzy-code-superheros`}
]

export const ylfb = {
  title: ylfbTitle,
  deployed: deployed,
  text: ylfbText,
  tech: ylfbTech,
  links: ylfbLinks,
  image: ylfbImage
}