import React from "react"; // Import React (Mandatory Step)

// Create our Button component as a functional component.
const Button = (props) => {
  const { label, handleClick } = props; // Destructure our props
  return (
    <input type="button" value={label} onClick={handleClick} />
  );
};
export default Button; // Export our button component