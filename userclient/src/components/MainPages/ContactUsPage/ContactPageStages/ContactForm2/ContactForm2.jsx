import React, { useContext } from "react";
import "./ContactForm2.css";
import { multiStepContactContext } from "../../ContactUsPage";

const ContactForm2 = () => {
    const {setStep, currentStep,contactdata, setContactData,PostData} = useContext(multiStepContactContext);
    return (
        <div className="ContactFormContainer container">
         
              <div className="contactforminputboxBody">
                <div className="contactforminputbox">
                  <label htmlFor="">Website URL (if any) </label>
                  <input
                    type="text"
                    name="WebURL"
                    id="WebURL"
                    placeholder="URL"
                    value={contactdata["name"]}
            onChange={(e) => {
              setContactData({ ...contactdata, WebURL: e.target.value });
            }}
                  ></input>
                </div>
                <div className="contactforminputbox">
                  <label htmlFor="">Mobile Number</label>
                  <input
                    type="text"
                    name="MobileNo"
                    id="MobileNo"
                    placeholder="Mobile Number"
                    value={contactdata["name"]}
            onChange={(e) => {
              setContactData({ ...contactdata, MobileNo: e.target.value });
            }}
                  ></input>
                </div>
                <div className="contactforminputbox">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    name="EmailId"
                    id="EmailId"
                    placeholder="Email"
                    value={contactdata["name"]}
            onChange={(e) => {
              setContactData({ ...contactdata, EmailId: e.target.value });
            }}
                  ></input>
                  {/* <label htmlFor="">Select Slot</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Select Slot"
                    value={contactdata["name"]}
            onChange={(e) => {
              setContactData({ ...contactdata, name: e.target.value });
            }}
                  ></input> */}
                  </div>
                <div className="FormButton">
                <button onClick={()=>{
                    setStep(1)
                  }}>Edit Details</button>
                  <button onClick={
                    PostData
                  }> Submit</button>
                  
                </div>
              </div>
           
        </div>
    )
}

export default ContactForm2;