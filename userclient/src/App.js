import "./App.css";

// import Homepage from "./components/pages/homePage/Homepage";
// import AboutPage from "./components/MainPages/AboutPage/AboutPage";
// import ProductPage from "./components/MainPages/ProductPage/ProductPage";
// import ProductPage from "./components/MainPages/ProductPage/ProductPage";
// import GalleryPage from "./components/MainPages/GalleryPage/GalleryPage";
import ContactUSContext from "./components/MainPages/ContactUsPage/ContactUsContext/ContactUSContext";
import ContactUsPage from "./components/MainPages/ContactUsPage/ContactUsPage";
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
      

     
    </div>
  );
}
<div id="root"></div>;

export default App;
