import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import './styles/Header.css'
import hamburger from './pics/hamburger.svg'
import closeHum from './pics/hum-close.svg'
 export default function Header() {
  const [open, setOpen] = useState(true)
  // alert(open)
  return (
    <>
    <nav className='nav-1'>
    <header></header>
      <ul>
        <li>
          <Link to="/" className='link' >Home</Link>
        </li>
        <li>
          <Link to="#" className='link'>About</Link>
        </li>
        <li>
          <Link to="/Menu" className='link'>Menu</Link>
        </li>
        <li>
          <Link to="/Reservation" className='link'>Reservations</Link>
        </li>
        <li>
          <Link to="/Orderonline" className='link'>Order online</Link>
        </li>
        <li>
          <Link to="#" className='link'>Login</Link>
        </li>
      </ul>
    </nav>
    <nav className='nav-2'>
    <header></header>
      <img src={!open ? hamburger : closeHum} alt="humbergur" onClick={() => setOpen(prevOpen => !prevOpen)} />
      <div className='nav-content' style={{
        display: open ? 'flex' : 'none'
      }}>
        <ul>
          <li>
            <Link to="/" className='link' >Home</Link>
          </li>
          <li>
            <Link to="#" className='link'>About</Link>
          </li>
          <li>
            <Link to="/Menu" className='link'>Menu</Link>
          </li>
          <li>
            <Link to="/Orderonline" className='link'>Reservations</Link>
          </li>
          <li>
            <Link to="/Reservation" className='link'>Order online</Link>
          </li>
          <li>
            <Link to="#" className='link'>Login</Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
 }