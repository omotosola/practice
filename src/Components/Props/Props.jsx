import React from 'react'
import Style from "./Props.module.css"

const Props = (props) => {
  return (
    <div className={Style.container}>
        <div className={Style.innerContainer}>
            <h2>{props.head}</h2>
            <div className={Style.btnFlex}>
              <div className={Style.flex}>
                <button>{props.click}</button>
                </div>
                <p>{props.content}
                </p>
            </div>
        </div>
        
          <div className={Style.heroDown}>
            <div className={Style.project}>
              <h1>{props.number1}</h1>
              <p>{props.para1}</p>
            </div>
            <div className={Style.project}>
              <h1>{props.number2}</h1>
              <p>{props.para2}</p>
            </div>
            <div className={Style.project}>
              <h1>{props.number3}</h1>
              <p>{props.para3}</p>
            </div>


          </div>
        
           
    </div>
  )
}

export default Props