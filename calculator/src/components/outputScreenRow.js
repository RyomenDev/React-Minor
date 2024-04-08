import "./outputScreenRow.css";

import React from "react"; // Import React (Mandatory Step)

// Functional Component.
// Used to show Question/Answer.
const OutputScreenRow = (props) => {
  const value = props.value;
  return (
    <div className="screen-row">
      <input type="text" readOnly value={value} />
    </div>
  );
};
export default OutputScreenRow; // Export Output Screen Row
