import React from 'react'
import style from "./DrivingAbout.module.css"
import about1 from "../../Assests/uiw_safety.png"
import about2 from "../../Assests/briefcase.png"
import about3 from "../../Assests/headphone.png"
import about4 from "../../Assests/chart.png"
import about5 from "../../Assests/caralone.png"
import about6 from "../../Assests/carsafety.png"


const DrivingAbout = () => {
  return (
    <div className={style.container}>
    <div className={style.cflex}>
       <div className={style.heading}>
        <h3>DAMILOLA</h3>
        <p>Mayframe operates a leading driving academy that aims to provide comprehensive and professional driver training. Whether it's for beginners or experienced drivers looking to enhance their skills, the academy offers a structured curriculum and qualified instructors to ensure safe and confident driving. The driving academy covers both theoretical knowledge and practical training, equipping individuals with the necessary skills to navigate the roads with responsibility.</p>
        </div>

        <div className={style.flexer1}>
        <div className={style.fline0}>
        <div className={style.nil}>
            <img src={about1} alt='AboutImage'/> <h4>Safety</h4>
            </div>
            <p>We teach our students how to drive responsibly, follow traffic rules, and minimize risks on road.</p>
            </div>
        
        <div className={style.fline1}>    
        <div className={style.nil}>
        <img src={about2} alt='AboutImage'/> <h4>Professionalism</h4>
        </div>
        <p>We maintain high level of professionalism in all aspect of our operations.</p>

        </div>
        </div>

        <div className={style.flexer2}>
        <div className={style.fline2}>
        <div className={style.nil}>
        <img src={about3} alt='AboutImage'/> <h4>Customer Service</h4>
        </div>

        <p>We aim to be responsive, attentive, and accommodating to the needs and concerns of students and their families.</p>

        </div>
        <div className={style.fline3}>
        <div className={style.nil4}>
            <img src={about4} alt='AboutImage'/> <h4>Continuous Improvement</h4>
            </div>
            <p>We stay updated with the latest traffic laws and regulations, incorporate new technologies, and seek feedback to enhance the learning experience.</p>

        </div>
        </div>
        
    


    </div>


    <div className={style.cflex2}>
        <div className={style.p1}>
        <img src={about5} alt='AboutImage'/>
        </div>
        <div className={style.p2}>
        <img src={about6} alt='AboutImage'/>
        </div>

    </div>
    </div>
  )
}

export default DrivingAbout