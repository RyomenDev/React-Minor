import React from "react";
import "./Button.css";

const Button = (props) => {
  const { callApi } = props;
  return (
    <div>
      <button onClick={callApi}>Click to generate a joke.</button>;
    </div>
  );
};

// Export Button Component
export default Button;
