import React, { useState } from "react";
import validator from "validator";
import "./App.css";
import Main from "./components/Main";
import Popup from "./components/Popup";

const App = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Is Strong Password");
      setIsPopupVisible(false);
    } else {
      setErrorMessage("Is Not Strong Password");
      setIsPopupVisible(true);
    }
  };

  return (
    <div
      className="container"
      style={{
        marginLeft: "200px",
      }}
    >
      <Main validate={validate} errorMessage={errorMessage} />
      <Popup isVisible={isPopupVisible} />
    </div>
  );
};

export default App;
