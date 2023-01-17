import React from "react";
import "./LandingPage.css";
import Icon1 from "./Image/Icon1.png";
import Icon2 from "./Image/Icon2.png";
import Icon3 from "./Image/Icon3.png";
const LandingPage = () => {
  return (
    <div className="LandingPageMainComponents">
      <div className="landingPageContainer">
        <div className="LandingPageImageSec"> 
        </div>
        <div className="landing-card container">
          <div className="landing-card1">
            <div className="card-Icon"><img src={Icon1} /></div>
            <div class="card-head">
              <h2>CORPORATE BRANDING</h2>
            </div>
            <div class="card-body">
              This is card body This is card body This is card body This is card
              body This is card body This is card body
            </div>
          </div>
          <div className="landing-card1">
            <div className="card-Icon"><img src={Icon2} /></div>
            <div class="card-head">
              <h2>ADVERTISING CONTENT</h2>
            </div>
            <div class="card-body">
              This is card body This is card body This is card body This is card
              body This is card body This is card body This is card body
            </div>
          </div>
          <div className="landing-card1">
            <div className="card-Icon"><img src={Icon3} /></div>
            <div class="card-head">
              <h2>DESIGN RENDERING</h2>
            </div>
            <div class="card-body">
              This is card body This is card body This is card body This is card
              body This is card bodyThis is card body This is card body This is
              card body
            </div>
          </div>
        </div>
      </div>
      <div className="LandingPageContent"></div>
    </div>
    // </div>
  );
};

export default LandingPage;
