import "./LoginSignupPage.css";
import React, {useState} from 'react';
import PageLayout from "./PageLayout/PageLayout";



export const multiStepContext = React.createContext();

const LoginSignupPage = () => {
    const [currentStep, setStep] = useState(1);
  return (
    <div>
      <multiStepContext.Provider 
      value={{currentStep, setStep}}>
        <PageLayout/>
      </multiStepContext.Provider>
    </div>
  )
}

export default LoginSignupPage