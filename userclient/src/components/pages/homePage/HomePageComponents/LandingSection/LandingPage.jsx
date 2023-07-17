import React from "react";
import "./LandingPage.css";
import { Outlet, Link } from "react-router-dom";

import brandImg from "./Image/Landing-img.jpg";
// import Icon2 from "./Image/Icon2.png";
// import Icon3 from "./Image/Icon3.png";
const LandingPage = () => {
  return (
    <div className
    
    ="LandingPageMainComponents">
      <div className="landingPageContainer container">
        <div className="Landing-Content" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
          <h1>DESIGNING <span>VISUAL</span> STORIES</h1>
          <p>
          Our goal is to help you visually communicate your brand's message effectively. We understand that design is not just about aesthetics, it's about creating an experience for your customers.
          </p>
          <div className="landing-buttons">
            <button type="button" className="discuss-button"  >
          <Link to="/contact">
              <span id="discuss-button">Let's Discuss</span>
            </Link>
            </button>
            <Link to="/AboutUs">
            <button class="cssbuttons-io-button" >
              
              Explore More
              <div class="icon">
                <svg
                  height="24"o
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
            </Link>
          </div>
        </div>
        <div className="Landing-img-box">
          <div className="landing-box"></div>
          <div className="landing-img" >
            <img src={ brandImg} alt="Brand img" data-aos="fade-left" />
          </div>
          <div className="landing-small-box">
            <div className="small-box-content">
              <div className="SmallBoxContentSvg">

              <svg
                width="40"
                height="40"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_25_748)">
                  <path
                    d="M1.41666 1.41663V13.4583C1.41666 14.6341 2.36583 15.5833 3.54166 15.5833H15.5833"
                    stroke="#4BACE0"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.54166 12.0417L6.79291 8.24504C7.33125 7.62171 8.2875 7.57921 8.86833 8.16712L9.54125 8.84004C10.1221 9.42087 11.0783 9.38546 11.6167 8.76212L14.875 4.95837"
                    stroke="#4BACE0"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_25_748">
                    <rect width="17" height="17" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              </div>
              <div className="SmallBocContentP">
                <p>Design adds value faster than it adds cost.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
      {/* <div className="LandingPageContent"></div> */}
    </div>
    // </div>
  );
};

export default LandingPage;
