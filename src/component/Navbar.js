import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

function Navbar({ user }) {
  return (
    <nav className="navbar navbar-expand-xl navbar-light" id="neubar">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="../assets/logo1.png" height="60" alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse p-2" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link mx-2" aria-current="page" href="#">
                Themes{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">
                Template
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">
                Bundles
              </a>
            </li>
            <Link to='/form'>
            <li className="nav-item">
              <a className="nav-link mx-2 " href="#">
                Forms
              </a>
            </li>
            </Link>
           
            <li className="nav-item ">
              <a className="nav-link mx-2" href="/resorce">
                Resources
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link mx-2" aria-current="page" href="#">
                Blog
              </a>
            </li>
            <Link to="/login">
              <li className="nav-item login mt-1">
                {user ? (
                  <span className="username "><FaUser /> {user}</span>
                ) : (
                  <a
                    className="nav-link mx-2"
                    aria-current="page"
                    href="/login"
                  >
                    Login
                  </a>
                )}
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
