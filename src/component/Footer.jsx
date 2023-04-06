import React from 'react'
import './styles/Footer.css'
import LittleLemon from './pics/little-lemon.jpg'

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="foot-picture">
          <div className='foot-picture-logo'></div>
        </div>
        <div className="foot-nav">
          <div className="foot-nav-cont">
            <div className='foot-nav-up'>
              <h3>Dormat</h3>
              <h3>Nav Navigation</h3>
            </div>
            <div className='foot-nav-down'>
              <p>Home</p>
              <p>About</p>
              <p>Menu</p>
              <p>Reservations</p>
              <p>Order Online</p>
              <p>Login</p>
            </div>
          </div>
        </div>
        <div className="foot-contact">
        <div className="foot-nav-cont">
            <div className='foot-nav-up'>
              <h3>Contact</h3>
              {/* <h3>Nav Navigation</h3> */}
            </div>
            <div className='foot-nav-down'>
              <p>Address</p>
              <p>phone number</p>
              <p>email</p>
            </div>
          </div>
        </div>
        <div className="foot-social">
        <div className="foot-nav-cont">
            <div className='foot-nav-up'>
              <h3>Social Media Links</h3>
            </div>
            <div className='foot-nav-down'>
              <p>Address</p>
              <p>phone number</p>
              <p>email</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}