import React from "react";

export const ContactForm = ({
  name,
  setName,
  number,
  setNumber,
  email,
  setEmail,
  handleSubmit

  
}) => {

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeNumber = (e) => {
    setNumber(e.target.value)
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  
  return (
    // ContactForm
    <div>
      <form onSubmit={handleSubmit}>
         <label htmlFor="name">Your name</label>
         <input type="text" onChange={handleChangeName} value={name} maxLength='40' id="name" title="Name can't be blank" required></input>
         <label htmlFor="number">Your phone</label>
         <input type="tel" onChange={handleChangeNumber} value={number} pattern="^\+?\d{1,2}\s?\d{3}\s?\d{3}[\s]?\d{4}$" maxLength="13" title="Enter in +109876543210 or 109876543210" required id="number"></input>
         <label htmlFor="email"> Your email</label>
         <input type="email" onChange={handleEmailChange} value={email} id="email"></input>
         <input type="submit" ></input>
      </form>
    </div>
    
    
  );
};
