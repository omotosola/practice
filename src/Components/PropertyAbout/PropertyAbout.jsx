import React from 'react'
import style from "./PropertyAbout.module.css"
import about1 from "../../Assests/crane.png"
import about2 from "../../Assests/groupworking.png"

const PropertyAbout = () => {
  return (
    <div className={style.container}>
        <div className={style.aboutText}>
        <h5>About us</h5>
        <h3>Mayframe Property Development LTD</h3>
        <p>Mayframe is actively involved in the real estate sector, offering a comprehensive range of property services. This includes property development, sales, leasing, and property management. The company identifies promising real estate opportunities, and offers flexible leasing options to suit the needs of tenants. The property management services ensure efficient operations, maintenance, and tenant satisfaction, thereby maximizing the value of the properties under their care.</p>
        </div>
        
        <div className={style.aboutImage}>
        <div className={style.pic}>
              <img src={about1} alt='AboutImage'/> 

         </div>
        <div className={style.pic}>
        <img src={about2} alt='AboutImage'/> 
            

        </div>

        </div>
        
    </div>
  )
}

export default PropertyAbout