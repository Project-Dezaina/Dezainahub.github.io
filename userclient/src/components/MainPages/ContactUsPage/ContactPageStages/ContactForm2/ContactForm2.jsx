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
            name="WebURL"
            id="WebURL"
            placeholder="URL"
            value={contactdata["name"]}
            onChange={(e) => {
              setContactData({ ...contactdata, WebURL: e.target.value });
            }}
          ></input>
        </div>
        <div className="contactforminputbox">
          <label htmlFor="">Mobile Number</label>
          <input
            type="text"
            name="MobileNo"
            id="MobileNo"
            placeholder="Mobile Number"
            value={contactdata["name"]}
            onChange={(e) => {
              setContactData({ ...contactdata, MobileNo: e.target.value });
            }}
          ></input>
        </div>
        <div className="contactforminputbox">
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="EmailId"
            id="EmailId"
            placeholder="Email"
            value={contactdata["name"]}
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
          <label htmlFor="">Select the Service</label>
          {/* <input
                    type="text"
                    name="WebURL"
                    id="WebURL"
                    placeholder="Services You Selected"
                    readOnly={true} ></input> */}

          {/* ------------- */}
{/* dropdown draft 1 */}
            {/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Select The Service
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><div class="dropdown-item"><input type="checkbox" value="Poster" onChange={checkboxChecked()}></input>
    <label>Poster</label></div> </li>
    <li><div class="dropdown-item"><input type="checkbox" value="Banner" onChange={checkboxChecked()}></input><label>Banner</label></div></li>
    <li><div class="dropdown-item"><input type="checkbox" value="Thumbnail" onChange={checkboxChecked()}></input><label>Thumbnail</label></div></li>
    <li><div class="dropdown-item"><input type="checkbox" value="Business Card" onChange={checkboxChecked()}></input><label>Business Card</label></div></li>
    <li><div class="dropdown-item"><input type="checkbox" value="Flyer" onClick={checkboxChecked()}></input><label>Flyer</label></div></li>
    <li><div class="dropdown-item"><input type="checkbox" value="Logo"></input><label>Logo</label></div></li>
  </ul>
  <select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
</div> */}
{/* Dropdown draft2  */}

{/* mui multiple selct ui  */}

<div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Services</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
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
          <button onClick={() => {
              setStep(3);
            }}> Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm2;
