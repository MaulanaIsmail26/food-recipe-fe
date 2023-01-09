import React from "react";
import { Link } from "react-router-dom";
import "../../styles/account/code_reset_password.css";

function CodeReset() {
  return (
    <div id="code-reset-password">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            {/* <!-- Left --> */}
            <div className="col left text-center">
              <div className="logo">
                <img src="../asset/logo.png" alt="placeholder" />
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
                    Code 6 Digit
                  </label>
                  <input
                    type="number"
                    className="form-control email"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div className="text-center send-email">
                  <Link
                    to="/reset-password"
                    className="text-decoration-none text-light"
                  >
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

export default CodeReset;
