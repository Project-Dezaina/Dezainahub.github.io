import React, { useContext } from "react";
import "./MissionStage.css"
import { multiStepContext } from "../MissionVission";

const MissionStage = () => {
    const {setStep, currentStep} = useContext(multiStepContext);
    const MissionButton = () => {
        return  setStep(1)
    }
    
    return (
        <div className="Mission">
          <div className="BoxContent">
            <h1>Everything your business</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
          </div>
          
        </div>
    )
}

export default MissionStage;