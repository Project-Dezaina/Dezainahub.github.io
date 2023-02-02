import React from 'react';
import { useContext } from 'react';
import { multistep } from '../ContactUsContext/ContactUSContext';


const Cstage1 = () => {
    const{currentStep,setStep} = useContext(multistep );
  return (
    <div>
    
      <form action="">
              <div className="contactforminputboxBody">
                <div className="contactforminputbox">
                  <label htmlFor="">Website URL (if any) </label>
                  {/* <input type="text"  /> */}
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="URL"
                  ></input>
                </div>
                {/* <input type="text" placeholder="enter your name" /> */}
                <div className="contactforminputbox">
                  <label htmlFor="">Mobile Number</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Mobile Number"
                  ></input>
                </div>
                <div className="contactforminputbox">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Email"
                  ></input>
                  <label htmlFor="">Select Slot</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Select Slot"
                  ></input>
                  {/* <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea> */}
                </div>
                <div className="FormButton">
                  <button onClick={()=>{
                    setStep(2)
                  }}> Next</button>
                  
                </div>
              </div>
            </form>
    </div>
  )
}

export default Cstage1
