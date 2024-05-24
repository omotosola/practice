import React from 'react'
import style from "./Header.module.css"
import logo from "../../Assests/logo.png"

const Header = () => {
  return (
    <div className={style.container}>
        <header>
            <div className={style.logo}>
                < a href ="/">
                <img src={logo} alt="logo" />
                </a>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/service">Services</a></li>
                    <li><a href="/contact">Contact us</a></li>
                    <li><a href="/driving">Driving</a></li>
                    
                </ul>
            </nav>
        </header>
        
    </div>
  )
}

export default Header