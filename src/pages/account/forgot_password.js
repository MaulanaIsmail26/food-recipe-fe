import React from "react";
import { Link } from "react-router-dom";
import "../../styles/account/forgot_password.css";

function forgotPassword() {
  return (
    <div id="forgot-password">
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
                  <h6>Forgot Password?</h6>
                  <p className="mt-3">
                    We just need your registered e-mail address
                    <br />
                    to send your password resend
                  </p>
                </div>
                {/* <!-- FORM REGISTER --> */}
                <div className="form mt-3">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label mt-3"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="form-control email"
                    id="exampleFormControlInput1"
                    placeholder="examplexxx@gmail.com"
                  />
                </div>
                <div className="text-center send-email">
                  <Link
                    to="/code-reset-password"
                    className="text-decoration-none text-light"
                  >
                    <button type="button" className="btn btn-warning">
                      Send E-mail
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

export default forgotPassword;
