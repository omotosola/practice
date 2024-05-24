import React from 'react'
import style from "./Testimonials.module.css"
import Client from "../../Assests/person.png"

const Testimonials = () => {
  return (
    <div className={style.container}>
    <div className={style.top}>
        <h5>Testimonials</h5>
        <h2>What Our Students Says About Us</h2>

    </div>
    <div className={style.cards}>
       <div className={style.cardWrap}>
          <div className={style.card}>
          <div className={style.cardImage}>
            <img src={Client}alt ="Clients"/>
            <div/>
                <h3>Tolu Oyeh</h3>
                <h4>Business Woman</h4>
                <p>Mayframe property development exceeded all my expectations when it comes to property development. Their attention to detail, exceptional craftsmanship, and unwavering commitment to quality are truly unmatched.</p>

           </div>
       </div>
    </div>
    </div>
    </div>

  )
}

export default Testimonials