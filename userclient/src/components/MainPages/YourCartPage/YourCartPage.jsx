import React, { useState } from "react";
import Header from "../../pages/navbar/Navbar";
import NewFooter from "../../pages/NewFooter/Footer";
import "./YourCartPage.css";
import YourCartStages from "./YourCartStages/YourCartStages";


export const multiStepContactContext = React.createContext();


const YourCartPage = () => {
  const [currentStep, setStep] = useState(1);

  return (
    <div>
      {/* <Header /> */}
      <div className="YourCartMainPage">
        
      <multiStepContactContext.Provider 
      value={{currentStep, setStep}}>
        <YourCartStages/>
      </multiStepContactContext.Provider>
      </div>
      {/* <NewFooter /> */}
    </div>
  );
};

export default YourCartPage;
