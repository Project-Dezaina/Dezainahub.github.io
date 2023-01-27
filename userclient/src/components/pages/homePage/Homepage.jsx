import React from 'react';
import LandingPage from './HomePageComponents/LandingSection/LandingPage'
import AboutUs from "../NewAbout/AboutUs";
import Navbar from "../navbar/Navbar";
import OurWorks from "../OurWorks/OurWorks"
import OurServices from "../OurServicesV1/OurServices";
import Testimonial from "../NewTestimonial/Testimonial";
// import NewFooter from "../NewFooter/Footer"
// import FooterNew from "../FooterNew/FooterNew"
import Blogs from "../Blog/Blog"
import NewFooter from "../NewFooter/Footer";

const Homepage = () => {
  return (
    <div className='homePageMainContainer'>
      <Navbar />
      <LandingPage/>
      <AboutUs />
      <OurServices />
      <OurWorks/>
      <Testimonial />
      <Blogs/>
      {/* <NewFooter/> */}
      {/* <FooterNew/> */}
      <NewFooter/>
    </div>
  )
}

export default Homepage
