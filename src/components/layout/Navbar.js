import React from "react";
import { Link } from "react-router-dom";

import petchaLogo from 'assets/img/brand/logo.png'

function Navbar() {
  const cta_style = {
    fontWeight: "bold",
    background: "var(--bs-gray-dark)",
    color: "rgb(255,255,255)",
    borderRadius: "8px",
    paddingRight: "24px",
    paddingLeft: "24px",
  };

  return (
    <>
      <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
        <div className="container">
          <Link className="navbar-brand logo" to="/">
            {/* <strong>LOGO HERE</strong> */}
            <img src={petchaLogo} height={20} alt="Petcha logo" />
          </Link>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-1"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  FAQs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/quick-setup" style={cta_style}>
                  FIND A ROOMIE
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
