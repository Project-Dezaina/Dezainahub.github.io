import React from "react";
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

  




  // const addToCart = ({productDetails}) => {
  //   const {id,Heads,Pricing,Body}= productDetails;
  // }


  const cards = [
    {
      // SVG: PassingSVG(),
      buttonid: "1",
      BodyId: "BlueBase" ,
      TextId: "BlueBaseTextColor",
      buttonId: "BlueBaseButtonColor",
      Heads: "Poster",
      Pricing: "300/-",
      Body: "Understanding clients' goals and feelings, and being able to put themselves in their clients' shoes to create designs that resonate with..... Read More",
    },
    {
      buttonid: "2",
      Heads: "Poster",
      Pricing: "300/-",
      Body: "Understanding clients' goals and feelings, and being able to put themselves in their clients' shoes to create designs that resonate with..... Read More",
    },
    {
      // SVG: PassingSVG(),
      buttonid: "3",
      Heads: "Poster",
      Pricing: "300/-",
      Body: "Understanding clients' goals and feelings, and being able to put themselves in their clients' shoes to create designs that resonate with..... Read More",
    },
    {
      //   SVG: PassingSVG(),
      buttonid: "4",
      Heads: "Poster",
      Pricing: "300/-",
      Body: "Understanding clients' goals and feelings, and being able to put themselves in their clients' shoes to create designs that resonate with..... Read More",
    },
    {
      // SVG: PassingSVG(),
      buttonid: "5",
      Heads: "Poster",
      Pricing: "300/-",
      Body: "Understanding clients' goals and feelings, and being able to put themselves in their clients' shoes to create designs that resonate with..... Read More",
    },
  ];
  return (
    <div className="ProductCardsContainer">
      <div className="container">
    <h1>Corporate Branding</h1>
    <div className="ProductCards">
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
