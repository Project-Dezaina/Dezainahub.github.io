import React from "react";
import Header from "../../pages/navbar/Navbar";
import NewFooter from "../../pages/NewFooter/Footer";
import "./CheckStatus.css";
import OrderContent from "./OrderContent/OrderContent";

const CheckStatus = () => {
  // const cards = [
  // {
  //   // Image: Fotu,
  //   title: "Restaurant Posters",
  //   text: "24/12/2023",
  // },
  // 
  // ];
  // const StatusCards = [
  //   {
  //     // Image: Fotu,
  //     title: "Want a Poster",
  //     text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   },
  //   {
  //     // Image: Fotu,
  //     title: "Need to change some layouts",
  //     text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   },
  //   {
  //     // Image: Fotu,
  //     title: "Layouts Done. Text changes",
  //     text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   },
  //   {
  //     // Image: Fotu,
  //     title: "Project Completed",
  //     text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   },
  // ];
  return (
    <div>
      <Header />
      <div className="CheckStatusPageMain ">
        <div className="CheckStatus-container container">
          <div className="CheckStatusContent">
            <h1>Welcome Back</h1>
            <p>Check your order status</p>
          </div>
          <div className="HeadingCards">
            <div className="CardHeads" id="ActiveCard">
              <div className="SubCard1">
                <h4>Total Orders</h4>
              </div>
              <div className="cardNum">
                <h1>24</h1>
              </div>
            </div>
            <div className="CardHeads">
              <div className="SubCard1">
                <h4>Active Orders</h4>
              </div>
              <div className="cardNum">
                <h1>4</h1>
              </div>
            </div>
            <div className="CardHeads">
              <div className="SubCard1">
                <h4>Completed Orders</h4>
              </div>
              <div className="cardNum">
                <h1>20</h1>
              </div>
            </div>
          </div>
          <OrderContent/>
        </div>
      </div>

      <NewFooter />
    </div>
  );
};

export default CheckStatus;
