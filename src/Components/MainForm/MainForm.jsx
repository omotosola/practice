import React, {useRef, useState} from 'react';
import style from "./MainForm.module.css"
import emailjs from '@emailjs/browser'

const Response=() => {
  return(
    <p> Your message has been sent successfully</p>
  );
}


const MainForm = () => {
  const [response, showResponse] = useState (false, true)
  const form = useRef()
  const sendEmail = (e) => {e.preventDefault();
  
    emailjs.sendForm("service_7bq5x3f", "template_egdjqcc", form.current, "o5OkwkvSjZc2bYSad")
    .then(
      (response) => {
        console.log(response.text);
        console.log("Your message has been sent successfuly.")
      },
    (error) => {
      console.log(error.text);
      console.log("Message not sent")
    }
    );

    form.current.reset();
    showResponse(true);
  };
  setTimeout(() => { showResponse(false); }, 5000);
return(
  <div className={style.container}>

    <div className={style.secondCon}>
      <div className={style.topWord}>
        <h3>Science Afterschool Program Registration Form</h3>
      </div>
      <form ref={form} onSubmit={sendEmail} >
        <div className={style.firstflex}>
          <div className={style.oneflex}>
            <h4>Student Name</h4>
            <input type="text" name="Full_name" placeholder=" First" /><br />
          </div>

          <div className={style.secondflex}>
            <input type="text" name="Full_name" placeholder="Last" /><br />
          </div>

        </div>


        <div className={style.newflex}>
          <div className={style.newoneflex}>
            <h4>Grade</h4>
            <input type="text" name="Full_name" placeholder=" First" /><br />
          </div>

          <div className={style.newtwoflex}>
            <h4>Teacher</h4>
            <input type="text" name="Full_name" placeholder="Last" /><br />
          </div>

        </div>


        <div className={style.firstflex}>
          <div className={style.oneflex}>
            <h4>Guardian Name</h4>
            <input type="text" name="Full_name" placeholder=" First" /><br />
          </div>

          <div className={style.secondflex}>
            <input type="text" name="Full_name" placeholder="Last" /><br />
          </div>

        </div>

        <div className={style.choke1}>
          <h4>Phone Number</h4>
          <input type="text" name="Full_name" placeholder=" ### ### ####" /><br />
        </div>


        <div className={style.choke2}>
          <h4>List all allergies, food restrictions, and anything special about your child we should know. If none, leave as N/A.</h4>
          <input type="text" name="Full_name" placeholder="" /><br />
        </div>


        <div className={style.terms}>
          <h4>Terms<span>*</span></h4> <br/>
         <div className={style.terms2}>
         <input type="checkbox" required/>  
          <h4>I agree to the <span>terms and conditions</span>.</h4>
          </div>
        </div>

        <div className={style.button2}>
          <button>REGISTER</button>

        </div>
        <div className={style.row}>{response ? <Response /> : null } </div>
      </form>


    </div>
  </div>
)
}

export default MainForm