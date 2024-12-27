import React from 'react'
import Hero from "../../Components/PropertyHero/PropertyHero"
import About from "../../Components/PropertyAbout/PropertyAbout"
import Testimonials from "../../Components/Testimonials/Testimonials"
import Business from "../../Components/Business/Business"


const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Business/>
        <Testimonials/>
        
    </div>
  )
}

export default Home