import React from "react";
import "./aboutUs.css";
import about from "../navbar/ImageM/aboutUs/S4.jpeg";

const AboutUs = () => {
  return (
    <div className="aboutUsContainer">
      <div className="aboutUsImageSec container">
        <div className="abt-img">
          <img src={about} alt="" />

          <div className="about-float-window">
            <div className="about-float-icon">
              <svg
                width="50"
                height="50"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.6453 15.4153C18.7677 14.9317 18.7625 14.4246 18.63 13.9436C18.4976 13.4626 18.2425 13.0243 17.8898 12.6715C17.537 12.3188 17.0987 12.0637 16.6177 11.9312C16.1367 11.7988 15.6296 11.7935 15.146 11.916C14.1406 12.1641 13.318 12.9867 13.0699 13.9921C12.9475 14.4757 12.9527 14.9828 13.0852 15.4638C13.2176 15.9448 13.4727 16.3831 13.8254 16.7358C14.1782 17.0886 14.6165 17.3437 15.0975 17.4761C15.5785 17.6086 16.0856 17.6138 16.5692 17.4914C17.5877 17.2433 18.4103 16.4207 18.6453 15.4153Z"
                  stroke="#4BACE0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23.7114 23.0538C24.8585 21.9853 25.7729 20.6917 26.3974 19.2539C27.022 17.8161 27.3433 16.2649 27.3413 14.6973C27.3413 13.1901 27.0444 11.6976 26.4676 10.3051C25.8909 8.91266 25.0455 7.64743 23.9797 6.58167C22.914 5.51592 21.6487 4.67052 20.2562 4.09374C18.8638 3.51696 17.3713 3.22009 15.8641 3.22009C14.3569 3.22009 12.8645 3.51696 11.472 4.09374C10.0795 4.67052 8.8143 5.51592 7.74855 6.58167C6.6828 7.64743 5.83739 8.91266 5.26061 10.3051C4.68383 11.6976 4.38697 13.1901 4.38697 14.6973C4.38697 18.0137 5.79713 21.0038 8.056 23.0929"
                  stroke="#4BACE0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.6413 19.6067C9.44005 18.3271 8.6958 16.6036 8.6958 14.6973C8.6958 10.741 11.9078 7.52893 15.8641 7.52893C19.8204 7.52893 23.0325 10.741 23.0325 14.6973C23.0325 16.6036 22.2882 18.3141 21.087 19.6067M13.6444 22.3618L11.7642 24.699C10.2757 26.5661 11.5945 29.3212 13.9839 29.3212H17.7313C20.1207 29.3212 21.4526 26.5531 19.951 24.699L18.0708 22.3618C16.9479 20.9385 14.7804 20.9385 13.6444 22.3618Z"
                  stroke="#4BACE0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="about-float-window-content">
              <p>Lorem Ipsum is simply dummy text of the printing</p>
            </div>
          </div>
        </div>
        <div className="About-Content">
          <div className="about-icon"></div>
          {/* <div className="About-Content1"> */} {/* <h6>Who are we</h6> */}
          <h4> About Us </h4>
          <h1> We are the <span>solution</span> for your Graphic Designing <span>Problems</span>. </h1>
          <p>
            We are the perfect solution for your graphic design needs.Our team
            of experienced professionals have the knowledge and expertise to
            create stunning visuals that will help you stand out from the
            competition Yes.
            <p>We are the perfect solution for your graphic design needs.Our team
            of experienced professionals have the knowledge and expertise to
            create stunning visuals that will help you stand out from <span>...Read More</span></p>
          </p>
        </div>
      </div>
    </div>
    // </div
  );
};

export default AboutUs;
