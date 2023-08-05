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
  const [uploadImg, setUploadImg] = React.useState(null);
  // const [photo, setPhoto] = React.useState("");
  // console.log(photo);

  // React.useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_URL_BACKEND}`)
  //     .then((res) => console.log(res));
  // }, []);

  return (
    <div id="register-page">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            {/* <!-- Left --> */}
            <div className="col-sm-6 col-12 left d-flex justify-content-center align-items-center">
              <div className="logo">
                <img src="../asset/logo.png" alt="" />
                <p className="text-center">FoodRec</p>
              </div>
            </div>

            {/* <!-- right --> */}
            <div className="col-sm-6 col-12 py-sm-5 py-5 right">
              <div className="form-register">
                <div className="text-center title">
                  <h6>Let’s Get Started !</h6>
                  <p className="mt-2">
                    Create new account to access all features
                  </p>
                </div>
                {/* <!-- FORM REGISTER --> */}
                <div className="form mt-3">
                  <div className="btnDiv d-flex justify-content-center align-items-center mb-0">
                    <label
                      className="form-label text-center form-label m-1 form-image bg-body-tertiary d-flex justify-content-center align-items-center rounded-circle"
                      for="customFile1"
                      style={{
                        backgroundImage: `url(${uploadImg})`,
                        backgroundSize: "cover",
                      }}
                    >
                      {uploadImg === null ? "Choose Your Photo Profile " : null}
                    </label>
                    <input
                      type="file"
                      className="form-control d-none"
                      id="customFile1"
                      accept="image/*"
                      onChange={(e) => {
                        setUploadImg(URL.createObjectURL(e.target.files[0]));
                        setPhoto(e.target.files[0]);
                        // console.log(e.target.files[0]);
                        // URL.createObjectURL(e.target.files[0]);
                        // .slice(12, e.target.value.length)
                        // e.target.value.slice(12, e.target.value.length);
                      }}
                    />
                  </div>
                  <div className="alert-error d-flex justify-content-center align-items-center">
                    {isError ? (
                      <div
                        class="alert alert-danger text-center ps-0 pe-0 mb-2"
                        role="alert"
                        style={{
                          fontSize: "13px",
                          border: "0",
                          borderRadius: "5px",
                          marginBottom: "-15px",
                          width: "320px",
                        }}
                      >
                        {errMsg}
                      </div>
                    ) : null}
                  </div>
                  <label
                    for="exampleFormControlInput1"
                    className="form-label mt-0"
                  >
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
                </div>
                <div className="text-center creat-account">
                  <Link to="" className="text-decoration-none text-light">
                    <button
                      type="button"
                      className="btn btn-warning"
                      disabled={isLoading}
                      onClick={() => {
                        setIsLoading(true);
                        setIsError(false);
                        let bodyFormData = new FormData();

                        bodyFormData.append("name", name);
                        bodyFormData.append("email", email);
                        bodyFormData.append("password", password);
                        bodyFormData.append("phone", phoneNumber);
                        bodyFormData.append("photo", photo);

                        axios
                          .post(
                            `${process.env.REACT_APP_URL_BACKEND}users/add`,
                            bodyFormData,
                            {
                              headers: {
                                "Content-Type": "multipart/form-data",
                              },
                            }
                          )
                          .then((res) => {
                            setIsError(false);
                            navigate("/login");
                          })
                          .catch((err) => {
                            setIsError(true);
                            if (err?.response?.data?.message?.name?.message) {
                              setErrMsg(
                                err?.response?.data?.message?.name?.message ??
                                  "System error, try again later"
                              );
                            } else if (
                              err?.response?.data?.message?.email?.message
                            ) {
                              setErrMsg(
                                err?.response?.data?.message?.email?.message ??
                                  "System error, try again later"
                              );
                            } else if (
                              err?.response?.data?.message?.phone?.message
                            ) {
                              setErrMsg(
                                err?.response?.data?.message?.phone?.message ??
                                  "System error, try again later"
                              );
                            } else if (
                              err?.response?.data?.message?.password?.message
                            ) {
                              setErrMsg(
                                err?.response?.data?.message?.password
                                  ?.message ?? "System error, try again later"
                              );
                            } else if (
                              err?.response?.data?.message ===
                              "Cannot read properties of null (reading 'photo')"
                            ) {
                              setErrMsg("Profile photo is required");
                            } else {
                              setErrMsg("System error, try again later");
                            }
                            console.log(err);
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
                {/* STYLE FOR SCROLL BAR BROWSER */}
                <style>
                  {`
                    ::-webkit-scrollbar {
                      width: 0em;
                      height: 0.5em;
                    }
                    ::-webkit-scrollbar-thumb {
                      background-color: rgba(0, 0, 0, 0.2);
                    }
                  `}
                </style>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
