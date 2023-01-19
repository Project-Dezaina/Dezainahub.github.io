import React from 'react'
import LandingPage from './HomePageComponents/LandingSection/LandingPage'
import AboutUs from "../NewAbout/AboutUs";
// import Homepage from "./components/pages/homePage/Homepage";
import Navbar from "../navbar/Navbar";
import OurServices from "../OurServicesV1/OurServices";
import Footer from "../NewFooter/Footer"
import Testimonial from "../NewTestimonial/Testimonial";

const Homepage = () => {
  return (
    <div className='homePageMainContainer'>
      <Navbar />
      <LandingPage/>
      {/* <Homepage /> */}
      <AboutUs />
      <OurServices />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Homepage
