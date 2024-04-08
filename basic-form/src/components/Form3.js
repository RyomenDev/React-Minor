import React from "react";

const Form1 = (props) => {
  const {
    url,
    setUrl,
    selectedOption,
    setSelectedOption,
    setAbout,
    about,
    handleReset,
    handleSubmit,
  } = props;
  return (
    <div>
      <label htmlFor="url">Enter URL*</label>
      <input
        type="url"
        name="url"
        id="url"
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter url"
        required
      />
      <label>Select your choice</label>
      <select
        name="select"
        id="select"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="" disabled defaultValue={selectedOption === ""}>
          Select your Ans
        </option>
        <optgroup label="Beginners">
          <option value="1">HTML</option>
          <option value="2">CSS</option>
          <option value="3">JavaScript</option>
        </optgroup>
        <optgroup label="Advance">
          <option value="4">React</option>
          <option value="5">Node</option>
          <option value="6">Express</option>
          <option value="t">MongoDB</option>
        </optgroup>
      </select>
      <label htmlFor="about">About</label>
      <textarea
        name="about"
        id="about"
        cols="30"
        rows="10"
        onChange={(e) => setAbout(e.target.value)}
        placeholder="About your self"
        required
      ></textarea>
      <button type="reset" value="reset" onClick={() => handleReset()}>
        Reset
      </button>
      <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)}>
        Submit
      </button>
    </div>
  );
};

export default Form1;
