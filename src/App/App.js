import './App.css';
import React from 'react';
import { useState } from "react";
import Reservations from "src/App/Reservations.js";

function App() {
  // const dummyData = [{array of objects}] 
  const [reservations, setReservations] = useState([]);

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
