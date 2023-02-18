import React, { useContext } from "react";
import Header from "../../../../pages/navbar/Navbar";
import NewFooter from "../../../../pages/NewFooter/Footer";
import "./CartStage2.css";
import PosterImg from "../../Images/Poster.jpeg";
import BannerImg from "../../Images/Banner.jpeg";
import { multiStepContactContext } from "../../YourCartPage";
// import BannerImg from "./Images/Banner.jpeg";

const CartStage2 = () => {
    
  const {setStep, currentStep} = useContext(multiStepContactContext);
  
  const HandleFinalClick =()=>{
    setStep(3)
  }
  const handlePrevClick = ()=>{
    setStep(1)
}
    
  const CartCards = [
    {
      Image: PosterImg,
      // Quantity: counter,
      Quantity: 2,
      Price: 200,
      title: "Poster",
      text: "1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    
  ];
  return (
    <div className="YourCartMainPage">
      <div className="CartContainer container">
        <div className="CartPageHead">
          <h2>
          Don’t Worry You Don’t Have to Pay Anything Now. You Can Proceed Safely
          </h2>
          <div className="CartPageStatus">
            <div className="CartStatusMain">
              <div className="CartProgressBar" id="CompleteBar"></div>
              <div className="CartStatus1" id="ActiveCartStatus">
                <svg
                  //   width="21"
                  //   height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.25 21.5C15.7141 21.5 16.1592 21.3156 16.4874 20.9874C16.8156 20.6592 17 20.2141 17 19.75C17 19.2859 16.8156 18.8408 16.4874 18.5126C16.1592 18.1844 15.7141 18 15.25 18C14.7859 18 14.3408 18.1844 14.0126 18.5126C13.6844 18.8408 13.5 19.2859 13.5 19.75C13.5 20.2141 13.6844 20.6592 14.0126 20.9874C14.3408 21.3156 14.7859 21.5 15.25 21.5ZM7.25 21.5C7.71413 21.5 8.15925 21.3156 8.48744 20.9874C8.81563 20.6592 9 20.2141 9 19.75C9 19.2859 8.81563 18.8408 8.48744 18.5126C8.15925 18.1844 7.71413 18 7.25 18C6.78587 18 6.34075 18.1844 6.01256 18.5126C5.68437 18.8408 5.5 19.2859 5.5 19.75C5.5 20.2141 5.68437 20.6592 6.01256 20.9874C6.34075 21.3156 6.78587 21.5 7.25 21.5ZM3.84 2.94L3.64 5.39C3.6 5.86 3.97 6.25 4.44 6.25H19.75C20.17 6.25 20.52 5.93 20.55 5.51C20.68 3.74 19.33 2.3 17.56 2.3H5.27C5.17 1.86 4.97 1.44 4.66 1.09C4.16 0.56 3.46 0.25 2.74 0.25H1C0.59 0.25 0.25 0.59 0.25 1C0.25 1.41 0.59 1.75 1 1.75H2.74C3.05 1.75 3.34 1.88 3.55 2.1C3.76 2.33 3.86 2.63 3.84 2.94ZM19.51 7.75H4.17C3.75 7.75 3.41 8.07 3.37 8.48L3.01 12.83C2.97567 13.233 3.02539 13.6388 3.15603 14.0217C3.28666 14.4045 3.49536 14.756 3.7689 15.054C4.04245 15.352 4.37488 15.5899 4.74516 15.7528C5.11544 15.9156 5.5155 15.9998 5.92 16H17.04C18.54 16 19.86 14.77 19.97 13.27L20.3 8.6C20.3095 8.49106 20.2961 8.38133 20.2606 8.27791C20.225 8.17448 20.1682 8.07965 20.0938 7.99955C20.0193 7.91945 19.9289 7.85585 19.8284 7.81287C19.7278 7.76988 19.6193 7.74847 19.51 7.75Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="CartStatusMain">
              <div className="CartProgressBar" id="ActiveBar"></div>
              <div className="CartStatus2" id="ActiveCartStatus">
                <svg
                  // width="24"
                  // height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.9597 8.95793C19.2897 8.21793 18.2797 7.78793 16.8797 7.63793V6.87793C16.8797 5.50793 16.2997 4.18793 15.2797 3.26793C14.7764 2.80648 14.1813 2.45658 13.5333 2.24116C12.8853 2.02575 12.1992 1.94967 11.5197 2.01793C9.12975 2.24793 7.11975 4.55793 7.11975 7.05793V7.63793C5.71975 7.78793 4.70975 8.21793 4.03975 8.95793C3.06975 10.0379 3.09975 11.4779 3.20975 12.4779L3.90975 18.0479C4.11975 19.9979 4.90975 21.9979 9.20975 21.9979H14.7897C19.0897 21.9979 19.8797 19.9979 20.0897 18.0579L20.7897 12.4679C20.8997 11.4779 20.9297 10.0379 19.9597 8.95793ZM11.6597 3.40793C12.1444 3.35925 12.6338 3.41278 13.0965 3.56508C13.5591 3.71737 13.9847 3.96503 14.3456 4.29206C14.7066 4.61909 14.9949 5.01821 15.192 5.46363C15.3891 5.90905 15.4905 6.39086 15.4897 6.87793V7.57793H8.50975V7.05793C8.50975 5.27793 9.97975 3.56793 11.6597 3.40793ZM11.9997 18.5779C9.90975 18.5779 8.20975 16.8779 8.20975 14.7879C8.20975 12.6979 9.90975 10.9979 11.9997 10.9979C14.0897 10.9979 15.7897 12.6979 15.7897 14.7879C15.7897 16.8779 14.0897 18.5779 11.9997 18.5779Z"
                    fill="white"
                  />
                  <path
                    d="M10.9999 16.5781C10.7499 16.5781 10.4999 16.4481 10.3599 16.2181C10.1499 15.8681 10.2599 15.3981 10.6199 15.1881L11.5099 14.6581V13.5781C11.5099 13.1681 11.8499 12.8281 12.2599 12.8281C12.6699 12.8281 12.9999 13.1581 12.9999 13.5781V15.0781C12.9999 15.3381 12.8599 15.5881 12.6399 15.7181L11.3899 16.4681C11.2699 16.5381 11.1299 16.5781 10.9999 16.5781Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="CartStatusMain">
              <div className="CartProgressBar"></div>
              <div className="CartStatus3">
                <svg
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10L8.65882 18L22 2"
                    stroke="#2F455C"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="YourCart">
          <div className="CartNav-Bar-Content">
            <h3>Review Your Cart</h3>
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
                    <div className="HorizontalLine"></div>

                    <div className="QuantityContainer">
                      <div className="QuantityBox">
                        <h6>Quantity</h6>
                        <div className="QuantityButton">
                          {/* <button type="button" id="QuantButt">
                              {" "}
                              <svg
                              onClick={handleSub}
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
                            </button> */}
                          <h6>{card.Quantity}</h6>
                          {/* <h6>{counter}</h6> */}
                          {/* <button id="QuantButt">
                              {" "}
                              <svg
                                onClick={handleAdd}
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
                            </button> */}
                        </div>
                      </div>
                      <div className="PriceBox">
                        <h6>Total Value</h6>
                        <div className="TotalPricing">
                          <h6>{card.Price}</h6>
                          {/* <h6>{ProductValue}</h6> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="SubTotal">
                <h5>Sub total</h5>
                <h5>1000/-</h5>
              </div>
              <div className="Confirmation">
                <button className="BackArrows" onClick={handlePrevClick}>
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

                  <h5>Back</h5>
                </button>
                <button className="ProceedArrow" onClick={HandleFinalClick}>
                  <h5>Place an Order</h5>
                  <svg
                    // color="White"
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
  );
};

export default CartStage2;
