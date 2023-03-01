import React, { useState } from "react";
import Header from "../../pages/navbar/Navbar";
import NewFooter from "../../pages/NewFooter/Footer";
import ContactContent from "./ContactContent/ContactContent";
import ContactUSContext from "./ContactUsContext/ContactUSContext";
import "./ContactUsPage.css";


export const multiStepContactContext = React.createContext();

const ContactUsPage = () => {

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
        yemail,
        about,
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
 



  const [currentStep, setStep] = useState(1);
  return (
    <div>
      {/* <Header /> */}
      <div className="ContactUsContainer " data-aos="fade-up">
        <ContactContent/>
        <div className="ContactForm">
            <multiStepContactContext.Provider 
      value={{currentStep, setStep, contactdata, setContactData,PostData}}>
        <ContactUSContext/>
      </multiStepContactContext.Provider>
        </div>
      </div>

      {/* <NewFooter /> */}
    </div>
  );
};

export default ContactUsPage;
