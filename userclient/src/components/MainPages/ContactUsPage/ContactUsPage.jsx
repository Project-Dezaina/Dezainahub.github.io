import React, { useState } from "react";
import Header from "../../pages/navbar/Navbar";
import NewFooter from "../../pages/NewFooter/Footer";
import ContactContent from "./ContactContent/ContactContent";
import ContactUSContext from "./ContactUsContext/ContactUSContext";
import "./ContactUsPage.css";


export const multiStepContactContext = React.createContext();

const ContactUsPage = () => {


  let yname, value;
  const [contactdata, setContactData] = useState([]);
  // const handlecontactus = (e) => {
  //   console.log(e);
  //   yname = e.target.yname;
  //   value = e.target.value;
  //   setContactData({ ...yname, [yname]: value });
  // };
  const handleInputs = (e) => {
    console.log(e);
    yname = e.target.name;
    value = e.target.value;

    setContactData({ ...yname, [yname]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { yname, yemail, about } = contactdata;
    const res = await fetch("/contactUs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        yname,
        CompanyName,
        MessageBoxInput,
        WebURL,
        MobileNo,
        EmailId,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("invalid");
      console.log("invalid");
    } else {
      window.alert("valid");
      console.log("Send succesfully");
    }
  };



  const [currentStep, setStep] = useState(1);
  return (
    <div>
      {/* <Header /> */}
      <div className="ContactUsContainer ">
        <ContactContent/>
        <div className="ContactForm">
            <multiStepContactContext.Provider 
      value={{currentStep, setStep, contactdata, setContactData}}>
        <ContactUSContext/>
      </multiStepContactContext.Provider>
        </div>
      </div>

      {/* <NewFooter /> */}
    </div>
  );
};

export default ContactUsPage;
