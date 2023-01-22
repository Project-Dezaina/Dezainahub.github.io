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
                    {/* <a class="nav-link" href="/">
                      Check Status
                    </a> */}
                    <button class="c-button c-button--gooey"> Check Status
  <div class="c-button__blobs">
  <div></div>
  <div></div>
  <div></div>
  </div>
</button>
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
    </div>
  );
};

export default Navbar;
