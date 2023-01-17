import React from "react";
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
                </ul>
              </div>
            </div>
              <div className="nav-item-last">
                    <a class="nav-link" href="/">
                      Check Status
                    </a>
              </div>

          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
