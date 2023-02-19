import { lazy, Suspense } from "react";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./components/404ErrorPage/404ErrorPage";
import LazzyLoader from "./components/LazzyLoader/LazzyLoader";
import LoginSignupPage from "./components/MainPages/LoginSignupPage/LoginSignupPage";
import Navbar from "./components/pages/navbar/Navbar";
import NewFooter from "./components/pages/NewFooter/Footer";
// const Homepage = lazy(()=>import("./components/pages/homePage/Homepage"));
// import Homepage from "./components/pages/homePage/Homepage";
// import AboutPage from "./components/MainPages/AboutPage/AboutPage";
import ProductPage from "./components/MainPages/ProductPage/ProductPage";
// import GalleryPage from "./components/MainPages/GalleryPage/GalleryPage";
// import ContactUsPage from "./components/MainPages/ContactUsPage/ContactUsPage";
// import CheckStatusPage from "./components/MainPages/CheckStatusPage/CheckStatus";
import YourCartPage from "./components/MainPages/YourCartPage/YourCartPage";
// import ContactUSContext from "./components/MainPages/ContactUsPage/ContactUsContext/ContactUSContext";
// import ContactUsPage from "./components/MainPages/ContactUsPage/ContactUsPage";
// import CheckStatusPage from "./components/MainPages/CheckStatusPage/CheckStatus";


function App() {
  return (
    // <div className="App">
    // <Suspense
    // fallback={
    //   <>
    //     <LazzyLoader/>
    //   </>
    // }
    // >
    // <Router>
    // {/* {
    //   window.location.pathname !== "./components/MainPages/LoginSignupPage/LoginSignupPage" ? (<NewFooter/>): null 
    // } */}
    //   <Routes>
    //     <Route path="/" element={<Homepage/>} />
    //   </Routes>
    // </Router>
      
    // </Suspense>
    //  {/* <LoginSignupPage/> */}
    //   {/* <Homepage /> */}
    //   {/* <AboutPage/> */}
    //   {/* <ProductPage/> */}
    //   {/* <GalleryPage/> */}
    //   {/* <ContactUsPage/> */}
      
    //  {/* <CheckStatusPage/> */}
    //  {/* <YourCartPage/> */}
      


    // </div>
    // <LazzyLoader/>
    // <ErrorPage/>
    //  {/* <LoginSignupPage/> */}
    //   {/* <Homepage /> */}
    //   {/* <AboutPage/> */}
    //  <ProductPage/> 
    //   {/* <GalleryPage/> */}
    //   {/* <ContactUsPage/> */}
      
    //  {/* <CheckStatusPage/> */}
    <YourCartPage/> 
  );
}
<div id="root"></div>;

export default App;
