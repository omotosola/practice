import React, {useState} from 'react'
import style from "./Header.module.css"
import logo from "../../Assests/logo.png"
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";


const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
  
    const handleNavToggle = () => {
      setNavOpen(!navOpen);
    };
  
    const handleNavLinkClick = () => {
      setNavOpen(false);
    };




    
  return (
    <div className={style.container}>
        <header>
            <div className={style.logo}>
                < a href ="/">
                <img src={logo} alt="logo" />
                </a>
            </div>
            <nav className={style.navMenu}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/service">Services</a></li>
                    <li><a href="/contact">Contact us</a></li>
                    <li><a href="/driving">Driving</a></li>
                    
                </ul>
            </nav>


            <div className={style.hamburger} onClick={handleNavToggle}>
          {!navOpen ? (
            <IoMdMenu className={style.Icons} />
          ) : (
            <IoMdClose className={style.Icons} />
          )}
        </div>




        <div className={ navOpen? style.active : style.mobileMenu }>
            <nav className ={style.mobileNav}>
                <ul>
                    <li><a href="/" onClick={handleNavLinkClick}>Home</a></li>
                    <li><a href="/about" onClick={handleNavLinkClick}>About Us</a></li>
                    <li><a href="/service" onClick={handleNavLinkClick}>Services</a></li>
                    <li><a href="/contact" onClick={handleNavLinkClick}>Contact us</a></li>
                    
                </ul>
            </nav>
        </div>


        </header>
        
    </div>
  )
}

export default Header