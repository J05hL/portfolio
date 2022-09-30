import {
  xpTitle,
  xpText,
  xpHistory
} from '../../Content/xp'

import {tech} from '../../Content/tech.js'

import { Table } from '../Table'

export const Experience = ()=> {

  return (   
    <section>
        <h2>{xpTitle}</h2>


      {xpText.map((item, index)=> 
          <p key={index}>{item} </p> 
      )}

      <h3>Tech I'm comfortable with</h3>
        
        {tech.filter((x)=> x.comfortable).map((x, i)=> <span key={i}>
              <img
                src={x.image}
                alt={x.name}
              />
              <p>{x.name}</p>
              </span>)}

      <h4>Tech I'm exploring right now</h4>
    
        
        {tech.filter((x)=> !x.comfortable).map((x, i)=> <span key={i}>
              <img
                src={x.image}
                alt={x.name}
              />
              <p>
                text={x.name}
              </p>
              </span>)}

      <h3>Employment History</h3>

      <Table array={xpHistory}/>
    </section>  
  )
}