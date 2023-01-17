
import './App.css';
import AboutUs from './components/pages/AboutUsl/AboutUs';
import Homepage from './components/pages/homePage/Homepage';
import Navbar from './components/pages/navbar/Navbar';
import OurServices from './components/pages/OurServicesV1/OurServices';


function App() {
  return (
    <div className="App">
    <Navbar/> 
    <Homepage/>
    <AboutUs/>
    <OurServices/>
   </div>
  );
}
<div id="root"></div>

export default App;