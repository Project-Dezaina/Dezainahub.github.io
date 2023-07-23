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
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="yname"
            required
            id=""
            placeholder="Enter your name"
            value={contactdata["name"]}
            onChange={(e) => {
              setContactData({ ...contactdata, yname: e.target.value });
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
            value={contactdata["name"]}
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
            value={contactdata["name"]}
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
