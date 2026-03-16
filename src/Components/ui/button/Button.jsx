import './button.css'

const Button = ({text, className, type, onClick}) => {
  return (
    <>
        <button 
        type={type || "button"}
        onClick={onClick}
        className = {`
         ${ className || "" }`
         }>
          { text }
        </button>
    </>
  )
}

export default Button