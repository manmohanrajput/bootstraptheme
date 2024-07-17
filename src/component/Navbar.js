import React from 'react';
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-xl navbar-light" id="neubar">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="../assets/logo1.png" height="60" alt="Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse p-2" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link mx-2" aria-current="page" href="#">Themes </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">Template</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">Bundles</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2 " href="#">
                Forms
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link mx-2" href="#">
                Resources
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link mx-2" aria-current="page" href="#">Blog</a>
            </li>
            <li className="nav-item login">
              <a className="nav-link mx-2" aria-current="page" href="#">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
