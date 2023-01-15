import React from 'react'
import "./LandingPage.css"
import LandingPageImg from "./Image/LandingPageImage.png"
const LandingPage = () => {
  return (
    <div className='LandingPageMainComponents'>
      <div className="landingPageContainer">
        <div className="LandingPageImageSec">
            <img src={LandingPageImg} alt="" />
        </div>
        <div className="LandingPageContent">

        </div>
      </div>
    </div>
  )
}

export default LandingPage
