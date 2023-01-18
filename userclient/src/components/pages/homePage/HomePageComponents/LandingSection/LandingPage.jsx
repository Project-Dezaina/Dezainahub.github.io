import React from "react";
import "./LandingPage.css";
import brandImg from "./Image/Landing-img.jpg";
// import Icon2 from "./Image/Icon2.png";
// import Icon3 from "./Image/Icon3.png";
const LandingPage = () => {
  return (
    <div className="LandingPageMainComponents">
      <div className="landingPageContainer container">
        <div className="Landing-Content">
          <h1>DESIGNING VISUAL STORIES</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <div className="landing-buttons">
            <button type="button" className="discuss-button"><span>Let's Discuss</span></button>
            <button class="cssbuttons-io-button"> Explore More
  <div class="icon">
    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
  </div>
</button>
          </div>
        </div>
        <div className="Landing-img-box">
          <div className="landing-box">

          </div>
          <div className="landing-img">
              <img src={brandImg} alt="Brand img"/>
          </div>
        </div>
      </div>
      {/* <div className="LandingPageContent"></div> */}
    </div>
    // </div>
  );
};

export default LandingPage;
