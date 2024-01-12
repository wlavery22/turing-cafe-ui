import './Form.css'
import {  useState } from 'react'

function Form( {addReservation} ) {
  const [firstName, setFirstName]  = useState("")
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [number, setNumber] = useState(0);

  function submitReservations(event) {
    event.preventDefault()
  
    const newReservation = {
      id: Date.now(), 
      name: firstName,
      date: date,
      time: time,
      number: number,
      key: Date.now()
    };

    addReservation(newReservation)
      clearInput() 
  }

  function clearInput() {
    setFirstName("")
    setDate("")
    setTime("")
    setNumber(0)
  }

  return (
    <form> 
      <input
        type='text'
        placeholder='First Name'
        name='firstName' 
        value={firstName}
        onChange={event => setFirstName(event.target.value)}
      />

      <input
        type='text'
        placeholder='Date'
        name='date' 
        value={date} 
        onChange={event => setDate(event.target.value)}
      />

      <input
        type='text'
        placeholder='Time'
        name='time' 
        value={time} 
        onChange={event => setTime(event.target.value)}
      /> 

      <input
        type='number'
        placeholder='Number'
        name='number' 
        value={number} 
        onChange={event => setNumber(event.target.value)}
      />
      <button className="reservation" onClick = {event => submitReservations(event)}>SUBMIT RESERVATION</button>
    </form> 
  )
}

export default Form
