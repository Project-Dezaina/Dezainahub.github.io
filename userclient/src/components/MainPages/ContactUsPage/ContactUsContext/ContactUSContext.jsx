import React, { useContext } from 'react';
import { useState } from 'react';

import { multiStepContactContext } from "../ContactUsPage";
import ContactForm1 from '../ContactPageStages/ContactForm1/ContactForm1';
import ContactForm2 from '../ContactPageStages/ContactForm2/ContactForm2';
import ContactFinalStage from '../ContactPageStages/ContactFinalStage/ContactFinalStage';


const ContactUSContext = () => {

  const {setStep, currentStep} = useContext(multiStepContactContext);
  const Showstep = (step)=>{
    switch (step) {
      case 1:
        return <ContactForm1/>;
      case 2:
        return <ContactForm2/>;
      case 3:
          return <ContactFinalStage/>;
    }
  }



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
  return (
    <div>
    <form method='POST'>
    {Showstep(currentStep)};
    </form>
    </div>
  )
}

export default ContactUSContext
