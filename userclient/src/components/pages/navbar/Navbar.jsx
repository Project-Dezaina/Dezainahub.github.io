import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";
import NavbarImg from "./image/Logo-Name.png";
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
  const { user, isAuthenticated, isLoading, logout, loginWithRedirect } = useAuth0();
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
