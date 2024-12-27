import React, {useEffect} from "react";
import Style from "./Footer.module.css";
import Logo from "../../Assests/logo.png";
import Locate from "../../Assests/location.png";
import Call from "../../Assests/call.png";
import Whatsapp from "../../Assests/whatsapp.png";
import Twitter from "../../Assests/twitter.png";
import Instagram from "../../Assests/instagram.png";
import In from "../../Assests/in.png";
import Facebook from "../../Assests/facebook.png";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";


const Footer = () => {

      useEffect( () => {
        window.scrollTo({ top:0, left: 0, behaviour: "smooth"});
},[]);
  return (
    <div className={Style.container}>
      <footer>
        <div className={Style.logoSide}>
          <div className={Style.footLogo}>
            <img src={Logo} alt="FooterLogo" />
            </div>
            <p><span>We are all about empowering growth and transforming industries</span></p>
            <div className={Style.info}>
              <div className={Style.location}>
                <div className={Style.locationImage}>
                  <img src={Locate} alt="Location" />
                </div>
                <div className={Style.locationText}>
                  <p>Osun State, Nigeria</p>
                </div>
              </div>

              <div className={Style.location}>
                <div className={Style.callImage}>
                  <img src={Call} alt="Call" />
                </div>
                <div className={Style.callText}>
                  <p>09050507071</p>
                </div>
              </div>

              <div className={Style.location}>
                <div className={Style.whatsappImage}>
                  <img src={Whatsapp} alt="Whatsapp" />
                </div>
                <div className={Style.whatsappText}>
                  <p>08066758355</p>
                </div>
              </div>
          </div>
        </div>

        <div className={Style.footSide}>
          <div className={Style.quick}>
            <h3>Quick Links</h3>
            <p>Home</p>
            <p>Services</p>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>

          <div className={Style.quick}>
            <h3>Follow Us</h3>

            <div className={Style.socials}>
              <div className={Style.quickImage}>
                <img src={Twitter} alt="Twitter" />
              </div>
              <div className={Style.quickImage}>
                <img src={Instagram} alt="Instagram" />
              </div>
              <div className={Style.quickImage}>
                <img src={In} alt="in" />
              </div>
              <div className={Style.quickImage}>
                <img src={Facebook} alt="Facebook" />
              </div>
            </div>
          </div>

          <div className={Style.quick}>
            <h3>Email</h3>
            <p>consulting@mayframe-group.com</p>
          </div>
        </div>
<div className ={Style.scrollUp} onClick={()=> {
  window.scrollTo({ top:0, left: 0, behaviour: "smooth"});
}}
>
  <BsFillArrowUpCircleFill className={Style.iconscroll}/>
</div>



<div className={Style.whatsapp}>
     <a href="https://wa.me/2348107667623">
      <FaWhatsappSquare className={Style.whatsappicon}/>
     </a>
    </div>

      </footer>
    </div>
  );
};

export default Footer;
