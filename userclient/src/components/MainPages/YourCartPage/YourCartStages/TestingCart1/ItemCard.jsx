import React, { useContext, useState } from "react";
import PosterImage from "../../Images/Poster.jpeg";
import { TestingCartItem } from "./TestingCartItem";
import { CartContext } from "./TestingCart1";
import { multiStepContactContext } from "../../YourCartPage";
// import map from "";
// import reduce from "";
// import setItems from "";
// import RemoveItem from "";


const ItemCard = ({id, Image, name, text, price, quantity})  =>{
  const {RemoveItem, increment} = useContext(multiStepContactContext);
    const [totalPrice, setTotalPrice] = useState(0);
    // const price="300";

  const handleQuantityChange = (itemId, newQuantity) => {
    // const newItems = map((item) => {
    //   if (id === itemId) {
    //     return {
    //       ...item,
    //       quantity: newQuantity,
    //     };
    //   }
    //   return item;
    // });
    // setItems(newItems);
    // calculateTotalPrice(newItems);
  };
  const calculateTotalPrice = (items) => {
    // const totalPrice = reduce((total, item) => {
    //   return total + price * quantity;
    // }, 0);
    // setTotalPrice(totalPrice);
  };

  const [counter, setCounter] = useState(1);
    const [ProductValue, setPrice] = useState(counter)
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
  // const TotalValue = () => {
  //   // const TotalAmount = 2*300;
  //   let totalAmount = counter*price;
  //   return totalAmount;
  // }

  console.log(name,quantity);
  

    return (
        <div>
                <div className="Item1">
                  <div className="ImageBg">
                    <img src={Image} alt="" />
                    {/* <img src={PosterImage} alt="" /> */}
                  </div>
                  <div className="Cart-Item-Content">
                    <div className="CartDetails">
                      <h4>{name} - {id}</h4>
                      {/* <h4>Poster</h4> */}
                      <p>{text}</p>
                      {/* <p>1.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, tandard dummy text ever since the 1500s</p> */}
                    </div>
                    <div className="HorizontalLine"></div>

                    <div className="QuantityContainer">
                      <div className="QuantityBox">
                        <h6>Quantity</h6>
                        <div className="QuantityButton">
                          <button type="button" id="QuantButt">
                              {" "}
                              <svg
                              onClick={() => RemoveItem(id)}
                              // onClick={handleSub}
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
                          {/* <h6>{card.quantity}</h6> */}
                          <h6>{quantity}</h6>
                          <button id="QuantButt">
                              {" "}
                              <svg
                                onClick={()=>increment(id)}
                                // onClick={handleAdd}
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
                          {/* <h6>{card.Price}</h6> */}
                          {/* <h6>{ProductValue}</h6> */}
                          <h6>{counter*price}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Delete-Button">
                    <button class="DeleteSVG" 
                    onClick={()=>{RemoveItem(id)}}
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
             
        </div>
    )
}

export default ItemCard;