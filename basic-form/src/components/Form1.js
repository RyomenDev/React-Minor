import React from "react";

const Form1 = (props) => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    contact,
    setContact,
  } = props;
  return (
    <div>
      <label htmlFor="firstName">First Name*</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Enter First Name"
        required
      />
      <label htmlFor="lastName">Last Name*</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Enter Last Name"
        required
      />
      <label htmlFor="email">Enter Email* </label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        required
      />
      <label htmlFor="tel">Contact*</label>
      <input
        type="tel"
        name="contact"
        id="contact"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        placeholder="Enter Mobile number"
        required
      />
    </div>
  );
};

export default Form1;
