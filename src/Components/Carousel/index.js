import { useState } from "react";

import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Button } from "@chakra-ui/react";

import { EmptyModal } from "../Modal";

export const Carousel = ({slides}) => {
 

  const [slide,setSlide] = useState(0)
  const length = slides.length


 if (!Array.isArray(slides) || slides.length<=0 ){
    return null
 }

const nextSlide = () => {
    setSlide( slide === length - 1 ? 0: slide + 1)    
}

const previousSlide = () => {
    setSlide( slide === 0 ? length - 1 : slide - 1 )
    console.log(slide)
}

    return (
    <div className="Carousel-Container">      
      <div className="Carousel">
      <Button onClick={previousSlide}><ArrowLeftIcon/></Button>
      <Button onClick={nextSlide}><ArrowRightIcon/></Button>
      {slides.map((item,index)=>
        <section className={index === slide ? "slide-active" : "slide" } key={index}>
          {index === slide && 
            <>
              <h3>{item.title}</h3>
              <a href={item.deployed} target="_blank" rel="noreferrer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-slider"
                />
              </a>
              <p>Summary</p>  
              <EmptyModal
                buttonTitle={`Read more`}
                modalTitle={item.title}
              >
                {item.text.map((x, i)=> 
                  <p key={i}>{x}</p>
                )}

                <p>
                  Tech we used
                </p>

                {item.tech.map((x, i)=> 
                  <span key={i}>
                    <img
                      src={x.image}
                      alt={x.name}
                    />
                    <p>{x.name}</p>
                      
                  </span>)}

                  <p>Have a closer look</p>
                    {item.links.map((x, i)=>
                      <a 
                        key={i}
                        href={x.link} target="_blank" rel="noreferrer"
                      >
                        <p>{x.name}</p>
                      </a>
                  )} 
            

              </EmptyModal>

            </>
          }

  
        </section>
          
        )} 
      </div>
    </div>
        );
}