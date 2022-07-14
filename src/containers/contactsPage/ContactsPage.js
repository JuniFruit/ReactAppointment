import React from "react";
import { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";


export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  useEffect(() => {
    const hasDuplicate = contacts.some(item => item.name === name);
    if (hasDuplicate) {
      setDuplicate(true);
    } else {
      setDuplicate(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (!duplicate) {
      
      addContact(name, number, email);
      setName('');
      setNumber('');
      setEmail('');
    } else {
      return
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name} setName={setName} number={number} setNumber={setNumber} email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList items={contacts}/>
      </section>
    </div>
  );
};
