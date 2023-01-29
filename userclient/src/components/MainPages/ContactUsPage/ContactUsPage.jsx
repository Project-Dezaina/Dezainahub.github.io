import React from "react";
import Header from "../../pages/navbar/Navbar";
import NewFooter from "../../pages/NewFooter/Footer";
import "./ContactUsPage.css"

const ContactUsPage = () => {
  return (
    <div>
      <Header />
      <div className="ContactUsContainer ">
      <div className="ContactBio">
        <h3>Contact</h3>
        <h2>Looking To Find   And  Heir Great Designers? </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, omnis
          id. Iure maiores iste perspiciatis dolorem tempora itaque aperiam
          impedit!
        </p>
        
      </div>
      <div className="ContactForm">
        <div className="ContactFormContainer">
         <form action="">
         <div className="contactforminputbox">

         <label htmlFor="">Name</label>
          <input type="text" />
         </div>
         </form>
        </div>
      </div>
      </div>

      <NewFooter />
    </div>
  );
};

export default ContactUsPage;
