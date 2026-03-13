import Button from "../Button/Button";


const Card = ({
  children,
  className,
  buttonText,
  onButtonClick,
  buttonClasseName,
}) => {
  return (
    <>
      <div
        className={`card
        ${className || ""}`}
      >
        {children}

        {buttonText && (
          <Button
            className={buttonClasseName}
            text={buttonText}
            onClick={onButtonClick}
          />
        )}
      </div>
    </>
  );
};

export default Card;
