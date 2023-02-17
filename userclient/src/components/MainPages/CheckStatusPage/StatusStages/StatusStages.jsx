import React, { useContext, useState } from "react";
import "./StatusStages.css";
import { multiStepContext } from "../CheckStatus";
import OrderContent from "../OrderContent/OrderContent";
import ActiveOrderContent from "../ActiveOrderContent/ActiveOrderContent";
import CompletedOrderContent from "../CompletedOrderContent/CompletedOrderContent";

const StatusStages = () => {
    
  const {setStep, currentStep} = useContext(multiStepContext);
  const Showstep = (step)=>{
    switch (step) {
      case 1:
        return <OrderContent/>;
      case 2:
        return <ActiveOrderContent/>;
      case 3:
          return <CompletedOrderContent/>;
    }
  }

  const TotalOrderStage =()=>{
    setStep(1)
    // currentStep===1 ? 
    // console.log(currentStep)
  }
  const ActiveOrderStage =()=>{
    setStep(2)
    // console.log(currentStep)
  }
  const CompletedOrderStage =()=>{
    setStep(3)
    // console.log(currentStep)
  }
  const EnableActiveCard = () => {
    // String ActiveCardActivation = "ActiveCard"
    if (currentStep===1) {
        return "ActiveCard"
    }
  }
  const SecondEnableActiveCard = () => {
    if (currentStep===2) {
        return "ActiveCard"
    }
  }
  const ThirdEnableActiveCard = () => {
    if (currentStep===3) {
        return "ActiveCard"
    }
  }

    return (
        <div>
        <div className="HeadingCards">
            <div className="CardHeads" id={currentStep===1 ? "ActiveCard" : "None"} onClick={TotalOrderStage}>
              <div className="SubCard1" >
                <h4>Total Orders</h4>
              </div>
              <div className="cardNum">
                <h1>24</h1>
              </div>
            </div>
            <div className="CardHeads" id={currentStep===2 ? "ActiveCard" : "None"} onClick={ActiveOrderStage}>
              <div className="SubCard1" >
                <h4>Active Orders</h4>
              </div>
              <div className="cardNum">
                <h1>4</h1>
              </div>
            </div>
            <div className="CardHeads" id={currentStep===3 ? "ActiveCard" : "None"} onClick={CompletedOrderStage}>
              <div className="SubCard1">
                <h4>Completed Orders</h4>
              </div>
              <div className="cardNum">
                <h1>20</h1>
              </div>
            </div>
          </div>
          {Showstep(currentStep)}
    </div>
    )
}

export default StatusStages;