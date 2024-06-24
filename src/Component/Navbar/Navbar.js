import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      
              <nav className="navbar navbar-expand-lg navbar-light mt-4 p-2">
                <div className="container">
                <img src="Smt1.png" height="110px" width="230px" alt="Manjira Logo" />
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                      <li className="nav-item">
                        <Link className="nav-link active ms-3" aria-current="page" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active ms-3" to="/about">About us</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active ms-3" to="/management">Management</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active ms-3" to="/distancelearning">Distance Learning</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active ms-3" to="/careers">Careers</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active ms-3" to="/contact">Contact Us</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active ms-3" to="/blog">Blog</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
         
  );
}

export default Navbar;
