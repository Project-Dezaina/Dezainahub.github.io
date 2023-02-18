import React, { useContext } from "react";
import "./ContactForm1.css";
import { multiStepContactContext } from "../../ContactUsPage";

const ContactForm1 = () => {
    const {setStep, currentStep} = useContext(multiStepContactContext);

    const handleClickForm1 =()=> {
        setStep(2)
    }

    return (
        <div className="ContactFormContainer container">
            <form action="">
              <div className="contactforminputboxBody">
                <div className="contactforminputbox">
                  <label htmlFor="">Name</label>
                  <input type="text" name="" id="" placeholder="Enter your name" ></input>
                </div>
                <div className="contactforminputbox">
                  <label htmlFor="">Company</label>
                  <input type="text" name="" id="" placeholder="Enter your Company name"></input>
                </div>
                <div className="contactforminputbox">
                  <label htmlFor="">Message</label>
                  <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                </div>
                <div className="FormButton">
                  <button onClick={handleClickForm1}> Next</button>
                </div>
              </div>
            </form>
        </div>
    )
}

export default ContactForm1;