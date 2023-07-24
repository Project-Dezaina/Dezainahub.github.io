// import React from "react";
import React, {useState} from 'react';
import "./MissionVission.css";
import MissionVissionStage from './MissionVissionStage/MissionVissionStage';

export const multiStepContext = React.createContext();

const MissionVission = () => {
    const [currentStep, setStep] = useState(1);
  
    return (
        <div className='MainMissionVission'>
        <div className='container' data-aos="fade-up">
        <h1 className='MissionVisionHead'>Mission & Vision</h1>
          <multiStepContext.Provider 
      value={{currentStep, setStep}}>
        <MissionVissionStage/>
      </multiStepContext.Provider>
        </div>
        </div>
    )
}

export default MissionVission;