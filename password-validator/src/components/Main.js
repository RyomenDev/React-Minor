import React from "react";

const Main = (props) => {
  const { validate, errorMessage } = props;
  return (
    <div>
      <h2>Checking Password Strength in ReactJS</h2>
      <span>Enter Password: </span>
      <input
        type="text"
        onChange={(e) => validate(e.target.value)}
      ></input>{" "}
      <br />
      {errorMessage === "" ? null : (
        <span
          style={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          {errorMessage}
        </span>
      )}{" "}
    </div>
  );
};

export default Main;
