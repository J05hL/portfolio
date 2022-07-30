import './style.css';

export const Card = ({className, children})=> {
  return (
    <div className={className? className : 'defaultCard'}>
      {children}
    </div>
  )
}