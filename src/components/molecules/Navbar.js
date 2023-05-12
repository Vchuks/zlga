import React from "react";
import Image from "../atom/Image";
import logo from "../../images/ZLGA LOGO 1.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar nnav sticky-top navbar-expand-lg bg-white py-3 px-3 px-lg-5">
        <div className="container-fluid d-flex justify-content-between p-0">
          <NavLink to="/" className=" navbar-brand navtext containerw">
            <Image
              src={logo}
              alt="Logo"
              className="logow d-inline-block align-text-center"
            />
            ZL Global Alliance
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navw collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item dropdown ">
                <NavLink
                  className="nav-link dropdown-toggle navv"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Services
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item navv" to="/school">
                      School
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item navv" to="#">
                      Medical Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item navv" to="#">
                      Environmental Management
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link navv" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link navv" to="#">
                  ZLGA Store
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link navv" to="/contact">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle navv"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item navv" to="#">
                      Career
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item navv" to="#">
                      FAQs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item navv" to="#">
                      Gallery
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
