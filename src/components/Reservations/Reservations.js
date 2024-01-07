import './Reservations.css';
import React from 'react';
import Card from '../Card/Card.js';

const Reservations = ( { reservations } ) => {
  console.log("Reservations:", reservations);
  const reservationCards = reservations.map((reservation) => {
    const { id, name, date, time, number } = reservation
    return (
      <Card
        id={id} 
        name={name}
        date={date}
        time={time}
        number={number}
        key={id}
      /> 
    )
  })

  return (
    <div className='reservation-container'>
      {reservationCards} 
    </div>
    )
  }

export default Reservations
