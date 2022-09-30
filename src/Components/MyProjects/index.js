
import {
  myProjectsTitle,
  myProjectsText,
  projectsArray
} from '../../Content/myProjects'

import {Carousel} from '../Carousel'

export const MyProjects = ()=> {
  return (
    <section>

      <h2>{myProjectsTitle}</h2>

      {myProjectsText.map((item, index)=> 
        <p key={index}>{item}</p>  
      )}

      <Carousel
        slides={projectsArray}
      />


    </section>
  )
}