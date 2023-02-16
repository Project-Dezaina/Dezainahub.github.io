import React from 'react'
import "./AboutPage.css"
import Header from "../../pages/navbar/Navbar";
import NewFooter from "../../pages/NewFooter/Footer";
import Img1 from "./Image/Img1.jpg";
import about from "./Image/124.png";
import {useRef , useState } from "react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Navigation, Pagination} from "swiper";


import AboutHeadContent from "./AboutHeadContent/AboutHeadContent";
import AboutUsImageSec from "./AboutUsImageSec/AboutUsImageSec";
import MissionVission from "./MissionVission/MissionVission";
import OurValues from './OurValues/OurValues';
import AboutFotu from './AboutFotu/AboutFotu';




const AboutPage = () => {
  return (
    

  <div>
      <Header />
      <div className="AboutPageContainer container">
       
        <AboutHeadContent/>
        <AboutUsImageSec/>
        <MissionVission/>
        <OurValues/>
        <AboutFotu/>
      </div>

      
      <NewFooter />
    </div>
  );
}

export default AboutPage


// style=" scrolling="no""
// allowfullscreen=""

