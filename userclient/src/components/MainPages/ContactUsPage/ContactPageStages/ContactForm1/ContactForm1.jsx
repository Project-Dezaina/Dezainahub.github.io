import React, { useContext } from "react";
import "./ContactForm1.css";
import { multiStepContactContext } from "../../ContactUsPage";
import { StyledEngineProvider } from "@mui/material/styles";

const ContactForm1 = () => {
  const { setStep, currentStep, contactdata, setContactData } = useContext(
    multiStepContactContext
  );

  const handleClickForm1 = () => {
    setStep(2);
  };

  return (
    <div className="ContactFormContainer container">
      <div className="contactforminputboxBody">
        <div className="contactforminputbox">
        {/* {JSON.stringify()} */}
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="Fname"
            required
            id="Fname"
            placeholder="Enter your name"
            value={contactdata["name"]}
            onChange={(e) => {
              setContactData({ ...contactdata, Fname: e.target.value });
            }}
          ></input>
        </div>
        <div className="contactforminputbox">
          <label htmlFor="">Company</label>
          <input
            type="text"
            name="CompanyName"
            required
            id="CompanyName"
            placeholder="Enter your Company name"
            value={contactdata["CompanyName"]}
            onChange={(e) => {
              setContactData({ ...contactdata, CompanyName: e.target.value });
            }}
          ></input>
        </div>
        <div className="contactforminputbox">
          <label htmlFor="">Message</label>
          <textarea
            name="MessageBoxInput"
            id="MessageBoxInput"
            cols="30"
            rows="10"
            placeholder="Message"
            value={contactdata["MessageBoxInput"]}
            onChange={(e) => {
              setContactData({
                ...contactdata,
                MessageBoxInput: e.target.value,
              });
            }}
          ></textarea>
        </div>
        <div className="FormButton">
          <button type="Submit" onClick={() => {
              setStep(2);
            }} >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm1;
