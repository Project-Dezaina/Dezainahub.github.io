import React from "react";
import "./AboutHeadContent.css";
// import {useRef , useState } from "react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import Img1 from "../Image/Img1.jpg";
// import Img1 from "./Image/Img1.jpg";
// import about from "./Image/124.png";

const AboutHeadContent = () => {
  return (
    <div className="AboutHeadContent">
      <div className="HeadContent">
        <div className="HeadContentHead">
          <h1>Everything you need to grow your business visually</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
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
      <div className="HeadContentImage">
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
                <img src={Img1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="AboutImage2">
                <img src={Img1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="AboutImage2">
                <img src={Img1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="AboutImage2">
                <img src={Img1} alt="" />
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

        {/* 
            <div className="AboutArrows">
            <div className="ImageArrow ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9998 19.92L8.47984 13.4C7.70984 12.63 7.70984 11.37 8.47984 10.6L14.9998 4.07999"
                  stroke="#4BACE0"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="ImageArrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.07999" stroke="#4BACE0" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
            </div> */}
      </div>
    </div>
  );
};
export default AboutHeadContent;
