import React from "react";
import "./GalleryPage.css";
import Header from "../../pages/navbar/Navbar";
import NewFooter from "../../pages/NewFooter/Footer";

const GalleryPage = () => {
    return (
        <div>
            
      <Header />
        
        <div className="GalleryPageContent container">
            <iframe class="fp-iframe" src="https://heyzine.com/flip-book/5c5560b9f6.html"></iframe>
        </div>
        
      <NewFooter />
        </div>
    );
}

export default GalleryPage