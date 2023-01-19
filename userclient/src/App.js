import "./App.css";
import AboutUs from "./components/pages/AboutUsl/AboutUs";
import Homepage from "./components/pages/homePage/Homepage";
import Navbar from "./components/pages/navbar/Navbar";
import OurServices from "./components/pages/OurServicesV1/OurServices";
// import Footer from "./components/pages/Footer/Footer";
import Footer from "./components/pages/NewFooter/Footer"
import Testimonial from "./components/pages/Testimonial/Testimonial";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <AboutUs />
      <OurServices />
      <Testimonial />
      <Footer />
    </div>
  );
}
<div id="root"></div>;

export default App;
