

const Card = ({children, className, buttonText, onButtonClick, ...props}) => {
  return (
    <>
      <div 
      className=
      {`card
        ${className || ""}`}
        {...props}>

        {children}

        {buttonText && <button onClick={onButtonClick}> {buttonText}</button>}
      </div>
    </>
  )
}

export default Card