import React from 'react'
import Style from "./PropertyHero.module.css"

const PropertyHero = () => {
  return (
    <div className={Style.container}>
        <div className={Style.innerContainer}>
            <h2>Where Imagination Transforms into Extraordinary Building</h2>
            <div className={Style.btnFlex}>
              <div className={Style.flex}>
                <button>Make Enquiry</button>
                </div>
                <p>Unleash your creativity with us and witness the remarkable transformation of your visions into breathtaking reality.

                </p>
            </div>
        </div>
        
          <div className={Style.heroDown}>
            <div className={Style.project}>
              <h1>345</h1>
              <p>Projects</p>
            </div>
            <div className={Style.project}>
              <h1>101</h1>
              <p>Happy Clients</p>
            </div>
            <div className={Style.project}>
              <h1>124+</h1>
              <p>Total Constructions</p>
            </div>


          </div>
        
           
    </div>
  )
}

export default PropertyHero