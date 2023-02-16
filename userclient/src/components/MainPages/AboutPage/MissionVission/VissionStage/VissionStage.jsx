import React, { useContext } from "react";
import "./VissionStage.css"
import { multiStepContext } from "../MissionVission";

const VissionStage = () => {
    const {setStep, currentStep} = useContext(multiStepContext);
    
    return (
        <div className="Vission">
          {/* <div className="BoxHead">Vission</div> */}
          <div className="BoxContent">
            <h1>Everything you need to grow your business</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
          </div>
        </div>
    )
}

export default VissionStage;