import React from 'react'
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Orderonline from './pages/Orderonline';
import Reservation from './pages/Reservation';

function App() {

  const [scrollPosition, setScrollPosition] = useState(0)
  useEffect(() => {
    let position =  window.innerHeight
    setScrollPosition(position)
  }, [scrollPosition])
  // console.log(scrollPosition)
  const ConfirmedBooking = () => {
    return (
      <h1>Booking confirmed!</h1>
    )
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path='/Reservation' element={<Reservation />}/>
          <Route path='/Orderonline' element={<Orderonline />}/>
          <Route path='/Confrimation' element={<ConfirmedBooking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
