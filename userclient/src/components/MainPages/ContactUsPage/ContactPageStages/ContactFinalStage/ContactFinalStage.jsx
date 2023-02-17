import React, { useContext } from "react";
import "./ContactFinalStage.css";
import { multiStepContactContext } from "../../ContactUsPage";

const ContactFinalStage = () => {
    
    const {setStep, currentStep} = useContext(multiStepContactContext);
    return (
        <div>
            <h1>Congratulations</h1>
        </div>
    )
}

export default ContactFinalStage;