import React, { useContext } from "react";
import { multiStepContext } from "../LoginSignupPage";
import "./VerificationPage.css";

const VerificationPage = () => {
  const { setStep, currentStep } = useContext(multiStepContext);
  return (
    <div className="VerificationPageContainer">
      <div className="FormLayoutOuter">
        <div className="FormLayout">
          <div>
            <h2>Verify your mobile</h2>
            <h6>Creating Account...</h6>
          </div>
          <form className="Form-Details">
            {/* <input placeholder="Name"></input> */}
            <input placeholder="Contact Number"></input>
            <input placeholder="OTP Verification"></input>
          </form>
          <div className="LoginButtons">
            <button className="Button-Proceed" type="Submit">
              Verify
            </button>
            <button type="Submit" onClick={() => setStep(1)}>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.37375 5.18896L3.0625 10.5002L8.37375 15.8115M17.9375 10.5002H3.21125"
                  stroke="#2F455C"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Edit Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
