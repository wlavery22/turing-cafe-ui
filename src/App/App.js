import './App.css';
import React from 'react';
import { useState, useEffect } from "react";
import Reservations from "./Reservations.js";
import getAllReservations from "../apiCall.js"

function App() {
  const [reservations, setReservations] = useState([]);

  window.onload = (event) => {
    getAllReservations();
  };

  const getAllReservations = () => {
	return fetch("http://localhost:3001/api/v1/reservations") 
	.then(response => response.json())
	.then(data => {
		console.log(data)
		setReservations([...reservations, ...data])  
})
	.catch (error => console.log(error.message))
}

  useEffect(() => {
	  getAllReservations()
  }, []);

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
      </div>
      <div className='resy-container'>
        <Reservations reservations={reservations}/>
      </div>
    </div>
  );
}

export default App; 
