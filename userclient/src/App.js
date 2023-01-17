
import './App.css';
import AboutUs from './components/pages/aboutUs/AboutUs';
import Homepage from './components/pages/homePage/Homepage';
import Navbar from './components/pages/navbar/Navbar';
// import AboutUs from './components/pages/aboutUs/aboutUs';

function App() {
  return (
    <div className="App">
    <Navbar/> 
    <Homepage/>
    <AboutUs/>
    {/* <AboutUS/> */}
   </div>
  );
}
<div id="root"></div>

export default App;