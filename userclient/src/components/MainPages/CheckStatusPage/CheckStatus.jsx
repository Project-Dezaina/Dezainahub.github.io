import React, {useState} from "react";
import Header from "../../pages/navbar/Navbar";
import NewFooter from "../../pages/NewFooter/Footer";
import "./CheckStatus.css";
import OrderContent from "./OrderContent/OrderContent";
import StatusStages from "./StatusStages/StatusStages";


export const multiStepContext = React.createContext();


const CheckStatus = () => {
  const [currentStep, setStep] = useState(1);
  return (
    <div>
      {/* <Header /> */}
      <div className="CheckStatusPageMain ">
        <div className="CheckStatus-container container">
          <div className="CheckStatusContent">
            <h1>Welcome Back</h1>
            <p>Check your order status</p>
          </div>
          {/* <div className="HeadingCards">
            <div className="CardHeads" id="ActiveCard">
              <div className="SubCard1">
                <h4>Total Orders</h4>
              </div>
              <div className="cardNum">
                <h1>24</h1>
              </div>
            </div>
            <div className="CardHeads">
              <div className="SubCard1">
                <h4>Active Orders</h4>
              </div>
              <div className="cardNum">
                <h1>4</h1>
              </div>
            </div>
            <div className="CardHeads">
              <div className="SubCard1">
                <h4>Completed Orders</h4>
              </div>
              <div className="cardNum">
                <h1>20</h1>
              </div>
            </div>
          </div> */}
          {/* <StatusStages/> */}
          
          <multiStepContext.Provider 
      value={{currentStep, setStep}}>
        <StatusStages/>
      </multiStepContext.Provider>
      {/* <OrderContent/> */}
        </div>
      </div>

      {/* <NewFooter /> */}
    </div>
  );
};

export default CheckStatus;
