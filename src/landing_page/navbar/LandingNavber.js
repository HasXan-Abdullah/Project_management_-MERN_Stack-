import React from 'react'
import { Link } from 'react-router-dom';
import "./nav.css";
import perfectlogo from '../../assets/images/whlogo.png';
const LandingNavber = () => {
  return (
    <div>
      <nav id="navbar-example2" className="navbar navbar-expand-lg">
        <div className="container">
          
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
            className="collapse navbar-collapse justify-content-center " 
            id="navbarNav"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Features
                </a>
              </li>

              <a className="navbar-brand logo" href="#home"> 
              <img width="115px" src={perfectlogo} alt="logo" />  
          </a>

              <li className="nav-item">
                <a className="nav-link" href="#benefits">
                  Benefits
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#tools">
                  Tools
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