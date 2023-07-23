import React, { useContext } from "react";
import "./VissionStage.css"
import { multiStepContext } from "../MissionVission";

const VissionStage = () => {
    const {setStep, currentStep} = useContext(multiStepContext);
    
    return (
        <div className="Vission">
          {/* <div className="BoxHead">Vission</div> */}
          <div className="BoxContent">
          <h6>Design adds value faster than it adds cost.</h6>
            <h1>At Dezaina.hub, we know that your time is valuable, and we value it as much as you do. </h1>
            <p>
            Embrace creativity and innovation to craft unique and visually stunning web page designs that stand out from the competition. 
            </p>
          </div>
        </div>
    )
}

export default VissionStage;