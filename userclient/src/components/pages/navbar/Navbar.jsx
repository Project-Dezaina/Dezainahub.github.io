import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";
import NavbarImg from "./image/Logo-Name.png";
import { useAuth0 } from "@auth0/auth0-react";

// const isActive = "home";
// const [isActive,setActive] = useState("home")
const Navbar = () => {
  const { user, isAuthenticated, isLoading, logout, loginWithRedirect } = useAuth0();
  const [isActive,setActive] = useState("home");
  return (
    <div className="NavigationBarMainContainer" data-aos="fade-up">
      <div className="NavigationBarImage">
        <nav class="navbar navbar-class navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <img src={NavbarImg} alt="" />
            <div className="nav-list-items">
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
              <div class="nav-list-items-inner collapse navbar-collapse mx-auto" id="navbarNav">
                <ul class="navbar-nav">
                  <div className="nav-image"></div>
                  <li class="nav-item">
                    {/* <a class="nav-link" aria-current="page" href="/"> */}
                    {/* <NavLink to="/" class="nav-link active" aria-current="page">  */}
                    <Link to="/" class="nav-link"  aria-current="page">
                    {/* className={`${isActive === "home" ? 'btn__nav-bar-btn active-link' : 'btn__nav-bar-btn'}`} */}
                      <button className={`${isActive === "home" ? 'Active-Nav-Btn active' : 'Non-Active-Nav-Btn'}`} onClick={() => setActive("home")}>Home</button>
                    </Link>
                    {/* </NavLink> */}
                    {/* </a> */}
                  </li>
                  <li class="nav-item">
                    {/* <a class="nav-link" href="/AboutUs"> */}
                    {/* <NavLink to="/AboutUs" class="nav-link">  */}
                    <Link to="/AboutUs" class="nav-link">
                      <button className={`${isActive === "AboutUs" ? 'Active-Nav-Btn active' : 'Non-Active-Nav-Btn'}`} onClick={() => setActive("AboutUs")}>About Us</button>
                    </Link>
                    {/* </NavLink> */}
                    {/* </a> */}
                  </li>
                  <li class="nav-item">
                    {/* <a class="nav-link" href="/Gallery"> */}
                    {/* <NavLink to="/Gallery" class="nav-link">  */}
                    <Link to="/Gallery" class="nav-link">
                      <button className={`${isActive === "Gallery" ? 'Active-Nav-Btn active' : 'Non-Active-Nav-Btn'}`} onClick={() => setActive("Gallery")}>Gallery</button>
                    </Link>
                    {/* </NavLink> */}
                    {/* </a> */}
                  </li>

                  <li class="nav-item">
                    {/* <a class="nav-link" href="/YourCart"> */}
                    {/* <NavLink to="/YourCart" class="nav-link">  */}
                    <Link to="/YourCart" class="nav-link">
                      <button className={`${isActive === "YourCart" ? 'Active-Nav-Btn active' : 'Non-Active-Nav-Btn'}`} onClick={() => setActive("YourCart")}>Your Cart</button>
                    </Link>
                    {/* </NavLink> */}
                    {/* </a> */}
                  </li>
                  <li class="nav-item">
                    {/* <a class="nav-link" href="/product"> */}
                    {/* <NavLink to="/product" class="nav-link">  */}
                    <Link to="/product" class="nav-link">
                      <button className={`${isActive === "product" ? 'Active-Nav-Btn active' : 'Non-Active-Nav-Btn'}`} onClick={() => setActive("product")}>Products</button>
                    </Link>
                    {/* </NavLink> */}
                    {/* </a> */}
                  </li>

                  <li class="nav-item">
                    {/* <a class="nav-link" href="/contact"> */}
                    {/* <NavLink to="/contact" class="nav-link">  */}
                    <Link to="/contact" class="nav-link">
                      <button className={`${isActive === "contact" ? 'Active-Nav-Btn active' : 'Non-Active-Nav-Btn'}`} onClick={() => setActive("contact")}>Contact Us</button>
                    </Link>
                    {/* </NavLink> */}
                    {/* </a> */}
                  </li>
                  {/* <li class="nav-item"> */}
                    {/* <a class="nav-link active" aria-current="page" href="/LoginSignup"> */}
                    {/* <NavLink to="/LoginSignup" class="nav-link active" aria-current="page">  */}
                    
                    {/* </NavLink> */}
                    {/* </a> */}
                  {/* </li> */}
                </ul>
              </div>
            </div>
            <div className="nav-item-last">
              {
                isAuthenticated ? ( 
                  <div className="AfterLoginButton" >
                  <Link to="/CheckStatus">
                <button class="AfterLoginButton-Button" id="AfterLoginButton-Button">
                <span>
                  Check Status
                  </span>
                </button>
              </Link>
              <Link >
                <button class="AfterLoginButton-Button" id="AfterLoginButton-Button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  <span>
                  Logout
                  </span>
                </button>
              </Link>
                  </div>
                  ):(
                    <div className="Main-LoginButton">
                    <Link
                      // to="/LoginSignup"
                      class="nav-link active"
                      aria-current="page"
                      onClick={() => loginWithRedirect()}
                    >
                    <button className="Login-Main-Button">
                    <span>
                      Login
                    </span>
                    </button>
                    </Link>
                    </div>
                  )
              }
             
              
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
