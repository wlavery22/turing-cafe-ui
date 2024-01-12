import './App.css';
import React from 'react';
import { useState, useEffect } from "react";
import Reservations from "../Reservations/Reservations.js";
import Form from "../Form/Form.js";

function App() {
  const [reservations, setReservations] = useState([]);

  const getAllReservations = () => {
	return fetch("http://localhost:3001/api/v1/reservations") 
  // return fetch("https://the-rosary-api.vercel.app/v1/monday")
	.then(response => response.json())
	.then(data => {
		console.log(data)
		setReservations(data)  
})
	.catch (error => console.log(error.message))
}

  useEffect(() => {
	  getAllReservations()
  }, []);

  const addReservation = (newReservation) => {
    console.log("newReservation:", newReservation);
    setReservations([...reservations, newReservation]) //newReservation is from Form.js
    postReservation(newReservation)
  }

// new function to POST and add reservation should call addReservation but it must happen after post
  const postReservation = (newReservation) => {
    return fetch("http://localhost:3001/api/v1/reservations", {
      method: 'POST',
      body: JSON.stringify(newReservation), 
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error.message));
  }

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <Form addReservation={addReservation}/>
      </div>
      <div className='resy-container'>
        <Reservations reservations={reservations}/>
      </div>
    </div>
  );
}

export default App; 
