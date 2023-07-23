import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import "./ProductCards.css";
import YourCartPage from "../../../YourCartPage/YourCartPage"; 
{/* <Route path="/YourCart" exact element={<YourCartPage/>} /> */}

const Product1Cards = () => {

  // let navigate = useNavigate(); 
  // const routeChange = () =>{ 
  //   // let path = "../../../YourCartPage/YourCartPage"; 
  //   let path = useNavigate(); 
  //   navigate(path);
  // }

  // const {productItemDetails}= useProductContext();

  const [cartItems, setCartItems]= useState([]);
  const onAdd = (cards) => {
    const exist = cartItems.find((x)=>x.id===cards.id);
    if(exist){
      setCartItems(
        cartItems.map((x)=>
        x.id === cards.id ? {...exist,qty: exist.qty+1}:x
        )
      )
    }
    else {
      setCartItems([...cartItems, {...cards, qty:1}])
    }
  }



  // const addToCart = ({productDetails}) => {
  //   const {id,Heads,Pricing,Body}= productDetails;
  // }


  const cards = [
    {
      // SVG: PassingSVG(),
      id: "1",
      BodyId: "BlueBase" ,
      TextId: "BlueBaseTextColor",
      buttonId: "BlueBaseButtonColor",
      Heads: "Poster",
      Pricing: "300/-",
      Body: "Understanding clients' goals and feelings, and being able to put themselves in their clients' shoes to create designs that resonate with..... Read More",
    },
    {
      id: "2",
      Heads: "Poster",
      Pricing: "300/-",
      Body: "Understanding clients' goals and feelings, and being able to put themselves in their clients' shoes to create designs that resonate with..... Read More",
    },
    {
      // SVG: PassingSVG(),
      id: "3",
      Heads: "Poster",
      Pricing: "300/-",
      Body: "Understanding clients' goals and feelings, and being able to put themselves in their clients' shoes to create designs that resonate with..... Read More",
    },
    {
      //   SVG: PassingSVG(),
      id: "4",
      Heads: "Poster",
      Pricing: "300/-",
      Body: "Understanding clients' goals and feelings, and being able to put themselves in their clients' shoes to create designs that resonate with..... Read More",
    },
    {
      // SVG: PassingSVG(),
      id: "5",
      Heads: "Poster",
      Pricing: "300/-",
      Body: "Understanding clients' goals and feelings, and being able to put themselves in their clients' shoes to create designs that resonate with..... Read More",
    },
  ];
  return (
    <div className="ProductCardsContainer">
      <div className="container">
    <h1>Corporate Branding</h1>
    <div className=" " >
        {cards.map((card, i) => (
          <div key={i} className="SingleCards" id={card.BodyId}>
            <div className="CardHead">
              <div className="ProductSubHead">
                <div className="ProductSVG" id={card.buttonId}>{cards.SVG}</div>
                <h3 id={card.TextId}>{card.Heads}</h3>
              </div>
              <h5 id={card.TextId}>{card.Pricing}</h5>
            </div>
            <div className="CardBody" id={card.TextId}><p>{card.Body}</p></div>
            <div className="CardBase">
              <div className="BaseButton" id={card.buttonId}><p>Learn More</p></div>
              <div className="AddToCartButton">
                  <NavLink to="/yourcart" >
                <button class="icon-btn add-btn" id={card.buttonId}>
                  <div class="add-icon"></div>
                  <div class="btn-txt" id={card.buttonId} ><p>Add To Cart</p></div>
                </button></NavLink>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};
export default Product1Cards;
