import React, { useContext } from 'react';
import { useState } from 'react';

import { StyledEngineProvider } from '@mui/material/styles';
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



  let Fname, value;
  const [contactdata, setContactData] = useState([]);
  // const handlecontactus = (e) => {
  //   console.log(e);
  //   yname = e.target.yname;
  //   value = e.target.value;
  //   setContactData({ ...yname, [yname]: value });
  // };
  const handleInputs = (e) => {
    console.log(e);
    Fname = e.target.name;
    value = e.target.value;

    setContactData({ ...Fname, [Fname]: value });
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
