// import React from "react";
import React, {useState} from 'react';
import "./MissionVission.css";
import MissionVissionStage from './MissionVissionStage/MissionVissionStage';

export const multiStepContext = React.createContext();

const MissionVission = () => {
    const [currentStep, setStep] = useState(1);
  
    return (
        <div >
          <multiStepContext.Provider 
      value={{currentStep, setStep}}>
        <MissionVissionStage/>
      </multiStepContext.Provider>
        </div>
    )
}

export default MissionVission;