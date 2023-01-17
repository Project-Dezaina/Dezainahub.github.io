import React from "react";
import "./aboutUs.css";
import about from "../navbar/ImageM/aboutUs/DezainaAu.png";

const AboutUs = () => {
  return (
    <div className="aboutUsContainer">
      <div className="aboutUsImageSec container">
        <img src={about} alt="" />
        <div className="About-Content">
        {/* <div className="About-Content1"> */}
          <h6>Who are we</h6>
          <h1>About Us</h1>
          <p>a Our graphic designing company is a full-service
          creative design firm specializing in custom web design and graphic
          design services. We offer a complete range of graphic design services,
          including branding and logo design, website design and print design</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
    // </div
  );
};

export default AboutUs;
