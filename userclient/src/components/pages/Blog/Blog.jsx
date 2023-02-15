import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import { Mousewheel, Navigation, Pagination} from "swiper";
import "./Blog.css"
// import Image1 from "./Image/111.jpg"

// Import Swiper React components
// import { Mousewheel,Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

import Fotu from "./Image/111.jpg";

// import "./styles.css";

// import required modules

const Blog = () => {
    const cards = [
        {
            Image: Fotu,
            title: "Creation of additional tracks to hold content",
            text: "You can define an explicit grid with grid layout. The Grid Layout specification is flexible",
        },
        {
            Image: Fotu,
            title: "Creation of additional tracks to hold content",
            text: "You can define an explicit grid with grid layout. The Grid Layout specification is flexible",
        },
          {
            Image: Fotu,
            title: "Creation of additional tracks to hold content",
            text: "You can define an explicit grid with grid layout. The Grid Layout specification is flexible",
        },

      ];
    return (
      <div className="Blog-Main">
        {/* <div className="container">
          <div className="Blog-Head">
            <h5>Blogs</h5>
            <h2>One Minute Read</h2>
          </div>
          <div className="Testing">
          <div className="Blog-Cards">
            <div className="Article">
              <div className="Inner-Article">
                <div className="Blog-img">
                  <img src={Image1}></img>
                </div>
                <div className="Blog-Writing">
                  <div className="Blog-Topic">
                    Creation of additional tracks to hold content
                  </div>
                  <div className="Blog-Body">
                    You can define an explicit grid with grid layout. The Grid
                    Layout specification is flexible <span>..Read More</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="Article">
              <div className="Inner-Article">
                <div className="Blog-img">
                  <img src={Image1}></img>
                </div>
                <div className="Blog-Writing">
                  <div className="Blog-Topic">
                    Creation of additional tracks to hold content
                  </div>
                  <div className="Blog-Body">
                    You can define an explicit grid with grid layout. The Grid
                    Layout specification is flexible <span>..Read More</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="Article">
              <div className="Inner-Article">
                <div className="Blog-img">
                  <img src={Image1}></img>
                </div>
                <div className="Blog-Writing">
                  <div className="Blog-Topic">
                    Creation of additional tracks to hold content
                  </div>
                  <div className="Blog-Body">
                    You can define an explicit grid with grid layout. The Grid
                    Layout specification is flexible <span>..Read More</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="Blog-CardsV2">
           
            <div className="Anime-Card">
            <div class="card">
            <div className="Inner-Article">
                <div className="Blog-img">
                  <img src={Image1}></img>
                </div>
                <div className="Blog-Writing">
                  <div className="Blog-Topic">
                    Creation of additional tracks to hold content
                  </div>
                </div>
              </div>

              <div class="content">
              <div className="Blog-Body">
                    You can define an explicit grid with grid layout. The Grid
                    Layout specification is flexible
                  </div>

                <a class="btn-link">....Read More...</a>
              </div>
            </div>
            </div>
            <div className="Anime-Card">
            <div class="card">
            <div className="Inner-Article">
                <div className="Blog-img">
                  <img src={Image1}></img>
                </div>
                <div className="Blog-Writing">
                  <div className="Blog-Topic">
                    Creation of additional tracks to hold content
                  </div>
                </div>
              </div>

              <div class="content">
              <div className="Blog-Body">
                    You can define an explicit grid with grid layout. The Grid
                    Layout specification is flexible
                  </div>

                <a class="btn-link">....Read More...</a>
              </div>
            </div>
            </div>
            <div className="Anime-Card">
            <div class="card">
            <div className="Inner-Article">
                <div className="Blog-img">
                  <img src={Image1}></img>
                </div>
                <div className="Blog-Writing">
                  <div className="Blog-Topic">
                    Creation of additional tracks to hold content
                  </div>
                </div>
              </div>

              <div class="content">
              <div className="Blog-Body">
                    You can define an explicit grid with grid layout. The Grid
                    Layout specification is flexible
                  </div>

                <a class="btn-link">....Read More...</a>
              </div>
            </div>
            </div>
            
            
          </div>
          </div>
        </div> */}
        {/* <div className="container">
        <div className="Blog-Head">
            <h5>Blogs</h5>
            <h1>One Minute <span>Read</span></h1>
          </div>
          <div className="cards">
            <div className="cardNew">
              {cards.map((card, i) => (
                <div key={i} className="card">
                  <div className="Anime-Card">
                    <div class="card">
                      <div className="Inner-Article">
                        <div className="Blog-img">
                          <img src={card.Image} alt=""/>
                        </div>
                        <div className="Blog-Writing">
                          <div className="Blog-Topic">{card.title}</div>
                        </div>
                      </div>

                      <div class="content">
                        <div className="Blog-Body">{card.text}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
        

        <div className="container">
        
        <div className="Blog-Head">
            <h5>Blogs</h5>
            <h1>One Minute <span>Read</span></h1>
          </div>
         
        
        
     
          
            <Swiper
        slidesPerView={2}
        spaceBetween={0}
        // loop={true}
        mousewheel={true}
        // direction={"Vertical"}
        modules={[Pagination, Navigation, Mousewheel]}
        pagination={{
          clickable: true,
          mousewheel: true
        }}
        //   Loop= {true}
        
        // breakpoints={{
        //     100: {
        //     slidesPerView: 1,
        //     spaceBetween: 10,
        //   },
        //   360: {
        //     slidesPerView: 1,
        //     spaceBetween: 10,
        //   },
        //   765: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   812: {
        //     slidesPerView: 3,
        //     spaceBetween: 40,
        //   },
        //   1366: {
        //     slidesPerView: 4,
        //     spaceBetween: 50,
        //   },

        // }}
        breakpoints= {{
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    700: {
      slidesPerView: 1.5,
      spaceBetween: 40
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 60
    }
  }}
        
      >
      
      <div className="cards">
            <div className="cardNew">

            {cards.map((card, i) => (
                <SwiperSlide>
                <div className="cards">
                <div className="V1 cardNew">
                <div key={i} className="Blog-card">
                  <div className="Anime-Card">
                    <div class="card">
                      <div className="Inner-Article">
                        <div className="Blog-img">
                          <img src={card.Image} alt=""/>
                        </div>
                        <div className="Blog-Writing">
                          <div className="Blog-Topic">{card.title}</div>
                        </div>
                      </div>

                      <div class="content">
                        <div className="Blog-Body">{card.text}</div>

                        {/* <a class="btn-link">....Read More...</a> */}
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                </div>
              </SwiperSlide>
              ))}
              </div>
          </div>
        
       </Swiper>
             
            
        </div>
      </div>
    );
    
}

export default Blog;