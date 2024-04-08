import React from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";

const MainForm = (props) => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    contact,
    setContact,
    gender,
    setGender,
    subjects,
    handleSubjectChange,
    resume,
    setResume,
    url,
    setUrl,
    selectedOption,
    setSelectedOption,
    about,
    setAbout,
    handleReset,
    handleSubmit,
  } = props;
  
  return (
    <div>
      <form action="#" method="get">
        <Form1
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          email={email}
          setEmail={setEmail}
          contact={contact}
          setContact={setContact}
        />
        <Form2
          gender={gender}
          setGender={setGender}
          subjects={subjects}
          handleSubjectChange={handleSubjectChange}
          resume={resume}
          setResume={setResume}
        />
        <Form3
          url={url}
          setUrl={setUrl}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          about={about}
          setAbout={setAbout}
          handleReset={handleReset}
          handleSubmit={handleSubmit}
        />
      </form>
    </div>
  );
};

export default MainForm;
