import React from "react";

const Form1 = (props) => {
  const {
    gender,
    setGender,
    subjects,
    handleSubjectChange,
    resume,
    setResume,
  } = props;
  return (
    <div>
      <label htmlFor="gender">Gender*</label>
      <input
        type="radio"
        name="gender"
        value="male"
        id="male"
        checked={gender === "male"}
        onChange={(e) => setGender(e.target.value)}
      />
      Male
      <input
        type="radio"
        name="gender"
        value="female"
        id="female"
        checked={gender === "female"}
        onChange={(e) => setGender(e.target.value)}
      />
      Female
      <input
        type="radio"
        name="gender"
        value="other"
        id="other"
        checked={gender === "other"}
        onChange={(e) => setGender(e.target.value)}
      />
      Other
      <label htmlFor="lang">Your best Subject</label>
      <input
        type="checkbox"
        name="lang"
        id="english"
        checked={subjects.english === true}
        onChange={(e) => handleSubjectChange("english")}
      />
      English
      <input
        type="checkbox"
        name="lang"
        id="maths"
        checked={subjects.maths === true}
        onChange={(e) => handleSubjectChange("maths")}
      />
      Maths
      <input
        type="checkbox"
        name="lang"
        id="physics"
        checked={subjects.physics === true}
        onChange={(e) => handleSubjectChange("physics")}
      />
      Physics
      <label htmlFor="file">Upload Resume*</label>
      <input
        type="file"
        name="file"
        id="file"
        onChange={(e) => setResume(e.target.files[0])}
        placeholder="Enter Upload File"
        required
      />
    </div>
  );
};

export default Form1;
