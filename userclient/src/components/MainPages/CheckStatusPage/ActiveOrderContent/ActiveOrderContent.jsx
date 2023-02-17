import React, { useContext } from "react";
import { multiStepContext } from "../CheckStatus";
import "./ActiveOrderContent.css"
import ActiveOrderCard from './ActiveOrderCard/ActiveOrderCard';
import ActiveOrderStatusContent from './ActiveOrderStatusContent/ActiveOrderStatusContent';
const ActiveOrderContent = () => {
    const {setStep, currentStep} = useContext(multiStepContext);

  return (
    <div className="OrderContent">
            <div className="Nav-Order-Content">
              <div className="NavImg">
                <svg
                  width="25"
                  height="50"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.57185 2.88116L5.8331 4.61991L4.76602 5.68158C4.55003 5.8979 4.42871 6.1911 4.42871 6.49679C4.42871 6.80248 4.55003 7.09568 4.76602 7.312L7.57185 10.1178C7.94019 10.4862 8.56852 10.2207 8.56852 9.70616V3.29283C8.56852 2.77283 7.94019 2.51283 7.57185 2.88116Z"
                    fill="white"
                  />
                </svg>
              </div>

              <h3  onClick={()=>{
                    console.log("clicked");
                  }}>Back</h3>
            </div>
            <div className="OrderNumbers">
              <div className="OrderNum-Content">
                
                <ActiveOrderCard/>
                {/* <ActiveOrderStatusContent/> */}
                

                
              </div>
                <div className="ReqButton">
                  <button className="ReqButtonbutton" onClick={()=>{
                    console.log("clicked");
                  }}>
                    Place a Request 
                  </button>

                </div>
            </div>
          </div>
  )
}

export default ActiveOrderContent;
