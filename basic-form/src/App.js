import "./App.css";
import { React, useState } from "react";
import MainForm from "./components/MainForm";


function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState();
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      selectedOption,
      subjects,
      resume,
      url,
      about
    );
    // Add your form submission logic here
  };

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };
  
  const handleReset = () => {
    // Reset all state variables here
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({
      english: true,
      maths: false,
      physics: false,
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
  };

  return (
    <div className="App">
      <h1>Form in React</h1>
      
      <fieldset>
        <MainForm
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          email={email}
          setEmail={setEmail}
          contact={contact}
          setContact={setContact}
          gender={gender}
          setGender={setGender}
          subjects={subjects}
          handleSubjectChange={handleSubjectChange}
          resume={resume}
          setResume={setResume}
          url={url}
          setUrl={setUrl}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          about={about}
          setAbout={setAbout}
          handleReset={handleReset}
          handleSubmit={handleSubmit}
          // Pass other state variables and functions as props
        />
      </fieldset>
    </div>
  );
}

export default App;
