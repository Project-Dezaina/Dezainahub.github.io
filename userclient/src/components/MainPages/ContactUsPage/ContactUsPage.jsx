import React, { useContext, useStep } from "react";
import Header from "../../pages/navbar/Navbar";
import NewFooter from "../../pages/NewFooter/Footer";
import { multistep } from "./ContactUsContext/ContactUSContext";
import "./ContactUsPage.css";
// import Cstage1 from "./ContactUsStages/Cstage1";
// import Cstage2 from "./ContactUsStages/Cstage2";
// import Cstage3 from "./ContactUsStages/Cstage3";



const ContactUsPage = () => {
  const { currentStep, setStep } = useContext(multistep);
  const showStep = (step) => {
    // switch (step) {
    //   case 1:
    //     <Cstage1/>;

    //   case 2:
    //     <Cstage2/>;
    //   case 3:
    //    <Cstage3/>;
  
    // }
  };
  return (
    <div>
      <Header />
      <div className="ContactUsContainer ">
        <div className="ContactBio">
          <h3>Contact</h3>
   
          <h2>Looking To Find And Heir Great <span>Designers?</span></h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, omnis
            id. Iure maiores iste perspiciatis dolorem tempora itaque aperiam
            impedit!
          </p>
        </div>
        <div className="ContactForm">
          <div className="ContactFormContainer container">
            <form action="">
              <div className="contactforminputboxBody">
                <div className="contactforminputbox">
                  <label htmlFor="">Name</label>
                  <input type="text" name="" id="" placeholder="Enter your name" ></input>
                </div>
                <div className="contactforminputbox">
                  <label htmlFor="">Company</label>
                  <input type="text" name="" id="" placeholder="Enter your Company name"></input>
                </div>
                <div className="contactforminputbox">
                  <label htmlFor="">Message</label>
                  <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                </div>
                <div className="FormButton">
                  <button> Next</button>
                </div>
              </div>
            </form>
            {/* {showStep(currentStep)}; */}
          </div>
        </div>
      </div>

      <NewFooter />
    </div>
  );
};

export default ContactUsPage;
