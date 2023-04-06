import React from 'react'
import { useState, useReducer, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const initializeTimes = {
  date: '',
  time: '',
  guests: 0,
  occasion: 'Birthday'
}
const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
}

const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date);

  for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
          result.push(i + ':00');
      }
      if(random() < 0.5) {
          result.push(i + ':30');
      }
  }
  return result;
};
const submitAPI = function(formData) {
  return true;
};
function reducer(state, action) {
  switch (action.type) {
    case 'SET_DATE':
      return {
        ...state,
        date: action.payload
      }
    case 'SET_TIME':
      return {
        ...state,
        time: action.payload
      }
    case 'SET_GUESTS':
      return {
        ...state,
        guests: action.payload
      }
    case 'SET_OCCASION':
      return {
        ...state,
        occasion: action.payload
      }
    default:
      return state
  }
}
// 




// 
export default function Reservation() {

  const [state, dispatch] = useReducer(reducer, initializeTimes)
  const [availableTimes, setAvailableTimes] = useState(initializeTimes)
  const [times, setTimes] = useState([])
  const [saved, setSaved] = useState(false)
  console.log(state)
  useEffect(() => {
    const date = state.date.replace(/-/g, '')
    const dateClean = parseInt(date)
    // console.log(date)
    // setTimes
    setTimes(fetchAPI(dateClean))
    // console.log(fetchAPI(state))
  }, [state])

  const navigate = useNavigate()
  function submitForm()  {
    setSaved(submitAPI(state))
    if (submitAPI(state) === true) {
      navigate("/Confrimation")
    }
  }
 
  console.log(saved)
  console.log(times)
  const options = times.map(x => {
    return (
      <option key={x}>{x}</option>
    )
  })
  const handleDateChange = (e) => {
    dispatch({
      type: 'SET_DATE',
      payload: e.target.value
    })
  }
  const handleTimeChange = (e) => {
    dispatch({
      type: 'SET_TIME',
      payload: e.target.value
    })
  }
  const handleGuestsChange = (e) => {
    dispatch({
      type: 'SET_GUESTS',
      payload: e.target.value
    })
  }
  const handleOccasionChange = (e) => {
    dispatch({
      type: 'SET_OCCASION',
      payload: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setAvailableTimes(state)
    submitForm()
  }
 useEffect(
  () => {
    // fetchAPI(statedata)
  },[]
 )
  // console.log(fetchAPI())
const BookingForm = () => {
  return(
    <>
  <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}}>
    <label htmlFor="res-date">Choose date</label>
    <input type="date" id="res-date"
      value={state.date}
      onChange={handleDateChange}
    />
    <label htmlFor="res-time">Choose time</label>
    <select id="res-time "
    value={state.time}
    onChange={handleTimeChange}
    >
       {options}
    </select>
    <label htmlFor="guests">Number of guests</label>
    <input type="number" placeholder="1" min="1" max="10" id="guests"
    value={state.guests}
    onChange={handleGuestsChange}
    />
    <label htmlFor="occasion">Occasion</label>
    <select id="occasion"
    value={state.occasion}
    onChange={handleOccasionChange}
    >
       <option>Birthday</option>
       <option>Anniversary</option>
    </select>
    <input type="submit" onClick={handleSubmit} value="Make Your reservation" />
 </form>
 </>
  )
}


  return (
    <>
    <BookingForm />
    </>
  )
  }