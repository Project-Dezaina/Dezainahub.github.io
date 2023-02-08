import React from 'react'
import { useState } from 'react'
import ContactUsPage from '../ContactUsPage';
export const multistep = React.createContext();
const ContactUSContext = () => {
    const [currentStep,setStep]=useState(1);
    
  return (
    <div>
    <multistep.Provider
    value={{currentStep,setStep}}
    >
    <ContactUsPage/>
    </multistep.Provider>
    </div>
  )
}

export default ContactUSContext
