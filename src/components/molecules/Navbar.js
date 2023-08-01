import React, { useRef, useState } from "react";
import Image from "../atom/Image";
import logo from "../../images/ZLGA LOGO 1.png";
import closeicon from "../../images/iconoir_cancel.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(true)
  const navref = useRef()

  const handleOptions = ()=>{
   
      if(navref.current.className === "navw navbar-collapse justify-content-lg-center collapse show" ){
        navref.current.className = "navw navbar-collapse justify-content-lg-center collapse"
      setOpen(!open)
    }else {
      setOpen(!open)
      navref.current.className = "navw navbar-collapse justify-content-lg-center collapse show"

      }
      
  }

  return (
    <>
      <nav  className={`navbar ${open ? "nnav" : "nnav2"} sticky-top navbar-expand-lg py-2 px-lg-5`}>
        <div className="w-100  container-fluid d-flex justify-content-between p-0">
          <NavLink to="/" className={`ps-3 ps-lg-0 navbar-brand ${open ? "navtext" : "navtext2"} `}>
            <Image
              src={logo}
              alt="Logo"
              className="logow d-inline-block align-text-center"
            />
            ZL Global Alliance
          </NavLink>
          <button
            className=" navbar-toggler me-3 me-lg-0 border-0  colort"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={()=>setOpen(!open)}
          >
            {open ?<span className="text-dark navbar-toggler-icon"></span>:
            <span className=""><Image src={closeicon} className="closs"/></span>}
          </button>
          <div className=" navw collapse navbar-collapse justify-content-lg-center" ref={navref} id="navbarText">
            <ul className=" navbar-nav mb-2 mb-lg-0">
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
                    <NavLink onClick={handleOptions} className="dropdown-item navv" to="/school">
                      School
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item navv" onClick={handleOptions} to="/medical">
                      Medical Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item navv" onClick={handleOptions} to="/environment">
                      Environmental Management
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link navv" onClick={handleOptions} to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link navv" onClick={handleOptions} to="/store">
                  ZLGA Store
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link navv" onClick={handleOptions} to="/contact">
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
                    <NavLink className="dropdown-item navv" onClick={handleOptions} to="/career">
                      Career
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item navv" onClick={handleOptions} to="/faq">
                      FAQs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item navv" onClick={handleOptions} to="/gallery">
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
