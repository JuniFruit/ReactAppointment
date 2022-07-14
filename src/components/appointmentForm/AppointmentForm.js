import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleDateChange = (e) => {
    setDate(e.target.value)
  }
  const handleTimeChange = (e) => {
    setTime(e.target.value)
  }

  const handleSelect = (e) => {
    setContact(e.target.value)
  }

  return (
    // AppointmentForm
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input onChange={handleTitleChange}  type="text" value={title} id="title" required></input>
        <label htmlFor="date">Date</label>
        <input onChange={handleDateChange} value={date} type="date" min={getTodayString()} id="date" required></input>
        <label htmlFor="time">Time</label>
        <input onChange={handleTimeChange} value={time} type="time" id="time" required></input>
        <ContactPicker handleSelect={handleSelect} contacts={contacts}/>
        <input  type="submit"></input>
      </form>
    </div>
  );
};
