import React from 'react'
import './styles/Home.css'
import GreekSalad from '../component/pics/greeksalad.jpg'
import Bruchetta from '../component/pics/bruchetta.svg'
import LemonDessert from '../component/pics/lemondessert.jpg'
import photo1 from '../component/pics/photo1.jpeg';
import photo2 from '../component/pics/photo2.jpeg';
import photo3 from '../component/pics/photo3.jpeg';
import photo4 from '../component/pics/photo4.jpg';
const highObj = {
 "Highlights": [
  {
    "id": 1,
    "image": `${GreekSalad}`,
    "title": "Greek salad",
    "price": 12.99,
    "describtion": "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
  },
  {
    "id": 2,
    "image": `${Bruchetta}`,
    "title": "Bruchetta",
    "price": 5.99,
    "describtion": "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
  },
  {
    "id": 3,
    "image": `${LemonDessert}`,
    "title": "Lemon Dessert",
    "price": 5.00,
    "describtion": "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
  },
],
  "Testimonials": [
    {
      "id": 1,
      "rating": "4.0/5",
      "photo": photo1,
      "name": "Mattew",
      "review": "Lorem ipsum so much amazing."
    },{
      "id": 2,
      "rating": "5/5",
      "photo": photo2,
      "name": "Doma",
      "review": "Wow, the best place I ever been at."
    },{
      "id": 3,
      "rating": "4.7/5",
      "photo": photo3,
      "name": "Echo",
      "review": "Amazing services, user-friendly website."
    },{
      "id": 4,
      "rating": "4.9/5",
      "photo": photo4,
      "name": "Hicham",
      "review": "The best out of the best when it comes to innovation."
    },
  ]
}


export default function Home() {
  let highlights = highObj.Highlights.map(x => {
    return (
      <div className="fullpart" key={x.id}>
        <div className='upperpart' style={{
          backgroundImage: `url(${x.image})`
        }}></div>
        <div className="lowerpart">
          <div className="title-price">
            <h1>{x.title}</h1>
            <h3>${x.price}</h3>
          </div>
          <div className='describtion'>
          <p>{x.describtion}</p>
          </div>
          <div className='order-part'>
          <span className='order'>Oder a delivery</span>
          </div>
        </div>
        {/* <h1>{x.title}</h1> */}
      </div>
    )
  })
  let testimonies = highObj.Testimonials.map(x => {
    return (
      <div key={x.id} className='test-cont'>
        <div className='test-score'>
          <p>{x.rating}</p>
        </div>
        <div className='test-img-name' >
          <img src={x.photo} alt={x.name} width={70} height={'100%'}/>
          <h3>{x.name}</h3>
        </div>
        <div className='test-rev'>
          <p>{x.review}</p>
        </div>
        <div></div>
      </div>
    )
  })
  return (
    <>
    <main>
      <section className='hero'>
        <div className='hero-cont'>
        <div className='hero-det'>
          <h1>Little Lemon</h1>
          <h4>Chicago</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button>Reserve a Table</button>
        </div>
        <div className='hero-img'>
          <div className="hero-img1"></div>
        </div>
        </div>
      </section>
      <section className='highlights'>
        <div className="high-cont">
        <div className="high-top">
          <h2>Specials</h2>
          <button>Online Menu</button>
        </div>
        <div className="high-bottom">
        <div className="bot-cont">
         <div className="test">
          {highlights}
         </div>
        </div>
        </div>
        </div>
      </section>
      <section className='testimonials'>
      <div className="uppart">
        <h2>Testimonials</h2>
      </div>
      <div className="botpart">
        {testimonies}
      </div>
      </section>
      <section className='about'>
        <div className="about-cont">
          <div className="about-det">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
          </div>
          <div className="about-img">
            <div className="img1"></div>
            <div className="img2"></div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}