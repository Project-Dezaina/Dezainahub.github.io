import React, { lazy, Suspense } from "react";

// import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Router, Routes, Switch } from "react-router-dom";
import "./App.css";
// import ErrorPage from "./components/404ErrorPage/404ErrorPage";
import LazzyLoader from "./components/LazzyLoader/LazzyLoader";
// import LoginSignupPage from "./components/MainPages/LoginSignupPage/LoginSignupPage";
import Navbar from "./components/pages/navbar/Navbar";
import NewFooter from "./components/pages/NewFooter/Footer";
// const Homepage = lazy(()=>import("./components/pages/homePage/Homepage"));
// import Homepage from "./components/pages/homePage/Homepage";
// import AboutPage from "./components/MainPages/AboutPage/AboutPage";
// import ProductPage from "./components/MainPages/ProductPage/ProductPage";
// import GalleryPage from "./components/MainPages/GalleryPage/GalleryPage";
// import ContactUsPage from "./components/MainPages/ContactUsPage/ContactUsPage";
// import YourCartPage from "./components/MainPages/YourCartPage/YourCartPage";
// import CheckStatusPage from "./components/MainPages/CheckStatusPage/CheckStatus";




// const Landing = React.lazy(() => import("./components/pages/homePage/Homepage"));
const LoginSignupPage = lazy(() => import("./components/MainPages/LoginSignupPage/LoginSignupPage"));
const Homepage = lazy(() => import("./components/pages/homePage/Homepage"));
const AboutPage = lazy(() => import("./components/MainPages/AboutPage/AboutPage"));
const ProductPage = lazy(() => import("./components/MainPages/ProductPage/ProductPage"));
const GalleryPage = lazy(() => import("./components/MainPages/GalleryPage/GalleryPage"));
const ContactUsPage = lazy(() => import("./components/MainPages/ContactUsPage/ContactUsPage"));
const YourCartPage = lazy(() => import("./components/MainPages/YourCartPage/YourCartPage"));
const CheckStatusPage = lazy(() => import("./components/MainPages/CheckStatusPage/CheckStatus"));
const ErrorPage = lazy(() => import("./components/404ErrorPage/404ErrorPage"));




function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
 
  return (
    <div> 


   {/* <div className="App">
    <Suspense
    fallback={
      <>
        <LazzyLoader/>
      </>
    }
    >
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
      </Routes>
    </Router>
      
    </Suspense>
     {/* <LoginSignupPage/> */}
      {/* <Homepage /> */}
      {/* <AboutPage/> */}
      {/* <ProductPage/> */}
      {/* <GalleryPage/> */}
      {/* <ContactUsPage/> */}
      
     {/* <CheckStatusPage/> */}
     {/* <YourCartPage/> */}
      


    {/* </div>  */}

<Suspense
    fallback={
      <div>
        <LazzyLoader/>
        {/* <h1>please wait...</h1> */}
      </div>
    }
    >
    {/* <Navbar/>
    <Homepage/> */}
    {/* <div> */}
    <BrowserRouter>
    {/* <Switch> */}
    <Navbar/>
     <Routes>
        <Route path="/" exact element={<Homepage />}/> 
          <Route path="/Gallery" exact element={<GalleryPage/>} />
          <Route path="/YourCart" exact element={<YourCartPage/>} />
          <Route path="/AboutUs" exact element={<AboutPage/>} />
          <Route path="/LoginSignup" exact element={<LoginSignupPage/>} />
          <Route path="/contact" exact element={<ContactUsPage/>} />
          <Route path="/CheckStatus" exact element={<CheckStatusPage/>} />
          <Route path="/product" exact element={<ProductPage/>} />
          <Route path="*" exact element={<ErrorPage/>} />
        {/* </Route> */}
      </Routes>
      <NewFooter/>
      {/* </Switch> */}
    </BrowserRouter>
      {/* </div> */}
    </Suspense> 



    {/* // <LazzyLoader/>
    // <ErrorPage/> */}
{/* <LoginSignupPage/> */}
  {/* <Homepage /> */}
    {/* <AboutPage/> */}
    {/* //  <ProductPage/>  */}
   {/* <GalleryPage/> */}
   {/* <ContactUsPage/> */}
      
    {/* <CheckStatusPage/> */}
    {/* // <YourCartPage/>  */}

    </div>
  );
}
<div id="root"></div>;

export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
<App />
</BrowserRouter>
)
