import React from "react";
import "./OurServices.css"
import S1 from "../navbar/ImageM/ourServices/s1.png";
import S2 from "../navbar/ImageM/ourServices/s2.png";
import S3 from "../navbar/ImageM/ourServices/s3.png";

const OurServices = () => {
  return (
    <div className="ourServicesContainer">
      <div className="ourServicesUsImageSecContainer">
        <h1>Our Services</h1>

        <div className="Services-container container">
          <div className="Service-card1">
            <div className="card-Icon">
              <img src={S1} alt="Icon Hai Bhai" />
            </div>
            <div class="card-head">
              <h2>CORPORATE BRANDING</h2>
              <p2>
                An effective flyer design attracts the right audience,
                communicates a clear message and benefit and inspires the
                audience to take a specific action.
              </p2>
            </div>
          </div>

          <div className="Service-card1">
            <div className="card-Icon">
              <img src={S2} alt="Icon Hai Bhai" />
            </div>
            <div class="card-head">
              <h2>Posters</h2>
              <p>
                An effective flyer design attracts the right audience,
                communicates a clear message and benefit and inspires the
                audience to take a specific action.
              </p>
            </div>
          </div>
          <div className="Service-card1">
            <div className="card-Icon">
              <img src={S3} alt="Icon Hai Bhai" />
            </div>
            <div class="card-head">
              <h2>Explore More</h2>
              <p>
                An effective flyer design attracts the right audience,
                communicates a clear message and benefit and inspires the
                audience to take a specific action.
              </p>
            </div>
          </div>
        </div>
        <div className="Cards">
          <div></div>
        </div>

        {/* <div>icon</div>
        <div>Poster</div>
        <div>description</div>
        <div>button</div>
     </div>
         
         
         <div>

         
        <div>icon</div>
        <div>Social Media</div>
        <div>description</div>
        <div>button</div>

        </div>

         <div>
        <div>icon</div>
        <div>explore More</div>
        <div>description</div>
        <div>button</div>
        </div> */}
      </div>
    </div>
  );
};

export default OurServices;
