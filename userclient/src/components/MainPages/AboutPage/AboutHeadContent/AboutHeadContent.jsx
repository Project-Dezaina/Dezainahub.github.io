import React from "react";
import "./AboutHeadContent.css";
// import {useRef , useState } from "react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import Img1 from "../Image/Img1.jpg";
import Img2 from "../Image/1.jpg";
import Img3 from "../Image/2.jpg";
import Img4 from "../Image/6.jpg";
import Img5 from "../Image/7.jpg";
// import Img1 from "./Image/Img1.jpg";
// import about from "./Image/124.png";

const AboutHeadContent = () => {
  return (
    <div className="AboutHeadContent">
      <div className="HeadContent" data-aos="fade-up">
        <div className="HeadContentHead">
          <h1>Everything you need to grow your business visually</h1>
          <p>
          Color is a fundamental element in design and can have a significant impact on the way people perceive and respond to visual content.
          </p>
        </div>
        <div className="button-box">
          <button type="button">Get Started With Dezaina</button>
        </div>
        <div className="subHeadContent">
          <h6>Best Designs by Best Designers</h6>
          <h6>Best at Affordable Prices</h6>
        </div>
      </div>
      <div className="HeadContentImage" data-aos="fade-up">
        {/* <div className="AboutImage2"><img src={Img1} alt="" /></div> */}

        <Swiper
          // slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   type: "fraction",
          //   // clickable: true,
          // }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="HeadContentImage">
            <SwiperSlide>
              <div className="AboutImage2">
                <img src={Img5} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="AboutImage2">
                <img src={Img2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="AboutImage2">
                <img src={Img3} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="AboutImage2">
                <img src={Img4} alt="" />
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
            {/* <button>df</button> */}
          </div>
        </Swiper>

        
      </div>
    </div>
  );
};
export default AboutHeadContent;
