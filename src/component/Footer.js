import React from 'react';
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-column">
            <h4>Start Bootstrap</h4>
            <p>Free & premium UI tools to help you build better websites</p>
          </div>
          <div className="col-lg-3 col-md-6 footer-column">
            <h6>PRODUCT</h6>
            <ul className="list-unstyled">
              <li><a href="#">Theme</a></li>
              <li><a href="#">Template</a></li>
              <li><a href="#">Snippets</a></li>
              <li><a href="#">Guides</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-column">
            <h6>RESOURCES</h6>
            <ul className="list-unstyled">
              <li>Blog</li>
              <li>Bootstrap</li>
              <li>SB Angular</li>
            
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-column">
            <h6>SUPPORT</h6>
            <ul className="list-unstyled">
              <li>Knowledge base</li>
              <li>Custom Developement</li>
              
            </ul>
          </div>
        </div>
        <hr />
     
      </div>
    </footer>
  );
};

export default Footer;
