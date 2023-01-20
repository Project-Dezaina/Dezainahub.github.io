import React from 'react'
import LandingPage from './HomePageComponents/LandingSection/LandingPage'
import AboutUs from "../NewAbout/AboutUs";
// import Homepage from "./components/pages/homePage/Homepage";
import Navbar from "../navbar/Navbar";
import OurServices from "../OurServicesV1/OurServices";
import Testimonial from "../NewTestimonial/Testimonial";
import NewFooter from "../NewFooter/Footer"
// import FooterNew from "../FooterNew/FooterNew"

const Homepage = () => {
  return (
    <div className='homePageMainContainer'>
      <Navbar />
      <LandingPage/>
      {/* <Homepage /> */}
      <AboutUs />
      <OurServices />
      <Testimonial />
      <NewFooter/>
      {/* <FooterNew/> */}
    </div>
  )
}

export default Homepage
