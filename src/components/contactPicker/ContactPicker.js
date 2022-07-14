import React from "react";

export const ContactPicker = ({ contacts, handleSelect}) => {
  return (
    // ContactPicker
    <div>
      <select onChange={handleSelect} title="Please select a contact" required>
        <option value="">--Select a contact--</option>
        {contacts.length ? contacts.map(item => <option value={item.name}>{item.name}</option>) : <option disabled>No contacts</option>}
      </select>
    </div>
  );
};
