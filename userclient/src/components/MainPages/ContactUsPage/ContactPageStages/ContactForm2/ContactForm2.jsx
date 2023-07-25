import React, { useContext } from "react";
import "./ContactForm2.css";
import { StyledEngineProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { multiStepContactContext } from "../../ContactUsPage";
import { json } from "react-router-dom";




const ContactForm2 = () => {
  // context api 
  const { checkboxChecked,setStep, currentStep, contactdata, setContactData, PostData ,MultipleSelect, getStyles, names, MenuProps} =
    useContext(multiStepContactContext);
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
        typeof value === 'string' ? value.split(',') : value,
      );
    };
  return (
    <div className="ContactFormContainer container">
    {JSON.stringify  }
      <div className="contactforminputboxBody">
        <div className="contactforminputbox">
          <label htmlFor="">Website URL (if any) </label>
          <input
            type="text"
            name="web_url"
            id="WebURL"
            placeholder="URL"
            value={contactdata["WebURL"]}
            onChange={(e) => {
              setContactData({ ...contactdata, WebURL: e.target.value });
            }}
          ></input>
        </div>
        <div className="contactforminputbox">
          <label htmlFor="">Mobile Number</label>
          <input
            type="Number"
            name="mobile_number"
            id="MobileNo"
            placeholder="Mobile Number"
            value={contactdata["MobileNo"]}
            onChange={(e) => {
              setContactData({ ...contactdata, MobileNo: e.target.value });
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
          {/* <label htmlFor="">Select the Service</label> */}
          {/* <input
                    type="text"
                    name="WebURL"
                    id="WebURL"
                    placeholder="Services You Selected"
                    readOnly={true} ></input> */}

          {/* ------------- */}

{/* Dropdown draft2  */}

{/* mui multiple selct ui  */}

{/* <div>
    <label htmlFor="">Select the Service</label>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Services</InputLabel>
        <Select
          labelId="Select-multiple-name-label"
          id="Select-multiple-name"
          name=""
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
    </div> */}



          {/* --------------- */}


        </div>
        <div className="FormButton">
          <button
            onClick={() => {
              setStep(1);
            }}
          >
            Edit Details
          </button>
          <button type="submit" 
          // onClick={() => {setStep(3);}}
          // onClick={PostData}
           value="Send"> Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm2;

// onClick={() => {setStep(3);}}