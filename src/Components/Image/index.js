import './style.css';

export const Image = ({divId, imageId, src, alt})=> {

  return (

    <div id={divId}>
      <img id={imageId} src={src} alt={alt}/>
    </div>
  
  )

}