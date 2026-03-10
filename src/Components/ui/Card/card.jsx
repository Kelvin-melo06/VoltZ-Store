import Button from "../Button/Button";


const Card = ({ children, className, buttonText, onButtonClick, ...props }) => {
  return (
    <>
      <div
        className={`card
        ${className || ""}`}
        {...props}
      >
        {children}

        {buttonText && <Button text={buttonText} onClick={onButtonClick} />}
      </div>
    </>
  );
};

export default Card;
