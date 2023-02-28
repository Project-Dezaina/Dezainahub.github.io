import React, { useState } from "react";
import Header from "../../pages/navbar/Navbar";
import NewFooter from "../../pages/NewFooter/Footer";
import "./YourCartPage.css";
import YourCartStages from "./YourCartStages/YourCartStages";
import { useAuth0 } from "@auth0/auth0-react";

export const multiStepContactContext = React.createContext();

const YourCartPage = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const [currentStep, setStep] = useState(1);

  return (
    <div>
      {/* <Header /> */}
      <div className="YourCartMainPage">
        {isAuthenticated ? (
          <multiStepContactContext.Provider value={{ currentStep, setStep }}>
            <YourCartStages />
          </multiStepContactContext.Provider>
        ) : (
          <div className="container">
          <div className="NotLoggedInCart">
          <div className="NotLoggedInCartHead "><h6>You need to Log in first</h6></div>
          <div className="NotLoggedInCartBody">
            <h1>Please Login, To see your cart !... </h1>
            <div className="Non-Login-Button">
              <button
                className="Login-Cart-Button"
                onClick={() => loginWithRedirect()}
              >
                <span>Log In</span>
              </button>
            </div>
            </div>
          </div>
          </div>
        )}

        {/* <multiStepContactContext.Provider 
      value={{currentStep, setStep}}>
        <YourCartStages/>
      </multiStepContactContext.Provider> */}
      </div>
      {/* <NewFooter /> */}
    </div>
  );
};

export default YourCartPage;
