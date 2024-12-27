import React from 'react'
import style from "./Testimonials.module.css"
import Client from "../../Assests/person.png"
import Slider from "react-slick";

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768  ,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className={style.container}>
    <div className={style.top}>
        <h5>Testimonials</h5>
        <h2>What Our Students Says About Us</h2>

    </div>
    <div className={style.cards}>


    <Slider {...settings}>
       <div className={style.cardWrap}>
          <div className={style.card}>
          <div className={style.cardImage}>
            <img src={Client}alt ="Clients"/>
            </div>
                <h3>Tolu Oyeh</h3>
                <h4>Business Woman</h4>
                <p>Mayframe property development exceeded all my expectations when it comes to property development. Their attention to detail, exceptional craftsmanship, and unwavering commitment to quality are truly unmatched.</p>
           </div>
       </div>
       <div className={style.cardWrap}>
          <div className={style.card}>
          <div className={style.cardImage}>
            <img src={Client}alt ="Clients"/>
            </div>
                <h3>Tolu Oyeh</h3>
                <h4>Business Woman</h4>
                <p>Mayframe property development exceeded all my expectations when it comes to property development. Their attention to detail, exceptional craftsmanship, and unwavering commitment to quality are truly unmatched.</p>
           </div>
       </div>
       <div className={style.cardWrap}>
          <div className={style.card}>
          <div className={style.cardImage}>
            <img src={Client}alt ="Clients"/>
            </div>
                <h3>Tolu Oyeh</h3>
                <h4>Business Woman</h4>
                <p>Mayframe property development exceeded all my expectations when it comes to property development. Their attention to detail, exceptional craftsmanship, and unwavering commitment to quality are truly unmatched.</p>
           </div>
       </div>
       </Slider>


    </div>
    </div>
    

  )
}

export default AutoPlay;