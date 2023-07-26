import React from "react";
import "./GalleryPage.css";
// import Header from "../../pages/navbar/Navbar";
// import NewFooter from "../../pages/NewFooter/Footer";
import GalleryLandingImg from "./Image/9.jpg"
// import InnerImg1 from "./Image/1.jpg"


const GalleryPage = () => {
  const CardImg = [
    {
      "CardImg":"https://heyzine.com/flip-book/5c5560b9f6.html"

    },
    {
      "id":"1",
      "Title":"this is title",
      "CardImg":"https://heyzine.com/flip-book/1ec8079ab0.html"

    },
    
    {
      "CardImg": "https://heyzine.com/flip-book/e6241a10c3.html"

    },
    {
      "CardImg":
        
    "https://heyzine.com/flip-book/21866d6505.html"
                        
  

    },
    {
      "CardImg":
     "https://heyzine.com/flip-book/573aed76dd.html"
  

    }
    
  ]
    return (
        <div>
      {/* <Header /> */}
        <div className= "GalleryPageContent  container">
            <h1>Your Move, In a Good <span>Impactful</span> <br /> way You Like</h1>
           <div className="GallerpageIMG">
                 <img src={GalleryLandingImg} alt="" />
        
            </div>
         <div className="GalleryBtn">
              <button className="GalleryBtn1">Advertising Content</button>
              <button className="GalleryBtn2">Corporate Branding</button>
               <button className="GalleryBtn3">Design Rendering</button>
        </div>
     
        {/* <div data-aos="fade-left"> */}
            {/* <iframe  data-aos="fade-left" src="https://heyzine.com/flip-book/5c5560b9f6.html"></iframe> */}
        
            {/* <iframe  src="https://heyzine.com/flip-book/ebb779089e.html"></iframe> */}
                        
        </div>

        <div className="GalleryPatti">
      {/* <button>Business Card</button>  */}
      <button>Magazine</button> 
      <button>Graphic Novel</button> 
      <button>Pitch Deck</button> 
      {/* <button>Rendering</button>  */}
      <button>Illustrations</button> 
      <button>Table Menu</button> 





      </div>
      
      <div className="GalleryPicsMain">
        <div className="GalleryPics container">
        <div className="ParentImgContainer">
        {
        CardImg.map((data, index) => (
          <div className="GalleryImageBox">
          <div className="GalleryInnerImage">
          <iframe src={data.CardImg}  title={data.Title}  ></iframe>
          {/* <img src={InnerImg1} alt="" /> */}
          </div>

</div>

        ))

        }
          
         
       
          </div>
       
      </div>
    </div>
</div>
        
    );
      
}

export default GalleryPage