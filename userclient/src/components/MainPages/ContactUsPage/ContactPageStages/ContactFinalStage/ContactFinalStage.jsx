import React, { useContext } from "react";
import "./ContactFinalStage.css";
import { multiStepContactContext } from "../../ContactUsPage";
import Congrats from "../../Image/Congrats.gif";

const ContactFinalStage = () => {
    
    const {setStep, currentStep} = useContext(multiStepContactContext);
    return (
        <div>
        <img src={Congrats}></img>
            {/* <h1>Congratulations</h1> */}
        </div>
    )
}

export default ContactFinalStage;