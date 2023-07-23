import React, { useState } from "react";
import Header from "../../pages/navbar/Navbar";
import NewFooter from "../../pages/NewFooter/Footer";
import ContactContent from "./ContactContent/ContactContent";
import ContactUSContext from "./ContactUsContext/ContactUSContext";
import "./ContactUsPage.css";
import { StyledEngineProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export const multiStepContactContext = React.createContext();

// mui multiselect function
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
// mui multiselect array  --provided
const names = [
  'Poster',
  'Banner',
  'Logo',
  'Business Card',
  'Social Media Post',
  'Flyer',
  'Website UI',
  'App UI',
  'Logo 3d Rendering',
  'Brand Kit',
];
// multiselect mui css style  --provided

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
// Context api start 
const ContactUsPage = () => {

  const PostData = async (e) => {
    e.preventDefault();
    const {Fname,CompanyName,MessageBoxInput, WebURL, MobileNo, EmailId, } = contactdata;
    const res = await fetch("/contactUs", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Fname,
        CompanyName,
        MessageBoxInput,
        WebURL,
        MobileNo,
        EmailId,
        
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("invalid");
      console.log("invalid");
    } else {
      window.alert("valid");
      console.log("Send succesfully");
    }
  };


  let Fname, value;
  const [contactdata, setContactData] = useState([]);
  console.log(contactdata)
  const handlecontactus = (e) => {
    console.log(e);
    Fname = e.target.Fname;
    value = e.target.value;
    setContactData({ ...Fname, [Fname]: value });
  };
  const handleInputs = (e) => {
    console.log(e);
    Fname = e.target.name;
    value = e.target.value;

    setContactData({ ...Fname, [Fname]: value });
  };
  function checkboxChecked() {
    return (
    //   <div>
      console.log("Kar Diya Tick")
    //   </div>
    )
  }
  



  const [currentStep, setStep] = useState(1);
  return (
    <div>
      {/* <Header /> */}
      <div className="ContactUsContainer " data-aos="fade-up">
        <ContactContent/>
        <div className="ContactForm">
            <multiStepContactContext.Provider 
      value={{checkboxChecked, currentStep, setStep, contactdata, setContactData,PostData, getStyles, names, MenuProps}}>
        <ContactUSContext/>
      </multiStepContactContext.Provider>
        </div>
      </div>

      {/* <NewFooter /> */}
    </div>
  );
};

export default ContactUsPage;
