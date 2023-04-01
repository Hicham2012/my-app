import React from 'react'
import './styles/Main.css'

export default function Main() {
  return (
    <main>
      <section className='hero'>
        <div className='hero-det'>
          <h1>Little Lemon</h1>
          <h4>Chicago</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button>Reserve a Table</button>
        </div>
        <div className='hero-img'></div>
      </section>
      <section className='highlights'></section>
      <section className='testimonials'></section>
      <section className='about'></section>
    </main>
  )
}