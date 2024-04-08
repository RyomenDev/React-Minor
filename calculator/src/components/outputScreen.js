import React from "react"; // Import React (Mandatory Step).
import OutputScreenRow from "./outputScreenRow.js"; // Import Output Screen Row.

// Functional Component.
// Use to hold two Screen Rows.
const OutputScreen = (props) => {
  const question=props.question;
  const answer=props.answer;

  console.log(question,answer);
  return (
    <div className="screen">
      <OutputScreenRow value={question} />
      <OutputScreenRow value={answer} />
    </div>
  );
};
export default OutputScreen; // Export Output Screen.
