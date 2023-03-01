import React, { useContext,createContext, useState, useReducer, useEffect } from "react";
import Header from "../../../../pages/navbar/Navbar";
import NewFooter from "../../../../pages/NewFooter/Footer";
import "./TestingCart1.css";
import PosterImg from "../../Images/Poster.jpeg";
import BannerImg from "../../Images/Banner.jpeg";
import { multiStepContactContext } from "../../YourCartPage";
import { TestingCartItem } from "./TestingCartItem";
import ItemCard from "./ItemCard";
import { reducer } from "./reducer";
// import BannerImg from "./Images/Banner.jpeg";

// export const CounterValue = useState(counter)

export const CartContext = createContext();

const initialState = {
  items: TestingCartItem,
  totalValue:0,
  totalItem:0,
}






const TestingCart1 = () => {
  const [items, setItems] = useState(TestingCartItem);
  // const items = useContext(CartContext)
  const [state, dispatch] = useReducer(reducer, initialState);


  const RemoveItem = (id) => {
    return dispatch({
      type:"REMOVE_ITEM",
      payload:id,
    });
  }

  const increment = (id) => {
    return dispatch({
      type:"INCREMENT",
      payload: id 
    })

  }

  // useEffect(()=>{
  //   dispatch({type:"GET_TOTAL"})
  // }, [state.item])

  // const totalPrice = () => {

    // item.id*
    
    // price = {price};
    // cartTotal= 0 ;
    // for(var i = 0; i <= items.id; i++)
    // {
    //     cartTotal += price[i];
    // }
    // cartTotal = cartTotal;  
  // }


  // const [totalPrice, setTotalPrice] = useState(0);

  // const handleQuantityChange = (itemId, newQuantity) => {
  //   const newItems = items.map((item) => {
  //     if (item.id === itemId) {
  //       return {
  //         ...item,
  //         quantity: newQuantity,
  //       };
  //     }
  //     return item;
  //   });
  //   setItems(newItems);
  //   calculateTotalPrice(newItems);
  // };

  // const calculateTotalPrice = (items) => {
  //   const totalPrice = items.reduce((total, item) => {
  //     return total + item.price * item.quantity;
  //   }, 0);
  //   setTotalPrice(totalPrice);
  // };

  //   const CalculatePrice = (items) => {
  //     const TIPrice = items.reduce((item) => {
  //         for (i = 0; i <= item.quantity; i++) {
              // text += cars[i] + "<br>";
              // quant =
        //     }
        // }, 0);
        // return TIPrice;
      // for (i = 0; i <= item.quantity; i++) {
          // text += cars[i] + "<br>";

      //   }
    // }

  const { setStep, currentStep } = useContext(multiStepContactContext);

  const handleNextClick = () => {
    setStep(2);
  };
  const handlePrevClick = () => {
    setStep(1);
  };

  const [counter, setCounter] = useState(1);
  //   const [ProductValue, setPrice] = useState(counter)
  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const handleSub = () => {
    // const newItems = items.map(item => {
    //     // if (item.id === Pid) {

    //     //     if(item.counter>1){
    //     //           setCounter(counter-1)
    //     //         }
    //     //         else{
    //     //           setCounter(counter)
    //     //         }
    //     //   }
    //     if(item.counter>1){
    //           setCounter(item.counter-1)
    //         }
    //         else{
    //           setCounter(item.counter)
    //         }
    //     return item.counter;
    //   });
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      setCounter(counter);
    }
  };

  //   const CartCards = [
  //     {
  //       // id: ,
  //       Image: PosterImg,
  //       Quantity: counter,
  //       title: "Poster",
  //       Price: 500,
  //       text: "1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     },
  //     {
  //       Image: BannerImg,
  //       Quantity: counter,
  //       title: "Banner",
  //       Price: 300,
  //       text: "1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     },
  //   ];
  return (
    <div className="YourCartMainPage">
    {/* <CartContext.Provider value={TestingCartItem}> */}
    <CartContext.Provider value={{...state , RemoveItem, increment}}>
      <div className="CartContainer container">
        <div className="CartPageHead">
          <h2>
            Write briefly description about your projects, regarding which we
            should contact you
          </h2>
          <div className="CartPageStatus">
            <div className="CartStatusMain">
              <div className="CartProgressBar" id="ActiveBar"></div>
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
              <div className="CartProgressBar"></div>
              <div className="CartStatus2">
                <svg
                  //   width="25"
                  //   height="25"

                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.9597 8.95793C19.2897 8.21793 18.2797 7.78793 16.8797 7.63793V6.87793C16.8797 5.50793 16.2997 4.18793 15.2797 3.26793C14.7764 2.80648 14.1813 2.45658 13.5333 2.24116C12.8853 2.02575 12.1992 1.94967 11.5197 2.01793C9.12975 2.24793 7.11975 4.55793 7.11975 7.05793V7.63793C5.71975 7.78793 4.70975 8.21793 4.03975 8.95793C3.06975 10.0379 3.09975 11.4779 3.20975 12.4779L3.90975 18.0479C4.11975 19.9979 4.90975 21.9979 9.20975 21.9979H14.7897C19.0897 21.9979 19.8797 19.9979 20.0897 18.0579L20.7897 12.4679C20.8997 11.4779 20.9297 10.0379 19.9597 8.95793ZM11.6597 3.40793C12.1444 3.35925 12.6338 3.41278 13.0965 3.56508C13.5591 3.71737 13.9847 3.96503 14.3456 4.29206C14.7066 4.61909 14.9949 5.01821 15.192 5.46363C15.3891 5.90905 15.4905 6.39086 15.4897 6.87793V7.57793H8.50975V7.05793C8.50975 5.27793 9.97975 3.56793 11.6597 3.40793ZM11.9997 18.5779C9.90975 18.5779 8.20975 16.8779 8.20975 14.7879C8.20975 12.6979 9.90975 10.9979 11.9997 10.9979C14.0897 10.9979 15.7897 12.6979 15.7897 14.7879C15.7897 16.8779 14.0897 18.5779 11.9997 18.5779Z"
                    fill="#2F455C"
                  />
                  <path
                    d="M10.9999 16.5781C10.7499 16.5781 10.4999 16.4481 10.3599 16.2181C10.1499 15.8681 10.2599 15.3981 10.6199 15.1881L11.5099 14.6581V13.5781C11.5099 13.1681 11.8499 12.8281 12.2599 12.8281C12.6699 12.8281 12.9999 13.1581 12.9999 13.5781V15.0781C12.9999 15.3381 12.8599 15.5881 12.6399 15.7181L11.3899 16.4681C11.2699 16.5381 11.1299 16.5781 10.9999 16.5781Z"
                    fill="#2F455C"
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
            <h3>Your Cart</h3>
          </div>
          <div className="CartContent1">
            <div className="Item-Details">
              {/* {items.map((item, i) => (
                <div key={item.id} className="Item1">
                  <div className="ImageBg">
                    <img src={item.Image} alt="" />
                  </div>
                  <div className="Cart-Item-Content">
                    <div className="CartDetails">
                      <h4>{item.name}</h4>
                      <p>{item.text}</p>
                       </div>
                    <button className="AddMore">+Add More</button>

                    <div className="QuantityContainer">
                      <div className="QuantityBox">
                        <h6>Quantity</h6>
                        <div className="QuantityButton">
                          <button type="button" id="QuantButt">
                            
                          </button>
                          <h6>
                            <input
                              className="QuantityButton"
                              type="number"
                              min="0"
                              value={item.quantity}
                              onChange={(e) =>
                                handleQuantityChange(item.id, e.target.value)
                              }
                            />
                          </h6>
                          <button id="QuantButt">
                            
                          </button>
                        </div>
                      </div>
                      <div className="PriceBox">
                        <h6>Total Value</h6>
                        <div className="TotalPricing">
                          <h6>{item.price * item.quantity}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Delete-Button">
                    <button class="DeleteSVG" 
                    // onClick={RemoveItem(id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        height="25"
                        width="25"
                      >
                        <path
                          fill="#6361D9"
                          d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <button className="DeleteBtn">Delete Item</button>
                  </div>
                </div>
              ))} */}
              {items.map((item, i) => { 
                return <ItemCard key={item.id} {...item}/>
              })}
              <div className="SubTotal" id="TestingSubtotal">
                <h5>Sub total</h5>
                <h5>3750/-</h5>
              </div>
              <div className="Confirmation">
                {/* <button className="BackArrows" onClick={handlePrevClick} >
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
                  </button> */}
                <button className="ProceedArrow" onClick={handleNextClick}>
                  <h5>Confirm Your Order</h5>
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
      </CartContext.Provider>
    </div>
  );
};

export default TestingCart1;
