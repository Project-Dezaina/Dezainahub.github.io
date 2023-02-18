import React, { useContext } from 'react';
import { useState } from 'react';

import { multiStepContactContext } from "../YourCartPage";
import CartStage1 from './CartStage1/CartStage1';
import CartStage2 from './CartStage2/CartStage2';
import CartStage3 from './CartStage3/CartStage3';
import "./YourCartStages.css";



const YourCartStages = () => {
    const {setStep, currentStep} = useContext(multiStepContactContext);
  const Showstep = (step)=>{
    switch (step) {
      case 1:
        return <CartStage1/>;
      case 2:
        return <CartStage2/>;
      case 3:
          return <CartStage3/>;
    }
  }
    return (
        <div>
        {Showstep(currentStep)}
        </div>
    )
}

export default YourCartStages;