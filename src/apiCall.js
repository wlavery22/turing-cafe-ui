import { useState, useEffect } from 'react' 

const [reservations, setReservations] = useState([]);

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
	getAllIdeas()
}, []);