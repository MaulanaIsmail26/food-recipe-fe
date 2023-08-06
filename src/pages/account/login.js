import React from "react";
import { Link } from "react-router-dom";
import "../../styles/account/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [isError, setIsError] = React.useState(false);
  let [errMsg, setErrMsg] = React.useState("");
  let [isLoading, setIsLoading] = React.useState(false);

  // check if already login
  React.useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    const token = localStorage.getItem("token");

    if (isLogin && token) {
      navigate("/");
    }
  });

  return (
    <div id="login-page">
      <section className="container-fluid">
        <div className="container clearfix">
          <div id="login" className="row">
            {/* <!-- SIDE-LEFT --> */}
            <div className="col-sm-6 col-12 d-flex justify-content-center align-items-center side-left">
              <div className="logo-app">
                <img src="../asset/logo.png" alt="placeholder" />
                <p className="text-center">FoodRec</p>
              </div>
            </div>
            {/* <!-- END OF SIDE-LEFT --> */}

            {/* <!-- SIDE-RIGHT --> */}
            <div className="col-sm-6 col-12 py-sm-0 py-5 d-flex justify-content-center align-items-center side-right">
              <div className="">
                {/* <!-- Title --> */}
                <div className="title text-center">
                  <h3 className="fw-semibold">Welcome</h3>
                  <p className="mt-sm-2 mt-1">Log in into your exiting account</p>
                </div>

                {/* <!-- form login --> */}
                <div className="form-login mt-3">
                  {isError ? (
                    <div
                      className="alert alert-danger text-center"
                      role="alert"
                      style={{ fontSize: "13px", padding: "13px" }}
                    >
                      {errMsg}
                    </div>
                  ) : null}

                  <label for="input-email" className="form-label">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="form-control email"
                    id="input-email"
                    placeholder="examplexxx@gmail.com"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <label for="input-password" className="form-label mt-3">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control password"
                    id="input-password"
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
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
                  <Link className="text-decoration-none text-light">
                    <button
                      type="button"
                      className="btn btn-warning"
                      disabled={isLoading}
                      onClick={() => {
                        setIsLoading(true);
                        axios
                          .post(
                            `${process.env.REACT_APP_URL_BACKEND}auth/login`,
                            {
                              email,
                              password,
                            }
                          )
                          .then((res) => {
                            localStorage.setItem("isLogin", "true");
                            localStorage.setItem(
                              "token",
                              res?.data?.data?.token ?? ""
                            );
                            localStorage.setItem(
                              "profile",
                              JSON.stringify(res?.data?.data?.profile)
                            );
                            navigate("/");
                          })
                          .catch((err) => {
                            setIsError(true);
                            if (
                              err?.response?.data?.message?.password?.message
                            ) {
                              setErrMsg(
                                err?.response?.data?.message?.password
                                  ?.message ?? "System error, try again later"
                              );
                            } else if (
                              err?.response?.data?.message?.email?.message
                            ) {
                              setErrMsg(
                                err?.response?.data?.message?.email?.message ??
                                  "System error, try again later"
                              );
                            } else if (err?.response?.data?.message) {
                              setErrMsg(
                                err?.response?.data?.message ??
                                  "System error, try again later"
                              );
                            } else {
                              setErrMsg("System error, try again later");
                            }
                            // console.log(err);
                          })
                          .finally(() => setIsLoading(false));
                      }}
                    >
                      {isLoading ? "Loading..." : "Login"}
                    </button>
                  </Link>
                </div>
                <div className="question">
                  <p>
                    <Link to="/forgot-password" className="forget-password">
                      Forgot Password ?
                    </Link>
                  </p>
                  <p className="text-center question-signup" style={{fontSize: "11px", marginTop: "-5px"}}>
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

export default Login;
