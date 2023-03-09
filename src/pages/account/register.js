import React from "react";
import { Link } from "react-router-dom";
import "../../styles/account/register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [photo, setPhoto] = React.useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/640px-Missing_avatar.svg.png"
  );
  const [isError, setIsError] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_BACKEND}`)
      .then((res) => console.log(res));
  }, []);

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
                  <div className="alert-error">
                    {isError ? (
                      <div
                        class="alert alert-danger text-center ps-0 pe-0"
                        role="alert"
                        style={{
                          fontSize: "14px",
                          border: "0",
                          borderRadius: "15px",
                          marginBottom: "-15px",
                        }}
                      >
                        {errMsg}
                      </div>
                    ) : null}
                  </div>
                  <label for="exampleFormControlInput1" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control username"
                    id="inputAddress"
                    placeholder="Name"
                    onChange={(event) => setName(event.target.value)}
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
                    onChange={(event) => setEmail(event.target.value)}
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
                    onChange={(event) => setPhoneNumber(event.target.value)}
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
                    onChange={(event) => setPassword(event.target.value)}
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
                    onChange={(event) => setPassword(event.target.value)}
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
                  <Link to="" className="text-decoration-none text-light">
                    <button
                      type="button"
                      className="btn btn-warning"
                      disabled={isLoading}
                      onClick={() => {
                        setIsLoading(true);

                        axios
                          .post(
                            `${process.env.REACT_APP_URL_BACKEND}users/add`,
                            {
                              name,
                              email,
                              password,
                              phone: phoneNumber,
                              photo:
                                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/640px-Missing_avatar.svg.png",
                            }
                          )
                          .then((res) => {
                            // navigate("/Sign-in");
                          })
                          .catch((err) => {
                            setIsError(true);
                            setErrMsg(
                              err?.response?.data?.message ??
                                "System error, please try again later."
                            );
                            console.log(errMsg);
                          })
                          .finally(() => setIsLoading(false));
                      }}
                    >
                      {isLoading ? "Loading..." : "Sign up"}
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

export default Register;
