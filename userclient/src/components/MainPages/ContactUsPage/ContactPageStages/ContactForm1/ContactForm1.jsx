import React, { useContext } from "react";
import "./ContactForm1.css";
import { multiStepContactContext } from "../../ContactUsPage";
import { StyledEngineProvider } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import { multiStepContactContext } from "../../ContactUsPage";

const ContactForm1 = () => {
  const {
    setStep,
    currentStep,
    contactdata,
    setContactData,
    getStyles,
    names,
    MenuProps,
  } = useContext(multiStepContactContext);
  // Stage 2 form
  // mui function
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleClickForm1 = () => {
    setStep(2);
  };

  return (
    <div className="ContactFormContainer container">
      <div className="contactforminputboxBody">
        <div className="contactforminputbox">
          {/* {JSON.stringify()} */}
          <label htmlFor="">Name</label>
          <input
            type="text"
            // name="Fname"
            name="user_name"
            required
            id="Fname"
            placeholder="Enter your name"
            value={contactdata["Fname"]}
            onChange={(e) => {
              setContactData({ ...contactdata, Fname: e.target.value });
            }}
          ></input>
        </div>
        <div className="contactforminputbox">
          <label htmlFor="">Contact Number</label>
          <input
            type="Number"
            // name="CompanyName"
            name="user_contact"
            required
            id="CompanyName"
            placeholder="Enter your Company name"
            value={contactdata["CompanyName"]}
            onChange={(e) => {
              setContactData({ ...contactdata, CompanyName: e.target.value });
            }}
          ></input>
        </div>
        <div className="contactforminputbox">
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email_id"
            id="EmailId"
            placeholder="Email"
            value={contactdata["EmailId"]}
            onChange={(e) => {
              setContactData({ ...contactdata, EmailId: e.target.value });
            }}
          ></input>
          {/* <label htmlFor="">Select Slot</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Select Slot"
                    value={contactdata["name"]}
            onChange={(e) => {
              setContactData({ ...contactdata, name: e.target.value });
            }}
                  ></input> */}
        </div>
        <div className="contactforminputbox">
          <label htmlFor="">Message</label>
          <textarea
            // name="MessageBoxInput"
            name="message"
            id="MessageBoxInput"
            cols="30"
            rows="3"
            placeholder="Message"
            value={contactdata["MessageBoxInput"]}
            onChange={(e) => {
              setContactData({
                ...contactdata,
                MessageBoxInput: e.target.value,
              });
            }}
          ></textarea>
        </div>
        <div>
          <label htmlFor="">Select the Service</label>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-name-label">Services</InputLabel>
            <Select
              labelId="Select-multiple-name-label"
              id="Select-multiple-name"
              name="Service"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="FormButton">
          <button
            type="Submit"
            // onClick={() => {setStep(2);}}

            value="send"
          >
            <button className="NextStateButton"
              type="Submit"
              onClick={() => {
                setStep(3);
              }}
              value="send"
            >
              Next
            </button>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm1;
