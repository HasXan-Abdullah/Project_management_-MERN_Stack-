import React from 'react'
import { Link } from 'react-router-dom';
import "./nav.css";
const LandingNavber = () => {
  return (
    <div>
      <nav id="navbar-example2" className="navbar navbar-light">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <span className='logo'>Logo</span>
          </Link>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading1">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading2">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading3">
                Servies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading4">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default LandingNavber