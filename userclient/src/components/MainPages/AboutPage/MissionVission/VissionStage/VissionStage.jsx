import React, { useContext } from "react";
import "./VissionStage.css"
import { multiStepContext } from "../MissionVission";

const VissionStage = () => {
    const {setStep, currentStep} = useContext(multiStepContext);
    
    return (
        <div className="Vission">
          {/* <div className="BoxHead">Vission</div> */}
          <div className="BoxContent">
          <h6>Want Best Graphic Designers in Affordable Price? DONT WORRY</h6>
            <h1>You’re At The Right Place</h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever 
since the 1500s,
            </p>
          </div>
        </div>
    )
}

export default VissionStage;