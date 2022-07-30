import './style.css'

export const Paragraph = ({id, className, text})=> {

  return (
    <p id={id} className={className}>
      {text}
    </p>
  )

}