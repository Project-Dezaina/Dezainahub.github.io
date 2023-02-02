import React, { useContext } from 'react'
import { multistep } from '../ContactUsContext/ContactUSContext'

const Cstage3 = () => {
    const { currentStep, setStep } = useContext(multistep);
  return (
    <div>
      <button onClick={()=>{
        setStep(2)
    }}>Previous</button>
     
    </div>
  )
}

export default Cstage3
