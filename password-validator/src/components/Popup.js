import React from "react";
import "./popup.css";

const Popup = (props) => {
  const { isVisible } = props;
  return (
    <div>
      <div className={`password-strength-popup ${isVisible ? "visible" : ""}`}>
        <p>
          Your password must contain at least 8 characters, including uppercase
          letters, lowercase letters, numbers, and symbols.
        </p>
      </div>
    </div>
  );
};

export default Popup;
