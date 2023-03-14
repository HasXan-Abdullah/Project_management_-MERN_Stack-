import React from 'react'
import { Link } from 'react-router-dom';
import "./nav.css";
import logo from '../../assets/images/logo.png';
const LandingNavber = () => {
  return (
    <div>
      <nav id="navbar-example2" className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand logo" href="#scrollspyHeading1">
            <img width="100px" src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading1">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading2">
                  Team
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading3">
                  Features
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading4">
                  Contact Us
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default LandingNavber