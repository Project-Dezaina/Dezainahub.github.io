import React, { useContext } from "react";
import "./ContactFinalStage.css";
import { multiStepContactContext } from "../../ContactUsPage";
import Congrats from "../../Image/Congrats.gif";

const ContactFinalStage = () => {
    
    const {setStep, currentStep} = useContext(multiStepContactContext);
    return (
        <div className="FormFinalStage">
        <img src={Congrats}></img>
            {/* <h1>Congratulations</h1> */}
            <h4>Your Order is submitted</h4>
            <h6>Our <span>Designers Will Contact</span> You within 24hrs to discuss further about your project</h6>
        </div>
    )
}

export default ContactFinalStage;