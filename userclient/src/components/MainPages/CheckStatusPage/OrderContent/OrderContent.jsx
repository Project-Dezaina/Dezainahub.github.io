import React from 'react';
import "./OrderContent.css"
import OrderCard1 from './OrderCard1/OrderCard1';
import OrderContentDetails from './OrderContentDetails/OrderContentDetails';
const OrderContent = () => {
    const cards = [
  {
    // Image: Fotu,
    title: "Restaurant Posters",
    text: "24/12/2023",
  },
  {
    // Image: Fotu,
    title: "Restaurant Posters",
    text: "24/12/2023",
  },
  {
    // Image: Fotu,
    title: "Restaurant Posters",
    text: "24/12/2023",
  },
  {
    // Image: Fotu,
    title: "Restaurant Posters",
    text: "24/12/2023",
  },
  {
    // Image: Fotu,
    title: "Restaurant Posters",
    text: "24/12/2023",
  },
];
  
    const StatusCards = [
        {
          // Image: Fotu,
          title: "Want a Poster",
          text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          // Image: Fotu,
          title: "Need to change some layouts",
          text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          // Image: Fotu,
          title: "Layouts Done. Text changes",
          text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          // Image: Fotu,
          title: "Project Completed",
          text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
      ];
  return (
    <div className="OrderContent">
            <div className="Nav-Order-Content">
              <div className="NavImg">
                <svg
                  width="25"
                  height="50"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.57185 2.88116L5.8331 4.61991L4.76602 5.68158C4.55003 5.8979 4.42871 6.1911 4.42871 6.49679C4.42871 6.80248 4.55003 7.09568 4.76602 7.312L7.57185 10.1178C7.94019 10.4862 8.56852 10.2207 8.56852 9.70616V3.29283C8.56852 2.77283 7.94019 2.51283 7.57185 2.88116Z"
                    fill="white"
                  />
                </svg>
              </div>

              <h3  onClick={()=>{
                    console.log("clicked");
                  }}>Back</h3>
            </div>
            <div className="OrderNumbers">
              <div className="OrderNum-Content">
                
                {/* <OrderCard1/> */}
                <OrderContentDetails/>
                

                
              </div>
                <div className="ReqButton">
                  <button className="ReqButtonbutton" onClick={()=>{
                    console.log("clicked");
                  }}>
                    Place a Request 
                  </button>

                </div>
            </div>
          </div>
  )
}

export default OrderContent;
