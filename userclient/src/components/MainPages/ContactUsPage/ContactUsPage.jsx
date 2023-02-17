import React, { useState } from "react";
import Header from "../../pages/navbar/Navbar";
import NewFooter from "../../pages/NewFooter/Footer";
import ContactUSContext from "./ContactUsContext/ContactUSContext";
import "./ContactUsPage.css";


export const multiStepContactContext = React.createContext();

const ContactUsPage = () => {
  const [currentStep, setStep] = useState(1);
  return (
    <div>
      <Header />
      <div className="ContactUsContainer ">
        <div className="ContactBio">
          <h3>Contact</h3>
   
          <h2>Looking To Find And Heir Great <span>Designers?</span></h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, omnis
            id. Iure maiores iste perspiciatis dolorem tempora itaque aperiam
            impedit!
          </p>
        </div>
        <div className="ContactForm">
          {/* <div className="ContactFormContainer container"> */}
            {/* <form action="">
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
                  <button> Next</button>
                </div>
              </div>
            </form> */}
            {/* <form action="">
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
                    setStep(2)
                  }}> Next</button>
                  
                </div>
              </div>
            </form> */}
          {/* </div> */}
            <multiStepContactContext.Provider 
      value={{currentStep, setStep}}>
        <ContactUSContext/>
      </multiStepContactContext.Provider>
        </div>
      </div>

      <NewFooter />
    </div>
  );
};

export default ContactUsPage;
