import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";
import NavbarImg from "./image/Logo-Name.png";

const Navbar = () => {
  return (
    <div className="NavigationBarMainContainer">
      <div className="NavigationBarImage">
        <nav class="navbar navbar-class navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <img src={NavbarImg} alt="" />
            <div>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse mx-auto" id="navbarNav">
                <ul class="navbar-nav">
                  <div className="nav-image"></div>
                  <li class="nav-item">
                    {/* <a class="nav-link" aria-current="page" href="/"> */}
                      {/* <NavLink to="/" class="nav-link active" aria-current="page">  */}
                      <Link to="/" class="nav-link active" aria-current="page"> 
                      Home 
                      </Link>
                      {/* </NavLink> */}
                    {/* </a> */}
                  </li>
                  <li class="nav-item">
                    {/* <a class="nav-link" href="/AboutUs"> */}
                    {/* <NavLink to="/AboutUs" class="nav-link">  */}
                    <Link to="/AboutUs" class="nav-link"> 
                    About Us 
                    </Link>
                    {/* </NavLink> */}
                    {/* </a> */}
                  </li>
                  <li class="nav-item">
                    {/* <a class="nav-link" href="/Gallery"> */}
                    {/* <NavLink to="/Gallery" class="nav-link">  */}
                    <Link to="/Gallery" class="nav-link"> 
                    Gallery 
                    </Link>
                    {/* </NavLink> */}
                    {/* </a> */}
                  </li>
                  <li class="nav-item">
                    {/* <a class="nav-link active" aria-current="page" href="/LoginSignup"> */}
                      {/* <NavLink to="/LoginSignup" class="nav-link active" aria-current="page">  */}
                      <Link to="/LoginSignup" class="nav-link active" aria-current="page"> 
                      Login 
                      </Link>
                      {/* </NavLink> */}
                    {/* </a> */}
                  </li>
                  <li class="nav-item">
                    {/* <a class="nav-link" href="/YourCart"> */}
                    {/* <NavLink to="/YourCart" class="nav-link">  */}
                    <Link to="/YourCart" class="nav-link"> 
                    Your Cart 
                    </Link>
                    {/* </NavLink> */}
                    {/* </a> */}
                  </li>
                  <li class="nav-item">
                    {/* <a class="nav-link" href="/product"> */}
                    {/* <NavLink to="/product" class="nav-link">  */}
                    <Link to="/product" class="nav-link"> 
                    Products 
                    </Link>
                    {/* </NavLink> */}
                    {/* </a> */}
                  </li>
                  
                  <li class="nav-item">
                    {/* <a class="nav-link" href="/contact"> */}
                    {/* <NavLink to="/contact" class="nav-link">  */}
                    <Link to="/contact" class="nav-link"> 
                    Contact Us
                    </Link>
                    {/* </NavLink> */}
                    {/* </a> */}
                  </li>
                </ul>
              </div>
            </div>
              <div className="nav-item-last">
                    {/* <a class="nav-link" href="/">
                      Check Status
                    </a> */}
                    <a href="/CheckStatus"> 
                    <button class="c-button c-button--gooey" id="c-Button">Check Status
  <div class="c-button__blobs">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  </div>
</button></a>
{/* <svg style="display: block; height: 0; width: 0;" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="goo">
      <feGaussianBlur result="blur" stdDeviation="10" in="SourceGraphic"></feGaussianBlur>
      <feColorMatrix result="goo" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" mode="matrix" in="blur"></feColorMatrix>
      <feBlend in2="goo" in="SourceGraphic"></feBlend>
    </filter>
  </defs>
</svg> */}
              </div>

          </div>
        </nav>
      </div>
      <Outlet/>
    </div>
  );
};

export default Navbar;
