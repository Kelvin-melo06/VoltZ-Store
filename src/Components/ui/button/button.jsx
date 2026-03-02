import './button.css'

const Button = ({text, className, type}) => {
  return (
    <>
        <button 
        type={type || "button"}
        className = {`
         ${ className || "" }`
         }>
          { text }
        </button>
    </>
  )
}

export default Button