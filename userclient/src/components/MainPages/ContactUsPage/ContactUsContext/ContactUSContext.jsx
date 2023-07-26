import React, { useContext, useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

import { StyledEngineProvider } from "@mui/material/styles";
import { multiStepContactContext } from "../ContactUsPage";
import ContactForm1 from "../ContactPageStages/ContactForm1/ContactForm1";
import ContactForm2 from "../ContactPageStages/ContactForm2/ContactForm2";
import ContactFinalStage from "../ContactPageStages/ContactFinalStage/ContactFinalStage";

const ContactUSContext = () => {
  const Showstep = (step) => {
    switch (step) {
      case 1:
        return <ContactForm1 />;
      case 2:
        return <ContactForm2 />;
      case 3:
        return <ContactFinalStage />;
    }
  };

  // ----------------Trying EmailJS For Now-------------------
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qye7lg2",
        "template_g197izy",
        form.current,
        "yIsKOa9AhWEOgVgns"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  let Fname, value;
  const [contactdata, setContactData] = useState([]);
  // const handlecontactus = (e) => {
  //   console.log(e);
  //   yname = e.target.yname;
  //   value = e.target.value;
  //   setContactData({ ...yname, [yname]: value });
  // };
  // const handleInputs = (e) => {
    const handleContactus = (e) => {
    console.log(e);
    Fname = e.target.Fname;
    value = e.target.value;

    setContactData({ ...Fname, [Fname]: value });
  };

  // --------------------EmailJS code Ends Here----------------------

  const { setStep, currentStep } = useContext(multiStepContactContext);

  return (
    <div>
      <form method="POST" ref={form} onSubmit={sendEmail}>
        {/* <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" /> */}
        {Showstep(currentStep)};
      </form>
    </div>
  );
};

export default ContactUSContext;
