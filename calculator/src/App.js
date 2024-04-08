// Imports.
import React from "react";
import CalculatorTitle from "./components/calculatorTitle.js";
import OutputScreen from "./components/outputScreen.js";
import Handlers from "./components/handlers.js";
import "./App.css";
import { useState } from "react";
import { handleClick } from "./utils/handler";

const App = () => {
  // class App extends React.Component {
  // render() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  // const handleClick = (event) => {
  //   // Your handleClick logic here
  //   const value = event.target.value;

  //   switch (value) {
  //     case "=": {
  //       if (question !== "") {
  //         let ans = "";
  //         try {
  //           ans = eval(question);
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

  // const [question, setQuestion] = useState("");
  // const [answer, setAnswer] = useState("");

  return (
    <div className="frame">
      <CalculatorTitle value="Calculator" />
      <div className="mainCalc">
        <OutputScreen question={question} answer={answer} />
        {/* Pass handleClick function to Handlers component */}
        {/* <Handlers handleClick={handleClick} setQuestion={setQuestion} setAnswer={setAnswer} question={question} /> */}
        {/* <Handlers setQuestion={setQuestion} setAnswer={setAnswer} question={question}/> */}

        {/* Pass handleClick function to Handlers component */}
        <Handlers
          handleClick={(event) =>
            handleClick(event, question, setQuestion, answer, setAnswer)
          }
        />
      </div>
    </div>
  );
  // }
};
export default App; // Export App (Calculator) Component
