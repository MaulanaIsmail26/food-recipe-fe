import React from "react";
import { Link } from "react-router-dom";
import "../../styles/account/reset_password.css";

function resetPassword() {
  return (
    <div id="reset-password">
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
                {/* <!-- FORM REGISTER --> */}
                <div className="form mt-3">
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
                <div className="text-center reset-password">
                  <Link to="/login" className="text-decoration-none text-light">
                    <button type="button" className="btn btn-warning">
                      Reset Password
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default resetPassword;
