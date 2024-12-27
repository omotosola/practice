import React from "react";
import style from "./Business.module.css";
import Consultancy from "../../Assests/consultancy.png";
import Investment from "../../Assests/plant.png";
import Property from "../../Assests/handhome.png";
import Farm from "../../Assests/sunset.png";
import Driving from "../../Assests/driveschool.png";
import {Link} from "react-router-dom";

const Business = () => {
  return (
    <div className={style.container}>
      <div className={style.topBiz}>
        <h5>WHAT WE DO</h5>
        <h3>
          We provide perfect solution to your business and personal growth
        </h3>
      </div>
      <div className={style.cardBiz}>
        <div className={style.cardWrap}>
          <div className={style.cardImage}>
            <img src={Consultancy} alt="Consultancy" />
            <div className={style.myText}>
              <h3>Mayframe Consultancy</h3>
              <p>
                Mayframe has a dedicated consultancy services division that
                assists businesses in various domains. The consultancy services
                cover a wide range of areas, including strategic planning,
                operations management, financial analysis, marketing strategies,
                and more. By leveraging industry expertise and employing a
                results-driven approach, the consultancy team at Mayframe Group
                helps businesses optimize their operations, overcome challenges,
                and achieve sustainable growth.
              </p>
             
              <h5>Learn more &#8594;</h5>
              
            </div>
          </div>
          <div className={style.cardImage}>
            <img src={Investment} alt="Investment" />
            <div className={style.myText}>
              <h3>Mayframe Investment</h3>
              <p>
                Mayframe provides investment services to individuals and
                businesses seeking financial growth and diversification. The
                company offers a range of investment opportunities across
                different sectors, including real estate, stocks, bonds, and
                emerging markets. With a diligent approach to risk management
                and a deep understanding of market dynamics, Mayframe Group
                guides its clients in making informed investment decisions that
                align with their goals and risk tolerance.
              </p>
              <h5>Learn more &#8594;</h5>
            </div>
          </div>
        </div>
        <div className={style.cardWrap}>
          <div className={style.cardImage}>
            <img src={Property} alt="Property" />
            <div className={style.myText}>
              <h3>Property Development</h3>
              <p>
                Mayframe is actively involved in the real estate sector,
                offering a comprehensive range of property services. This
                includes property development, sales, leasing, and property
                management. The company identifies promising real estate
                opportunities, develops residential and commercial properties,
                and offers flexible leasing options to suit the needs of tenants
              </p>
              <h5>Learn more &#8594;</h5>
            </div>
          </div>
          <div className={style.cardImage}>
            <img src={Farm} alt="Farm" />
            <div className={style.myText}>
              <h3>Farms & Agro-Allied</h3>
              <p>
                With a focus on agriculture and farming, Mayframe has
                established a strong presence in the agro-industry. The company
                owns and manages a portfolio of farms that cultivate a variety
                of crops and engage in livestock rearing. By implementing modern
                farming techniques, sustainable practices, and leveraging
                technology.
              </p>
              <h5>Learn more &#8594;</h5>
            </div>
          </div>
          <div className={style.cardImage}>
            <img src={Driving} alt="Driving" />
            <div className={style.myText}>
              <h3>Driving Academy</h3>
              <p>
                Mayframe operates a leading driving academy that aims to provide
                comprehensive and professional driver training. Whether it's for
                beginners or experienced drivers looking to enhance their
                skills, the academy offers a structured curriculum and qualified
                instructors to ensure safe and confident driving..
              </p>
              <Link to ="/driving">
              <h5>Learn more &#8594;</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
