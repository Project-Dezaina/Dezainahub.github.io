import React from "react";
// import { useState } from "react";

import "./OurWorks.css";
import Img1 from "../OurWorks/Image/12.jpeg";
import Img2 from "../OurWorks/Image/11.jpeg";
import Img3 from "../OurWorks/Image/13.jpeg";

const Ourworks = () => {

  // const card = [
  //   {
  //        id : "aa",
  //     fotu: Img1,
  //     class:"New-Card",
  //     // fotu: <img src={Img1} alt=""></img>,
  //     title: "card-1",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis possimus tenetur voluptatum iste esse culpa, iure vitae doloremque sit. Maxime.",
  //   },
  //   {
  //        id : "dd",
  //           class:"New-Card-V2",
  //             fotu: Img2,

  //     // fotu: <img src={Img2} alt=""></img>,
  //       title: "card-2",
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis possimus tenetur voluptatum iste esse culpa, iure vitae doloremque sit. Maxime.",
  //     },
  //     {
  //        id : "cc",
  //     class:"New-Card-V2",
  //     fotu: Img3,
  //     // fotu: <img src={Img3} alt=""></img>,
  //       title: "card-3",
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis possimus tenetur voluptatum iste esse culpa, iure vitae doloremque sit. Maxime.",
  //     },
  // {
  //    id : "bb",
  //   class:"ourWorksBio New-Card-V3",
  //   // fotu: Img3,
  //   // fotu: <img src={Img3} alt=""></img>,
  //     title: "or Portfolio",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis possimus tenetur voluptatum iste esse culpa, iure vitae doloremque sit. Maxime.",
  //   },

  // ];
  return (
    <div className="OurWork-Main">
      <div className="container">
        {/* <h1>Cards</h1> */}

        <div className="work-cards">
          <div className="Work-card-body">
            {/* {cards.map((card, i) => (
              <div key={i} className="card">
              <div className={card.class} id={card.id}>
                <div className="Work-Photo"><img src={card.fotu} alt="" /></div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
              </div>
            ))} */}
             {/* {card.map((card, i) => (
             <div key={i} className="card">
              <div className={card.class} id={card.id}>
              <div className="card-img">
                <img src={card.fotu} alt="" />
              </div>
              <div className="NewCard-body">
                <h3>{card.title}</h3>
                <p>
                 {card.text}
                </p>
              </div>
            </div>
              </div>
            ))}  */}
            <div className="Work-card-body">
            <div className="New-Card" id="aa">
              <div className="card-img">
                <img src={Img2} alt="" />
              </div>
              <div className="NewCard-body">
                <h3>Project Rendering</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Necessitatibus aut praesentium officia eveniet ad est
                </p>
              </div>
            </div>
            <div className="New-Card " id="bb">
              <div className="card-img">
                <img src={Img1} alt="" />
              </div>
              <div className="NewCard-body">
                <div className="Body-Header">
                  <h3>Project Rendering</h3>
                </div>

                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Necessitatibus aut praesentium officia eveniet ad est
                </p>
              </div>
            </div>

            <div className="New-Card" id="cc">
              <div className="card-img">
                <img src={Img3} alt="" />
              </div>
              <div className="NewCard-body">
                <div className="Body-Header">
                  <h3>Project Rendering</h3>
                </div>

                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Necessitatibus aut praesentium officia eveniet ad est
                </p>
              </div>
            </div>
            <div className="ourWorksBio New-Card-V3" id="dd">
            <div className="DD">
            <h3>See <span>Our Works</span> or Portfolio </h3>
              {/* <h3>or Portfolio</h3> */}
              <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Necessitatibus aut praesentium officia eveniet ad est
                  </p>
              <div className="OurWorks-button">
            <button class="button-5" role="button">
             Explore Gallery
            </button>
          </div>
            </div>
            
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourworks;
// import React from 'react'

// const data = [
//   { id: 1, name: "John Doe" },
//   { id: 2, name: "Victor Wayne" },
//   { id: 3, name: "Jane Doe" },
// ];
// const Ourworks = () => {
//   return (
//     <div className="users">
//     {data.Map((user, index) => (
//       <div className="use" key={index}>
//      {user.id}
//      </div>
//     ))}
//   </div>
//   )
// }

// export default Ourworks
