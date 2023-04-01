import React from 'react'
import { Link } from "react-router-dom"
import './styles/Header.css'
 export default function Header() {
  return (
    <nav>
    <header>

    </header>
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
    </nav>
  )
 }