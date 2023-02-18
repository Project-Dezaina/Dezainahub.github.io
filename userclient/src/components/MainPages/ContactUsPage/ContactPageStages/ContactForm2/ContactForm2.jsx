import React, { useContext } from "react";
import "./ContactForm2.css";
import { multiStepContactContext } from "../../ContactUsPage";

const ContactForm2 = () => {
    const {setStep, currentStep} = useContext(multiStepContactContext);
    return (
        <div className="ContactFormContainer container">
            <form action="">
              <div className="contactforminputboxBody">
                <div className="contactforminputbox">
                  <label htmlFor="">Website URL (if any) </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="URL"
                  ></input>
                </div>
                <div className="contactforminputbox">
                  <label htmlFor="">Mobile Number</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Mobile Number"
                  ></input>
                </div>
                <div className="contactforminputbox">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Email"
                  ></input>
                  <label htmlFor="">Select Slot</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Select Slot"
                  ></input>
                  </div>
                <div className="FormButton">
                <button onClick={()=>{
                    setStep(1)
                  }}>Edit Details</button>
                  <button onClick={()=>{
                    setStep(3)
                  }}> Next</button>
                  
                </div>
              </div>
            </form>
        </div>
    )
}

export default ContactForm2;