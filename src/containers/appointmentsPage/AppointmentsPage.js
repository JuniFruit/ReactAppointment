import React from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { useState } from "react";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, addAppointment, contacts }) => {
 
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   addAppointment(title,contact,date,time);
   setContact('')
   setTitle('');
   setDate('');
   setTime('');

  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm contacts={contacts} time={time} setTime={setTime} title={title} setTitle={setTitle} contact={contact} setContact={setContact} date={date} setDate={setDate} handleSubmit={handleSubmit} />

      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList items={appointments} />
      </section>
    </div>
  );
};
