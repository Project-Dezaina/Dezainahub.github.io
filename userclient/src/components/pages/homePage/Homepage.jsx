import React from 'react'
import LandingPage from './HomePageComponents/LandingSection/LandingPage'
import AboutUs from "../NewAbout/AboutUs";
// import Homepage from "./components/pages/homePage/Homepage";
import Navbar from "../navbar/Navbar";
import OurServices from "../OurServicesV1/OurServices";
import Testimonial from "../NewTestimonial/Testimonial";
import Blogs from "../Blog/Blog";
// import FooterNew from "../FooterNew/FooterNew"
import NewFooter from "../NewFooter/Footer";

const Homepage = () => {
  return (
    <div className='homePageMainContainer'>
      <Navbar />
      <LandingPage/>
      {/* <Homepage /> */}
      <AboutUs />
      <OurServices />
      <Testimonial />
      <Blogs />
      {/* <FooterNew/> */}
      <NewFooter/>
    </div>
  )
}

export default Homepage
