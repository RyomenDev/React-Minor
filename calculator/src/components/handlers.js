import React from "react";
import Button from "./button.js";
import { useState } from "react";

const Handlers = (props) => {
  // const handleClick = props.handleClick;
  const { handleClick } = props; // Destructure handleClick from props

  // const [question, setQuestion] = useState("");
  // const [answer, setAnswer] = useState("");

  // const { setQuestion, setAnswer, question } = props; // Destructure our props

  // const handleClick = (event) => {
  //   // Your handleClick logic here
  //   const value = event.target.value;
  //   console.log(value);
  //   switch (value) {
  //     case "=": {
  //       if (question !== "") {
  //         let ans = "";
  //         try {
  //           ans = eval(question);
  //           setAnswer(ans);
  //           console.log("ans", ans);
  //         } catch (err) {
  //           setAnswer("Math Error");
  //         }
  //         if (ans === undefined) setAnswer("Math Error");
  //         else {
  //           setAnswer(ans);
  //           setQuestion("");
  //         }
  //       }
  //       break;
  //     }
  //     case "Clear": {
  //       setQuestion("");
  //       setAnswer("");
  //       break;
  //     }
  //     case "Delete": {
  //       const str = question.substr(0, question.length - 1);
  //       setQuestion(str);
  //       break;
  //     }
  //     default: {
  //       setQuestion(question + value);
  //       break;
  //     }
  //   }
  // };

  return (
    <div>
      <div className="button-row">
        <Button label={"Clear"} handleClick={handleClick} />
        <Button label={"Delete"} handleClick={handleClick} />
        <Button label={"."} handleClick={handleClick} />
        <Button label={"/"} handleClick={handleClick} />
      </div>
      <div className="button-row">
        <Button label={"7"} handleClick={handleClick} />
        <Button label={"8"} handleClick={handleClick} />
        <Button label={"9"} handleClick={handleClick} />
        <Button label={"*"} handleClick={handleClick} />
      </div>
      <div className="button-row">
        <Button label={"4"} handleClick={handleClick} />
        <Button label={"5"} handleClick={handleClick} />
        <Button label={"6"} handleClick={handleClick} />
        <Button label={"-"} handleClick={handleClick} />
      </div>
      <div className="button-row">
        <Button label={"1"} handleClick={handleClick} />
        <Button label={"2"} handleClick={handleClick} />
        <Button label={"3"} handleClick={handleClick} />
        <Button label={"+"} handleClick={handleClick} />
      </div>
      <div className="button-row">
        <Button label={"0"} handleClick={handleClick} />
        <Button label={"="} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Handlers;
