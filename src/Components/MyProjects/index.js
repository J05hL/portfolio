
import {
  myProjectsTitle,
  myProjectsText,
  projectsArray
} from '../../Content/myProjects'

import {Card} from '../Card'

export const MyProjects = ()=> {
  return (
    <section>


            <h2>{myProjectsTitle}</h2>

          {myProjectsText.map((item, index)=> 
            <p key={index}>{item}</p>  
            )}

          {projectsArray.map((item, index)=>
            <Card key={index}>
              <h4>
                {item.title}
              </h4>
              <a href={item.deployed} target="_blank" rel="noreferrer">
                <img
                  src={item.image}
                  alt={item.title}
                />
              </a>
                {item.text.map((x, i)=> 
                  <p key={i}>{x}</p>
                )}

            <h5>
              Tech we used
            </h5>

              {item.tech.map((x, i)=> <span key={i}>
                <img
                  src={x.image}
                  alt={x.name}
                />
                <p>text={x.name}</p>
                  
              </span>)}

              <p>Have a closer look!</p>
                {item.links.map((x, i)=>
                  <a 
                    key={i}
                    href={x.link} target="_blank" rel="noreferrer"
                  >
                    <p>{x.name}</p>
                  </a>
              )}             

        </Card>
      )}

    </section>
  )
}