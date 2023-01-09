import React from "react";
import { Link } from "react-router-dom";
import "../../styles/account/login.css";

function login() {
  return (
    <div id="login-page">
      <section className="container-fluid">
        <div className="container clearfix">
          <div id="login" className="row">
            {/* <!-- SIDE-LEFT --> */}
            <div className="col-6 position-relative side-left">
              <div className="position-absolute top-50 start-50 translate-middle logo-app">
                <img src="../asset/logo.png" alt="placeholder" />
                <p>Mama Recipe.</p>
              </div>
            </div>
            {/* <!-- END OF SIDE-LEFT --> */}

            {/* <!-- SIDE-RIGHT --> */}
            <div className="col-6 bg-light position-relative side-right">
              <div className="position-absolute top-50 start-50 translate-middle">
                {/* <!-- Title --> */}
                <div className="title text-center">
                  <h3 className="fw-semibold text-warning">Welcome</h3>
                  <p className="mt-3">Log in into your exiting account</p>
                </div>
                {/* <!-- form login --> */}
                <div className="form-login mt-3">
                  <label for="input-email" className="form-label mt-3">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="form-control email"
                    id="input-email"
                    placeholder="examplexxx@gmail.com"
                  />
                  <label for="input-password" className="form-label mt-3">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control password"
                    id="input-password"
                    placeholder="Password"
                  />
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="checkbox"
                  />
                  <label className="form-check-label" for="checkbox">
                    I agree to terms & conditions
                  </label>
                </div>
                {/* <!-- button login | signup --> */}
                <div className="text-center login">
                  <Link to="/" className="text-decoration-none text-light">
                    <button type="button" className="btn btn-warning">
                      Login
                    </button>
                  </Link>
                </div>
                <div className="question">
                  <p>
                    <Link to="/forgot-password" className="forget-password">
                      Forgot Password ?
                    </Link>
                  </p>
                  <p className="text-center question-signup">
                    Don’t have an account?
                    <Link to="/register">Sign Up</Link>
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- END OF SIDE-RIGHT --> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default login;
