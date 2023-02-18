import React from "react";
import Header from "../../pages/navbar/Navbar";
import NewFooter from "../../pages/NewFooter/Footer";
import "./YourCartPage.css";
import PosterImg from "./Images/Poster.jpeg";
import BannerImg from "./Images/Banner.jpeg";
// import BannerImg from "./Images/Banner.jpeg";

const YourCartPage = () => {
  const CartCards = [
    {
      Image: PosterImg,
      Quantity: 214,
      Price: 233,
      title: "Poster",
      text: "1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      Image: BannerImg,
      Quantity: 2,
      title: "Banner",
      Price: 500,
      text: "1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  return (
    <div>
      <Header />
      <div className="YourCartMainPage">
        <div className="CartContainer container">
          <div className="YourCart">
            <div className="CartNav-Bar-Content">
              <h3>Your Cart</h3>
            </div>
            <div className="CartContent1">
              <div className="Item-Details">
                {CartCards.map((card, i) => (
                  <div key={i} className="Item1">
                    <div className="ImageBg">
                      <img src={card.Image} alt="" />
                    </div>
                    <div className="Cart-Item-Content">
                      <div className="CartDetails">
                        <h4>{card.title}</h4>
                        {/* <h4>Poster</h4> */}
                        <p>{card.text}</p>
                        {/* <p>1.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, tandard dummy text ever since the 1500s</p> */}
                      </div>
                      <button className="AddMore">+Add More</button>

                      <div className="QuantityContainer">
                        <div className="QuantityBox">
                          <h6>Quantity</h6>
                          <div className="QuantityButton">
                            <button type="button" id="QuantButt">
                              {" "}
                              <svg
                                width="25"
                                height="26"
                                viewBox="0 0 25 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.8215 3.05713H8.15508C4.39066 3.05713 2.14648 5.3013 2.14648 9.06573V17.7218C2.14648 21.4966 4.39066 23.7408 8.15508 23.7408H16.8112C20.5756 23.7408 22.8198 21.4966 22.8198 17.7322V9.06573C22.8301 5.3013 20.5859 3.05713 16.8215 3.05713ZM16.625 14.1746H8.35158C7.92756 14.1746 7.57594 13.823 7.57594 13.3989C7.57594 12.9749 7.92756 12.6233 8.35158 12.6233H16.625C17.049 12.6233 17.4007 12.9749 17.4007 13.3989C17.4007 13.823 17.049 14.1746 16.625 14.1746Z"
                                  fill="#4BACE0"
                                />
                              </svg>{" "}
                            </button>
                            <h6>{card.Quantity}</h6>
                            <button id="QuantButt">
                              {" "}
                              <svg
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.97 3.05713H8.30352C4.5391 3.05713 2.29492 5.3013 2.29492 9.06573V17.7218C2.29492 21.4966 4.5391 23.7408 8.30352 23.7408H16.9596C20.724 23.7408 22.9682 21.4966 22.9682 17.7322V9.06573C22.9786 5.3013 20.7344 3.05713 16.97 3.05713ZM16.7735 14.1746H13.4124V17.5357C13.4124 17.9597 13.0608 18.3113 12.6367 18.3113C12.2127 18.3113 11.8611 17.9597 11.8611 17.5357V14.1746H8.50001C8.076 14.1746 7.72438 13.823 7.72438 13.3989C7.72438 12.9749 8.076 12.6233 8.50001 12.6233H11.8611V9.26222C11.8611 8.83821 12.2127 8.48658 12.6367 8.48658C13.0608 8.48658 13.4124 8.83821 13.4124 9.26222V12.6233H16.7735C17.1975 12.6233 17.5491 12.9749 17.5491 13.3989C17.5491 13.823 17.1975 14.1746 16.7735 14.1746Z"
                                  fill="#4BACE0"
                                />
                              </svg>{" "}
                            </button>
                          </div>
                        </div>
                        <div className="PriceBox">
                          <h6>Total Value</h6>
                          <div className="TotalPricing">
                            <h6>{card.Price}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Delete-Button">
                      <abbr title="Delete Item"><svg className="DeleteSVG"
                      
                        width="41"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      
                      >
                        
                        <path
                          d="M20.795 3.8147C11.6776 3.8147 4.24805 11.2443 4.24805 20.3616C4.24805 29.479 11.6776 36.9085 20.795 36.9085C29.9123 36.9085 37.3419 29.479 37.3419 20.3616C37.3419 11.2443 29.9123 3.8147 20.795 3.8147ZM26.3547 24.1674C26.8346 24.6473 26.8346 25.4415 26.3547 25.9214C26.1065 26.1696 25.7921 26.2854 25.4777 26.2854C25.1633 26.2854 24.8489 26.1696 24.6007 25.9214L20.795 22.1156L16.9892 25.9214C16.741 26.1696 16.4266 26.2854 16.1122 26.2854C15.7978 26.2854 15.4834 26.1696 15.2352 25.9214C15.0044 25.6878 14.875 25.3727 14.875 25.0444C14.875 24.716 15.0044 24.4009 15.2352 24.1674L19.041 20.3616L15.2352 16.5558C15.0044 16.3223 14.875 16.0072 14.875 15.6788C14.875 15.3505 15.0044 15.0354 15.2352 14.8018C15.7151 14.322 16.5093 14.322 16.9892 14.8018L20.795 18.6076L24.6007 14.8018C25.0806 14.322 25.8749 14.322 26.3547 14.8018C26.8346 15.2817 26.8346 16.076 26.3547 16.5558L22.5489 20.3616L26.3547 24.1674Z"
                          fill="#364154"
                        />
                      </svg></abbr>
                      <button className="DeleteBtn">Delete Item</button>
                    </div>
                  </div>
                ))}
                <div className="SubTotal">
                  <h4>Sub total</h4>
                  <h4>1000/-</h4>
                </div>
                <div className="Confirmation">
                  <button className="BackArrows" >
                    <svg
                      width="39"
                      height="32"
                      viewBox="0 0 39 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5289 7.73853L5.67877 15.6597L15.5289 23.5808M33.2656 15.6597H5.95464"
                        stroke="#2F455C"
                        stroke-width="3"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <h4>Back</h4>
                  </button>
                  <button className="ProceedArrow">
                    <h4>Place an Order</h4>
                    <svg
                      width="33"
                      height="31"
                      viewBox="0 0 33 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.8412 7.65967L28.1875 15.5001L19.8412 23.3405M4.8125 15.5001H27.9537"
                        stroke="#2F455C"
                        stroke-width="3"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewFooter />
    </div>
  );
};

export default YourCartPage;
