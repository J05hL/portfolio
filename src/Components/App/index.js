
import {h1} from '../../Content/appTitle'
import {description} from '../../Content/appTitle'

import {Home} from '../Home'
import {Experience} from '../Experience'
import {MyProjects} from '../MyProjects'
import {Socials} from '../Socials'


function App() {

  //dev only remove*
  // useEffect(()=> {
  //   return ()=> console.log(`app is unmounting`, Date())
  // }, [])

  return (
    <div>
      <section>
        <h1>{h1}</h1>
        <p>{description}</p>
        <Socials/>
        <Home/>
        <Experience/>
        <MyProjects/>
      </section>
    </div>
  );
}

export default App;
