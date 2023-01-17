
import './App.css';
import AboutUs from './components/pages/AboutUsl/AboutUs';
import Homepage from './components/pages/homePage/Homepage';
import Navbar from './components/pages/navbar/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/> 
    <Homepage/>
    <AboutUs/>
   </div>
  );
}
<div id="root"></div>

export default App;