import "./App.css";

// import Homepage from "./components/pages/homePage/Homepage";
// import AboutPage from "./components/MainPages/AboutPage/AboutPage";
// import ProductPage from "./components/MainPages/ProductPage/ProductPage";
// import ProductPage from "./components/MainPages/ProductPage/ProductPage";
// import GalleryPage from "./components/MainPages/GalleryPage/GalleryPage";
import ContactUSContext from "./components/MainPages/ContactUsPage/ContactUsContext/ContactUSContext";
import ContactUsPage from "./components/MainPages/ContactUsPage/ContactUsPage";
import CheckStatusPage from "./components/MainPages/CheckStatusPage/CheckStatus";
import YourCartPage from "./components/MainPages/YourCartPage/YourCartPage";
function App() {
  return (
    <div className="App">
    
      {/* <Homepage /> */}
      {/* <AboutPage/> */}
      {/* <ProductPage/> */}
      {/* <GalleryPage/> */}
      <ContactUSContext>
      <ContactUsPage/>
    



      </ContactUSContext>
     {/* <Cstage1/> */}
     <CheckStatusPage/>
     <YourCartPage/>
      

     
    </div>
  );
}
<div id="root"></div>;

export default App;
