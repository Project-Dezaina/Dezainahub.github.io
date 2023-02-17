import React, { useContext, useState } from "react";
import "./MissionVissionStage.css";

import { multiStepContext } from "../MissionVission";
import MissionStage from "../MissionStage/MissionStage";
import VissionStage from "../VissionStage/VissionStage";

const MissionVissionStage = () => {
  const { currentcolor, setcolor } = useState("red");
  console.log(currentcolor);
  const { setStep, currentStep } = useContext(multiStepContext);

  const MissionButton = () => {
    // document.body.classList.remove("VissionBoxHeadColor");
    // document.getelement.classList.remove(VissionBoxHeadColor);
    setStep(1);
  };
  const VissionButton = () => {
    // document.body.classList.remove("MissionBoxHeadColor");
    // document.getelement.classList.remove(MissionBoxHeadColor);
    setStep(2);
  };

  const Showstep = (step) => {
    switch (step) {
      case 1:
        return <MissionStage />;
      case 2:
        return <VissionStage />;
      default:
        return <MissionStage />;
    }
  };
  return (
    <div className="MissionVission">
      <div className="MissionVissionButton">
        <div
          className="MissionBoxHead"
          id={currentStep === 1 ? "MissionBoxHeadColor" : "None"}
          onClick={(e) => {
            MissionButton(e);
          }}
        >
          <button>Mission</button>
        </div>
        <div
          className="VissionBoxHead"
          id={currentStep === 2 ? "MissionBoxHeadColor" : "None"}
          onClick={(e) => {
            VissionButton(e);
          }}
        >
          <button>Vission</button>
        </div>
      </div>
      <div className="MissionVissionBox">{Showstep(currentStep)}</div>
    </div>
  );
};

export default MissionVissionStage;

/*
<>




<>

*/
