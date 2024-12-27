import React from 'react'
import Hero from "../../Components/Driving/Driving"
import About from "../../Components/DrivingAbout/DrivingAbout"
import DriveForm from "../../Components/AgroForm/AgroForm"
import MainForm from "../../Components/MainForm/MainForm"

const Driving = () => {
  return (
    <div>
       <Hero/>
       <About/>
       <DriveForm/>
       <MainForm/>
    </div>
  )
}

export default Driving