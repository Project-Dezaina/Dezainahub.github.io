import React from "react";
import "./GalleryPage.css";
import Header from "../../pages/navbar/Navbar";
import NewFooter from "../../pages/NewFooter/Footer";

const GalleryPage = () => {
    return (
        <div>
            
      {/* <Header /> */}
        
        <div className= "GalleryPageContent  container">
        {/* <div data-aos="fade-left"> */}
            <iframe  data-aos="fade-left" src="https://heyzine.com/flip-book/5c5560b9f6.html"></iframe>
        
            <iframe  src="https://heyzine.com/flip-book/ebb779089e.html"></iframe>
                        
        </div>
        {/* </div> */}
        
      {/* <NewFooter /> */}
        </div>
    );
}

export default GalleryPage