import React, { useState } from "react";
import Header from "../../pages/navbar/Navbar";
import NewFooter from "../../pages/NewFooter/Footer";
import ContactContent from "./ContactContent/ContactContent";
import ContactUSContext from "./ContactUsContext/ContactUSContext";
import "./ContactUsPage.css";


export const multiStepContactContext = React.createContext();

const ContactUsPage = () => {
  const [currentStep, setStep] = useState(1);
  return (
    <div>
      <Header />
      <div className="ContactUsContainer ">
        <ContactContent/>
        <div className="ContactForm">
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
