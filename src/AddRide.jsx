import { useState } from 'react'

function AddRide ({ onAdd }) {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [time, setTime] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a ride')
      return
    }

    onAdd({ text, day, time })

    setText('')
    setDay('')
    setTime('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control bg-primary'>
        <label>Ride</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control bg-primary'>
        <label>Date</label>
        <input
          type='text'
          placeholder='Add Date'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control bg-primary'>
        <label>Time</label>
        <input
          type='text'
          placeholder='Add Time'
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddRide;