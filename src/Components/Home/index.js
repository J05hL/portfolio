import {
  homeTitle, 
  homeText } from '../../Content/home';

export const Home = ()=> {
  return (
    <section>
      <h2>{homeTitle}</h2>


      {homeText.map((item, index)=> 
        <p key={index}>text={item}</p>)}
    </section>
  )
}