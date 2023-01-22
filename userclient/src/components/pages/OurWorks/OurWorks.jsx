import React from "react";
import { useState } from "react";
import "./OurWorks.css"
import Img1 from "../OurWorks/Image/12.jpeg"
import Img2 from "../OurWorks/11.jpeg"
import Img3 from "../OurWorks/Image/13.jpeg"


const Ourworks = () => {
  const cards = [
    {
    
      fotu: Img1,
      class:"aaa",
      // fotu: <img src={Img1} alt=""></img>,

      title: "card-1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis possimus tenetur voluptatum iste esse culpa, iure vitae doloremque sit. Maxime.",
    },
    {
        fotu: Img2,
      class:"bbb",

      // fotu: <img src={Img2} alt=""></img>,
        title: "card-2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis possimus tenetur voluptatum iste esse culpa, iure vitae doloremque sit. Maxime.",
      },
      {
      class:"ccc",
      fotu: Img3,
      // fotu: <img src={Img3} alt=""></img>,
        title: "card-3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis possimus tenetur voluptatum iste esse culpa, iure vitae doloremque sit. Maxime.",
      },

  ];
  return (
    <div className="OurWork-Main">
      <div className="container">
        <h1>Cards</h1>

        <div className="work-cards">
          <div className="Work-card-body">
            {cards.map((card, i) => (
              <div key={i} className="card">
                <div className="Work-Photo"><img src={card.fotu} alt="" /></div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
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
