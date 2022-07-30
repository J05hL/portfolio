import './style.css';

export const Image = ({divId, divClassName, imageId, src, alt, link})=> {

  return (

    <div id={divId} className={divClassName}>
      {link? 
      <a href={link}>
        <img id={imageId} src={src} alt={alt}/>
      </a> :
      
      <img id={imageId} src={src} alt={alt}/>
      }

    </div>
  
  )

}