import './style.css';



export const Card = ({className, children})=> {
  return (
    <span className={className? className : 'defaultCard'}>
      {children}
    </span>
  )
}