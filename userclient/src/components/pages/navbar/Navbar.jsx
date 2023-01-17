import React from "react";
import "./Navbar.css";
<<<<<<< HEAD
import NavbarImg from "./Image/NavLogo.png";
=======
import NavbarImg from './ImageM/NavLogo.png';
>>>>>>> 0e2229994452802932099cc275977dd2ef78886f
const Navbar = () => {
  return (
    <div className="NavigationBarMainContainer">
      <div className="NavigationBarImage">
        <img src={NavbarImg} alt="" />
      </div>
      <nav class="navbar navbar-class navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
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
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Gallery
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
