import React from 'react'
import Hero from "../../Components/PropertyHero/PropertyHero"
import About from "../../Components/PropertyAbout/PropertyAbout"
import Testimonials from "../../Components/Testimonials/Testimonials"


const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Testimonials/>
    </div>
  )
}

export default Home