import React from "react";
import "../../styles/home/landing_page.css";

function footer() {
  return (
    <div>
      <footer id="footer" classNameName="footer">
        <div className="footer-top text-center">
          <p className="footer1">Eat, Cook, Repeat</p>
          <p className="footer2">Share your best recipe by uploading here !</p>
        </div>
        <div className="nav-footer">
          <ul className="nav justify-content-center">
            <li className="nav-item me-5">
              <a className="nav-link active" aria-current="page" href="#">
                Product
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link" href="#">
                Company
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link" href="#">
                Learn more
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Get in touch</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default footer;
