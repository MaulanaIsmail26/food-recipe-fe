import React from "react";
import "../../styles/home/landing_page.css";

function footer() {
  return (
    <div>
      <footer className="container-fluid footer">
        {/* MAIN CONTENT */}
        <div className="row footerContent">
          <div className="col-12">
            <h5>Eat, Cook, Repeat</h5>
            <p>Share your best recipe by uploading here !</p>
            <p className="copyright">
              &#169; 2023 Maulana Ismail. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default footer;
