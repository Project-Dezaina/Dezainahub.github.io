import React from 'react'
import "./Footer.css";
import Dezainalogo from "../navbar/image/Logo-Name.png"

const NewFooter = () => {
  return (
    <div className="Footer-Main">
      <div className="container">
        <div className="Newsletter">
          <div>
            <div className="Newsletter-topic">Lets Discuss</div>
            <div className="Newsletter-head">
              Book a Free <p><span>consultancy</span> Today</p>
            </div>
          </div>
          <div className='button-box'>
          <button type='button'>
          {/* <div className="button"> */}
          Get a Call
          {/* </div> */}
          </button>
          </div>
        </div>

        <div className="Bellow-Newsletter">
          <div className="Footer">
            <div className="About-Footer">
              <div className="Footer-Heading">About Dezaina</div>
              <div>Home</div>
              <div>Services</div>
              <div>Get In Touch</div>
              {/* <div>Lets Discuss</div> */}
              <div>Pricing</div>
            </div>
            <div className="Product-Footer">
              <div className="Footer-Heading">Our category</div>
              <div>Corporate Designs</div>
              <div>Advertising Content</div>
              {/* <div>Get In Touch</div> */}
              <div>Logo Rendering</div>
              <div>Explore More</div>
            </div>
            <div className="Email-Footer">
              <div className='Footer-Heading'>Not Quite Ready For the Designs?</div>
              <div>Email</div>
              <div>Social Media</div>
            </div>
          </div>
          <hr></hr>
          <div className="Footer-base">
            <div>All rights reserved @2022 by Dezaina.hub</div>
            <div><img src={Dezainalogo}></img></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewFooter