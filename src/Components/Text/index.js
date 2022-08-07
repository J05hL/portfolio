import './style.css';

export const Text = ({divId, className, children})=> {

  return (
    <div id={divId} className={className ? className : 'defaultText'}>
      {children}
    </div>
  )

}