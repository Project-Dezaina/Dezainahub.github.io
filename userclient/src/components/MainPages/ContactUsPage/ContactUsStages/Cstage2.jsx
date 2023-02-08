import React, { useContext } from 'react'
import { multistep } from '../ContactUsContext/ContactUSContext'

const Cstage2 = () => {
    const { currentStep, setStep } = useContext(multistep);
  return (
    <div>
    <button onClick={()=>{
        setStep(1)
    }}>Previous</button>
      <button onClick={()=>{
        setStep(3)
    }}>Next</button>
    </div>
  )
}

export default Cstage2
