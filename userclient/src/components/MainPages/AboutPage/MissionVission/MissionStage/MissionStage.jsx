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
          <h6>Want Best Graphic Designers in Affordable Price? DONT WORRY</h6>
            <h1>Dezaina.hub was created to help businesses grow, influence, and become easily identifiable among every location.</h1>
            <p>
            Remember, effective web page design requires a balance between aesthetics and functionality.
            </p>
          </div>
          
        </div>
    )
}

export default MissionStage;