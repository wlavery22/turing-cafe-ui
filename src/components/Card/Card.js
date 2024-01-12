import './Card.css'

const Card = ({ id, name, date, time, number }) => {
  return (
    <div className='card'>
      <p className='name'>{name}</p>
      <p>{date}</p>
      <p>{time}</p>
      <p className='number'>{number}</p>
      <button>Cancel</button>
    </div>
  )
}

export default Card

