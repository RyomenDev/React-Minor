
import "./calculatorTitle.css";

import React from "react"; // Import React (Mandatory Step) 
  
// Create Functional Component. 
// Takes title as props.value. 
const CalculatorTitle = (props) => { 
    let value=props.value;
    return ( 
    <div className="calculator-title">{value}</div> 
    ); 
}; 
export default CalculatorTitle; // Export Calculator Title