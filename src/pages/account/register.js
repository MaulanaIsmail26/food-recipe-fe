import React from "react";
import { Link } from "react-router-dom";
import "../../styles/account/register.css";

function register() {
  return (
    <div id="register-page">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            {/* <!-- Left --> */}
            <div className="col left text-center">
              <div className="logo">
                <img src="../asset/logo.png" alt="" />
              </div>
              <div className="mt-2 name">
                <p>Mama Recipe.</p>
              </div>
            </div>

            {/* <!-- right --> */}
            <div className="col right">
              <div className="form-register">
                <div className="text-center title">
                  <h6>Let’s Get Started !</h6>
                  <p className="mt-2">
                    Create new account to access all features
                  </p>
                </div>
                {/* <!-- FORM REGISTER --> */}
                <div className="form mt-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control username"
                    id="inputAddress"
                    placeholder="Name"
                  />
                  <label
                    for="exampleFormControlInput1"
                    className="form-label mt-3"
                  >
                    Email address*
                  </label>
                  <input
                    type="email"
                    className="form-control email"
                    id="exampleFormControlInput1"
                    placeholder="Enter email address"
                  />
                  <label
                    for="exampleFormControlInput1"
                    className="form-label mt-3"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    className="form-control phone"
                    id="inputAddress"
                    placeholder="08xxxxxxxxxx"
                  />
                  <label
                    for="exampleFormControlInput1"
                    className="form-label mt-3"
                  >
                    Create New Password
                  </label>
                  <input
                    type="password"
                    className="form-control password"
                    id="inputAddress"
                    placeholder="Create New Password"
                  />
                  <label
                    for="exampleFormControlInput1"
                    className="form-label mt-3"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control password"
                    id="inputAddress"
                    placeholder="New Password"
                  />
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    I agree to terms & conditions
                  </label>
                </div>
                <div className="text-center creat-account">
                  <Link to="/" className="text-decoration-none text-light">
                    <button type="button" className="btn btn-warning">
                      Register Account
                    </button>
                  </Link>
                </div>
                <p className="question text-center">
                  Already have account? <Link to="/login">Log in Here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default register;
